package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TShowMentor generated by hbm2java
 */
public class TShowMentor implements java.io.Serializable {

	private Long id;
	private Long mentorId;
	private Integer rank;
	private Date createDate;
	private Date updateDate;

	public TShowMentor() {
	}

	public TShowMentor(Long mentorId, Integer rank, Date createDate, Date updateDate) {
		this.mentorId = mentorId;
		this.rank = rank;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMentorId() {
		return this.mentorId;
	}

	public void setMentorId(Long mentorId) {
		this.mentorId = mentorId;
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