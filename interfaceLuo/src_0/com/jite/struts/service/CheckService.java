package com.jite.struts.service;

import com.jite.hibgen.dao.TUserLoginCheckDao;

public class CheckService {
	private TUserLoginCheckDao tUserLoginCheckDao;
	
	public TUserLoginCheckDao gettUserLoginCheckDao() {
		return tUserLoginCheckDao;
	}

	public void settUserLoginCheckDao(TUserLoginCheckDao tUserLoginCheckDao) {
		this.tUserLoginCheckDao = tUserLoginCheckDao;
	}

	public boolean checklogin(String username,String userpwd){
		boolean flag=tUserLoginCheckDao.checklogin(username, userpwd);
		
		return flag;
		
	}
	
}
