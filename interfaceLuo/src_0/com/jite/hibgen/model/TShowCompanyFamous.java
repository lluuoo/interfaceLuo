package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TShowCompanyFamous generated by hbm2java
 */
public class TShowCompanyFamous implements java.io.Serializable {

	private long id;
	private Long companyId;
	private Integer rank;
	private Date createDate;
	private Date updateDate;

	public TShowCompanyFamous() {
	}

	public TShowCompanyFamous(long id) {
		this.id = id;
	}

	public TShowCompanyFamous(long id, Long companyId, Integer rank, Date createDate, Date updateDate) {
		this.id = id;
		this.companyId = companyId;
		this.rank = rank;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Long getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public Integer getRank() {
		return this.rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
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