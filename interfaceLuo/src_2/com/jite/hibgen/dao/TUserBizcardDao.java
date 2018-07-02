
package com.jite.hibgen.dao;

import java.util.List;

import com.jite.hibgen.model.*;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import static org.hibernate.criterion.Example.create;

/**
 * 下面的import中，注释的都是原代码先有的 * 
 */
//import com.jite.struts.bean.ProfileSearch;
//import java.math.BigInteger;
//import javax.naming.InitialContext;
//import org.hibernate.LockMode;
//import org.hibernate.SQLQuery;
//import org.hibernate.SessionFactory;
//import org.hibernate.criterion.Restrictions;



/**
 * Home object for domain model class TUserBizcard.
 * @see com.jite.hibgen.dao.TUserBizcard
 * @author Hibernate Tools
 */
public class TUserBizcardDao extends BaseDao<TUserBizcard>{

	private static final Log log = LogFactory.getLog(TUserBizcardDao.class);
	
	public TUserBizcardDao(){
		super(TUserBizcard.class);
	}
	public TUserBizcardDao(TUserBizcard po){
		super(po.getClass());
	}
	
	public void persist(TUserBizcard transientInstance) {
		log.debug("persisting TUserBizcard instance");
		try {
			getHibernateTemplate().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}
	
	public List<TUserBizcard> findByExample(TUserBizcard instance) {
		log.debug("finding TUserBizcard instance by example");
		try {
			List<TUserBizcard> results = (List<TUserBizcard>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.TUserBizcard")
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
