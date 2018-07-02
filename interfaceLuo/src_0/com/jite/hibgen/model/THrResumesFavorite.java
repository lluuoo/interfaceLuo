package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * THrResumesFavorite generated by hbm2java
 */
public class THrResumesFavorite implements java.io.Serializable {

	private Long id;
	private Long hrId;
	private Long jobId;
	private Long accountId;
	private Long companyId;
	private Integer status;
	private Date createDate;
	private Date updateDate;

	public THrResumesFavorite() {
	}

	public THrResumesFavorite(Long hrId, Long jobId, Long accountId, Long companyId, Integer status, Date createDate,
			Date updateDate) {
		this.hrId = hrId;
		this.jobId = jobId;
		this.accountId = accountId;
		this.companyId = companyId;
		this.status = status;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHrId() {
		return this.hrId;
	}

	public void setHrId(Long hrId) {
		this.hrId = hrId;
	}

	public Long getJobId() {
		return this.jobId;
	}

	public void setJobId(Long jobId) {
		this.jobId = jobId;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public Long getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
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