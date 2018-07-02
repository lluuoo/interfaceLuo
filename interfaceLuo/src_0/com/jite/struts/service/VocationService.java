package com.jite.struts.service;

import java.util.ArrayList;
import java.util.List;

import com.jite.hibgen.dao.THrJobBaseDao;
import com.jite.hibgen.dao.TShowHomeworkTypesDao;
import com.jite.hibgen.model.TOrgActive;
import com.jite.hibgen.model.TShowHomeworktypes;
import com.jite.struts.bean.TShowHomeworktypesInfo;
import com.jite.utils.BeanTrans;
import com.jite.utils.SystemPropties;

public class VocationService {
	
	private TShowHomeworkTypesDao tShowHomeworkTypesDao;
	private THrJobBaseDao tHrJobBaseDao;

	public void settHrJobBaseDao(THrJobBaseDao tHrJobBaseDao) {
		this.tHrJobBaseDao = tHrJobBaseDao;
	}


	public TShowHomeworkTypesDao gettShowHomeworkTypesDao() {
		return tShowHomeworkTypesDao;
	}


	public void settShowHomeworkTypesDao(TShowHomeworkTypesDao tShowHomeworkTypesDao) {
		this.tShowHomeworkTypesDao = tShowHomeworkTypesDao;
	}


	public List<TShowHomeworktypesInfo> queryPublishedDatas(int pageNumber,int pageSize){
		List<TShowHomeworktypesInfo> returnList=new ArrayList<TShowHomeworktypesInfo>();
		TShowHomeworktypes tshw =new TShowHomeworktypes();
		
		if(pageNumber==0){
			pageNumber=1;
		}
		if(pageSize==0){
			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}
	
	

		
		List<TShowHomeworktypes> gList=tShowHomeworkTypesDao.searchCriteria();
		for(TShowHomeworktypes tshwt:gList){
			returnList.add(BeanTrans.getFromTShowHomeworktypes(tshwt));
		}
		return returnList;
		
	}
	public int queryCount(String worktyperoot){
		return tHrJobBaseDao.searchCriteriaTotal(worktyperoot);
	}
	
	public List<TShowHomeworktypesInfo> queryByFatherId(long id){
		List<TShowHomeworktypesInfo> returnList=new ArrayList<TShowHomeworktypesInfo>();
		List<TShowHomeworktypes> gList=tShowHomeworkTypesDao.searchByFatherid(id);
		for(TShowHomeworktypes tshwt:gList){
			returnList.add(BeanTrans.getFromTShowHomeworktypes(tshwt));
		}
		return returnList;
		
		
	}
	public List<TShowHomeworktypesInfo> queryId(int pageNumber,int pageSize){
		List<TShowHomeworktypesInfo> returnList=new ArrayList<TShowHomeworktypesInfo>();
		TShowHomeworktypes tshw =new TShowHomeworktypes();
		
		if(pageNumber==0){
			pageNumber=1;
		}
		if(pageSize==0){
			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}

		List<TShowHomeworktypes> gList=tShowHomeworkTypesDao.searchCriteria();
		for(TShowHomeworktypes tshwt:gList){
			returnList.add(BeanTrans.getFromTShowHomeworktypes(tshwt));
		}
		
		return returnList;
		
	}
	
}
