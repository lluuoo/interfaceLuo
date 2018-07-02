package com.luo.service;

import java.math.BigDecimal;

public class CalcAccurateService {
	//默认除法运算精度
    private static final int DEF_DIV_SCALE = 10;

	public double add(double v1,double v2){
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
	    BigDecimal b2 = new BigDecimal(Double.toString(v2));
	    return b1.add(b2).doubleValue();
	}
	
	

	
	public double sub(double v1,double v2){
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
	    BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.subtract(b2).doubleValue();
	}
	
	public double mul(double v1,double v2){
		BigDecimal b1 = new BigDecimal(Double.toString(v1));
	    BigDecimal b2 = new BigDecimal(Double.toString(v2));
		return b1.multiply(b2).doubleValue();
	}
	
	/**
	 * 提供（相对）精确的除法运算。当发生除不尽的情况时，由DEF_DIV_SCALE参数指
     * 定精度，以后的数字四舍五入。
	 * @param v1 被除数
	 * @param v2 除数
	 * @return
	 * @throws Exception 除数不能为0的异常
	 */
	public double div(double v1,double v2) throws Exception{
		if (v2==0)
			throw new Exception("除数不能为0!");
		else{
			BigDecimal b1 = new BigDecimal(Double.toString(v1));
	        BigDecimal b2 = new BigDecimal(Double.toString(v2));
	        return b1.divide(b2,DEF_DIV_SCALE,BigDecimal.ROUND_HALF_UP).doubleValue();
		}
			
	}
}
