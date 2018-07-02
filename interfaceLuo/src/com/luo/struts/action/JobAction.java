package com.luo.struts.action;


import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;
import com.luo.hibgen.model.THrJobBase;
import com.luo.service.HotJobService;
import com.luo.struts.bean.HrJobBaseInfo;
import com.luo.utils.BeanTransNew;

import net.sf.json.JSONObject;

public class JobAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Resource
	@Autowired
	private HotJobService hotJobService;
	private int pageNumber, pageSize;
	private String workTypeRoot;
	private long id;

	public String getWorkTypeRoot() {
		return workTypeRoot;
	}

	public void setWorkTypeRoot(String workTypeRoot) {
		this.workTypeRoot = workTypeRoot;
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

	public HotJobService getHotJobService() {
		return hotJobService;
	}

	public void setHotJobService(HotJobService hotJobService) {
		this.hotJobService = hotJobService;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	// /**
	// * 步骤一：查询所有第1级“职业类别”（大类）
	// */
	// public void queryTopWorkTypes() {
	// returnJson = new JSONObject();
	// if(hotJobService==null){
	// ApplicationContext ac =
	// WebApplicationContextUtils.getWebApplicationContext(
	// request.getSession().getServletContext());
	// hotJobService=(HotJobService)ac.getBean("hotJobService");
	// }
	//
	// List<TopWorkTypeInfo> hList=hotJobService.queryTopWorkTypes(pageNo,
	// pageSize);
	//
	// returnJson.put("code", SystemPropties.getProperties("code.success"));
	// returnJson.put("info",SystemPropties.getProperties("txt.success"));
	// returnJson.put("hotJobService", hList);
	// //returnJson.put("topWorkType", hList);
	// //returnJson.put("totalCount",hotJobService.queryPublishedActivitiesTotal());
	//
	// returnJsonStr(returnJson.toString());
	// }

	/**
	 * 步骤二：查询第1级类别职位数量
	 */
	// public void queryWorkTypeJobCount(){
	public void queryByWorkTypeRoot() {
		returnJson = new JSONObject();
		if (hotJobService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			hotJobService = (HotJobService) ac.getBean("hotJobService");
		}

		// //解决workTypeRoot中文乱码问题
		// try {
		// workTypeRoot = new
		// String(workTypeRoot.getBytes("ISO-8859-1"),"UTF-8");
		// } catch (UnsupportedEncodingException e) {
		// // TODO Auto-generated catch block
		// e.printStackTrace();
		// }

		int jobsOfworktyperootCount = hotJobService.queryWorkTypeJobCount(workTypeRoot);

		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info", SystemPropties.getProperties("txt.success"));
		returnJson.put("jobType", workTypeRoot);
		returnJson.put("totalCount", jobsOfworktyperootCount);

		returnJsonStr(returnJson.toString());
	}

	/**
	 * 步骤三：根据id查询job详细信息
	 */
	public void queryById() {
		returnJson = new JSONObject();
		if (hotJobService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			hotJobService = (HotJobService) ac.getBean("hotJobService");
		}

		THrJobBase job = hotJobService.queryById(id);		
		
		if (job != null) {
			returnJson.put("code", SystemPropties.getProperties("code.success"));
			returnJson.put("info", SystemPropties.getProperties("txt.success"));
			//THrJobBase转变为HrJobBaseInfo页面实体类对象，得到job LocationDist和salaryRange
			HrJobBaseInfo jobInfo = BeanTransNew.getFromTHrJobBase(job);  
			returnJson.put("jobInfo", jobInfo);
		} else {
			returnJson.put("code", SystemPropties.getProperties("code.failure"));
			returnJson.put("info", SystemPropties.getProperties("txt.fail"));
		}

		returnJsonStr(returnJson.toString());
	}

}
