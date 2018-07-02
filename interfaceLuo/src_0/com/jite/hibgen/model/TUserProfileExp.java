package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TUserProfileExp generated by hbm2java
 */
public class TUserProfileExp implements java.io.Serializable {

	private Long id;
	private Long accountId;
	private String type;
	private Date fromDate;
	private Date endDate;
	private String depart;
	private String company;
	private String jobDescription;
	private Date createDate;
	private Date updateDate;
	private String jobName;
	private String office;
	private String department;
	private String description;

	public TUserProfileExp() {
	}

	public TUserProfileExp(Long accountId, String type, Date fromDate, Date endDate, String depart, String company,
			String jobDescription, Date createDate, Date updateDate, String jobName, String office, String department,
			String description) {
		this.accountId = accountId;
		this.type = type;
		this.fromDate = fromDate;
		this.endDate = endDate;
		this.depart = depart;
		this.company = company;
		this.jobDescription = jobDescription;
		this.createDate = createDate;
		this.updateDate = updateDate;
		this.jobName = jobName;
		this.office = office;
		this.department = department;
		this.description = description;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public Date getFromDate() {
		return this.fromDate;
	}

	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}

	public Date getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public String getDepart() {
		return this.depart;
	}

	public void setDepart(String depart) {
		this.depart = depart;
	}

	public String getCompany() {
		return this.company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getJobDescription() {
		return this.jobDescription;
	}

	public void setJobDescription(String jobDescription) {
		this.jobDescription = jobDescription;
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

	public String getJobName() {
		return this.jobName;
	}

	public void setJobName(String jobName) {
		this.jobName = jobName;
	}

	public String getOffice() {
		return this.office;
	}

	public void setOffice(String office) {
		this.office = office;
	}

	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
