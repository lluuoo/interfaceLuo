package com.luo.service;

import java.util.Random;
import com.jite.utils.SystemPropties;

public class GameOldService {

	/**
	 * 猜拳游戏主业务 扩展（提示信息取自资源文件）
	 * @param myfist 人出的拳
	 * @return  返回的结果字符串数组，依次3个信息为：人的出拳，电脑的出拳，对战结果。
	 */
	public String[] fingerGuessExtend(String myfist) {
		String[]  theAllResult = new String[3];   //存放要返回的结果，依次3个信息为，人的出拳，电脑的出拳，对战结果
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
	 * @return 出拳的字符串（ "rock", "scissors", "paper"）
	 */
	private String computerFist() {
		String[] fist = { "rock", "scissors", "paper" };
		Random random = new Random();
		int i = random.nextInt(3);
		return fist[i];
	}

}
