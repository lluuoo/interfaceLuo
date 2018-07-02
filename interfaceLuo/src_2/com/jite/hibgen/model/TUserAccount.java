package com.jite.hibgen.model;

// Generated 2015-6-18 23:23:36 by Hibernate Tools 3.4.0.CR1

import java.util.Date;

/**
 * TUserAccount generated by hbm2java
 */
public class TUserAccount implements java.io.Serializable {

	private Long id;
	private String account;
	private String password;
	private Integer type;
	private String phone;
	private String email;
	private String mailVerifyCode;
	private Integer isMailVerified;
	private String phoneVerifyCode;
	private Integer isPhoneVerified;
	private Integer status;
	private Date lastlogin;
	private Date createDate;
	private Date updateDate;

	public TUserAccount() {
	}

	public TUserAccount(String account, String password, Integer type,
			String phone, String email, String mailVerifyCode,
			Integer isMailVerified, String phoneVerifyCode,
			Integer isPhoneVerified, Integer status, Date lastlogin,
			Date createDate, Date updateDate) {
		this.account = account;
		this.password = password;
		this.type = type;
		this.phone = phone;
		this.email = email;
		this.mailVerifyCode = mailVerifyCode;
		this.isMailVerified = isMailVerified;
		this.phoneVerifyCode = phoneVerifyCode;
		this.isPhoneVerified = isPhoneVerified;
		this.status = status;
		this.lastlogin = lastlogin;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAccount() {
		return this.account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getType() {
		return this.type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMailVerifyCode() {
		return this.mailVerifyCode;
	}

	public void setMailVerifyCode(String mailVerifyCode) {
		this.mailVerifyCode = mailVerifyCode;
	}

	public Integer getIsMailVerified() {
		return this.isMailVerified;
	}

	public void setIsMailVerified(Integer isMailVerified) {
		this.isMailVerified = isMailVerified;
	}

	public String getPhoneVerifyCode() {
		return this.phoneVerifyCode;
	}

	public void setPhoneVerifyCode(String phoneVerifyCode) {
		this.phoneVerifyCode = phoneVerifyCode;
	}

	public Integer getIsPhoneVerified() {
		return this.isPhoneVerified;
	}

	public void setIsPhoneVerified(Integer isPhoneVerified) {
		this.isPhoneVerified = isPhoneVerified;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Date getLastlogin() {
		return this.lastlogin;
	}

	public void setLastlogin(Date lastlogin) {
		this.lastlogin = lastlogin;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Date getUpdateDate() {
		return this.updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

}
