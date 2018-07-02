package com.jite.hibgen.dao;

import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.model.TGameFingerguess;
import com.jite.hibgen.model.TUserAccount;

public class TUserLoginCheckDao extends BaseDao<TUserAccount>{

	public boolean checklogin(String username,String userpwd){
		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TUserAccount.class);
		criteria.add(Restrictions.and(Restrictions.eq("account", username), Restrictions.eq("password", userpwd)));
		int result=Integer.valueOf(criteria.setProjection(Projections.rowCount()).uniqueResult().toString());
		if(result==0){
		return false;
		}else{
			return true;	
		}
		
	}
	
}
