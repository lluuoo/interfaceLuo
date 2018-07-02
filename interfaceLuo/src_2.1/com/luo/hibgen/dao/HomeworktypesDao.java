package com.luo.hibgen.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.dao.BaseDao;
import com.jite.hibgen.model.*;
import com.luo.hibgen.model.TShowHomeworktypes;

public class HomeworktypesDao extends BaseDao<TShowHomeworktypes> {
	private static final Log log = LogFactory.getLog(TShowHomeworktypes.class);

	// private final SessionFactory sessionFactory = getSessionFactory();

	public HomeworktypesDao() {
		super(TShowHomeworktypes.class);
	}

	public HomeworktypesDao(TShowHomeworktypes poClass) {
		super(poClass.getClass());
	}

//	/**
//	 * 步骤一、查询第1级职位（father=0）
//	 * @param pageNo
//	 * @param pageSize
//	 * @return
//	 */
//	// Criteria查询t_show_homeworktypes表
//	@SuppressWarnings("unchecked")
//	public List<TShowHomeworktypes> searchByCriteria(int pageNo, int pageSize) {
//		log.debug("search TShowHomeworktypes instance by criteria");
//		try {
//			Criteria criteria = getHibernateTemplate().getSessionFactory()
//					//.openSession()
//					.getCurrentSession()
//					.createCriteria(TShowHomeworktypes.class);
//			
//			//查询father=0的记录（第1级职业类别）,注意下面的数值一定要加L，因为是Long类型
//			criteria.add(Restrictions.eq("father", 0L)); 			
//			// setCritieaByAdvanceSearch(criteria, search);
//
//			// criteria.setProjection(null);
//			// criteria.addOrder(Order.asc("rank"));
//			// criteria.addOrder(Order.desc("endTime"));
//			// criteria.addOrder(Order.desc("updateDate"));  // 按照update_date由近至远的顺序排列
//			// criteria.addOrder(Order.desc("createDate"));
//			 criteria.setFirstResult((pageNo - 1) * pageSize);
//			 criteria.setMaxResults(pageSize);
//
//			return (List<TShowHomeworktypes>) criteria.list();
//		} catch (RuntimeException re) {
//			log.error("find by example failed", re);
//			throw re;
//		}
//	}
	
	/**
	 * 步骤三：Criteria方式根据fatherID查询第2级职业类别
	 * @param fatherid
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public List<TShowHomeworktypes> queryCriteriaByFatherid(int pageNo, int pageSize,Long fatherid){
		log.debug("search List<TShowHomeworktypes> instance by criteria");
		Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();// .openSession()
		try {
			Criteria criteria = session.createCriteria(TShowHomeworktypes.class);
			
			//查询father=fatherid的记录（第1级职业类别）,注意下面的数值一定要加L，因为是Long类型
			criteria.add(Restrictions.eq("father", fatherid))
					.add(Restrictions.eq("status", 0)); 			
			// setCritieaByAdvanceSearch(criteria, search);

			// criteria.setProjection(null);
			// criteria.addOrder(Order.asc("rank"));
			// criteria.addOrder(Order.desc("endTime"));
			// criteria.addOrder(Order.desc("updateDate"));  // 按照update_date由近至远的顺序排列
			// criteria.addOrder(Order.desc("createDate"));
			 criteria.setFirstResult((pageNo - 1) * pageSize);
			 criteria.setMaxResults(pageSize);

			return (List<TShowHomeworktypes>) criteria.list();
		} catch (RuntimeException re) {
			log.error("queryCriteriaByFatherid by HomeworktypesDao failed", re);
			throw re;
		}finally{
			//清除Session的缓存，避免内存溢出
			//session.flush();
			//session.clear();
		}
	}


}
