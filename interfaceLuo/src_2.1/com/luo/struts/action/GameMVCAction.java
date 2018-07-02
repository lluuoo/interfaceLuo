package com.luo.struts.action;

import java.util.Random;

//import org.springframework.context.ApplicationContext;
//import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;
import com.luo.service.GameOldService;

import net.sf.json.JSONObject;

public class GameMVCAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	private String myfist;
	private GameOldService gameOldService = new GameOldService();
	
	public String getMyfist() {
		return myfist;
	}

	public void setMyfist(String myfist) {
		this.myfist = myfist;
	}

	/**
	 * 猜拳游戏主业务
	 */
	public void fingerGuess(){
		returnJson=new JSONObject();
		String[]  theAllResult = gameOldService.fingerGuessExtend(myfist);   //调用Service的业务逻辑处理方法
		returnJson=new JSONObject();
		returnJson.put("theUserFist", theAllResult[0]);
		returnJson.put("theComputerFist", theAllResult[1]);
		returnJson.put("theResult", theAllResult[2]);
		
		//System.out.println("=============" + returnJson.toString() + "===============");  //测试用
		returnJsonStr(returnJson.toString());
	}	
}
