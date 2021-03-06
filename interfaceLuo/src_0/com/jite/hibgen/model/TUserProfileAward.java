package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TUserProfileAward generated by hbm2java
 */
public class TUserProfileAward implements java.io.Serializable {

	private Long id;
	private Date updateDate;
	private Date createDate;
	private String awardProportion2;
	private String awardProportion1;
	private Date time;
	private Long accountId;

	public TUserProfileAward() {
	}

	public TUserProfileAward(Date updateDate, Date createDate, String awardProportion2, String awardProportion1,
			Date time, Long accountId) {
		this.updateDate = updateDate;
		this.createDate = createDate;
		this.awardProportion2 = awardProportion2;
		this.awardProportion1 = awardProportion1;
		this.time = time;
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

	public String getAwardProportion2() {
		return this.awardProportion2;
	}

	public void setAwardProportion2(String awardProportion2) {
		this.awardProportion2 = awardProportion2;
	}

	public String getAwardProportion1() {
		return this.awardProportion1;
	}

	public void setAwardProportion1(String awardProportion1) {
		this.awardProportion1 = awardProportion1;
	}

	public Date getTime() {
		return this.time;
	}

	public void setTime(Date time) {
		this.time = time;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

}
