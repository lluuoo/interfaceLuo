package com.jite.struts.bean;

public class HrCompanyAreasInfo {
	private String companyId;
	private String areaName;
	private String areaNameRoot;
	private HrCompanyInfo companyInfo;
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getAreaName() {
		return areaName;
	}
	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}
	public HrCompanyInfo getCompanyInfo() {
		return companyInfo;
	}
	public void setCompanyInfo(HrCompanyInfo companyInfo) {
		this.companyInfo = companyInfo;
	}
	public String getAreaNameRoot() {
		return areaNameRoot;
	}
	public void setAreaNameRoot(String areaNameRoot) {
		this.areaNameRoot = areaNameRoot;
	}
}
