package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import static org.hibernate.criterion.Example.create;

import javax.naming.InitialContext;
import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;



/**
 * Home object for domain model class THrCompanyMedias.
 * @see com.jite.hibgen.dao.THrCompanyMedias
 * @author Hibernate Tools
 */
public class THrCompanyMediasDao extends BaseDao<THrCompanyMedias>{

	private static final Log log = LogFactory
			.getLog(THrCompanyMediasDao.class);

	public THrCompanyMediasDao(){
		super(THrCompanyMedias.class);
	}
	public THrCompanyMediasDao(THrCompanyMedias poClass){
		super(poClass.getClass());
	}
	
	public List<THrCompanyMedias> findByExample(THrCompanyMedias instance) {
		log.debug("finding THrCompanyMedias instance by example");
		try {
			List<THrCompanyMedias> results = (List<THrCompanyMedias>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrCompanyMedias")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

}

