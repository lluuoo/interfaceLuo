package com.jite.struts.bean;

import java.util.Date;

public class BizInfo {
	private String userId;
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
	private String intentLocation;
	private String intentLocationRoot;
	private String intentLocationSub;
	private String headImage;
	private Date createDate;
	private Date updateDate;
	private Integer isMailVerified;//只用作修改手机重置验证状态用
	private Integer isPhoneVerified;//只用作修改手机重置验证状态用
	private CommonInfo intendAreaItems;
	private CommonInfo intendWorkItems;
	private CommonInfo intendLocationItems;
	
	
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
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

	public String getCurcarrier() {
		return curcarrier;
	}
	public void setCurcarrier(String curcarrier) {
		this.curcarrier = curcarrier;
	}
	
	public String getVolunteerNumber() {
		return volunteerNumber;
	}
	public void setVolunteerNumber(String volunteerNumber) {
		this.volunteerNumber = volunteerNumber;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public String getHeadImage() {
		return headImage;
	}
	public void setHeadImage(String headImage) {
		this.headImage = headImage;
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
	public String getIntentLocation() {
		return intentLocation;
	}
	public void setIntentLocation(String intentLocation) {
		this.intentLocation = intentLocation;
	}
	public String getIntentLocationRoot() {
		return intentLocationRoot;
	}
	public void setIntentLocationRoot(String intentLocationRoot) {
		this.intentLocationRoot = intentLocationRoot;
	}
	public String getIntentLocationSub() {
		return intentLocationSub;
	}
	public void setIntentLocationSub(String intentLocationSub) {
		this.intentLocationSub = intentLocationSub;
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
	public CommonInfo getIntendAreaItems() {
		return intendAreaItems;
	}
	public void setIntendAreaItems(CommonInfo intendAreaItems) {
		this.intendAreaItems = intendAreaItems;
	}
	public CommonInfo getIntendWorkItems() {
		return intendWorkItems;
	}
	public void setIntendWorkItems(CommonInfo intendWorkItems) {
		this.intendWorkItems = intendWorkItems;
	}
	public CommonInfo getIntendLocationItems() {
		return intendLocationItems;
	}
	public void setIntendLocationItems(CommonInfo intendLocationItems) {
		this.intendLocationItems = intendLocationItems;
	}
	
}
