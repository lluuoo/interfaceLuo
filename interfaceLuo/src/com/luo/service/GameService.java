package com.luo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import com.jite.hibgen.model.TOrgActive;
import com.jite.struts.bean.ActivityInfo;
import com.jite.utils.BeanTrans;
import com.jite.utils.SystemPropties;
import com.luo.hibgen.dao.TGameDao;
import com.luo.hibgen.model.TGameFingerguess;
import com.luo.struts.bean.GameFingerguessInfo;

public class GameService {
	private TGameDao gameDao;

	public TGameDao getGameDao() {
		return gameDao;
	}

	public void setGameDao(TGameDao gameDao) {
		this.gameDao = gameDao;
	}

	/**
	 * 猜拳游戏主业务 扩展（提示信息取自资源文件）
	 * 
	 * @param myfist
	 *            人出的拳
	 * @return 返回的结果字符串数组，依次3个信息为：人的出拳，电脑的出拳，对战结果。
	 */
	public String[] fingerGuessExtend(String myfist) {
		String[] theAllResult = new String[3]; // 存放要返回的结果，依次3个信息为，人的出拳，电脑的出拳，对战结果
		String theResult = ""; // 对战结果字符串
		String computer = computerFist(); // 计算机出拳

		if (!myfist.equals("rock") && !myfist.equals("scissors") && !myfist.equals("paper")) {
			theResult = SystemPropties.getProperties("txt.user_input_err").toString();
		} else {
			int compare = fingerGuessRegulate(myfist, computer);
			if (compare == 1)
				theResult = SystemPropties.getProperties("txt.user_win").toString();
			else if (compare == 0)
				theResult = SystemPropties.getProperties("txt.user_tie").toString();
			else if (compare == -1)
				theResult = SystemPropties.getProperties("txt.user_fail").toString();
		}

		theAllResult[0] = myfist;
		theAllResult[1] = computer;
		theAllResult[2] = theResult;

		return theAllResult;
	}

	/**
	 * 猜拳游戏规则 rock > scissors, scissors > paper, paper > rock, <br>
	 * 如果op1大于op2，返回1； op1等于op2,返回0 ；op1小于op2，返回-1。
	 */
	private int fingerGuessRegulate(String op1, String op2) {
		int compare = 0;
		if (op1.equals(op2)) {
			compare = 0;
		} else if (op1.equals("rock")) {
			if (op2.equals("scissors"))
				compare = 1;
			else
				compare = -1;
		} else if (op1.equals("scissors")) {
			if (op2.equals("paper"))
				compare = 1;
			else
				compare = -1;
		} else if (op1.equals("paper")) {
			if (op2.equals("rock"))
				compare = 1;
			else
				compare = -1;
		}
		return compare;
	}

	/**
	 * 计算机随机出拳
	 * 
	 * @return 出拳的字符串（ "rock", "scissors", "paper"）
	 */
	private String computerFist() {
		String[] fist = { "rock", "scissors", "paper" };
		Random random = new Random();
		int i = random.nextInt(3);
		return fist[i];
	}

	/**
	 * 查询猜拳游戏汇总表的数据
	 */
	public List<GameFingerguessInfo> queryPublishedDatas(int pageNumber, int pageSize) {
		List<GameFingerguessInfo> returnList = new ArrayList<GameFingerguessInfo>();
		TGameFingerguess actSea = new TGameFingerguess();
		if (pageNumber == 0) {
			pageNumber = 1;
		}
		if (pageSize == 0) {
			pageSize = Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
		}
		List<TGameFingerguess> allt = gameDao.searchByCriteria(pageNumber, pageSize, actSea);
		System.out.println(allt.size());

		for (TGameFingerguess toa : allt) {
			returnList.add(BeanTrans.getFromTGameFingerguess(toa));
		}
		return returnList;
	}

	// 定义“查询最多次数项表”业务的service方法queryPublishedMaxNumber()
	public List<TGameFingerguess> queryPublishedMaxCount() {
		// 使用GameDao对象进行数据查询；
		// List<GameFingerGuessInfo> returnList = new
		// ArrayList<GameFingerGuessInfo>();
		return gameDao.searchMaxCountByCriteria();
	}

	// 保存对战结果数据(如果没有，则新建)
	public void saveResult(int itemId) {
		TGameFingerguess tf = gameDao.findById(itemId);
		if (tf == null) {
			tf = new TGameFingerguess();
			tf.setItemId(itemId);
			tf.setItemName(this.getItemNameByID(itemId));
			tf.setCount(1);
			gameDao.saveObject(tf);
		} else {
			tf.setCount(tf.getCount() + 1);
			gameDao.update(tf);
		}

	}

	//根据item的id得到name
	public String getItemNameByID(int id) {
		String itemName = "";
		if (id == 1) {
			itemName = SystemPropties.getProperties("txt.user_win").toString();
		} else if (id == 2) {
			itemName = SystemPropties.getProperties("txt.user_fail").toString();
		} else if (id == 3) {
			itemName = SystemPropties.getProperties("txt.user_tie").toString();
		} else if (id == 4) {
			itemName = SystemPropties.getProperties("txt.user_input_err").toString();
		}
		return itemName;
	}

	//根据item的name得到id
	public int getItemIdByName(String itemName) {
		int id = 0;
		if (itemName.equals(SystemPropties.getProperties("txt.user_input_err").toString())) {
			id = 4;
		} else if (itemName.equals(SystemPropties.getProperties("txt.user_win").toString())) {
			id = 1;
		} else if (itemName.equals(SystemPropties.getProperties("txt.user_tie").toString())) {
			id = 3;
		} else if (itemName.equals(SystemPropties.getProperties("txt.user_fail").toString())) {
			id = 2;
		}
		return id;
	}

}
