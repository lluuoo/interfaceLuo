package com.jite.struts.action;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.bean.GameFingerGuessDataInfo;
import com.jite.struts.bean.TShowHomeworktypesInfo;
import com.jite.struts.service.GameService;
import com.jite.struts.service.VocationService;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class HotJobAction extends BaseAction{

	private VocationService vocationService;
	private int pageNumber;
	private int pageSize;
	private String worktyperoot;
	
	public void setVocationService(VocationService vocationService) {
		this.vocationService = vocationService;
	}

	public void setWorktyperoot(String worktyperoot) {
		this.worktyperoot = worktyperoot;
	}

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

	public void queryAllHotjobs(){
		if (vocationService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			vocationService = (VocationService) ac.getBean("vocationService");
		}
		List<TShowHomeworktypesInfo> mList=vocationService.queryPublishedDatas(pageNumber, pageSize);
		//步骤三：将第二级职位添加到第一季职位的subitems集合中
		for(TShowHomeworktypesInfo h:mList){
			h.setSubItems(vocationService.queryByFatherId(h.getId()));
		}
		returnJson = new JSONObject();
		returnJson.put("code",SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("homeWorkTypes", mList);
		
		returnJsonStr(returnJson.toString());	
	}
	public void queryWorkTypeJobCount(){
		if (vocationService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			vocationService = (VocationService) ac.getBean("vocationService");
		}
		
		returnJson = new JSONObject();
		returnJson.put("code",SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("jobType",worktyperoot);
		System.out.println(worktyperoot);
		returnJson.put("jobCount",vocationService.queryCount(worktyperoot));
		
		returnJsonStr(returnJson.toString());
		
		
		
	}
	
	public void queryJobByid(){
		if (vocationService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			vocationService = (VocationService) ac.getBean("vocationService");
		}
		
		returnJson = new JSONObject();
		returnJson.put("code",SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
//		returnJson.put("jobType",worktyperoot);
	//	returnJson.put("jobList",vocationService.);
		
		returnJsonStr(returnJson.toString());
	}
	
}
