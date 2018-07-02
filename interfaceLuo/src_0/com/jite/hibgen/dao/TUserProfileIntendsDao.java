package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;
import com.mchange.v2.c3p0.cfg.C3P0Config;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Query;

import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class TUserProfileIntends.
 * @see com.jite.hibgen.dao.TUserProfileIntends
 * @author Hibernate Tools
 */
public class TUserProfileIntendsDao extends BaseDao<TUserLoginlog>{

	private static final Log log = LogFactory
			.getLog(TUserProfileIntendsDao.class);

	public void persist(TUserProfileIntends transientInstance) {
		log.debug("persisting TUserProfileIntends instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	/**
	 * 从就业
	 * @param accountId
	 */
	public void deleteByAccountId(Long accountId) {
		log.debug("delte TUserProfileIntends by userId");
		try {
			String hql = "delete TUserProfileIntends as tupi where tupi.userId=?";
			Query query = getHibernateTemplate().getSessionFactory()
					.getCurrentSession().createQuery(hql);
			query.setLong(0, accountId);
			query.executeUpdate();
		} catch (Exception re) {
			log.error("Delete failed", re);
		}
	}
	
	public void deleteByAccountIdWithoutLocation(Long accountId) {
		log.debug("delte TUserProfileIntends by userId");
		try {
			//type！=3是什么意思？？  （经验证，这个type不是用户类型（1-求职者， 2-企业HR， 3-志愿者）的含义。
			String hql = "delete TUserProfileIntends as tupi where tupi.userId=? and type!=3 ";
			Query query = getHibernateTemplate().getSessionFactory()
					.getCurrentSession().createQuery(hql);
			query.setLong(0, accountId);
			query.executeUpdate();
		} catch (Exception re) {
			log.error("Delete failed", re);
		}
	}	
	
	public List<TUserProfileIntends> findByExample(TUserProfileIntends instance) {
		log.debug("finding TUserProfileIntends instance by example");
		try {
			List<TUserProfileIntends> results = (List<TUserProfileIntends>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.TUserProfileIntends")
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
