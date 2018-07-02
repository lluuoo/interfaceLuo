package com.luo.struts.bean;

import java.util.Date;
/**
 * THrJobBase对应的页面实体类
 * @author luo
 *
 */
public class HrJobBaseInfo {
	private Long id;
	private Long companyId;
	private String charType;
	private String name;
	private String seqNum;
	private String workType;
	private String workTypeRoot;
	private String workTypeSub;
	private String humanNumber;
	private String degree;
	private String workYears;
	private Integer westplanFlag;
	private String tags;
	private String location;
	private String department;
	private String departReportTo;
	private Integer departUnderCount;
	private String description;
	private Integer type;
	private Double salary;
	private Double salaryAbove;
	private Integer notShowSalary;
	private String status;
	private String mailtoFlag;
	private String mailtoAddress;
	private Date fromDate;
	private Date endDate;
	private Integer isHot;
	private Long creater;
	private Date createDate;
	private Long updater;
	private Date updateDate;

	//增加“薪水范围”和“地区区名”属性，用于页面显示
	private String salaryRange;
	private String locationDist;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}
	public String getCharType() {
		return charType;
	}
	public void setCharType(String charType) {
		this.charType = charType;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSeqNum() {
		return seqNum;
	}
	public void setSeqNum(String seqNum) {
		this.seqNum = seqNum;
	}
	public String getWorkType() {
		return workType;
	}
	public void setWorkType(String workType) {
		this.workType = workType;
	}
	public String getWorkTypeRoot() {
		return workTypeRoot;
	}
	public void setWorkTypeRoot(String workTypeRoot) {
		this.workTypeRoot = workTypeRoot;
	}
	public String getWorkTypeSub() {
		return workTypeSub;
	}
	public void setWorkTypeSub(String workTypeSub) {
		this.workTypeSub = workTypeSub;
	}
	public String getHumanNumber() {
		return humanNumber;
	}
	public void setHumanNumber(String humanNumber) {
		this.humanNumber = humanNumber;
	}
	public String getDegree() {
		return degree;
	}
	public void setDegree(String degree) {
		this.degree = degree;
	}
	public String getWorkYears() {
		return workYears;
	}
	public void setWorkYears(String workYears) {
		this.workYears = workYears;
	}
	public Integer getWestplanFlag() {
		return westplanFlag;
	}
	public void setWestplanFlag(Integer westplanFlag) {
		this.westplanFlag = westplanFlag;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDepartReportTo() {
		return departReportTo;
	}
	public void setDepartReportTo(String departReportTo) {
		this.departReportTo = departReportTo;
	}
	public Integer getDepartUnderCount() {
		return departUnderCount;
	}
	public void setDepartUnderCount(Integer departUnderCount) {
		this.departUnderCount = departUnderCount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getType() {
		return type;
	}
	public void setType(Integer type) {
		this.type = type;
	}
	public Double getSalary() {
		return salary;
	}
	public void setSalary(Double salary) {
		this.salary = salary;
	}
	public Double getSalaryAbove() {
		return salaryAbove;
	}
	public void setSalaryAbove(Double salaryAbove) {
		this.salaryAbove = salaryAbove;
	}
	public Integer getNotShowSalary() {
		return notShowSalary;
	}
	public void setNotShowSalary(Integer notShowSalary) {
		this.notShowSalary = notShowSalary;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getMailtoFlag() {
		return mailtoFlag;
	}
	public void setMailtoFlag(String mailtoFlag) {
		this.mailtoFlag = mailtoFlag;
	}
	public String getMailtoAddress() {
		return mailtoAddress;
	}
	public void setMailtoAddress(String mailtoAddress) {
		this.mailtoAddress = mailtoAddress;
	}
	public Date getFromDate() {
		return fromDate;
	}
	public void setFromDate(Date fromDate) {
		this.fromDate = fromDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Integer getIsHot() {
		return isHot;
	}
	public void setIsHot(Integer isHot) {
		this.isHot = isHot;
	}
	public Long getCreater() {
		return creater;
	}
	public void setCreater(Long creater) {
		this.creater = creater;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
	public Long getUpdater() {
		return updater;
	}
	public void setUpdater(Long updater) {
		this.updater = updater;
	}
	public Date getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}
	public String getSalaryRange() {
		return salaryRange;
	}
	public void setSalaryRange(String salaryRange) {
		this.salaryRange = salaryRange;
	}
	public String getLocationDist() {
		return locationDist;
	}
	public void setLocationDist(String locationDist) {
		this.locationDist = locationDist;
	}	
}
