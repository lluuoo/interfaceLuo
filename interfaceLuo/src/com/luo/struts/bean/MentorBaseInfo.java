package com.luo.struts.bean;
import java.util.Date;
import java.util.List;

public class MentorBaseInfo extends PageInfo{
	private String icon;
	private String name;
	private String title;
	private String description;
	private String product;
	private Long id;
	private String companyId;
	private String email;
	private Date createDate;
	private Date updateDate;
	
//	private List<MessageInfo> msgList;
	
	public MentorBaseInfo(){
		
	}
	public MentorBaseInfo(String icon,String name,String title,String description){
		this.icon=icon;
		this.name=name;
		this.title=title;
		this.description=description;
	}
	
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCompanyId() {
		return companyId;
	}
	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getProduct() {
		return product;
	}
	public void setProduct(String product) {
		this.product = product;
	}
//	public List<MessageInfo> getMsgList() {
//		return msgList;
//	}
//	public void setMsgList(List<MessageInfo> msgList) {
//		this.msgList = msgList;
//	}
	
}
