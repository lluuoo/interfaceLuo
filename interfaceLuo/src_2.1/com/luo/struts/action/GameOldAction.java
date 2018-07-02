package com.luo.struts.action;

import java.util.List;
import java.util.Random;

//import org.springframework.context.ApplicationContext;
//import org.springframework.web.context.support.WebApplicationContextUtils;

import com.jite.struts.action.BaseAction;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class GameOldAction extends BaseAction {
	private static final long serialVersionUID = 1L;
	
	private String myfist;
	
	public String getMyfist() {
		return myfist;
	}

	public void setMyfist(String myfist) {
		this.myfist = myfist;
	}

	//猜拳游戏主业务
	public void fingerGuess(){
		returnJson=new JSONObject();
		String theResult = "";      //结果字符串
		String computer = computerFist();   //计算机出拳
		
		if (!myfist.equals("rock") && !myfist.equals("scissors") && !myfist.equals("paper")){
			theResult = "别乱出拳，还能不能好好一起玩耍了？";
		}
		else {
			int compare = fingerGuessRegulate(myfist,computer);
			if (compare == 1)
				theResult = "你赢了！";
			else if (compare == 0)
				theResult = "握手言和！";
			else if (compare == -1)
				theResult = "你输了！";			
		}
		
		returnJson=new JSONObject();
		returnJson.put("theResult", theResult);
		
		//System.out.println("=============" + returnJson.toString() + "===============");  //测试用
		returnJsonStr(returnJson.toString());
	}
	
	/* 猜拳游戏胜负规则
	 * rock > scissors, scissors > paper, paper > rock
	 * 如果op1>op2，返回1 ；op1==op2,返回0 ；op1<op2，返回-1
	 */
	private int fingerGuessRegulate(String op1, String op2){
		int compare = 0;
		if (op1.equals(op2)) {
			compare =  0;
		}
		else if (op1.equals("rock")) {
			if (op2.equals("scissors")) 
				compare =  1;
			else
				compare =  -1;
		}
		else if (op1.equals("scissors")) {
			if (op2.equals("paper")) 
				compare =  1;
			else
				compare =  -1;			
		}
		else if (op1.equals("paper")) {
			if (op2.equals("rock")) 
				compare =  1;
			else
				compare =  -1;	
		}
		return compare;
	}
	
	//计算机随机出拳
	private String computerFist(){
		String [] fist={"rock","scissors","paper"};
		Random random = new Random();
		int i = random.nextInt(3);
		return fist[i];
	}
	
	//猜拳游戏主业务 扩展
	public void fingerGuessExtend(){
		returnJson=new JSONObject();
		String theResult = "";      //结果字符串
		String computer = computerFist();   //计算机出拳
		
		if (!myfist.equals("rock") && !myfist.equals("scissors") && !myfist.equals("paper")){
			theResult = SystemPropties.getProperties("txt.user_input_err").toString();
		}
		else {
			int compare = fingerGuessRegulate(myfist,computer);
			if (compare == 1)
				theResult = SystemPropties.getProperties("txt.user_win").toString();
			else if (compare == 0)
				theResult = SystemPropties.getProperties("txt.user_tie").toString();
			else if (compare == -1)
				theResult = SystemPropties.getProperties("txt.user_fail").toString();			
		}
	
		returnJson=new JSONObject();
		returnJson.put("theUserFist", myfist);
		returnJson.put("theComputerFist", computer);
		returnJson.put("theResult", theResult);
		
		//System.out.println("=============" + returnJson.toString() + "===============");  //测试用
		returnJsonStr(returnJson.toString());
	}

}
