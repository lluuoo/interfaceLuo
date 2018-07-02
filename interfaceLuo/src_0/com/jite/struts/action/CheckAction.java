package com.jite.struts.action;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.bean.GameFingerGuessDataInfo;
import com.jite.struts.service.CheckService;
import com.jite.struts.service.LoginService;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class CheckAction extends BaseAction{

	private CheckService checkService;
	
	public CheckService getCheckService() {
		return checkService;
	}
	public void setCheckService(CheckService checkService) {
		this.checkService = checkService;
	}
	public String input_verify_code;
	public String getInput_verify_code() {
		return input_verify_code;
	}
	public void setInput_verify_code(String input_verify_code) {
		this.input_verify_code = input_verify_code;
	}
	public String username;
	public String userpwd;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUserpwd() {
		return userpwd;
	}
	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}
	public void login(){
		boolean flag;
		String sessionVerifyCode = (String) request.getSession()
				.getAttribute(SystemPropties.getProperties("cfg.the_login_verify_code").toString());
		// System.out.println(request.getSession().getId()+"--inlogon-verifycode"+sessionVerifyCode);
		//验证码匹配比较
		if (!input_verify_code.equals(sessionVerifyCode)) {
			returnError(SystemPropties.getProperties("code.input_error"),
					SystemPropties.getProperties("txt.verifycode")
							+ SystemPropties.getProperties("txt.not_match"));
			return;
		}
		if (checkService == null) {
			ApplicationContext cc = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			checkService = (CheckService) cc.getBean("checkService");
			flag=checkService.checklogin(username, userpwd);
			returnJson = new JSONObject();
			if(flag){
				returnJson.put("code",200);
				returnJson.put("info","登录成功");
				returnJsonStr(returnJson.toString());
			}else{
				returnJson.put("code",-1);
				returnJson.put("info","登录失败");
				returnJsonStr(returnJson.toString());
			}
		}
	}
	
	public void getVerifyCodeA() {
		LoginService yzcode = LoginService.Instance();
		String theVerifyCode = yzcode.getVerificationCodeValue();
		//VerificationCodeUtil vcu = VerificationCodeUtil.Instance();
		//String theVerifyCode = vcu.getVerificationCodeValue();
		request.getSession().setAttribute(SystemPropties.getProperties("cfg.the_login_verify_code").toString(),
				theVerifyCode);
		
		returnJson = new JSONObject();
		returnJson.put("theVerifyCode", theVerifyCode);
		returnJsonStr(returnJson.toString());

		System.out.println(" theVerifyCode = " + theVerifyCode);
	}

	
}
