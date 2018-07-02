package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import java.util.List;

import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.SessionFactory;

import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class THrCompany.
 * @see com.jite.hibgen.dao.THrCompany
 * @author Hibernate Tools
 */
public class THrCompanyDao extends BaseDao<THrCompany>{

	private static final Log log = LogFactory.getLog(THrCompanyDao.class);

	public THrCompanyDao(){
	    super(THrCompany.class);
	}
	public THrCompanyDao(THrCompany poClass){
	    super(poClass.getClass());
	}

	public void persist(THrCompany transientInstance) {
		log.debug("persisting THrCompany instance");
		try {
			getHibernateTemplate().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(THrCompany instance) {
		log.debug("attaching dirty THrCompany instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(THrCompany instance) {
		log.debug("attaching clean THrCompany instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(THrCompany persistentInstance) {
		log.debug("deleting THrCompany instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public THrCompany merge(THrCompany detachedInstance) {
		log.debug("merging THrCompany instance");
		try {
			THrCompany result = (THrCompany) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	/**
	 * 根据公司ID，查找该公司
	 * @param id
	 * @return
	 */
	public THrCompany findById(java.lang.Long id) {
		log.debug("getting THrCompany instance with id: " + id);
		try {
			THrCompany instance = (THrCompany) getHibernateTemplate()
					.get("com.jite.hibgen.model.THrCompany",
							id);
			if (instance == null) {
				log.debug("get successful, no instance found");
			} else {
				log.debug("get successful, instance found");
			}
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List<THrCompany> findByExample(THrCompany instance) {
		log.debug("finding THrCompany instance by example");
		try {
			List<THrCompany> results = (List<THrCompany>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrCompany")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
	
	public List<THrCompany> findByName(String name) {
		final String hqlString="select com from THrCompany com where com.name like :theComName ";
		

		
		Query query=getHibernateTemplate().getSessionFactory()
		.getCurrentSession().createQuery(hqlString);
		query.setString("theComName","%"+name+"%"); 

		return  query.list();
	}	
}
