package com.luo.service;

import java.util.ArrayList;
import java.util.List;

import com.luo.struts.bean.CommonItem;
import com.luo.hibgen.dao.TShowHomeareasDao;
import com.luo.hibgen.model.TShowHomeareas;
import com.luo.struts.bean.ShowHomeareasInfo;

public class CommonService {
	private TShowHomeareasDao showHomeareasDao;
	
	public TShowHomeareasDao getShowHomeareasDao() {
		return showHomeareasDao;
	}

	public void setShowHomeareasDao(TShowHomeareasDao showHomeareasDao) {
		this.showHomeareasDao = showHomeareasDao;
	}

	public List<CommonItem> queryHomeAreas(int pageNumber, int pageSize) {
		// 设置查询条件
		TShowHomeareas search = new TShowHomeareas();
		search.setFather(0L);
		search.setType(1);
		search.setStatus(0);
		// 查询1级“热门行业”
		List<TShowHomeareas> showHomeareas = showHomeareasDao.searchByCriteria(pageNumber, pageSize, search);
		List<CommonItem> result = new ArrayList<CommonItem>();
		for (TShowHomeareas homearea : showHomeareas) {
			CommonItem rootItem = new CommonItem();
			rootItem.setId(homearea.getTheId().toString());  //存入CommonItem的id应该是表中的the_id字段值
			rootItem.setName(homearea.getName());

			// 添加2级“热门行业”
			search.setFather(Long.valueOf(homearea.getId()));
			//System.out.println("xfather========="+search.getFather());
			search.setType(null);
			List<TShowHomeareas> subShowHomeareas = showHomeareasDao.searchByCriteria(1, 2, search);
			List<CommonItem> subItems = new ArrayList<CommonItem>();
			for (TShowHomeareas subHomearea : subShowHomeareas) {
				CommonItem subItem = new CommonItem();
				subItem.setId(subHomearea.getTheId().toString());
				subItem.setName(subHomearea.getName());
				subItems.add(subItem);
			}
			rootItem.setSubItems(subItems);

			result.add(rootItem);
		}
		return result;
	}

}
