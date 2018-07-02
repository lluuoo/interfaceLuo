package com.jite.hibgen.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.model.TGameFingerguess;

import com.jite.hibgen.model.TShowHomeworktypes;

public class TShowHomeworkTypesDao extends BaseDao<TShowHomeworktypes>{

	
	public List<TShowHomeworktypes> searchCriteria(){

		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TShowHomeworktypes.class);
		criteria.add(Restrictions.eq("father", (long)0));
		

		return (List<TShowHomeworktypes>) criteria.list();
		
	}
	public List<TShowHomeworktypes> searchByFatherid(long id){
		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TShowHomeworktypes.class);
		criteria.add(Restrictions.eq("father",id));
		return criteria.list();
	}
	
	
}
