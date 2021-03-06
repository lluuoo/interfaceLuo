package com.jite.struts.action;

import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONObject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.service.ActivityService;
import com.jite.struts.bean.ActivityInfo;
import com.jite.utils.SystemPropties;

/**
 * 下面的import中，注释的都是原代码先有的 *
 */
// import com.jite.service.UserJobService;
// import com.jite.struts.bean.JobInfo;
// import com.jite.struts.bean.MessageInfo;
// import com.jite.struts.bean.UserJobInfo;

public class ActivityAction extends BaseAction {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4768083376835578317L;

	private String userId;
	private String activeId;
	private String status;
	private int pageNumber;
	private int pageSize;

	@Resource
	@Autowired
	ActivityService activityService;

	public ActivityService getActivityService() {
		return activityService;
	}

	public void setActivityService(ActivityService activityService) {
		this.activityService = activityService;
	}

	/**
	 * 团委活动数据查询
	 */
	public void query() {
		returnJson = new JSONObject();
		if (activityService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			activityService = (ActivityService) ac.getBean("activityService");
		}

		List<ActivityInfo> aList = activityService.queryPublishedActivities(pageNumber, pageSize);

		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info", SystemPropties.getProperties("txt.success"));
		returnJson.put("activityList", aList);
		returnJson.put("totalCount", activityService.queryPublishedActivitiesTotal());

		returnJsonStr(returnJson.toString());
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getActiveId() {
		return activeId;
	}

	public void setActiveId(String activeId) {
		this.activeId = activeId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
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

}
