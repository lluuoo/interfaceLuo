package com.jite.hibgen.dao;

import java.util.List;



import org.hibernate.Criteria;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.model.TGameFingerguess;
import com.jite.hibgen.model.TOrgActive;
import com.jite.struts.bean.GameFingerGuessDataInfo;

public class TGameDao extends BaseDao<TGameFingerguess>{

	public List<TGameFingerguess> searchCriteria(){

		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TGameFingerguess.class);
		
		

		return (List<TGameFingerguess>) criteria.list();
		
	}
	
	public List<TGameFingerguess> searchByCriteriaMAX() {
		
		DetachedCriteria maxcount =DetachedCriteria.forClass(TGameFingerguess.class)
				.setProjection(Property.forName("count").max());
		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(TGameFingerguess.class);
		int max=Integer.valueOf(criteria.setProjection(Projections.max("count")).uniqueResult().toString());
		criteria.setProjection(null);
		 criteria.add(Property.forName("count").eq(maxcount));
		 return (List<TGameFingerguess>) criteria.list();
	}
	
}
