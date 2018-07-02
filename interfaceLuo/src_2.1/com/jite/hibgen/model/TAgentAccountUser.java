package com.jite.hibgen.model;
// Generated 2015-11-26 21:27:04 by Hibernate Tools 4.3.1.Final

import java.util.Date;

/**
 * TAgentAccountUser generated by hbm2java
 */
public class TAgentAccountUser implements java.io.Serializable {

	private Long id;
	private String agentAccount;
	private Long regUserId;
	private String inviteCode;
	private String operater;
	private Integer redPkg1;
	private String pkg1Recevier;
	private Date pkg1Date;
	private Date pkg1OpenDate;
	private Integer redPkg2;
	private String pkg2Recevier;
	private Date pkg2Date;
	private Date pkg2OpenDate;
	private Integer redPkg3;
	private String pkg3Recevier;
	private Date pkg3Date;
	private Date pkg3OpenDate;
	private Integer verifyStatus;
	private Integer applyStatus;
	private Date createDate;
	private Date updateDate;

	public TAgentAccountUser() {
	}

	public TAgentAccountUser(String agentAccount, Long regUserId, String inviteCode, String operater, Integer redPkg1,
			String pkg1Recevier, Date pkg1Date, Date pkg1OpenDate, Integer redPkg2, String pkg2Recevier, Date pkg2Date,
			Date pkg2OpenDate, Integer redPkg3, String pkg3Recevier, Date pkg3Date, Date pkg3OpenDate,
			Integer verifyStatus, Integer applyStatus, Date createDate, Date updateDate) {
		this.agentAccount = agentAccount;
		this.regUserId = regUserId;
		this.inviteCode = inviteCode;
		this.operater = operater;
		this.redPkg1 = redPkg1;
		this.pkg1Recevier = pkg1Recevier;
		this.pkg1Date = pkg1Date;
		this.pkg1OpenDate = pkg1OpenDate;
		this.redPkg2 = redPkg2;
		this.pkg2Recevier = pkg2Recevier;
		this.pkg2Date = pkg2Date;
		this.pkg2OpenDate = pkg2OpenDate;
		this.redPkg3 = redPkg3;
		this.pkg3Recevier = pkg3Recevier;
		this.pkg3Date = pkg3Date;
		this.pkg3OpenDate = pkg3OpenDate;
		this.verifyStatus = verifyStatus;
		this.applyStatus = applyStatus;
		this.createDate = createDate;
		this.updateDate = updateDate;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getAgentAccount() {
		return this.agentAccount;
	}

	public void setAgentAccount(String agentAccount) {
		this.agentAccount = agentAccount;
	}

	public Long getRegUserId() {
		return this.regUserId;
	}

	public void setRegUserId(Long regUserId) {
		this.regUserId = regUserId;
	}

	public String getInviteCode() {
		return this.inviteCode;
	}

	public void setInviteCode(String inviteCode) {
		this.inviteCode = inviteCode;
	}

	public String getOperater() {
		return this.operater;
	}

	public void setOperater(String operater) {
		this.operater = operater;
	}

	public Integer getRedPkg1() {
		return this.redPkg1;
	}

	public void setRedPkg1(Integer redPkg1) {
		this.redPkg1 = redPkg1;
	}

	public String getPkg1Recevier() {
		return this.pkg1Recevier;
	}

	public void setPkg1Recevier(String pkg1Recevier) {
		this.pkg1Recevier = pkg1Recevier;
	}

	public Date getPkg1Date() {
		return this.pkg1Date;
	}

	public void setPkg1Date(Date pkg1Date) {
		this.pkg1Date = pkg1Date;
	}

	public Date getPkg1OpenDate() {
		return this.pkg1OpenDate;
	}

	public void setPkg1OpenDate(Date pkg1OpenDate) {
		this.pkg1OpenDate = pkg1OpenDate;
	}

	public Integer getRedPkg2() {
		return this.redPkg2;
	}

	public void setRedPkg2(Integer redPkg2) {
		this.redPkg2 = redPkg2;
	}

	public String getPkg2Recevier() {
		return this.pkg2Recevier;
	}

	public void setPkg2Recevier(String pkg2Recevier) {
		this.pkg2Recevier = pkg2Recevier;
	}

	public Date getPkg2Date() {
		return this.pkg2Date;
	}

	public void setPkg2Date(Date pkg2Date) {
		this.pkg2Date = pkg2Date;
	}

	public Date getPkg2OpenDate() {
		return this.pkg2OpenDate;
	}

	public void setPkg2OpenDate(Date pkg2OpenDate) {
		this.pkg2OpenDate = pkg2OpenDate;
	}

	public Integer getRedPkg3() {
		return this.redPkg3;
	}

	public void setRedPkg3(Integer redPkg3) {
		this.redPkg3 = redPkg3;
	}

	public String getPkg3Recevier() {
		return this.pkg3Recevier;
	}

	public void setPkg3Recevier(String pkg3Recevier) {
		this.pkg3Recevier = pkg3Recevier;
	}

	public Date getPkg3Date() {
		return this.pkg3Date;
	}

	public void setPkg3Date(Date pkg3Date) {
		this.pkg3Date = pkg3Date;
	}

	public Date getPkg3OpenDate() {
		return this.pkg3OpenDate;
	}

	public void setPkg3OpenDate(Date pkg3OpenDate) {
		this.pkg3OpenDate = pkg3OpenDate;
	}

	public Integer getVerifyStatus() {
		return this.verifyStatus;
	}

	public void setVerifyStatus(Integer verifyStatus) {
		this.verifyStatus = verifyStatus;
	}

	public Integer getApplyStatus() {
		return this.applyStatus;
	}

	public void setApplyStatus(Integer applyStatus) {
		this.applyStatus = applyStatus;
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
