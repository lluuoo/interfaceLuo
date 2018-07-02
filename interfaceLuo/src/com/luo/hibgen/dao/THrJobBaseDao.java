package com.luo.hibgen.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.dao.BaseDao;
import com.jite.hibgen.model.TOrgActive;
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
}
