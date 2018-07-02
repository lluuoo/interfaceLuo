package com.jite.struts.bean;

import java.util.Date;
import java.util.List;

public class ActivityInfo extends PageInfo{
	private Long id;
	private String name;
	private String org;
	private String icon;
	private String images;
	private String description;
	private String location;
	private Date fromTime;
	private Date endTime;
	private String contactName;
	private String contactPhone;
	private String contactEmail;
	private Integer greatSum;
	private Integer maxJoin;
	private Integer template;
	private Date createDate;
	private Date updateDate;

	private List<UserInfo> joinList;
	
	public ActivityInfo() {
	}

	public ActivityInfo(String name, String icon, String images,
			String description, String location, Date fromTime, Date endTime,
			String contactName, String contactPhone, String contactEmail,
			Integer greatSum, Integer template, Date createDate, Date updateDate) {
		this.name = name;
		this.icon = icon;
		this.images = images;
		this.description = description;
		this.location = location;
		this.fromTime = fromTime;
		this.endTime = endTime;
		this.contactName = contactName;
		this.contactPhone = contactPhone;
		this.contactEmail = contactEmail;
		this.greatSum = greatSum;
		this.template = template;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getIcon() {
		return this.icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getImages() {
		return this.images;
	}

	public void setImages(String images) {
		this.images = images;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return this.location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Date getFromTime() {
		return this.fromTime;
	}

	public void setFromTime(Date fromTime) {
		this.fromTime = fromTime;
	}

	public Date getEndTime() {
		return this.endTime;
	}

	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}

	public String getContactName() {
		return this.contactName;
	}

	public void setContactName(String contactName) {
		this.contactName = contactName;
	}

	public String getContactPhone() {
		return this.contactPhone;
	}

	public void setContactPhone(String contactPhone) {
		this.contactPhone = contactPhone;
	}

	public String getContactEmail() {
		return this.contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public Integer getGreatSum() {
		return this.greatSum;
	}

	public void setGreatSum(Integer greatSum) {
		this.greatSum = greatSum;
	}

	public Integer getTemplate() {
		return this.template;
	}

	public void setTemplate(Integer template) {
		this.template = template;
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

	public String getOrg() {
		return org;
	}

	public void setOrg(String org) {
		this.org = org;
	}

	public List<UserInfo> getJoinList() {
		return joinList;
	}

	public void setJoinList(List<UserInfo> joinList) {
		this.joinList = joinList;
	}

	public Integer getMaxJoin() {
		return maxJoin;
	}

	public void setMaxJoin(Integer maxJoin) {
		this.maxJoin = maxJoin;
	}
}
