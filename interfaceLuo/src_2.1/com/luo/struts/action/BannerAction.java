package com.luo.struts.action;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;
import com.luo.service.ShowHomebannerService;
import com.luo.struts.bean.ShowHomebannerInfo;

import net.sf.json.JSONObject;

public class BannerAction extends BaseAction{
	private static final long serialVersionUID = 1L;
	
	private ShowHomebannerService showHomebannerService;
	
	public ShowHomebannerService getShowHomebannerService() {
		return showHomebannerService;
	}

	public void setShowHomebannerService(ShowHomebannerService showHomebannerService) {
		this.showHomebannerService = showHomebannerService;
	}

	/**
	 * 获取主页Banner图片轮播所需的图片信息
	 */
	public void queryHome(){
		
		if(showHomebannerService==null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext(request.getSession().getServletContext());
			showHomebannerService=(ShowHomebannerService)ac.getBean("showHomebannerService");
		}
		
		List<ShowHomebannerInfo> bannerList=showHomebannerService.queryHomebanner();
		
		returnJson = new JSONObject();
		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("bannerInfo", bannerList);
		returnJsonStr(returnJson.toString());
	}

}
