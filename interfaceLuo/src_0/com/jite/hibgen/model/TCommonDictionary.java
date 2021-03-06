package com.jite.hibgen.model;
// Generated 2018-3-26 10:06:46 by Hibernate Tools 4.3.1.Final

/**
 * TCommonDictionary generated by hbm2java
 */
public class TCommonDictionary implements java.io.Serializable {

	private Long dictId;
	private String dictType;
	private String dictName;
	private String valueCode;
	private String valueName;
	private String isEdit;
	private Long parentId;

	public TCommonDictionary() {
	}

	public TCommonDictionary(String dictType, String dictName, String valueCode, String valueName, String isEdit,
			Long parentId) {
		this.dictType = dictType;
		this.dictName = dictName;
		this.valueCode = valueCode;
		this.valueName = valueName;
		this.isEdit = isEdit;
		this.parentId = parentId;
	}

	public Long getDictId() {
		return this.dictId;
	}

	public void setDictId(Long dictId) {
		this.dictId = dictId;
	}

	public String getDictType() {
		return this.dictType;
	}

	public void setDictType(String dictType) {
		this.dictType = dictType;
	}

	public String getDictName() {
		return this.dictName;
	}

	public void setDictName(String dictName) {
		this.dictName = dictName;
	}

	public String getValueCode() {
		return this.valueCode;
	}

	public void setValueCode(String valueCode) {
		this.valueCode = valueCode;
	}

	public String getValueName() {
		return this.valueName;
	}

	public void setValueName(String valueName) {
		this.valueName = valueName;
	}

	public String getIsEdit() {
		return this.isEdit;
	}

	public void setIsEdit(String isEdit) {
		this.isEdit = isEdit;
	}

	public Long getParentId() {
		return this.parentId;
	}

	public void setParentId(Long parentId) {
		this.parentId = parentId;
	}

}
