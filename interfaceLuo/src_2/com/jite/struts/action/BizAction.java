package com.jite.struts.action;

import javax.annotation.Resource;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.service.UserService;
import com.jite.struts.bean.BizInfo;
import com.jite.struts.bean.UserInfo;
import com.jite.utils.SystemPropties;

public class BizAction extends BaseAction {

	private static final long serialVersionUID = -7548491842791520104L;
	@Resource
	@Autowired
	private UserService userService;

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public void validate() {
		boolean inputError = false;
		StringBuffer err = new StringBuffer();
		if (null == accountId) {
			inputError = true;
			err.append("accountId ")
					.append(SystemPropties
							.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (null == username || "".equals(username.trim())) {
			inputError = true;
			err.append("username ")
					.append(SystemPropties
							.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (null == birthday || "".equals(birthday.trim())) {
			inputError = true;
			err.append("birthday ")
					.append(SystemPropties
							.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (null == degree || "".equals(degree.trim())) {
			inputError = true;
			err.append("degree ")
					.append(SystemPropties
							.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (null == phoneNumber || "".equals(phoneNumber.trim())) {
			inputError = true;
			err.append("phoneNumber ")
					.append(SystemPropties
							.getProperties("txt.can_not_be_empty")).append("!");
		}
		if (inputError) {
			returnError(SystemPropties.getProperties("code.input_error"),
					err.toString());
		}
	}

	/**
	 * 保存用户简历信息
	 */
	public void preservation() {
		// if(checkInputParas()){
		returnJson = new JSONObject();
		if (userService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession()
							.getServletContext());
			userService = (UserService) ac.getBean("userService");
		}
		//测试用
		System.out.println("accountId=" + accountId + ",username=" + username + ",intentWork=" + intentWork);
		
		BizInfo bizInfo = userService.addUserBizcard(accountId, username,
				birthday, sex, schoolName,schoolNameRoot, degree, curcarrier, volunteerNumber, major,majorRoot,majorSub, phoneNumber,
				emailAddress,intentArea,intentAreaRoot,intentWork,intentWorkRoot,intentWorkSub);
		if (null != bizInfo && null != bizInfo.getUserId()
				&& !"".equals(bizInfo.getUserId())) {
			if ("-100".equals(bizInfo.getUserId())) {
				//??资源文件中没有code.login_id的属性？？
				returnJson.put("code",
						SystemPropties.getProperties("code.login_id"));
				returnJson.put(
						"info",
						accountId
								+ SystemPropties.getProperties("txt.login_id"));
				returnJson.put("userinfo", bizInfo);
			} else {
				//返回码code.success=200
				returnJson.put("code",
						SystemPropties.getProperties("code.success"));
				returnJson.put("info",
						SystemPropties.getProperties("txt.preservation")
								+ SystemPropties.getProperties("txt.success"));
				returnJson.put("BizInfo", bizInfo);
				UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
				if(null!=userInfo){
					userInfo.setBizInfo(bizInfo);
					userInfo.setIsMailVerified(bizInfo.getIsMailVerified());
					userInfo.setEmail(emailAddress);
					userInfo.setIsPhoneVerified(bizInfo.getIsPhoneVerified());
					userInfo.setPhoneNumber(phoneNumber);
				}
			}
		} else {
			//??资源文件中没有code.preservation_fail的属性？？
			returnJson.put("code",
					SystemPropties.getProperties("code.preservation_fail"));
			returnJson.put("info",
					SystemPropties.getProperties("txt.preservation")
							+ SystemPropties.getProperties("txt.fail"));
			returnJson.put("BizInfo", bizInfo);
		}
		returnJsonStr(returnJson.toString());
		// }
	}

	private Long accountId;
	private String username;
	private int sex;
	private String birthday;
	private String degree;
	private String curcarrier;
	private String volunteerNumber;
	private String schoolName;
	private String schoolNameRoot;
	private String major;
	private String majorRoot;
	private String majorSub;
	private String phoneNumber;
	private String emailAddress;
	private String intentArea;
	private String intentAreaRoot;
	private String intentWork;
	private String intentWorkRoot;
	private String intentWorkSub;
	
	public String getCurcarrier() {
		return curcarrier;
	}

	public void setCurcarrier(String curcarrier) {
		this.curcarrier = curcarrier;
	}

	public String getIntentArea() {
		return intentArea;
	}

	public void setIntentArea(String intentArea) {
		this.intentArea = intentArea;
	}

	public String getIntentWork() {
		return intentWork;
	}

	public void setIntentWork(String intentWork) {
		this.intentWork = intentWork;
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

	public String getBirthday() {
		return birthday;
	}

	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}

	public int getSex() {
		return sex;
	}

	public void setSex(int sex) {
		this.sex = sex;
	}

	public String getSchoolName() {
		return schoolName;
	}

	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}

	public String getDegree() {
		return degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getMajor() {
		return major;
	}
	
	

	public String getVolunteerNumber() {
		return volunteerNumber;
	}

	public void setVolunteerNumber(String volunteerNumber) {
		this.volunteerNumber = volunteerNumber;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmailAddress() {
		return emailAddress;
	}

	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}

	
	public String getSchoolNameRoot() {
		return schoolNameRoot;
	}

	public void setSchoolNameRoot(String schoolNameRoot) {
		this.schoolNameRoot = schoolNameRoot;
	}

	public String getMajorRoot() {
		return majorRoot;
	}

	public void setMajorRoot(String majorRoot) {
		this.majorRoot = majorRoot;
	}

	public String getMajorSub() {
		return majorSub;
	}

	public void setMajorSub(String majorSub) {
		this.majorSub = majorSub;
	}

	public String getIntentAreaRoot() {
		return intentAreaRoot;
	}

	public void setIntentAreaRoot(String intentAreaRoot) {
		this.intentAreaRoot = intentAreaRoot;
	}

	public String getIntentWorkRoot() {
		return intentWorkRoot;
	}

	public void setIntentWorkRoot(String intentWorkRoot) {
		this.intentWorkRoot = intentWorkRoot;
	}

	public String getIntentWorkSub() {
		return intentWorkSub;
	}

	public void setIntentWorkSub(String intentWorkSub) {
		this.intentWorkSub = intentWorkSub;
	}

	public void addActionError(String anErrorMessage) {
		String s = anErrorMessage;
		System.out.println(s);
	}

	public void addActionMessage(String aMessage) {
		String s = aMessage;
		System.out.println(s);

	}

	public void addFieldError(String fieldName, String errorMessage) {
		String s = errorMessage;
		String f = fieldName;
		System.out.println(s);
		System.out.println(f);

	}
}
