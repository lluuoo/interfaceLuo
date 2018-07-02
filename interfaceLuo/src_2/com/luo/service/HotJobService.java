package com.luo.service;

import java.util.ArrayList;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import javax.annotation.Resource;

import com.luo.hibgen.dao.HomeworktypesDao;
import com.luo.hibgen.dao.HrJobBaseDao;
import com.luo.hibgen.model.THrJobBase;
import com.luo.hibgen.model.TShowHomeworktypes;
import com.luo.struts.bean.HrJobBaseInfo;
import com.luo.struts.bean.TopWorkTypeInfo;
import com.luo.utils.BeanTransNew;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class HotJobService {
	private static final Log log = LogFactory.getLog(HotJobService.class);
	
	//Spring注入HomeworktypesDao,方法如下：
	// 1）HotJobService类中定义Dao的Getter/Setter方法;
	// 2）Application.xml配置文件中加入Service和DAO类的配置信息。
	@Resource
	private HomeworktypesDao homeworktypesDao;
	private HrJobBaseDao myHrJobBaseDao;

	public HomeworktypesDao getHomeworktypesDao() {
		return homeworktypesDao;
	}

	public void setHomeworktypesDao(HomeworktypesDao homeworktypesDao) {
		this.homeworktypesDao = homeworktypesDao;
	}
	
	public HrJobBaseDao getMyHrJobBaseDao() {
		return myHrJobBaseDao;
	}

	public void setMyHrJobBaseDao(HrJobBaseDao myHrJobBaseDao) {
		this.myHrJobBaseDao = myHrJobBaseDao;
	}

	/**
	 * 步骤一：查询第一级“职业类别”的信息。
	 * 定义“查询t_show_homeworktypes表”业务的service方法queryTopWorkTypes()
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	public List<TopWorkTypeInfo> queryTopWorkTypes(int pageNo, int pageSize) {
		// 使用homeworktypesDao对象进行数据查询；
		List<TopWorkTypeInfo> returnList = new ArrayList<TopWorkTypeInfo>();
		List<TShowHomeworktypes> allTwt = homeworktypesDao.searchByCriteria(pageNo, pageSize);

		// 将数据查询的结果转换成页面数据结果，并返回。
		for (TShowHomeworktypes toa : allTwt) {
			returnList.add(BeanTransNew.getFromTShowHomeworktypes(toa));
		}
		return returnList;
	}
	
	/**
	 * 步骤二：查询t_hr_job_base表中work_type_root字段=worktyperoot，status=1的记录数量
	 * @param worktyperoot
	 * @return
	 */
	public int queryWorkTypeJobCount(String workTypeRoot){
		return myHrJobBaseDao.searchByCriteriaJobCount(workTypeRoot);
	}
	
	/**
	 * 步骤三：根据fatherId查询第2级职业类别信息 因为前面已经将第一级的职业类别取TopWorkTypeInfo这个类名了，
	 * 其实其它类别也一样的结构，没必要改，就不改类名了。
	 * 
	 * @param fatherId 第1级职业类别ID
	 * @return 第2级职业类别信息集合
	 */
	public List<TopWorkTypeInfo> queryJobsByFatherid(int pageNo, int pageSize, Long fatherId) {
		List<TopWorkTypeInfo> list = new ArrayList<TopWorkTypeInfo>();

		//在t_show_homeworktypes表中查询fatherId的记录
		List<TShowHomeworktypes> worktypes = homeworktypesDao.queryCriteriaByFatherid(pageNo, pageSize, fatherId);
		
		// 循环遍历worktypes,获取每个职位的详细信息，每一个职位再加入一个工作岗位信息（在t_hr_job_base表中查询获取）。
		for (TShowHomeworktypes worktype : worktypes) {
			//在t_hr_job_base表中查询id字段 = t_show_homeworktypes表中the_id字段 的数据。
			THrJobBase jobBase = myHrJobBaseDao.getByid(worktype.getTheId());
			if (jobBase == null) {
				log.debug("get failure, no jobInfo found");
			} else {
				log.debug("get successful, jobInfo found");
			}
			
			//jobBase转变为jobBaseInfo页面实体类对象，得到job LocationDist和salaryRange
			HrJobBaseInfo jobInfo = BeanTransNew.getFromTHrJobBase(jobBase);
//			jobBase.setLocationDist(BeanTransNew.getLocationDist(jobBase.getLocation()));
//			jobBase.setSalaryRange(BeanTransNew.calculateYearSalary(jobBase));			
			
			TopWorkTypeInfo worktypeinfo = BeanTransNew.getFromTShowHomeworktypes(worktype);
			worktypeinfo.setJobInfo(jobInfo);
			
			list.add(worktypeinfo);
		}
		
		return list;
	}
	
	/**
	 * 步骤三：根据Id查询职业信息
	 * @param id 职位id
	 * @return  job详细信息          
	 */
	public THrJobBase queryById(Long id) {
		THrJobBase job = myHrJobBaseDao.getByid(id);

		if (job == null) {
			log.debug("get failure, no job found");
		} else {
			log.debug("get successful, job found");
		}

		return job;
	}
}
