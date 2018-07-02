package com.luo.struts.bean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.jite.struts.bean.PageInfo;
import com.luo.hibgen.model.THrJobBase;

public class TopWorkTypeInfo extends PageInfo {
	private Long id;
	private Long theId;
	private String name;
	private Integer type;
	private Long father;
	private Integer rank;
	private Integer status;
	private Date createDate;
	private Date updateDate;
	
	//用于存放该职业类别的工作岗位信息(步骤三要使用)
	private HrJobBaseInfo jobInfo;   
	
	//用于存放第1级职业类别子类（第2级）职业信息(步骤三要使用)
	private List<TopWorkTypeInfo> subItems = new ArrayList<TopWorkTypeInfo>();
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getTheId() {
		return theId;
	}
	public void setTheId(Long theId) {
		this.theId = theId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Long getFather() {
		return father;
	}
	public void setFather(Long father) {
		this.father = father;
	}
	public Integer getRank() {
		return rank;
	}
	public void setRank(Integer rank) {
		this.rank = rank;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
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
	public List<TopWorkTypeInfo> getSubItems() {
		return subItems;
	}
	public void setSubItems(List<TopWorkTypeInfo> subItems) {
		this.subItems = subItems;
	}
	public HrJobBaseInfo getJobInfo() {
		return jobInfo;
	}
	public void setJobInfo(HrJobBaseInfo jobInfo) {
		this.jobInfo = jobInfo;
	}

	
}
