package com.jite.common.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;


public class DateUtil {

	
	public static Date start2Date(String strDate) {
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
		try {
			Date date = df.parse(strDate);
			return date;
		} catch (ParseException e) {
			return null;
		}
	}

	public static Date start2Date(String strDate,String formatter) {
		SimpleDateFormat df = new SimpleDateFormat(formatter);
		try {
			Date date = df.parse(strDate);
			return date;
		} catch (ParseException e) {
			return null;
		}
	}
	
	public static String start2Date(){
			
		  SimpleDateFormat f = new SimpleDateFormat("yyyy-MM-dd");
		  Date b = new Date();
		  Calendar c = Calendar.getInstance();	  
		  c.add(Calendar.DAY_OF_MONTH, 60);
		  String a = f.format(c.getTime());
		  return a;
	}
	
}
