package com.luo.hibgen.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.dao.BaseDao;
import com.jite.hibgen.model.TOrgActive;
import com.jite.struts.bean.JobSearch;
import com.jite.utils.SystemPropties;
import com.luo.hibgen.model.THrJobBase;
import com.luo.hibgen.model.TShowHomeworktypes;

public class THrJobBaseDao extends BaseDao<THrJobBase> {
	private static final Log log = LogFactory.getLog(THrJobBase.class);

	/**
	 * 步骤二：查询第1级职位类别的招聘岗位数量
	 * 
	 * @param workTypeRoot
	 * @return
	 */
	public int searchByCriteriaJobCount(String workTypeRoot) {
		log.debug("search THrJobBase instance by criteria");
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();// .openSession()
		try {

			Criteria criteria = session.createCriteria(THrJobBase.class);
			criteria.add(Restrictions.eq("workTypeRoot", workTypeRoot))
					.add(Restrictions.eq("status", "1"));
			criteria.setProjection(Projections.rowCount());
			
			criteria.list();
			
			Long count = (Long) (criteria.uniqueResult());

			return count.intValue();
			// Integer.valueOf(criteria.setProjection(Projections.rowCount()).uniqueResult().toString());

		} catch (RuntimeException re) {
			log.error("searchByCriteriaJobCount by HrJobBaseDao failed", re);
			throw re;
		} finally {
			// 清除Session的缓存，避免内存溢出
			//session.flush();
			//session.clear();
		}
	}

	/**
	 * 步骤三：根据id查询THrJobBase对象（t_hr_job_base表 where id=? 查询）
	 * 
	 * @param id
	 * @return
	 */
	public THrJobBase getByid(Long id) {
		log.debug("search THrJobBase instance by criteria");
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession(); // .openSession();
		try{
			return (THrJobBase) session.get(THrJobBase.class, id);
		}catch (RuntimeException re) {
			log.error("getByid by HrJobBaseDao failed", re);
			throw re;
		} finally {
			// 清除Session的缓存，避免内存溢出
			//session.flush();
			//session.clear();
		}		
	}
	
	/**
	 * "热门行业"模块，步骤三：根据company_id查询THrJobBase对象。
	 */
	public List<THrJobBase> searchByCriteriaByCompanyId(Long companyId,int pageNo, int pageSize) {
		log.debug("search THrJobBase instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
					.createCriteria(THrJobBase.class);

			criteria.add(Restrictions.eq("companyId", companyId));
//			criteria.setProjection(null);
//			criteria.addOrder(Order.asc("rank"));
//			criteria.addOrder(Order.desc("endTime"));
//			criteria.addOrder(Order.desc("updateDate"));
//			criteria.addOrder(Order.desc("createDate"));
			criteria.setFirstResult((pageNo - 1) * pageSize);
			criteria.setMaxResults(pageSize);

			return (List<THrJobBase>) criteria.list();
		} catch (RuntimeException re) {
			log.error("find by company_id failed", re);
			throw re;
		}
	}
	
	/**
	 * 根据搜索条件，搜索符合条件的职位数量
	 * @param jobSearch
	 * @return
	 */
	public int searchBySQLTotal(JobSearch jobSearch) {
		String sql = getSQLFromSearch(jobSearch);

		SQLQuery query = getHibernateTemplate().getSessionFactory().getCurrentSession().createSQLQuery(sql);

		return query.list().size();
	}
	
	/**
	 * 根据搜索条件，生成搜索SQL语句（搜索职位ID）
	 * @param jobSearch
	 * @return
	 */
	private String getSQLFromSearch(JobSearch jobSearch) {
		StringBuffer sql = new StringBuffer(
				"select thjb.id  from  t_hr_job_base thjb " + "left join t_hr_company thc on thjb.company_id=thc.id "
						+ "left join t_hr_company_areas tca on thc.id=tca.company_id " + "where thjb.status=1  ");
		if (jobSearch.getSearchAreaRoot() != null && !"".equals(jobSearch.getSearchAreaRoot())) {
			sql.append(" and (tca.area_name_root like '%" + jobSearch.getSearchAreaRoot() + "%' ) ");
		}
		if (jobSearch.getSearchWorkTypeRoot() != null && !"".equals(jobSearch.getSearchWorkTypeRoot())) {
			sql.append(" and (thjb.work_type_root like '%" + jobSearch.getSearchWorkTypeRoot() + "%' ) ");
		}
		if (jobSearch.getSearchLocation() != null && !"".equals(jobSearch.getSearchLocation())) {
			sql.append(" and (thjb.location like '%" + jobSearch.getSearchLocation() + "%' ) ");
		}
		if (jobSearch.getSearchKey() != null && !"".equals(jobSearch.getSearchKey())) {
			if (jobSearch.getSearchKeyType() == null || "".equals(jobSearch.getSearchKeyType())) {
				sql.append(" and (thc.name like '%" + jobSearch.getSearchKey() + "%' or thjb.name like '%"
						+ jobSearch.getSearchKey() + "%' or thc.short_name like '%" + jobSearch.getSearchKey()
						+ "%' or thjb.description like '%" + jobSearch.getSearchKey() + "%' ) ");
			} else if ("name".equals(jobSearch.getSearchKeyType())) {
				sql.append(" and thjb.name like '%" + jobSearch.getSearchKey() + "%'");
			} else if ("companyName".equalsIgnoreCase(jobSearch.getSearchKeyType())) {
				sql.append(" and (thc.name like '%" + jobSearch.getSearchKey() + "%' or thc.short_name like '%"
						+ jobSearch.getSearchKey() + "%')");
			} else if ("description".equalsIgnoreCase(jobSearch.getSearchKeyType())) {
				sql.append(" and thjb.description like '%" + jobSearch.getSearchKey() + "%'");
			}
		}
		if (jobSearch.getSearchwestplanFlag() != null && jobSearch.getSearchwestplanFlag() == 1) {
			sql.append(" and thjb.westplan_flag =1 ");
		}
		if (jobSearch.getSearchCompanyType() != null && !"".equals(jobSearch.getSearchCompanyType())) {
			sql.append(" and (thc.type like '%" + jobSearch.getSearchCompanyType() + "%' ) ");
		}

		if (jobSearch.getIsHot() != null && jobSearch.getIsHot() == 1) {
			sql.append(" and thjb.is_hot =1");
		}

		if (jobSearch.getSearchAreaSep() != null && !"".equals(jobSearch.getSearchAreaSep())) {
			if (jobSearch.getSearchAreaSep().indexOf("__") >= 0) {
				appendMultArea(sql, jobSearch.getSearchAreaSep());
			} else {
				appendOneArea(sql, jobSearch.getSearchAreaSep());
			}

		}
		if (jobSearch.getSearchWorkTypeSep() != null && !"".equals(jobSearch.getSearchWorkTypeSep())) {
			if (jobSearch.getSearchWorkTypeSep().indexOf("__") >= 0) {
				appendMultWorkType(sql, jobSearch.getSearchWorkTypeSep());
			} else {
				appendOneWorkType(sql, jobSearch.getSearchWorkTypeSep());
			}
		}
		if (jobSearch.getSearchLocationSep() != null && !"".equals(jobSearch.getSearchLocationSep())) {
			if (jobSearch.getSearchLocationSep().indexOf("__") >= 0) {
				appendMultLocation(sql, jobSearch.getSearchLocationSep());
			} else {
				appendOneLocation(sql, jobSearch.getSearchLocationSep());
			}

		}

		sql.append(" order by thjb.update_date desc ");

		return sql.toString();
	}
	
	
	/**
	 * ???????
	 * @param sql
	 * @param searchAreaSep
	 */
	private void appendMultArea(StringBuffer sql, String searchAreaSep) {
		String[] areas = searchAreaSep.split("__");
		int condLength = areas.length;

		int theIndex = 0;
		sql.append(" and (");
		for (String oneIntent : areas) {
			if (oneIntent != null && !"".equals(oneIntent)) {
				theIndex++;

				sql.append(" ( ");
				String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));
				boolean addedZero = false;
				if (items.length == 2 && items[0] != null && items[0].equals(items[1])) {
					sql.append(" tca.area_name_root ='" + items[1] + "'  ");
				} else {
					if (items[0] != null && !"".equals(items[0])) {
						sql.append(" tca.area_name ='" + items[0] + "'  ");
						addedZero = true;
					}
					if (items.length > 1) {
						if (items[1] != null && !"".equals(items[1])) {
							if (addedZero) {
								sql.append(" and ");
							}
							sql.append(" tca.area_name_root ='" + items[1] + "'  ");
						}

					}
				}
				if (theIndex == condLength) {
					sql.append(" ) ");
				} else {
					sql.append(" ) or ");
				}
			}
		}
		sql.append(")");

	}
	
	/**
	 * ????????
	 * @param sql
	 * @param searchWorkTypeSep
	 */
	private void appendMultWorkType(StringBuffer sql, String searchWorkTypeSep) {
		String[] workTypes = searchWorkTypeSep.split("__");
		int condLength = workTypes.length;

		int theIndex = 0;
		sql.append(" and (");
		for (String oneIntent : workTypes) {
			if (oneIntent != null && !"".equals(oneIntent)) {
				theIndex++;

				String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));
				if (items.length == 3) {
					sql.append(" ( ");

					if (items[0] != null && items[0].equals(items[1]) && items[0].equals(items[2])) {
						sql.append(" thjb.work_type_root ='" + items[1] + "'  ");
					} else if (items[0] != null && items[0].equals(items[2])) {
						sql.append(" thjb.work_type_root ='" + items[1] + "' and thjb.work_type_sub ='" + items[2]
								+ "'  ");
					} else {
						boolean addedZero = false;
						if (items[0] != null && !"".equals(items[0])) {
							sql.append(" thjb.work_type ='" + items[0] + "'  ");
							addedZero = true;
						}
						if (items[1] != null && !"".equals(items[1])) {
							if (addedZero) {
								sql.append(" and ");
							}
							sql.append(" thjb.work_type_root ='" + items[1] + "'  ");
						}
						if (items[2] != null && !"".equals(items[2])) {
							if (addedZero) {
								sql.append(" and ");
							}
							sql.append(" thjb.work_type_sub ='" + items[2] + "'  ");
						}
					}

					if (theIndex == condLength) {
						sql.append(" ) ");
					} else {
						sql.append(" ) or ");
					}
				}
			}
		}
		sql.append(")");

	}
	
	/**
	 * ??????
	 * @param sql
	 * @param oneIntent
	 */
	private void appendOneLocation(StringBuffer sql, String oneIntent) {
		if (oneIntent != null && !"".equals(oneIntent)) {
			String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));

			if (items.length == 3) {
				sql.append(" and (");
				if (items[0] != null && items[0].equals(items[1]) && items[0].equals(items[2])) {
					sql.append(" thjb.location like '%" + items[1] + "%'  ");
				} else if (items[0] != null && items[0].equals(items[2])) {
					sql.append(" thjb.location like '%" + items[2] + "%'  ");
				} else {
					if (items[0] != null && !"".equals(items[0])) {
						if ("市辖区".equals(items[0])) {
							sql.append(" thjb.location like '%" + items[2] + "%'  ");
						} else {
							sql.append(" thjb.location like '%" + items[2] + " " + items[0] + "%'  ");
						}
					}
				}
				sql.append(")");
			}

		}
	}

	/**
	 * ??????????
	 * @param sql
	 * @param oneIntent
	 */
	private void appendOneArea(StringBuffer sql, String oneIntent) {
		if (oneIntent != null && !"".equals(oneIntent)) {
			String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));
			if (items.length == 2) {
				sql.append(" and (");
				boolean addedZero = false;
				if (items[0] != null && items[0].equals(items[1])) {
					sql.append(" tca.area_name_root ='" + items[1] + "'  ");
				} else {
					if (items[0] != null && !"".equals(items[0])) {
						sql.append(" tca.area_name ='" + items[0] + "'  ");
						addedZero = true;
					}
					if (items[1] != null && !"".equals(items[1])) {
						if (addedZero) {
							sql.append(" and ");
						}
						sql.append(" tca.area_name_root ='" + items[1] + "'  ");
					}
				}
				sql.append(")");
			}
		}
	}
	
	/**
	 * ?????????????
	 * @param sql
	 * @param oneIntent
	 */
	private void appendOneWorkType(StringBuffer sql, String oneIntent) {
		if (oneIntent != null && !"".equals(oneIntent)) {
			String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));
			if (items.length == 3) {
				sql.append(" and (");

				if (items[0] != null && items[0].equals(items[1]) && items[0].equals(items[2])) {
					sql.append(" thjb.work_type_root ='" + items[1] + "'  ");
				} else if (items[0] != null && items[0].equals(items[2])) {
					sql.append(" thjb.work_type_root ='" + items[1] + "' and thjb.work_type_sub ='" + items[2] + "'  ");
				} else {
					boolean addedZero = false;
					if (items[0] != null && !"".equals(items[0])) {
						sql.append(" thjb.work_type ='" + items[0] + "'  ");
						addedZero = true;
					}
					if (items[1] != null && !"".equals(items[1])) {
						if (addedZero) {
							sql.append(" and ");
						}
						sql.append(" thjb.work_type_root ='" + items[1] + "'  ");
					}
					if (items[2] != null && !"".equals(items[2])) {
						if (addedZero) {
							sql.append(" and ");
						}
						sql.append(" thjb.work_type_sub ='" + items[2] + "'  ");
					}
				}
				sql.append(")");
			}
		}
	}

	/**
	 * ????????????
	 * @param sql
	 * @param searchLocationSep
	 */
	private void appendMultLocation(StringBuffer sql, String searchLocationSep) {
		String[] locs = searchLocationSep.split("__");
		int condLength = locs.length;

		int theIndex = 0;
		sql.append(" and (");
		for (String oneIntent : locs) {
			if (oneIntent != null && !"".equals(oneIntent)) {
				theIndex++;

				String[] items = oneIntent.split(SystemPropties.getProperties("cfg.common_seperater"));
				if (items.length == 3) {
					sql.append(" ( ");
					if (items[0] != null && items[0].equals(items[1]) && items[0].equals(items[2])) {
						sql.append(" thjb.location like '%" + items[1] + "%'  ");
					} else if (items[0] != null && items[0].equals(items[2])) {
						sql.append(" thjb.location like '%" + items[2] + "%'  ");
					} else {
						if (items[0] != null && !"".equals(items[0])) {
							if ("市辖区".equals(items[0])) {
								sql.append(" thjb.location like '%" + items[1] + "%'  ");
							} else {
								sql.append(" thjb.location like '%" + items[2] + " " + items[0] + "%'  ");
							}
						}
					}

					if (theIndex == condLength) {
						sql.append(" ) ");
					} else {
						sql.append(" ) or ");
					}
				}
			}
		}
		sql.append(")");

	}

}
