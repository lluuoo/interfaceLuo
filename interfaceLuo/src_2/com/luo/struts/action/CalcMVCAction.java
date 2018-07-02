package com.luo.struts.action;

import com.luo.service.*;
import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class CalcMVCAction extends BaseAction {
	private float num1, num2;
	private String operator;
	//CalcAccurateService calcService = new CalcAccurateService();
	CalcService calcService = new CalcService();
	
	public String getOperator() {
		return operator;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public float getNum1() {
		return num1;
	}

	public void setNum1(float num1) {
		this.num1 = num1;
	}

	public float getNum2() {
		return num2;
	}

	public void setNum2(float num2) {
		this.num2 = num2;
	}

	/**
	 * 综合运算业务逻辑处理
	 */
	public void calculate() {
		if (operator != null) {
			if ("add".equals(operator)) {
				add();
			} else if ("sub".equals(operator)) {
				sub();
			} else if ("mul".equals(operator)) {
				mul();
			} else if ("div".equals(operator)) {
				div();
			} else {
				returnJson = new JSONObject();
				returnJson.put("error", "运算符错误！");
				returnJsonStr(returnJson.toString());
			}
		} else {
			returnJson = new JSONObject();
			returnJson.put("error", "没有运算符！");
			returnJsonStr(returnJson.toString());
		}

	}

	/**
	 * 加法运算
	 */
	public void add() {
		returnJson = new JSONObject();
		float result = calcService.add(num1, num2); // 调用Service的业务逻辑处理方法
		String operator = SystemPropties.getProperties("txt.add2").toString();
		String equal = SystemPropties.getProperties("txt.equal2").toString();
		String info = String.valueOf(num1) + operator + String.valueOf(num2) + equal + String.valueOf(result);
		returnJson.put("result", result);
		returnJson.put("info", info);
		returnJsonStr(returnJson.toString());
	}

	/**
	 * 减法运算
	 */
	public void sub() {
		returnJson = new JSONObject();
		float result = calcService.sub(num1, num2); // 调用Service的业务逻辑处理方法
		String operator = SystemPropties.getProperties("txt.sub2").toString();
		String equal = SystemPropties.getProperties("txt.equal2").toString();
		String info = String.valueOf(num1) + operator + String.valueOf(num2) + equal + String.valueOf(result);
		returnJson.put("result", result);
		returnJson.put("info", info);
		returnJsonStr(returnJson.toString());
	}

	/**
	 * 乘法运算
	 */
	public void mul() {
		returnJson = new JSONObject();
		float result = calcService.mul(num1, num2); // 调用Service的业务逻辑处理方法
		String operator = SystemPropties.getProperties("txt.mul2").toString();
		String equal = SystemPropties.getProperties("txt.equal2").toString();
		String info = String.valueOf(num1) + operator + String.valueOf(num2) + equal + String.valueOf(result);
		returnJson.put("result", result);
		returnJson.put("info", info);
		returnJsonStr(returnJson.toString());
	}

	/**
	 * 除法运算
	 */
	public void div() {
		returnJson = new JSONObject();		
		String info = "";
		try {
			float result = calcService.div(num1, num2); // 调用Service的业务逻辑处理方法
			String operator = SystemPropties.getProperties("txt.div2").toString();
			String equal = SystemPropties.getProperties("txt.equal2").toString();
			info = String.valueOf(num1) + operator + String.valueOf(num2) + equal + String.valueOf(result);
			returnJson.put("result", result);
			returnJson.put("info", info);
		} catch (Exception e) {
			info = e.getMessage();
			returnJson.put("info", info);
		}
		returnJsonStr(returnJson.toString());
	}
}
