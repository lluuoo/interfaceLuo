package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import java.util.List;

import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class TOrgActive.
 * 
 * @see com.jite.hibgen.dao.TOrgActive
 * @author Hibernate Tools
 */
public class TOrgActiveDao extends BaseDao<TOrgActive> {

	private static final Log log = LogFactory.getLog(TOrgActiveDao.class);

	public TOrgActiveDao() {
		super(TOrgActive.class);
	}

	public TOrgActiveDao(TOrgActive poClass) {
		super(poClass.getClass());
	}

	public List<TOrgActive> searchByCriteria(int pageNo, int pageSize, TOrgActive search) {
		log.debug("search THrJobBase instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
					.createCriteria(TOrgActive.class);

			setCritieaByAdvanceSearch(criteria, search);

			criteria.setProjection(null);
			criteria.addOrder(Order.asc("rank"));
			criteria.addOrder(Order.desc("endTime"));
			criteria.addOrder(Order.desc("updateDate"));
			criteria.addOrder(Order.desc("createDate"));
			criteria.setFirstResult((pageNo - 1) * pageSize);
			criteria.setMaxResults(pageSize);

			return (List<TOrgActive>) criteria.list();
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	private void setCritieaByAdvanceSearch(Criteria criteria, TOrgActive search) {
		criteria.add(Restrictions.eq("status", 0));// TODO,查询未删除的数据
	}

	/**
	 * 查询结果的记录数
	 * 
	 * @param search
	 * @return
	 */
	public int searchByCriteriaTotal(TOrgActive search) {
		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TOrgActive.class);

		setCritieaByAdvanceSearch(criteria, search);

		return Integer.valueOf(criteria.setProjection(Projections.rowCount()).uniqueResult().toString());
		//return (Long) criteria.setProjection(Projections.rowCount()).uniqueResult();
	}

}
