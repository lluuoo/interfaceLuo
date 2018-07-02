package com.jite.struts.action;

import com.jite.struts.service.CalcSerive;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class CalcMVCAction extends BaseAction{
	int num1;
	int num2;
	int sum;
	String [] result={};
	public int getNum1() {
		return num1;
	}

	public void setNum1(int num1) {
		this.num1 = num1;
	}

	public int getNum2() {
		return num2;
	}

	public void setNum2(int num2) {
		this.num2 = num2;
	}

	CalcSerive c=new CalcSerive();
	
	public void add(){
		result=c.add(num1,num2);
		re(result[0],result[1]);
	}
	
	public void min(){
		result=c.min(num1, num2);
		re(result[0],result[1]);
	}
	
	public void mul(){
		result=c.mul(num1, num2);
		re(result[0],result[1]);
	}
	
	public void div(){
		result=c.div(num1, num2);
		re(result[0],result[1]);
	}
	
	public void re(String sum,String info){
		returnJson = new JSONObject();
		returnJson.put("result",sum);
		returnJson.put("info",info);
		returnJsonStr(returnJson.toString());	
	}
	

	
}
