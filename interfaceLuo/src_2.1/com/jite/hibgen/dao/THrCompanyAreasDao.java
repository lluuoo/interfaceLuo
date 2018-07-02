package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import java.util.List;

import javax.naming.InitialContext;
import static org.hibernate.criterion.Example.create;

/**
 * 下面的import中，注释的都是原代码先有的 * 
 */
//import com.jite.struts.bean.JobSearch;
//import com.jite.struts.bean.ProfileSearch;
//import java.math.BigInteger;
//import org.hibernate.Criteria;
//import org.hibernate.LockMode;
//import org.hibernate.Query;
//import org.hibernate.SQLQuery;
//import org.hibernate.SessionFactory;
//import org.hibernate.criterion.Disjunction;
//import org.hibernate.criterion.MatchMode;
//import org.hibernate.criterion.Order;
//import org.hibernate.criterion.Restrictions;


/**
 * Home object for domain model class THrCompanyAreas.
 * @see com.jite.hibgen.dao.THrCompanyAreas
 * @author Hibernate Tools
 */
public class THrCompanyAreasDao extends BaseDao<THrCompanyAreas>{

	private static final Log log = LogFactory.getLog(THrCompanyAreasDao.class);
	
	public List<THrCompanyAreas> findByExample(THrCompanyAreas instance) {
		log.debug("finding THrCompanyAreas instance by example");
		try {
			List<THrCompanyAreas> results = (List<THrCompanyAreas>) getHibernateTemplate().
					getSessionFactory().getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrCompanyAreas")
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
