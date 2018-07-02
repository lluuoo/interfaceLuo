package com.jite.struts.bean;

import java.util.List;

public class CommonInfo {
	private String configName;
	private List<CommonItem> items;
	public String getConfigName() {
		return configName;
	}
	public void setConfigName(String configName) {
		this.configName = configName;
	}
	public List<CommonItem> getItems() {
		return items;
	}
	public void setItems(List<CommonItem> items) {
		this.items = items;
	}
	
}
