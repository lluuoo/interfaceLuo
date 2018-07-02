package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * THrAccount generated by hbm2java
 */
public class THrAccount implements java.io.Serializable {

	private Long id;
	private Long hrAccountId;
	private String name;
	private Integer sex;
	private String title;
	private String phone;
	private String email;
	private String headPic;
	private Long companyId;
	private Integer approveStatus;
	private Integer isMain;
	private Date createDate;
	private Date updateDate;

	public THrAccount() {
	}

	public THrAccount(Long hrAccountId, String name, Integer sex, String title, String phone, String email,
			String headPic, Long companyId, Integer approveStatus, Integer isMain, Date createDate, Date updateDate) {
		this.hrAccountId = hrAccountId;
		this.name = name;
		this.sex = sex;
		this.title = title;
		this.phone = phone;
		this.email = email;
		this.headPic = headPic;
		this.companyId = companyId;
		this.approveStatus = approveStatus;
		this.isMain = isMain;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getHrAccountId() {
		return this.hrAccountId;
	}

	public void setHrAccountId(Long hrAccountId) {
		this.hrAccountId = hrAccountId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getSex() {
		return this.sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public String getTitle() {
		return this.title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getPhone() {
		return this.phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getHeadPic() {
		return this.headPic;
	}

	public void setHeadPic(String headPic) {
		this.headPic = headPic;
	}

	public Long getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public Integer getApproveStatus() {
		return this.approveStatus;
	}

	public void setApproveStatus(Integer approveStatus) {
		this.approveStatus = approveStatus;
	}

	public Integer getIsMain() {
		return this.isMain;
	}

	public void setIsMain(Integer isMain) {
		this.isMain = isMain;
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