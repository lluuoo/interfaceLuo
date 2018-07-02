package com.luo.hibgen.dao;

import com.jite.hibgen.dao.BaseDao;
//import com.jite.hibgen.model.*;

import java.util.List;

//import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

//import org.hibernate.criterion.Order;
//import org.hibernate.LockMode;
//import org.hibernate.criterion.Order;
//import org.hibernate.criterion.Projections;
//import org.hibernate.criterion.Restrictions;
//import static org.hibernate.criterion.Example.create;
import com.luo.hibgen.model.*;

/**
 * Home object for domain model class TGameFingerguess.
 * 
 * @see com.luo.hibgen.dao.TGameFingerguess
 * @author Hibernate Tools
 */
public class TGameDao extends BaseDao<TGameFingerguess> {

	private static final Log log = LogFactory.getLog(TGameDao.class);

	public TGameDao() {
		super(TGameFingerguess.class);
	}

	public TGameDao(TGameFingerguess poClass) {
		super(poClass.getClass());
	}

	/**
	 * 基本查询。
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @param search
	 * @return
	 */
	public List<TGameFingerguess> searchByCriteria(int pageNo, int pageSize, TGameFingerguess search) {
		log.debug("search THrJobBase instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory()
					// .openSession()
					.getCurrentSession().createCriteria(TGameFingerguess.class);

			// setCritieaByAdvanceSearch(criteria, search);
			//
			// criteria.setProjection(null);
			// criteria.addOrder(Order.asc("count"));
			// criteria.addOrder(Order.desc("endTime"));
			// criteria.addOrder(Order.desc("updateDate"));
			// criteria.addOrder(Order.desc("createDate"));
			criteria.setFirstResult((pageNo - 1) * pageSize);
			criteria.setMaxResults(pageSize);

			return (List<TGameFingerguess>) criteria.list();
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	/**
	 * 方法1：使用两次查询的方法。缺陷解决：可以查询并列多个最大值的情况。
	 * 方法2：使用两次查询的方法。先查询max(count)，然后查询count=max(count)的记录
	 * @param pageNo
	 * @param pageSize
	 * @param search
	 * @return
	 */
	// Criteria查询t_game_fingerguess表中Max(Count)
	public List<TGameFingerguess> searchMaxCountByCriteria() {
		log.debug("search TGameFingerguess max count instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
					.createCriteria(TGameFingerguess.class);

//			/*
//			 * 方法1：使用基于count降序排序的方法。（缺陷：无法查询并列多个最大值的情况）
//			 */
//			 criteria.addOrder(Order.desc("count")); // 按照count字段降序排列
//			 criteria.setMaxResults(1); // 设置最大检索数目为1,取count最大的记录
//			/*------------------------方法1 END----------------------------------------*/

			/*
			 * 方法2：使用两次查询的方法。先查询max(count)，然后查询count=max(count)的记录
			 */
			ProjectionList pList = Projections.projectionList();
			pList.add(Projections.max("count")); // 统计count字段最大值
			criteria.setProjection(pList);
			java.util.Iterator it = criteria.list().iterator();
			/*-----------方法2-1 使用Restrictions.eq()查询------------------------*/
//			if (it.hasNext()) { // 如果统计出了max("count")
//				criteria.setProjection(null);
//				criteria.add(Restrictions.eq("count", it.next()));
//			} else {
//				criteria.setProjection(null);
//			}
			/*---------------------------------------------------------------------*/

			/*-----------方法2-2 使用Restrictions.sqlRestriction()查询------------------------*/
			 String strMaxCount = "";
			 if (it.hasNext()) { //如果统计出了max("count")
				 strMaxCount = (it.next()).toString();
				 strMaxCount = "count = " + strMaxCount;
				 //System.out.println(strMaxCount);			
			 }
			 criteria.setProjection(null);
			 //去掉Projection统计分组条件（否则查出的是max("count")）
			 criteria.add(Restrictions.sqlRestriction(strMaxCount)); //再次查询
			/*---------------------------------------------------------------------*/
			/*------------------------方法2 END----------------------------------------*/
			
			 return (List<TGameFingerguess>) criteria.list();
		} catch (RuntimeException re) {
			System.out.println("-------err err err err--------");
			log.error("find by example failed", re);
			return null;
		}
	}

	// private void setCritieaByAdvanceSearch(Criteria criteria,
	// TGameFingerguess
	// search) {
	// criteria.add(Restrictions.gt("count", 6));// TODO,查询未删除的数据
	// }

	// /**
	// * 基于count字段降序查询。缺陷：无法查询并列多个最大值的情况。
	// * @param pageNo
	// * @param pageSize
	// * @param search
	// * @return
	// */
	// public List<TGameFingerguess> searchByCriteria(int pageNo, int pageSize,
	// TGameFingerguess search) {
	// log.debug("search THrJobBase instance by criteria");
	// try {
	// Criteria criteria = getHibernateTemplate().getSessionFactory()
	// //.openSession()
	// .getCurrentSession()
	// .createCriteria(TGameFingerguess.class);
	//
	//// setCritieaByAdvanceSearch(criteria, search);
	////
	//// criteria.setProjection(null);
	//// criteria.addOrder(Order.asc("count"));
	//// criteria.addOrder(Order.desc("endTime"));
	//// criteria.addOrder(Order.desc("updateDate"));
	//// criteria.addOrder(Order.desc("createDate"));
	// criteria.setFirstResult((pageNo - 1) * pageSize);
	// criteria.setMaxResults(pageSize);
	//
	// return (List<TGameFingerguess>) criteria.list();
	// } catch (RuntimeException re) {
	// log.error("find by example failed", re);
	// throw re;
	// }
	// }
	// }
}
