package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

import java.math.BigDecimal;
import java.util.Date;

/**
 * TEmployeeAccount generated by hbm2java
 */
public class TEmployeeAccount implements java.io.Serializable {

	private Long accountId;
	private String account;
	private String password;
	private String paidState;
	private String accountState;
	private Date accountEffectDate;
	private BigDecimal accountEffectDeadline;
	private Long employeeId;
	private Long companyId;
	private Date accountInvalidDate;
	private String state;
	private String accountCompanyname;
	private String accountRegion;
	private String accountProvincename;
	private String accountWar;
	private Date recordLostTime;

	public TEmployeeAccount() {
	}

	public TEmployeeAccount(String account, String password, String paidState, String accountState,
			Date accountEffectDate, BigDecimal accountEffectDeadline, Long employeeId, Long companyId,
			Date accountInvalidDate, String state, String accountCompanyname, String accountRegion,
			String accountProvincename, String accountWar, Date recordLostTime) {
		this.account = account;
		this.password = password;
		this.paidState = paidState;
		this.accountState = accountState;
		this.accountEffectDate = accountEffectDate;
		this.accountEffectDeadline = accountEffectDeadline;
		this.employeeId = employeeId;
		this.companyId = companyId;
		this.accountInvalidDate = accountInvalidDate;
		this.state = state;
		this.accountCompanyname = accountCompanyname;
		this.accountRegion = accountRegion;
		this.accountProvincename = accountProvincename;
		this.accountWar = accountWar;
		this.recordLostTime = recordLostTime;
	}

	public Long getAccountId() {
		return this.accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
	}

	public String getAccount() {
		return this.account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPaidState() {
		return this.paidState;
	}

	public void setPaidState(String paidState) {
		this.paidState = paidState;
	}

	public String getAccountState() {
		return this.accountState;
	}

	public void setAccountState(String accountState) {
		this.accountState = accountState;
	}

	public Date getAccountEffectDate() {
		return this.accountEffectDate;
	}

	public void setAccountEffectDate(Date accountEffectDate) {
		this.accountEffectDate = accountEffectDate;
	}

	public BigDecimal getAccountEffectDeadline() {
		return this.accountEffectDeadline;
	}

	public void setAccountEffectDeadline(BigDecimal accountEffectDeadline) {
		this.accountEffectDeadline = accountEffectDeadline;
	}

	public Long getEmployeeId() {
		return this.employeeId;
	}

	public void setEmployeeId(Long employeeId) {
		this.employeeId = employeeId;
	}

	public Long getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(Long companyId) {
		this.companyId = companyId;
	}

	public Date getAccountInvalidDate() {
		return this.accountInvalidDate;
	}

	public void setAccountInvalidDate(Date accountInvalidDate) {
		this.accountInvalidDate = accountInvalidDate;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getAccountCompanyname() {
		return this.accountCompanyname;
	}

	public void setAccountCompanyname(String accountCompanyname) {
		this.accountCompanyname = accountCompanyname;
	}

	public String getAccountRegion() {
		return this.accountRegion;
	}

	public void setAccountRegion(String accountRegion) {
		this.accountRegion = accountRegion;
	}

	public String getAccountProvincename() {
		return this.accountProvincename;
	}

	public void setAccountProvincename(String accountProvincename) {
		this.accountProvincename = accountProvincename;
	}

	public String getAccountWar() {
		return this.accountWar;
	}

	public void setAccountWar(String accountWar) {
		this.accountWar = accountWar;
	}

	public Date getRecordLostTime() {
		return this.recordLostTime;
	}

	public void setRecordLostTime(Date recordLostTime) {
		this.recordLostTime = recordLostTime;
	}

}
