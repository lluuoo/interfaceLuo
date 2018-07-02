package com.jite.hibgen.dao;

import static org.hibernate.criterion.Example.create;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.model.THrAccount;
import com.jite.hibgen.model.TUserBizcard;

/**
 * Home object for domain model class THrAccount.
 * @see com.jite.hibgen.dao.THrAccount
 * @author Hibernate Tools
 */
public class THrAccountDao extends BaseDao<THrAccount>{

	private static final Log log = LogFactory.getLog(THrAccountDao.class);


	public void persist(THrAccount transientInstance) {
		log.debug("persisting THrAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(THrAccount instance) {
		log.debug("attaching dirty THrAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(THrAccount instance) {
		log.debug("attaching clean THrAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(THrAccount persistentInstance) {
		log.debug("deleting THrAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public THrAccount merge(THrAccount detachedInstance) {
		log.debug("merging THrAccount instance");
		try {
			THrAccount result = (THrAccount) getHibernateTemplate().getSessionFactory().getCurrentSession()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public THrAccount findById(java.lang.Long id) {
		log.debug("getting THrAccount instance with id: " + id);
		try {
			THrAccount instance = (THrAccount) getHibernateTemplate().getSessionFactory()
					.getCurrentSession().get("com.jite.hibgen.model.THrAccount",
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

	/**
	 * 搜索符合THrAccount对象参数搜索条件的THrAccount实体对象列表
	 * @param instance
	 * @return
	 */
	public List<THrAccount> findByExample(THrAccount instance) {
		log.debug("finding THrAccount instance by example");
		try {
			List<THrAccount> results = (List<THrAccount>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrAccount")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public THrAccount findByAccountId(Long id) {
		log.debug("finding TUserBizcard instance by example");
		try {
			@SuppressWarnings("unchecked")
			List<THrAccount> results = (List<THrAccount>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrAccount")
					.add(Restrictions.eq("hrAccountId", id)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results.size()>0?results.get(0):new THrAccount();
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
