package com.luo.struts.bean;
// Generated 2017-4-22 18:08:38 by Hibernate Tools 4.3.1.Final

import java.util.Date;
import java.util.List;

/**
 * TShowHomeareas generated by hbm2java
 */
public class ShowHomeareasInfo implements java.io.Serializable {

	private Long id;
	private Long theId;
	private String name;
	private Integer type;
	private Long father;
	private Integer rank;
	private Integer status;
	private Date createDate;
	private Date updateDate;
	
	//增加几个相关表的集合属性
	private List<HrCompanyAreasInfo> companyAreasInfos;
	private List<HrCompanyMediasInfo> companyMediasInfos;
	private List<HrCompanyStartInfo> companyStartInfos;
	
	public List<HrCompanyAreasInfo> getCompanyAreasInfos() {
		return companyAreasInfos;
	}

	public void setCompanyAreasInfos(List<HrCompanyAreasInfo> companyAreasInfos) {
		this.companyAreasInfos = companyAreasInfos;
	}

	public List<HrCompanyMediasInfo> getCompanyMediasInfos() {
		return companyMediasInfos;
	}

	public void setCompanyMediasInfos(List<HrCompanyMediasInfo> companyMediasInfos) {
		this.companyMediasInfos = companyMediasInfos;
	}

	public List<HrCompanyStartInfo> getCompanyStartInfos() {
		return companyStartInfos;
	}

	public void setCompanyStartInfos(List<HrCompanyStartInfo> companyStartInfos) {
		this.companyStartInfos = companyStartInfos;
	}

	public ShowHomeareasInfo() {
	}

	public ShowHomeareasInfo(Long theId, String name, Integer type, Long father, Integer rank, Integer status,
			Date createDate, Date updateDate) {
		this.theId = theId;
		this.name = name;
		this.type = type;
		this.father = father;
		this.rank = rank;
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

	public Long getTheId() {
		return this.theId;
	}

	public void setTheId(Long theId) {
		this.theId = theId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getType() {
		return this.type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Long getFather() {
		return this.father;
	}

	public void setFather(Long father) {
		this.father = father;
	}

	public Integer getRank() {
		return this.rank;
	}

	public void setRank(Integer rank) {
		this.rank = rank;
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
