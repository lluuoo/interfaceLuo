package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TSystemOperationlog generated by hbm2java
 */
public class TSystemOperationlog implements java.io.Serializable {

	private Long id;
	private Long userId;
	private String operateType;
	private String operateInfo;
	private Date operateTime;

	public TSystemOperationlog() {
	}

	public TSystemOperationlog(Long userId, String operateType, String operateInfo, Date operateTime) {
		this.userId = userId;
		this.operateType = operateType;
		this.operateInfo = operateInfo;
		this.operateTime = operateTime;
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

	public String getOperateType() {
		return this.operateType;
	}

	public void setOperateType(String operateType) {
		this.operateType = operateType;
	}

	public String getOperateInfo() {
		return this.operateInfo;
	}

	public void setOperateInfo(String operateInfo) {
		this.operateInfo = operateInfo;
	}

	public Date getOperateTime() {
		return this.operateTime;
	}

	public void setOperateTime(Date operateTime) {
		this.operateTime = operateTime;
	}

}