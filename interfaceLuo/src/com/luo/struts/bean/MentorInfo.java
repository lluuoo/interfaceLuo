package com.luo.struts.bean;

import java.util.Date;
import java.util.List;

public class MentorInfo {
	private String id;
	private String rank;
	private Date createDate;
	private Date updateDate;
	private MentorBaseInfo mentorBase;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}

	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public MentorBaseInfo getMentorBase() {
		return mentorBase;
	}
	public void setMentorBase(MentorBaseInfo mentorBase) {
		this.mentorBase = mentorBase;
	}

}
