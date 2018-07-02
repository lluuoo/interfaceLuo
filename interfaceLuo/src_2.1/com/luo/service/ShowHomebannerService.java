package com.luo.service;

import java.util.ArrayList;
import java.util.List;

import com.luo.hibgen.dao.THrJobBaseDao;
import com.luo.hibgen.dao.TShowHomebannerDao;
import com.luo.hibgen.model.TShowHomebanner;
import com.luo.hibgen.model.TShowHomeworktypes;
import com.luo.struts.bean.ShowHomebannerInfo;
import com.luo.struts.bean.TopWorkTypeInfo;
import com.luo.utils.BeanTransNew;

public class ShowHomebannerService {
	private TShowHomebannerDao showHomebannerDao;

	public TShowHomebannerDao getShowHomebannerDao() {
		return showHomebannerDao;
	}

	public void setShowHomebannerDao(TShowHomebannerDao showHomebannerDao) {
		this.showHomebannerDao = showHomebannerDao;
	}
	
	/**
	 * 查询t_show_homebanner表所有记录（查询条件：rank=1 And status=0）
	 * @return
	 */
	public List<ShowHomebannerInfo> queryHomebanner() {
		// 使用homeworktypesDao对象进行数据查询；
		List<ShowHomebannerInfo> returnList = new ArrayList<ShowHomebannerInfo>();
		List<TShowHomebanner> allTsh = showHomebannerDao.searchByCriteria();

		// 将数据查询的结果转换成页面数据结果，并返回。
		for (TShowHomebanner ts : allTsh) {
			returnList.add(BeanTransNew.getFromTShowHomebanner(ts));
		}
		return returnList;
	}
	
}
