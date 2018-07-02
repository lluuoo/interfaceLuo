package com.luo.struts.action;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;
import com.luo.service.CommonService;
import com.luo.service.HotJobService;
import com.luo.struts.bean.CommonItem;
import com.luo.struts.bean.TopWorkTypeInfo;

import net.sf.json.JSONObject;

public class CommonAction extends BaseAction{

	
	@Resource
	@Autowired
	private CommonService commonService;
	private HotJobService hotJobService;
	
	private int pageNumber, pageSize;

	public int getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(int pageNumber) {
		this.pageNumber = pageNumber;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public HotJobService getHotJobService() {
		return hotJobService;
	}

	public void setHotJobService(HotJobService hotJobService) {
		this.hotJobService = hotJobService;
	}
	
	/**
	 * “热门行业”模块，步骤一：查询所有第1级“热门行业类别”（大类）
	 */
	public void queryHomeAreas() {		
		if(commonService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			commonService=(CommonService)ac.getBean("commonService");
		}
		
		List<CommonItem> shList = commonService.queryHomeAreas(pageNumber, pageSize);

		returnJson = new JSONObject();
		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("homeAreas", shList);
		//returnJson.put("topWorkType", hList);
		//returnJson.put("totalCount",hotJobService.queryPublishedActivitiesTotal());

		returnJsonStr(returnJson.toString());
	}
	
	/**
	 * “热门职业”模块，步骤一.查询第1级职位
	 */
	public void queryHomeWorkTypes() {
		returnJson = new JSONObject();
		if(hotJobService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			hotJobService=(HotJobService)ac.getBean("hotJobService");
		}
		
		if (pageNumber == 0) {
			pageNumber = 1;
		}
		if (pageSize == 0) {
			pageSize = Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}
		
		//List<TopWorkTypeInfo> hList=hotJobService.queryTopWorkTypes(pageNumber, pageSize);
		List<TopWorkTypeInfo> hList=hotJobService.queryWorkTypesByFatherid(pageNumber, pageSize,0L);

		//“热门职业”模块，步骤三. 将第2级职位添加到第1级职位的subItems集合中
		for(TopWorkTypeInfo h : hList) {
			//每个一级职位下，最多显示5个二级职位
			List<TopWorkTypeInfo> subItems = hotJobService.queryWorkTypesByFatherid(1, 5, h.getId());
			h.setSubItems(subItems);
		}
		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		//returnJson.put("topWorkType", hList);
		//returnJson.put("hotJobService", hList);
		returnJson.put("homeWorkTypes", hList);
		//returnJson.put("totalCount",hotJobService.queryPublishedActivitiesTotal());

		returnJsonStr(returnJson.toString());
	}
}
