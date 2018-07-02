package com.jite.struts.bean;

import java.util.Date;
import java.util.List;

public class TShowHomeworktypesInfo extends PageInfo{

	private Long id;
	private Long theId;
	private String name;
	private Integer type;
	private Long father;
	private Integer rank;
	private Integer status;
	private Date createDate;
	private Date updateDate;
	private List<TShowHomeworktypesInfo> subItems;

	public List<TShowHomeworktypesInfo> getSubItems() {
		return subItems;
	}

	public void setSubItems(List<TShowHomeworktypesInfo> subItems) {
		this.subItems = subItems;
	}

	public TShowHomeworktypesInfo() {
	}

	public TShowHomeworktypesInfo(Long theId, String name, Integer type, Long father, Integer rank, Integer status,
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