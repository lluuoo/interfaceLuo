package com.luo.struts.bean;

public class JobSearch extends PageInfo{
	private String searchKey;
	private String searchKeyType;
	private String searchAreaRoot;
	private String searchAreaSub;
	private String searchArea;
	private String searchLocationRoot;
	private String searchLocationSub;
	private String searchLocation;
	private String searchWorkTypeRoot;
	private String searchWorkTypeSub;
	private String searchWorkType;
	private String searchCompanyType;
	//private String searchCompanyScale;
	private Integer searchwestplanFlag;
	
	private Integer isHot;
	private String searchAreaSep;
	private String searchWorkTypeSep;
	private String searchLocationSep;
	
	public String getSearchKey() {
		return searchKey;
	}
	public void setSearchKey(String searchKey) {
		this.searchKey = searchKey;
	}
	public String getSearchAreaRoot() {
		return searchAreaRoot;
	}
	public void setSearchAreaRoot(String searchAreaRoot) {
		this.searchAreaRoot = searchAreaRoot;
	}
	public String getSearchAreaSub() {
		return searchAreaSub;
	}
	public void setSearchAreaSub(String searchAreaSub) {
		this.searchAreaSub = searchAreaSub;
	}
	public String getSearchArea() {
		return searchArea;
	}
	public void setSearchArea(String searchArea) {
		this.searchArea = searchArea;
	}
	public String getSearchLocationRoot() {
		return searchLocationRoot;
	}
	public void setSearchLocationRoot(String searchLocationRoot) {
		this.searchLocationRoot = searchLocationRoot;
	}
	public String getSearchLocationSub() {
		return searchLocationSub;
	}
	public void setSearchLocationSub(String searchLocationSub) {
		this.searchLocationSub = searchLocationSub;
	}
	public String getSearchLocation() {
		return searchLocation;
	}
	public void setSearchLocation(String searchLocation) {
		this.searchLocation = searchLocation;
	}
	public String getSearchWorkTypeRoot() {
		return searchWorkTypeRoot;
	}
	public void setSearchWorkTypeRoot(String searchWorkTypeRoot) {
		this.searchWorkTypeRoot = searchWorkTypeRoot;
	}
	public String getSearchWorkTypeSub() {
		return searchWorkTypeSub;
	}
	public void setSearchWorkTypeSub(String searchWorkTypeSub) {
		this.searchWorkTypeSub = searchWorkTypeSub;
	}
	public String getSearchWorkType() {
		return searchWorkType;
	}
	public void setSearchWorkType(String searchWorkType) {
		this.searchWorkType = searchWorkType;
	}
	public String getSearchCompanyType() {
		return searchCompanyType;
	}
	public void setSearchCompanyType(String searchCompanyType) {
		this.searchCompanyType = searchCompanyType;
	}
	/*public String getSearchCompanyScale() {
		return searchCompanyScale;
	}
	public void setSearchCompanyScale(String searchCompanyScale) {
		this.searchCompanyScale = searchCompanyScale;
	}*/
	
	


	public Integer getIsHot() {
		return isHot;
	}

	public Integer getSearchwestplanFlag() {
		return searchwestplanFlag;
	}
	public void setSearchwestplanFlag(Integer searchwestplanFlag) {
		this.searchwestplanFlag = searchwestplanFlag;
	}
	public void setIsHot(Integer isHot) {
		this.isHot = isHot;
	}
	
	public String getSearchAreaSep() {
		return searchAreaSep;
	}
	public void setSearchAreaSep(String searchAreaSep) {
		this.searchAreaSep = searchAreaSep;
	}
	public String getSearchWorkTypeSep() {
		return searchWorkTypeSep;
	}
	public void setSearchWorkTypeSep(String searchWorkTypeSep) {
		this.searchWorkTypeSep = searchWorkTypeSep;
	}
	public String getSearchLocationSep() {
		return searchLocationSep;
	}
	public void setSearchLocationSep(String searchLocationSep) {
		this.searchLocationSep = searchLocationSep;
	}
	
	@Override
	public String toString() {
		return "JobSearch [searchKey=" + searchKey + ", searchAreaRoot="
				+ searchAreaRoot + ", searchAreaSub=" + searchAreaSub
				+ ", searchArea=" + searchArea + ", searchLocationRoot="
				+ searchLocationRoot + ", searchLocationSub="
				+ searchLocationSub + ", searchLocation=" + searchLocation
				+ ", searchWorkTypeRoot=" + searchWorkTypeRoot
				+ ", searchWorkTypeSub=" + searchWorkTypeSub
				+ ", searchWorkType=" + searchWorkType + ", searchCompanyType="
				+ searchCompanyType + ", searchwestplanFlag="
				+ searchwestplanFlag + "]";
	}
	public String getSearchKeyType() {
		return searchKeyType;
	}
	public void setSearchKeyType(String searchKeyType) {
		this.searchKeyType = searchKeyType;
	}
	
	

}
