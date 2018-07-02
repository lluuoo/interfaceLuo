package com.jite.struts.action;

import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class GameAction extends BaseAction{
	
	String myfist;
	
	
	public String getMyfist() {
		return myfist;
	}

	public void setMyfist(String myfist) {
		this.myfist = myfist;
	}

	public void fingerGuess(){
		String cp=computerFist();
		String resultStr=null;
		int result=0;
		if(!myfist.equals("scissors")&&!myfist.equals("rock")&&!myfist.equals("paper")){
			result=-1;
		}else{
			result=fingerGuessRegulate(myfist,cp);
		}
		if(result==-1){
			resultStr=SystemPropties.getProperties("txt.user_input_err");
		}else if(result==0){
			resultStr=SystemPropties.getProperties("txt.user_tie");
		}else if(result==1){
			resultStr=SystemPropties.getProperties("txt.user_win");
		}else{
			resultStr=SystemPropties.getProperties("txt.user_fail");
		}
		returnJson = new JSONObject();
		returnJson.put("theUserFist", myfist);
		returnJson.put("theComputerFist", cp);
		returnJson.put("theresultStr", resultStr);
		returnJsonStr(returnJson.toString());	
	}
	
	
	
	public String computerFist(){
		 int num = (int) (Math.random()*3);
		 String kk = null;
		 String [] xx={"scissors","rock","paper"};
		 kk=xx[num];
		return kk;		
	}

	private int fingerGuessRegulate(String op1,String op2){
		int num=0;
		if(op1.equals(op2)){
			num=0;
		}else if((op1.equals("scissors")&&op2.equals("paper"))||
				(op1.equals("rock")&&op2.equals("scissors"))||
				(op1.equals("paper")&&op2.equals("rock")))
		{
			 num=1;
		}else {
			
			num=2;
		}
			return num;
		
	}


}
