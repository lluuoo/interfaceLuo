package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TSystemLoginlog generated by hbm2java
 */
public class TSystemLoginlog implements java.io.Serializable {

	private Long id;
	private Long userId;
	private Date loginTime;
	private Date logoutTime;

	public TSystemLoginlog() {
	}

	public TSystemLoginlog(Long userId, Date loginTime, Date logoutTime) {
		this.userId = userId;
		this.loginTime = loginTime;
		this.logoutTime = logoutTime;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getUserId() {
		return this.userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Date getLoginTime() {
		return this.loginTime;
	}

	public void setLoginTime(Date loginTime) {
		this.loginTime = loginTime;
	}

	public Date getLogoutTime() {
		return this.logoutTime;
	}

	public void setLogoutTime(Date logoutTime) {
		this.logoutTime = logoutTime;
	}

}
