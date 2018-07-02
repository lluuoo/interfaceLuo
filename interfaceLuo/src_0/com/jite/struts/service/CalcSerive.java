package com.jite.struts.service;

import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class CalcSerive {

	int sum=0;
	String [] resultStr=new String[3];
	
	public String[] add(int num1,int num2){
		sum=num1+num2;
		resultStr=re(sum,num1,num2,SystemPropties.getProperties("txt.add"),SystemPropties.getProperties("txt.equal"));
		return resultStr;
	}
	
	public String[] min(int num1,int num2){
		sum=num1-num2;
		resultStr=re(sum,num1,num2,SystemPropties.getProperties("txt.min"),SystemPropties.getProperties("txt.equal"));
		return resultStr;
	}
	
	public String[] mul(int num1,int num2){
		sum=num1*num2;
		resultStr=re(sum,num1,num2,SystemPropties.getProperties("txt.mul"),SystemPropties.getProperties("txt.equal"));
		return resultStr;
	}
	
	public String[] div(int num1,int num2){
		if(num1==0||num2==0){
			resultStr[0]="除数不能为0";
			return resultStr;
		}else{
		sum=num1/num2;
		resultStr=re(sum,num1,num2,SystemPropties.getProperties("txt.div"),SystemPropties.getProperties("txt.equal"));
		}
		return resultStr;
	}
	
	public String[] re(int sum,int num1,int num2,String symbol1,String symbol2){
		String re=""+sum;
		String info=num1+symbol1+num2+symbol2+sum;
		resultStr[0]=re;
		resultStr[1]=info;
		return resultStr;
	}
	
}
