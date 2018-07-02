package com.jite.struts.action;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.service.ActivityService;
import com.jite.service.MyUserService;
import com.jite.struts.bean.ActivityInfo;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class MyUserAction extends BaseAction {
	private MyUserService myUserService;
		
	public MyUserService getMyUserService() {
		return myUserService;
	}
	public void setMyUserService(MyUserService myUserService) {
		this.myUserService = myUserService;
	}


	private String name,pwd;	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}


	/**
	 * 用户登录
	 */
	public void login() {
		//1.从Spring容器获取service对象			
		if (myUserService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			myUserService = (MyUserService) ac.getBean("myUserService");
		}

		boolean result = myUserService.login(name, pwd);

		returnJson = new JSONObject();
		if (result == true) {
			returnJson.put("code", SystemPropties.getProperties("code.success"));
			returnJson.put("info", SystemPropties.getProperties("txt.success"));
		}
		else{
			returnJson.put("code", SystemPropties.getProperties("code.fail"));
			returnJson.put("info", SystemPropties.getProperties("txt.fail"));
		}
		returnJsonStr(returnJson.toString());
		
	}

}
