package com.jite.struts.action;

import java.util.Date;
import java.util.Random;

import javax.annotation.Resource;
import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;

import net.sf.json.JSONObject;

import com.jite.utils.SystemPropties;    //读取资源文件用
import com.jite.utils.VerificationCodeUtil;   //产生验证码用
import com.jite.struts.bean.UserInfo;

/**
 * 下面的import中，注释的都是原代码先有的 * 
 */
import com.jite.service.UserService;
//import com.jite.struts.bean.MailInfo;
//import com.jite.struts.bean.ProfileInfo;
//import com.jite.utils.MailSenderFactory;
//import com.jite.utils.MailSimpleSender;
//import com.jite.utils.SendCloudSmtp;
//import com.jite.utils.ValidateTool;


import org.springframework.web.context.support.WebApplicationContextUtils;

public class LoginAction extends BaseAction {

	private static final long serialVersionUID = -7548491842791520104L;
	
	private Long accountId;
	private String username;
	private String password;
	private String newpwd;
	private String verifycode;
	private String invitecode;
	private String usertype;// 用户类型(1-求职者,2-企业HR)
	private String email;
	
	@Resource
	@Autowired
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	/**
	 * 参数有效性检验
	 * @return
	 */
	public boolean checkInputParas() {
		boolean inputError = false;
		StringBuffer err = new StringBuffer();
		if (null == username || "".equals(username.trim())) {   //用户名必填
			inputError = true;
			err.append("username ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (null == password || "".equals(password.trim())) {  //密码必填
			inputError = true;
			err.append("password ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (operater != null && operater > 10) {
			/* 不是网站不用验证码 */
		} else {
			if (null == verifycode || "".equals(verifycode.trim())) {   /*验证码必填*/
				inputError = true;
				err.append("verifycode ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
			}
		}
		if (null == usertype || "".equals(usertype.trim())) {    /*用户类型必填*/
			inputError = true;
			err.append("usertype ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
		} else {
			try {
				Integer.parseInt(usertype);
			} catch (Exception e) {
				inputError = true;
				err.append("usertype ").append(SystemPropties.getProperties("txt.should_be_int")).append("!");
			}
		}
		if (inputError) {
			returnError(SystemPropties.getProperties("code.input_error"), err.toString());
		}

		return !inputError;
	}

	/**
	 * 2016-8-1 疑问：为何getVerifyCode()在每次action请求时都被执行两遍？？
	 */
	public void getVerifyCode() {
		VerificationCodeUtil vcu = VerificationCodeUtil.Instance();
		String theVerifyCode = vcu.getVerificationCodeValue();
		
		request.getSession().setAttribute(SystemPropties.getProperties("cfg.the_login_verify_code").toString(),
				theVerifyCode);
		
		returnJson = new JSONObject();
		returnJson.put("theVerifyCode", theVerifyCode);
		returnJsonStr(returnJson.toString());

		System.out.println(" theVerifyCode = " + theVerifyCode);
	}

//	//新用户注册
	public void regist() {
		
		if (checkInputParas()) {  // 参数有效性检验
			if (userService == null) {
				ApplicationContext ac = WebApplicationContextUtils
						.getWebApplicationContext(request.getSession().getServletContext());
				userService = (UserService) ac.getBean("userService");
			}
			
			/**
			 * 定义两个字符串存放“邀请码”有效性检验结果:
			 * 查询结果码及代理人账号(两个元素的String[],如{"200","wuhanligongdaxue"})
			 */
			String[] checkInviteCodeResults = new String[2];  
			
			//判断用户注册时是否需要强制邀请码
			if (Boolean.valueOf(SystemPropties.getProperties("cfg.user_reg_invite_code"))) {
				// 如果开启注册需要邀请码（“邀请码”便于代理人员后台管理用）
				if (usertype != null && ("1".equals(usertype) || "2".equals(usertype))) {
					if (null == invitecode || "".equals(invitecode.trim())) {   //没有邀请码
						returnError(SystemPropties.getProperties("code.input_error"),
								"邀请码" + SystemPropties.getProperties("txt.can_not_be_empty") + "!");
						return;
					} else {   //有邀请码

						//查询“邀请码”的有效性检验，结果返回查询结果码[0]及代理人账号[1]
						checkInviteCodeResults = userService.checkInviteCode(invitecode);
						if (!checkInviteCodeResults[0].equals("200")) {
							returnError(SystemPropties.getProperties("code.not_match"), "无此邀请码或邀请码已停用!");
							return;
						}
					}
				}
			}

			if (operater != null && operater > 10) {
				// 不是网站不用验证码
			} else {
				//从session中取到注册验证码（服务器后台生成的验证码）
				String sessionVerifyCode = (String) request.getSession()
						.getAttribute(SystemPropties.getProperties("cfg.the_login_verify_code").toString());
				
				//verifycode是用户填写的验证码，与服务器后台生成的验证码进行匹配
				if (!verifycode.equals(sessionVerifyCode)) {
					returnError(SystemPropties.getProperties("code.input_error"),
							SystemPropties.getProperties("txt.verifycode")
									+ SystemPropties.getProperties("txt.not_match"));
					return;
				}
				operater = 10;// 表示网站注册
			}
			returnJson = new JSONObject();

			//验证码和邀请码的有效性检验都通过了，下面就是添加注册用户（完成了3件事）了。
			UserInfo userInfo = userService.addUserAccount(username, password, Integer.parseInt(usertype),
					checkInviteCodeResults[1], invitecode, operater);
			
			if (null != userInfo && null != userInfo.getUserId() && !"".equals(userInfo.getUserId())) {
				if ("-100".equals(userInfo.getUserId())) {  //userId=“-100”表示用户已经存在
					returnJson.put("code", SystemPropties.getProperties("code.already_exists"));
					if (userInfo.getType() != null && "1".equals(userInfo.getType())) {
						returnJson.put("info",
								username + SystemPropties.getProperties("txt.already_exists") + ","
										+ SystemPropties.getProperties("txt.user_type") + ":"
										+ SystemPropties.getProperties("txt.user_type_one"));
					} else if (userInfo.getType() != null && "2".equals(userInfo.getType())) {
						returnJson.put("info",
								username + SystemPropties.getProperties("txt.already_exists") + ","
										+ SystemPropties.getProperties("txt.user_type") + ":"
										+ SystemPropties.getProperties("txt.user_type_two"));
					} else if (userInfo.getType() != null && "3".equals(userInfo.getType())) {
						returnJson.put("info",
								username + SystemPropties.getProperties("txt.already_exists") + ","
										+ SystemPropties.getProperties("txt.user_type") + ":"
										+ SystemPropties.getProperties("txt.user_type_three"));
					} else {
						returnJson.put("info", username + SystemPropties.getProperties("txt.already_exists"));
					}
					returnJson.put("userinfo", userInfo);
				} else {   //新用户信息返回客户端，并存入session回话中
					returnJson.put("code", SystemPropties.getProperties("code.success"));
					returnJson.put("info",
							SystemPropties.getProperties("txt.regist") + SystemPropties.getProperties("txt.success"));
					returnJson.put("userinfo", userInfo);
					request.getSession().setAttribute(SystemPropties.getProperties("cfg.session_user"), userInfo);
				}
			} else {
				returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
				returnJson.put("info",
						SystemPropties.getProperties("txt.regist") + SystemPropties.getProperties("txt.fail"));
				returnJson.put("userinfo", userInfo);
			}
			returnJsonStr(returnJson.toString());
		}
	}
	
	/**
	 * 检查用户是否已经登录
	 */
	public void check() {
		returnJson = new JSONObject();
		UserInfo userInfo = (UserInfo) request.getSession()
				.getAttribute(SystemPropties.getProperties("cfg.session_user"));
		if (null != userInfo && null != userInfo.getUserId() && !"".equals(userInfo.getUserId())) {
			returnJson.put("code", SystemPropties.getProperties("code.success"));  //代码：200
			returnJson.put("info",
					SystemPropties.getProperties("txt.login") + SystemPropties.getProperties("txt.success"));
			returnJson.put("userinfo", userInfo);
		} else {
			returnJson.put("code", SystemPropties.getProperties("code.input_error")); //代码：404
			returnJson.put("info", SystemPropties.getProperties("txt.session_time_out_or_not_login"));
		}
		returnJsonStr(returnJson.toString());
	}

	/**
	 * 用户登录
	 */
	public void login() {
		System.out.println("==================================username=" + this.username);
		if (checkInputParas()) {
			if (operater != null && operater > 10) {
				// 不是网站不用验证码
			} else {
				String sessionVerifyCode = (String) request.getSession()
						.getAttribute(SystemPropties.getProperties("cfg.the_login_verify_code").toString());
				// System.out.println(request.getSession().getId()+"--inlogon-verifycode"+sessionVerifyCode);
				//验证码匹配比较
				if (!verifycode.equals(sessionVerifyCode)) {
					returnError(SystemPropties.getProperties("code.input_error"),
							SystemPropties.getProperties("txt.verifycode")
									+ SystemPropties.getProperties("txt.not_match"));
					return;
				}
			}
			returnJson = new JSONObject();
			if (userService == null) {
				ApplicationContext ac = WebApplicationContextUtils
						.getWebApplicationContext(request.getSession().getServletContext());
				userService = (UserService) ac.getBean("userService");
			}
			//用户账户密码验证
			UserInfo userInfo = userService.checkUserAccount(username, password, Integer.parseInt(usertype));
			if (null != userInfo && null != userInfo.getUserId() && !"".equals(userInfo.getUserId())) {

				try {
					//将用户登录信息写入日志表
					userService.addUserLoginlog(userInfo.getUserId());
				} catch (Exception e) {
				}

				returnJson.put("code", SystemPropties.getProperties("code.success"));
				returnJson.put("info",
						SystemPropties.getProperties("txt.login") + SystemPropties.getProperties("txt.success"));
				returnJson.put("userinfo", userInfo);
				request.getSession().setAttribute(SystemPropties.getProperties("cfg.session_user"), userInfo);

			} else {
				returnJson.put("code", SystemPropties.getProperties("code.input_error"));
				returnJson.put("info",
						SystemPropties.getProperties("txt.login") + SystemPropties.getProperties("txt.fail") + "!"
								+ SystemPropties.getProperties("txt.login_username_or_password_wrong"));
				returnJson.put("userinfo", userInfo);
			}
			returnJsonStr(returnJson.toString());
		}
	}

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getVerifycode() {
		return verifycode;
	}

	public void setVerifycode(String verifycode) {
		this.verifycode = verifycode;
	}

	public String getInvitecode() {
		return invitecode;
	}

	public void setInvitecode(String invitecode) {
		this.invitecode = invitecode;
	}

	public String getUsertype() {
		return usertype;
	}

	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}

	@Override
	public void validate() {
		super.validate();
	}

	public String getNewpwd() {
		return newpwd;
	}

	public void setNewpwd(String newpwd) {
		this.newpwd = newpwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
}
