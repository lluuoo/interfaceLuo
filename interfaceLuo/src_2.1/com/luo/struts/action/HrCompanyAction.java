package com.luo.struts.action;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.luo.service.HrCompanyService;
import com.luo.struts.bean.HrCompanyInfo;
//import com.jite.struts.bean.BizInfo;
//import com.jite.struts.bean.HrAccountInfo;
//import com.jite.struts.bean.ShowCompanyFamousInfo;
//import com.jite.struts.bean.ShowCompanyStartInfo;
//import com.jite.struts.bean.ShowSchoolInfo;
//import com.jite.struts.bean.UserInfo;
//import com.jite.utils.FileAbsolutePathEnum;
//import com.jite.utils.FileOperateUtil;
//import com.jite.utils.ImageUtils;
import com.jite.utils.SystemPropties;

public class HrCompanyAction extends BaseAction{
	private HrCompanyService hrCompanyService;

	private String companyId;
	private int pageNumber;
	private int pageSize;

	
	public HrCompanyService getHrCompanyService() {
		return hrCompanyService;
	}

	public void setHrCompanyService(HrCompanyService hrCompanyService) {
		this.hrCompanyService = hrCompanyService;
	}
	
	/**
	 * "热门行业"查询用，
	 * 根据公司id，查询公司详细信息，包括其所有招聘岗位信息
	 */
	public void queryByIdWithJobs(){
		returnJson=new JSONObject();
		if(hrCompanyService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
		}
		HrCompanyInfo theCompany=hrCompanyService.queryCompanyByIdWithJobs(companyId,pageNumber,pageSize);
		if(theCompany!=null){
			returnJson.put("code", SystemPropties.getProperties("code.success"));
			returnJson.put("info",SystemPropties.getProperties("txt.success"));
			returnJson.put("companyInfo", theCompany);
		}else{
			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
			returnJson.put("info",SystemPropties.getProperties("txt.fail"));
		}
		returnJsonStr(returnJson.toString());
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
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
