package com.luo.struts.bean;

import java.util.Date;

public class MediaInfo {
	private Long id;
	private Long companyId;
	private String mediaName;
	private String mediaUrl;
	private String mediaDesc;
	private Integer hotPosition;
	private Date createDate;
	private Date updateDate;
	
	private HrCompanyInfo hrcompany;
	
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
	public String getMediaName() {
		return mediaName;
	}
	public void setMediaName(String mediaName) {
		this.mediaName = mediaName;
	}
	public String getMediaUrl() {
		return mediaUrl;
	}
	public void setMediaUrl(String mediaUrl) {
		this.mediaUrl = mediaUrl;
	}
	public String getMediaDesc() {
		return mediaDesc;
	}
	public void setMediaDesc(String mediaDesc) {
		this.mediaDesc = mediaDesc;
	}
	
	public Integer getHotPosition() {
		return hotPosition;
	}
	public void setHotPosition(Integer hotPosition) {
		this.hotPosition = hotPosition;
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
	public HrCompanyInfo getHrcompany() {
		return hrcompany;
	}
	public void setHrcompany(HrCompanyInfo hrcompany) {
		this.hrcompany = hrcompany;
	}

	
}
