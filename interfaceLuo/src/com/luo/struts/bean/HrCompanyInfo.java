package com.luo.struts.bean;

import java.util.List;

public class HrCompanyInfo {
	private String companyId;
	private String name;
	private String type;
	private String logo;
	private String short_name;
	private String scale_type;
	private String province;
	private String tags;
	private String certificateFile;
	private String address;
	private String homepage;
	private String telephone;
	private String short_desc;
	private String description;
	private String traffic;
	private String isStart;
	private Integer status;

	private String leader;
	private String leaderPic;
	private String leaderPosition;
	private String leaderDesc;
	private String moneyFrom;

	private List<MediaInfo> medias;
	private List<HrCompanyAreasInfo> areas;

	private int totalJobCount;

	private List<HrJobBaseInfo> jobs;

	public List<HrJobBaseInfo> getJobs() {
		return jobs;
	}

	public void setJobs(List<HrJobBaseInfo> jobs) {
		this.jobs = jobs;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getShort_name() {
		return short_name;
	}

	public void setShort_name(String short_name) {
		this.short_name = short_name;
	}

	public String getScale_type() {
		return scale_type;
	}

	public void setScale_type(String scale_type) {
		this.scale_type = scale_type;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getShort_desc() {
		return short_desc;
	}

	public void setShort_desc(String short_desc) {
		this.short_desc = short_desc;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public String getIsStart() {
		return isStart;
	}

	public void setIsStart(String isStart) {
		this.isStart = isStart;
	}

	public List<MediaInfo> getMedias() {
		return medias;
	}

	public void setMedias(List<MediaInfo> medias) {
		this.medias = medias;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public List<HrCompanyAreasInfo> getAreas() {
		return areas;
	}

	public void setAreas(List<HrCompanyAreasInfo> areas) {
		this.areas = areas;
	}

	public String getTraffic() {
		return traffic;
	}

	public void setTraffic(String traffic) {
		this.traffic = traffic;
	}

	public String getLeader() {
		return leader;
	}

	public void setLeader(String leader) {
		this.leader = leader;
	}

	public String getLeaderPic() {
		return leaderPic;
	}

	public void setLeaderPic(String leaderPic) {
		this.leaderPic = leaderPic;
	}

	public String getLeaderPosition() {
		return leaderPosition;
	}

	public void setLeaderPosition(String leaderPosition) {
		this.leaderPosition = leaderPosition;
	}

	public String getLeaderDesc() {
		return leaderDesc;
	}

	public void setLeaderDesc(String leaderDesc) {
		this.leaderDesc = leaderDesc;
	}

	public String getMoneyFrom() {
		return moneyFrom;
	}

	public void setMoneyFrom(String moneyFrom) {
		this.moneyFrom = moneyFrom;
	}

	public String getCertificateFile() {
		return certificateFile;
	}

	public void setCertificateFile(String certificateFile) {
		this.certificateFile = certificateFile;
	}

	public Integer getStatus() {
		return status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public int getTotalJobCount() {
		return totalJobCount;
	}

	public void setTotalJobCount(int totalJobCount) {
		this.totalJobCount = totalJobCount;
	}
}
