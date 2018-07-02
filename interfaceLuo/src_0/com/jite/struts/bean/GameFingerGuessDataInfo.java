package com.jite.struts.bean;

public class GameFingerGuessDataInfo{

	private int itemId;
	private String itemName;
	private Integer count;

	public GameFingerGuessDataInfo() {
	}

	public GameFingerGuessDataInfo(int itemId, String itemName) {
		this.itemId = itemId;
		this.itemName = itemName;
	}

	public GameFingerGuessDataInfo(int itemId, String itemName, Integer count) {
		this.itemId = itemId;
		this.itemName = itemName;
		this.count = count;
		
		
	}

	public int getItemId() {
		return itemId;
	}

	public void setItemId(int itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Integer getCount() {
		return count;
	}

	public void setCount(Integer count) {
		this.count = count;
	}
	
}
