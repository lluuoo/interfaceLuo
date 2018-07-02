package com.luo.hibgen.dao;

import com.jite.hibgen.dao.BaseDao;


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
import com.jite.hibgen.model.*;

/**
 * Home object for domain model class TGameFingerguess.
 * 
 * @see com.luo.hibgen.dao.TShowHomeareasDao
 * @author Hibernate Tools
 */
public class TShowHomeareasDao extends BaseDao<TShowHomeareas> {

	private static final Log log = LogFactory.getLog(TShowHomeareasDao.class);

	public TShowHomeareasDao() {
		super(TShowHomeareas.class);
	}

	public TShowHomeareasDao(TShowHomeareas poClass) {
		super(poClass.getClass());
	}

	/**
	 * 基本查询，根据样例条件查询（其实应该使用QBE查询更合适）。
	 * 
	 * @param pageNo
	 * @param pageSize
	 * @param search
	 * @return
	 */
	public List<TShowHomeareas> searchByCriteria(int pageNumber, int pageSize, TShowHomeareas search) {
		log.debug("search TShowHomeareas instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory()
					// .openSession()
					.getCurrentSession().createCriteria(TShowHomeareas.class);

			// criteria.setProjection(null);

			if (search.getFather() != null){
				criteria.add(Restrictions.eq("father", search.getFather()));
			}
			
			if (search.getType() != null){
				criteria.add(Restrictions.eq("type", search.getType()));
			}
			
			if (search.getStatus() != null){
				criteria.add(Restrictions.eq("status", search.getStatus()));
			}
			 
			criteria.addOrder(Order.asc("rank"));
			criteria.addOrder(Order.desc("updateDate"));
			// criteria.addOrder(Order.desc("createDate"));
			criteria.setFirstResult((pageNumber - 1) * pageSize);
			criteria.setMaxResults(pageSize);

			return (List<TShowHomeareas>)criteria.list();
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
