package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TOrgActiveUser generated by hbm2java
 */
public class TOrgActiveUser implements java.io.Serializable {

	private Long id;
	private Long activeId;
	private Long accountId;
	private Integer status;
	private Date createDate;
	private Date updateDate;

	public TOrgActiveUser() {
	}

	public TOrgActiveUser(Long activeId, Long accountId, Integer status, Date createDate, Date updateDate) {
		this.activeId = activeId;
		this.accountId = accountId;
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

	public Long getActiveId() {
		return this.activeId;
	}

	public void setActiveId(Long activeId) {
		this.activeId = activeId;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
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
