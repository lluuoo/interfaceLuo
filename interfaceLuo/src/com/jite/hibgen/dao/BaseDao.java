package com.jite.hibgen.dao;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.springframework.orm.hibernate4.HibernateCallback;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

@SuppressWarnings("unchecked")
public class BaseDao<T> extends HibernateDaoSupport {

  @Resource
  public void setSessionFactory0(SessionFactory sessionFactory)
  {
    super.setSessionFactory(sessionFactory);
  }
	
	private Class poClass;
	
	public BaseDao(){
	}
	
	
	 
	public BaseDao(Class poClass) {
	    this.poClass = poClass;
	}

	
	public void saveObject(T po) {
		getHibernateTemplate().save(po);
	}
	
	public void deleteObject(T po)  {
		getHibernateTemplate().delete(po);
	}

	public void updateObject(T po) {
		getHibernateTemplate().update(po);
	}
	
	public List<T> getAllObjects() {
		return (List<T>) getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException {
				return session.createCriteria(poClass).setCacheable(true).list();
			}
		});
	}
	  
	  public int getTotalRecordCount() {
		Long tmp = (Long) getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException {
				return session.createCriteria(poClass).setProjection(Projections.rowCount()).uniqueResult();
			}
		});
		return tmp.intValue();
	  }
	  
	  public T getObjectById(final Serializable id) {
		  return (T) getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session)
						throws HibernateException {
					return session.get(poClass, id);
				}
			});
	  }
	  
	  public List<T> getObjectsByCriterion(final Criterion[] criterion, final Order[] order,  final int first, final int max) {	       
	       return (List<T>) getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException {
					Criteria mycriteria = session.createCriteria(poClass);
			        if(criterion!=null){
						for (int i = 0; i < criterion.length; i++) {
				           mycriteria.add(criterion[i]);
				        }
			        }
			        if(order!=null){
				        for (int i = 0; i < order.length; i++) {
				          mycriteria.addOrder(order[i]);
				        }
			        }
			       return mycriteria.setFirstResult(first).setMaxResults(max).list();
				}
			}
		  );
	   }
	  
	  public T getObjectByCriterion(final Criterion[] criterion, final Order[] order){	        
	        return (T) getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException {
					Criteria mycriteria = session.createCriteria(poClass);
					if(criterion!=null){
						for (int i = 0; i < criterion.length; i++) {
				           mycriteria.add(criterion[i]);
				        }
			        }
			        if(order!=null){
				        for (int i = 0; i < order.length; i++) {
				          mycriteria.addOrder(order[i]);
				        }
			        }
			        return (T) mycriteria.uniqueResult();
				}
			}
		  );
	  }
	  
	  public T getObjectByQuerystring(final String hqlString){
		  return (T) getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException {
					Query query = session.createQuery(hqlString);
					return query.uniqueResult();
				}
			}
		  );
	  }
	  
	  public List<T> getObjectsByQuerystring(final String hqlString){
		  return (List<T>) getHibernateTemplate().execute(new HibernateCallback(){
				public Object doInHibernate(Session session) throws HibernateException {
					Query query = session.createQuery(hqlString);
					return query.list();
				}
			}
		  );
	  }

	public List<T> getObjectsByCriterion(final Criterion[] criterion, final Order[] order) {
		return (List<T>) getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException {
				Criteria mycriteria = session.createCriteria(poClass);
				if(criterion!=null){
					for (int i = 0; i < criterion.length; i++) {
			           mycriteria.add(criterion[i]);
			        }
		        }
		        if(order!=null){
			        for (int i = 0; i < order.length; i++) {
			          mycriteria.addOrder(order[i]);
			        }
		        }
		       return mycriteria.list();
			}
		}
	  );
	}

	public T getObjectBySQL(final String sqlString) {
		return (T) getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException {
				Query query = session.createSQLQuery(sqlString).addEntity(poClass);
				return query.uniqueResult();
			}
		}
	  );
	}

	public List<T> getObjectsBySQL(final String sqlString) {
		return (List<T>) getHibernateTemplate().execute(new HibernateCallback(){
			public Object doInHibernate(Session session) throws HibernateException {
				Query query = session.createSQLQuery(sqlString).addEntity(poClass);
				return query.list();
			}
		}
	  );
	}
	
}
