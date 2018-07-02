package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TUserProfileCertificate generated by hbm2java
 */
public class TUserProfileCertificate implements java.io.Serializable {

	private Long id;
	private Date updateDate;
	private Date createDate;
	private String CDescription;
	private String CResult;
	private String CType;
	private Date CTime;
	private Long accountId;

	public TUserProfileCertificate() {
	}

	public TUserProfileCertificate(Date updateDate, Date createDate, String CDescription, String CResult, String CType,
			Date CTime, Long accountId) {
		this.updateDate = updateDate;
		this.createDate = createDate;
		this.CDescription = CDescription;
		this.CResult = CResult;
		this.CType = CType;
		this.CTime = CTime;
		this.accountId = accountId;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getUpdateDate() {
		return this.updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public String getCDescription() {
		return this.CDescription;
	}

	public void setCDescription(String CDescription) {
		this.CDescription = CDescription;
	}

	public String getCResult() {
		return this.CResult;
	}

	public void setCResult(String CResult) {
		this.CResult = CResult;
	}

	public String getCType() {
		return this.CType;
	}

	public void setCType(String CType) {
		this.CType = CType;
	}

	public Date getCTime() {
		return this.CTime;
	}

	public void setCTime(Date CTime) {
		this.CTime = CTime;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

}
