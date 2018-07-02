package com.luo.struts.bean;

import com.jite.struts.bean.PageInfo;

/**
 * 与TGameFingerguess对应的页面实体类
 */
public class GameFingerguessInfo extends PageInfo {

	private int itemId;
	private String itemName;
	private Integer count;

	public GameFingerguessInfo() {
	}

	public GameFingerguessInfo(int itemId, String itemName) {
		this.itemId = itemId;
		this.itemName = itemName;
	}

	public GameFingerguessInfo(int itemId, String itemName, Integer count) {
		this.itemId = itemId;
		this.itemName = itemName;
		this.count = count;
	}

	public int getItemId() {
		return this.itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return this.itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Integer getCount() {
		return this.count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}

}
