package com.luo.service;

import java.util.ArrayList;
import java.util.List;

import com.luo.hibgen.dao.TMentorBaseDao;
import com.luo.hibgen.dao.TShowMentorDao;
import com.jite.hibgen.dao.TUserAccountDao;
import com.jite.hibgen.dao.TUserMessagesDao;
import com.jite.hibgen.model.TMentorBase;
import com.jite.hibgen.model.TOrgActive;
import com.jite.hibgen.model.TOrgActiveUser;
import com.jite.hibgen.model.TShowMentor;
import com.jite.hibgen.model.TUserMessages;
import com.jite.struts.bean.ActivityInfo;
import com.jite.struts.bean.MentorBaseInfo;
import com.jite.struts.bean.MentorInfo;
import com.luo.struts.bean.MessageInfo;
import com.jite.utils.BeanTrans;
import com.jite.utils.Constants;
import com.jite.utils.SystemPropties;


public class MentorService {
	private TMentorBaseDao mentorBaseDao;
	private TShowMentorDao showMentorDao;
//	private TUserMessagesDao messageDao;
	private TUserAccountDao userAccountDao;

	
	public List<MentorInfo> queryMentorinfo(int pageNumber,int pageSize) {
		List<MentorInfo> returnList=new ArrayList<MentorInfo>();
		TShowMentor showMentor=new TShowMentor();
		if(pageNumber==0){
			pageNumber=1;
		}
		if(pageSize==0){
			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}
		List<TShowMentor> allt=showMentorDao.searchByCriteria(pageNumber,pageSize,showMentor);
		for(TShowMentor tsm:allt){
			MentorInfo theRankMentor=new MentorInfo();
			theRankMentor.setMentorBase(BeanTrans.getFromMentorBase(mentorBaseDao.findById(tsm.getMentorId())));
			theRankMentor.setRank(tsm.getRank().toString());
			returnList.add(theRankMentor);
		}
//		for(int i=0;i<allt.size();i++){
//			TMentorBase tsm =allt.get(i);
//			
//		}
		return returnList;
	}
	public MentorBaseInfo viewById(String mentorId){
		MentorBaseInfo result=BeanTrans.getFromMentorBase(mentorBaseDao.findById(Long.valueOf(mentorId)));
		TUserMessages msgSearch=new TUserMessages();
		
		msgSearch.setType(Constants.MESSAGE_TYPE_MENTOR);
		msgSearch.setToAccountId(result.getId());
		msgSearch.setOpenFlag(1);
		List<TUserMessages> msgs=messageDao.searchMentorMsgs(1, 50, msgSearch);
		
		List<MessageInfo> meterMsgs=new ArrayList<MessageInfo>();
		
		for(TUserMessages oneMsg:msgs){
			MessageInfo theMInfo=BeanTrans.getMessageInfoFromT(oneMsg);
			
			
			TUserMessages replySearch=new TUserMessages();
			replySearch.setReplyId(oneMsg.getId());
			List<TUserMessages> replyList=messageDao.findByExample(replySearch);
			if(replyList!=null&&replyList.size()>0){
				theMInfo.setFollowReply(BeanTrans.getMessageInfoFromT(replyList.get(0)));
			}
			
			if(oneMsg.getFromAccountId()!=null&&oneMsg.getFromAccountId()>0){
				theMInfo.setFromUser(BeanTrans.getFromTUserAccount(userAccountDao.findById(oneMsg.getFromAccountId())));
			}
			
			meterMsgs.add(theMInfo);
		}
		result.setMsgList(meterMsgs);
		
		return result;
	}
	
	public TMentorBase send(String mentorId){
		TMentorBase result=mentorBaseDao.findById(Long.valueOf(mentorId));
		
		return result;
	}
	


	public int queryTotal(){
		TShowMentor search=new TShowMentor();
		return showMentorDao.searchByCriteriaTotal(search);
	}
	public TMentorBaseDao getMentorBaseDao() {
		return mentorBaseDao;
	}
	public void setMentorBaseDao(TMentorBaseDao mentorBaseDao) {
		this.mentorBaseDao = mentorBaseDao;
	}
	public TShowMentorDao getShowMentorDao() {
		return showMentorDao;
	}
	public void setShowMentorDao(TShowMentorDao showMentorDao) {
		this.showMentorDao = showMentorDao;
	}
	public TUserMessagesDao getMessageDao() {
		return messageDao;
	}
	public void setMessageDao(TUserMessagesDao messageDao) {
		this.messageDao = messageDao;
	}
	public TUserAccountDao getUserAccountDao() {
		return userAccountDao;
	}
	public void setUserAccountDao(TUserAccountDao userAccountDao) {
		this.userAccountDao = userAccountDao;
	}
	
}
