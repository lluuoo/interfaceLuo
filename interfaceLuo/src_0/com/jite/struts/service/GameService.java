package com.jite.struts.service;


import java.util.ArrayList;
import java.util.List;

import com.jite.hibgen.dao.TGameDao;
import com.jite.hibgen.model.TGameFingerguess;
import com.jite.hibgen.model.TOrgActive;
import com.jite.struts.bean.GameFingerGuessDataInfo;
import com.jite.utils.BeanTrans;
import com.jite.utils.SystemPropties;

import net.sf.json.JSONObject;

public class GameService{
	
	private TGameDao tGameDao;
	
	

	public TGameDao gettGameDao() {
		return tGameDao;
	}

	public void settGameDao(TGameDao tGameDao) {
		this.tGameDao = tGameDao;
	}

	public String computerFist(){
		 int num = (int) (Math.random()*3);
		 String kk = null;
		 String [] xx={"scissors","rock","paper"};
		 kk=xx[num];
		return kk;		
	}
	
	public String[] fingerGuessExtends(String myfist){
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
			String [] jg={resultStr,cp};
			return jg;
			
		
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

	public List<GameFingerGuessDataInfo> queryPublishedDatas(int pageNumber,int pageSize){
		List<GameFingerGuessDataInfo> returnList=new ArrayList<GameFingerGuessDataInfo>();
		TGameFingerguess tgf =new TGameFingerguess();
		
		List<TGameFingerguess> gList=tGameDao.searchCriteria();
		for(TGameFingerguess tg:gList){
			returnList.add(BeanTrans.getFromTGameFingerguess(tg));
		}
		return returnList;
		
	}
	
	public List<GameFingerGuessDataInfo> queryPublishedGameMax(){
		List<GameFingerGuessDataInfo> returnList=new ArrayList<GameFingerGuessDataInfo>();
		TGameFingerguess tgf =new TGameFingerguess();
		List<TGameFingerguess> gList=tGameDao.searchByCriteriaMAX();
		for(TGameFingerguess tg:gList){
			returnList.add(BeanTrans.getFromTGameFingerguess(tg));
		}
		return returnList;
	}
	
}
