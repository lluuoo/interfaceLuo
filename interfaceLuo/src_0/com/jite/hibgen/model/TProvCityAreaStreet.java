package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

/**
 * TProvCityAreaStreet generated by hbm2java
 */
public class TProvCityAreaStreet implements java.io.Serializable {

	private Integer id;
	private String code;
	private String parentId;
	private String name;
	private Boolean level;

	public TProvCityAreaStreet() {
	}

	public TProvCityAreaStreet(String code, String parentId, String name, Boolean level) {
		this.code = code;
		this.parentId = parentId;
		this.name = name;
		this.level = level;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return this.code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getParentId() {
		return this.parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Boolean getLevel() {
		return this.level;
	}

	public void setLevel(Boolean level) {
		this.level = level;
	}

}