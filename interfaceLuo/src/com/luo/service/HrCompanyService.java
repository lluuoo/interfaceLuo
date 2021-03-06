package com.luo.service;

import java.math.BigInteger;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.jite.common.util.DateUtil;
import com.jite.hibgen.dao.THrCompanyDao;
import com.luo.hibgen.dao.THrJobBaseDao;
import com.luo.hibgen.model.THrJobBase;
import com.jite.hibgen.model.THrCompany;
import com.luo.struts.bean.HrCompanyInfo;
import com.luo.struts.bean.HrJobBaseInfo;
import com.luo.utils.BeanTransNew;
//import com.jite.hibgen.dao.TApproveLogsDao;
//import com.jite.hibgen.dao.THrAccountDao;
//import com.jite.hibgen.dao.THrCompanyAreasDao;
//import com.jite.hibgen.dao.THrCompanyDao;
//import com.jite.hibgen.dao.THrCompanyMediasDao;
//import com.jite.hibgen.dao.THrCompanyStartDao;
//import com.jite.hibgen.dao.THrJobRequireDao;
//import com.jite.hibgen.dao.THrResumesDao;
//import com.jite.hibgen.dao.TShowCompanyFamousDao;
//import com.jite.hibgen.dao.TShowCompanyStartDao;
//import com.jite.hibgen.dao.TUserAccountDao;
//import com.jite.hibgen.dao.TUserBizcardDao;
//import com.jite.hibgen.dao.TUserSearchlogDao;
//import com.jite.hibgen.dao.TUserViewlogDao;
//import com.jite.hibgen.model.TApproveLogs;
//import com.jite.hibgen.model.THrAccount;
//import com.jite.hibgen.model.THrCompany;
//import com.jite.hibgen.model.THrCompanyAreas;
//import com.jite.hibgen.model.THrCompanyMedias;
//import com.jite.hibgen.model.THrCompanyStart;
//import com.jite.hibgen.model.THrJobBase;
//import com.jite.hibgen.model.THrJobRequire;
//import com.jite.hibgen.model.THrResumes;
//import com.jite.hibgen.model.TShowCompanyFamous;
//import com.jite.hibgen.model.TShowCompanyStart;
//import com.jite.hibgen.model.TUserAccount;
//import com.jite.hibgen.model.TUserSearchlog;
//import com.jite.hibgen.model.TUserViewlog;
//import com.jite.struts.bean.AreaRootInfo;
//import com.jite.struts.bean.HrAccountInfo;
//import com.jite.struts.bean.HrCompanyAreasInfo;
//import com.jite.struts.bean.HrCompanyInfo;
//import com.jite.struts.bean.JobBaseInfo;
//import com.jite.struts.bean.JobInfo;
//import com.jite.struts.bean.JobSearch;
//import com.jite.struts.bean.MediaInfo;
//import com.jite.struts.bean.ShowCompanyFamousInfo;
//import com.jite.struts.bean.ShowCompanyStartInfo;
//import com.jite.struts.bean.UserInfo;
import com.jite.utils.BeanTrans;
//import com.jite.utils.Constants;
//import com.jite.utils.EnumForApproveType;
//import com.jite.utils.SystemPropties;
//import com.jite.utils.ValidateTool;

public class HrCompanyService {

	@Resource
	private THrCompanyDao hrCompanyDao;	
	private THrJobBaseDao jobBaseDao;
	
//	private THrAccountDao hrDao;
//	private THrJobRequireDao jobReqDao;
//	private THrCompanyMediasDao mediasDao;
//	private THrCompanyStartDao startDao;
//	private THrCompanyAreasDao areasDao;
//
//	private TUserBizcardDao userBizcardDao;
//	private TUserAccountDao userAccountDao;
	
	public THrCompanyDao getHrCompanyDao() {
		return hrCompanyDao;
	}

	public void setHrCompanyDao(THrCompanyDao hrCompanyDao) {
		this.hrCompanyDao = hrCompanyDao;
	}

	public THrJobBaseDao getJobBaseDao() {
		return jobBaseDao;
	}

	public void setJobBaseDao(THrJobBaseDao jobBaseDao) {
		this.jobBaseDao = jobBaseDao;
	}

	/**
	 * "热门行业"模块用到
	 * @param companyId
	 * @param pageNumber
	 * @param pageSize
	 * @return
	 */
	public HrCompanyInfo queryCompanyByIdWithJobs(String companyId,int pageNumber,int pageSize) {
		//1.根据id查询t_hr_company表中的公司信息
		THrCompany tCom=hrCompanyDao.findById(Long.valueOf(companyId));
		if(tCom!=null){
			HrCompanyInfo theReturn=BeanTransNew.getFromTCompany(tCom);
			
		//2.根据公司id查询t_hr_job_base表中company_id = 该公司id 的岗位信息
			List<THrJobBase> jobBases = (List<THrJobBase>)(jobBaseDao.searchByCriteriaByCompanyId(Long.valueOf(companyId),pageNumber, pageSize));
			List<HrJobBaseInfo> jobs = new ArrayList<HrJobBaseInfo>();
			for (THrJobBase jobBase : jobBases){
				jobs.add(BeanTransNew.getFromTHrJobBase(jobBase));
			}
			
			theReturn.setJobs(jobs);

//			JobInfo jobInfo=new JobInfo();
//			JobBaseInfo base=new JobBaseInfo();
//			base.setCompanyId(Long.valueOf(companyId));
//			jobInfo.setBase(base);
//			jobInfo.setPageNumber(pageNumber);
//			jobInfo.setPageSize(pageSize);
//			
//			List<JobInfo> jobInfoList=advanceSearch(jobInfo);
//
//			theReturn.setJobs(jobInfoList);
			
			return theReturn;
		}else{
			return null;
		}
	}	
	

//	public TUserAccountDao getUserAccountDao() {
//		return userAccountDao;
//	}
//
//	public void setUserAccountDao(TUserAccountDao userAccountDao) {
//		this.userAccountDao = userAccountDao;
//	}
//
//	public THrCompanyDao getHrCompanyDao() {
//		return hrCompanyDao;
//	}
//
//	public void setHrCompanyDao(THrCompanyDao hrCompanyDao) {
//		this.hrCompanyDao = hrCompanyDao;
//	}
//	public THrAccountDao getHrDao() {
//		return hrDao;
//	}
//
//	public void setHrDao(THrAccountDao hrDao) {
//		this.hrDao = hrDao;
//	}
//
//	public THrJobBaseDao getJobBaseDao() {
//		return jobBaseDao;
//	}
//
//	public void setJobBaseDao(THrJobBaseDao jobBaseDao) {
//		this.jobBaseDao = jobBaseDao;
//	}
//
//	public THrJobRequireDao getJobReqDao() {
//		return jobReqDao;
//	}
//
//	public void setJobReqDao(THrJobRequireDao jobReqDao) {
//		this.jobReqDao = jobReqDao;
//	}
//
//	public THrCompanyStartDao getStartDao() {
//		return startDao;
//	}
//
//	public void setStartDao(THrCompanyStartDao startDao) {
//		this.startDao = startDao;
//	}
//
//	public THrCompanyMediasDao getMediasDao() {
//		return mediasDao;
//	}
//
//	public void setMediasDao(THrCompanyMediasDao mediasDao) {
//		this.mediasDao = mediasDao;
//	}
//
//	public TApproveLogsDao getApproveDao() {
//		return approveDao;
//	}
//
//	public void setApproveDao(TApproveLogsDao approveDao) {
//		this.approveDao = approveDao;
//	}
//
//	public TUserViewlogDao getUserViewlogDao() {
//		return userViewlogDao;
//	}
//
//	public void setUserViewlogDao(TUserViewlogDao userViewlogDao) {
//		this.userViewlogDao = userViewlogDao;
//	}
//
//	public TUserSearchlogDao getUserSearchlogDao() {
//		return userSearchlogDao;
//	}
//
//	public void setUserSearchlogDao(TUserSearchlogDao userSearchlogDao) {
//		this.userSearchlogDao = userSearchlogDao;
//	}
//
//	public THrResumesDao getHrResumesDao() {
//		return hrResumesDao;
//	}
//
//	public void setHrResumesDao(THrResumesDao hrResumesDao) {
//		this.hrResumesDao = hrResumesDao;
//	}
//
//	public TUserBizcardDao getUserBizcardDao() {
//		return userBizcardDao;
//	}
//
//	public void setUserBizcardDao(TUserBizcardDao userBizcardDao) {
//		this.userBizcardDao = userBizcardDao;
//	}
//
//	public HrCompanyInfo addCompanyAccount(HrCompanyInfo company){
//		HrCompanyInfo returnCompany = new HrCompanyInfo();
//		THrCompany searchCompanyAccount=new THrCompany();
//		searchCompanyAccount.setName(company.getName());
//		List<THrCompany> resultList=hrCompanyDao.findByExample(searchCompanyAccount);
//		if(null!=resultList&&0<resultList.size()){
//			returnCompany.setCompanyId("-100");
//			return returnCompany;
//		}else{
//			THrCompany hrCompany=new THrCompany();
//			hrCompany.setName(company.getName());
//			hrCompany.setShortName(company.getShort_name());
//			hrCompany.setLogo(company.getLogo());
//			if(null!=company.getScale_type()&&!"".equals(company.getScale_type().trim())){
//				hrCompany.setScaleType(company.getScale_type());
//			}
//			if(null!=company.getType()&&!"".equals(company.getType().trim())){
//				hrCompany.setType(company.getType());
//			}
//			hrCompany.setProvince(company.getProvince());
//			hrCompany.setAddress(company.getAddress());
//			hrCompany.setHomepage(company.getHomepage());
//			hrCompany.setTelephone(company.getTelephone());
//			hrCompany.setShortDesc(company.getShort_desc());
//			hrCompany.setProvince(company.getProvince());
//			
//			hrCompanyDao.persist(hrCompany);
//
//			if(0<hrCompany.getId()){
//				returnCompany.setCompanyId(String.valueOf(hrCompany.getId()));
//				returnCompany.setName(hrCompany.getName());
//				returnCompany.setShort_name(hrCompany.getShortName());
//				returnCompany.setLogo(hrCompany.getLogo());
//				returnCompany.setScale_type(String.valueOf(hrCompany.getScaleType()));
//				returnCompany.setType(String.valueOf(hrCompany.getType()));
//				returnCompany.setProvince(hrCompany.getProvince());
//				returnCompany.setAddress(hrCompany.getAddress());
//				returnCompany.setHomepage(hrCompany.getHomepage());
//				returnCompany.setTelephone(hrCompany.getTelephone());
//				returnCompany.setShort_desc(hrCompany.getShortDesc());
//				returnCompany.setProvince(hrCompany.getProvince());
//			}
//			
//		}
//
//		return returnCompany;
//	}
//
//	public HrCompanyInfo saveCompanyAccount(HrCompanyInfo hrcompanyinfo,
//			String userId) {
//		boolean comExists=false;
//		THrCompany seaCom=new THrCompany();
//		seaCom.setName(hrcompanyinfo.getName());
//		List<THrCompany> comList=hrCompanyDao.findByExample(seaCom);
//		if(comList!=null&&comList.size()>0){
//			comExists=true;
//			seaCom=comList.get(0);//查到同名企业
//		}
//		
//		THrAccount search = new THrAccount();
//		search.setHrAccountId(Long.valueOf(userId));
//		List<THrAccount> searchResult = hrDao.findByExample(search);
//		if (searchResult != null && searchResult.size() > 0) {//帐号已有对应企业
//			THrAccount theHr = searchResult.get(0);
//			if (theHr != null) {
//				if(comExists&&theHr.getCompanyId().longValue()==seaCom.getId().longValue()){//找到的企业就是HR自己的企业
//					String preCompanyCertFile=seaCom.getCertificateFile();
//					int preStatus=seaCom.getStatus();
//					//名字无法变更
//					hrcompanyinfo.setName(seaCom.getName());
//					hrcompanyinfo.setShort_name(seaCom.getShortName());
//					//其他信息变更
//					BeanTrans.overwriteTCompanyWithInfoWithoutId(seaCom,hrcompanyinfo);
//					
//
//					if(preStatus==2){
//						if(hrcompanyinfo.getCertificateFile()!=null&&!hrcompanyinfo.getCertificateFile().equals("")){
//							if(!ValidateTool.isTwoStringEquals(preCompanyCertFile,hrcompanyinfo.getCertificateFile())){
//								TApproveLogs applyCertFileChange=new TApproveLogs();
//								applyCertFileChange.setCompanyId(seaCom.getId());
//								applyCertFileChange.setCreateDate(new Date());
//								applyCertFileChange.setCreator(theHr.getHrAccountId());
//								applyCertFileChange.setFieldFrom(preCompanyCertFile);
//								applyCertFileChange.setFieldTo(hrcompanyinfo.getCertificateFile());
//								applyCertFileChange.setStatus(0);
//								applyCertFileChange.setType(EnumForApproveType.certFile.type());
//								applyCertFileChange.setUpdateDate(new Date());
//								approveDao.persist(applyCertFileChange);
//								seaCom.setCertificateFile(hrcompanyinfo.getCertificateFile());
//							}
//						}
//					}else if(preStatus==0){//未审批的情况下下替换营业执照文件
//						if(hrcompanyinfo.getCertificateFile()!=null&&!hrcompanyinfo.getCertificateFile().equals("")){
//							if(!ValidateTool.isTwoStringEquals(preCompanyCertFile,hrcompanyinfo.getCertificateFile())){
//								TApproveLogs certChangeSearch=new TApproveLogs();
//								certChangeSearch.setCompanyId(seaCom.getId());
//								certChangeSearch.setType(EnumForApproveType.certFile.type());
//								certChangeSearch.setStatus(0);
//								List<TApproveLogs> apList=approveDao.findByExample(certChangeSearch);
//								if(null!=apList&&0<apList.size()){
//									certChangeSearch=apList.get(0);
//									certChangeSearch.setFieldTo(hrcompanyinfo.getCertificateFile());
//									certChangeSearch.setUpdateDate(new Date());
//									approveDao.updateObject(certChangeSearch);
//								}else{
//									TApproveLogs applyCertFileChange=new TApproveLogs();
//									applyCertFileChange.setCompanyId(seaCom.getId());
//									applyCertFileChange.setCreateDate(new Date());
//									applyCertFileChange.setCreator(theHr.getHrAccountId());
//									applyCertFileChange.setFieldFrom(preCompanyCertFile);
//									applyCertFileChange.setFieldTo(hrcompanyinfo.getCertificateFile());
//									applyCertFileChange.setStatus(0);
//									applyCertFileChange.setType(EnumForApproveType.certFile.type());
//									applyCertFileChange.setUpdateDate(new Date());
//									approveDao.persist(applyCertFileChange);							
//								}
//								seaCom.setCertificateFile(hrcompanyinfo.getCertificateFile());
//							}
//						}
//					}
//					
//					seaCom.setUpdateDate(new Date());
//					hrCompanyDao.updateObject(seaCom);
//					hrcompanyinfo.setCompanyId(String.valueOf(seaCom.getId()));
//				}else{//企业不同或没有找到企业
//					if(comExists){//企业已存在
//						hrcompanyinfo.setCompanyId("-100");
//						return hrcompanyinfo;						
//					}else{//企业不存在,HR对应的企业别删除了。
//						BeanTrans.overwriteTCompanyWithInfoWithoutId(seaCom,hrcompanyinfo);
//						if(seaCom.getIsStart()==null){
//							seaCom.setIsStart(0);
//						}
//						seaCom.setCreateDate(new Date());
//						seaCom.setUpdateDate(new Date());
//						hrCompanyDao.saveObject(seaCom);//保存企业
//						
//						if(hrcompanyinfo.getCertificateFile()!=null&&!hrcompanyinfo.getCertificateFile().equals("")){
//							TApproveLogs applyCertFileChange=new TApproveLogs();
//							applyCertFileChange.setCompanyId(seaCom.getId());
//							applyCertFileChange.setCreateDate(new Date());
//							applyCertFileChange.setCreator(theHr.getHrAccountId());
//							applyCertFileChange.setFieldFrom("");
//							applyCertFileChange.setFieldTo(hrcompanyinfo.getCertificateFile());
//							applyCertFileChange.setStatus(0);
//							applyCertFileChange.setType(EnumForApproveType.certFile.type());
//							applyCertFileChange.setUpdateDate(new Date());
//							approveDao.persist(applyCertFileChange);
//						}
//						
//
//						hrcompanyinfo.setCompanyId(String.valueOf(seaCom.getId()));
//						theHr.setCompanyId(seaCom.getId());
//						theHr.setApproveStatus(Constants.HR_STATUS_APPROVE);
//						theHr.setIsMain(1);
//						theHr.setUpdateDate(new Date());
//						hrDao.updateObject(theHr);
//					}
//				}
//
//			}
//		}else{
//			if(comExists){
//				hrcompanyinfo.setCompanyId("-100");
//				return hrcompanyinfo;
//			}else{
//				THrAccount addThr=new THrAccount();
//				addThr.setHrAccountId(Long.valueOf(userId));
//				addThr.setApproveStatus(Constants.HR_STATUS_APPROVE);
//				addThr.setIsMain(1);
//				addThr.setCreateDate(new Date());
//				addThr.setUpdateDate(new Date());
//				if(hrcompanyinfo.getCompanyId()!=null&&!"".equals(hrcompanyinfo.getCompanyId())){
//					addThr.setCompanyId(Long.valueOf(hrcompanyinfo.getCompanyId()));
//				}else{
//					hrcompanyinfo.setCompanyId(null);
//					THrCompany tCom=BeanTrans.getTCompanyFromInfoWithoutId(hrcompanyinfo);
//					if(tCom.getIsStart()==null){
//						tCom.setIsStart(0);
//					}
//					tCom.setCreateDate(new Date());
//					tCom.setUpdateDate(new Date());
//					hrCompanyDao.saveObject(tCom);
//					hrcompanyinfo.setCompanyId(String.valueOf(tCom.getId()));
//					addThr.setCompanyId(tCom.getId());
//				}
//				hrDao.saveObject(addThr);
//				if(hrcompanyinfo.getCertificateFile()!=null&&!hrcompanyinfo.getCertificateFile().equals("")){
//					TApproveLogs applyCertFileChange=new TApproveLogs();
//					applyCertFileChange.setCompanyId(Long.valueOf(hrcompanyinfo.getCompanyId()));
//					applyCertFileChange.setCreateDate(new Date());
//					applyCertFileChange.setCreator(addThr.getHrAccountId());
//					applyCertFileChange.setFieldFrom("");
//					applyCertFileChange.setFieldTo(hrcompanyinfo.getCertificateFile());
//					applyCertFileChange.setStatus(0);
//					applyCertFileChange.setType(EnumForApproveType.certFile.type());
//					applyCertFileChange.setUpdateDate(new Date());
//					approveDao.persist(applyCertFileChange);
//				}
//			}
//		}
//		return queryWholeHrCompanyInfo(hrcompanyinfo);
//	}
//	
//	public HrCompanyInfo saveOthers(HrCompanyInfo hrcompanyinfo,String areasName,String areasNameRoot){
//
//		THrCompany tCom = hrCompanyDao.findById(Long.valueOf(hrcompanyinfo
//				.getCompanyId()));
//		if(tCom!=null){
//			BeanTrans.overwriteTCompanyWithInfoWithoutId(tCom,hrcompanyinfo);
//			hrCompanyDao.updateObject(tCom);
//			hrcompanyinfo.setCompanyId(String.valueOf(tCom.getId()));
//			saveCompanyAreas(tCom.getId(),areasName,areasNameRoot);
//		}else{
//			tCom=new THrCompany();
//			BeanTrans.overwriteTCompanyWithInfoWithoutId(tCom,hrcompanyinfo);
//			hrCompanyDao.persist(tCom);
//			hrcompanyinfo.setCompanyId(String.valueOf(tCom.getId()));
//
//			saveCompanyAreas(tCom.getId(),areasName,areasNameRoot);
//		}
//		return queryWholeHrCompanyInfo(hrcompanyinfo);
//		
//	}
//	
//	private HrCompanyInfo queryWholeHrCompanyInfo(HrCompanyInfo hrcompanyinfo) {
//		THrCompany tCom = hrCompanyDao.findById(Long.valueOf(hrcompanyinfo
//				.getCompanyId()));
//
//		if(tCom!=null){
//			hrcompanyinfo=BeanTrans.getFromTCompany(tCom);
//			
//			List<MediaInfo> theMIlist=new ArrayList<MediaInfo>();
//			THrCompanyMedias mSear=new THrCompanyMedias();
//			mSear.setCompanyId(tCom.getId());
//			for(THrCompanyMedias inm:mediasDao.findByExample(mSear)){
//				theMIlist.add(BeanTrans.getFromTCompanyMedias(inm));
//			}
//			hrcompanyinfo.setMedias(theMIlist);
//			
//			
//			List<HrCompanyAreasInfo> areasList=new ArrayList<HrCompanyAreasInfo>();
//			THrCompanyAreas aSear=new THrCompanyAreas();
//			aSear.setCompanyId(tCom.getId());
//			for(THrCompanyAreas tca:areasDao.findByExample(aSear)){
//				areasList.add(BeanTrans.getFromTCompanyAreas(tca));
//			}
//			hrcompanyinfo.setAreas(areasList);
//		}
//		return hrcompanyinfo;
//	}	
//
//	private void saveCompanyAreas(Long theCompanyId, String areasName, String areasNameRoot) {
//		if(null!=areasName&&!"".equals(areasName.trim())){
//
//			
//			THrCompanyAreas areaSearch=new THrCompanyAreas();
//			areaSearch.setCompanyId(theCompanyId);
//			List<THrCompanyAreas> theAreas = areasDao.findByExample(areaSearch);
//			
//			if(theAreas!=null&&theAreas.size()>0){
//				THrCompanyAreas theArea =theAreas.get(0);
//				theArea.setAreaName(areasName);
//				theArea.setAreaNameRoot(areasNameRoot);
//				theArea.setCompanyId(theCompanyId);
//				theArea.setUpdateDate(new Date());
//				if(!theArea.getAreaNameRoot().equals(areasNameRoot)){
//					theArea.setRankRoot(99999);
//				}
//				areasDao.updateObject(theArea);
//			}else{
//				THrCompanyAreas theArea=new THrCompanyAreas();
//				theArea.setAreaName(areasName);
//				theArea.setAreaNameRoot(areasNameRoot);
//				theArea.setCompanyId(theCompanyId);
//				theArea.setCreateDate(new Date());
//				theArea.setUpdateDate(new Date());
//				theArea.setRankRoot(99999);
//				areasDao.persist(theArea);
//			}
//		}
//	}
//
//	public JobInfo saveHrJob(Long actUser, JobInfo jobInfo) {
//		if(jobInfo.getBase().getId()==null||0==jobInfo.getBase().getId()){//新增
//			THrJobBase tbase=BeanTrans.getTJobBaseWithoutId(jobInfo.getBase());
//			tbase.setCreater(actUser);
//			tbase.setCreateDate(new Date());
//			tbase.setUpdater(actUser);
//			tbase.setUpdateDate(new Date());
//			tbase.setId(null);
//			jobBaseDao.persist(tbase);
//
//			jobInfo.getBase().setId(tbase.getId());
//		}else{//修改
//			try{
//				THrJobBase tbase = jobBaseDao.findById(jobInfo.getBase().getId());
//				if(tbase!=null){
//					BeanTrans.overwriteTJobBaseWithInfoWithoutId(tbase, jobInfo.getBase());
//					tbase.setUpdater(actUser);
//					tbase.setUpdateDate(new Date());
//					jobBaseDao.updateObject(tbase);
//				}else{
//					jobInfo=null;
//				}
//			}catch(Exception e){
//				jobInfo=null;
//			}
//		}
//		return jobInfo;
//	}
//
//	/**
//	 * 根据企业id，查询该企业的招聘岗位集合
//	 * @param companyId    企业id
//	 * @param status       招聘状态
//	 * @param pageNumber
//	 * @param pageSize
//	 * @return
//	 */
//	public List<JobInfo> queryJobList(long companyId,String status,int pageNumber,int pageSize) {
//		THrJobBase search=new THrJobBase();
//		search.setCompanyId(companyId);
//		if(null!=status&&!status.equals(SystemPropties.getProperties("cfg.status_all"))){
//			search.setStatus(status);
//		}
//		List<THrJobBase> resultList=jobBaseDao.findByCriteria(search,pageNumber,pageSize);
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		for(THrJobBase one:resultList){
//			JobInfo job=new JobInfo();
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			
//			THrResumes resumeSearch=new THrResumes();
//			resumeSearch.setCompanyId(companyId);
//			resumeSearch.setJobId(one.getId());
//			resumeSearch.setStatus(110);
//			resumeSearch.setHrStatus(110);
//			List<THrResumes> searchResult=hrResumesDao.searchByCriteria(0, 0,resumeSearch);
//			List<UserInfo> candList=new ArrayList<UserInfo>();
//			for(THrResumes r:searchResult){			
//				UserInfo user=new UserInfo();
//				user.setBizInfo(BeanTrans.getUserBizInfoFromT(userBizcardDao.findByAccountId(r.getAccountId())));
//				user.setUserId(String.valueOf(r.getAccountId()));
//				candList.add(user);
//			}
//			job.setCands(candList);
//			returnList.add(job);
//		}
//		return returnList;
//	}
//
//	public int queryJobListTotal(long companyId,String status) {
//		THrJobBase search=new THrJobBase();
//		search.setCompanyId(companyId);
//		if(null!=status&&!status.equals(SystemPropties.getProperties("cfg.status_all"))){
//			search.setStatus(status);
//		}
//		return jobBaseDao.findByCriteriaTotal(search);
//	}
//	
//	/**
//	 * 根据岗位id查询岗位信息
//	 * @param id
//	 * @param companyId 好像没有意义，也没有使用。
//	 * @return
//	 */
//	public JobInfo queryJobById(long id, long companyId) {
//		JobInfo job=new JobInfo();
//		THrJobBase one=jobBaseDao.findById(id);
//		job.setBase(BeanTrans.getJobInfoFromT(one));
//		return job;
//	}
//
//	public JobInfo modifyStatus(long id, long companyId, String status,String userId) {
//		JobInfo job=new JobInfo();
//		THrJobBase one=jobBaseDao.findById(id);
//		
//		if(one!=null&&one.getCompanyId()==companyId){//同公司职位才可以修改
//			one.setStatus(status);
//			one.setUpdateDate(new Date());
//			one.setUpdater(Long.valueOf(userId));
//			if("3".equals(status.trim())){
//				one.setEndDate(new Date());//修改结束时间
//			}
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			jobBaseDao.updateObject(one);
//		}
//		return job;
//	}
//
//	public JobInfo refresh(long id, long companyId,String userId) {
//		JobInfo job=new JobInfo();
//		THrJobBase one=jobBaseDao.findById(id);
//		
//		if(one!=null&&one.getCompanyId()==companyId){//同公司职位才可以修改
//			one.setUpdateDate(new Date());
//			one.setUpdater(Long.valueOf(userId));
//			Date endDates = DateUtil.start2Date(DateUtil.start2Date());
//			one.setEndDate(endDates);
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			jobBaseDao.updateObject(one);
//		}
//		return job;
//	}
//
//	/**
//	 * 搜索符合jobInfo参数搜索条件的THrJobBase实体对象列表
//	 * @param jobInfo
//	 * @return
//	 */
//	public List<JobInfo> advanceSearch(JobInfo jobInfo) {
//		THrJobBase search=new THrJobBase();
//		if(null!=jobInfo.getBase().getName()&&!"".equals(jobInfo.getBase().getName())){
//			search.setName(jobInfo.getBase().getName());
//		}
//		if(null!=jobInfo.getBase().getCompanyId()&&0!=jobInfo.getBase().getCompanyId()){
//			search.setCompanyId(jobInfo.getBase().getCompanyId());
//		}		
//		if(null!=jobInfo.getBase().getCharType()&&!"".equals(jobInfo.getBase().getCharType())){
//			search.setCharType(jobInfo.getBase().getCharType());
//		}
//		if(null!=jobInfo.getBase().getWestplanFlag()){
//			search.setWestplanFlag(jobInfo.getBase().getWestplanFlag());
//		}
//		
//		List<THrJobBase> resultList=jobBaseDao.searchByCriteria(jobInfo.getPageNumber(),jobInfo.getPageSize(),search);
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		JobBaseInfo a= new JobBaseInfo();
//		
//		//将THrJobBase对象转换成JobBaseInfo对象，并作为JobInfo对象的成员
//		for(THrJobBase one:resultList){
//			JobInfo job=new JobInfo();
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			
//			returnList.add(job);
//		}
//		return returnList;
//	}
//
//	
//	/**
//	 * 搜索符合jobInfo参数搜索条件的THrJobBase实体对象的总数
//	 * @param jobInfo
//	 * @return
//	 */
//	public int advanceSearchTotalCount(JobInfo jobInfo) {
//		THrJobBase search=new THrJobBase();
//		if(null!=jobInfo.getBase().getName()&&!"".equals(jobInfo.getBase().getName())){
//			search.setName(jobInfo.getBase().getName());
//		}
//		if(null!=jobInfo.getBase().getCompanyId()&&0!=jobInfo.getBase().getCompanyId()){
//			search.setCompanyId(jobInfo.getBase().getCompanyId());
//		}		
//		if(null!=jobInfo.getBase().getCharType()&&!"".equals(jobInfo.getBase().getCharType())){
//			search.setCharType(jobInfo.getBase().getCharType());
//		}
//		if(null!=jobInfo.getBase().getWestplanFlag()){
//			search.setWestplanFlag(jobInfo.getBase().getWestplanFlag());
//		}
//		return jobBaseDao.searchByCriteriaTotal(search);
//	}
//
//	public List<HrCompanyInfo> listAllCompanies() {
//		List<HrCompanyInfo> resultList=new ArrayList<HrCompanyInfo>();
//		List<THrCompany> tac=hrCompanyDao.getAllObjects();
//		for(THrCompany com:tac){
//			resultList.add(BeanTrans.getFromTCompany(com));
//		}
//		return resultList;
//	}
//
//	/**
//	 * 用户根据职位ID查询职位详细信息
//	 * @param id
//	 * @param userId
//	 * @return
//	 */
//	public JobInfo userQueryJobById(long id, String userId) {
//		JobInfo job=new JobInfo();
//		THrJobBase one=jobBaseDao.findById(id);
//		
//		if(one!=null){
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			//THrJobRequire是用户查看职位时使用的临时实体类
//			THrJobRequire searchReq=new THrJobRequire();
//			searchReq.setJobId(one.getId());  //设置要查看职位的ID号
//			
//			//记录用户查看职位的日志
//			if(userId!=null&&!"".equals(userId.trim())){
//				//TUserViewlog是记录用户查看某职位的日志的实体类
//				TUserViewlog logSearch=new TUserViewlog();
//				logSearch.setJobId(id);
//				logSearch.setUserId(Long.valueOf(userId));
//				List<TUserViewlog> logList=userViewlogDao.findByExample(logSearch);
//				if(logList!=null&&logList.size()>0){
//					logSearch=logList.get(0);
//					logSearch.setUpdateDate(new Date());
//					userViewlogDao.updateObject(logSearch);
//				}else{
//					logSearch.setCompanyId(one.getCompanyId());
//					logSearch.setCreateDate(new Date());
//					logSearch.setUpdateDate(new Date());
//					userViewlogDao.persist(logSearch);
//				}
//			}
//		}
//		return job;
//	}
//
//	/**
//	 * 根据企业id，查询该企业的其它一些信息，如企业主管leader、企业媒体和企业行业信息
//	 * @param companyId  企业id
//	 * @return  企业页面信息
//	 */
//	public HrCompanyInfo queryCompanyById(String companyId) {
//		THrCompany tCom=hrCompanyDao.findById(Long.valueOf(companyId));
//		if(tCom!=null){
//			//产生企业页面信息实体类对象，首先导入企业信息数据
//			HrCompanyInfo theReturn=BeanTrans.getFromTCompany(tCom);
//			//根据企业id查询企业leader信息
//			THrCompanyStart tComStart=startDao.findByCompanyId(tCom.getId());
//			//HrCompanyInfo对象中加入企业leader信息
//			if(tComStart!=null){
//				theReturn.setLeader(tComStart.getLeader());
//				theReturn.setLeaderDesc(tComStart.getLeaderDesc());
//				theReturn.setLeaderPic(tComStart.getLeaderPic());
//				theReturn.setLeaderPosition(tComStart.getLeaderPosition());
//				theReturn.setMoneyFrom(tComStart.getMoneyFrom());
//			}
//			
//			//HrCompanyInfo对象中加入企业媒体页面信息
//			List<MediaInfo> theMIlist=new ArrayList<MediaInfo>();
//			THrCompanyMedias mSear=new THrCompanyMedias();
//			mSear.setCompanyId(tCom.getId());
//			for(THrCompanyMedias inm:mediasDao.findByExample(mSear)){
//				theMIlist.add(BeanTrans.getFromTCompanyMedias(inm));
//			}			
//			theReturn.setMedias(theMIlist);
//			
//			//HrCompanyInfo对象中加入企业行业信息
//			List<HrCompanyAreasInfo> areasList=new ArrayList<HrCompanyAreasInfo>();
//			THrCompanyAreas aSear=new THrCompanyAreas();
//			aSear.setCompanyId(tCom.getId());
//			for(THrCompanyAreas tca:areasDao.findByExample(aSear)){
//				areasList.add(BeanTrans.getFromTCompanyAreas(tca));
//			}
//			theReturn.setAreas(areasList);
//			
//			//最后返回HrCompanyInfo对象
//			return theReturn;
//		}else{
//			return null;
//		}
//	}
//
//	
//	public List<ShowCompanyFamousInfo> queryFamousInfo(int pageNumber,int pageSize) {
//		List<ShowCompanyFamousInfo> returnList=new ArrayList<ShowCompanyFamousInfo>();
//		TShowCompanyFamous showFamous=new TShowCompanyFamous();
//		if(pageNumber==0){
//			pageNumber=1;
//		}
//		if(pageSize==0){
//			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
//		}
//		List<TShowCompanyFamous> allt=showFamousDao.searchByCriteria(pageNumber,pageSize,showFamous);
//		for(TShowCompanyFamous thc:allt){
//			ShowCompanyFamousInfo theRankFamous=new ShowCompanyFamousInfo();
//			theRankFamous.setHrCompany(BeanTrans.getFromTCompany(hrCompanyDao.findById(thc.getCompanyId())));
//			theRankFamous.setRank(thc.getRank().toString());
//			returnList.add(theRankFamous);
//		}
//		return returnList;
//	}
//	
//	public HrCompanyInfo queryFamousById(String companyId){
//		HrCompanyInfo result=BeanTrans.getFromTCompany(hrCompanyDao.findById(Long.valueOf(companyId)));
//		return result;
//	}
//	
//	public List<ShowCompanyStartInfo> queryStartInfo(int pageNumber,int pageSize) {
//		List<ShowCompanyStartInfo> returnList=new ArrayList<ShowCompanyStartInfo>();
//		TShowCompanyStart showStart=new TShowCompanyStart();
//		if(pageNumber==0){
//			pageNumber=1;
//		}
//		if(pageSize==0){
//			pageSize=Integer.parseInt(SystemPropties.getProperties("cfg.common_page_size"));
//		}
//		List<TShowCompanyStart> allt=showStartDao.searchByCriteria(pageNumber,pageSize,showStart);
//		for(TShowCompanyStart thc:allt){
//			ShowCompanyStartInfo theRankStart=new ShowCompanyStartInfo();
//			HrCompanyInfo oneComInfo=BeanTrans.getFromTCompanyAndStart(hrCompanyDao.findById(thc.getCompanyId()),startDao.findByCompanyId(thc.getCompanyId()));
//
//			List<JobInfo> jobs=new ArrayList<JobInfo>();
//			THrJobBase searchJob=new THrJobBase();
//			searchJob.setCompanyId(thc.getCompanyId());
//			List<THrJobBase> theJTList=jobBaseDao.searchByCriteria(1, 3, searchJob);
//			for(THrJobBase oneBase:theJTList){
//				JobInfo ji=new JobInfo();
//				ji.setBase(BeanTrans.getJobInfoFromT(oneBase));
//				jobs.add(ji);
//			}
//			oneComInfo.setJobs(jobs);
//			oneComInfo.setTotalJobCount(jobBaseDao.findByExample(searchJob).size());
//			//暂时不做显示限制
//			
//			theRankStart.setHrCompany(oneComInfo);
//			theRankStart.setRank(thc.getRank().toString());
//			returnList.add(theRankStart);
//		}
//		return returnList;
//	}
//	public HrCompanyInfo queryStartById(String companyId){
//		HrCompanyInfo result=BeanTrans.getFromTCompany(hrCompanyDao.findById(Long.valueOf(companyId)));
//		return result;
//	}
//
//	public HrCompanyInfo saveCompanyMedias(HrCompanyInfo company,
//			String mediasInputJson) {
//		THrCompany theCompany=hrCompanyDao.findById(Long.valueOf(company.getCompanyId()));
//		if(theCompany==null){
//			company.setCompanyId("-200");
//		}else{
//			theCompany.setIsStart(Integer.parseInt(company.getIsStart()));
//			hrCompanyDao.updateObject(theCompany);
//			
//			THrCompanyStart startSearch=new THrCompanyStart();
//			startSearch.setCompanyId(Long.valueOf(company.getCompanyId()));
//			List<THrCompanyStart> startList=startDao.findByExample(startSearch);
//			if(null!=startList&&0<startList.size()){
//				startSearch=startList.get(0);
//				startSearch.setLeader(company.getLeader());
//				startSearch.setLeaderDesc(company.getLeaderDesc());
//				startSearch.setLeaderPosition(company.getLeaderPosition());
//				startSearch.setLeaderPic(company.getLeaderPic());
//				startSearch.setMoneyFrom(company.getMoneyFrom());
//				startSearch.setUpdateDate(new Date());
//				startDao.updateObject(startSearch);
//			}else{
//				startSearch.setLeader(company.getLeader());
//				startSearch.setLeaderDesc(company.getLeaderDesc());
//				startSearch.setLeaderPosition(company.getLeaderPosition());
//				startSearch.setLeaderPic(company.getLeaderPic());
//				startSearch.setMoneyFrom(company.getMoneyFrom());
//				startSearch.setCreateDate(new Date());				
//				startSearch.setUpdateDate(new Date());
//				startDao.persist(startSearch);
//			}
//			
//			THrCompanyMedias mSear=new THrCompanyMedias();
//			mSear.setCompanyId(theCompany.getId());
//			for(THrCompanyMedias inm:mediasDao.findByExample(mSear)){
//				mediasDao.delete(inm);
//			}
//			
//			
//			JSONArray mediasArrays=JSONArray.fromObject(mediasInputJson);
//			List<MediaInfo> miList=new ArrayList<MediaInfo>();
//			for(Object m:mediasArrays){
//				JSONObject mj = JSONObject.fromObject(m);
//				THrCompanyMedias theMt=new THrCompanyMedias();
//				theMt.setCompanyId(theCompany.getId());
//				theMt.setCreateDate(new Date());
//				theMt.setMediaDesc(mj.getString("mediaDesc"));
//				theMt.setMediaName(mj.getString("mediaName"));
//				theMt.setMediaUrl(mj.getString("mediaUrl"));
//				theMt.setUpdateDate(new Date());
//				mediasDao.persist(theMt);
//				miList.add(BeanTrans.getFromTCompanyMedias(theMt));
//			}
//			
//			company.setMedias(miList);
//		}
//		
//		return company;
//	}
//	
//	public List<MediaInfo> queryAllHotPosition() {
//		List<MediaInfo> result=new ArrayList<MediaInfo>();
//		
//		THrCompanyMedias search=new THrCompanyMedias();
//		for(THrCompanyMedias oneMedia:mediasDao.searchByCriteria(1, 4, search)){
//			MediaInfo mInfo=BeanTrans.getFromTCompanyMedias(oneMedia);
//
//			THrCompany theComT=hrCompanyDao.findById(oneMedia.getCompanyId());
//			if(theComT!=null){
//				HrCompanyInfo oneComInfo=BeanTrans.getFromTCompany(theComT);
//
//				THrJobBase searchJob=new THrJobBase();
//				searchJob.setCompanyId(theComT.getId());
//
//				oneComInfo.setTotalJobCount(jobBaseDao.findByExample(searchJob).size());
//				//暂时不做显示限制
//				mInfo.setHrcompany(oneComInfo);
//			}
//			
//			result.add(mInfo);
//		}
//		
//		return result;
//	}
//	
//
//	public THrCompanyAreasDao getAreasDao() {
//		return areasDao;
//	}
//
//	public void setAreasDao(THrCompanyAreasDao areasDao) {
//		this.areasDao = areasDao;
//	}
//
//	/**
//	 * 查询符合筛选条件企业的集合
//	 * @param areaNameRoot   行业
//	 * @param location       地区
//	 * @param keyword        企业关键字
//	 * @param pageNumber     
//	 * @param pageSize       
//	 * @param comPageNumber  页码
//	 * @param comPageSize    每页记录数
//	 * @return  存放企业信息的List
//	 */
//	public List<HrCompanyInfo> listAreaRootCompanies(String areaNameRoot,String location,String keyword,
//			int pageNumber,int pageSize,int comPageNumber,int comPageSize) {
//		List<HrCompanyInfo> resultList=new ArrayList<HrCompanyInfo>();
//		
//		if(comPageNumber==0){
//			comPageNumber=1;
//		}
//		if(comPageSize==0){
//			comPageSize=2;
//		}
//		
//		System.out.println("----调试用------在Service中------begin--------");
//		System.out.println("areaNameRoot=" + areaNameRoot);
//		System.out.println("location=" + location);
//		System.out.println("keyword=" + keyword);
//		System.out.println("----调试用------在Service中------end--------");
//		
//		//按照条件筛选获得行业名企id列表集合
//		List<BigInteger> searchList =areasDao.searchBySQL(areaNameRoot, location, keyword, comPageNumber, comPageSize);
//		
//		
//		for(BigInteger one: searchList){
//			if(one!=null){
//				//根据企业id，查询该企业的其它一些信息，如企业主管、企业媒体和企业行业信息
//				HrCompanyInfo aComInfo=queryCompanyById(one.toString());
//				
//				//
//				List<JobInfo> theJobs=queryJobList(one.longValue(),"1",pageNumber,pageSize);
//				aComInfo.setJobs(theJobs);
//				aComInfo.setTotalJobCount(queryJobListTotal(one.longValue(),"1"));
//				resultList.add(aComInfo);
//			}
//		}
//		return resultList;
//	}
//
//	/**
//	 * 根据workTypeRoot查询与数据表t_hr_job_base中work_Type_Root字段值匹配的记录
//	 * @param pageNumber
//	 * @param pageSize
//	 * @param workTypeRoot
//	 * @return
//	 */
//	public List<JobInfo> queryWorkTypeRootJobList(int pageNumber,int pageSize,String workTypeRoot) {
//		//THrJobBase为数据表t_hr_job_base的POJO类
//		THrJobBase search=new THrJobBase();
//		search.setStatus("1");    //正在招聘状态
//		
//		//根据workTypeRoot在t_hr_job_base表中查询
//		search.setWorkTypeRoot(workTypeRoot);
//		List<THrJobBase> resultList=jobBaseDao.searchByCriteria(pageNumber,pageSize,search);
//		//
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		for(THrJobBase one:resultList){
//			JobInfo job=new JobInfo();
//			
//			//把JobBaseInfo放入JobInfo中
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			
//			returnList.add(job);
//		}
//		return returnList;
//	}
//
//	/**
//	 * 根据“职业类别”统计其正在招聘的岗位数量
//	 * @param workTypeRoot 职业类别
//	 * @return 岗位数量
//	 */
//	public int queryWorkTypeRootJobListTotalCount(String workTypeRoot) {
//		THrJobBase search=new THrJobBase();
//		search.setStatus("1");  //正在招聘状态
//		search.setWorkTypeRoot(workTypeRoot);
//		
//		return jobBaseDao.searchByCriteriaTotal(search);
//	}
//
//	public List<JobInfo> queryWholeWorkTypeJobList(int pageNumber,int pageSize,String workTypeRoot,String workTypeSub,String workType) {
//		THrJobBase search=new THrJobBase();
//		search.setStatus("1");
//		search.setWorkTypeRoot(workTypeRoot);
//		search.setWorkTypeSub(workTypeSub);
//		search.setWorkType(workType);
//		List<THrJobBase> resultList=jobBaseDao.searchByCriteria(pageNumber,pageSize,search);
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		for(THrJobBase one:resultList){
//			JobInfo job=new JobInfo();
//			job.setBase(BeanTrans.getJobInfoFromT(one));
//			
//			returnList.add(job);
//		}
//		return returnList;
//	}
//
//	public int queryWholeWorkTypeJobListTotalCount(String workTypeRoot,String workTypeSub,String workType) {
//		THrJobBase search=new THrJobBase();
//		search.setStatus("1");
//		search.setWorkTypeRoot(workTypeRoot);
//		search.setWorkTypeSub(workTypeSub);
//		search.setWorkType(workType);
//		return jobBaseDao.searchByCriteriaTotal(search);
//	}
//	
//	public TShowCompanyFamousDao getShowFamousDao() {
//		return showFamousDao;
//	}
//
//	public void setShowFamousDao(TShowCompanyFamousDao showFamousDao) {
//		this.showFamousDao = showFamousDao;
//	}
//
//	public TShowCompanyStartDao getShowStartDao() {
//		return showStartDao;
//	}
//
//	public void setShowStartDao(TShowCompanyStartDao showStartDao) {
//		this.showStartDao = showStartDao;
//	}
//
//	@SuppressWarnings("unchecked")
//	public List<AreaRootInfo> queryAllAreaRootCompanies(int pageNumber,
//			int pageSize) {
//		List<AreaRootInfo> result=new ArrayList<AreaRootInfo>();
//		List<Object> theArea=areasDao.queryAllAreasRoot(pageNumber,pageSize);
//		for(Object one:theArea){
//			AreaRootInfo oneRootInfo=new AreaRootInfo();
//			oneRootInfo.setRootName(one.toString());
//			List<HrCompanyInfo> companyList=new ArrayList<HrCompanyInfo>();
//			
//
//			List<BigInteger> searchList =areasDao.searchBySQL(oneRootInfo.getRootName(), null, null, 1, 8);
//			for(BigInteger com: searchList){
//				if(com!=null){			
//					HrCompanyInfo oneComInfo=queryCompanyById(com.toString());
//					List<JobInfo> jobs=new ArrayList<JobInfo>();
//					THrJobBase searchJob=new THrJobBase();
//					searchJob.setCompanyId(com.longValue());
//					List<THrJobBase> theJTList=jobBaseDao.searchByCriteria(1, 2, searchJob);
//					for(THrJobBase oneBase:theJTList){
//						JobInfo ji=new JobInfo();
//						ji.setBase(BeanTrans.getJobInfoFromT(oneBase));
//						jobs.add(ji);
//					}
//					oneComInfo.setJobs(jobs);
//					oneComInfo.setTotalJobCount(jobBaseDao.findByExample(searchJob).size());
//					//暂时不做显示限制
//					companyList.add(oneComInfo);
//				}
//			}
//			
//			oneRootInfo.setCompanyList(companyList);
//			result.add(oneRootInfo);
//		}
//		return result;
//	}
//	
//	public int queryAllAreaRootTotal(){
//		return areasDao.queryAllAreasRootTotal();
//	}
//
//	public int queryStartInfoTotalCount() {
//		return showStartDao.findByExample(new TShowCompanyStart()).size();
//	}
//
//	public HrAccountInfo addCompanyHrAccount(HrAccountInfo hrInfo) {
//
//		return null;
//	}
//
//	public HrAccountInfo saveHrInfo(HrAccountInfo hrInfo) {
//		THrAccount theHr=hrDao.findByAccountId(hrInfo.getHrAccountId());
//		if(theHr==null||theHr.getId()==null||theHr.getId()<0){
//			theHr=new THrAccount();
//			theHr.setCreateDate(new Date());
//			theHr.setCompanyId(hrInfo.getCompanyId());
//		}
//		theHr.setHrAccountId(hrInfo.getHrAccountId());
//		theHr.setName(hrInfo.getName());
//		theHr.setSex(hrInfo.getSex());
//		theHr.setTitle(hrInfo.getTitle());
//		theHr.setPhone(hrInfo.getPhone());
//		theHr.setEmail(hrInfo.getEmail());
//		theHr.setHeadPic(hrInfo.getHeadPic());
//		theHr.setUpdateDate(new Date());
//		
//		if(theHr.getId()!=null&&theHr.getId()>0){
//			hrDao.updateObject(theHr);
//		}else{
//			hrDao.saveObject(theHr);
//		}
//		
//		hrInfo=BeanTrans.getHrInfoFromT(theHr);		
//		return hrInfo;
//	}
//
//	public int queryUserLatestViewJobListTotalCount(String userId,long id) {
//		List<Object> resultList =userViewlogDao.queryUserJobsTotal(Long.valueOf(userId),id);
//		return resultList==null?0:resultList.size();
//	}
//
//	public List<JobInfo> queryUserLatestViewJobList(int pageNumber,
//			int pageSize, String userId,long id) {
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		if(userId!=null&&!"".equals(userId.trim())){
//			List<Object> resultList =userViewlogDao.queryUserJobs(pageNumber, pageSize, Long.valueOf(userId),id);
//			for(Object one:resultList){
//				JobInfo job=new JobInfo();
//				THrJobBase theT=jobBaseDao.findById(Long.valueOf(one.toString()));
//				if(theT!=null){
//					job.setBase(BeanTrans.getJobInfoFromT(theT));
//				}
//				
//				returnList.add(job);
//			}
//		}
//		return returnList;
//		
//	}
//
//	public int listAreaRootCompaniesTotalCount(String areaNameRoot,
//			String location, String keyword) {
//		return areasDao.searchBySQLTotal(areaNameRoot, location, keyword);
//	}
//
//	/**
//	 * 根据搜索条件，搜索符合条件的职位数量
//	 * @param jobSearch
//	 * @return
//	 */
//	public int userSearchTotalCount(JobSearch jobSearch) {
//		return jobBaseDao.searchBySQLTotal(jobSearch);
//	}
//
//	/**
//	 * 根据搜索条件和用户ID，搜索符合条件的职位；每个职位的详细信息都保存到JobInfo的JobBaseInfo成员中。
//	 * 如果用户ID存在，还要记录该用户的搜索情况到日志表中。
//	 * @param jobSearch  搜索条件
//	 * @param userId   登录用户ID
//	 * @return  搜索到的职位列表
//	 */
//	public List<JobInfo> userSearch(JobSearch jobSearch,String userId) {
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		List<BigInteger> searchList =jobBaseDao.searchBySQL(jobSearch);
//		for(BigInteger baseId: searchList){
//			if(baseId!=null){			
//				JobInfo oneJobInfo=new JobInfo();
//				THrJobBase theJobBaseT=jobBaseDao.findById(baseId.longValue());
//				HrCompanyInfo oneComInfo=queryCompanyById(theJobBaseT.getCompanyId().toString());
//				oneJobInfo.setBase(BeanTrans.getJobInfoFromT(theJobBaseT));
//				oneJobInfo.setCom(oneComInfo);
//				returnList.add(oneJobInfo);
//			}
//		}
//		//是登录用户还要记录其每次搜索到日志表t_user_searchlog中，便于大数据分析。
//		if(userId!=null&&!"".equals(userId)){
//			TUserSearchlog theSearchlog=new TUserSearchlog();
//			theSearchlog.setCreateDate(new Date());
//			theSearchlog.setSearchRecord(jobSearch.toString());
//			theSearchlog.setUpdateDate(new Date());
//			theSearchlog.setUserId(Long.valueOf(userId));
//			userSearchlogDao.persist(theSearchlog);
//		}
//		return returnList;
//	}
//
//	public int queryJobListTotalCount(long companyId, String status) {
//		THrJobBase search=new THrJobBase();
//		search.setCompanyId(companyId);
//		if(null!=status&&!status.equals(SystemPropties.getProperties("cfg.status_all"))){
//			search.setStatus(status);
//		}
//		return jobBaseDao.findByCriteriaTotal(search);
//	}
//	
//	public int queryJobListTotalCount(long companyId) {
//		THrJobBase search=new THrJobBase();
//		search.setCompanyId(companyId);
//		return jobBaseDao.findByCriteriaTotal(search);
//	}
//
//	public List<HrAccountInfo> queryCompanyHrs(String companyId) {
//		List<HrAccountInfo> returnList=new ArrayList<HrAccountInfo>();
//		THrAccount search = new THrAccount();
//		search.setCompanyId(Long.valueOf(companyId));
//		List<THrAccount> searchResult = hrDao
//				.findByExample(search);
//		for(THrAccount one:searchResult){
//			returnList.add(BeanTrans.getHrInfoFromT(one));
//		}
//		return returnList;
//	}
//
//	public void addCompanyFrom(int rowNo,TUserAccount account, THrCompany com,
//			THrCompanyAreas area, THrCompanyStart start) {
//		if(com.getName()!=null&&!"".equals(com.getName().trim())){
//			TUserAccount search=new TUserAccount();
//			search.setAccount(account.getAccount());
//			List result=userAccountDao.findByExample(search);
//			
//			THrCompany comSear=new THrCompany();
//			comSear.setName(com.getName());
//			
//			List comResult=hrCompanyDao.findByExample(comSear);
//			
//			if(comResult!=null&&comResult.size()>0){
//				System.out.println(rowNo+"未处理, 已存在公司名:"+com.getName());
//			}else if(result!=null&&result.size()>0){
//				System.out.println(rowNo+"未处理, 已存在帐号为:"+account.getAccount());
//			}else{
//				account.setPassword("110120");
//				account.setIsMailVerified(1);
//				account.setCreateDate(new Date());
//				account.setUpdateDate(new Date());
//				account.setEmail(account.getAccount());
//				account.setType(2);
//				userAccountDao.saveObject(account);
//				if(account.getId()>0L){
//					com.setStatus(1);
//					com.setCreateDate(new Date());
//					com.setUpdateDate(new Date());
//					hrCompanyDao.saveObject(com);
//					if(com.getId()>0L){
//						THrAccount hr=new THrAccount();
//						hr.setCompanyId(com.getId());
//						hr.setHrAccountId(account.getId());
//						hr.setApproveStatus(1);
//						hr.setIsMain(1);
//						hr.setName("HR");
//						hr.setEmail(account.getAccount());
//						hr.setCreateDate(new Date());
//						hr.setUpdateDate(new Date());
//						hrDao.saveObject(hr);
//						
//						area.setCompanyId(com.getId());
//						area.setCreateDate(new Date());
//						area.setUpdateDate(new Date());
//						areasDao.saveObject(area);
//						
//						if(com.getIsStart()==1){
//							start.setCompanyId(com.getId());
//							start.setCreateDate(new Date());
//							start.setUpdateDate(new Date());
//							startDao.saveObject(start);
//						}
//					}
//				}
//				System.out.println(rowNo+"处理成功, 帐号为:"+account.getAccount()+",公司名称为:"+com.getName()+", isstart="+com.getIsStart()+","+start.getLeader());
//			}
//		}else{
//			System.out.println(rowNo +"行未处理,因为公司全称是空");
//			
//		}
//		
//	}
//
//	public void generateShowCompany() {
//		
//		THrCompanyStart search=new THrCompanyStart();
//		search.setCompanyId(500L);
//		List<THrCompanyStart> result=startDao.searchByCriteria(1, 100, search);
//		int theSeq=1;
//		for(THrCompanyStart oneStar:result){
//			TShowCompanyStart oneShow=new TShowCompanyStart();
//			oneShow.setCompanyId(oneStar.getCompanyId());
//			oneShow.setRank(theSeq);
//			oneShow.setCreateDate(new Date());
//			oneShow.setUpdateDate(new Date());
//			showStartDao.saveObject(oneShow);
//			theSeq++;
//		}
//		
//	}
//
//	public void matchComImg(String[] filelist) {
//		for(String imgName:filelist){
//			String imgComName = imgName.substring(0,imgName.indexOf("."));
//			String searchName ="";
//			if(imgComName.indexOf("深圳市")==0){
//				searchName=imgName.substring(imgComName.indexOf("深圳市")+3,imgComName.indexOf("深圳市")+5);
//			}else if(imgComName.indexOf("深圳")==0){
//				searchName=imgName.substring(imgComName.indexOf("深圳")+2,imgComName.indexOf("深圳")+4);
//			}else if(imgComName.indexOf("中国")==0){
//					searchName=imgName.substring(imgComName.indexOf("中国")+2,imgComName.indexOf("中国")+4);
//			}else{
//				searchName=imgName.substring(0,2);
//			}
//
//			List<THrCompany> resultList=hrCompanyDao.findByName(imgComName);
//			if(resultList!=null&&resultList.size()>0){
//				for(THrCompany theCom:resultList){
//					if(theCom.getLogo()==null||theCom.getLogo().equals("")){
//						theCom.setLogo("/uploadIcon/"+imgName);
//						hrCompanyDao.updateObject(theCom);
//					}
//				}
//			}else{
//				System.out.println("未找到"+imgName+"对应的公司名--"+imgComName);
//			}
//		}
//	}
//
//	public List<HrCompanyInfo> queryOneAreaRootCompanies(String areaRootName,int pageNumber,
//			int pageSize) {
//
//		List<HrCompanyInfo> companyList=new ArrayList<HrCompanyInfo>();
//			
//
//		List<BigInteger> searchList =areasDao.searchBySQL(areaRootName, null, null, pageNumber, pageSize);
//		for(BigInteger com: searchList){
//			if(com!=null){			
//				HrCompanyInfo oneComInfo=queryCompanyById(com.toString());
//				List<JobInfo> jobs=new ArrayList<JobInfo>();
//				THrJobBase searchJob=new THrJobBase();
//				searchJob.setCompanyId(com.longValue());
//				searchJob.setStatus("1");//查询证在招聘
//				List<THrJobBase> theJTList=jobBaseDao.searchByCriteria(1, 2, searchJob);
//				for(THrJobBase oneBase:theJTList){
//					JobInfo ji=new JobInfo();
//					ji.setBase(BeanTrans.getJobInfoFromT(oneBase));
//					jobs.add(ji);
//				}
//				oneComInfo.setJobs(jobs);
//				oneComInfo.setTotalJobCount(jobBaseDao.findByExample(searchJob).size());
//				//暂时不做显示限制
//				companyList.add(oneComInfo);
//			}
//		}
//
//		return companyList;
//	}
//
//	public int queryOneAreaRootCompaniesTotal(String areaRootName) {
//		// TODO 似乎用不着这个总数
//		return 0;
//	}
//
//	public List<JobInfo> queryTopVisitJobList(int pageNumber, int pageSize) {
//		List<JobInfo> returnList=new ArrayList<JobInfo>();
//		List<BigInteger> searchList =userViewlogDao.searcyTopBySQL(pageNumber,pageSize);
//		for(BigInteger baseId: searchList){
//			if(baseId!=null){			
//				JobInfo oneJobInfo=new JobInfo();
//				THrJobBase theJobBaseT=jobBaseDao.findById(baseId.longValue());
//				if(theJobBaseT!=null){
//					HrCompanyInfo oneComInfo=queryCompanyById(theJobBaseT.getCompanyId().toString());
//					oneJobInfo.setBase(BeanTrans.getJobInfoFromT(theJobBaseT));
//					oneJobInfo.setCom(oneComInfo);
//					returnList.add(oneJobInfo);					
//				}
//			}
//		}
//		
//		return returnList;
//	}
//
//	public int queryTopVisitJobListTotalCount() {
//		return userViewlogDao.searcyTopTotalCountBySQL();
//	}
//	
}
