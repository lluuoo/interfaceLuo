package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TBqjyEdu generated by hbm2java
 */
public class TBqjyEdu implements java.io.Serializable {

	private Long id;
	private Long accountId;
	private String time;
	private String degree;
	private String school;
	private String major;
	private String studentCardPhoto;
	private Integer classRank;
	private String transcriptionPhoto;
	private Date createDate;
	private Date updateDate;

	public TBqjyEdu() {
	}

	public TBqjyEdu(Long accountId, String time, String degree, String school, String major, String studentCardPhoto,
			Integer classRank, String transcriptionPhoto, Date createDate, Date updateDate) {
		this.accountId = accountId;
		this.time = time;
		this.degree = degree;
		this.school = school;
		this.major = major;
		this.studentCardPhoto = studentCardPhoto;
		this.classRank = classRank;
		this.transcriptionPhoto = transcriptionPhoto;
		this.createDate = createDate;
		this.updateDate = updateDate;
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

	public String getTime() {
		return this.time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getDegree() {
		return this.degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public String getSchool() {
		return this.school;
	}

	public void setSchool(String school) {
		this.school = school;
	}

	public String getMajor() {
		return this.major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getStudentCardPhoto() {
		return this.studentCardPhoto;
	}

	public void setStudentCardPhoto(String studentCardPhoto) {
		this.studentCardPhoto = studentCardPhoto;
	}

	public Integer getClassRank() {
		return this.classRank;
	}

	public void setClassRank(Integer classRank) {
		this.classRank = classRank;
	}

	public String getTranscriptionPhoto() {
		return this.transcriptionPhoto;
	}

	public void setTranscriptionPhoto(String transcriptionPhoto) {
		this.transcriptionPhoto = transcriptionPhoto;
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
