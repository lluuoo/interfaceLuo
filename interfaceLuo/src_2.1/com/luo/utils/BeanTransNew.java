package com.luo.utils;

import java.lang.reflect.InvocationTargetException;
//import java.util.ArrayList;
//import java.util.Date;
//import java.util.List;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.beanutils.PropertyUtils;


import com.jite.utils.SystemPropties;
//import com.jite.utils.THrCompany;
import com.luo.hibgen.model.THrJobBase;
import com.luo.hibgen.model.TShowHomebanner;
import com.luo.hibgen.model.TShowHomeworktypes;
import com.jite.hibgen.model.THrCompany;
import com.luo.struts.bean.HrCompanyInfo;
import com.luo.struts.bean.HrJobBaseInfo;
import com.luo.struts.bean.ShowHomebannerInfo;
import com.luo.struts.bean.TopWorkTypeInfo;

public class BeanTransNew {

	/**
	 * 查询热门职业第1级类别。
	 * 
	 * @param th
	 *            第1级职业类别POJO类
	 * @return 第1级职业类别POJO页面类
	 */
	public static TopWorkTypeInfo getFromTShowHomeworktypes(TShowHomeworktypes th) {
		TopWorkTypeInfo topWorkTypeInfo = new TopWorkTypeInfo();
		try {
			PropertyUtils.copyProperties(topWorkTypeInfo, th);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return topWorkTypeInfo;
	}

	/**
	 * 查询热门职业第2级类别。
	 * 
	 * @param th
	 *            第2级职业类别POJO类
	 * @return 第2级职业类别POJO页面类
	 */
	public static HrJobBaseInfo getFromTHrJobBase(THrJobBase th) {
		HrJobBaseInfo hrJobBaseInfo = new HrJobBaseInfo();
		try {
			PropertyUtils.copyProperties(hrJobBaseInfo, th);
			hrJobBaseInfo.setSalaryRange(calculateYearSalary(th));  //计算薪酬范围
			hrJobBaseInfo.setLocationDist(getLocationDist(th.getLocation()));   //计算地区
			
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return hrJobBaseInfo;
	}

	
	/**
	 * 第7章，步骤三：生成LocationDist,获取Location的区名
	 */
	private static String getLocationDist(String locationStr) {
		String[] theArray = new String[5];
		if (locationStr.indexOf(" ") >= 0) {
			theArray = locationStr.split(" ");
		} else {
			theArray = locationStr.split(SystemPropties.getProperties("user_item_seperater").toString());
		}
		return theArray[2]; // 返回数组第3个元素（[0]：省， [1]：市， [2]：区）
	}

	/**
	 * 第7章，步骤三：根据职位的salary和salaryAbove，计算职位的薪酬范围 规则：
	 * 1）not_show_salary字段为1或null，则返回"面议"; 2)salary_Above字段为0，则返回"面议";
	 * 3)salary_Above字段>99999，则返回"10K及以上";
	 * 4)salary字段为最低薪水，salary_Above字段为最高薪水；返回"xxK ~ xxK"。
	 * 
	 * @return 薪酬范围字符串
	 */
	private static String calculateYearSalary(THrJobBase jobBase) {
		String theReturnStr = "";
		if (jobBase.getNotShowSalary() == null || jobBase.getNotShowSalary().equals(1)) {
			theReturnStr = "面议";
		} else {
			if (jobBase.getSalaryAbove().equals(0)) {
				theReturnStr = "面议";
			} else if (jobBase.getSalaryAbove().equals(99999)) {
				theReturnStr = "10K及以上";
			} else {
				// 最低薪水
				String year1 = String.valueOf(jobBase.getSalary() / 1000) + "";
				if (year1.indexOf(".") > 0 && (year1.length() - year1.indexOf(".") > 2)) {
					year1 = year1.substring(0, year1.indexOf(".") + 2);
				}
				theReturnStr += year1 + "K";

				// 最高薪水
				if (jobBase.getSalaryAbove() == null) {
					theReturnStr += "起";
				} else {
					theReturnStr += "~";
					String year2 = String.valueOf(jobBase.getSalaryAbove() / 1000) + "";
					if (year2.indexOf(".") > 0 && (year2.length() - year2.indexOf(".") > 2)) {
						year2 = year2.substring(0, year2.indexOf(".") + 2);
					}
					theReturnStr += year2 + "K";
				}
			}
		}
		return theReturnStr;
	}
	
	/**
	 * 主页Banner图片轮播，实体类转换成页面类方法。
	 * 
	 * @param ts
	 *            主页Banner图片POJO类
	 * @return 主页Banner图片页面POJO类
	 */
	public static ShowHomebannerInfo getFromTShowHomebanner(TShowHomebanner ts) {
		ShowHomebannerInfo showHomebannerInfo = new ShowHomebannerInfo();
		try {
			PropertyUtils.copyProperties(showHomebannerInfo, ts);
		} catch (IllegalAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchMethodException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return showHomebannerInfo;
	}

	/**
	 * 将THrCompany实体数据 复制到 HrCompanyInfo页面实体
	 * 
	 * @param tCom
	 * @return
	 */
	public static HrCompanyInfo getFromTCompany(THrCompany tCom) {
		HrCompanyInfo comInfo = new HrCompanyInfo();
		try {
			BeanUtils.copyProperty(comInfo, "companyId", tCom.getId());
			BeanUtils.copyProperty(comInfo, "name", tCom.getName());
			BeanUtils.copyProperty(comInfo, "type", tCom.getType());
			BeanUtils.copyProperty(comInfo, "logo", tCom.getLogo());
			BeanUtils.copyProperty(comInfo, "short_name", tCom.getShortName());
			BeanUtils.copyProperty(comInfo, "scale_type", tCom.getScaleType());
			BeanUtils.copyProperty(comInfo, "province", tCom.getProvince());
			BeanUtils.copyProperty(comInfo, "tags", tCom.getTags());
			BeanUtils.copyProperty(comInfo, "address", tCom.getAddress());
			BeanUtils.copyProperty(comInfo, "homepage", tCom.getHomepage());
			BeanUtils.copyProperty(comInfo, "province", tCom.getProvince());
			BeanUtils.copyProperty(comInfo, "telephone", tCom.getTelephone());
			BeanUtils.copyProperty(comInfo, "traffic", tCom.getTraffic());
			BeanUtils.copyProperty(comInfo, "short_desc", tCom.getShortDesc());
			BeanUtils.copyProperty(comInfo, "description", tCom.getDescription());
			BeanUtils.copyProperty(comInfo, "isStart", tCom.getIsStart().toString());
			BeanUtils.copyProperty(comInfo, "status", tCom.getStatus());
			BeanUtils.copyProperty(comInfo, "certificateFile", tCom.getCertificateFile());

		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
		return comInfo;
	}

	
	// /**
	// * 猜拳游戏结果统计，实体类转换成页面类方法。（查询猜拳游戏结果统计数据用）
	// *
	// * @param tg
	// * 猜拳游戏结果统计POJO类
	// * @return 猜拳游戏结果统计POJO页面类
	// */
	// public static GameFingerguessInfo
	// getFromTGameFingerguess(TGameFingerguess tg) {
	// GameFingerguessInfo gameFingerguessInfo = new GameFingerguessInfo();
	// try {
	// PropertyUtils.copyProperties(gameFingerguessInfo, tg);
	// } catch (IllegalAccessException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// } catch (InvocationTargetException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// } catch (NoSuchMethodException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// return gameFingerguessInfo;
	// }

	// /**
	// * World数据库的Country表，实体类转换成页面类方法。
	// *
	// * @param co
	// * Country表POJO类
	// * @return Country表POJO页面类
	// */
	// public static CountryInfo getFromCountry(Country co) {
	// CountryInfo countryInfo = new CountryInfo();
	// try {
	// PropertyUtils.copyProperties(countryInfo, co);
	// } catch (IllegalAccessException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// } catch (InvocationTargetException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// } catch (NoSuchMethodException e) {
	// // TODO Auto-generated catch block
	// e.printStackTrace();
	// }
	// return countryInfo;
	// }

}
