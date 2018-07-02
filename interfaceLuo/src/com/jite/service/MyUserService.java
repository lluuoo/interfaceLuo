package com.jite.service;

import java.util.List;

import com.jite.hibgen.dao.MyUserDao;
import com.jite.hibgen.model.TUser;

public class MyUserService {
	/**
	 * 用户名密码匹配；
	 * @return 成功：ture; 失败：false
	 */
	private MyUserDao myUserDao;	
	
	public MyUserDao getMyUserDao() {
		return myUserDao;
	}

	public void setMyUserDao(MyUserDao myUserDao) {
		this.myUserDao = myUserDao;
	}

	public boolean login(String name, String pwd){
		//1.从Spring容器获取Dao对象（依赖注入，自动获取了）
		//2.使用myUserDao对象，完成查询
		
		List<TUser> list = (List<TUser>)myUserDao.search(name, pwd);
		if (list.size()>0)
			return true;
		else	
			return false;
	}

}
