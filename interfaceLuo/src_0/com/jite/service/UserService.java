package com.jite.service;

import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import com.jite.utils.ValidateTool;
import com.jite.common.util.DateUtil;
import com.jite.utils.Constants;
import com.jite.utils.BeanTrans;
import java.util.ArrayList;
import java.math.BigInteger;
import java.util.Calendar;
import java.util.GregorianCalendar;

import com.jite.hibgen.dao.TAgentAccountDao;
import com.jite.hibgen.dao.TAgentAccountUserDao;
import com.jite.hibgen.dao.TUserAccountDao;
import com.jite.hibgen.dao.TUserBizcardDao;
import com.jite.hibgen.dao.TUserProfileIntendsDao;
import com.jite.hibgen.dao.THrAccountDao;
import com.jite.hibgen.dao.THrCompanyDao;

import com.jite.hibgen.model.TUserAccount;
import com.jite.hibgen.model.TAgentAccount;
import com.jite.hibgen.model.TUserBizcard;
import com.jite.hibgen.model.TAgentAccountUser;
import com.jite.hibgen.model.TUserProfileIntends;
import com.jite.hibgen.model.THrCompany;
import com.jite.hibgen.model.THrAccount;
import com.jite.hibgen.model.THrCompanyAreas;
import com.jite.hibgen.model.THrCompanyMedias;
import com.jite.hibgen.model.THrCompanyStart;
import com.jite.hibgen.model.TUserLoginlog;

import com.jite.struts.bean.HrCompanyInfo;
import com.jite.struts.bean.UserInfo;
import com.jite.struts.bean.BizInfo;
import com.jite.struts.bean.MediaInfo;
import com.jite.struts.bean.HrCompanyAreasInfo;
import com.jite.struts.bean.CommonInfo;
import com.jite.struts.bean.CommonItem;

import com.jite.hibgen.dao.THrCompanyAreasDao;
import com.jite.hibgen.dao.THrCompanyMediasDao;
import com.jite.hibgen.dao.THrCompanyStartDao;
import com.jite.hibgen.dao.TUserLoginlogDao;

/**
 * 下面的import中，注释的都是原代码先有的 *
 */
// import com.jite.hibgen.dao.THrSearchlogDao;
// import com.jite.hibgen.dao.THrViewuserlogDao;
// import com.jite.hibgen.dao.TRedPkgPwdDao;
// import com.jite.hibgen.dao.TShowCooperativeUnitDao;
// import com.jite.hibgen.dao.TSystemSmslogDao;
// import com.jite.hibgen.dao.THrJobBaseDao;
// import com.jite.hibgen.dao.TUserProfileBasicDao;
// import com.jite.hibgen.dao.TUserProfileEducationDao;
// import com.jite.hibgen.dao.TUserProfileExperienceDao;
// import com.jite.hibgen.dao.TUserProfileAwardDao;
// import com.jite.hibgen.dao.TUserProfileLanguagesDao;
// import com.jite.hibgen.dao.TUserProfileCertificateDao;
// import com.jite.hibgen.dao.TUserProfileSkillDao;
// import com.jite.hibgen.dao.THrResumesDao;
// import com.jite.hibgen.model.THrSearchlog;
// import com.jite.hibgen.model.THrViewuserlog;
// import com.jite.hibgen.model.TRedPkgPwd;
// import com.jite.hibgen.model.TSystemSmslog;
// import com.jite.hibgen.model.THrJobBase;
// import com.jite.hibgen.model.TUserProfileBasic;
// import com.jite.hibgen.model.TUserProfileEducation;
// import com.jite.hibgen.model.TUserProfileExperience;
// import com.jite.hibgen.model.TUserProfileAward;
// import com.jite.hibgen.model.TUserProfileLanguages;
// import com.jite.hibgen.model.TUserProfileCertificate;
// import com.jite.hibgen.model.TUserProfileSkill;
// import com.jite.hibgen.model.TShowCooperativeUnit;
// import com.jite.hibgen.model.THrResumes;
// import com.jite.struts.bean.ProfileInfo;
// import com.jite.struts.bean.ProfileSearch;
// import com.jite.struts.bean.RedpkgInfo;
// import com.jite.struts.bean.JobBaseInfo;
// import com.jite.struts.bean.UserProfileBasicInfo;
// import com.jite.struts.bean.ShowCooperativeUnitInfo;
// import com.jite.utils.SystemPropties;
// import com.jite.utils.VerificationCodeUtil;

public class UserService {

	@Resource
	private TUserAccountDao userAccountDao;
	private TAgentAccountDao agentAccountDao;
	private TUserBizcardDao userBizcardDao;
	private TAgentAccountUserDao agentAccountUserDao;
	private TUserProfileIntendsDao intentDao;
	private THrAccountDao hrDao;
	private THrCompanyDao hrCompanyDao;
	private THrCompanyAreasDao areasDao;
	private THrCompanyMediasDao mediasDao;
	private THrCompanyStartDao startDao;
	private TUserLoginlogDao userLoginlogDao;

	
	// private TUserProfileBasicDao userProfileBasicDao;
	// private TUserProfileEducationDao userProfileEducationDao;
	// private TUserProfileExperienceDao userProfileExperienceDao;
	// private TUserProfileAwardDao userProfileAwardDao;
	// private TUserProfileLanguagesDao userProfileLanguagesDao;
	// private TUserProfileCertificateDao userProfileCertificateDao;
	// private TUserProfileSkillDao userProfileSkillDao;
	// private THrJobBaseDao hrJobBaseDao;
	// private THrSearchlogDao hrSearchDao;
	// private THrViewuserlogDao hrViewDao;
	// private TRedPkgPwdDao redPkgPwdDao;
	// private THrResumesDao resumesDao;
	// //显示合作单位的DAO
	// private TShowCooperativeUnitDao showCooperativeUnitDao;
	// private TSystemSmslogDao smsDao;


	public TUserAccountDao getUserAccountDao() {
		return userAccountDao;
	}

	public void setUserAccountDao(TUserAccountDao userAccountDao) {
		this.userAccountDao = userAccountDao;
	}

	public TAgentAccountDao getAgentAccountDao() {
		return agentAccountDao;
	}

	public void setAgentAccountDao(TAgentAccountDao agentAccountDao) {
		this.agentAccountDao = agentAccountDao;
	}

	public TUserBizcardDao getUserBizcardDao() {
		return userBizcardDao;
	}

	public void setUserBizcardDao(TUserBizcardDao userBizcardDao) {
		this.userBizcardDao = userBizcardDao;
	}

	public TAgentAccountUserDao getAgentAccountUserDao() {
		return agentAccountUserDao;
	}

	public void setAgentAccountUserDao(TAgentAccountUserDao agentAccountUserDao) {
		this.agentAccountUserDao = agentAccountUserDao;
	}

	public TUserProfileIntendsDao getIntentDao() {
		return intentDao;
	}

	public void setIntentDao(TUserProfileIntendsDao intentDao) {
		this.intentDao = intentDao;
	}

	public THrAccountDao getHrDao() {
		return hrDao;
	}

	public void setHrDao(THrAccountDao hrDao) {
		this.hrDao = hrDao;
	}

	public THrCompanyDao getHrCompanyDao() {
		return hrCompanyDao;
	}

	public void setHrCompanyDao(THrCompanyDao hrCompanyDao) {
		this.hrCompanyDao = hrCompanyDao;
	}

	public THrCompanyAreasDao getAreasDao() {
		return areasDao;
	}

	public void setAreasDao(THrCompanyAreasDao areasDao) {
		this.areasDao = areasDao;
	}

	public THrCompanyMediasDao getMediasDao() {
		return mediasDao;
	}

	public void setMediasDao(THrCompanyMediasDao mediasDao) {
		this.mediasDao = mediasDao;
	}

	public THrCompanyStartDao getStartDao() {
		return startDao;
	}

	public void setStartDao(THrCompanyStartDao startDao) {
		this.startDao = startDao;
	}
	
	public TUserLoginlogDao getUserLoginlogDao() {
		return userLoginlogDao;
	}

	public void setUserLoginlogDao(TUserLoginlogDao userLoginlogDao) {
		this.userLoginlogDao = userLoginlogDao;
	}

	/**
	 * 添加新用户，使用t_user_account表和t_user-bizcard表，还有代理人邀请用户表t_agent_account_user
	 * 
	 * @param username
	 * @param password
	 * @param type
	 * @param agentAccount
	 * @param invitecode
	 * @param operater
	 * @return
	 */
	public UserInfo addUserAccount(String username, String password, int type, String agentAccount, String invitecode,
			int operater) {
		UserInfo returnUser = new UserInfo();

		// 1）保存新注册用户信息至t_user_account表。 TUserAccount是用户账号POJO实体类。
		TUserAccount searchUserAccount = new TUserAccount();
		searchUserAccount.setAccount(username);
		// 根据账号在用户表中查询该用户
		List<TUserAccount> resultList = userAccountDao.findByExample(searchUserAccount);

		// 先判断该用户是否已经存在
		if (null != resultList && 0 < resultList.size()) {
			returnUser.setUserId("-100"); // userId=“-100”表示用户已经存在
			returnUser.setType(resultList.get(0).getType().toString());
			return returnUser;
		} else { // 是新用户，则保存用户信息至t_user_account表
			TUserAccount userAccount = new TUserAccount();
			userAccount.setAccount(username);
			userAccount.setPassword(password);
			userAccount.setType(type);
			userAccount.setCreateDate(new Date());
			userAccount.setUpdateDate(new Date());
			userAccount.setLastlogin(new Date());
			userAccount.setIsMailVerified(0);
			userAccount.setIsPhoneVerified(0);
			userAccount.setStatus(1); // 默认开放简历
			userAccountDao.saveObject(userAccount);

			// 2）同时，保存用户信息（UserBizcard）至t_user_bizcard用户简历表
			if (0 < userAccount.getId()) { // 账号id怎么会<0呢?
											// 因为如果是已注册存在的用户，前面已经设置其id为-100
				returnUser.setType(String.valueOf(type));
				returnUser.setUserId(String.valueOf(userAccount.getId()));
				returnUser.setUsername(username);
				if (ValidateTool.isMobile(username)) { // 判断是否正确手机号码
					returnUser.setPhoneNumber(username);
				}
				if (ValidateTool.isEmail(username)) { // 判断是否正确邮箱
					returnUser.setEmail(username);
				}

				// 保存用户信息至用户简历表。UserBizcard是用户简历实体类，t_user_bizcard表
				TUserBizcard userBizcard = new TUserBizcard();
				userBizcard.setAccountId(userAccount.getId());
				userBizcard.setCreateDate(new Date());
				userBizcardDao.saveObject(userBizcard);

				// 3）如果新注册用户的ID号已经出现在代理人账户用户表的reg_user_id字段中，则
				// 更新代理人账户邀请用户表t_agent_account_user的该记录（注册用户及邀请码、时间信息）
				// 疑问：这种情况怎么会出现？感觉不可能呀！
				if (type == 1 || type == 3) { // 如果是求职者或志愿者（即，不是企业HR用户）
					TAgentAccountUser taau = new TAgentAccountUser();
					// 查询代理人用户表RegUserId字段=userAccount.getId()的记录
					taau.setRegUserId(userAccount.getId());
					List<TAgentAccountUser> theList = agentAccountUserDao.findByExample(taau);
					// 能有结果，说明t_agent_account_user表中已经存在 reg_user_id=新注册用户ID
					// 的这样的记录。（这种情况可能性较低，因用户原先是不存在的）
					if (theList != null && theList.size() > 0) {
						taau = theList.get(0); // 取第一个找到的t_agent_account_user表记录
					}
					taau.setAgentAccount(agentAccount); // 更新代理人账户，客户端没有参数传递过来
					if (invitecode != null) {
						taau.setInviteCode(invitecode.toUpperCase()); // 邀请码改为全部大写保存
					}
					if (taau.getCreateDate() == null) {
						taau.setCreateDate(new Date());
					}
					taau.setUpdateDate(new Date());
					taau.setOperater(String.valueOf(operater));

					// 设好agentAccount，invitecode，CreateDate，operater之后，将其写回数据表中，即修改t_agent_account_user表
					agentAccountUserDao.merge(taau);

				}

			}

		}

		return returnUser;
	}

	/**
	 * 添加用户简历（名片）
	 * 
	 * @param accountId
	 * @param username
	 * @param birthday
	 * @param sex
	 * @param schoolName
	 * @param schoolNameRoot
	 * @param degree
	 * @param curcarrier
	 * @param volunteerNumber
	 * @param major
	 * @param majorRoot
	 * @param majorSub
	 * @param phoneNumber
	 * @param emailAddress
	 * @param intentArea
	 * @param intentAreaRoot
	 * @param intentWork
	 * @param intentWorkRoot
	 * @param intentWorkSub
	 * @return
	 */
	public BizInfo addUserBizcard(Long accountId, String username, String birthday, int sex, String schoolName,
			String schoolNameRoot, String degree, String curcarrier, String volunteerNumber, String major,
			String majorRoot, String majorSub, String phoneNumber, String emailAddress, String intentArea,
			String intentAreaRoot, String intentWork, String intentWorkRoot, String intentWorkSub) {
		BizInfo returnBean = new BizInfo();
		Date birthdays = DateUtil.start2Date(birthday, "yyyy");

		TUserAccount accountBean = userAccountDao.findById(accountId);// accountId是否存在TUserAccount表内

		if (null != accountBean) {

			TUserBizcard searchBean = new TUserBizcard();
			searchBean.setAccountId(accountId);
			List<TUserBizcard> bizList = userBizcardDao.findByExample(searchBean);
			TUserBizcard userBizcard;
			if (null != bizList && 0 < bizList.size()) {// 修改
				userBizcard = bizList.get(0);
				userBizcard.setAccountId(accountId);
				userBizcard.setRealName(username);
				userBizcard.setBirthday(birthdays);
				userBizcard.setSex(sex);
				userBizcard.setSchoolName(schoolName);
				userBizcard.setSchoolNameRoot(schoolNameRoot);
				userBizcard.setDegree(degree);
				userBizcard.setCurcarrier(curcarrier);
				userBizcard.setVolunteerNumber(volunteerNumber);
				userBizcard.setMajor(major);
				userBizcard.setMajorRoot(majorRoot);
				userBizcard.setMajorSub(majorSub);
				userBizcard.setPhoneNumber(phoneNumber);
				userBizcard.setEmailAddress(emailAddress);
				userBizcard.setUpdateDate(new Date());
				userBizcardDao.updateObject(userBizcard);

				TUserAccount tua = userAccountDao.findById(accountId);
				if (tua != null) {// 增加修改手机号码需要重新验证
					if (phoneNumber != null && !phoneNumber.equals(tua.getPhone())) {
						tua.setPhone(phoneNumber);
						tua.setIsPhoneVerified(0);
						returnBean.setIsPhoneVerified(0);
					}
					if (emailAddress != null && !emailAddress.equals(tua.getEmail())) {
						tua.setEmail(emailAddress);
						tua.setIsMailVerified(0);
						returnBean.setIsMailVerified(0);
					}
					userAccountDao.updateObject(tua);
				}

				if (0 < userBizcard.getId()) {
					returnBean.setAccountId(accountId);
					returnBean.setUserId(String.valueOf(userBizcard.getId()));
					returnBean.setUsername(username);
					returnBean.setBirthday(birthday);
					returnBean.setSex(sex);
					returnBean.setVolunteerNumber(volunteerNumber);
					returnBean.setSchoolName(schoolName);
					returnBean.setSchoolNameRoot(schoolNameRoot);
					returnBean.setDegree(degree);
					returnBean.setCurcarrier(curcarrier);
					returnBean.setMajor(major);
					returnBean.setMajorRoot(majorRoot);
					returnBean.setMajorSub(majorSub);
					returnBean.setPhoneNumber(phoneNumber);
					returnBean.setEmailAddress(emailAddress);
					returnBean.setIntentArea(intentArea);
					returnBean.setIntentAreaRoot(intentAreaRoot);
					returnBean.setIntentWork(intentWork);
					returnBean.setIntentWorkRoot(intentWorkRoot);
					returnBean.setIntentWorkSub(intentWorkSub);
					saveUserIntents(returnBean);
				}

			} else {// 新增
				userBizcard = new TUserBizcard();
				userBizcard.setAccountId(accountId);
				userBizcard.setRealName(username);
				userBizcard.setBirthday(birthdays);
				userBizcard.setSex(sex);
				userBizcard.setSchoolName(schoolName);
				userBizcard.setSchoolNameRoot(schoolNameRoot);
				userBizcard.setDegree(degree);
				userBizcard.setCurcarrier(curcarrier);
				userBizcard.setVolunteerNumber(volunteerNumber);
				userBizcard.setMajor(major);
				userBizcard.setMajorRoot(majorRoot);
				userBizcard.setMajorSub(majorSub);
				userBizcard.setPhoneNumber(phoneNumber);
				userBizcard.setEmailAddress(emailAddress);
				userBizcard.setCreateDate(new Date());
				userBizcard.setUpdateDate(new Date());
				userBizcardDao.saveObject(userBizcard);

				if (0 < userBizcard.getId()) {
					returnBean.setAccountId(accountId);
					returnBean.setUserId(String.valueOf(userBizcard.getId()));
					returnBean.setUsername(username);
					returnBean.setBirthday(birthday);
					returnBean.setSex(sex);
					returnBean.setSchoolName(schoolName);
					returnBean.setSchoolNameRoot(schoolNameRoot);
					returnBean.setDegree(degree);
					returnBean.setCurcarrier(curcarrier);
					returnBean.setVolunteerNumber(volunteerNumber);
					returnBean.setMajor(major);
					returnBean.setMajorRoot(majorRoot);
					returnBean.setMajorSub(majorSub);
					returnBean.setPhoneNumber(phoneNumber);
					returnBean.setEmailAddress(emailAddress);
					returnBean.setIntentArea(intentArea);
					returnBean.setIntentAreaRoot(intentAreaRoot);
					returnBean.setIntentWork(intentWork);
					returnBean.setIntentWorkRoot(intentWorkRoot);
					returnBean.setIntentWorkSub(intentWorkSub);
					saveUserIntents(returnBean);
				}
			}
		} else {
			returnBean.setUserId("-100");
			return returnBean;
		}

		return returnBean;
	}

	/**
	 * 保存用户就业意向？
	 * 
	 * @param returnBean
	 */
	private void saveUserIntents(BizInfo returnBean) {
		if (null != returnBean.getIntentLocation() && !"".equals(returnBean.getIntentLocation().trim())) {
			// 有就业工作地点意向的情况
			intentDao.deleteByAccountId(returnBean.getAccountId());
		} else {
			// 没有就业工作地点意向的情况
			intentDao.deleteByAccountIdWithoutLocation(returnBean.getAccountId());
		}

		if (null != returnBean.getIntentArea() && !"".equals(returnBean.getIntentArea().trim())) {
			String[] areas = returnBean.getIntentArea().split(Constants.ITEM_STR_SEPERATER_SPACE);
			String[] areasRoot = returnBean.getIntentAreaRoot().split(Constants.ITEM_STR_SEPERATER_SPACE);
			for (int i = 0; i < areas.length; i++) {
				TUserProfileIntends oneAreaAdd = new TUserProfileIntends();
				oneAreaAdd.setCommonName(areas[i]);
				oneAreaAdd.setCommonNameRoot(areasRoot[i]);
				oneAreaAdd.setType(Constants.INTENT_TYPE_AREA);
				oneAreaAdd.setUserId(returnBean.getAccountId());
				oneAreaAdd.setCreateDate(new Date());
				oneAreaAdd.setUpdateDate(new Date());
				intentDao.persist(oneAreaAdd);
			}
		}

		if (null != returnBean.getIntentWork() && !"".equals(returnBean.getIntentWork().trim())) {
			String[] works = returnBean.getIntentWork().split(Constants.ITEM_STR_SEPERATER_SPACE);
			String[] worksRoot = returnBean.getIntentWorkRoot().split(Constants.ITEM_STR_SEPERATER_SPACE);
			String[] worksSub = returnBean.getIntentWorkSub().split(Constants.ITEM_STR_SEPERATER_SPACE);
			for (int i = 0; i < works.length; i++) {
				TUserProfileIntends oneWorkAdd = new TUserProfileIntends();
				oneWorkAdd.setCommonName(works[i]);
				oneWorkAdd.setCommonNameRoot(worksRoot[i]);
				oneWorkAdd.setCommonNameSub(worksSub[i]);
				oneWorkAdd.setType(Constants.INTENT_TYPE_WORK);
				oneWorkAdd.setUserId(returnBean.getAccountId());
				oneWorkAdd.setCreateDate(new Date());
				oneWorkAdd.setUpdateDate(new Date());
				intentDao.persist(oneWorkAdd);
			}
		}

		if (null != returnBean.getIntentLocation() && !"".equals(returnBean.getIntentLocation().trim())) {
			String[] locations = returnBean.getIntentLocation().split(Constants.ITEM_STR_SEPERATER_SPACE);
			String[] locationsRoot = returnBean.getIntentLocationRoot().split(Constants.ITEM_STR_SEPERATER_SPACE);
			String[] locationsSub = returnBean.getIntentLocationSub().split(Constants.ITEM_STR_SEPERATER_SPACE);
			for (int i = 0; i < locations.length; i++) {
				TUserProfileIntends oneLocationAdd = new TUserProfileIntends();
				oneLocationAdd.setCommonName(locations[i]);
				oneLocationAdd.setCommonNameRoot(locationsRoot[i]);
				oneLocationAdd.setCommonNameSub(locationsSub[i]);
				oneLocationAdd.setType(Constants.INTENT_TYPE_LOCATION);
				oneLocationAdd.setUserId(returnBean.getAccountId());
				oneLocationAdd.setCreateDate(new Date());
				oneLocationAdd.setUpdateDate(new Date());
				intentDao.persist(oneLocationAdd);
			}
		}

	}

	@SuppressWarnings("deprecation")
	/**
	 * 用户登录密码验证
	 * 
	 * @param username
	 * @param password
	 * @param type
	 * @return
	 */
	public UserInfo checkUserAccount(String username, String password, int type) {
		TUserAccount userAccount = new TUserAccount();
		userAccount.setAccount(username);
		// 根据账户条件信息搜索用户账户
		List<TUserAccount> resultList = userAccountDao.findByExample(userAccount);
		UserInfo returnUser = new UserInfo();

		// 搜索有结果
		if (null != resultList && 0 < resultList.size()) {
			for (TUserAccount t : resultList) {
				if (t.getAccount().equalsIgnoreCase(username) && t.getPassword().equals(password)
						&& t.getType() == type) {
					// 将登录用户信息补齐全
					returnUser.setType(String.valueOf(t.getType()));
					returnUser.setUserId(String.valueOf(t.getId()));
					returnUser.setUsername(t.getAccount());
					returnUser.setIsMailVerified(t.getIsMailVerified());
					returnUser.setIsPhoneVerified(t.getIsPhoneVerified());
					returnUser.setStatus(t.getStatus());
					returnUser.setPhoneNumber(t.getPhone());
					returnUser.setEmail(t.getEmail());

					// 如果是HR类型用户，还要保存一些其它信息（公司信息，公司leader、公司媒体、公司行业信息）
					if (t.getType().equals(Constants.ACCOUNT_TYPE_HR)) {
						THrAccount search = new THrAccount();
						search.setHrAccountId(t.getId());
						// 在HR表（t_hr_account）中搜索该HR账户
						List<THrAccount> searchResult = hrDao.findByExample(search);
						if (searchResult != null && searchResult.size() > 0) {
							// 取第一个HR账户的用户信息
							THrAccount theHr = searchResult.get(0);
							if (theHr != null) {
								returnUser.setHrInfo(BeanTrans.getHrInfoFromT(theHr));

								THrCompany tCom = hrCompanyDao.findById(theHr.getCompanyId());
								if (tCom != null) {
									HrCompanyInfo theReturnCom = BeanTrans.getFromTCompany(tCom);

									// 在公司主管leader表中查询该公司的主管leader用户信息
									THrCompanyStart startSearch = new THrCompanyStart();
									startSearch.setCompanyId(theHr.getCompanyId());
									List<THrCompanyStart> theStartList = startDao.findByExample(startSearch);
									if (null != theStartList && 0 < theStartList.size()) {
										theReturnCom.setLeader(theStartList.get(0).getLeader());
										theReturnCom.setLeaderPic(theStartList.get(0).getLeaderPic());
										theReturnCom.setLeaderDesc(theStartList.get(0).getLeaderDesc());
										theReturnCom.setLeaderPosition(theStartList.get(0).getLeaderPosition());
										theReturnCom.setMoneyFrom(theStartList.get(0).getMoneyFrom());
									}

									// 查询该公司的媒体信息
									List<MediaInfo> theMIlist = new ArrayList<MediaInfo>();
									THrCompanyMedias mSear = new THrCompanyMedias();
									mSear.setCompanyId(tCom.getId());
									for (THrCompanyMedias inm : mediasDao.findByExample(mSear)) {
										theMIlist.add(BeanTrans.getFromTCompanyMedias(inm));
									}
									theReturnCom.setMedias(theMIlist);
									returnUser.setCompanyInfo(theReturnCom);

									// 查询该公司的行业信息
									List<HrCompanyAreasInfo> areasList = new ArrayList<HrCompanyAreasInfo>();
									THrCompanyAreas aSear = new THrCompanyAreas();
									aSear.setCompanyId(tCom.getId());
									for (THrCompanyAreas tca : areasDao.findByExample(aSear)) {
										areasList.add(BeanTrans.getFromTCompanyAreas(tca));
									}
									theReturnCom.setAreas(areasList);
								}
							} else {
								returnUser.setCompanyInfo(new HrCompanyInfo());
							}
						} else {
							returnUser.setCompanyInfo(new HrCompanyInfo());
						}
					} else { // 如果不是公司HR用户
						// 如果不是公司HR用户，则到t_user_bizcard表中查询，看是否商业用户（院校用户）
						TUserBizcard searchBean = new TUserBizcard();
						searchBean.setAccountId(t.getId());
						List<TUserBizcard> bizList = userBizcardDao.findByExample(searchBean);
						// 是商业用户（院校用户）
						if (null != bizList && 0 < bizList.size()) {
							TUserBizcard bizCard = bizList.get(0);
							returnUser.setRealName(bizCard.getRealName());
							if (bizCard.getBirthday() != null) {
								Calendar theCal = GregorianCalendar.getInstance();
								theCal.setTime(bizCard.getBirthday());
								returnUser.setBirthYear(String.valueOf(theCal.get(Calendar.YEAR)));
							}
							BizInfo bizInfo = BeanTrans.getFromTBizCard(bizCard);
							// ??查询用户的就职意向??
							queryUserIntends(bizInfo);
							returnUser.setBizInfo(bizInfo);
						}
					}

					// 最后登录时间
					t.setLastlogin(new Date());
					userAccountDao.updateObject(t);
				}
			}
		}
		return returnUser;
	}

	/**
	 * ??查询用户的就职意向??
	 * 
	 * @param returnBean
	 */
	private void queryUserIntends(BizInfo returnBean) {
		// ？在"意向表"中查询该用户（估计：是用户向某些职位投出了就业意向？？）
		TUserProfileIntends search = new TUserProfileIntends();
		search.setUserId(returnBean.getAccountId());
		List<TUserProfileIntends> userIntends = intentDao.findByExample(search);
		StringBuffer intendArea = new StringBuffer();
		StringBuffer intendAreaRoot = new StringBuffer();
		StringBuffer intendWork = new StringBuffer();
		StringBuffer intendWorkRoot = new StringBuffer();
		StringBuffer intendWorkSub = new StringBuffer();
		StringBuffer intentLocation = new StringBuffer();
		StringBuffer intentLocationRoot = new StringBuffer();
		StringBuffer intentLocationSub = new StringBuffer();

		CommonInfo intendAreaItems = new CommonInfo();
		intendAreaItems.setConfigName(String.valueOf(Constants.INTENT_TYPE_AREA));
		List<CommonItem> intendAreaItemsList = new ArrayList<CommonItem>();
		intendAreaItems.setItems(intendAreaItemsList);

		CommonInfo intendWorkItems = new CommonInfo();
		intendWorkItems.setConfigName(String.valueOf(Constants.INTENT_TYPE_WORK));
		List<CommonItem> intendWorkItemsList = new ArrayList<CommonItem>();
		intendWorkItems.setItems(intendWorkItemsList);

		CommonInfo intendLocationItems = new CommonInfo();
		intendLocationItems.setConfigName(String.valueOf(Constants.INTENT_TYPE_LOCATION));
		List<CommonItem> intendLocationItemsList = new ArrayList<CommonItem>();
		intendLocationItems.setItems(intendLocationItemsList);

		// ？？向相关表中添加相关意向（行业、职位、工作地点...）？？
		for (TUserProfileIntends one : userIntends) {
			if (one.getType() == Constants.INTENT_TYPE_AREA) {
				intendArea.append(one.getCommonName()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				intendAreaRoot.append(one.getCommonNameRoot()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				CommonItem item = new CommonItem();
				item.setName(one.getCommonName());
				intendAreaItemsList.add(item);
			} else if (one.getType() == Constants.INTENT_TYPE_WORK) {
				intendWork.append(one.getCommonName()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				intendWorkRoot.append(one.getCommonNameRoot()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				intendWorkSub.append(one.getCommonNameSub()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				CommonItem item = new CommonItem();
				item.setName(one.getCommonName());
				intendWorkItemsList.add(item);
			} else if (one.getType() == Constants.INTENT_TYPE_LOCATION) {
				intentLocation.append(one.getCommonName()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				intentLocationRoot.append(one.getCommonNameRoot()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				intentLocationSub.append(one.getCommonNameSub()).append(Constants.ITEM_STR_SEPERATER_SPACE);
				CommonItem item = new CommonItem();
				item.setName(one.getCommonName());
				intendLocationItemsList.add(item);
			}
		}
		returnBean.setIntendAreaItems(intendAreaItems);
		returnBean.setIntendWorkItems(intendWorkItems);
		returnBean.setIntendLocationItems(intendLocationItems);

		returnBean.setIntentArea(intendArea.toString().trim());
		returnBean.setIntentAreaRoot(intendAreaRoot.toString().trim());
		returnBean.setIntentWork(intendWork.toString().trim());
		returnBean.setIntentWorkRoot(intendWorkRoot.toString().trim());
		returnBean.setIntentWorkSub(intendWorkSub.toString().trim());
		returnBean.setIntentLocation(intentLocation.toString().trim());
		returnBean.setIntentLocationRoot(intentLocationRoot.toString().trim());
		returnBean.setIntentLocationSub(intentLocationSub.toString().trim());
	}

	/**
	 * 查询“邀请码”的有效性检验，需要使用t_agent_account表，代理人账户表
	 * 
	 * @param invitecode
	 *            邀请码字符串,如"33MV"
	 * @return 查询结果码及代理人账号(两个元素的String[],如{"200","wuhanligongdaxue"})
	 */
	public String[] checkInviteCode(String invitecode) {
		String[] result = new String[] { "404", "" };
		TAgentAccount sear = new TAgentAccount(); // 代理人账号（每个代理人有唯一邀请码）
		sear.setInviteCode(invitecode);

		// 根据邀请码搜索代理人,并获取代理人账号。
		// 以便后面将该用户记入该代理人账户名下,将记录在t_agent_account_user表中
		List<TAgentAccount> codeResult = agentAccountDao.findByExample(sear);
		if (codeResult != null && codeResult.size() > 0) { // 该邀请码有对应的代理人（邀请码正确）
			sear = codeResult.get(0);
			// type：1 - 求职者， 2 - 企业HR，3 - 志愿者
			if (sear.getStatus() == null || "1".equals(sear.getStatus())) {
				if (sear.getType() != null && Integer.parseInt(sear.getType()) > 1) {
					result[0] = "200";
					result[1] = sear.getAccount(); // 取t_agent_account表的account字段值
				} else {
					result[0] = "240";
				}
			} else {
				result[0] = "230";
			}
		}
		return result;
	}

	/**
	 * 添加userId登录日志信息
	 * 
	 * @param userId
	 * @return 添加日志成功：true；失败：false。
	 * @throws Exception
	 */
	public boolean addUserLoginlog(String userId) throws Exception {

		boolean issuccess = false;
		TUserLoginlog log = new TUserLoginlog();
		log.setUserId(Long.parseLong(userId));
		log.setLoginTime(new Date());

		// 添加登录日志信息
		issuccess = userLoginlogDao.addLoginLog(log);

		return issuccess;
	}

}
