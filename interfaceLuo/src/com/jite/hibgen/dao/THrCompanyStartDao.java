package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;

import java.util.List;
import static org.hibernate.criterion.Example.create;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import javax.naming.InitialContext;
import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;


/**
 * Home object for domain model class THrCompanyStart.
 * @see com.jite.hibgen.dao.THrCompanyStart
 * @author Hibernate Tools
 */
public class THrCompanyStartDao extends BaseDao<THrCompanyStart>{

	private static final Log log = LogFactory.getLog(THrCompanyStartDao.class);

	public List<THrCompanyStart> findByExample(THrCompanyStart instance) {
		log.debug("finding THrCompanyStart instance by example");
		try {
			List<THrCompanyStart> results = (List<THrCompanyStart>) getHibernateTemplate().getSessionFactory()
					.getCurrentSession()
					.createCriteria("com.jite.hibgen.model.THrCompanyStart")
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
