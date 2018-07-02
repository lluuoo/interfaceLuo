package com.jite.hibgen.dao;

import org.hibernate.Criteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.jite.hibgen.model.THrJobBase;

public class THrJobBaseDao extends BaseDao<THrJobBase>{
	public int searchCriteriaTotal(String worktyperoot){
		Criteria criteria = getHibernateTemplate().getSessionFactory().getCurrentSession()
				.createCriteria(THrJobBase.class);
		return Integer.valueOf(criteria.setProjection(Projections.rowCount()).add(Restrictions.eq("status", "1")).add(Restrictions.eq("workTypeRoot",worktyperoot)).uniqueResult().toString());
		
	}
}
