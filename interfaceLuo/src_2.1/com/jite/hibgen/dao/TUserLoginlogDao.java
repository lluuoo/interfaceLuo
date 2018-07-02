package com.jite.hibgen.dao;

import com.jite.hibgen.model.*;
import com.jite.struts.bean.UserInfo;

import java.util.List;

import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;

import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class TUserLoginlog.
 * 
 * @see com.jite.hibgen.model.TUserLoginlog
 * @author Hibernate Tools
 */
public class TUserLoginlogDao extends BaseDao<TUserLoginlog> {

	private static final Log log = LogFactory.getLog(TUserLoginlogDao.class);

	/**
	 * 添加登录日志信息
	 * 
	 * @param log
	 * @return
	 */
	// Print Login Success Log
	public boolean addLoginLog(TUserLoginlog log) {
		String a = "";
		try {
			// List<TUserLoginlog> results = (List<TUserLoginlog>)
			getHibernateTemplate().saveOrUpdate(log);
			/*
			 * .getSessionFactory() .getCurrentSession()
			 * .createCriteria("com.jite.hibgen.model.TUserLoginlog")
			 * .add(create(log)).list();
			 */

			/*
			 * Session session = null; session = (Session)
			 * getSessionFactory().getCurrentSession(); Transaction
			 * tr=session.beginTransaction(); tr.begin();
			 * session.saveOrUpdate(log); tr.commit();
			 * 
			 * session.close();
			 */
		} catch (Exception e) {
			return false;
		}
		return true;
	}

}
