package com.jite.hibgen.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import com.jite.hibgen.model.TOrgActive;
import com.jite.hibgen.model.TUser;

public class MyUserDao extends BaseDao<TUser> {
	private static final Log log = LogFactory.getLog(MyUserDao.class);
	
	public  List<TUser>  search(String name,String pwd){
		//List<TUser> list = new List<TUser>();
		
		//1.使用QBC查询方法
		log.debug("search TUSER instance by criteria");
		try {
			Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
					.createCriteria(TUser.class);
			criteria.add(Restrictions.eq("name", name)).add(Restrictions.eq("password", pwd));
			//list = (List<TUser>) criteria.list();
			return (List<TUser>) criteria.list();   //select * from t_user  where name=name and password=pwd
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
		
	}
	
}
