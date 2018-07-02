package com.luo.hibgen.dao;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.dao.BaseDao;
import com.luo.hibgen.model.THrJobBase;
import com.luo.hibgen.model.TShowHomeworktypes;

public class HrJobBaseDao extends BaseDao<THrJobBase> {
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
			criteria.add(Restrictions.eq("workTypeRoot", workTypeRoot)).add(Restrictions.eq("status", "1"));
			criteria.setProjection(Projections.rowCount());
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
	 * 步骤四：根据id查询THrJobBase对象，与步骤三getByid(Long id)方法的需求是一样的。
	 */
}
