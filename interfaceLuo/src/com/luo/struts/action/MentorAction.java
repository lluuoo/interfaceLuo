package com.luo.struts.action;

import java.util.List;
import java.util.Random;

//import javax.mail.MessagingException;
//import javax.mail.internet.AddressException;

import net.sf.json.JSONObject;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.luo.hibgen.model.TMentorBase;
import com.jite.service.*;
import com.jite.struts.action.BaseAction;
//import com.jite.struts.bean.MailInfo;
import com.luo.struts.bean.MentorBaseInfo;
import com.luo.struts.bean.MentorInfo;
//import com.jite.utils.MailSenderFactory;
//import com.jite.utils.MailSimpleSender;
import com.jite.utils.SystemPropties;
public class MentorAction extends BaseAction{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7039947864423833764L;

	private MentorService mentorService;
	
	private String mentorId;
	private String id;
	private String icon;
	private String title;
	private String description;
	private int pageNumber;
	private int pageSize;
	
	public void display(){
		returnJson=new JSONObject();
		if(mentorService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			mentorService=(MentorService)ac.getBean("mentorService");
		}
		
		List<MentorInfo> aList=mentorService.queryMentorinfo(pageNumber,pageSize);

		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("mentorList", aList);
//		returnJson.put("totalCount",mentorService.queryTotal());

		returnJsonStr(returnJson.toString());
	}
	public void viewById(){
		returnJson=new JSONObject();
		if(mentorService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			mentorService=(MentorService)ac.getBean("mentorService");
		}		
		MentorBaseInfo aList=mentorService.viewById(mentorId);
		
		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("mentor", aList);

		returnJsonStr(returnJson.toString());
	}
	
	public void sendMail() {
		returnJson=new JSONObject();
		if(mentorService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			mentorService=(MentorService)ac.getBean("mentorService");
		}
		TMentorBase aList=mentorService.send(mentorId);
		if(null!=aList && null!=aList.getEmail()
				&&!"".equals(aList.getEmail())){

				String[] sendMails=SystemPropties.getProperties("cfg.admin_mail_address").split(",");
				MailSimpleSender sms = MailSenderFactory.getSender(
						sendMails[new Random().nextInt(sendMails.length)], SystemPropties.getProperties("cfg.admin_mail_pwd"));
				MailInfo theMail=new MailInfo();
				theMail.setSubject("您在易工作邮箱收到了一个来信");
				theMail.setContent("有人向您提问了");
				try {
					sms.send(aList.getEmail(), theMail);
				} catch (AddressException e) {
					e.printStackTrace();
					
				} catch (MessagingException e) {
					e.printStackTrace();
				} catch(Exception e){
					e.printStackTrace();
				}
				returnJson.put("code", SystemPropties.getProperties("code.success"));
				returnJson.put("info",SystemPropties.getProperties("txt.success"));
		}else{
			returnJson.put("code", SystemPropties.getProperties("code.input_error"));
			returnJson.put("info", SystemPropties.getProperties("txt.user_mail_can_not_found_address"));
		}
		returnJsonStr(returnJson.toString());
	}	
	
	
	
	public MentorService getMentorService() {
		return mentorService;
	}
	public void setMentorService(MentorService mentorService) {
		this.mentorService = mentorService;
	}
	public String getMentorId() {
		return mentorId;
	}
	public void setMentorId(String mentorId) {
		this.mentorId = mentorId;
	}
	public String getIcon() {
		return icon;
	}
	public void setIcon(String icon) {
		this.icon = icon;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
}
