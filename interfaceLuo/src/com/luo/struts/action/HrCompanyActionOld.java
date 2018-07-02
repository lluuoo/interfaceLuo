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

public class HrCompanyActionOld extends BaseAction{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8416078943385619309L;

	private HrCompanyService hrCompanyService;

	private String companyname;
	private String companytype;
	private String userId;
	private String companyId;
	private String shortName;
	private String scale;
	private String description;
	private String tags;
	private String certificateFile;
	private String location;
	private String province;
	private String address;
	private String homepage;
	private String telephone;
	private String traffic;
	private String areaName;
	private String areaNameRoot;
	private int pageNumber;
	private int pageSize;
	private int comPageNumber;
	private int comPageSize;
	
	private String cutImgUrl;
	private int cutX;
	private int cutY;
	private int cutWidth;
	private int cutHeight;
	
	public HrCompanyService getHrCompanyService() {
		return hrCompanyService;
	}

	public void setHrCompanyService(HrCompanyService hrCompanyService) {
		this.hrCompanyService = hrCompanyService;
	}
	
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

	
//	public boolean checkInputParas(){
//		boolean inputError=false;
//		StringBuffer err=new StringBuffer();
//		if(null==companyname||"".equals(companyname.trim())){
//			inputError=true;
//			err.append("username ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
//		}		
//		if(null==companytype||"".equals(companytype.trim())){
//			inputError=true;
//			err.append("type ").append(SystemPropties.getProperties("txt.can_not_be_empty")).append("!");
//		}		
//		if(inputError){
//			returnError(SystemPropties.getProperties("code.input_error"),err.toString());
//		}
//		
//		return !inputError;
//	}
//
//	
//	public void add(){
//		if(checkInputParas()){
//			returnJson=new JSONObject();
//			if(hrCompanyService==null){
//				ApplicationContext ac = WebApplicationContextUtils
//						.getWebApplicationContext( request.getSession()
//								.getServletContext());
//				hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//			}
//			HrCompanyInfo company=new HrCompanyInfo();
//			company.setCompanyId(companyId);
//			company.setDescription(description);
//			company.setName(companyname);
//			company.setProvince(location);
//			company.setScale_type(scale);
//			company.setShort_name(shortName);
//			company.setType(companytype);			
//			HrCompanyInfo hrcompanyinfo=hrCompanyService.addCompanyAccount(company);
//			if(null!=hrcompanyinfo && null!=hrcompanyinfo.getCompanyId()
//					&&!"".equals(hrcompanyinfo.getCompanyId())){
//				if("-100".equals(hrcompanyinfo.getCompanyId())){
//					returnJson.put("code",  SystemPropties.getProperties("code.already_exists"));
//					returnJson.put("info",companyname+SystemPropties.getProperties("txt.already_exists"));
//					returnJson.put("hrcompanyinfo", hrcompanyinfo);
//				}else{
//					returnJson.put("code", SystemPropties.getProperties("code.success"));
//					returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.success"));
//					returnJson.put("hrcompanyinfo", hrcompanyinfo);
//				}
//			}else{
//				returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//				returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.fail"));
//				returnJson.put("hrcompanyinfo", hrcompanyinfo);			
//			}
//			returnJsonStr(returnJson.toString());
//			}
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void save(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo hrcompanyinfo=new HrCompanyInfo();
//		hrcompanyinfo.setCompanyId(companyId);
//		hrcompanyinfo.setDescription(description);
//		hrcompanyinfo.setName(companyname);
//		hrcompanyinfo.setProvince(location);
//		hrcompanyinfo.setTags(tags);
//		hrcompanyinfo.setScale_type(scale);
//		hrcompanyinfo.setShort_name(shortName);
//		hrcompanyinfo.setType(companytype);
//		hrcompanyinfo.setLogo(icon);
//		hrcompanyinfo.setCertificateFile(certificateFile);
//		
//		hrcompanyinfo=hrCompanyService.saveCompanyAccount(hrcompanyinfo,userId);
//		if(null!=hrcompanyinfo && null!=hrcompanyinfo.getCompanyId()&&!"".equals(hrcompanyinfo.getCompanyId())){
//			if("-100".equals(hrcompanyinfo.getCompanyId())){
//				returnJson.put("code",  SystemPropties.getProperties("code.already_exists"));
//				returnJson.put("info",companyname+SystemPropties.getProperties("txt.already_exists"));
//				returnJson.put("hrcompanyinfo", hrcompanyinfo);
//			}else{
//				returnJson.put("code", SystemPropties.getProperties("code.success"));
//				returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.success"));
//				returnJson.put("hrcompanyinfo", hrcompanyinfo);
//				UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//				if(null!=userInfo){
//					userInfo.setCompanyInfo(hrcompanyinfo);
//				}
//			}
//		}else{
//			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//			returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.fail"));
//			returnJson.put("hrcompanyinfo", hrcompanyinfo);			
//		}
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void saveOthers(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo hrcompanyinfo=new HrCompanyInfo();
//		hrcompanyinfo.setCompanyId(companyId);
//		hrcompanyinfo.setHomepage(homepage);
//		hrcompanyinfo.setTelephone(telephone);
//		hrcompanyinfo.setAddress(address);
//		hrcompanyinfo.setTraffic(traffic);
//		
//		hrcompanyinfo=hrCompanyService.saveOthers(hrcompanyinfo,areaName,areaNameRoot);
//		if(null!=hrcompanyinfo && null!=hrcompanyinfo.getCompanyId()&&!"".equals(hrcompanyinfo.getCompanyId())){
//			if("-100".equals(hrcompanyinfo.getCompanyId())){
//				returnJson.put("code",  SystemPropties.getProperties("code.already_exists"));
//				returnJson.put("info",companyname+SystemPropties.getProperties("txt.already_exists"));
//				returnJson.put("hrcompanyinfo", hrcompanyinfo);
//			}else{
//				returnJson.put("code", SystemPropties.getProperties("code.success"));
//				returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.success"));
//				returnJson.put("hrcompanyinfo", hrcompanyinfo);
//				UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//				if(null!=userInfo){
//					userInfo.setCompanyInfo(hrcompanyinfo);
//				}				
//			}
//		}else{
//			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//			returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.fail"));
//			returnJson.put("hrcompanyinfo", hrcompanyinfo);			
//		}
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void modify(){
//		
//	}
//	
//	
//	public void query(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		List<HrCompanyInfo> allCompanies=hrCompanyService.listAllCompanies();
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info",SystemPropties.getProperties("txt.success"));
//		returnJson.put("allCompanies", allCompanies);
//		returnJsonStr(returnJson.toString());
//	}
//
//	public void queryByArea(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		System.out.println("----调试用------在Action中------begin--------");
//		System.out.println("areaNameRoot=" + areaNameRoot);
//		System.out.println("location=" + location);
//		System.out.println("description=" + description);
//		System.out.println("----调试用------在Action中------end--------");
//		
//		List<HrCompanyInfo> allCompanies=hrCompanyService.listAreaRootCompanies(areaNameRoot,location,description,pageNumber,pageSize,comPageNumber,comPageSize);
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info",SystemPropties.getProperties("txt.success"));
//		returnJson.put("allCompanies", allCompanies);
//		returnJson.put("totalCount", hrCompanyService.listAreaRootCompaniesTotalCount(areaNameRoot,location,description));
//		returnJsonStr(returnJson.toString());
//	}
//
//	/**
//	 * 根据公司ID，查询公司详细信息
//	 */
//	public void queryById(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo theCompany=hrCompanyService.queryCompanyById(companyId);
//		if(theCompany!=null){
//			returnJson.put("code", SystemPropties.getProperties("code.success"));
//			returnJson.put("info",SystemPropties.getProperties("txt.success"));
//			returnJson.put("companyInfo", theCompany);
//		}else{
//			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//			returnJson.put("info",SystemPropties.getProperties("txt.fail"));
//		}
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void displayFamous(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");			
//		}
//		
//		List<ShowCompanyFamousInfo> aList=hrCompanyService.queryFamousInfo(pageNumber,pageSize);
//
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info",SystemPropties.getProperties("txt.success"));
//		returnJson.put("FamousList", aList);
//
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void displayStart(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");			
//		}
//		
//		List<ShowCompanyStartInfo> aList=hrCompanyService.queryStartInfo(pageNumber, pageSize);
//
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info",SystemPropties.getProperties("txt.success"));
//		returnJson.put("startList", aList);
//		returnJson.put("totalCount", hrCompanyService.queryStartInfoTotalCount());
//		
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void queryByFamous(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo aList=hrCompanyService.queryFamousById(companyId);
//		
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info", SystemPropties.getProperties("txt.success"));
//		returnJson.put("famous",aList);
//		
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void queryByStart(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac=WebApplicationContextUtils.getWebApplicationContext(request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo aList=hrCompanyService.queryStartById(companyId);
//		
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info", SystemPropties.getProperties("txt.success"));
//		returnJson.put("start", aList);
//		
//		returnJsonStr(returnJson.toString());
//	}
//
//	public void queryCompanyHrs(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac=WebApplicationContextUtils.getWebApplicationContext(request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		List<HrAccountInfo> hrList=hrCompanyService.queryCompanyHrs(companyId);
//		
//		returnJson.put("code", SystemPropties.getProperties("code.success"));
//		returnJson.put("info", SystemPropties.getProperties("txt.success"));
//		returnJson.put("hrList", hrList);
//		
//		returnJsonStr(returnJson.toString());
//	}
//
//	public void cutIcon(){
//		returnJson=new JSONObject();
//		String theLocationPath=SystemPropties.getProperties(FileAbsolutePathEnum.UPLOADFILE_PATH.getValue());
//		try{
//			ImageUtils.cut(theLocationPath+cutImgUrl, theLocationPath+cutImgUrl, cutX, cutY, cutWidth, cutHeight);
//			
//			returnJson.put("code", SystemPropties.getProperties("code.success"));
//			returnJson.put("info", SystemPropties.getProperties("txt.success"));
//		}catch(Exception e){
//			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//			returnJson.put("info",SystemPropties.getProperties("txt.fail"));			
//		}
//		returnJsonStr(returnJson.toString());
//	}
//	
//	public void icon() throws Exception {
//		UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//
//		if(null==userInfo){
//			return;
//		}
//
//		long file_size_max = Integer.parseInt(SystemPropties.getProperties("cfg.com_upload_file_size")) * 1024;// 多少k
//		InputStream is = null;
//		try {
//			long file_size = file.length(); 
//			if (file_size < file_size_max) {
//				FileInputStream inStream = new FileInputStream(file);
//				String filename =userInfo.getUserId() + fileFileName.substring(fileFileName.lastIndexOf("."));;
//				String iconRelativePath = FileOperateUtil.saveFile(inStream,
//						FileAbsolutePathEnum.UPLOADFILE_PATH,FileAbsolutePathEnum.ICON_PATH,
//						filename);
//				f_url = iconRelativePath;
//				HrCompanyInfo theComInfo=userInfo.getCompanyInfo();
//				if(theComInfo==null){
//					theComInfo=new HrCompanyInfo();
//				}
//				theComInfo.setLogo(f_url);
//				userInfo.setCompanyInfo(theComInfo);
//				getRequest().setAttribute("flag", "success");
//				getRequest().setAttribute("f_url", f_url.replace("\\", "/"));
//				getRequest().setAttribute("submitType", submitType);
//				getRequest().setAttribute("file", fileFileName);
//				getRequest().setAttribute("f_border", f_border);
//				getRequest().setAttribute("f_align", f_align);
//				getRequest().setAttribute("f_vert", f_vert);
//				getRequest().setAttribute("f_horiz", f_horiz);
//			} else {
//				f_url = "error: ";
//				userInfo.setSessionSavedMessage(SystemPropties.getProperties("txt.upload_file_large_than_limit"));
//			}
//			//getResponse().reset();
//			getResponse().setContentType("text/html;charset=utf-8");
//			getResponse().getWriter().print(f_url);
//		} catch (FileNotFoundException e) {
//			getRequest().setAttribute("flag", "missing");
//			e.printStackTrace();
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if (is != null) {
//					is.close();
//					is = null;
//				}
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//	}
//	
//	public void certImage() throws Exception {
//		UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//
//		if(null==userInfo){
//			return;
//		}
//
//		long file_size_max = Integer.parseInt(SystemPropties.getProperties("cfg.com_upload_file_size")) * 1024;// 多少k
//		InputStream is = null;
//		try {
//			long file_size = file.length(); 
//			if (file_size < file_size_max) {
//				FileInputStream inStream = new FileInputStream(file);
//				String filename =userInfo.getUserId() + fileFileName.substring(fileFileName.lastIndexOf("."));;
//				String iconRelativePath = FileOperateUtil.saveFileWithTimeStamp(inStream,
//						FileAbsolutePathEnum.UPLOADFILE_PATH,FileAbsolutePathEnum.CERT_PATH,
//						filename);
//				f_url = iconRelativePath;
//				HrCompanyInfo theComInfo=userInfo.getCompanyInfo();
//				if(theComInfo==null){
//					theComInfo=new HrCompanyInfo();
//				}
//				theComInfo.setCertificateFile(f_url);
//				userInfo.setCompanyInfo(theComInfo);
//				getRequest().setAttribute("flag", "success");
//				getRequest().setAttribute("f_url", f_url.replace("\\", "/"));
//				getRequest().setAttribute("submitType", submitType);
//				getRequest().setAttribute("file", fileFileName);
//				getRequest().setAttribute("f_border", f_border);
//				getRequest().setAttribute("f_align", f_align);
//				getRequest().setAttribute("f_vert", f_vert);
//				getRequest().setAttribute("f_horiz", f_horiz);
//			} else {
//				f_url = "error: ";
//				userInfo.setSessionSavedMessage(SystemPropties.getProperties("txt.upload_file_large_than_limit"));
//			}
//			//getResponse().reset();
//			getResponse().setContentType("text/html;charset=utf-8");
//			getResponse().getWriter().print(f_url);
//		} catch (FileNotFoundException e) {
//			getRequest().setAttribute("flag", "missing");
//			e.printStackTrace();
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if (is != null) {
//					is.close();
//					is = null;
//				}
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//	}
//
//	public void leaderImage() throws Exception {
//		UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//
//		if(null==userInfo){
//			return;
//		}
//
//		long file_size_max = Integer.parseInt(SystemPropties.getProperties("cfg.com_upload_file_size")) * 1024;// 多少k
//		InputStream is = null;
//		try {
//			long file_size = file.length(); 
//			if (file_size < file_size_max) {
//				FileInputStream inStream = new FileInputStream(file);
//				String filename =userInfo.getUserId() + fileFileName.substring(fileFileName.lastIndexOf("."));;
//				String iconRelativePath = FileOperateUtil.saveFile(inStream,
//						FileAbsolutePathEnum.UPLOADFILE_PATH,FileAbsolutePathEnum.LEADER_PATH,
//						filename);
//				f_url = iconRelativePath;
//				f_url = iconRelativePath;
//				HrCompanyInfo theComInfo=userInfo.getCompanyInfo();
//				if(theComInfo==null){
//					theComInfo=new HrCompanyInfo();
//				}
//				theComInfo.setLeaderPic(f_url);
//				userInfo.setCompanyInfo(theComInfo);
//				getRequest().setAttribute("flag", "success");
//				getRequest().setAttribute("f_url", f_url.replace("\\", "/"));
//				getRequest().setAttribute("submitType", submitType);
//				getRequest().setAttribute("file", fileFileName);
//				getRequest().setAttribute("f_border", f_border);
//				getRequest().setAttribute("f_align", f_align);
//				getRequest().setAttribute("f_vert", f_vert);
//				getRequest().setAttribute("f_horiz", f_horiz);
//			} else {
//				f_url = "error: ";
//				userInfo.setSessionSavedMessage(SystemPropties.getProperties("txt.upload_file_large_than_limit"));
//			}
//			//getResponse().reset();
//			getResponse().setContentType("text/html;charset=utf-8");
//			getResponse().getWriter().print(f_url);
//		} catch (FileNotFoundException e) {
//			getRequest().setAttribute("flag", "missing");
//			e.printStackTrace();
//		} catch (Exception e) {
//			e.printStackTrace();
//		} finally {
//			try {
//				if (is != null) {
//					is.close();
//					is = null;
//				}
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//	}
//	
//	public void medias(){
//		returnJson=new JSONObject();
//		if(hrCompanyService==null){
//			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
//			hrCompanyService=(HrCompanyService)ac.getBean("hrCompanyService");
//		}
//		HrCompanyInfo hrcompanyinfo=new HrCompanyInfo();
//		hrcompanyinfo.setCompanyId(companyId);
//		hrcompanyinfo.setIsStart(isStart);
//		hrcompanyinfo.setLeader(leader);
//		hrcompanyinfo.setLeaderDesc(leaderDesc);
//		hrcompanyinfo.setLeaderPic(leaderPic);
//		hrcompanyinfo.setLeaderPosition(leaderPosition);
//		hrcompanyinfo.setMoneyFrom(moneyFrom);
//		
//		hrcompanyinfo=hrCompanyService.saveCompanyMedias(hrcompanyinfo,mediasInputJson);
//		if(null!=hrcompanyinfo && null!=hrcompanyinfo.getCompanyId()&&!"".equals(hrcompanyinfo.getCompanyId())
//				&&null!=hrcompanyinfo.getMedias()){
//			returnJson.put("code", SystemPropties.getProperties("code.success"));
//			returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.success"));
//			returnJson.put("hrcompanyinfo", hrcompanyinfo);
//			try{
//				UserInfo userInfo=(UserInfo)request.getSession().getAttribute(SystemPropties.getProperties("cfg.session_user"));
//				if(null!=userInfo){
//					userInfo.getCompanyInfo().setIsStart(isStart);
//					userInfo.getCompanyInfo().setLeader(leader);
//					userInfo.getCompanyInfo().setLeaderDesc(leaderDesc);
//					userInfo.getCompanyInfo().setLeaderPic(leaderPic);
//					userInfo.getCompanyInfo().setLeaderPosition(leaderPosition);
//					userInfo.getCompanyInfo().setMoneyFrom(moneyFrom);
//					userInfo.getCompanyInfo().setMedias(hrcompanyinfo.getMedias());
//					
//				}
//			}catch(Exception e){
//				e.printStackTrace();
//			}
//		}else{
//			returnJson.put("code", SystemPropties.getProperties("code.unknown_error"));
//			returnJson.put("info",SystemPropties.getProperties("txt.add")+SystemPropties.getProperties("txt.fail"));
//			returnJson.put("hrcompanyinfo", hrcompanyinfo);			
//		}
//		returnJsonStr(returnJson.toString());
//	}	
	
	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	public String getCompanytype() {
		return companytype;
	}

	public void setCompanytype(String companytype) {
		this.companytype = companytype;
	}



	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCompanyId() {
		return companyId;
	}

	public void setCompanyId(String companyId) {
		this.companyId = companyId;
	}

	public String getShortName() {
		return shortName;
	}

	public void setShortName(String shortName) {
		this.shortName = shortName;
	}

	public String getScale() {
		return scale;
	}

	public void setScale(String scale) {
		this.scale = scale;
	}
	
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getCertificateFile() {
		return certificateFile;
	}

	public void setCertificateFile(String certificateFile) {
		this.certificateFile = certificateFile;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	
	
	//图片上传需要的属性值 start
	private String icon;
	private String f_url;
	private String f_alt;
	private String f_border;
	private String f_align;
	private String f_vert;
	private String f_horiz;
	private File file;
	private String fileFileName;
	private String fileContentType;
	private String submitType;	
	public String getF_url() {
		return f_url;
	}

	public void setF_url(String f_url) {
		this.f_url = f_url;
	}

	public String getF_alt() {
		return f_alt;
	}

	public void setF_alt(String f_alt) {
		this.f_alt = f_alt;
	}

	public String getF_border() {
		return f_border;
	}

	public void setF_border(String f_border) {
		this.f_border = f_border;
	}

	public String getF_align() {
		return f_align;
	}

	public void setF_align(String f_align) {
		this.f_align = f_align;
	}

	public String getF_vert() {
		return f_vert;
	}

	public void setF_vert(String f_vert) {
		this.f_vert = f_vert;
	}

	public String getF_horiz() {
		return f_horiz;
	}

	public void setF_horiz(String f_horiz) {
		this.f_horiz = f_horiz;
	}

	public File getFile() {
		return file;
	}

	public void setFile(File file) {
		this.file = file;
	}

	public String getFileFileName() {
		return fileFileName;
	}

	public void setFileFileName(String fileFileName) {
		this.fileFileName = fileFileName;
	}

	public String getFileContentType() {
		return fileContentType;
	}

	public void setFileContentType(String fileContentType) {
		this.fileContentType = fileContentType;
	}

	public String getSubmitType() {
		return submitType;
	}

	public void setSubmitType(String submitType) {
		this.submitType = submitType;
	}
	//图片上传需要的属性值end

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}


	//Company-Medias
	private String isStart;
	private String mediasInputJson;

	private String leader;
	private String leaderPic;
	private String leaderPosition;
	private String leaderDesc;
	private String moneyFrom;

	public String getLeader() {
		return leader;
	}

	public void setLeader(String leader) {
		this.leader = leader;
	}

	public String getLeaderPic() {
		return leaderPic;
	}

	public void setLeaderPic(String leaderPic) {
		this.leaderPic = leaderPic;
	}

	public String getLeaderPosition() {
		return leaderPosition;
	}

	public void setLeaderPosition(String leaderPosition) {
		this.leaderPosition = leaderPosition;
	}

	public String getLeaderDesc() {
		return leaderDesc;
	}

	public void setLeaderDesc(String leaderDesc) {
		this.leaderDesc = leaderDesc;
	}

	public String getMoneyFrom() {
		return moneyFrom;
	}

	public void setMoneyFrom(String moneyFrom) {
		this.moneyFrom = moneyFrom;
	}

	public String getIsStart() {
		return isStart;
	}

	public void setIsStart(String isStart) {
		this.isStart = isStart;
	}

	public String getMediasInputJson() {
		return mediasInputJson;
	}

	public void setMediasInputJson(String mediasInputJson) {
		this.mediasInputJson = mediasInputJson;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getAreaNameRoot() {
		return areaNameRoot;
	}

	public void setAreaNameRoot(String areaNameRoot) {
		this.areaNameRoot = areaNameRoot;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getTraffic() {
		return traffic;
	}

	public void setTraffic(String traffic) {
		this.traffic = traffic;
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

	public int getComPageNumber() {
		return comPageNumber;
	}

	public void setComPageNumber(int comPageNumber) {
		this.comPageNumber = comPageNumber;
	}

	public int getComPageSize() {
		return comPageSize;
	}

	public void setComPageSize(int comPageSize) {
		this.comPageSize = comPageSize;
	}

	public String getCutImgUrl() {
		return cutImgUrl;
	}

	public void setCutImgUrl(String cutImgUrl) {
		this.cutImgUrl = cutImgUrl;
	}

	public int getCutX() {
		return cutX;
	}

	public void setCutX(int cutX) {
		this.cutX = cutX;
	}

	public int getCutY() {
		return cutY;
	}

	public void setCutY(int cutY) {
		this.cutY = cutY;
	}

	public int getCutWidth() {
		return cutWidth;
	}

	public void setCutWidth(int cutWidth) {
		this.cutWidth = cutWidth;
	}

	public int getCutHeight() {
		return cutHeight;
	}

	public void setCutHeight(int cutHeight) {
		this.cutHeight = cutHeight;
	}
	
}
