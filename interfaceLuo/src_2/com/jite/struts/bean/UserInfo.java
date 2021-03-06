package com.jite.struts.bean;

import java.util.Date;

public class UserInfo {
	private String userId;
	private String username;
	private String type;
	private String phoneNumber;
	private String email;
	private String realName;
	private String birthYear;
	private String headImage;
	private Integer isMailVerified;
	private Integer isPhoneVerified;
	private Integer status;
	private Date lastLogin;
	private String sessionSavedMessage;
	private BizInfo bizInfo;
	private HrAccountInfo hrInfo;	
	private HrCompanyInfo companyInfo;

	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRealName() {
		return realName;
	}
	public void setRealName(String realName) {
		this.realName = realName;
	}
	public String getBirthYear() {
		return birthYear;
	}
	public void setBirthYear(String birthYear) {
		this.birthYear = birthYear;
	}

	public String getHeadImage() {
		return headImage;
	}
	public void setHeadImage(String headImage) {
		this.headImage = headImage;
	}

	public Date getLastLogin() {
		return lastLogin;
	}
	public void setLastLogin(Date lastLogin) {
		this.lastLogin = lastLogin;
	}
	public String getSessionSavedMessage() {
		return sessionSavedMessage;
	}
	public void setSessionSavedMessage(String sessionSavedMessage) {
		this.sessionSavedMessage = sessionSavedMessage;
	}
	public Integer getIsMailVerified() {
		return isMailVerified;
	}
	public void setIsMailVerified(Integer isMailVerified) {
		this.isMailVerified = isMailVerified;
	}
	public Integer getIsPhoneVerified() {
		return isPhoneVerified;
	}
	public void setIsPhoneVerified(Integer isPhoneVerified) {
		this.isPhoneVerified = isPhoneVerified;
	}
	
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public BizInfo getBizInfo() {
		return bizInfo;
	}
	public void setBizInfo(BizInfo bizInfo) {
		this.bizInfo = bizInfo;
	}
	public HrAccountInfo getHrInfo() {
		return hrInfo;
	}
	public void setHrInfo(HrAccountInfo hrInfo) {
		this.hrInfo = hrInfo;
	}
	public HrCompanyInfo getCompanyInfo() {
		return companyInfo;
	}
	public void setCompanyInfo(HrCompanyInfo companyInfo) {
		this.companyInfo = companyInfo;
	}
}
