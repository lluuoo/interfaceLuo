package com.jite.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import com.jite.hibgen.dao.TOrgActiveDao;
import com.jite.hibgen.model.TOrgActive;
//import com.jite.hibgen.dao.TUserBizcardDao;
//import com.jite.hibgen.model.TOrgActiveUser;
//import com.jite.hibgen.model.TUserBizcard;
//import com.jite.struts.bean.UserInfo;
//import com.jite.utils.Constants;
import com.jite.struts.bean.ActivityInfo;
import com.jite.utils.BeanTrans;
import com.jite.utils.SystemPropties;

/**
 * 下面的import中，注释的都是原先代码有的 *
 */
//import com.jite.hibgen.model.TUserMessages;
//import com.jite.hibgen.model.TOrgActiveUser;
//import com.jite.hibgen.dao.TUserMessagesDao;
//import com.jite.hibgen.dao.TOrgActiveUserDao;

public class ActivityService {
	@Resource
	private TOrgActiveDao activityDao;
//	private TOrgActiveUserDao activeUserDao;
//	private TUserBizcardDao userBizcardDao;
//	private TUserMessagesDao messageDao;
	
	public TOrgActiveDao getActivityDao() {
		return activityDao;
	}

	public void setActivityDao(TOrgActiveDao activityDao) {
		this.activityDao = activityDao;
	}

//	public TOrgActiveUserDao getActiveUserDao() {
//		return activeUserDao;
//	}
//
//	public void setActiveUserDao(TOrgActiveUserDao activeUserDao) {
//		this.activeUserDao = activeUserDao;
//	}
//
//	public TUserBizcardDao getUserBizcardDao() {
//		return userBizcardDao;
//	}
//
//	public void setUserBizcardDao(TUserBizcardDao userBizcardDao) {
//		this.userBizcardDao = userBizcardDao;
//	}
//
//	public TUserMessagesDao getMessageDao() {
//		return messageDao;
//	}
//
//	public void setMessageDao(TUserMessagesDao messageDao) {
//		this.messageDao = messageDao;
//	}


	/**
	 * 团委活动数据查询
	 * @param pageNumber
	 * @param pageSize
	 * @return
	 */
	public List<ActivityInfo> queryPublishedActivities(int pageNumber,int pageSize) {
		List<ActivityInfo> returnList=new ArrayList<ActivityInfo>();
		TOrgActive actSea=new TOrgActive();
		if(pageNumber==0){
			pageNumber=1;
		}
		if(pageSize==0){
			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}
		List<TOrgActive> allt=activityDao.searchByCriteria(pageNumber,pageSize,actSea);
		for(TOrgActive toa:allt){
			returnList.add(BeanTrans.getFromTOrgActive(toa,pageNumber,pageSize));
		}
		return returnList;
	}

	/**
	 * 团委活动数据查询结果的总数
	 * @return
	 */
	public int queryPublishedActivitiesTotal(){
		TOrgActive search=new TOrgActive();
		return activityDao.searchByCriteriaTotal(search);
	}
	
	/**
	 * 新任务：按照团委活动ID查询详细信息
	 */
	public ActivityInfo queryById(String activeId,String userId) {
		ActivityInfo result=BeanTrans.getFromTOrgActive(activityDao.findById(Long.valueOf(activeId)),1,6);

//			TOrgActiveUser search=new TOrgActiveUser();
//			search.setActiveId(Long.valueOf(activeId));
//			List<TOrgActiveUser> searchList=activeUserDao.findByExample(search);
//			List<UserInfo> theJionUser=new ArrayList<UserInfo>();
//			for(TOrgActiveUser toau:searchList){
//				UserInfo user=new UserInfo();
//				user.setUserId(toau.getAccountId().toString());
//				theJionUser.add(user);
//			}
//			result.setJoinList(theJionUser);


		return result;
	}
	
	/**
	 * 新任务：重新修改点赞数量：点赞数+1
	 * @param activeId   团委活动ID
	 * @return
	 */
	public ActivityInfo greatById(String activeId) {
		TOrgActive toa=activityDao.findById(Long.valueOf(activeId));
		toa.setGreatSum((toa.getGreatSum()==null?0:toa.getGreatSum())+1);
		activityDao.updateObject(toa);
		return BeanTrans.getFromTOrgActive(toa,1,1);
	}

}
