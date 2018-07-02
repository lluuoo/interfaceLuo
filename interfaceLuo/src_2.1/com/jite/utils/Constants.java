package com.jite.utils;

import java.util.HashMap;

public class Constants {
	public static String ITEM_STR_SEPERATER="__";  //简历专用间隔符
	public static String ITEM_STR_SEPERATER_SPACE=" ";//意向专用间隔符
	
	public static Integer INTENT_TYPE_AREA=1;
	public static Integer INTENT_TYPE_WORK=2;
	public static Integer INTENT_TYPE_LOCATION=3;

	public static Integer ACCOUNT_TYPE_USER=1;
	public static Integer ACCOUNT_TYPE_HR=2;   //HR用户类型
	public static Integer ACCOUNT_TYPE_WESTPLAN=3;
	
	public static Integer HR_STATUS_WAIT_APPROVE=0;	
	public static Integer HR_STATUS_APPROVE=1;
	public static Integer HR_STATUS_FAIL=2;
	
	public static Integer MESSAGE_TYPE_SYSTEM=0;
	public static Integer MESSAGE_TYPE_COMPANY=1; 
	public static Integer MESSAGE_TYPE_ACTIVE=2; 
	public static Integer MESSAGE_TYPE_MENTOR=3; 
	
    public static HashMap weixinHeadImage = new HashMap();
}
