package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * THrCompany generated by hbm2java
 */
public class THrCompany implements java.io.Serializable {

	private Long id;
	private String name;
	private String shortName;
	private String logo;
	private String scaleType;
	private String type;
	private String province;
	private String tags;
	private String address;
	private String traffic;
	private String homepage;
	private String telephone;
	private String shortDesc;
	private String description;
	private Integer isStart;
	private Integer status;
	private String certificateFile;
	private Date createDate;
	private Date updateDate;
	private Long updater;

	public THrCompany() {
	}

	public THrCompany(String name, String shortName, String logo, String scaleType, String type, String province,
			String tags, String address, String traffic, String homepage, String telephone, String shortDesc,
			String description, Integer isStart, Integer status, String certificateFile, Date createDate,
			Date updateDate, Long updater) {
		this.name = name;
		this.shortName = shortName;
		this.logo = logo;
		this.scaleType = scaleType;
		this.type = type;
		this.province = province;
		this.tags = tags;
		this.address = address;
		this.traffic = traffic;
		this.homepage = homepage;
		this.telephone = telephone;
		this.shortDesc = shortDesc;
		this.description = description;
		this.isStart = isStart;
		this.status = status;
		this.certificateFile = certificateFile;
		this.createDate = createDate;
		this.updateDate = updateDate;
		this.updater = updater;
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

	public String getShortName() {
		return this.shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public String getLogo() {
		return this.logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getScaleType() {
		return this.scaleType;
	}

	public void setScaleType(String scaleType) {
		this.scaleType = scaleType;
	}

	public String getType() {
		return this.type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getProvince() {
		return this.province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getTags() {
		return this.tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getAddress() {
		return this.address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTraffic() {
		return this.traffic;
	}

	public void setTraffic(String traffic) {
		this.traffic = traffic;
	}

	public String getHomepage() {
		return this.homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public String getTelephone() {
		return this.telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getShortDesc() {
		return this.shortDesc;
	}

	public void setShortDesc(String shortDesc) {
		this.shortDesc = shortDesc;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getIsStart() {
		return this.isStart;
	}

	public void setIsStart(Integer isStart) {
		this.isStart = isStart;
	}

	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public String getCertificateFile() {
		return this.certificateFile;
	}

	public void setCertificateFile(String certificateFile) {
		this.certificateFile = certificateFile;
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

	public Long getUpdater() {
		return this.updater;
	}

	public void setUpdater(Long updater) {
		this.updater = updater;
	}

}