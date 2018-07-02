package com.luo.struts.action;

import java.util.List;
import java.util.Random;

import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

//import org.springframework.context.ApplicationContext;
//import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;
import com.luo.service.GameService;
import com.luo.struts.bean.GameFingerguessInfo;

import net.sf.json.JSONObject;

public class GameAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	private String myfist;
	private int pageNumber;
	private int pageSize;
	private GameService gameService;
	
	public GameService getGameService() {
		return gameService;
	}

	public void setGameService(GameService gameService) {
		this.gameService = gameService;
	}

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
		String[]  theAllResult = gameService.fingerGuessExtend(myfist);   //调用Service的业务逻辑处理方法
		returnJson=new JSONObject();
		returnJson.put("theUserFist", theAllResult[0]);
		returnJson.put("theComputerFist", theAllResult[1]);
		returnJson.put("theResult", theAllResult[2]);
		
		//System.out.println("=============" + returnJson.toString() + "===============");  //测试用
		returnJsonStr(returnJson.toString());
	}	
	
	public void fingerGuessData(){
		//1.实例化Service对象，查询数据的业务交给GameService对象来完成
		if(gameService == null){
			ApplicationContext ac = WebApplicationContextUtils.getWebApplicationContext( request.getSession().getServletContext());
			gameService = (GameService)ac.getBean("gameService");
		}
		
		//2.调用Service对象的业务方法，得到结果数据；
		List<GameFingerguessInfo> gList=gameService.queryPublishedDatas(pageNumber,pageSize);
//		System.out.println(gList.get(1));
		//3.将结果数据放入JSON对象，并输出到客户端。
		returnJson=new JSONObject();
		returnJson.put("code", SystemPropties.getProperties("code.success"));
		returnJson.put("info",SystemPropties.getProperties("txt.success"));
		returnJson.put("gameFingerguessList", gList);
		//查询次数最多的情况
		returnJson.put("maxCount",gameService.queryPublishedMaxCount());
		returnJsonStr(returnJson.toString());
	}

}
