package com.luo.hibgen.dao;
// Generated 2017-4-15 11:46:42 by Hibernate Tools 4.3.1.Final

import java.util.List;
import javax.naming.InitialContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.Criteria;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Example;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.dao.BaseDao;
import com.luo.hibgen.model.THrJobBase;
import com.luo.hibgen.model.TShowHomebanner;
import com.sun.org.apache.xpath.internal.operations.And;

/**
 * Home object for domain model class TShowHomebanner.
 * @see com.luo.hibgen.model.TShowHomebanner
 * @author Hibernate Tools
 */
public class TShowHomebannerDao extends BaseDao<TShowHomebanner>{

	private static final Log log = LogFactory.getLog(TShowHomebannerDao.class);

	private SessionFactory sessionFactory;

	/**
	 * 查询t_show_homebanner表所有记录（查询条件：rank=1 And status=0）
	 * @return
	 */
	public List<TShowHomebanner> searchByCriteria() {
		log.debug("search TShowHomebanner instance by criteria");
		//Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();// .openSession()
		try {
			Session session = getHibernateTemplate().getSessionFactory().getCurrentSession();// .openSession()
			Criteria criteria = session.createCriteria(TShowHomebanner.class);
			criteria.add(Restrictions.eq("rank", 1)).add(Restrictions.eq("status", 0));
			return criteria.list();
			// Integer.valueOf(criteria.setProjection(Projections.rowCount()).uniqueResult().toString());

		} catch (RuntimeException re) {
			log.error("searchByCriteria by TShowHomebannerDao failed", re);
			throw re;
		} finally {
			// 清除Session的缓存，避免内存溢出
			//session.flush();
			//session.clear();
		}
	}

}
