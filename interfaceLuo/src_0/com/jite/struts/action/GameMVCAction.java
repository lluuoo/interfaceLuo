package com.jite.struts.action;

import com.jite.utils.SystemPropties;
import net.sf.json.JSONObject;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.service.ActivityService;
import com.jite.struts.bean.GameFingerGuessDataInfo;
import com.jite.struts.service.GameService;


public class GameMVCAction  extends BaseAction{

String myfist;

private GameService gameService;
private int pageNumber;
private int pageSize;


	public int getPageNumber() {
	return pageNumber;
}

public void setPageNumber(int pageNumber) {
	this.pageNumber = pageNumber;
}

public int getPageSize() {
	return pageSize;
}

public void setPageSize(int pageSize) {
	this.pageSize = pageSize;
}

	public String getMyfist() {
		return myfist;
	}

	public void setMyfist(String myfist) {
		this.myfist = myfist;
	}

	public void fingerGuess(){
		if (gameService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			gameService = (GameService) ac.getBean("gameService");
		}
		String jg[]=gameService.fingerGuessExtends(myfist);
		returnJson = new JSONObject();
		returnJson.put("theUserFist", myfist);
		returnJson.put("theComputerFist", jg[1]);
		returnJson.put("theresultStr", jg[0]);
		returnJsonStr(returnJson.toString());	
	}
	
	public void fingerGuessData(){
		if (gameService == null) {
			ApplicationContext ac = WebApplicationContextUtils
					.getWebApplicationContext(request.getSession().getServletContext());
			gameService = (GameService) ac.getBean("gameService");
			List<GameFingerGuessDataInfo> gList=gameService.queryPublishedDatas(pageNumber, pageSize);
			List<GameFingerGuessDataInfo> mList=gameService.queryPublishedGameMax();
			returnJson = new JSONObject();
			returnJson.put("gameList", gList);
			returnJson.put("maxCount", mList);
			returnJsonStr(returnJson.toString());	
		}
	}
	
	
}
