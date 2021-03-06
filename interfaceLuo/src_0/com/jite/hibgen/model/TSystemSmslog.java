package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TSystemSmslog generated by hbm2java
 */
public class TSystemSmslog implements java.io.Serializable {

	private Long id;
	private Long userId;
	private String mobile;
	private String sms;
	private String url;
	private String urlOutput;
	private Date createDate;
	private Date updateDate;

	public TSystemSmslog() {
	}

	public TSystemSmslog(Long userId, String mobile, String sms, String url, String urlOutput, Date createDate,
			Date updateDate) {
		this.userId = userId;
		this.mobile = mobile;
		this.sms = sms;
		this.url = url;
		this.urlOutput = urlOutput;
		this.createDate = createDate;
		this.updateDate = updateDate;
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

	public String getMobile() {
		return this.mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getSms() {
		return this.sms;
	}

	public void setSms(String sms) {
		this.sms = sms;
	}

	public String getUrl() {
		return this.url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getUrlOutput() {
		return this.urlOutput;
	}

	public void setUrlOutput(String urlOutput) {
		this.urlOutput = urlOutput;
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
