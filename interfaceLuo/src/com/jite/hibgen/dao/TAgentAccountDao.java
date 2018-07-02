package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import java.util.List;

import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

//import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class TAgentAccount.
 * @see com.jite.hibgen.dao.TAgentAccount
 * @author Hibernate Tools
 */
public class TAgentAccountDao extends BaseDao<TAgentAccount>{

	private static final Log log = LogFactory.getLog(TAgentAccountDao.class);

	public TAgentAccountDao(){
	    super(TAgentAccount.class);
	}
	public TAgentAccountDao(TAgentAccount poClass){
	    super(poClass.getClass());
	}

	public void persist(TAgentAccount transientInstance) {
		log.debug("persisting TAgentAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(TAgentAccount instance) {
		log.debug("attaching dirty TAgentAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(TAgentAccount instance) {
		log.debug("attaching clean TAgentAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(TAgentAccount persistentInstance) {
		log.debug("deleting TAgentAccount instance");
		try {
			getHibernateTemplate().getSessionFactory().getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public TAgentAccount merge(TAgentAccount detachedInstance) {
		log.debug("merging TAgentAccount instance");
		try {
			TAgentAccount result = (TAgentAccount) getHibernateTemplate().getSessionFactory()
					.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public TAgentAccount findById(java.lang.Long id) {
		log.debug("getting TAgentAccount instance with id: " + id);
		try {
			TAgentAccount instance = (TAgentAccount) getHibernateTemplate().getSessionFactory()
					.getCurrentSession().get(
							"com.jite.hibgen.model.TAgentAccount", id);
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

	//QBE(Query By Example)方式查询
	public List<TAgentAccount> findByExample(TAgentAccount instance) {
		log.debug("finding TAgentAccount instance by example");
		try {
			List<TAgentAccount> results = (List<TAgentAccount>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.TAgentAccount")
					.add(Example.create(instance)).list();
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
	
	public List<TAgentAccount> searchByCriteria(int pageNo, int pageSize,TAgentAccount search){
		log.debug("search THrJobBase instance by criteria");
		try {
			Criteria criteria=getHibernateTemplate()
					.getSessionFactory().getCurrentSession()
					.createCriteria(TAgentAccount.class);
			
			setCritieaByAdvanceSearch(criteria,search);
			
			criteria.setProjection(null);
			criteria.addOrder(Order.asc("rank"));
			criteria.addOrder(Order.desc("endTime"));
			criteria.addOrder(Order.desc("updateDate"));
			criteria.addOrder(Order.desc("createDate"));
			criteria.setFirstResult((pageNo - 1) * pageSize);  
	        criteria.setMaxResults(pageSize);  
	        
			return (List<TAgentAccount>)criteria.list();
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}		
	}
	
	public int searchByCriteriaTotal(TAgentAccount search){
		Criteria criteria=getHibernateTemplate()
				.getSessionFactory().getCurrentSession()
				.createCriteria(TAgentAccount.class);
		
		setCritieaByAdvanceSearch(criteria,search);
		
		return  Integer.valueOf(criteria.setProjection(Projections.rowCount()).uniqueResult().toString());		
	}
	private void setCritieaByAdvanceSearch(Criteria criteria, TAgentAccount search) {
		criteria.add(Restrictions.eq("status", 0));//TODO,查询未删除的数据			
	}
	
	public List<TAgentAccount> findByInviteCodes(String[] theTenCode) {
		Criteria criteria=getHibernateTemplate()
				.getSessionFactory().getCurrentSession()
				.createCriteria(TAgentAccount.class);
		/*for(int i=0;i<theTenCode.length;i++){
			criteria.add(Restrictions.or(Restrictions.eq("inviteCode", theTenCode[i])));
		}*/
		criteria.add(Restrictions.in("inviteCode",theTenCode));
		return (List<TAgentAccount>)criteria.list();
	}
	public TAgentAccount findTypeOneMaxInviteCode(int agentDistrict) {
		TAgentAccount resultT=null;
		Criteria criteria=getHibernateTemplate()
				.getSessionFactory().getCurrentSession()
				.createCriteria(TAgentAccount.class);
		criteria.add(Restrictions.like("inviteCode","0"+agentDistrict+"%"));
		criteria.addOrder(Order.desc("inviteCode"));

		List<TAgentAccount> searchResult=(List<TAgentAccount>)criteria.list();
		if(searchResult!=null&&searchResult.size()>0){
			resultT=searchResult.get(0);
		}
		return resultT;
	}

}
