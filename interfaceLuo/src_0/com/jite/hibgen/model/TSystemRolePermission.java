package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

/**
 * TSystemRolePermission generated by hbm2java
 */
public class TSystemRolePermission implements java.io.Serializable {

	private Long id;
	private Long roleId;
	private String permission;

	public TSystemRolePermission() {
	}

	public TSystemRolePermission(Long roleId, String permission) {
		this.roleId = roleId;
		this.permission = permission;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getRoleId() {
		return this.roleId;
	}

	public void setRoleId(Long roleId) {
		this.roleId = roleId;
	}

	public String getPermission() {
		return this.permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

}
