package com.jite.struts.action;

import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class CalcAction extends BaseAction{

	int num1;
	int num2;
	int sum;
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

	public void add(){
		sum=num1+num2;
		re(sum,num1,num2,SystemPropties.getProperties("txt.add"),SystemPropties.getProperties("txt.equal"));
	}
	
	public void min(){
		sum=num1-num2;
		re(sum,num1,num2,SystemPropties.getProperties("txt.min"),SystemPropties.getProperties("txt.equal"));
	}
	
	public void mul(){
		sum=num1*num2;
		re(sum,num1,num2,SystemPropties.getProperties("txt.mul"),SystemPropties.getProperties("txt.equal"));
	}
	
	public void div(){
		if(num1==0||num2==0){
			returnJson = new JSONObject();
			returnJson.put("result","除数不能为0");
			returnJsonStr(returnJson.toString());
		}else{
		sum=num1/num2;
		re(sum,num1,num2,SystemPropties.getProperties("txt.div"),SystemPropties.getProperties("txt.equal"));
		}
	}
	
	public void re(int sum,int num1,int num2,String symbol1,String symbol2){
		returnJson = new JSONObject();
		returnJson.put("result",sum);
		returnJson.put("info", num1+symbol1+num2+symbol2+sum);
		returnJsonStr(returnJson.toString());	
	}
}
