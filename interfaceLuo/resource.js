/**"interface_host_url":"http://"+window.location.host+"/interface/",**///发布地址
var system_config={
"interface_host_url":"http://localhost:8081/interfaceLuo/",//测试地址
"interface_timeout":60000,
"jsonp_callback":"callback",
"page_index":"index.html",
"page_user_home":"Candidates_1.html",
"page_hr_home":"Recruiters_1.html",
"page_hr_company":"Recruiters_6.html",
"page_hr_create_job":"Recruiters_2.html",
"page_hr_search_job":"Recruiters_3.html",
"page_hr_job_list":"Recruiters_4.html",
"page_hr_resume_list":"Recruiters_5.html",
"page_user_bizcard":"qymp.html",
"page_user_profile":"Candidates_3.html",
"page_view_profile":"viewByHr.html",
"page_user_account":"Candidates_4.html",
"page_search_job":"zzw.html",
"page_search_job_pageSize":10,

"page_user_search_job":"zzw.html",
"page_user_applied_job":"Candidates_2_1.html",
"page_user_favorite_job":"Candidates_2_2.html",

"page_user_org_active":"gqthd_user.html",


"page_job_details":"Candidates_5.html",
"page_activity_details":"gqthd_show.html",
"page_list_active_pageSize":4,

"page_mentor_details":"zyds_show.html",

"type_account_user":1,
"type_account_hr":2,
"type_account_westplan":3,

"disable_verify_code_check":"",

"success_code":200,
"password_require_length":6,
"birth_age_default":22,
"birth_age_scope_less":18,
"birth_age_scope_max":30,
"common_user_degree_types":"userDegreeType",
"user_item_seperater":"__",
"user_item_seperater_space":" ",
"popupwindow_btn_do_nothing":"noNeedDoAnything",

"image_head_default":"img/tx.jpg",
"company_icon_default":"img/logo0.jpg",
"company_tag_max_number":16,
"company_desc_default_show_rows":5,
"job_tag_max_number":8,

common_str_seperater:"@",
user_message_company_str_seperater:"@",


user_job_status_userall:999,
user_job_status_hrall:999,

user_job_status_hrapplied:320,
user_job_status_hr_meet:310,

user_job_status_usergood:240,
user_job_status_usernotgood:230,
user_job_status_usercontinue:220,
user_job_status_hrfavorite:210,
user_job_status_hrintend:210,
user_job_status_hrremove:200,

user_job_status_hr_good:140,
user_job_status_hr_not_good:130,
user_job_status_hr_continue:120,
user_job_status_applied:110,
user_job_hr_not_handle:110,
user_job_status_favorite:105,
user_job_status_hidden:100,

user_job_westplan_flag_true:1,
user_job_westplan_flag_false:0,

user_message_type_system:0,
user_message_type_company:1,
user_message_type_activity:2,
user_message_type_mentor:3,

user_message_read_flag_unread:0,
user_message_read_flag_read:1,

approve_log_type_fullname:1000,
approve_log_type_shortname:1001,
approve_log_type_certificateFile:2000,

"empty_config":""
};

var system_text={
"login_for_user":"求职者登录",
"regist_for_user":"求职者注册",
"login_for_west":"志愿者登录",
"regist_for_west":"志愿者注册",
"login_for_hr":"企业登录",
"regist_for_hr":"企业注册",
"username":"用户名",
"password":"密码",
"verify_code":"验证码",
"can_not_be_empty":"不能为空",
"can_not_short_than":"不能少于",
"unit_length":"位",
"time_text":"时间",
"txt_select_area":"选择行业",
"txt_search_location":"选择地区",

username_password_can_not_be_same:"密码不能和用户名相同",
username_should_be_phone_or_email:"用户名只能为手机号码或邮箱地址",
username_should_email:"企业用户名只能为邮箱地址",
username_should:"用户名(4-16位字母、数字,须字母开头,不区分大小写)",
username_correct:"请输入正确的用户名",
password_should_be_char_or_number:"密码只能为字母或数字",
length_can_not_long_than:"不能超过",
length_can_not_less_than:"不能小于",
user_birth_year:"出身年份",
user_high_degree:"最高学历",
user_carrier_student:"在读",
user_carrier_grade:"应届毕业生",
user_carrier_westplan:"西部计划志愿者",
user_school:"学校",
user_major:"专业",
user_intent_area:"意向行业",
user_intent_work:"意向职能",
user_head_image_not_set_and_upload:"您还未设置你的头像,是否提交?",
user_company_logo_not_set_and_upload:"您还未设置您公司的Logo,是否提交?",
user_head_image_button_text:"已上传",
user_company_icon_button_text:"已上传",
user_email_address_should_be_correct:"请输入正确的邮箱地址！",
user_email_not_verify:"未验证",
user_email_verified:"已验证",
username_password_can_not_be_same:"密码不能和用户名相同",

chinese_colon:"：",
company_worktype:"职能",
company_scale:"规模",
company_type:"性质",
company_area:"所在行业",
company_location:"所在区",
company_default_pro:"广东省",
company_default_city:"深圳市",
company_icon_upload_text:"上传Logo(不要超过1M)",
company_certificateFile_upload_text:"上传营业执照(不要超过1M)",
company_leaderPic_upload_text:"上传图片(不要超过1M)",
company_job_char_type_one:"全职招聘",
company_job_char_type_two:"兼职招聘",
company_job_char_type_three:"实习招聘",

job_depart:"部门",
job_email_to:"邮箱地址",
hr_job_endtime:"结束时间",
hr_job_pausetime:"暂停时间",
hr_job_createtime:"创建/修改时间",
hr_job_status_draft:"草稿",
hr_job_status_ongoing:"招聘",
hr_job_status_pause:"暂停",
hr_job_status_end:"结束",

hr_job_salary_unit:"万",
hr_job_year_unit:"年",

hr_job_hello_for_user:"您好，我是",
hr_job_charge_for_user:"招聘负责人，很高兴认识您，有任何问题欢迎交流沟通",

hr_job_above_text:"以上",

user_job_status_hrremove:"删除",
user_job_status_hrfavorite:"收藏",
user_job_status_hrintend:"意向沟通",
user_job_status_applied:"已投递",
user_job_hr_not_handle:"未处理",
user_job_status_favorited:"已收藏",
user_job_status_hr_not_good:"不合适",
user_job_status_hr_continue:"待定",
user_job_status_hr_good:"合适",
user_job_status_hrapplied:"邀请面试",
user_job_status_hr_meet:"通知面试",
user_job_status_hidden:"删除",

user_be_favorited:"恭喜,您已经被企业HR收藏了!",
user_be_intend:"恭喜,有企业HR意向与您沟通!",
user_be_hrapplied:"您好，恭喜您获得了{company_name}关于{job_name}职位的的面试邀请，面试通知已发送到绑定邮箱，请认真准备面试，争取优异表现。!",
user_be_hrapplied_again:"您好，再次通知您获得了{company_name}关于{job_name}职位的的面试邀请，面试通知已发送到绑定邮箱，请认真准备面试，争取优异表现。!",
user_be_hr_good:"您投递{company_name} {job_name}的简历已经通过招聘方筛选，招聘方将在近日内与您进行联系，请耐心等待并保持通讯畅通!",
user_be_hr_continue:"恭喜,有企业HR对你申请的岗位还有待观察!",
user_be_hr_not_good:"您好，您投递{company_name} {job_name}的简历经过招聘方评估，认为您的条件与所投职位要求不太匹配，没有进入面试环节。请继续投递，相信有更合适的职位在等着您。",
user_be_hr_meet:"您好，恭喜您获得了{company_name}关于{job_name}职位的的面试邀请，面试通知已发送到绑定邮箱，请认真准备面试，争取优异表现。!",
user_be_hr_meet_again:"您好，再次通知您获得了{company_name}关于{job_name}职位的的面试邀请，面试通知已发送到绑定邮箱，请认真准备面试，争取优异表现。!",

hr_company_need_save_base_first:"请先保存企业名称等基本信息!",

active_id_can_not_be_null:"无法找到对应活动,请通过链接加载该页面",
active_user_already_join:"您已参加",
active_meet_max_join:"报名已满",

zhds_more_details:"....更多",

"empty_str":""
}

var logonUser={"userId":"-1"};//定义登录的用户信息
var userResume={};//定义用户简历


var system_degree_items=[
	{"id":"020","name":"大专"},
	{"id":"030","name":"本科"},
	{"id":"040","name":"硕士"},
	{"id":"050","name":"博士"},
];//定义最高学历列表全局变量

var system_major_items = [ {
	"id" : "",
	"name" : "哲学",
	"subItems" : [ {
		"id" : "",
		"name" : "哲学类",
		"subItems" : [ {
			"id" : "",
			"name" : "哲学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "逻辑学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "宗教学",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "法学",
	"subItems" : [ {
		"id" : "",
		"name" : "法学类",
		"subItems" : [ {
			"id" : "",
			"name" : "法学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "马克思主义理论类",
		"subItems" : [ {
			"id" : "",
			"name" : "科学社会主义与国际共产主义运动",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "中国革命史与中国共产党党史",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "社会学类",
		"subItems" : [ {
			"id" : "",
			"name" : "社会学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "社会工作",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "政治学类",
		"subItems" : [ {
			"id" : "",
			"name" : "政治学与行政学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "国际政治",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "外交学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "思想政治教育",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "公安学类",
		"subItems" : [ {
			"id" : "",
			"name" : "治安学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "侦查学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "边防管理",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "文学",
	"subItems" : [ {
		"id" : "",
		"name" : "中国语言文学类",
		"subItems" : [ {
			"id" : "",
			"name" : "汉语言文学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "汉语言",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "对外汉语",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "中国少数民族语言文学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "古典文献",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "外国语言文学类",
		"subItems" : [ {
			"id" : "",
			"name" : "外语",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "新闻传播学类",
		"subItems" : [ {
			"id" : "",
			"name" : "新闻学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "广播电视新闻学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "广告学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "编辑出版学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "艺术类",
		"subItems" : [ {
			"id" : "",
			"name" : "音乐学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "作曲与作曲技术理论",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "音乐表演",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "绘画",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "雕塑",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "美术学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "艺术设计学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "艺术设计",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "舞蹈学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "舞蹈编导",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "戏剧学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "表演",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "导演",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "戏剧影视文学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "戏剧影视美术设计",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "摄影",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "录音艺术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "动画",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "播音与主持艺术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "广播电视编导",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "工学",
	"subItems" : [ {
		"id" : "",
		"name" : "地矿类",
		"subItems" : [ {
			"id" : "",
			"name" : "采矿工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "石油工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "矿物加工工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "勘察技术与工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "资源勘察工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "材料类",
		"subItems" : [ {
			"id" : "",
			"name" : "冶金工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "金属材料工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "无机非金属材料工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "高分子材料与工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "机械类",
		"subItems" : [ {
			"id" : "",
			"name" : "机械设计制造及其自动化",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "材料成型及控制工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "工业设计",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "过程装备与控制工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "仪器仪表类",
		"subItems" : [ {
			"id" : "",
			"name" : "测控技术与仪器",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "能源动力类",
		"subItems" : [ {
			"id" : "",
			"name" : "热能与动力工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "核工程与核技术",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "电气信息类",
		"subItems" : [ {
			"id" : "",
			"name" : "电气工程及其自动化",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "自动化",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "电子信息工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "通信工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "计算机科学与技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "电子科学与技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "生物医学工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "土建类",
		"subItems" : [ {
			"id" : "",
			"name" : "建筑学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "城市规划",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "土木工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "建筑环境与设备工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "给水排水工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "水利类",
		"subItems" : [ {
			"id" : "",
			"name" : "水利水电工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "水文与水资源工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "港口航道与海岸工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "测绘类",
		"subItems" : [ {
			"id" : "",
			"name" : "测绘工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "环境与安全类",
		"subItems" : [ {
			"id" : "",
			"name" : "环境工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "安全工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "化学与制药类",
		"subItems" : [ {
			"id" : "",
			"name" : "化学工程与工艺",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "制药工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "交通运输类",
		"subItems" : [ {
			"id" : "",
			"name" : "交通运输",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "交通工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "油气储运工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "飞行技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "航海技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "轮机工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "海洋工程类",
		"subItems" : [ {
			"id" : "",
			"name" : "船舶与海洋工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "轻工纺织食品类",
		"subItems" : [ {
			"id" : "",
			"name" : "食品科学与工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "轻化工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "包装工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "印刷工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "纺织工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "服装设计与工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "航空航天类",
		"subItems" : [ {
			"id" : "",
			"name" : "飞行器设计与工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "飞行器动力工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "飞行器制造与工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "飞行器环境与生命保障工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "武器",
		"subItems" : [ {
			"id" : "",
			"name" : "武器系统与发射工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "探测指导与控制技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "弹药工程与爆炸技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "特种能源工程与烟火技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "地面武器机动工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "信息对抗技术",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "农业工程类",
		"subItems" : [ {
			"id" : "",
			"name" : "农业机械化及其自动化",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "农业电气化与自动化",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "农业建筑环境与能源工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "农业水利工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "林业工程类",
		"subItems" : [ {
			"id" : "",
			"name" : "森林工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "木材科学与工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "林产化工",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "公安技术类",
		"subItems" : [ {
			"id" : "",
			"name" : "刑事科学技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "消防工程",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "工程力学类",
		"subItems" : [ {
			"id" : "",
			"name" : "工程力学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "生物工程类",
		"subItems" : [ {
			"id" : "",
			"name" : "生物工程",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "经济学",
	"subItems" : [ {
		"id" : "",
		"name" : "经济学类",
		"subItems" : [ {
			"id" : "",
			"name" : "经济学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "国际经济与贸易",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "财政学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "金融学",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "教育学",
	"subItems" : [ {
		"id" : "",
		"name" : "教育学类",
		"subItems" : [ {
			"id" : "",
			"name" : "教育学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "学前教育",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "特殊教育",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "教育技术学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "体育学类",
		"subItems" : [ {
			"id" : "",
			"name" : "体育教育",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "运动训练",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "社会体育",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "运动人体科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "民族传统体育",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "历史学",
	"subItems" : [ {
		"id" : "",
		"name" : "历史学类",
		"subItems" : [ {
			"id" : "",
			"name" : "历史学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "世界历史",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "考古学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "博物馆学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "民族学",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "理学",
	"subItems" : [ {
		"id" : "",
		"name" : "数学类",
		"subItems" : [ {
			"id" : "",
			"name" : "数学与应用数学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "信息与计算科学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "物理学类",
		"subItems" : [ {
			"id" : "",
			"name" : "物理学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "应用物理学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "化学类",
		"subItems" : [ {
			"id" : "",
			"name" : "化学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "应用化学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "生物科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "生物科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "生物技术",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "天文学类",
		"subItems" : [ {
			"id" : "",
			"name" : "天文学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "地质学类",
		"subItems" : [ {
			"id" : "",
			"name" : "地质学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "地球化学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "地理科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "地理科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "资源环境与城市规划管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "地理信息系统",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "地球物理学类",
		"subItems" : [ {
			"id" : "",
			"name" : "地球物理学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "大气科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "大气科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "应用气象学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "海洋科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "海洋科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "海洋技术",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "力学",
		"subItems" : [ {
			"id" : "",
			"name" : "理论与应用力学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "电子信息科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "电子信息科学与技术",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "微电子学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "光信息科学与技术",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "材料科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "材料物理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "材料化学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "环境科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "环境科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "生态学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "心理学类",
		"subItems" : [ {
			"id" : "",
			"name" : "心理学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "应用心理学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "统计学类",
		"subItems" : [ {
			"id" : "",
			"name" : "统计学",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "农学",
	"subItems" : [ {
		"id" : "",
		"name" : "植物生产类",
		"subItems" : [ {
			"id" : "",
			"name" : "农学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "园艺",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "植物保护",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "茶学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "草业科学类",
		"subItems" : [ {
			"id" : "",
			"name" : "草业科学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "森林资源类",
		"subItems" : [ {
			"id" : "",
			"name" : "林学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "森林资源保护与游憩",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "野生动物与自然保护区管理",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "森林生产类",
		"subItems" : [ {
			"id" : "",
			"name" : "园林",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "水土保持与荒漠化防治",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "农业资源与环境",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "动物生产类",
		"subItems" : [ {
			"id" : "",
			"name" : "动物科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "蚕学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "动物医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "动物医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "水产类",
		"subItems" : [ {
			"id" : "",
			"name" : "水产养殖学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "海洋渔业科学与技术",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "医学",
	"subItems" : [ {
		"id" : "",
		"name" : "基础医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "基础医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "预防医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "预防医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "临床医学与医学技术类",
		"subItems" : [ {
			"id" : "",
			"name" : "临床医学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "麻醉学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "医学影像学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "医学检验",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "口腔医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "口腔医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "中医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "中医学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "针灸推拿学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "蒙医学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "藏医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "法医学类",
		"subItems" : [ {
			"id" : "",
			"name" : "法医学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "护理学类",
		"subItems" : [ {
			"id" : "",
			"name" : "护理学",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "药学类",
		"subItems" : [ {
			"id" : "",
			"name" : "药学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "中药学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "药物制剂",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "",
	"name" : "管理学",
	"subItems" : [ {
		"id" : "",
		"name" : "管理科学与工程类",
		"subItems" : [ {
			"id" : "",
			"name" : "管理科学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "信息管理与信息系统",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "工业工程",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "工程管理",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "工商管理类",
		"subItems" : [ {
			"id" : "",
			"name" : "工商管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "市场营销",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "会计学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "财务管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "人力资源管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "旅游管理",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "公共管理类",
		"subItems" : [ {
			"id" : "",
			"name" : "行政管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "公共事业管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "劳动与社会保障",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "土地资源管理",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "农业经济管理类",
		"subItems" : [ {
			"id" : "",
			"name" : "农林经济管理",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "农村区域发展",
			"subItems" : []
		} ]
	}, {
		"id" : "",
		"name" : "图书档案学类",
		"subItems" : [ {
			"id" : "",
			"name" : "图书馆学",
			"subItems" : []
		}, {
			"id" : "",
			"name" : "档案学",
			"subItems" : []
		} ]
	} ]
} ];//定义专业列表全局变量

//定义行业列表全局变量
var system_area_items = [
{"id":"001","name":"互联网·游戏·软件","subItems":[
	  {"id":"1","name":"互联网/移动互联网/电子商务","subItems":[]},
	  {"id":"1","name":"网络游戏","subItems":[]},
	  {"id":"1","name":"计算机软件","subItems":[]},
	  {"id":"1","name":"IT服务/系统集成","subItems":[]}
  ]
},
{"id":"002","name":"电子·通信·硬件","subItems":[
	  {"id":"1","name":"电子技术/半导体/集成电路","subItems":[]},
	  {"id":"1","name":"通信(设备/运营/增值)","subItems":[]},
	  {"id":"1","name":"计算机硬件/网络设备\t","subItems":[]}
  ]
},
{"id":"003","name":"房地产·建筑·物业","subItems":[
      {"id":"1","name":"房地产开发/建筑/建材/工程","subItems":[]},
      {"id":"1","name":"规划/设计/装潢","subItems":[]},
      {"id":"1","name":"房地产服务(物业管理/地产经纪)","subItems":[]}
  ]
},
{"id":"004","name":"金融","subItems":[
      {"id":"1","name":"银行","subItems":[]},
      {"id":"1","name":"保险","subItems":[]},
      {"id":"1","name":"基金/证券/期货/投资","subItems":[]},
      {"id":"1","name":"会计/审计","subItems":[]},
      {"id":"1","name":"信托/担保/拍卖/典当","subItems":[]}
  ]
},
{"id":"005","name":"消费品","subItems":[
      {"id":"1","name":"食品/饮料/烟酒/日化","subItems":[]},
      {"id":"1","name":"百货/批发/零售","subItems":[]},
      {"id":"1","name":"服装服饰/纺织/皮革","subItems":[]},
      {"id":"1","name":"家具/家电","subItems":[]},
      {"id":"1","name":"办公用品及设备","subItems":[]},
      {"id":"1","name":"奢侈品/收藏品","subItems":[]},
      {"id":"1","name":"工艺品/珠宝/玩具","subItems":[]}
   ]
},
{"id":"006","name":"汽车·机械·制造","subItems":[
      {"id":"1","name":"汽车/摩托车","subItems":[]},
      {"id":"1","name":"机械制造/机电/重工","subItems":[]},
      {"id":"1","name":"印刷/包装/造纸","subItems":[]},
      {"id":"1","name":"原材料及加工","subItems":[]},
      {"id":"1","name":"仪器/仪表/工业自动化/电气","subItems":[]}
   ]
},
{"id":"007","name":"服务·外包·中介","subItems":[
      {"id":"1","name":"专业服务:咨询/财会/法律/翻译等","subItems":[]},
      {"id":"1","name":"中介服务","subItems":[]},
      {"id":"1","name":"外包服务","subItems":[]},
      {"id":"1","name":"检测/认证","subItems":[]},
      {"id":"1","name":"旅游/酒店/餐饮服务/生活服务","subItems":[]},
      {"id":"1","name":"娱乐/休闲/体育","subItems":[]},
      {"id":"1","name":"租赁服务","subItems":[]}
   ]
},
{"id":"008","name":"广告·传媒·教育·文化","subItems":[
      {"id":"1","name":"广告/公关/市场推广/会展","subItems":[]},
      {"id":"1","name":"影视/媒体/艺术/文化/出版","subItems":[]},
      {"id":"1","name":"教育/培训/学术/科研/院校","subItems":[]}
   ]
},
{"id":"009","name":"交通·贸易·物流","subItems":[
      {"id":"1","name":"交通/物流/运输","subItems":[]},
      {"id":"1","name":"贸易/进出口","subItems":[]},
      {"id":"1","name":"航空/航天","subItems":[]}
   ]
},
{"id":"010","name":"制药·医疗","subItems":[
       {"id":"1","name":"制药/生物工程","subItems":[]},
       {"id":"1","name":"医疗/保健/美容/卫生服务","subItems":[]},
       {"id":"1","name":"医疗设备/器械","subItems":[]}
   ]
},
{"id":"011","name":"能源·化工·环保","subItems":[
       {"id":"1","name":"能源(电力/水利)","subItems":[]},
       {"id":"1","name":"石油/石化/化工","subItems":[]},
       {"id":"1","name":"采掘/冶炼/矿产","subItems":[]},
       {"id":"1","name":"环保","subItems":[]},
       {"id":"1","name":"新能源","subItems":[]}
   ]
},
{"id":"012","name":"政府·农林牧渔","subItems":[
       {"id":"1","name":"政府/公共事业","subItems":[]},
       {"id":"1","name":"农/林/牧/渔","subItems":[]},
       {"id":"1","name":"其他","subItems":[]}
   ]
},
{"id":"013","name":"社会组织","subItems":[
       {"id":"1","name":"社会团体","subItems":[]},
       {"id":"2","name":"民办非企业单位","subItems":[]},
       {"id":"3","name":"基金会","subItems":[]}
   ]
}
];

var system_industory=[
	{"id":"010","name":"IT"},
	{"id":"020","name":"金融"},
	{"id":"030","name":"建筑业"},
	{"id":"040","name":"批发和零售业"},
	{"id":"050","name":"教育"},
	{"id":"060","name":"制造业"},
	{"id":"070","name":"房地产业"},
	{"id":"080","name":"信息传输、软件和信息技术服务行业"}
];//定义行业选择全局变量

var system_work_items = [ {
	"id" : "1",
	"name" : "销售|客服|市场",
	"subItems" : [ {
		"id" : "1",
		"name" : "销售业务",
		"subItems" : [ {
			"id" : "1",
			"name" : "销售代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售业务跟单",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "团购业务员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络/在线销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电话销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "大客户销售代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "业务拓展专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "区域销售专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "渠道/分销专员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "销售管理",
		"subItems" : [ {
			"id" : "1",
			"name" : "销售总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药销售经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "团购经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "大客户销售经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "业务拓展经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "区域销售经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "区域销售总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "渠道/分销经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "渠道/分销总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "销售行政/商务",
		"subItems" : [ {
			"id" : "1",
			"name" : "销售行政经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售行政专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售运营经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售运营专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "商务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "商务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售培训师/讲师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "销售数据分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "客服/售前/售后技术支持",
		"subItems" : [ {
			"id" : "1",
			"name" : "客户服务总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "售前/售后技术支持工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "售前/售后技术支持管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络/在线客服",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户咨询热线/呼叫中心人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户关系/投诉协调人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户服务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户服务主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户服务经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "市场",
		"subItems" : [ {
			"id" : "1",
			"name" : "市场总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场策划/企划经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场策划/企划专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场文案策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "活动策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "活动执行",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "促销主管/督导",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "促销员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网站推广",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "SEO/SEM",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "学术推广",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "选址拓展/新店开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场调研与分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "品牌专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "品牌主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场营销经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场营销主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市场营销专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "业务拓展经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "业务拓展专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "产品经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "产品主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "产品专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "品牌经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "公关/媒介",
		"subItems" : [ {
			"id" : "1",
			"name" : "公关总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "公关经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "公关专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "媒介经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "媒介专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "媒介策划/管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "政府事务管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "广告/会展",
		"subItems" : [ {
			"id" : "1",
			"name" : "广告创意/设计总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告/会展项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会展策划/设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告/会展业务拓展",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告客户代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告客户主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告客户经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告客户总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告制作执行",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告美术指导",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告文案策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告创意/设计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告创意/设计经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "能源|环保|农业|科研",
	"subItems" : [ {
		"id" : "1",
		"name" : "能源/矿产/地质勘查",
		"subItems" : [ {
			"id" : "1",
			"name" : "石油/天然气技术人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "空调/热能工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "核力/火力工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "水利/水电工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电力工程师/技术员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "地质勘查/选矿/采矿",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "能源/矿产项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "环境科学/环保",
		"subItems" : [ {
			"id" : "1",
			"name" : "环保技术工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "环境评价工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "环境监测工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "水处理工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "固废处理工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "废气处理工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生态治理/规划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "环境管理/园林景区保护",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "农/林/牧/渔业",
		"subItems" : [ {
			"id" : "1",
			"name" : "农艺师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "林业技术人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "园艺师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "畜牧师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "动物育种/养殖",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "动物营养/饲料研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "饲料销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "公务员/事业单位/科研机构",
		"subItems" : [ {
			"id" : "1",
			"name" : "公务员/事业单位人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "科研管理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "科研人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "服务业",
	"subItems" : [ {
		"id" : "1",
		"name" : "商超/酒店/娱乐管理/服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "店长/卖场管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "防损员/内保",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服务员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "行李员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "预订员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "前厅接待/礼仪/迎宾",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "品类管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "促销员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "促销主管/督导",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "理货员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "店员/营业员/导购员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "收银员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "收银主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客房管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "酒店管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "大堂经理/领班",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "品牌/连锁招商管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "楼面管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "奢侈品销售",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "旅游/度假/出入境服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "旅游产品销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "旅游顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "导游/票务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "旅游计划调度",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "旅游产品/线路策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "签证业务办理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "烹饪/料理/食品研发",
		"subItems" : [ {
			"id" : "1",
			"name" : "厨师/面点师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "食品加工/处理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "调酒师/茶艺师/咖啡师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "营养师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "厨工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "食品/饮料研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "食品/饮料检验",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "保健/美容/美发/健身",
		"subItems" : [ {
			"id" : "1",
			"name" : "美发/发型师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化妆师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美容师/美甲师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美容顾问(BA)",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "健身/美体/舞蹈教练",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "按摩/足疗",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "救生员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "医院/医疗/护理",
		"subItems" : [ {
			"id" : "1",
			"name" : "医疗管理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医学影像/放射科医师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化验/检验科医师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药房管理/药剂师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "理疗师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "兽医",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "护士/护理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "营养师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "针灸/推拿",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "眼科医生/验光师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "心理医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "综合门诊/全科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "内科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "外科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "儿科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "牙科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美容整形科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "中医科医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "麻醉医生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "社区/居民/家政服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "保安经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保安",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "家政人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "婚礼/庆典策划服务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "宠物护理和美容",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保姆/母婴护理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "搬运工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保洁",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "咨询|法律|教育|翻译",
	"subItems" : [ {
		"id" : "1",
		"name" : "咨询/顾问/调研/数据分析",
		"subItems" : [ {
			"id" : "1",
			"name" : "咨询总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "咨询项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "猎头顾问/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "情报信息分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "数据分析师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "调研员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "专业顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "咨询顾问/咨询员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "咨询经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "教育/培训",
		"subItems" : [ {
			"id" : "1",
			"name" : "幼教",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美术教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "体育老师/教练",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "校长/副校长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "教学/教务管理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训督导",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训师/讲师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训助理/助教",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "教育产品开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "音乐教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "外语教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "文科教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "小学教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "初中教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "高中教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "大学教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "职业技术教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "家教",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "兼职教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "理科教师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训策划",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "律师/法务/合规",
		"subItems" : [ {
			"id" : "1",
			"name" : "法务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "法务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "律师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "律师助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "企业律师/合规经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "企业律师/合规顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "知识产权/专利顾问/代理人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "合同管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "翻译（口译与笔译）",
		"subItems" : [ {
			"id" : "1",
			"name" : "英语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "韩语/朝鲜语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "阿拉伯语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "葡萄牙语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "意大利语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "西班牙语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "俄语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "德语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "日语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "法语翻译",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他语种翻译",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "传媒|印刷|艺术|设计",
	"subItems" : [ {
		"id" : "1",
		"name" : "影视/媒体/出版/印刷",
		"subItems" : [ {
			"id" : "1",
			"name" : "导演/编导",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "文字编辑/组稿",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美术编辑/美术设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "记者/采编",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电话采编",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "文案策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "校对/录入",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "发行管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "排版设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "印刷排版/制版",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "印刷操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "作家/编剧/撰稿人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "放映管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "总编/副总编",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "艺术指导/舞美设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "摄影师/摄像师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化妆师/造型师/服装/道具",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "主持人/司仪",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "演员/模特",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "配音员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "音效师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "后期制作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "经纪人/星探",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "艺术/设计",
		"subItems" : [ {
			"id" : "1",
			"name" : "设计管理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "多媒体/动画设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "包装设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "家具设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "家居用品设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工艺品/珠宝设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "玩具设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "店面/展览/展示/陈列设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工业设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "游戏界面设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "美术编辑/美术设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "用户体验（UE/UX）设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "艺术/设计总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "绘画",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "原画师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "CAD设计/制图",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "平面设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "三维/3D设计/制作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "Flash设计/开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "特效设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "视觉设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "生产|制造",
	"subItems" : [ {
		"id" : "1",
		"name" : "生产管理/运营",
		"subItems" : [ {
			"id" : "1",
			"name" : "工厂厂长/副厂长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "技术文档工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "包装工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产物料管理（PMC）",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产设备管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工业工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工艺/制程工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "制造工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产计划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "产品管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产项目工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产运营管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产主管/督导/组长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产经理/车间主任",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "电子/电器/半导体/仪器仪表",
		"subItems" : [ {
			"id" : "1",
			"name" : "电子技术研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "空调工程/设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "音频/视频工程师/技术员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "安防系统工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器设备工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电气工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电气设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电气线路设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "线路结构设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "半导体技术",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "仪器/仪表/计量工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "自动化工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "家用电器/数码产品研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电池/电源开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "变压器与磁电工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电器研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器工艺/制程工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电路工程师/技术员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "模拟电路设计/应用工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "版图设计工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "集成电路IC设计/应用工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IC验证工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子元器件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "射频工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "无线电工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "激光/光电子技术",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "光源/照明工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "现场应用工程师（FAE）",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "汽车制造",
		"subItems" : [ {
			"id" : "1",
			"name" : "汽车动力系统工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车工程项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "安全性能工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车装配工艺工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车零部件设计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车机械工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车电子工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "车身设计工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车底盘/总装工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "汽车销售与服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "汽车销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "4S店管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "二手车评估师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车装饰美容",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车定损/车险理赔",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车质量管理/检验检测",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车售后服务/客户服务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车零配件销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "机械设计/制造/维修",
		"subItems" : [ {
			"id" : "1",
			"name" : "工程机械经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "注塑工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "铸造/锻造工程师/技师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机电工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "材料工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "飞机设计与制造",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "飞机维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "列车设计与制造",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "列车维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "船舶设计与制造",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "船舶维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "夹具工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "模具工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工程机械主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械设备经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械设备工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械设计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械制图员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械结构工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "机械工艺/制程工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "气动工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "CNC/数控工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "服装/纺织/皮革设计/生产",
		"subItems" : [ {
			"id" : "1",
			"name" : "服装/纺织品设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织/皮革项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织品/皮革质量管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织品/皮革销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织/皮革跟单",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "面料辅料开发/采购",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "样衣工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "裁床",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电脑放码员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织/皮革工艺师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装打样/制版",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "技工/操作工",
		"subItems" : [ {
			"id" : "1",
			"name" : "车床/磨床/铣床/冲床工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "普工/操作工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "空调工/电梯工/锅炉工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "铲车/叉车工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "水工/木工/油漆工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电焊工/铆焊工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "钳工/机修工/钣金工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "模具工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "生物/制药/医疗器械",
		"subItems" : [ {
			"id" : "1",
			"name" : "医药代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "临床研究员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "临床协调员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "临床数据分析员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药化学分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药技术研发管理人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药品注册",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械注册",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药品生产/质量管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械生产/质量管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械维修/保养",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药品研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药销售经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药品市场推广经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "药品市场推广专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医疗器械推广",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药学术推广",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药招商",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药项目招投标管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生物工程/生物制药",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "化工",
		"subItems" : [ {
			"id" : "1",
			"name" : "化工工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化工项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化学实验室技术员/研究员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "塑料工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "油漆/化工涂料研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化学制剂研发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化学操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化学技术应用",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化学分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化工研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "采购|贸易|交通|物流",
	"subItems" : [ {
		"id" : "1",
		"name" : "采购/贸易",
		"subItems" : [ {
			"id" : "1",
			"name" : "采购总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "报关员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "贸易跟单",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "外贸/贸易专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "外贸/贸易经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "买手",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "供应链管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "供应商开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "采购专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "采购经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "交通运输服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "机动车司机/驾驶",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "地勤人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "航空乘务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "船员/水手",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "船舶乘务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "列车乘务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "公交/地铁乘务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "飞机驾驶/操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "船舶驾驶/操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "列车驾驶/操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "物流/仓储",
		"subItems" : [ {
			"id" : "1",
			"name" : "物流总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "搬运工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物流/仓储项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物流/仓储调度",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "理货/分拣/打包",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "仓库/物料管理员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "仓库经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "单证员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "报关员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "集装箱业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "水运/空运/陆运操作",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "快递员/速递员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "运输经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "货运代理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物流专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物流经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "金融",
	"subItems" : [ {
		"id" : "1",
		"name" : "银行",
		"subItems" : [ {
			"id" : "1",
			"name" : "行长/副行长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "个人业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行卡/电子银行业务推广",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "信贷管理/资信评估/分析",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "信审核查",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "外汇交易",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "进出口/信用证结算",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "清算人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "风险控制",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "公司业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行会计/柜员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "综合业务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行经理/主任",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行大堂经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行客户总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行客户经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行客户主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行客户代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "银行客户服务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "综合业务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "证券/期货/投资管理/服务",
		"subItems" : [ {
			"id" : "1",
			"name" : "证券总监/部门经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "储备经理人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "风险管理/控制/稽查",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "资产评估",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "股票/期货操盘手",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "融资专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "融资经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "融资总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "投资银行业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "投资/理财服务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券分析/金融研究",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资客户代表",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资客户主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资客户经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资客户总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/期货/外汇经纪人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "保险",
		"subItems" : [ {
			"id" : "1",
			"name" : "保险业务管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "储备经理人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险内勤",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "客户服务/续期管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险精算师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车定损/车险理赔",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "核保理赔",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险契约管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险培训师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险产品开发/项目策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险顾问/财务规划师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险代理/经纪人/客户经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "信托/担保/拍卖/典当",
		"subItems" : [ {
			"id" : "1",
			"name" : "信托服务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "担保业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "拍卖师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "典当业务",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "珠宝/收藏品鉴定",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "房产|建筑|物业管理",
	"subItems" : [ {
		"id" : "1",
		"name" : "房地产开发/经纪/中介",
		"subItems" : [ {
			"id" : "1",
			"name" : "房地产项目策划经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产中介/交易",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产评估",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产销售/置业顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产销售主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产销售经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目配套工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目开发报建",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目招投标",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目策划专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "土木/建筑/装修/市政工程",
		"subItems" : [ {
			"id" : "1",
			"name" : "高级建筑工程师/总工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "幕墙工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "园林/景观设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "城市规划与设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "市政工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工程监理/质量管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工程造价/预结算",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工程资料管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "建筑施工现场管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "施工队长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "室内装潢设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "智能大厦/布线/弱电/安防",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "给排水/暖通/空调工程",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "建筑工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "建筑设计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "土木/土建/结构工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "岩土工程",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "建筑制图",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "建筑工程测绘/测量",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "道路/桥梁/隧道工程技术",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "水利/港口工程技术",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "架线和管道工程技术",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "施工员",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "物业管理",
		"subItems" : [ {
			"id" : "1",
			"name" : "物业经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物业管理专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物业租赁/销售",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物业维修",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物业顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物业招商管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "IT|互联网|通信",
	"subItems" : [ {
		"id" : "1",
		"name" : "软件/互联网开发/系统集成",
		"subItems" : [ {
			"id" : "1",
			"name" : "高级软件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "WEB前端开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "语音/视频/图形开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "用户界面（UI）设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "用户体验（UE/UX）设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网页设计/制作/美工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "游戏设计/开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "游戏策划",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "游戏界面设计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统集成工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "移动互联网开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "嵌入式软件开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "软件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "软件研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "需求工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统架构设计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统分析员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "数据库开发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "ERP技术/开发应用",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "互联网软件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "手机软件开发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "硬件开发",
		"subItems" : [ {
			"id" : "1",
			"name" : "高级硬件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "硬件工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "嵌入式硬件开发",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "IT质量管理/测试/配置管理",
		"subItems" : [ {
			"id" : "1",
			"name" : "IT质量管理经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT质量管理工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统测试",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "软件测试",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "硬件测试",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "配置管理工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "信息技术标准化工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "IT运维/技术支持",
		"subItems" : [ {
			"id" : "1",
			"name" : "信息技术经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "Helpdesk",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT文档工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT技术文员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "ERP实施顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "计算机硬件维护工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "数据库管理员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络与信息安全工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络管理员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统管理员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "系统工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT技术支持/维护工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT技术支持/维护经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "信息技术专员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "IT管理/项目协调",
		"subItems" : [ {
			"id" : "1",
			"name" : "CTO/CIO",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT技术/研发总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT技术/研发经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目执行/协调人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "电信/通信技术开发及应用",
		"subItems" : [ {
			"id" : "1",
			"name" : "通信技术工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "通信项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "通信标准化工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "通信电源工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "无线/射频通信工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "有线传输工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电信交换工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电信网络工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "移动通信工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "数据通信工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "通信研发工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "互联网产品/运营管理",
		"subItems" : [ {
			"id" : "1",
			"name" : "互联网产品经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "互联网产品专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子商务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子商务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络运营管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网络运营专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "网站编辑",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "SEO/SEM",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "项目|质量|高级管理",
	"subItems" : [ {
		"id" : "1",
		"name" : "项目管理/项目协调",
		"subItems" : [ {
			"id" : "1",
			"name" : "项目总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产项目工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "汽车工程项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电子/电器项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "服装/纺织/皮革项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "医药项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化工项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "物流/仓储项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "咨询项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "能源/矿产项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "生产项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "保险项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "证券/投资项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "项目经理/项目主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "项目专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "广告/会展项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "IT项目执行/协调人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "通信项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目配套工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "房地产项目管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "质量管理/安全防护",
		"subItems" : [ {
			"id" : "1",
			"name" : "质量管理/测试经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "安全消防",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "安全管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "供应商/采购质量管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "环境/健康/安全工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "环境/健康/安全经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "认证/体系工程师/审核员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "化验/检验",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "质量检验员/测试员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "质量管理/测试工程师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "质量管理/测试主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "高级管理",
		"subItems" : [ {
			"id" : "1",
			"name" : "首席执行官CEO/总裁/总经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "合伙人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "校长/副校长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "工厂厂长/副厂长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "行长/副行长",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "总编/副总编",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "总裁助理/总经理助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "部门/事业部管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "分公司/代表处负责人",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "副总裁/副总经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "CTO/CIO",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "首席财务官CFO",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "首席运营官COO",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "财务|人力资源|行政",
	"subItems" : [ {
		"id" : "1",
		"name" : "财务/审计/税务",
		"subItems" : [ {
			"id" : "1",
			"name" : "首席财务官CFO",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "审计经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "审计专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "税务经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "税务专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "成本经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "成本会计",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "资产/资金管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "资金专员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "统计员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "出纳员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会计助理/文员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务主管/总帐主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务顾问",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务分析经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "财务分析员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会计经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "会计/会计师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "人力资源",
		"subItems" : [ {
			"id" : "1",
			"name" : "人力资源总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "企业培训师/讲师",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "员工关系/企业文化/工会",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "绩效考核专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "绩效考核经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "薪酬福利专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "薪酬福利经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "招聘专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "招聘经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训经理/主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "人力资源专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "人力资源主管",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "人力资源经理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "人事信息系统(HRIS)管理",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "行政/后勤/文秘",
		"subItems" : [ {
			"id" : "1",
			"name" : "行政总监",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "行政经理/主管/办公室主任",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "行政专员/助理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "助理/秘书/文员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "前台/总机/接待",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "文档/资料管理",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "电脑操作/打字/录入员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "后勤人员",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "1",
	"name" : "兼职|实习|社工|其他",
	"subItems" : [ {
		"id" : "1",
		"name" : "实习生/培训生/储备干部",
		"subItems" : [ {
			"id" : "1",
			"name" : "实习生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "培训生",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "储备干部",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "志愿者/社会工作者",
		"subItems" : [ {
			"id" : "1",
			"name" : "志愿者/义工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "社会工作者/社工",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "兼职/临时",
		"subItems" : [ {
			"id" : "1",
			"name" : "兼职",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "临时",
			"subItems" : []
		}, {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	}, {
		"id" : "1",
		"name" : "其他",
		"subItems" : [ {
			"id" : "1",
			"name" : "其他",
			"subItems" : []
		} ]
	} ]
} ];//定义职能列表全局变量

var system_company_scale_items=[
	{"id":"010","name":"1-49人"},
	{"id":"020","name":"50-99人"},
	{"id":"030","name":"100-499人"},
	{"id":"040","name":"500-999人"},
	{"id":"050","name":"1000-2000人"},
	{"id":"070","name":"2000-5000人"},
	{"id":"080","name":"5000-10000人"},
	{"id":"090","name":"10000人以上"}
];//定义企业规模全局变量

var system_company_type_items=[
	{"id":"010","name":"外商独资/外企办事处"},
	{"id":"020","name":"中外合营(合资/合作)"},
	{"id":"030","name":"私营/民营企业"},
	{"id":"040","name":"国有企业"},
	{"id":"050","name":"国内上市公司"},
	{"id":"060","name":"政府机关／非盈利机构"},
	{"id":"070","name":"事业单位"},
	{"id":"080","name":"其他"}
];//定义企业类型全局变量

var system_company_location_items=[
	{"id":"010","name":"市辖区"},
	{"id":"020","name":"福田区"},
	{"id":"030","name":"罗湖区"},
	{"id":"040","name":"南山区"},
	{"id":"050","name":"盐田区"},
	{"id":"060","name":"宝安区"},
	{"id":"070","name":"龙岗区"},
	{"id":"080","name":"龙华区"},
	{"id":"090","name":"光明区"},
	{"id":"100","name":"坪山区"},
	{"id":"110","name":"大鹏区"}
];//定义深圳市企业地区全局变量

var system_company_tag_items=[
	{"id":"010","name":"年底双薪"},
	{"id":"020","name":"股票期权"},
	{"id":"030","name":"绩效奖金"},
	{"id":"040","name":"带薪年假"},
	{"id":"050","name":"交通补助"},
	{"id":"060","name":"通讯津贴"},
	{"id":"070","name":"午餐补助"},
	{"id":"080","name":"定期体检"},
	{"id":"090","name":"弹性工作"},
	{"id":"100","name":"年度旅游"},
	{"id":"110","name":"节日礼物"},
	{"id":"120","name":"免费班车"},
	{"id":"130","name":"领导好"},
	{"id":"140","name":"扁平管理"},
	{"id":"150","name":"管理规范"},
	{"id":"160","name":"技能培训"},
	{"id":"170","name":"岗位晋升"},
	{"id":"180","name":"五险一金"},
	{"id":"190","name":"团队聚餐"},
	{"id":"200","name":"生育补贴"},
	{"id":"210","name":"上市公司"},
	{"id":"220","name":"500强"},
	{"id":"230","name":"购房津贴"},
	{"id":"240","name":"车辆津贴"},
	{"id":"250","name":"子女福利"},
	{"id":"260","name":"公司提供专车"},
	{"id":"270","name":"外派津贴"}
];//定义企业标签全局变量

var system_job_tag_items=[
	{"id":"010","name":"五险一金"},
	{"id":"020","name":"年底双薪"},
	{"id":"030","name":"绩效奖金"},
	{"id":"040","name":"年终分红"},
	{"id":"050","name":"股票期权"},
	{"id":"060","name":"加班补助"},
	{"id":"070","name":"全勤奖"},
	{"id":"080","name":"包吃"},
	{"id":"090","name":"包住"},
	{"id":"100","name":"交通补助"},
	{"id":"110","name":"餐补"},
	{"id":"120","name":"房补"},
	{"id":"130","name":"通讯补助"},
	{"id":"140","name":"采暖补贴"},
	{"id":"150","name":"带薪年假"},
	{"id":"160","name":"弹性工作"}
];//定义职位标签全局变量

var system_job_location_items=[
	{"id":"010","name":"北京"},
	{"id":"020","name":"上海"},
	{"id":"030","name":"深圳"},
	{"id":"040","name":"广州"},
	{"id":"050","name":"西安"},
	{"id":"060","name":"南京"},
	{"id":"070","name":"武汉"},
	{"id":"080","name":"长沙"}
];//定义企业类型全局变量

var system_job_depart_items=[
	{"id":"010","name":"财务部"},
	{"id":"020","name":"人事部"},
	{"id":"030","name":"技术部"},
	{"id":"040","name":"行政部"},
	{"id":"050","name":"市场部"},
	{"id":"060","name":"销售部"},
	{"id":"070","name":"管理部"}
];//定义企业类型全局变量=======


var system_province_school_items = [ {
	"id" : "",
	"name" : "上海市",
	"subItems" : [ {
		"id" : "1",
		"name" : "复旦大学",
		"subItems" : []
	}, {
		"id" : "2",
		"name" : "同济大学",
		"subItems" : []
	}, {
		"id" : "3",
		"name" : "上海交通大学",
		"subItems" : []
	}, {
		"id" : "4",
		"name" : "华东理工大学",
		"subItems" : []
	}, {
		"id" : "5",
		"name" : "上海理工大学",
		"subItems" : []
	}, {
		"id" : "6",
		"name" : "上海海事大学",
		"subItems" : []
	}, {
		"id" : "7",
		"name" : "东华大学",
		"subItems" : []
	}, {
		"id" : "8",
		"name" : "上海电力学院",
		"subItems" : []
	}, {
		"id" : "9",
		"name" : "上海应用技术学院",
		"subItems" : []
	}, {
		"id" : "10",
		"name" : "上海海洋大学",
		"subItems" : []
	}, {
		"id" : "11",
		"name" : "上海中医药大学",
		"subItems" : []
	}, {
		"id" : "12",
		"name" : "华东师范大学",
		"subItems" : []
	}, {
		"id" : "13",
		"name" : "上海师范大学",
		"subItems" : []
	}, {
		"id" : "14",
		"name" : "上海外国语大学",
		"subItems" : []
	}, {
		"id" : "15",
		"name" : "上海财经大学",
		"subItems" : []
	}, {
		"id" : "16",
		"name" : "上海对外经贸大学",
		"subItems" : []
	}, {
		"id" : "17",
		"name" : "上海海关学院",
		"subItems" : []
	}, {
		"id" : "18",
		"name" : "华东政法大学",
		"subItems" : []
	}, {
		"id" : "19",
		"name" : "上海体育学院",
		"subItems" : []
	}, {
		"id" : "20",
		"name" : "上海音乐学院",
		"subItems" : []
	}, {
		"id" : "21",
		"name" : "上海戏剧学院",
		"subItems" : []
	}, {
		"id" : "22",
		"name" : "上海大学",
		"subItems" : []
	}, {
		"id" : "23",
		"name" : "上海工程技术大学",
		"subItems" : []
	}, {
		"id" : "24",
		"name" : "上海立信会计学院",
		"subItems" : []
	}, {
		"id" : "25",
		"name" : "上海电机学院",
		"subItems" : []
	}, {
		"id" : "26",
		"name" : "上海金融学院",
		"subItems" : []
	}, {
		"id" : "27",
		"name" : "上海杉达学院",
		"subItems" : []
	}, {
		"id" : "28",
		"name" : "上海政法学院",
		"subItems" : []
	}, {
		"id" : "29",
		"name" : "上海第二工业大学",
		"subItems" : []
	}, {
		"id" : "30",
		"name" : "上海商学院",
		"subItems" : []
	}, {
		"id" : "31",
		"name" : "上海建桥学院",
		"subItems" : []
	}, {
		"id" : "32",
		"name" : "上海兴伟学院",
		"subItems" : []
	}, {
		"id" : "33",
		"name" : "上海视觉艺术学院",
		"subItems" : []
	}, {
		"id" : "34",
		"name" : "上海科技大学",
		"subItems" : []
	}, {
		"id" : "35",
		"name" : "上海纽约大学",
		"subItems" : []
	}, {
		"id" : "36",
		"name" : "上海医疗器械高等专科学校",
		"subItems" : []
	}, {
		"id" : "37",
		"name" : "上海旅游高等专科学校",
		"subItems" : []
	}, {
		"id" : "38",
		"name" : "上海公安高等专科学校",
		"subItems" : []
	}, {
		"id" : "39",
		"name" : "上海东海职业技术学院",
		"subItems" : []
	}, {
		"id" : "40",
		"name" : "上海新侨职业技术学院",
		"subItems" : []
	}, {
		"id" : "41",
		"name" : "上海出版印刷高等专科学校",
		"subItems" : []
	}, {
		"id" : "42",
		"name" : "上海行健职业学院",
		"subItems" : []
	}, {
		"id" : "43",
		"name" : "上海城市管理职业技术学院",
		"subItems" : []
	}, {
		"id" : "44",
		"name" : "上海交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "45",
		"name" : "上海海事职业技术学院",
		"subItems" : []
	}, {
		"id" : "46",
		"name" : "上海电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "47",
		"name" : "上海震旦职业学院",
		"subItems" : []
	}, {
		"id" : "48",
		"name" : "上海民远职业技术学院",
		"subItems" : []
	}, {
		"id" : "49",
		"name" : "上海欧华职业技术学院",
		"subItems" : []
	}, {
		"id" : "50",
		"name" : "上海思博职业技术学院",
		"subItems" : []
	}, {
		"id" : "51",
		"name" : "上海立达职业技术学院",
		"subItems" : []
	}, {
		"id" : "52",
		"name" : "上海工艺美术职业学院",
		"subItems" : []
	}, {
		"id" : "53",
		"name" : "上海济光职业技术学院",
		"subItems" : []
	}, {
		"id" : "54",
		"name" : "上海工商外国语职业学院",
		"subItems" : []
	}, {
		"id" : "55",
		"name" : "上海科学技术职业学院",
		"subItems" : []
	}, {
		"id" : "56",
		"name" : "上海农林职业技术学院",
		"subItems" : []
	}, {
		"id" : "57",
		"name" : "上海邦德职业技术学院",
		"subItems" : []
	}, {
		"id" : "58",
		"name" : "上海中侨职业技术学院",
		"subItems" : []
	}, {
		"id" : "59",
		"name" : "上海建峰职业技术学院",
		"subItems" : []
	}, {
		"id" : "60",
		"name" : "上海电影艺术职业学院",
		"subItems" : []
	}, {
		"id" : "61",
		"name" : "上海中华职业技术学院",
		"subItems" : []
	}, {
		"id" : "62",
		"name" : "上海工会管理职业学院",
		"subItems" : []
	}, {
		"id" : "63",
		"name" : "上海医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "64",
		"name" : "上海体育职业学院",
		"subItems" : []
	}, {
		"id" : "65",
		"name" : "上海健康职业技术学院",
		"subItems" : []
	}, {
		"id" : "66",
		"name" : "上海民航职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "云南省",
	"subItems" : [ {
		"id" : "67",
		"name" : "云南大学",
		"subItems" : []
	}, {
		"id" : "68",
		"name" : "昆明理工大学",
		"subItems" : []
	}, {
		"id" : "69",
		"name" : "云南农业大学",
		"subItems" : []
	}, {
		"id" : "70",
		"name" : "西南林业大学",
		"subItems" : []
	}, {
		"id" : "71",
		"name" : "昆明医科大学",
		"subItems" : []
	}, {
		"id" : "72",
		"name" : "大理学院",
		"subItems" : []
	}, {
		"id" : "73",
		"name" : "云南中医学院",
		"subItems" : []
	}, {
		"id" : "74",
		"name" : "云南师范大学",
		"subItems" : []
	}, {
		"id" : "75",
		"name" : "昭通学院",
		"subItems" : []
	}, {
		"id" : "76",
		"name" : "曲靖师范学院",
		"subItems" : []
	}, {
		"id" : "77",
		"name" : "普洱学院",
		"subItems" : []
	}, {
		"id" : "78",
		"name" : "保山学院",
		"subItems" : []
	}, {
		"id" : "79",
		"name" : "红河学院",
		"subItems" : []
	}, {
		"id" : "80",
		"name" : "云南财经大学",
		"subItems" : []
	}, {
		"id" : "81",
		"name" : "云南艺术学院",
		"subItems" : []
	}, {
		"id" : "82",
		"name" : "云南民族大学",
		"subItems" : []
	}, {
		"id" : "83",
		"name" : "玉溪师范学院",
		"subItems" : []
	}, {
		"id" : "84",
		"name" : "楚雄师范学院",
		"subItems" : []
	}, {
		"id" : "85",
		"name" : "云南警官学院",
		"subItems" : []
	}, {
		"id" : "86",
		"name" : "昆明学院",
		"subItems" : []
	}, {
		"id" : "87",
		"name" : "文山学院",
		"subItems" : []
	}, {
		"id" : "88",
		"name" : "云南经济管理学院",
		"subItems" : []
	}, {
		"id" : "89",
		"name" : "云南工商学院",
		"subItems" : []
	}, {
		"id" : "90",
		"name" : "昆明冶金高等专科学校",
		"subItems" : []
	}, {
		"id" : "91",
		"name" : "云南国土资源职业学院",
		"subItems" : []
	}, {
		"id" : "92",
		"name" : "云南交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "93",
		"name" : "昆明工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "94",
		"name" : "云南农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "95",
		"name" : "云南司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "96",
		"name" : "云南文化艺术职业学院",
		"subItems" : []
	}, {
		"id" : "97",
		"name" : "云南体育运动职业技术学院",
		"subItems" : []
	}, {
		"id" : "98",
		"name" : "云南科技信息职业学院",
		"subItems" : []
	}, {
		"id" : "99",
		"name" : "西双版纳职业技术学院",
		"subItems" : []
	}, {
		"id" : "100",
		"name" : "昆明艺术职业学院",
		"subItems" : []
	}, {
		"id" : "101",
		"name" : "玉溪农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "102",
		"name" : "云南能源职业技术学院",
		"subItems" : []
	}, {
		"id" : "103",
		"name" : "云南热带作物职业学院",
		"subItems" : []
	}, {
		"id" : "104",
		"name" : "云南国防工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "105",
		"name" : "云南机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "106",
		"name" : "云南林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "107",
		"name" : "云南城市建设职业学院",
		"subItems" : []
	}, {
		"id" : "108",
		"name" : "云南工程职业学院",
		"subItems" : []
	}, {
		"id" : "109",
		"name" : "曲靖医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "110",
		"name" : "楚雄医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "111",
		"name" : "保山中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "112",
		"name" : "丽江师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "113",
		"name" : "德宏师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "114",
		"name" : "云南新兴职业学院",
		"subItems" : []
	}, {
		"id" : "115",
		"name" : "临沧师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "116",
		"name" : "云南锡业职业技术学院",
		"subItems" : []
	}, {
		"id" : "117",
		"name" : "云南经贸外事职业学院",
		"subItems" : []
	}, {
		"id" : "118",
		"name" : "云南三鑫职业技术学院",
		"subItems" : []
	}, {
		"id" : "119",
		"name" : "德宏职业学院",
		"subItems" : []
	}, {
		"id" : "120",
		"name" : "云南商务职业学院",
		"subItems" : []
	}, {
		"id" : "121",
		"name" : "昆明卫生职业学院",
		"subItems" : []
	}, {
		"id" : "122",
		"name" : "云南现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "123",
		"name" : "云南旅游职业学院",
		"subItems" : []
	}, {
		"id" : "124",
		"name" : "红河卫生职业学院",
		"subItems" : []
	}, {
		"id" : "125",
		"name" : "云南外事外语职业学院",
		"subItems" : []
	}, {
		"id" : "126",
		"name" : "大理农林职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "内蒙古",
	"subItems" : [ {
		"id" : "127",
		"name" : "内蒙古大学",
		"subItems" : []
	}, {
		"id" : "128",
		"name" : "内蒙古科技大学",
		"subItems" : []
	}, {
		"id" : "129",
		"name" : "内蒙古工业大学",
		"subItems" : []
	}, {
		"id" : "130",
		"name" : "内蒙古农业大学",
		"subItems" : []
	}, {
		"id" : "131",
		"name" : "内蒙古医科大学",
		"subItems" : []
	}, {
		"id" : "132",
		"name" : "内蒙古师范大学",
		"subItems" : []
	}, {
		"id" : "133",
		"name" : "内蒙古民族大学",
		"subItems" : []
	}, {
		"id" : "134",
		"name" : "赤峰学院",
		"subItems" : []
	}, {
		"id" : "135",
		"name" : "内蒙古财经大学",
		"subItems" : []
	}, {
		"id" : "136",
		"name" : "呼伦贝尔学院",
		"subItems" : []
	}, {
		"id" : "137",
		"name" : "集宁师范学院",
		"subItems" : []
	}, {
		"id" : "138",
		"name" : "河套学院",
		"subItems" : []
	}, {
		"id" : "139",
		"name" : "呼和浩特民族学院",
		"subItems" : []
	}, {
		"id" : "140",
		"name" : "内蒙古建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "141",
		"name" : "内蒙古丰州职业学院",
		"subItems" : []
	}, {
		"id" : "142",
		"name" : "包头职业技术学院",
		"subItems" : []
	}, {
		"id" : "143",
		"name" : "兴安职业技术学院",
		"subItems" : []
	}, {
		"id" : "144",
		"name" : "呼和浩特职业学院",
		"subItems" : []
	}, {
		"id" : "146",
		"name" : "包头轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "148",
		"name" : "内蒙古电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "149",
		"name" : "内蒙古机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "150",
		"name" : "内蒙古化工职业学院",
		"subItems" : []
	}, {
		"id" : "151",
		"name" : "内蒙古商贸职业学院",
		"subItems" : []
	}, {
		"id" : "152",
		"name" : "锡林郭勒职业学院",
		"subItems" : []
	}, {
		"id" : "153",
		"name" : "内蒙古警察职业学院",
		"subItems" : []
	}, {
		"id" : "154",
		"name" : "内蒙古体育职业学院",
		"subItems" : []
	}, {
		"id" : "155",
		"name" : "乌兰察布职业学院",
		"subItems" : []
	}, {
		"id" : "156",
		"name" : "通辽职业学院",
		"subItems" : []
	}, {
		"id" : "157",
		"name" : "科尔沁艺术职业学院",
		"subItems" : []
	}, {
		"id" : "158",
		"name" : "内蒙古交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "159",
		"name" : "包头钢铁职业技术学院",
		"subItems" : []
	}, {
		"id" : "160",
		"name" : "乌海职业技术学院",
		"subItems" : []
	}, {
		"id" : "161",
		"name" : "内蒙古科技职业学院",
		"subItems" : []
	}, {
		"id" : "162",
		"name" : "内蒙古北方职业技术学院",
		"subItems" : []
	}, {
		"id" : "163",
		"name" : "赤峰职业技术学院",
		"subItems" : []
	}, {
		"id" : "164",
		"name" : "内蒙古经贸外语职业学院",
		"subItems" : []
	}, {
		"id" : "165",
		"name" : "包头铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "166",
		"name" : "乌兰察布医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "167",
		"name" : "鄂尔多斯职业学院",
		"subItems" : []
	}, {
		"id" : "168",
		"name" : "内蒙古工业职业学院",
		"subItems" : []
	}, {
		"id" : "169",
		"name" : "呼伦贝尔职业技术学院",
		"subItems" : []
	}, {
		"id" : "170",
		"name" : "满洲里俄语职业学院",
		"subItems" : []
	}, {
		"id" : "171",
		"name" : "内蒙古能源职业学院",
		"subItems" : []
	}, {
		"id" : "172",
		"name" : "赤峰工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "173",
		"name" : "阿拉善职业技术学院",
		"subItems" : []
	}, {
		"id" : "174",
		"name" : "内蒙古美术职业学院",
		"subItems" : []
	}, {
		"id" : "175",
		"name" : "内蒙古民族幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "176",
		"name" : "鄂尔多斯生态环境职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "北京市",
	"subItems" : [ {
		"id" : "177",
		"name" : "北京大学",
		"subItems" : []
	}, {
		"id" : "178",
		"name" : "中国人民大学",
		"subItems" : []
	}, {
		"id" : "179",
		"name" : "清华大学",
		"subItems" : []
	}, {
		"id" : "180",
		"name" : "北京交通大学",
		"subItems" : []
	}, {
		"id" : "181",
		"name" : "北京工业大学",
		"subItems" : []
	}, {
		"id" : "182",
		"name" : "北京航空航天大学",
		"subItems" : []
	}, {
		"id" : "183",
		"name" : "北京理工大学",
		"subItems" : []
	}, {
		"id" : "184",
		"name" : "北京科技大学",
		"subItems" : []
	}, {
		"id" : "185",
		"name" : "北方工业大学",
		"subItems" : []
	}, {
		"id" : "186",
		"name" : "北京化工大学",
		"subItems" : []
	}, {
		"id" : "187",
		"name" : "北京工商大学",
		"subItems" : []
	}, {
		"id" : "188",
		"name" : "北京服装学院",
		"subItems" : []
	}, {
		"id" : "189",
		"name" : "北京邮电大学",
		"subItems" : []
	}, {
		"id" : "190",
		"name" : "北京印刷学院",
		"subItems" : []
	}, {
		"id" : "191",
		"name" : "北京建筑大学",
		"subItems" : []
	}, {
		"id" : "192",
		"name" : "北京石油化工学院",
		"subItems" : []
	}, {
		"id" : "193",
		"name" : "中国农业大学",
		"subItems" : []
	}, {
		"id" : "194",
		"name" : "北京农学院",
		"subItems" : []
	}, {
		"id" : "195",
		"name" : "北京林业大学",
		"subItems" : []
	}, {
		"id" : "196",
		"name" : "北京协和医学院",
		"subItems" : []
	}, {
		"id" : "197",
		"name" : "首都医科大学",
		"subItems" : []
	}, {
		"id" : "198",
		"name" : "北京中医药大学",
		"subItems" : []
	}, {
		"id" : "199",
		"name" : "北京师范大学",
		"subItems" : []
	}, {
		"id" : "200",
		"name" : "首都师范大学",
		"subItems" : []
	}, {
		"id" : "201",
		"name" : "首都体育学院",
		"subItems" : []
	}, {
		"id" : "202",
		"name" : "北京外国语大学",
		"subItems" : []
	}, {
		"id" : "203",
		"name" : "北京第二外国语学院",
		"subItems" : []
	}, {
		"id" : "204",
		"name" : "北京语言大学",
		"subItems" : []
	}, {
		"id" : "205",
		"name" : "中国传媒大学",
		"subItems" : []
	}, {
		"id" : "206",
		"name" : "中央财经大学",
		"subItems" : []
	}, {
		"id" : "207",
		"name" : "对外经济贸易大学",
		"subItems" : []
	}, {
		"id" : "208",
		"name" : "北京物资学院",
		"subItems" : []
	}, {
		"id" : "209",
		"name" : "首都经济贸易大学",
		"subItems" : []
	}, {
		"id" : "210",
		"name" : "外交学院",
		"subItems" : []
	}, {
		"id" : "211",
		"name" : "中国人民公安大学",
		"subItems" : []
	}, {
		"id" : "212",
		"name" : "国际关系学院",
		"subItems" : []
	}, {
		"id" : "213",
		"name" : "北京体育大学",
		"subItems" : []
	}, {
		"id" : "214",
		"name" : "中央音乐学院",
		"subItems" : []
	}, {
		"id" : "215",
		"name" : "中国音乐学院",
		"subItems" : []
	}, {
		"id" : "216",
		"name" : "中央美术学院",
		"subItems" : []
	}, {
		"id" : "217",
		"name" : "中央戏剧学院",
		"subItems" : []
	}, {
		"id" : "218",
		"name" : "中国戏曲学院",
		"subItems" : []
	}, {
		"id" : "219",
		"name" : "北京电影学院",
		"subItems" : []
	}, {
		"id" : "220",
		"name" : "北京舞蹈学院",
		"subItems" : []
	}, {
		"id" : "221",
		"name" : "中央民族大学",
		"subItems" : []
	}, {
		"id" : "222",
		"name" : "中国政法大学",
		"subItems" : []
	}, {
		"id" : "223",
		"name" : "华北电力大学",
		"subItems" : []
	}, {
		"id" : "224",
		"name" : "中华女子学院",
		"subItems" : []
	}, {
		"id" : "225",
		"name" : "北京信息科技大学",
		"subItems" : []
	}, {
		"id" : "226",
		"name" : "中国石油大学",
		"subItems" : []
	}, {
		"id" : "227",
		"name" : "北京联合大学",
		"subItems" : []
	}, {
		"id" : "228",
		"name" : "北京城市学院",
		"subItems" : []
	}, {
		"id" : "229",
		"name" : "中国青年政治学院",
		"subItems" : []
	}, {
		"id" : "230",
		"name" : "首钢工学院",
		"subItems" : []
	}, {
		"id" : "231",
		"name" : "中国劳动关系学院",
		"subItems" : []
	}, {
		"id" : "232",
		"name" : "北京吉利学院",
		"subItems" : []
	}, {
		"id" : "233",
		"name" : "北京警察学院",
		"subItems" : []
	}, {
		"id" : "234",
		"name" : "中国科学院大学",
		"subItems" : []
	}, {
		"id" : "235",
		"name" : "北京工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "236",
		"name" : "北京信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "237",
		"name" : "北京电子科技职业学院",
		"subItems" : []
	}, {
		"id" : "238",
		"name" : "北京京北职业技术学院",
		"subItems" : []
	}, {
		"id" : "239",
		"name" : "北京交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "240",
		"name" : "北京青年政治学院",
		"subItems" : []
	}, {
		"id" : "241",
		"name" : "北京农业职业学院",
		"subItems" : []
	}, {
		"id" : "242",
		"name" : "北京政法职业学院",
		"subItems" : []
	}, {
		"id" : "243",
		"name" : "北京财贸职业学院",
		"subItems" : []
	}, {
		"id" : "244",
		"name" : "北京北大方正软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "245",
		"name" : "北京经贸职业学院",
		"subItems" : []
	}, {
		"id" : "246",
		"name" : "北京经济技术职业学院",
		"subItems" : []
	}, {
		"id" : "247",
		"name" : "北京戏曲艺术职业学院",
		"subItems" : []
	}, {
		"id" : "248",
		"name" : "北京汇佳职业学院",
		"subItems" : []
	}, {
		"id" : "249",
		"name" : "北京现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "250",
		"name" : "北京科技经营管理学院",
		"subItems" : []
	}, {
		"id" : "251",
		"name" : "北京科技职业学院",
		"subItems" : []
	}, {
		"id" : "252",
		"name" : "北京培黎职业学院",
		"subItems" : []
	}, {
		"id" : "253",
		"name" : "北京经济管理职业学院",
		"subItems" : []
	}, {
		"id" : "254",
		"name" : "北京劳动保障职业学院",
		"subItems" : []
	}, {
		"id" : "255",
		"name" : "北京社会管理职业学院",
		"subItems" : []
	}, {
		"id" : "256",
		"name" : "北京艺术传媒职业学院",
		"subItems" : []
	}, {
		"id" : "257",
		"name" : "北京体育职业学院",
		"subItems" : []
	}, {
		"id" : "258",
		"name" : "北京交通运输职业学院",
		"subItems" : []
	}, {
		"id" : "259",
		"name" : "北京卫生职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "吉林省",
	"subItems" : [ {
		"id" : "260",
		"name" : "吉林大学",
		"subItems" : []
	}, {
		"id" : "261",
		"name" : "延边大学",
		"subItems" : []
	}, {
		"id" : "262",
		"name" : "长春理工大学",
		"subItems" : []
	}, {
		"id" : "263",
		"name" : "东北电力大学",
		"subItems" : []
	}, {
		"id" : "264",
		"name" : "长春工业大学",
		"subItems" : []
	}, {
		"id" : "265",
		"name" : "吉林建筑大学",
		"subItems" : []
	}, {
		"id" : "266",
		"name" : "吉林化工学院",
		"subItems" : []
	}, {
		"id" : "267",
		"name" : "吉林农业大学",
		"subItems" : []
	}, {
		"id" : "268",
		"name" : "长春中医药大学",
		"subItems" : []
	}, {
		"id" : "269",
		"name" : "东北师范大学",
		"subItems" : []
	}, {
		"id" : "270",
		"name" : "北华大学",
		"subItems" : []
	}, {
		"id" : "271",
		"name" : "通化师范学院",
		"subItems" : []
	}, {
		"id" : "272",
		"name" : "吉林师范大学",
		"subItems" : []
	}, {
		"id" : "273",
		"name" : "吉林工程技术师范学院",
		"subItems" : []
	}, {
		"id" : "274",
		"name" : "长春师范大学",
		"subItems" : []
	}, {
		"id" : "275",
		"name" : "白城师范学院",
		"subItems" : []
	}, {
		"id" : "276",
		"name" : "吉林财经大学",
		"subItems" : []
	}, {
		"id" : "277",
		"name" : "吉林体育学院",
		"subItems" : []
	}, {
		"id" : "278",
		"name" : "吉林艺术学院",
		"subItems" : []
	}, {
		"id" : "279",
		"name" : "吉林华桥外国语学院",
		"subItems" : []
	}, {
		"id" : "280",
		"name" : "吉林工商学院",
		"subItems" : []
	}, {
		"id" : "281",
		"name" : "长春工程学院",
		"subItems" : []
	}, {
		"id" : "282",
		"name" : "吉林农业科技学院",
		"subItems" : []
	}, {
		"id" : "283",
		"name" : "吉林警察学院",
		"subItems" : []
	}, {
		"id" : "284",
		"name" : "长春大学",
		"subItems" : []
	}, {
		"id" : "285",
		"name" : "长春光华学院",
		"subItems" : []
	}, {
		"id" : "286",
		"name" : "长春财经学院",
		"subItems" : []
	}, {
		"id" : "287",
		"name" : "长春建筑学院",
		"subItems" : []
	}, {
		"id" : "288",
		"name" : "长春科技学院",
		"subItems" : []
	}, {
		"id" : "289",
		"name" : "吉林动画学院",
		"subItems" : []
	}, {
		"id" : "290",
		"name" : "吉林医药学院",
		"subItems" : []
	}, {
		"id" : "291",
		"name" : "辽源职业技术学院",
		"subItems" : []
	}, {
		"id" : "292",
		"name" : "四平职业大学",
		"subItems" : []
	}, {
		"id" : "293",
		"name" : "长春汽车工业高等专科学校",
		"subItems" : []
	}, {
		"id" : "294",
		"name" : "长春金融高等专科学校",
		"subItems" : []
	}, {
		"id" : "295",
		"name" : "长春医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "296",
		"name" : "吉林交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "297",
		"name" : "长春东方职业学院",
		"subItems" : []
	}, {
		"id" : "298",
		"name" : "吉林司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "299",
		"name" : "吉林电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "300",
		"name" : "吉林工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "301",
		"name" : "吉林工程职业学院",
		"subItems" : []
	}, {
		"id" : "302",
		"name" : "长春职业技术学院",
		"subItems" : []
	}, {
		"id" : "303",
		"name" : "白城医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "304",
		"name" : "长春信息技术职业学院",
		"subItems" : []
	}, {
		"id" : "305",
		"name" : "松原职业技术学院",
		"subItems" : []
	}, {
		"id" : "306",
		"name" : "吉林铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "307",
		"name" : "白城职业技术学院",
		"subItems" : []
	}, {
		"id" : "308",
		"name" : "长白山职业技术学院",
		"subItems" : []
	}, {
		"id" : "309",
		"name" : "吉林科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "310",
		"name" : "延边职业技术学院",
		"subItems" : []
	}, {
		"id" : "311",
		"name" : "吉林城市职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "四川省",
	"subItems" : [ {
		"id" : "312",
		"name" : "四川大学",
		"subItems" : []
	}, {
		"id" : "313",
		"name" : "西南交通大学",
		"subItems" : []
	}, {
		"id" : "314",
		"name" : "电子科技大学",
		"subItems" : []
	}, {
		"id" : "315",
		"name" : "西南财经大学",
		"subItems" : []
	}, {
		"id" : "316",
		"name" : "西南石油大学",
		"subItems" : []
	}, {
		"id" : "317",
		"name" : "成都理工大学",
		"subItems" : []
	}, {
		"id" : "318",
		"name" : "西南科技大学",
		"subItems" : []
	}, {
		"id" : "319",
		"name" : "成都信息工程学院",
		"subItems" : []
	}, {
		"id" : "320",
		"name" : "四川理工学院",
		"subItems" : []
	}, {
		"id" : "321",
		"name" : "西华大学",
		"subItems" : []
	}, {
		"id" : "322",
		"name" : "中国民用航空飞行学院",
		"subItems" : []
	}, {
		"id" : "323",
		"name" : "四川农业大学",
		"subItems" : []
	}, {
		"id" : "324",
		"name" : "西昌学院",
		"subItems" : []
	}, {
		"id" : "325",
		"name" : "泸州医学院",
		"subItems" : []
	}, {
		"id" : "326",
		"name" : "成都中医药大学",
		"subItems" : []
	}, {
		"id" : "327",
		"name" : "川北医学院",
		"subItems" : []
	}, {
		"id" : "328",
		"name" : "四川师范大学",
		"subItems" : []
	}, {
		"id" : "329",
		"name" : "西华师范大学",
		"subItems" : []
	}, {
		"id" : "330",
		"name" : "绵阳师范学院",
		"subItems" : []
	}, {
		"id" : "331",
		"name" : "内江师范学院",
		"subItems" : []
	}, {
		"id" : "332",
		"name" : "宜宾学院",
		"subItems" : []
	}, {
		"id" : "333",
		"name" : "四川文理学院",
		"subItems" : []
	}, {
		"id" : "334",
		"name" : "乐山师范学院",
		"subItems" : []
	}, {
		"id" : "335",
		"name" : "成都体育学院",
		"subItems" : []
	}, {
		"id" : "336",
		"name" : "四川音乐学院",
		"subItems" : []
	}, {
		"id" : "337",
		"name" : "西南民族大学",
		"subItems" : []
	}, {
		"id" : "338",
		"name" : "成都学院",
		"subItems" : []
	}, {
		"id" : "339",
		"name" : "成都工业学院",
		"subItems" : []
	}, {
		"id" : "340",
		"name" : "攀枝花学院",
		"subItems" : []
	}, {
		"id" : "341",
		"name" : "四川旅游学院",
		"subItems" : []
	}, {
		"id" : "342",
		"name" : "四川民族学院",
		"subItems" : []
	}, {
		"id" : "343",
		"name" : "四川警察学院",
		"subItems" : []
	}, {
		"id" : "344",
		"name" : "成都东软学院",
		"subItems" : []
	}, {
		"id" : "345",
		"name" : "四川传媒学院",
		"subItems" : []
	}, {
		"id" : "346",
		"name" : "成都文理学院",
		"subItems" : []
	}, {
		"id" : "347",
		"name" : "成都医学院",
		"subItems" : []
	}, {
		"id" : "348",
		"name" : "四川工业科技学院",
		"subItems" : []
	}, {
		"id" : "349",
		"name" : "四川文化艺术学院",
		"subItems" : []
	}, {
		"id" : "350",
		"name" : "成都师范学院",
		"subItems" : []
	}, {
		"id" : "351",
		"name" : "四川电影电视学院",
		"subItems" : []
	}, {
		"id" : "352",
		"name" : "阿坝师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "353",
		"name" : "成都纺织高等专科学校",
		"subItems" : []
	}, {
		"id" : "354",
		"name" : "民办四川天一学院",
		"subItems" : []
	}, {
		"id" : "355",
		"name" : "成都航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "356",
		"name" : "四川电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "357",
		"name" : "成都职业技术学院",
		"subItems" : []
	}, {
		"id" : "358",
		"name" : "四川化工职业技术学院",
		"subItems" : []
	}, {
		"id" : "359",
		"name" : "四川水利职业技术学院",
		"subItems" : []
	}, {
		"id" : "360",
		"name" : "南充职业技术学院",
		"subItems" : []
	}, {
		"id" : "361",
		"name" : "内江职业技术学院",
		"subItems" : []
	}, {
		"id" : "362",
		"name" : "四川航天职业技术学院",
		"subItems" : []
	}, {
		"id" : "363",
		"name" : "四川邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "364",
		"name" : "四川机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "365",
		"name" : "绵阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "366",
		"name" : "四川交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "367",
		"name" : "四川工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "368",
		"name" : "四川工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "369",
		"name" : "四川建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "370",
		"name" : "达州职业技术学院",
		"subItems" : []
	}, {
		"id" : "371",
		"name" : "四川托普信息技术职业学院",
		"subItems" : []
	}, {
		"id" : "372",
		"name" : "四川国际标榜职业学院",
		"subItems" : []
	}, {
		"id" : "373",
		"name" : "成都农业科技职业学院",
		"subItems" : []
	}, {
		"id" : "374",
		"name" : "宜宾职业技术学院",
		"subItems" : []
	}, {
		"id" : "375",
		"name" : "泸州职业技术学院",
		"subItems" : []
	}, {
		"id" : "376",
		"name" : "眉山职业技术学院",
		"subItems" : []
	}, {
		"id" : "377",
		"name" : "成都艺术职业学院",
		"subItems" : []
	}, {
		"id" : "378",
		"name" : "四川职业技术学院",
		"subItems" : []
	}, {
		"id" : "379",
		"name" : "乐山职业技术学院",
		"subItems" : []
	}, {
		"id" : "380",
		"name" : "雅安职业技术学院",
		"subItems" : []
	}, {
		"id" : "381",
		"name" : "四川商务职业学院",
		"subItems" : []
	}, {
		"id" : "382",
		"name" : "四川司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "383",
		"name" : "广安职业技术学院",
		"subItems" : []
	}, {
		"id" : "384",
		"name" : "四川信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "385",
		"name" : "四川文化传媒职业学院",
		"subItems" : []
	}, {
		"id" : "386",
		"name" : "四川华新现代职业学院",
		"subItems" : []
	}, {
		"id" : "387",
		"name" : "四川管理职业学院",
		"subItems" : []
	}, {
		"id" : "388",
		"name" : "四川艺术职业学院",
		"subItems" : []
	}, {
		"id" : "389",
		"name" : "四川中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "390",
		"name" : "四川科技职业学院",
		"subItems" : []
	}, {
		"id" : "391",
		"name" : "四川文化产业职业学院",
		"subItems" : []
	}, {
		"id" : "392",
		"name" : "四川财经职业学院",
		"subItems" : []
	}, {
		"id" : "393",
		"name" : "四川城市职业学院",
		"subItems" : []
	}, {
		"id" : "394",
		"name" : "四川现代职业学院",
		"subItems" : []
	}, {
		"id" : "395",
		"name" : "四川幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "396",
		"name" : "四川长江职业学院",
		"subItems" : []
	}, {
		"id" : "397",
		"name" : "四川三河职业学院",
		"subItems" : []
	}, {
		"id" : "398",
		"name" : "川北幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "399",
		"name" : "四川卫生康复职业学院",
		"subItems" : []
	}, {
		"id" : "400",
		"name" : "四川汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "401",
		"name" : "巴中职业技术学院",
		"subItems" : []
	}, {
		"id" : "402",
		"name" : "四川希望汽车职业学院",
		"subItems" : []
	}, {
		"id" : "403",
		"name" : "四川电子机械职业技术学院",
		"subItems" : []
	}, {
		"id" : "404",
		"name" : "四川文轩职业学院",
		"subItems" : []
	}, {
		"id" : "405",
		"name" : "川南幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "406",
		"name" : "四川护理职业学院",
		"subItems" : []
	}, {
		"id" : "407",
		"name" : "成都工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "408",
		"name" : "四川西南航空职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "天津市",
	"subItems" : [ {
		"id" : "409",
		"name" : "南开大学",
		"subItems" : []
	}, {
		"id" : "410",
		"name" : "天津大学",
		"subItems" : []
	}, {
		"id" : "411",
		"name" : "天津科技大学",
		"subItems" : []
	}, {
		"id" : "412",
		"name" : "天津工业大学",
		"subItems" : []
	}, {
		"id" : "413",
		"name" : "中国民航大学",
		"subItems" : []
	}, {
		"id" : "414",
		"name" : "天津理工大学",
		"subItems" : []
	}, {
		"id" : "415",
		"name" : "天津农学院",
		"subItems" : []
	}, {
		"id" : "416",
		"name" : "天津医科大学",
		"subItems" : []
	}, {
		"id" : "417",
		"name" : "天津中医药大学",
		"subItems" : []
	}, {
		"id" : "418",
		"name" : "天津师范大学",
		"subItems" : []
	}, {
		"id" : "419",
		"name" : "天津职业技术师范大学",
		"subItems" : []
	}, {
		"id" : "420",
		"name" : "天津外国语大学",
		"subItems" : []
	}, {
		"id" : "421",
		"name" : "天津商业大学",
		"subItems" : []
	}, {
		"id" : "422",
		"name" : "天津财经大学",
		"subItems" : []
	}, {
		"id" : "423",
		"name" : "天津体育学院",
		"subItems" : []
	}, {
		"id" : "424",
		"name" : "天津音乐学院",
		"subItems" : []
	}, {
		"id" : "425",
		"name" : "天津美术学院",
		"subItems" : []
	}, {
		"id" : "426",
		"name" : "天津城建大学",
		"subItems" : []
	}, {
		"id" : "427",
		"name" : "天津天狮学院",
		"subItems" : []
	}, {
		"id" : "428",
		"name" : "天津市职业大学",
		"subItems" : []
	}, {
		"id" : "429",
		"name" : "天津中德职业技术学院",
		"subItems" : []
	}, {
		"id" : "430",
		"name" : "天津滨海职业学院",
		"subItems" : []
	}, {
		"id" : "431",
		"name" : "天津工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "432",
		"name" : "天津青年职业学院",
		"subItems" : []
	}, {
		"id" : "433",
		"name" : "天津渤海职业技术学院",
		"subItems" : []
	}, {
		"id" : "434",
		"name" : "天津电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "435",
		"name" : "天津机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "436",
		"name" : "天津现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "437",
		"name" : "天津公安警官职业学院",
		"subItems" : []
	}, {
		"id" : "438",
		"name" : "天津轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "439",
		"name" : "天津商务职业学院",
		"subItems" : []
	}, {
		"id" : "440",
		"name" : "天津国土资源和房屋职业学院",
		"subItems" : []
	}, {
		"id" : "441",
		"name" : "天津医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "442",
		"name" : "天津开发区职业技术学院",
		"subItems" : []
	}, {
		"id" : "443",
		"name" : "天津艺术职业学院",
		"subItems" : []
	}, {
		"id" : "444",
		"name" : "天津交通职业学院",
		"subItems" : []
	}, {
		"id" : "445",
		"name" : "天津冶金职业技术学院",
		"subItems" : []
	}, {
		"id" : "446",
		"name" : "天津石油职业技术学院",
		"subItems" : []
	}, {
		"id" : "447",
		"name" : "天津城市职业学院",
		"subItems" : []
	}, {
		"id" : "448",
		"name" : "天津铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "449",
		"name" : "天津工艺美术职业学院",
		"subItems" : []
	}, {
		"id" : "450",
		"name" : "天津城市建设管理职业技术学院",
		"subItems" : []
	}, {
		"id" : "451",
		"name" : "天津生物工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "452",
		"name" : "天津海运职业学院",
		"subItems" : []
	}, {
		"id" : "453",
		"name" : "天津广播影视职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "宁夏回族自治区",
	"subItems" : [ {
		"id" : "454",
		"name" : "北方民族大学",
		"subItems" : []
	}, {
		"id" : "455",
		"name" : "宁夏大学",
		"subItems" : []
	}, {
		"id" : "456",
		"name" : "宁夏医科大学",
		"subItems" : []
	}, {
		"id" : "457",
		"name" : "宁夏师范学院",
		"subItems" : []
	}, {
		"id" : "458",
		"name" : "宁夏理工学院",
		"subItems" : []
	}, {
		"id" : "459",
		"name" : "银川能源学院",
		"subItems" : []
	}, {
		"id" : "460",
		"name" : "宁夏民族职业技术学院",
		"subItems" : []
	}, {
		"id" : "461",
		"name" : "宁夏工业职业学院",
		"subItems" : []
	}, {
		"id" : "462",
		"name" : "宁夏职业技术学院",
		"subItems" : []
	}, {
		"id" : "463",
		"name" : "宁夏工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "464",
		"name" : "宁夏财经职业技术学院",
		"subItems" : []
	}, {
		"id" : "465",
		"name" : "宁夏司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "466",
		"name" : "宁夏建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "467",
		"name" : "宁夏防沙治沙职业技术学院",
		"subItems" : []
	}, {
		"id" : "468",
		"name" : "宁夏幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "469",
		"name" : "宁夏艺术职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "安徽省",
	"subItems" : [ {
		"id" : "470",
		"name" : "合肥工业大学",
		"subItems" : []
	}, {
		"id" : "471",
		"name" : "中国科学技术大学",
		"subItems" : []
	}, {
		"id" : "472",
		"name" : "安徽大学",
		"subItems" : []
	}, {
		"id" : "473",
		"name" : "安徽工业大学",
		"subItems" : []
	}, {
		"id" : "474",
		"name" : "安徽理工大学",
		"subItems" : []
	}, {
		"id" : "475",
		"name" : "安徽工程大学",
		"subItems" : []
	}, {
		"id" : "476",
		"name" : "安徽农业大学",
		"subItems" : []
	}, {
		"id" : "477",
		"name" : "安徽医科大学",
		"subItems" : []
	}, {
		"id" : "478",
		"name" : "蚌埠医学院",
		"subItems" : []
	}, {
		"id" : "479",
		"name" : "皖南医学院",
		"subItems" : []
	}, {
		"id" : "480",
		"name" : "安徽中医药大学",
		"subItems" : []
	}, {
		"id" : "481",
		"name" : "安徽师范大学",
		"subItems" : []
	}, {
		"id" : "482",
		"name" : "阜阳师范学院",
		"subItems" : []
	}, {
		"id" : "483",
		"name" : "安庆师范学院",
		"subItems" : []
	}, {
		"id" : "484",
		"name" : "淮北师范大学",
		"subItems" : []
	}, {
		"id" : "485",
		"name" : "黄山学院",
		"subItems" : []
	}, {
		"id" : "486",
		"name" : "皖西学院",
		"subItems" : []
	}, {
		"id" : "487",
		"name" : "滁州学院",
		"subItems" : []
	}, {
		"id" : "488",
		"name" : "安徽财经大学",
		"subItems" : []
	}, {
		"id" : "489",
		"name" : "宿州学院",
		"subItems" : []
	}, {
		"id" : "490",
		"name" : "巢湖学院",
		"subItems" : []
	}, {
		"id" : "491",
		"name" : "淮南师范学院",
		"subItems" : []
	}, {
		"id" : "492",
		"name" : "铜陵学院",
		"subItems" : []
	}, {
		"id" : "493",
		"name" : "安徽建筑大学",
		"subItems" : []
	}, {
		"id" : "494",
		"name" : "安徽科技学院",
		"subItems" : []
	}, {
		"id" : "495",
		"name" : "安徽三联学院",
		"subItems" : []
	}, {
		"id" : "496",
		"name" : "合肥学院",
		"subItems" : []
	}, {
		"id" : "497",
		"name" : "蚌埠学院",
		"subItems" : []
	}, {
		"id" : "498",
		"name" : "池州学院",
		"subItems" : []
	}, {
		"id" : "499",
		"name" : "安徽新华学院",
		"subItems" : []
	}, {
		"id" : "500",
		"name" : "安徽文达信息工程学院",
		"subItems" : []
	}, {
		"id" : "501",
		"name" : "安徽外国语学院",
		"subItems" : []
	}, {
		"id" : "502",
		"name" : "合肥师范学院",
		"subItems" : []
	}, {
		"id" : "503",
		"name" : "安徽职业技术学院",
		"subItems" : []
	}, {
		"id" : "504",
		"name" : "淮北职业技术学院",
		"subItems" : []
	}, {
		"id" : "505",
		"name" : "芜湖职业技术学院",
		"subItems" : []
	}, {
		"id" : "506",
		"name" : "淮南联合大学",
		"subItems" : []
	}, {
		"id" : "507",
		"name" : "安徽商贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "508",
		"name" : "安徽水利水电职业技术学院",
		"subItems" : []
	}, {
		"id" : "509",
		"name" : "阜阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "510",
		"name" : "铜陵职业技术学院",
		"subItems" : []
	}, {
		"id" : "511",
		"name" : "民办万博科技职业学院",
		"subItems" : []
	}, {
		"id" : "512",
		"name" : "安徽警官职业学院",
		"subItems" : []
	}, {
		"id" : "513",
		"name" : "淮南职业技术学院",
		"subItems" : []
	}, {
		"id" : "514",
		"name" : "安徽工业经济职业技术学院",
		"subItems" : []
	}, {
		"id" : "515",
		"name" : "合肥通用职业技术学院",
		"subItems" : []
	}, {
		"id" : "516",
		"name" : "安徽工贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "517",
		"name" : "宿州职业技术学院",
		"subItems" : []
	}, {
		"id" : "518",
		"name" : "六安职业技术学院",
		"subItems" : []
	}, {
		"id" : "519",
		"name" : "安徽电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "520",
		"name" : "民办合肥经济技术职业学院",
		"subItems" : []
	}, {
		"id" : "521",
		"name" : "安徽交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "522",
		"name" : "安徽体育运动职业技术学院",
		"subItems" : []
	}, {
		"id" : "523",
		"name" : "安徽中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "524",
		"name" : "安徽医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "525",
		"name" : "亳州师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "526",
		"name" : "合肥职业技术学院",
		"subItems" : []
	}, {
		"id" : "527",
		"name" : "滁州职业技术学院",
		"subItems" : []
	}, {
		"id" : "528",
		"name" : "池州职业技术学院",
		"subItems" : []
	}, {
		"id" : "529",
		"name" : "宣城职业技术学院",
		"subItems" : []
	}, {
		"id" : "530",
		"name" : "安徽广播影视职业技术学院",
		"subItems" : []
	}, {
		"id" : "531",
		"name" : "民办合肥滨湖职业技术学院",
		"subItems" : []
	}, {
		"id" : "532",
		"name" : "安徽电气工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "533",
		"name" : "安徽冶金科技职业学院",
		"subItems" : []
	}, {
		"id" : "534",
		"name" : "安徽城市管理职业学院",
		"subItems" : []
	}, {
		"id" : "535",
		"name" : "安徽机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "536",
		"name" : "安徽工商职业学院",
		"subItems" : []
	}, {
		"id" : "537",
		"name" : "安徽中澳科技职业学院",
		"subItems" : []
	}, {
		"id" : "538",
		"name" : "阜阳科技职业学院",
		"subItems" : []
	}, {
		"id" : "539",
		"name" : "亳州职业技术学院",
		"subItems" : []
	}, {
		"id" : "540",
		"name" : "安徽国防科技职业学院",
		"subItems" : []
	}, {
		"id" : "541",
		"name" : "安庆职业技术学院",
		"subItems" : []
	}, {
		"id" : "542",
		"name" : "安徽艺术职业学院",
		"subItems" : []
	}, {
		"id" : "543",
		"name" : "马鞍山师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "544",
		"name" : "安徽财贸职业学院",
		"subItems" : []
	}, {
		"id" : "545",
		"name" : "安徽国际商务职业学院",
		"subItems" : []
	}, {
		"id" : "546",
		"name" : "安徽公安职业学院",
		"subItems" : []
	}, {
		"id" : "547",
		"name" : "安徽林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "548",
		"name" : "安徽审计职业学院",
		"subItems" : []
	}, {
		"id" : "549",
		"name" : "安徽新闻出版职业技术学院",
		"subItems" : []
	}, {
		"id" : "550",
		"name" : "安徽邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "551",
		"name" : "安徽工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "552",
		"name" : "民办合肥财经职业学院",
		"subItems" : []
	}, {
		"id" : "553",
		"name" : "安庆医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "554",
		"name" : "安徽涉外经济职业学院",
		"subItems" : []
	}, {
		"id" : "555",
		"name" : "安徽绿海商务职业学院",
		"subItems" : []
	}, {
		"id" : "556",
		"name" : "合肥共达职业技术学院",
		"subItems" : []
	}, {
		"id" : "557",
		"name" : "蚌埠经济技术职业学院",
		"subItems" : []
	}, {
		"id" : "558",
		"name" : "民办安徽旅游职业学院",
		"subItems" : []
	}, {
		"id" : "559",
		"name" : "徽商职业学院",
		"subItems" : []
	}, {
		"id" : "560",
		"name" : "马鞍山职业技术学院",
		"subItems" : []
	}, {
		"id" : "561",
		"name" : "安徽现代信息工程职业学院",
		"subItems" : []
	}, {
		"id" : "562",
		"name" : "安徽矿业职业技术学院",
		"subItems" : []
	}, {
		"id" : "563",
		"name" : "合肥信息技术职业学院",
		"subItems" : []
	}, {
		"id" : "564",
		"name" : "桐城师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "565",
		"name" : "黄山职业技术学院",
		"subItems" : []
	}, {
		"id" : "566",
		"name" : "滁州城市职业学院",
		"subItems" : []
	}, {
		"id" : "567",
		"name" : "安徽汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "568",
		"name" : "皖西卫生职业学院",
		"subItems" : []
	}, {
		"id" : "569",
		"name" : "合肥幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "570",
		"name" : "安徽长江职业学院",
		"subItems" : []
	}, {
		"id" : "571",
		"name" : "安徽扬子职业技术学院",
		"subItems" : []
	}, {
		"id" : "572",
		"name" : "安徽黄梅戏艺术职业学院",
		"subItems" : []
	}, {
		"id" : "573",
		"name" : "安徽粮食工程职业学院",
		"subItems" : []
	}, {
		"id" : "574",
		"name" : "安徽人口职业学院",
		"subItems" : []
	}, {
		"id" : "575",
		"name" : "合肥科技职业学院",
		"subItems" : []
	}, {
		"id" : "576",
		"name" : "皖北卫生职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "山东省",
	"subItems" : [ {
		"id" : "577",
		"name" : "山东大学",
		"subItems" : []
	}, {
		"id" : "578",
		"name" : "中国海洋大学",
		"subItems" : []
	}, {
		"id" : "579",
		"name" : "山东科技大学",
		"subItems" : []
	}, {
		"id" : "580",
		"name" : "青岛科技大学",
		"subItems" : []
	}, {
		"id" : "581",
		"name" : "济南大学",
		"subItems" : []
	}, {
		"id" : "582",
		"name" : "青岛理工大学",
		"subItems" : []
	}, {
		"id" : "583",
		"name" : "山东建筑大学",
		"subItems" : []
	}, {
		"id" : "584",
		"name" : "齐鲁工业大学",
		"subItems" : []
	}, {
		"id" : "585",
		"name" : "山东理工大学",
		"subItems" : []
	}, {
		"id" : "586",
		"name" : "山东农业大学",
		"subItems" : []
	}, {
		"id" : "587",
		"name" : "青岛农业大学",
		"subItems" : []
	}, {
		"id" : "588",
		"name" : "潍坊医学院",
		"subItems" : []
	}, {
		"id" : "589",
		"name" : "泰山医学院",
		"subItems" : []
	}, {
		"id" : "590",
		"name" : "滨州医学院",
		"subItems" : []
	}, {
		"id" : "591",
		"name" : "山东中医药大学",
		"subItems" : []
	}, {
		"id" : "592",
		"name" : "济宁医学院",
		"subItems" : []
	}, {
		"id" : "593",
		"name" : "山东师范大学",
		"subItems" : []
	}, {
		"id" : "594",
		"name" : "曲阜师范大学",
		"subItems" : []
	}, {
		"id" : "595",
		"name" : "聊城大学",
		"subItems" : []
	}, {
		"id" : "596",
		"name" : "德州学院",
		"subItems" : []
	}, {
		"id" : "597",
		"name" : "滨州学院",
		"subItems" : []
	}, {
		"id" : "598",
		"name" : "鲁东大学",
		"subItems" : []
	}, {
		"id" : "599",
		"name" : "临沂大学",
		"subItems" : []
	}, {
		"id" : "600",
		"name" : "泰山学院",
		"subItems" : []
	}, {
		"id" : "601",
		"name" : "济宁学院",
		"subItems" : []
	}, {
		"id" : "602",
		"name" : "菏泽学院",
		"subItems" : []
	}, {
		"id" : "603",
		"name" : "山东财经大学",
		"subItems" : []
	}, {
		"id" : "604",
		"name" : "山东体育学院",
		"subItems" : []
	}, {
		"id" : "605",
		"name" : "山东艺术学院",
		"subItems" : []
	}, {
		"id" : "606",
		"name" : "山东万杰医学院",
		"subItems" : []
	}, {
		"id" : "607",
		"name" : "青岛滨海学院",
		"subItems" : []
	}, {
		"id" : "608",
		"name" : "枣庄学院",
		"subItems" : []
	}, {
		"id" : "609",
		"name" : "山东工艺美术学院",
		"subItems" : []
	}, {
		"id" : "610",
		"name" : "青岛大学",
		"subItems" : []
	}, {
		"id" : "611",
		"name" : "烟台大学",
		"subItems" : []
	}, {
		"id" : "612",
		"name" : "潍坊学院",
		"subItems" : []
	}, {
		"id" : "613",
		"name" : "山东警察学院",
		"subItems" : []
	}, {
		"id" : "614",
		"name" : "山东交通学院",
		"subItems" : []
	}, {
		"id" : "615",
		"name" : "山东工商学院",
		"subItems" : []
	}, {
		"id" : "616",
		"name" : "山东女子学院",
		"subItems" : []
	}, {
		"id" : "617",
		"name" : "烟台南山学院",
		"subItems" : []
	}, {
		"id" : "618",
		"name" : "潍坊科技学院",
		"subItems" : []
	}, {
		"id" : "619",
		"name" : "山东英才学院",
		"subItems" : []
	}, {
		"id" : "620",
		"name" : "青岛恒星科技学院",
		"subItems" : []
	}, {
		"id" : "621",
		"name" : "青岛黄海学院",
		"subItems" : []
	}, {
		"id" : "622",
		"name" : "山东协和学院",
		"subItems" : []
	}, {
		"id" : "623",
		"name" : "山东华宇工学院",
		"subItems" : []
	}, {
		"id" : "624",
		"name" : "青岛工学院",
		"subItems" : []
	}, {
		"id" : "625",
		"name" : "齐鲁理工学院",
		"subItems" : []
	}, {
		"id" : "626",
		"name" : "山东政法学院",
		"subItems" : []
	}, {
		"id" : "627",
		"name" : "齐鲁师范学院",
		"subItems" : []
	}, {
		"id" : "628",
		"name" : "山东青年政治学院",
		"subItems" : []
	}, {
		"id" : "629",
		"name" : "山东管理学院",
		"subItems" : []
	}, {
		"id" : "630",
		"name" : "山东农业工程学院",
		"subItems" : []
	}, {
		"id" : "631",
		"name" : "山东医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "632",
		"name" : "菏泽医学专科学校",
		"subItems" : []
	}, {
		"id" : "633",
		"name" : "山东商业职业技术学院",
		"subItems" : []
	}, {
		"id" : "634",
		"name" : "山东电力高等专科学校",
		"subItems" : []
	}, {
		"id" : "635",
		"name" : "日照职业技术学院",
		"subItems" : []
	}, {
		"id" : "636",
		"name" : "曲阜远东职业技术学院",
		"subItems" : []
	}, {
		"id" : "637",
		"name" : "青岛职业技术学院",
		"subItems" : []
	}, {
		"id" : "638",
		"name" : "威海职业学院",
		"subItems" : []
	}, {
		"id" : "639",
		"name" : "山东职业学院",
		"subItems" : []
	}, {
		"id" : "640",
		"name" : "山东劳动职业技术学院",
		"subItems" : []
	}, {
		"id" : "641",
		"name" : "莱芜职业技术学院",
		"subItems" : []
	}, {
		"id" : "642",
		"name" : "济宁职业技术学院",
		"subItems" : []
	}, {
		"id" : "643",
		"name" : "潍坊职业学院",
		"subItems" : []
	}, {
		"id" : "644",
		"name" : "烟台职业学院",
		"subItems" : []
	}, {
		"id" : "645",
		"name" : "东营职业学院",
		"subItems" : []
	}, {
		"id" : "646",
		"name" : "聊城职业技术学院",
		"subItems" : []
	}, {
		"id" : "647",
		"name" : "滨州职业学院",
		"subItems" : []
	}, {
		"id" : "648",
		"name" : "山东科技职业学院",
		"subItems" : []
	}, {
		"id" : "649",
		"name" : "山东服装职业学院",
		"subItems" : []
	}, {
		"id" : "650",
		"name" : "德州科技职业学院",
		"subItems" : []
	}, {
		"id" : "651",
		"name" : "山东力明科技职业学院",
		"subItems" : []
	}, {
		"id" : "652",
		"name" : "山东圣翰财贸职业学院",
		"subItems" : []
	}, {
		"id" : "653",
		"name" : "山东水利职业学院",
		"subItems" : []
	}, {
		"id" : "654",
		"name" : "山东畜牧兽医职业学院",
		"subItems" : []
	}, {
		"id" : "655",
		"name" : "青岛飞洋职业技术学院",
		"subItems" : []
	}, {
		"id" : "656",
		"name" : "东营科技职业学院",
		"subItems" : []
	}, {
		"id" : "657",
		"name" : "山东交通职业学院",
		"subItems" : []
	}, {
		"id" : "658",
		"name" : "淄博职业学院",
		"subItems" : []
	}, {
		"id" : "659",
		"name" : "山东外贸职业学院",
		"subItems" : []
	}, {
		"id" : "660",
		"name" : "青岛酒店管理职业技术学院",
		"subItems" : []
	}, {
		"id" : "661",
		"name" : "山东信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "662",
		"name" : "青岛港湾职业技术学院",
		"subItems" : []
	}, {
		"id" : "663",
		"name" : "山东胜利职业学院",
		"subItems" : []
	}, {
		"id" : "664",
		"name" : "山东经贸职业学院",
		"subItems" : []
	}, {
		"id" : "665",
		"name" : "山东工业职业学院",
		"subItems" : []
	}, {
		"id" : "666",
		"name" : "山东化工职业学院",
		"subItems" : []
	}, {
		"id" : "667",
		"name" : "青岛求实职业技术学院",
		"subItems" : []
	}, {
		"id" : "668",
		"name" : "山东现代职业学院",
		"subItems" : []
	}, {
		"id" : "669",
		"name" : "济南职业学院",
		"subItems" : []
	}, {
		"id" : "670",
		"name" : "烟台工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "671",
		"name" : "山东凯文科技职业学院",
		"subItems" : []
	}, {
		"id" : "672",
		"name" : "山东外国语职业学院",
		"subItems" : []
	}, {
		"id" : "673",
		"name" : "潍坊工商职业学院",
		"subItems" : []
	}, {
		"id" : "674",
		"name" : "德州职业技术学院",
		"subItems" : []
	}, {
		"id" : "675",
		"name" : "枣庄科技职业学院",
		"subItems" : []
	}, {
		"id" : "676",
		"name" : "淄博师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "677",
		"name" : "山东中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "678",
		"name" : "济南工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "679",
		"name" : "山东电子职业技术学院",
		"subItems" : []
	}, {
		"id" : "680",
		"name" : "山东旅游职业学院",
		"subItems" : []
	}, {
		"id" : "681",
		"name" : "山东铝业职业学院",
		"subItems" : []
	}, {
		"id" : "682",
		"name" : "山东杏林科技职业学院",
		"subItems" : []
	}, {
		"id" : "683",
		"name" : "泰山职业技术学院",
		"subItems" : []
	}, {
		"id" : "684",
		"name" : "山东外事翻译职业学院",
		"subItems" : []
	}, {
		"id" : "685",
		"name" : "山东药品食品职业学院",
		"subItems" : []
	}, {
		"id" : "686",
		"name" : "山东商务职业学院",
		"subItems" : []
	}, {
		"id" : "687",
		"name" : "山东轻工职业学院",
		"subItems" : []
	}, {
		"id" : "688",
		"name" : "山东城市建设职业学院",
		"subItems" : []
	}, {
		"id" : "689",
		"name" : "烟台汽车工程职业学院",
		"subItems" : []
	}, {
		"id" : "690",
		"name" : "山东司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "691",
		"name" : "菏泽家政职业学院",
		"subItems" : []
	}, {
		"id" : "692",
		"name" : "山东传媒职业学院",
		"subItems" : []
	}, {
		"id" : "693",
		"name" : "临沂职业学院",
		"subItems" : []
	}, {
		"id" : "694",
		"name" : "枣庄职业学院",
		"subItems" : []
	}, {
		"id" : "695",
		"name" : "山东理工职业学院",
		"subItems" : []
	}, {
		"id" : "696",
		"name" : "山东文化产业职业学院",
		"subItems" : []
	}, {
		"id" : "697",
		"name" : "青岛远洋船员职业学院",
		"subItems" : []
	}, {
		"id" : "698",
		"name" : "济南幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "699",
		"name" : "济南护理职业学院",
		"subItems" : []
	}, {
		"id" : "700",
		"name" : "泰山护理职业学院",
		"subItems" : []
	}, {
		"id" : "701",
		"name" : "山东海事职业学院",
		"subItems" : []
	}, {
		"id" : "702",
		"name" : "潍坊护理职业学院",
		"subItems" : []
	}, {
		"id" : "703",
		"name" : "潍坊工程职业学院",
		"subItems" : []
	}, {
		"id" : "704",
		"name" : "菏泽职业学院",
		"subItems" : []
	}, {
		"id" : "705",
		"name" : "山东艺术设计职业学院",
		"subItems" : []
	}, {
		"id" : "706",
		"name" : "威海海洋职业学院",
		"subItems" : []
	},{
		"id" : "659005",
		"name" : "济南大学泉城学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "山西省",
	"subItems" : [ {
		"id" : "707",
		"name" : "山西大学",
		"subItems" : []
	}, {
		"id" : "708",
		"name" : "太原科技大学",
		"subItems" : []
	}, {
		"id" : "709",
		"name" : "中北大学",
		"subItems" : []
	}, {
		"id" : "710",
		"name" : "太原理工大学",
		"subItems" : []
	}, {
		"id" : "711",
		"name" : "山西农业大学",
		"subItems" : []
	}, {
		"id" : "712",
		"name" : "山西医科大学",
		"subItems" : []
	}, {
		"id" : "713",
		"name" : "长治医学院",
		"subItems" : []
	}, {
		"id" : "714",
		"name" : "山西师范大学",
		"subItems" : []
	}, {
		"id" : "715",
		"name" : "太原师范学院",
		"subItems" : []
	}, {
		"id" : "716",
		"name" : "山西大同大学",
		"subItems" : []
	}, {
		"id" : "717",
		"name" : "晋中学院",
		"subItems" : []
	}, {
		"id" : "718",
		"name" : "长治学院",
		"subItems" : []
	}, {
		"id" : "719",
		"name" : "运城学院",
		"subItems" : []
	}, {
		"id" : "720",
		"name" : "忻州师范学院",
		"subItems" : []
	}, {
		"id" : "721",
		"name" : "山西财经大学",
		"subItems" : []
	}, {
		"id" : "722",
		"name" : "山西中医学院",
		"subItems" : []
	}, {
		"id" : "723",
		"name" : "吕梁学院",
		"subItems" : []
	}, {
		"id" : "724",
		"name" : "太原学院",
		"subItems" : []
	}, {
		"id" : "725",
		"name" : "山西应用科技学院",
		"subItems" : []
	}, {
		"id" : "726",
		"name" : "山西工商学院",
		"subItems" : []
	}, {
		"id" : "727",
		"name" : "太原工业学院",
		"subItems" : []
	}, {
		"id" : "728",
		"name" : "山西传媒学院",
		"subItems" : []
	}, {
		"id" : "729",
		"name" : "山西工程技术学院",
		"subItems" : []
	}, {
		"id" : "730",
		"name" : "山西省财政税务专科学校",
		"subItems" : []
	}, {
		"id" : "731",
		"name" : "山西警官高等专科学校",
		"subItems" : []
	}, {
		"id" : "732",
		"name" : "长治职业技术学院",
		"subItems" : []
	}, {
		"id" : "733",
		"name" : "山西艺术职业学院",
		"subItems" : []
	}, {
		"id" : "734",
		"name" : "晋城职业技术学院",
		"subItems" : []
	}, {
		"id" : "735",
		"name" : "山西建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "736",
		"name" : "山西药科职业学院",
		"subItems" : []
	}, {
		"id" : "737",
		"name" : "山西工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "738",
		"name" : "山西交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "739",
		"name" : "大同煤炭职业技术学院",
		"subItems" : []
	}, {
		"id" : "740",
		"name" : "山西机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "741",
		"name" : "山西戏剧职业学院",
		"subItems" : []
	}, {
		"id" : "742",
		"name" : "山西财贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "743",
		"name" : "山西林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "744",
		"name" : "山西水利职业技术学院",
		"subItems" : []
	}, {
		"id" : "745",
		"name" : "阳泉职业技术学院",
		"subItems" : []
	}, {
		"id" : "746",
		"name" : "临汾职业技术学院",
		"subItems" : []
	}, {
		"id" : "747",
		"name" : "山西职业技术学院",
		"subItems" : []
	}, {
		"id" : "748",
		"name" : "山西煤炭职业技术学院",
		"subItems" : []
	}, {
		"id" : "749",
		"name" : "山西金融职业学院",
		"subItems" : []
	}, {
		"id" : "750",
		"name" : "太原城市职业技术学院",
		"subItems" : []
	}, {
		"id" : "751",
		"name" : "山西信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "752",
		"name" : "山西体育职业学院",
		"subItems" : []
	}, {
		"id" : "753",
		"name" : "山西警官职业学院",
		"subItems" : []
	}, {
		"id" : "754",
		"name" : "山西国际商务职业学院",
		"subItems" : []
	}, {
		"id" : "755",
		"name" : "潞安职业技术学院",
		"subItems" : []
	}, {
		"id" : "756",
		"name" : "太原旅游职业学院",
		"subItems" : []
	}, {
		"id" : "757",
		"name" : "山西旅游职业学院",
		"subItems" : []
	}, {
		"id" : "758",
		"name" : "山西管理职业学院",
		"subItems" : []
	}, {
		"id" : "759",
		"name" : "山西电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "760",
		"name" : "忻州职业技术学院",
		"subItems" : []
	}, {
		"id" : "761",
		"name" : "山西同文职业技术学院",
		"subItems" : []
	}, {
		"id" : "762",
		"name" : "晋中职业技术学院",
		"subItems" : []
	}, {
		"id" : "763",
		"name" : "山西华澳商贸职业学院",
		"subItems" : []
	}, {
		"id" : "764",
		"name" : "山西运城农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "765",
		"name" : "运城幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "766",
		"name" : "山西老区职业技术学院",
		"subItems" : []
	}, {
		"id" : "767",
		"name" : "山西经贸职业学院",
		"subItems" : []
	}, {
		"id" : "768",
		"name" : "朔州职业技术学院",
		"subItems" : []
	}, {
		"id" : "769",
		"name" : "运城职业技术学院",
		"subItems" : []
	}, {
		"id" : "770",
		"name" : "山西轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "771",
		"name" : "晋中师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "772",
		"name" : "阳泉师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "773",
		"name" : "山西青年职业学院",
		"subItems" : []
	}, {
		"id" : "774",
		"name" : "运城护理职业学院",
		"subItems" : []
	}, {
		"id" : "775",
		"name" : "运城师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "776",
		"name" : "朔州师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "777",
		"name" : "吕梁职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "广东省",
	"subItems" : [ {
		"id" : "778",
		"name" : "中山大学",
		"subItems" : []
	}, {
		"id" : "779",
		"name" : "华南理工大学",
		"subItems" : []
	}, {
		"id" : "780",
		"name" : "暨南大学",
		"subItems" : []
	}, {
		"id" : "781",
		"name" : "汕头大学",
		"subItems" : []
	}, {
		"id" : "782",
		"name" : "华南农业大学",
		"subItems" : []
	}, {
		"id" : "783",
		"name" : "广东海洋大学",
		"subItems" : []
	}, {
		"id" : "784",
		"name" : "广州医科大学",
		"subItems" : []
	}, {
		"id" : "785",
		"name" : "广东医学院",
		"subItems" : []
	}, {
		"id" : "786",
		"name" : "广州中医药大学",
		"subItems" : []
	}, {
		"id" : "787",
		"name" : "广东药学院",
		"subItems" : []
	}, {
		"id" : "788",
		"name" : "华南师范大学",
		"subItems" : []
	}, {
		"id" : "789",
		"name" : "韶关学院",
		"subItems" : []
	}, {
		"id" : "790",
		"name" : "惠州学院",
		"subItems" : []
	}, {
		"id" : "791",
		"name" : "韩山师范学院",
		"subItems" : []
	}, {
		"id" : "792",
		"name" : "岭南师范学院",
		"subItems" : []
	}, {
		"id" : "793",
		"name" : "肇庆学院",
		"subItems" : []
	}, {
		"id" : "794",
		"name" : "嘉应学院",
		"subItems" : []
	}, {
		"id" : "795",
		"name" : "广州体育学院",
		"subItems" : []
	}, {
		"id" : "796",
		"name" : "广州美术学院",
		"subItems" : []
	}, {
		"id" : "797",
		"name" : "星海音乐学院",
		"subItems" : []
	}, {
		"id" : "798",
		"name" : "广东技术师范学院",
		"subItems" : []
	}, {
		"id" : "799",
		"name" : "深圳大学",
		"subItems" : []
	}, {
		"id" : "800",
		"name" : "广东财经大学",
		"subItems" : []
	}, {
		"id" : "801",
		"name" : "广东白云学院",
		"subItems" : []
	}, {
		"id" : "802",
		"name" : "广州大学",
		"subItems" : []
	}, {
		"id" : "803",
		"name" : "广州航海学院",
		"subItems" : []
	}, {
		"id" : "804",
		"name" : "广东警官学院",
		"subItems" : []
	}, {
		"id" : "805",
		"name" : "仲恺农业工程学院",
		"subItems" : []
	}, {
		"id" : "806",
		"name" : "五邑大学",
		"subItems" : []
	}, {
		"id" : "807",
		"name" : "广东金融学院",
		"subItems" : []
	}, {
		"id" : "808",
		"name" : "广东石油化工学院",
		"subItems" : []
	}, {
		"id" : "809",
		"name" : "东莞理工学院",
		"subItems" : []
	}, {
		"id" : "810",
		"name" : "广东工业大学",
		"subItems" : []
	}, {
		"id" : "811",
		"name" : "广东外语外贸大学",
		"subItems" : []
	}, {
		"id" : "812",
		"name" : "佛山科学技术学院",
		"subItems" : []
	}, {
		"id" : "813",
		"name" : "广东培正学院",
		"subItems" : []
	}, {
		"id" : "814",
		"name" : "南方医科大学",
		"subItems" : []
	}, {
		"id" : "815",
		"name" : "广东东软学院",
		"subItems" : []
	}, {
		"id" : "816",
		"name" : "广州商学院",
		"subItems" : []
	}, {
		"id" : "817",
		"name" : "广州工商学院",
		"subItems" : []
	}, {
		"id" : "818",
		"name" : "广东科技学院",
		"subItems" : []
	}, {
		"id" : "819",
		"name" : "广东理工学院",
		"subItems" : []
	}, {
		"id" : "820",
		"name" : "广东第二师范学院",
		"subItems" : []
	}, {
		"id" : "821",
		"name" : "南方科技大学",
		"subItems" : []
	}, {
		"id" : "822",
		"name" : "北京师范大学-香港浸会大学联合国际学院",
		"subItems" : []
	}, {
		"id" : "823",
		"name" : "香港中文大学（深圳）",
		"subItems" : []
	}, {
		"id" : "824",
		"name" : "顺德职业技术学院",
		"subItems" : []
	}, {
		"id" : "825",
		"name" : "广东轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "826",
		"name" : "广东交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "827",
		"name" : "广东水利电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "828",
		"name" : "潮汕职业技术学院",
		"subItems" : []
	}, {
		"id" : "829",
		"name" : "深圳职业技术学院",
		"subItems" : []
	}, {
		"id" : "830",
		"name" : "民办南华工商学院",
		"subItems" : []
	}, {
		"id" : "831",
		"name" : "私立华联学院",
		"subItems" : []
	}, {
		"id" : "832",
		"name" : "广州民航职业技术学院",
		"subItems" : []
	}, {
		"id" : "833",
		"name" : "广州番禺职业技术学院",
		"subItems" : []
	}, {
		"id" : "834",
		"name" : "广东松山职业技术学院",
		"subItems" : []
	}, {
		"id" : "835",
		"name" : "广东农工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "836",
		"name" : "广东新安职业技术学院",
		"subItems" : []
	}, {
		"id" : "837",
		"name" : "佛山职业技术学院",
		"subItems" : []
	}, {
		"id" : "838",
		"name" : "广东科学技术职业学院",
		"subItems" : []
	}, {
		"id" : "839",
		"name" : "广东食品药品职业学院",
		"subItems" : []
	}, {
		"id" : "840",
		"name" : "广州康大职业技术学院",
		"subItems" : []
	}, {
		"id" : "841",
		"name" : "珠海艺术职业学院",
		"subItems" : []
	}, {
		"id" : "842",
		"name" : "广东行政职业学院",
		"subItems" : []
	}, {
		"id" : "843",
		"name" : "广东体育职业技术学院",
		"subItems" : []
	}, {
		"id" : "844",
		"name" : "广东职业技术学院",
		"subItems" : []
	}, {
		"id" : "845",
		"name" : "广东建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "846",
		"name" : "广东女子职业技术学院",
		"subItems" : []
	}, {
		"id" : "847",
		"name" : "广东机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "848",
		"name" : "广东岭南职业技术学院",
		"subItems" : []
	}, {
		"id" : "849",
		"name" : "汕尾职业技术学院",
		"subItems" : []
	}, {
		"id" : "850",
		"name" : "罗定职业技术学院",
		"subItems" : []
	}, {
		"id" : "851",
		"name" : "阳江职业技术学院",
		"subItems" : []
	}, {
		"id" : "852",
		"name" : "河源职业技术学院",
		"subItems" : []
	}, {
		"id" : "853",
		"name" : "广东邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "854",
		"name" : "汕头职业技术学院",
		"subItems" : []
	}, {
		"id" : "855",
		"name" : "揭阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "856",
		"name" : "深圳信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "857",
		"name" : "清远职业技术学院",
		"subItems" : []
	}, {
		"id" : "858",
		"name" : "广东工贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "859",
		"name" : "广东司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "860",
		"name" : "广东亚视演艺职业学院",
		"subItems" : []
	}, {
		"id" : "861",
		"name" : "广东省外语艺术职业学院",
		"subItems" : []
	}, {
		"id" : "862",
		"name" : "广东文艺职业学院",
		"subItems" : []
	}, {
		"id" : "863",
		"name" : "广州体育职业技术学院",
		"subItems" : []
	}, {
		"id" : "864",
		"name" : "广州工程技术职业学院",
		"subItems" : []
	}, {
		"id" : "865",
		"name" : "中山火炬职业技术学院",
		"subItems" : []
	}, {
		"id" : "866",
		"name" : "江门职业技术学院",
		"subItems" : []
	}, {
		"id" : "867",
		"name" : "茂名职业技术学院",
		"subItems" : []
	}, {
		"id" : "868",
		"name" : "珠海城市职业技术学院",
		"subItems" : []
	}, {
		"id" : "869",
		"name" : "广州涉外经济职业技术学院",
		"subItems" : []
	}, {
		"id" : "870",
		"name" : "广州南洋理工职业学院",
		"subItems" : []
	}, {
		"id" : "871",
		"name" : "广州科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "872",
		"name" : "惠州经济职业技术学院",
		"subItems" : []
	}, {
		"id" : "873",
		"name" : "广东工商职业学院",
		"subItems" : []
	}, {
		"id" : "874",
		"name" : "肇庆医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "875",
		"name" : "广州现代信息工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "876",
		"name" : "广东理工职业学院",
		"subItems" : []
	}, {
		"id" : "877",
		"name" : "广州华南商贸职业学院",
		"subItems" : []
	}, {
		"id" : "878",
		"name" : "广州华立科技职业学院",
		"subItems" : []
	}, {
		"id" : "879",
		"name" : "广州城市职业学院",
		"subItems" : []
	}, {
		"id" : "880",
		"name" : "广东工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "881",
		"name" : "广州铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "882",
		"name" : "广东科贸职业学院",
		"subItems" : []
	}, {
		"id" : "883",
		"name" : "广州科技贸易职业学院",
		"subItems" : []
	}, {
		"id" : "884",
		"name" : "中山职业技术学院",
		"subItems" : []
	}, {
		"id" : "885",
		"name" : "广州珠江职业技术学院",
		"subItems" : []
	}, {
		"id" : "886",
		"name" : "广州松田职业学院",
		"subItems" : []
	}, {
		"id" : "887",
		"name" : "广东文理职业学院",
		"subItems" : []
	}, {
		"id" : "888",
		"name" : "广州城建职业学院",
		"subItems" : []
	}, {
		"id" : "889",
		"name" : "东莞职业技术学院",
		"subItems" : []
	}, {
		"id" : "890",
		"name" : "广东南方职业学院",
		"subItems" : []
	}, {
		"id" : "891",
		"name" : "广州华商职业学院",
		"subItems" : []
	}, {
		"id" : "892",
		"name" : "广州华夏职业学院",
		"subItems" : []
	}, {
		"id" : "893",
		"name" : "广东环境保护工程职业学院",
		"subItems" : []
	}, {
		"id" : "894",
		"name" : "广东青年职业学院",
		"subItems" : []
	}, {
		"id" : "895",
		"name" : "广州东华职业学院",
		"subItems" : []
	}, {
		"id" : "896",
		"name" : "广东创新科技职业学院",
		"subItems" : []
	}, {
		"id" : "897",
		"name" : "广东舞蹈戏剧职业学院",
		"subItems" : []
	}, {
		"id" : "898",
		"name" : "惠州卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "899",
		"name" : "广东信息工程职业学院",
		"subItems" : []
	}, {
		"id" : "900",
		"name" : "广东生态工程职业学院",
		"subItems" : []
	}, {
		"id" : "901",
		"name" : "惠州城市职业学院",
		"subItems" : []
	}, {
		"id" : "902",
		"name" : "广东碧桂园职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "广西壮族自治区",
	"subItems" : [ {
		"id" : "903",
		"name" : "广西大学",
		"subItems" : []
	}, {
		"id" : "904",
		"name" : "广西科技大学",
		"subItems" : []
	}, {
		"id" : "905",
		"name" : "桂林电子科技大学",
		"subItems" : []
	}, {
		"id" : "906",
		"name" : "桂林理工大学",
		"subItems" : []
	}, {
		"id" : "907",
		"name" : "广西医科大学",
		"subItems" : []
	}, {
		"id" : "908",
		"name" : "右江民族医学院",
		"subItems" : []
	}, {
		"id" : "909",
		"name" : "广西中医药大学",
		"subItems" : []
	}, {
		"id" : "910",
		"name" : "桂林医学院",
		"subItems" : []
	}, {
		"id" : "911",
		"name" : "广西师范大学",
		"subItems" : []
	}, {
		"id" : "912",
		"name" : "广西师范学院",
		"subItems" : []
	}, {
		"id" : "913",
		"name" : "广西民族师范学院",
		"subItems" : []
	}, {
		"id" : "914",
		"name" : "河池学院",
		"subItems" : []
	}, {
		"id" : "915",
		"name" : "玉林师范学院",
		"subItems" : []
	}, {
		"id" : "916",
		"name" : "广西艺术学院",
		"subItems" : []
	}, {
		"id" : "917",
		"name" : "广西民族大学",
		"subItems" : []
	}, {
		"id" : "918",
		"name" : "百色学院",
		"subItems" : []
	}, {
		"id" : "919",
		"name" : "梧州学院",
		"subItems" : []
	}, {
		"id" : "920",
		"name" : "广西财经学院",
		"subItems" : []
	}, {
		"id" : "921",
		"name" : "南宁学院",
		"subItems" : []
	}, {
		"id" : "922",
		"name" : "钦州学院",
		"subItems" : []
	}, {
		"id" : "923",
		"name" : "桂林航天工业学院",
		"subItems" : []
	}, {
		"id" : "924",
		"name" : "贺州学院",
		"subItems" : []
	}, {
		"id" : "925",
		"name" : "北海艺术设计学院",
		"subItems" : []
	}, {
		"id" : "926",
		"name" : "广西外国语学院",
		"subItems" : []
	}, {
		"id" : "927",
		"name" : "广西机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "928",
		"name" : "广西体育高等专科学校",
		"subItems" : []
	}, {
		"id" : "929",
		"name" : "南宁职业技术学院",
		"subItems" : []
	}, {
		"id" : "930",
		"name" : "柳州师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "931",
		"name" : "广西水利电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "932",
		"name" : "桂林师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "933",
		"name" : "广西职业技术学院",
		"subItems" : []
	}, {
		"id" : "934",
		"name" : "桂林旅游高等专科学校",
		"subItems" : []
	}, {
		"id" : "935",
		"name" : "柳州职业技术学院",
		"subItems" : []
	}, {
		"id" : "936",
		"name" : "广西生态工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "937",
		"name" : "广西交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "938",
		"name" : "广西工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "939",
		"name" : "广西国际商务职业技术学院",
		"subItems" : []
	}, {
		"id" : "940",
		"name" : "广西农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "941",
		"name" : "柳州铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "942",
		"name" : "广西建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "943",
		"name" : "广西警官高等专科学校",
		"subItems" : []
	}, {
		"id" : "944",
		"name" : "广西现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "945",
		"name" : "北海职业学院",
		"subItems" : []
	}, {
		"id" : "946",
		"name" : "桂林山水职业学院",
		"subItems" : []
	}, {
		"id" : "947",
		"name" : "广西经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "948",
		"name" : "广西工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "949",
		"name" : "广西演艺职业学院",
		"subItems" : []
	}, {
		"id" : "950",
		"name" : "广西电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "951",
		"name" : "广西城市职业学院",
		"subItems" : []
	}, {
		"id" : "952",
		"name" : "广西英华国际职业学院",
		"subItems" : []
	}, {
		"id" : "953",
		"name" : "柳州城市职业学院",
		"subItems" : []
	}, {
		"id" : "954",
		"name" : "百色职业学院",
		"subItems" : []
	}, {
		"id" : "955",
		"name" : "广西工程职业学院",
		"subItems" : []
	}, {
		"id" : "956",
		"name" : "广西理工职业技术学院",
		"subItems" : []
	}, {
		"id" : "957",
		"name" : "梧州职业学院",
		"subItems" : []
	}, {
		"id" : "958",
		"name" : "广西经济职业学院",
		"subItems" : []
	}, {
		"id" : "959",
		"name" : "广西幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "960",
		"name" : "广西科技职业学院",
		"subItems" : []
	}, {
		"id" : "961",
		"name" : "广西卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "962",
		"name" : "广西培贤国际职业学院",
		"subItems" : []
	}, {
		"id" : "963",
		"name" : "广西金融职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "新疆维吾尔自治区",
	"subItems" : [ {
		"id" : "964",
		"name" : "新疆大学",
		"subItems" : []
	}, {
		"id" : "965",
		"name" : "塔里木大学",
		"subItems" : []
	}, {
		"id" : "966",
		"name" : "新疆农业大学",
		"subItems" : []
	}, {
		"id" : "967",
		"name" : "石河子大学",
		"subItems" : []
	}, {
		"id" : "968",
		"name" : "新疆医科大学",
		"subItems" : []
	}, {
		"id" : "969",
		"name" : "新疆师范大学",
		"subItems" : []
	}, {
		"id" : "970",
		"name" : "喀什师范学院",
		"subItems" : []
	}, {
		"id" : "971",
		"name" : "伊犁师范学院",
		"subItems" : []
	}, {
		"id" : "972",
		"name" : "新疆财经大学",
		"subItems" : []
	}, {
		"id" : "973",
		"name" : "新疆艺术学院",
		"subItems" : []
	}, {
		"id" : "974",
		"name" : "新疆工程学院",
		"subItems" : []
	}, {
		"id" : "975",
		"name" : "昌吉学院",
		"subItems" : []
	}, {
		"id" : "976",
		"name" : "新疆警察学院",
		"subItems" : []
	}, {
		"id" : "977",
		"name" : "和田师范专科学校",
		"subItems" : []
	}, {
		"id" : "978",
		"name" : "新疆农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "979",
		"name" : "乌鲁木齐职业大学",
		"subItems" : []
	}, {
		"id" : "980",
		"name" : "新疆维吾尔医学专科学校",
		"subItems" : []
	}, {
		"id" : "981",
		"name" : "克拉玛依职业技术学院",
		"subItems" : []
	}, {
		"id" : "982",
		"name" : "新疆机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "983",
		"name" : "新疆轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "984",
		"name" : "新疆能源职业技术学院",
		"subItems" : []
	}, {
		"id" : "985",
		"name" : "昌吉职业技术学院",
		"subItems" : []
	}, {
		"id" : "986",
		"name" : "伊犁职业技术学院",
		"subItems" : []
	}, {
		"id" : "987",
		"name" : "阿克苏职业技术学院",
		"subItems" : []
	}, {
		"id" : "988",
		"name" : "巴音郭楞职业技术学院",
		"subItems" : []
	}, {
		"id" : "989",
		"name" : "新疆建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "990",
		"name" : "新疆兵团警官高等专科学校",
		"subItems" : []
	}, {
		"id" : "991",
		"name" : "新疆现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "992",
		"name" : "新疆天山职业技术学院",
		"subItems" : []
	}, {
		"id" : "993",
		"name" : "新疆交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "994",
		"name" : "新疆石河子职业技术学院",
		"subItems" : []
	}, {
		"id" : "995",
		"name" : "新疆职业大学",
		"subItems" : []
	}, {
		"id" : "996",
		"name" : "新疆体育职业技术学院",
		"subItems" : []
	}, {
		"id" : "997",
		"name" : "新疆应用职业技术学院",
		"subItems" : []
	}, {
		"id" : "998",
		"name" : "新疆师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "999",
		"name" : "新疆铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "1000",
		"name" : "新疆生产建设兵团兴新职业技术学院",
		"subItems" : []
	}, {
		"id" : "1001",
		"name" : "哈密职业技术学院",
		"subItems" : []
	}, {
		"id" : "1002",
		"name" : "新疆科技职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "江苏省",
	"subItems" : [ {
		"id" : "1003",
		"name" : "南京大学",
		"subItems" : []
	}, {
		"id" : "1004",
		"name" : "苏州大学",
		"subItems" : []
	}, {
		"id" : "1005",
		"name" : "东南大学",
		"subItems" : []
	}, {
		"id" : "1006",
		"name" : "南京航空航天大学",
		"subItems" : []
	}, {
		"id" : "1007",
		"name" : "南京理工大学",
		"subItems" : []
	}, {
		"id" : "1008",
		"name" : "江苏科技大学",
		"subItems" : []
	}, {
		"id" : "1009",
		"name" : "中国矿业大学",
		"subItems" : []
	}, {
		"id" : "1010",
		"name" : "南京工业大学",
		"subItems" : []
	}, {
		"id" : "1011",
		"name" : "常州大学",
		"subItems" : []
	}, {
		"id" : "1012",
		"name" : "南京邮电大学",
		"subItems" : []
	}, {
		"id" : "1013",
		"name" : "河海大学",
		"subItems" : []
	}, {
		"id" : "1014",
		"name" : "江南大学",
		"subItems" : []
	}, {
		"id" : "1015",
		"name" : "南京林业大学",
		"subItems" : []
	}, {
		"id" : "1016",
		"name" : "江苏大学",
		"subItems" : []
	}, {
		"id" : "1017",
		"name" : "南京信息工程大学",
		"subItems" : []
	}, {
		"id" : "1018",
		"name" : "南通大学",
		"subItems" : []
	}, {
		"id" : "1019",
		"name" : "盐城工学院",
		"subItems" : []
	}, {
		"id" : "1020",
		"name" : "南京农业大学",
		"subItems" : []
	}, {
		"id" : "1021",
		"name" : "南京医科大学",
		"subItems" : []
	}, {
		"id" : "1022",
		"name" : "徐州医学院",
		"subItems" : []
	}, {
		"id" : "1023",
		"name" : "南京中医药大学",
		"subItems" : []
	}, {
		"id" : "1024",
		"name" : "中国药科大学",
		"subItems" : []
	}, {
		"id" : "1025",
		"name" : "南京师范大学",
		"subItems" : []
	}, {
		"id" : "1026",
		"name" : "江苏师范大学",
		"subItems" : []
	}, {
		"id" : "1027",
		"name" : "淮阴师范学院",
		"subItems" : []
	}, {
		"id" : "1028",
		"name" : "盐城师范学院",
		"subItems" : []
	}, {
		"id" : "1029",
		"name" : "南京财经大学",
		"subItems" : []
	}, {
		"id" : "1030",
		"name" : "江苏警官学院",
		"subItems" : []
	}, {
		"id" : "1031",
		"name" : "南京体育学院",
		"subItems" : []
	}, {
		"id" : "1032",
		"name" : "南京艺术学院",
		"subItems" : []
	}, {
		"id" : "1033",
		"name" : "苏州科技学院",
		"subItems" : []
	}, {
		"id" : "1034",
		"name" : "常熟理工学院",
		"subItems" : []
	}, {
		"id" : "1035",
		"name" : "淮阴工学院",
		"subItems" : []
	}, {
		"id" : "1036",
		"name" : "常州工学院",
		"subItems" : []
	}, {
		"id" : "1037",
		"name" : "扬州大学",
		"subItems" : []
	}, {
		"id" : "1038",
		"name" : "三江学院",
		"subItems" : []
	}, {
		"id" : "1039",
		"name" : "南京工程学院",
		"subItems" : []
	}, {
		"id" : "1040",
		"name" : "南京审计学院",
		"subItems" : []
	}, {
		"id" : "1041",
		"name" : "南京晓庄学院",
		"subItems" : []
	}, {
		"id" : "1042",
		"name" : "江苏理工学院",
		"subItems" : []
	}, {
		"id" : "1043",
		"name" : "淮海工学院",
		"subItems" : []
	}, {
		"id" : "1044",
		"name" : "徐州工程学院",
		"subItems" : []
	}, {
		"id" : "1045",
		"name" : "南通理工学院",
		"subItems" : []
	}, {
		"id" : "1046",
		"name" : "南京森林警察学院",
		"subItems" : []
	}, {
		"id" : "1047",
		"name" : "泰州学院",
		"subItems" : []
	}, {
		"id" : "1048",
		"name" : "无锡太湖学院",
		"subItems" : []
	}, {
		"id" : "1049",
		"name" : "金陵科技学院",
		"subItems" : []
	}, {
		"id" : "1050",
		"name" : "宿迁学院",
		"subItems" : []
	}, {
		"id" : "1051",
		"name" : "江苏第二师范学院",
		"subItems" : []
	}, {
		"id" : "1052",
		"name" : "西交利物浦大学",
		"subItems" : []
	}, {
		"id" : "1053",
		"name" : "昆山杜克大学",
		"subItems" : []
	}, {
		"id" : "1054",
		"name" : "民办明达职业技术学院",
		"subItems" : []
	}, {
		"id" : "1055",
		"name" : "无锡职业技术学院",
		"subItems" : []
	}, {
		"id" : "1056",
		"name" : "江苏建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "1057",
		"name" : "南京工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1058",
		"name" : "江苏工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1059",
		"name" : "苏州工艺美术职业技术学院",
		"subItems" : []
	}, {
		"id" : "1060",
		"name" : "连云港职业技术学院",
		"subItems" : []
	}, {
		"id" : "1061",
		"name" : "镇江市高等专科学校",
		"subItems" : []
	}, {
		"id" : "1062",
		"name" : "南通职业大学",
		"subItems" : []
	}, {
		"id" : "1063",
		"name" : "苏州职业大学",
		"subItems" : []
	}, {
		"id" : "1064",
		"name" : "沙洲职业工学院",
		"subItems" : []
	}, {
		"id" : "1065",
		"name" : "扬州市职业大学",
		"subItems" : []
	}, {
		"id" : "1066",
		"name" : "连云港师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1067",
		"name" : "江苏经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1068",
		"name" : "南京特殊教育职业技术学院",
		"subItems" : []
	}, {
		"id" : "1069",
		"name" : "九州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1070",
		"name" : "硅湖职业技术学院",
		"subItems" : []
	}, {
		"id" : "1071",
		"name" : "泰州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1072",
		"name" : "常州信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1073",
		"name" : "江苏联合职业技术学院",
		"subItems" : []
	}, {
		"id" : "1074",
		"name" : "江苏海事职业技术学院",
		"subItems" : []
	}, {
		"id" : "1075",
		"name" : "应天职业技术学院",
		"subItems" : []
	}, {
		"id" : "1076",
		"name" : "无锡科技职业学院",
		"subItems" : []
	}, {
		"id" : "1077",
		"name" : "盐城卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "1078",
		"name" : "扬州环境资源职业技术学院",
		"subItems" : []
	}, {
		"id" : "1079",
		"name" : "南通农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1080",
		"name" : "苏州经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1081",
		"name" : "苏州工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1082",
		"name" : "苏州托普信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1083",
		"name" : "苏州卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "1084",
		"name" : "无锡商业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1085",
		"name" : "南通航运职业技术学院",
		"subItems" : []
	}, {
		"id" : "1086",
		"name" : "南京交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1087",
		"name" : "淮安信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1088",
		"name" : "江苏农牧科技职业学院",
		"subItems" : []
	}, {
		"id" : "1089",
		"name" : "常州纺织服装职业技术学院",
		"subItems" : []
	}, {
		"id" : "1090",
		"name" : "苏州农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1091",
		"name" : "苏州工业园区职业技术学院",
		"subItems" : []
	}, {
		"id" : "1092",
		"name" : "太湖创意职业技术学院",
		"subItems" : []
	}, {
		"id" : "1093",
		"name" : "炎黄职业技术学院",
		"subItems" : []
	}, {
		"id" : "1094",
		"name" : "南京化工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1095",
		"name" : "正德职业技术学院",
		"subItems" : []
	}, {
		"id" : "1096",
		"name" : "钟山职业技术学院",
		"subItems" : []
	}, {
		"id" : "1097",
		"name" : "无锡南洋职业技术学院",
		"subItems" : []
	}, {
		"id" : "1098",
		"name" : "江南影视艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1099",
		"name" : "金肯职业技术学院",
		"subItems" : []
	}, {
		"id" : "1100",
		"name" : "常州轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1101",
		"name" : "常州工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1102",
		"name" : "江苏农林职业技术学院",
		"subItems" : []
	}, {
		"id" : "1103",
		"name" : "江苏食品药品职业技术学院",
		"subItems" : []
	}, {
		"id" : "1104",
		"name" : "建东职业技术学院",
		"subItems" : []
	}, {
		"id" : "1105",
		"name" : "南京铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "1106",
		"name" : "徐州工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1107",
		"name" : "江苏信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1108",
		"name" : "宿迁职业技术学院",
		"subItems" : []
	}, {
		"id" : "1109",
		"name" : "南京信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1110",
		"name" : "江海职业技术学院",
		"subItems" : []
	}, {
		"id" : "1111",
		"name" : "常州机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1112",
		"name" : "江阴职业技术学院",
		"subItems" : []
	}, {
		"id" : "1113",
		"name" : "无锡城市职业技术学院",
		"subItems" : []
	}, {
		"id" : "1114",
		"name" : "无锡工艺职业技术学院",
		"subItems" : []
	}, {
		"id" : "1115",
		"name" : "金山职业技术学院",
		"subItems" : []
	}, {
		"id" : "1116",
		"name" : "苏州健雄职业技术学院",
		"subItems" : []
	}, {
		"id" : "1117",
		"name" : "盐城工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1118",
		"name" : "江苏财经职业技术学院",
		"subItems" : []
	}, {
		"id" : "1119",
		"name" : "扬州工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1120",
		"name" : "苏州港大思培科技职业学院",
		"subItems" : []
	}, {
		"id" : "1121",
		"name" : "昆山登云科技职业学院",
		"subItems" : []
	}, {
		"id" : "1122",
		"name" : "南京视觉艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1123",
		"name" : "江苏城市职业学院",
		"subItems" : []
	}, {
		"id" : "1124",
		"name" : "南京城市职业学院",
		"subItems" : []
	}, {
		"id" : "1125",
		"name" : "南京机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1126",
		"name" : "苏州高博软件技术职业学院",
		"subItems" : []
	}, {
		"id" : "1127",
		"name" : "南京旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1128",
		"name" : "江苏建康职业学院",
		"subItems" : []
	}, {
		"id" : "1129",
		"name" : "苏州信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1130",
		"name" : "宿迁泽达职业技术学院",
		"subItems" : []
	}, {
		"id" : "1131",
		"name" : "苏州工业园区服务外包职业学院",
		"subItems" : []
	}, {
		"id" : "1132",
		"name" : "徐州幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1133",
		"name" : "徐州生物工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1134",
		"name" : "江苏商贸职业学院",
		"subItems" : []
	}, {
		"id" : "1135",
		"name" : "南通师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1136",
		"name" : "扬州中瑞酒店职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "江西省",
	"subItems" : [ {
		"id" : "1137",
		"name" : "南昌大学",
		"subItems" : []
	}, {
		"id" : "1138",
		"name" : "华东交通大学",
		"subItems" : []
	}, {
		"id" : "1139",
		"name" : "东华理工大学",
		"subItems" : []
	}, {
		"id" : "1140",
		"name" : "南昌航空大学",
		"subItems" : []
	}, {
		"id" : "1141",
		"name" : "江西理工大学",
		"subItems" : []
	}, {
		"id" : "1142",
		"name" : "景德镇陶瓷学院",
		"subItems" : []
	}, {
		"id" : "1143",
		"name" : "江西农业大学",
		"subItems" : []
	}, {
		"id" : "1144",
		"name" : "江西中医药大学",
		"subItems" : []
	}, {
		"id" : "1145",
		"name" : "赣南医学院",
		"subItems" : []
	}, {
		"id" : "1146",
		"name" : "江西师范大学",
		"subItems" : []
	}, {
		"id" : "1147",
		"name" : "上饶师范学院",
		"subItems" : []
	}, {
		"id" : "1148",
		"name" : "宜春学院",
		"subItems" : []
	}, {
		"id" : "1149",
		"name" : "赣南师范学院",
		"subItems" : []
	}, {
		"id" : "1150",
		"name" : "井冈山大学",
		"subItems" : []
	}, {
		"id" : "1151",
		"name" : "江西财经大学",
		"subItems" : []
	}, {
		"id" : "1152",
		"name" : "江西科技学院",
		"subItems" : []
	}, {
		"id" : "1153",
		"name" : "景德镇学院",
		"subItems" : []
	}, {
		"id" : "1154",
		"name" : "萍乡学院",
		"subItems" : []
	}, {
		"id" : "1155",
		"name" : "江西科技师范大学",
		"subItems" : []
	}, {
		"id" : "1156",
		"name" : "南昌工程学院",
		"subItems" : []
	}, {
		"id" : "1157",
		"name" : "江西警察学院",
		"subItems" : []
	}, {
		"id" : "1158",
		"name" : "新余学院",
		"subItems" : []
	}, {
		"id" : "1159",
		"name" : "九江学院",
		"subItems" : []
	}, {
		"id" : "1160",
		"name" : "江西工程学院",
		"subItems" : []
	}, {
		"id" : "1161",
		"name" : "南昌理工学院",
		"subItems" : []
	}, {
		"id" : "1162",
		"name" : "江西应用科技学院",
		"subItems" : []
	}, {
		"id" : "1163",
		"name" : "江西服装学院",
		"subItems" : []
	}, {
		"id" : "1164",
		"name" : "南昌工学院",
		"subItems" : []
	}, {
		"id" : "1165",
		"name" : "南昌师范学院",
		"subItems" : []
	}, {
		"id" : "1166",
		"name" : "江西工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1167",
		"name" : "江西医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1168",
		"name" : "九江职业大学",
		"subItems" : []
	}, {
		"id" : "1169",
		"name" : "九江职业技术学院",
		"subItems" : []
	}, {
		"id" : "1170",
		"name" : "江西司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "1171",
		"name" : "江西陶瓷工艺美术职业技术学院",
		"subItems" : []
	}, {
		"id" : "1172",
		"name" : "江西旅游商贸职业学院",
		"subItems" : []
	}, {
		"id" : "1173",
		"name" : "江西电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1174",
		"name" : "江西环境工程职业学院",
		"subItems" : []
	}, {
		"id" : "1175",
		"name" : "江西艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1176",
		"name" : "鹰潭职业技术学院",
		"subItems" : []
	}, {
		"id" : "1177",
		"name" : "江西信息应用职业技术学院",
		"subItems" : []
	}, {
		"id" : "1178",
		"name" : "江西交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1179",
		"name" : "江西财经职业学院",
		"subItems" : []
	}, {
		"id" : "1180",
		"name" : "江西应用技术职业学院",
		"subItems" : []
	}, {
		"id" : "1181",
		"name" : "江西现代职业技术学院",
		"subItems" : []
	}, {
		"id" : "1182",
		"name" : "江西工业工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1183",
		"name" : "江西机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1184",
		"name" : "江西科技职业学院",
		"subItems" : []
	}, {
		"id" : "1185",
		"name" : "南昌职业学院",
		"subItems" : []
	}, {
		"id" : "1186",
		"name" : "江西外语外贸职业学院",
		"subItems" : []
	}, {
		"id" : "1187",
		"name" : "江西工业贸易职业技术学院",
		"subItems" : []
	}, {
		"id" : "1188",
		"name" : "宜春职业技术学院",
		"subItems" : []
	}, {
		"id" : "1189",
		"name" : "江西应用工程职业学院",
		"subItems" : []
	}, {
		"id" : "1190",
		"name" : "江西生物科技职业学院",
		"subItems" : []
	}, {
		"id" : "1191",
		"name" : "江西建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "1192",
		"name" : "抚州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1193",
		"name" : "南昌师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1194",
		"name" : "江西中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "1195",
		"name" : "江西先锋软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "1196",
		"name" : "江西经济管理职业学院",
		"subItems" : []
	}, {
		"id" : "1197",
		"name" : "江西制造职业技术学院",
		"subItems" : []
	}, {
		"id" : "1198",
		"name" : "江西工程职业学院",
		"subItems" : []
	}, {
		"id" : "1199",
		"name" : "江西青年职业学院",
		"subItems" : []
	}, {
		"id" : "1200",
		"name" : "上饶职业技术学院",
		"subItems" : []
	}, {
		"id" : "1201",
		"name" : "江西航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "1202",
		"name" : "江西农业工程职业学院",
		"subItems" : []
	}, {
		"id" : "1203",
		"name" : "赣西科技职业学院",
		"subItems" : []
	}, {
		"id" : "1204",
		"name" : "江西护理职业技术学院",
		"subItems" : []
	}, {
		"id" : "1205",
		"name" : "江西新能源科技职业学院",
		"subItems" : []
	}, {
		"id" : "1206",
		"name" : "江西枫林涉外经贸职业学院",
		"subItems" : []
	}, {
		"id" : "1207",
		"name" : "江西泰豪动漫职业学院",
		"subItems" : []
	}, {
		"id" : "1208",
		"name" : "江西冶金职业技术学院",
		"subItems" : []
	}, {
		"id" : "1209",
		"name" : "江西管理职业学院",
		"subItems" : []
	}, {
		"id" : "1210",
		"name" : "江西新闻出版职业技术学院",
		"subItems" : []
	}, {
		"id" : "1211",
		"name" : "江西工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "1212",
		"name" : "景德镇陶瓷职业技术学院",
		"subItems" : []
	}, {
		"id" : "1213",
		"name" : "共青科技职业学院",
		"subItems" : []
	}, {
		"id" : "1214",
		"name" : "赣州师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1215",
		"name" : "江西水利职业学院",
		"subItems" : []
	}, {
		"id" : "1216",
		"name" : "宜春幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1217",
		"name" : "吉安职业技术学院",
		"subItems" : []
	}, {
		"id" : "1218",
		"name" : "江西洪州职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "河北省",
	"subItems" : [ {
		"id" : "1219",
		"name" : "河北大学",
		"subItems" : []
	}, {
		"id" : "1220",
		"name" : "河北工程大学",
		"subItems" : []
	}, {
		"id" : "1221",
		"name" : "石家庄经济学院",
		"subItems" : []
	}, {
		"id" : "1222",
		"name" : "河北工业大学",
		"subItems" : []
	}, {
		"id" : "1223",
		"name" : "河北联合大学",
		"subItems" : []
	}, {
		"id" : "1224",
		"name" : "河北科技大学",
		"subItems" : []
	}, {
		"id" : "1225",
		"name" : "河北建筑工程学院",
		"subItems" : []
	}, {
		"id" : "1226",
		"name" : "河北农业大学",
		"subItems" : []
	}, {
		"id" : "1227",
		"name" : "河北医科大学",
		"subItems" : []
	}, {
		"id" : "1228",
		"name" : "河北北方学院",
		"subItems" : []
	}, {
		"id" : "1229",
		"name" : "承德医学院",
		"subItems" : []
	}, {
		"id" : "1230",
		"name" : "河北师范大学",
		"subItems" : []
	}, {
		"id" : "1231",
		"name" : "保定学院",
		"subItems" : []
	}, {
		"id" : "1232",
		"name" : "河北民族师范学院",
		"subItems" : []
	}, {
		"id" : "1233",
		"name" : "唐山师范学院",
		"subItems" : []
	}, {
		"id" : "1234",
		"name" : "廊坊师范学院",
		"subItems" : []
	}, {
		"id" : "1235",
		"name" : "衡水学院",
		"subItems" : []
	}, {
		"id" : "1236",
		"name" : "石家庄学院",
		"subItems" : []
	}, {
		"id" : "1237",
		"name" : "邯郸学院",
		"subItems" : []
	}, {
		"id" : "1238",
		"name" : "邢台学院",
		"subItems" : []
	}, {
		"id" : "1239",
		"name" : "沧州师范学院",
		"subItems" : []
	}, {
		"id" : "1240",
		"name" : "石家庄铁道大学",
		"subItems" : []
	}, {
		"id" : "1241",
		"name" : "燕山大学",
		"subItems" : []
	}, {
		"id" : "1242",
		"name" : "河北科技师范学院",
		"subItems" : []
	}, {
		"id" : "1243",
		"name" : "唐山学院",
		"subItems" : []
	}, {
		"id" : "1244",
		"name" : "华北科技学院",
		"subItems" : []
	}, {
		"id" : "1245",
		"name" : "中国人民武装警察部队学院",
		"subItems" : []
	}, {
		"id" : "1246",
		"name" : "河北体育学院",
		"subItems" : []
	}, {
		"id" : "1247",
		"name" : "河北金融学院",
		"subItems" : []
	}, {
		"id" : "1248",
		"name" : "北华航天工业学院",
		"subItems" : []
	}, {
		"id" : "1249",
		"name" : "防灾科技学院",
		"subItems" : []
	}, {
		"id" : "1250",
		"name" : "河北经贸大学",
		"subItems" : []
	}, {
		"id" : "1251",
		"name" : "中央司法警官学院",
		"subItems" : []
	}, {
		"id" : "1252",
		"name" : "河北传媒学院",
		"subItems" : []
	}, {
		"id" : "1253",
		"name" : "河北工程技术学院",
		"subItems" : []
	}, {
		"id" : "1254",
		"name" : "河北美术学院",
		"subItems" : []
	}, {
		"id" : "1255",
		"name" : "河北科技学院",
		"subItems" : []
	}, {
		"id" : "1256",
		"name" : "河北外国语学院",
		"subItems" : []
	}, {
		"id" : "1257",
		"name" : "燕京理工学院",
		"subItems" : []
	}, {
		"id" : "1258",
		"name" : "河北中医学院",
		"subItems" : []
	}, {
		"id" : "1259",
		"name" : "张家口学院",
		"subItems" : []
	}, {
		"id" : "1260",
		"name" : "河北工程技术高等专科学校",
		"subItems" : []
	}, {
		"id" : "1261",
		"name" : "河北工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1262",
		"name" : "邯郸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1263",
		"name" : "石家庄职业技术学院",
		"subItems" : []
	}, {
		"id" : "1264",
		"name" : "张家口职业技术学院",
		"subItems" : []
	}, {
		"id" : "1265",
		"name" : "承德石油高等专科学校",
		"subItems" : []
	}, {
		"id" : "1266",
		"name" : "邢台职业技术学院",
		"subItems" : []
	}, {
		"id" : "1267",
		"name" : "河北软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "1268",
		"name" : "河北石油职业技术学院",
		"subItems" : []
	}, {
		"id" : "1269",
		"name" : "河北建材职业技术学院",
		"subItems" : []
	}, {
		"id" : "1270",
		"name" : "河北政法职业学院",
		"subItems" : []
	}, {
		"id" : "1271",
		"name" : "沧州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1272",
		"name" : "河北能源职业技术学院",
		"subItems" : []
	}, {
		"id" : "1273",
		"name" : "石家庄铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "1274",
		"name" : "保定职业技术学院",
		"subItems" : []
	}, {
		"id" : "1275",
		"name" : "秦皇岛职业技术学院",
		"subItems" : []
	}, {
		"id" : "1276",
		"name" : "石家庄工程职业学院",
		"subItems" : []
	}, {
		"id" : "1277",
		"name" : "石家庄城市经济职业学院",
		"subItems" : []
	}, {
		"id" : "1278",
		"name" : "唐山职业技术学院",
		"subItems" : []
	}, {
		"id" : "1279",
		"name" : "衡水职业技术学院",
		"subItems" : []
	}, {
		"id" : "1280",
		"name" : "唐山工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1281",
		"name" : "邢台医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1282",
		"name" : "河北省艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1283",
		"name" : "河北旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1284",
		"name" : "石家庄财经职业学院",
		"subItems" : []
	}, {
		"id" : "1285",
		"name" : "河北交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1286",
		"name" : "河北化工医药职业技术学院",
		"subItems" : []
	}, {
		"id" : "1287",
		"name" : "石家庄信息工程职业学院",
		"subItems" : []
	}, {
		"id" : "1288",
		"name" : "河北外国语职业学院",
		"subItems" : []
	}, {
		"id" : "1289",
		"name" : "保定电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1290",
		"name" : "河北机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1291",
		"name" : "渤海石油职业学院",
		"subItems" : []
	}, {
		"id" : "1292",
		"name" : "廊坊职业技术学院",
		"subItems" : []
	}, {
		"id" : "1293",
		"name" : "唐山科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "1294",
		"name" : "石家庄邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1295",
		"name" : "河北公安警察职业学院",
		"subItems" : []
	}, {
		"id" : "1296",
		"name" : "石家庄工商职业学院",
		"subItems" : []
	}, {
		"id" : "1297",
		"name" : "石家庄理工职业学院",
		"subItems" : []
	}, {
		"id" : "1298",
		"name" : "石家庄科技信息职业学院",
		"subItems" : []
	}, {
		"id" : "1299",
		"name" : "河北司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "1300",
		"name" : "沧州医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1301",
		"name" : "河北女子职业技术学院",
		"subItems" : []
	}, {
		"id" : "1302",
		"name" : "石家庄医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1303",
		"name" : "石家庄经济职业学院",
		"subItems" : []
	}, {
		"id" : "1304",
		"name" : "冀中职业学院",
		"subItems" : []
	}, {
		"id" : "1305",
		"name" : "石家庄人民医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1306",
		"name" : "石家庄科技工程职业学院",
		"subItems" : []
	}, {
		"id" : "1307",
		"name" : "河北劳动关系职业学院",
		"subItems" : []
	}, {
		"id" : "1308",
		"name" : "石家庄科技职业学院",
		"subItems" : []
	}, {
		"id" : "1309",
		"name" : "廊坊东方职业技术学院",
		"subItems" : []
	}, {
		"id" : "1310",
		"name" : "泊头职业学院",
		"subItems" : []
	}, {
		"id" : "1311",
		"name" : "宣化科技职业学院",
		"subItems" : []
	}, {
		"id" : "1312",
		"name" : "廊坊燕京职业技术学院",
		"subItems" : []
	}, {
		"id" : "1313",
		"name" : "承德护理职业学院",
		"subItems" : []
	}, {
		"id" : "1314",
		"name" : "石家庄幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1315",
		"name" : "廊坊卫生职业学院",
		"subItems" : []
	}, {
		"id" : "1316",
		"name" : "河北轨道运输职业技术学院",
		"subItems" : []
	}, {
		"id" : "1317",
		"name" : "保定幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1318",
		"name" : "河北工艺美术职业学院",
		"subItems" : []
	}, {
		"id" : "1319",
		"name" : "渤海理工职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "河南省",
	"subItems" : [ {
		"id" : "1320",
		"name" : "华北水利水电大学",
		"subItems" : []
	}, {
		"id" : "1321",
		"name" : "郑州大学",
		"subItems" : []
	}, {
		"id" : "1322",
		"name" : "河南理工大学",
		"subItems" : []
	}, {
		"id" : "1323",
		"name" : "郑州轻工业学院",
		"subItems" : []
	}, {
		"id" : "1324",
		"name" : "河南工业大学",
		"subItems" : []
	}, {
		"id" : "1325",
		"name" : "河南科技大学",
		"subItems" : []
	}, {
		"id" : "1326",
		"name" : "中原工学院",
		"subItems" : []
	}, {
		"id" : "1327",
		"name" : "河南农业大学",
		"subItems" : []
	}, {
		"id" : "1328",
		"name" : "河南科技学院",
		"subItems" : []
	}, {
		"id" : "1329",
		"name" : "河南牧业经济学院",
		"subItems" : []
	}, {
		"id" : "1330",
		"name" : "河南中医学院",
		"subItems" : []
	}, {
		"id" : "1331",
		"name" : "新乡医学院",
		"subItems" : []
	}, {
		"id" : "1332",
		"name" : "河南大学",
		"subItems" : []
	}, {
		"id" : "1333",
		"name" : "河南师范大学",
		"subItems" : []
	}, {
		"id" : "1334",
		"name" : "信阳师范学院",
		"subItems" : []
	}, {
		"id" : "1335",
		"name" : "周口师范学院",
		"subItems" : []
	}, {
		"id" : "1336",
		"name" : "安阳师范学院",
		"subItems" : []
	}, {
		"id" : "1337",
		"name" : "许昌学院",
		"subItems" : []
	}, {
		"id" : "1338",
		"name" : "南阳师范学院",
		"subItems" : []
	}, {
		"id" : "1339",
		"name" : "洛阳师范学院",
		"subItems" : []
	}, {
		"id" : "1340",
		"name" : "商丘师范学院",
		"subItems" : []
	}, {
		"id" : "1341",
		"name" : "河南财经政法大学",
		"subItems" : []
	}, {
		"id" : "1342",
		"name" : "郑州航空工业管理学院",
		"subItems" : []
	}, {
		"id" : "1343",
		"name" : "黄淮学院",
		"subItems" : []
	}, {
		"id" : "1344",
		"name" : "平顶山学院",
		"subItems" : []
	}, {
		"id" : "1345",
		"name" : "洛阳理工学院",
		"subItems" : []
	}, {
		"id" : "1346",
		"name" : "新乡学院",
		"subItems" : []
	}, {
		"id" : "1347",
		"name" : "信阳农林学院",
		"subItems" : []
	}, {
		"id" : "1348",
		"name" : "安阳工学院",
		"subItems" : []
	}, {
		"id" : "1349",
		"name" : "河南工程学院",
		"subItems" : []
	}, {
		"id" : "1350",
		"name" : "南阳理工学院",
		"subItems" : []
	}, {
		"id" : "1351",
		"name" : "河南城建学院",
		"subItems" : []
	}, {
		"id" : "1352",
		"name" : "河南警察学院",
		"subItems" : []
	}, {
		"id" : "1353",
		"name" : "黄河科技学院",
		"subItems" : []
	}, {
		"id" : "1354",
		"name" : "铁道警察学院",
		"subItems" : []
	}, {
		"id" : "1355",
		"name" : "郑州科技学院",
		"subItems" : []
	}, {
		"id" : "1356",
		"name" : "郑州工业应用技术学院",
		"subItems" : []
	}, {
		"id" : "1357",
		"name" : "郑州师范学院",
		"subItems" : []
	}, {
		"id" : "1358",
		"name" : "郑州财经学院",
		"subItems" : []
	}, {
		"id" : "1359",
		"name" : "黄河交通学院",
		"subItems" : []
	}, {
		"id" : "1360",
		"name" : "商丘工学院",
		"subItems" : []
	}, {
		"id" : "1361",
		"name" : "商丘学院",
		"subItems" : []
	}, {
		"id" : "1362",
		"name" : "郑州成功财经学院",
		"subItems" : []
	}, {
		"id" : "1363",
		"name" : "郑州升达经贸管理学院",
		"subItems" : []
	}, {
		"id" : "1364",
		"name" : "河南职业技术学院",
		"subItems" : []
	}, {
		"id" : "1365",
		"name" : "漯河职业技术学院",
		"subItems" : []
	}, {
		"id" : "1366",
		"name" : "三门峡职业技术学院",
		"subItems" : []
	}, {
		"id" : "1367",
		"name" : "郑州铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "1368",
		"name" : "中州大学",
		"subItems" : []
	}, {
		"id" : "1369",
		"name" : "开封大学",
		"subItems" : []
	}, {
		"id" : "1370",
		"name" : "河南机电高等专科学校",
		"subItems" : []
	}, {
		"id" : "1371",
		"name" : "焦作大学",
		"subItems" : []
	}, {
		"id" : "1372",
		"name" : "河南财政税务高等专科学校",
		"subItems" : []
	}, {
		"id" : "1373",
		"name" : "濮阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1374",
		"name" : "郑州电力高等专科学校",
		"subItems" : []
	}, {
		"id" : "1375",
		"name" : "黄河水利职业技术学院",
		"subItems" : []
	}, {
		"id" : "1376",
		"name" : "许昌职业技术学院",
		"subItems" : []
	}, {
		"id" : "1377",
		"name" : "河南工业和信息化职业学院",
		"subItems" : []
	}, {
		"id" : "1378",
		"name" : "河南水利与环境职业学院",
		"subItems" : []
	}, {
		"id" : "1379",
		"name" : "商丘职业技术学院",
		"subItems" : []
	}, {
		"id" : "1380",
		"name" : "平顶山工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1381",
		"name" : "周口职业技术学院",
		"subItems" : []
	}, {
		"id" : "1382",
		"name" : "济源职业技术学院",
		"subItems" : []
	}, {
		"id" : "1383",
		"name" : "河南司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "1384",
		"name" : "鹤壁职业技术学院",
		"subItems" : []
	}, {
		"id" : "1385",
		"name" : "河南工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1386",
		"name" : "郑州澍青医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1387",
		"name" : "焦作师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1388",
		"name" : "河南检察职业学院",
		"subItems" : []
	}, {
		"id" : "1389",
		"name" : "河南质量工程职业学院",
		"subItems" : []
	}, {
		"id" : "1390",
		"name" : "郑州信息科技职业学院",
		"subItems" : []
	}, {
		"id" : "1391",
		"name" : "漯河医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1392",
		"name" : "南阳医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1393",
		"name" : "商丘医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1394",
		"name" : "郑州电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1395",
		"name" : "信阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1396",
		"name" : "嵩山少林武术职业学院",
		"subItems" : []
	}, {
		"id" : "1397",
		"name" : "郑州工业安全职业学院",
		"subItems" : []
	}, {
		"id" : "1398",
		"name" : "永城职业学院",
		"subItems" : []
	}, {
		"id" : "1399",
		"name" : "河南经贸职业学院",
		"subItems" : []
	}, {
		"id" : "1400",
		"name" : "河南交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1401",
		"name" : "河南农业职业学院",
		"subItems" : []
	}, {
		"id" : "1402",
		"name" : "郑州旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1403",
		"name" : "郑州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1404",
		"name" : "河南信息统计职业学院",
		"subItems" : []
	}, {
		"id" : "1405",
		"name" : "河南林业职业学院",
		"subItems" : []
	}, {
		"id" : "1406",
		"name" : "河南工业贸易职业学院",
		"subItems" : []
	}, {
		"id" : "1407",
		"name" : "郑州电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1408",
		"name" : "周口科技职业学院",
		"subItems" : []
	}, {
		"id" : "1409",
		"name" : "河南建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "1410",
		"name" : "漯河食品职业学院",
		"subItems" : []
	}, {
		"id" : "1411",
		"name" : "郑州城市职业学院",
		"subItems" : []
	}, {
		"id" : "1412",
		"name" : "安阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1413",
		"name" : "新乡职业技术学院",
		"subItems" : []
	}, {
		"id" : "1414",
		"name" : "驻马店职业技术学院",
		"subItems" : []
	}, {
		"id" : "1415",
		"name" : "焦作工贸职业学院",
		"subItems" : []
	}, {
		"id" : "1416",
		"name" : "许昌陶瓷职业学院",
		"subItems" : []
	}, {
		"id" : "1417",
		"name" : "郑州理工职业学院",
		"subItems" : []
	}, {
		"id" : "1418",
		"name" : "郑州信息工程职业学院",
		"subItems" : []
	}, {
		"id" : "1419",
		"name" : "长垣烹饪职业技术学院",
		"subItems" : []
	}, {
		"id" : "1420",
		"name" : "开封文化艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1421",
		"name" : "河南化工职业学院",
		"subItems" : []
	}, {
		"id" : "1422",
		"name" : "河南艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1423",
		"name" : "河南机电职业学院",
		"subItems" : []
	}, {
		"id" : "1424",
		"name" : "河南护理职业学院",
		"subItems" : []
	}, {
		"id" : "1425",
		"name" : "许昌电气职业学院",
		"subItems" : []
	}, {
		"id" : "1426",
		"name" : "信阳涉外职业技术学院",
		"subItems" : []
	}, {
		"id" : "1427",
		"name" : "鹤壁汽车工程职业学院",
		"subItems" : []
	}, {
		"id" : "1428",
		"name" : "南阳职业学院",
		"subItems" : []
	}, {
		"id" : "1429",
		"name" : "郑州商贸旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1430",
		"name" : "河南推拿职业学院",
		"subItems" : []
	}, {
		"id" : "1431",
		"name" : "洛阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1432",
		"name" : "郑州幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1433",
		"name" : "安阳幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1434",
		"name" : "郑州黄河护理职业学院",
		"subItems" : []
	}, {
		"id" : "1435",
		"name" : "河南医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1436",
		"name" : "郑州财税金融职业学院",
		"subItems" : []
	}, {
		"id" : "1437",
		"name" : "南阳农业职业学院",
		"subItems" : []
	}, {
		"id" : "1438",
		"name" : "洛阳科技职业学院",
		"subItems" : []
	}, {
		"id" : "1439",
		"name" : "鹤壁能源化工职业学院",
		"subItems" : []
	}, {
		"id" : "1440",
		"name" : "平顶山文化艺术职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "浙江省",
	"subItems" : [ {
		"id" : "1441",
		"name" : "浙江大学",
		"subItems" : []
	}, {
		"id" : "1442",
		"name" : "杭州电子科技大学",
		"subItems" : []
	}, {
		"id" : "1443",
		"name" : "浙江工业大学",
		"subItems" : []
	}, {
		"id" : "1444",
		"name" : "浙江理工大学",
		"subItems" : []
	}, {
		"id" : "1445",
		"name" : "浙江海洋学院",
		"subItems" : []
	}, {
		"id" : "1446",
		"name" : "浙江农林大学",
		"subItems" : []
	}, {
		"id" : "1447",
		"name" : "温州医科大学",
		"subItems" : []
	}, {
		"id" : "1448",
		"name" : "浙江中医药大学",
		"subItems" : []
	}, {
		"id" : "1449",
		"name" : "浙江师范大学",
		"subItems" : []
	}, {
		"id" : "1450",
		"name" : "杭州师范大学",
		"subItems" : []
	}, {
		"id" : "1451",
		"name" : "湖州师范学院",
		"subItems" : []
	}, {
		"id" : "1452",
		"name" : "绍兴文理学院",
		"subItems" : []
	}, {
		"id" : "1453",
		"name" : "台州学院",
		"subItems" : []
	}, {
		"id" : "1454",
		"name" : "温州大学",
		"subItems" : []
	}, {
		"id" : "1455",
		"name" : "丽水学院",
		"subItems" : []
	}, {
		"id" : "1456",
		"name" : "浙江工商大学",
		"subItems" : []
	}, {
		"id" : "1457",
		"name" : "嘉兴学院",
		"subItems" : []
	}, {
		"id" : "1458",
		"name" : "中国美术学院",
		"subItems" : []
	}, {
		"id" : "1459",
		"name" : "中国计量学院",
		"subItems" : []
	}, {
		"id" : "1460",
		"name" : "公安海警学院",
		"subItems" : []
	}, {
		"id" : "1461",
		"name" : "浙江万里学院",
		"subItems" : []
	}, {
		"id" : "1462",
		"name" : "浙江科技学院",
		"subItems" : []
	}, {
		"id" : "1463",
		"name" : "宁波工程学院",
		"subItems" : []
	}, {
		"id" : "1464",
		"name" : "浙江水利水电学院",
		"subItems" : []
	}, {
		"id" : "1465",
		"name" : "浙江财经大学",
		"subItems" : []
	}, {
		"id" : "1466",
		"name" : "浙江警察学院",
		"subItems" : []
	}, {
		"id" : "1467",
		"name" : "衢州学院",
		"subItems" : []
	}, {
		"id" : "1468",
		"name" : "宁波大学",
		"subItems" : []
	}, {
		"id" : "1469",
		"name" : "浙江传媒学院",
		"subItems" : []
	}, {
		"id" : "1470",
		"name" : "浙江树人学院",
		"subItems" : []
	}, {
		"id" : "1471",
		"name" : "浙江越秀外国语学院",
		"subItems" : []
	}, {
		"id" : "1472",
		"name" : "宁波大红鹰学院",
		"subItems" : []
	}, {
		"id" : "1473",
		"name" : "浙江外国语学院",
		"subItems" : []
	}, {
		"id" : "1474",
		"name" : "宁波诺丁汉大学",
		"subItems" : []
	}, {
		"id" : "1475",
		"name" : "温州肯恩大学",
		"subItems" : []
	}, {
		"id" : "1476",
		"name" : "宁波职业技术学院",
		"subItems" : []
	}, {
		"id" : "1477",
		"name" : "温州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1478",
		"name" : "浙江交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1479",
		"name" : "金华职业技术学院",
		"subItems" : []
	}, {
		"id" : "1480",
		"name" : "宁波城市职业技术学院",
		"subItems" : []
	}, {
		"id" : "1481",
		"name" : "浙江电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1482",
		"name" : "浙江同济科技职业学院",
		"subItems" : []
	}, {
		"id" : "1483",
		"name" : "浙江工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "1484",
		"name" : "台州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1485",
		"name" : "浙江工贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1486",
		"name" : "浙江医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "1487",
		"name" : "浙江机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1488",
		"name" : "浙江建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "1489",
		"name" : "浙江艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1490",
		"name" : "浙江经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1491",
		"name" : "浙江商业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1492",
		"name" : "浙江经济职业技术学院",
		"subItems" : []
	}, {
		"id" : "1493",
		"name" : "浙江旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1494",
		"name" : "浙江育英职业技术学院",
		"subItems" : []
	}, {
		"id" : "1495",
		"name" : "浙江警官职业学院",
		"subItems" : []
	}, {
		"id" : "1496",
		"name" : "浙江金融职业学院",
		"subItems" : []
	}, {
		"id" : "1497",
		"name" : "浙江工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1498",
		"name" : "杭州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1499",
		"name" : "嘉兴职业技术学院",
		"subItems" : []
	}, {
		"id" : "1500",
		"name" : "湖州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1501",
		"name" : "绍兴职业技术学院",
		"subItems" : []
	}, {
		"id" : "1502",
		"name" : "衢州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1503",
		"name" : "丽水职业技术学院",
		"subItems" : []
	}, {
		"id" : "1504",
		"name" : "浙江东方职业技术学院",
		"subItems" : []
	}, {
		"id" : "1505",
		"name" : "义乌工商职业技术学院",
		"subItems" : []
	}, {
		"id" : "1506",
		"name" : "浙江医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1507",
		"name" : "浙江纺织服装职业技术学院",
		"subItems" : []
	}, {
		"id" : "1508",
		"name" : "杭州科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "1509",
		"name" : "浙江长征职业技术学院",
		"subItems" : []
	}, {
		"id" : "1510",
		"name" : "嘉兴南洋职业技术学院",
		"subItems" : []
	}, {
		"id" : "1511",
		"name" : "浙江广厦建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "1512",
		"name" : "杭州万向职业技术学院",
		"subItems" : []
	}, {
		"id" : "1513",
		"name" : "浙江邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1514",
		"name" : "宁波卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "1515",
		"name" : "台州科技职业学院",
		"subItems" : []
	}, {
		"id" : "1516",
		"name" : "浙江国际海运职业技术学院",
		"subItems" : []
	}, {
		"id" : "1517",
		"name" : "浙江体育职业技术学院",
		"subItems" : []
	}, {
		"id" : "1518",
		"name" : "温州科技职业学院",
		"subItems" : []
	}, {
		"id" : "1519",
		"name" : "浙江汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "1520",
		"name" : "浙江横店影视职业学院",
		"subItems" : []
	}, {
		"id" : "1521",
		"name" : "浙江农业商贸职业学院",
		"subItems" : []
	}, {
		"id" : "1522",
		"name" : "浙江特殊教育职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "海南省",
	"subItems" : [ {
		"id" : "1523",
		"name" : "海南大学",
		"subItems" : []
	}, {
		"id" : "1524",
		"name" : "琼州学院",
		"subItems" : []
	}, {
		"id" : "1525",
		"name" : "海南师范大学",
		"subItems" : []
	}, {
		"id" : "1526",
		"name" : "海南医学院",
		"subItems" : []
	}, {
		"id" : "1527",
		"name" : "海口经济学院",
		"subItems" : []
	}, {
		"id" : "1528",
		"name" : "三亚学院",
		"subItems" : []
	}, {
		"id" : "1529",
		"name" : "海南职业技术学院",
		"subItems" : []
	}, {
		"id" : "1530",
		"name" : "三亚城市职业学院",
		"subItems" : []
	}, {
		"id" : "1531",
		"name" : "海南软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "1532",
		"name" : "海南政法职业学院",
		"subItems" : []
	}, {
		"id" : "1533",
		"name" : "海南外国语职业学院",
		"subItems" : []
	}, {
		"id" : "1534",
		"name" : "琼台师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1535",
		"name" : "海南经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1536",
		"name" : "海南工商职业学院",
		"subItems" : []
	}, {
		"id" : "1537",
		"name" : "三亚航空旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1538",
		"name" : "海南科技职业学院",
		"subItems" : []
	}, {
		"id" : "1539",
		"name" : "三亚理工职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "湖北省",
	"subItems" : [ {
		"id" : "1540",
		"name" : "武汉大学",
		"subItems" : []
	}, {
		"id" : "1541",
		"name" : "华中科技大学",
		"subItems" : []
	}, {
		"id" : "1542",
		"name" : "武汉科技大学",
		"subItems" : []
	}, {
		"id" : "1543",
		"name" : "长江大学",
		"subItems" : []
	}, {
		"id" : "1544",
		"name" : "武汉工程大学",
		"subItems" : []
	}, {
		"id" : "1545",
		"name" : "中国地质大学",
		"subItems" : []
	}, {
		"id" : "1546",
		"name" : "武汉纺织大学",
		"subItems" : []
	}, {
		"id" : "1547",
		"name" : "武汉轻工大学",
		"subItems" : []
	}, {
		"id" : "1548",
		"name" : "武汉理工大学",
		"subItems" : []
	}, {
		"id" : "1549",
		"name" : "湖北工业大学",
		"subItems" : []
	}, {
		"id" : "1550",
		"name" : "华中农业大学",
		"subItems" : []
	}, {
		"id" : "1551",
		"name" : "湖北中医药大学",
		"subItems" : []
	}, {
		"id" : "1552",
		"name" : "华中师范大学",
		"subItems" : []
	}, {
		"id" : "1553",
		"name" : "湖北大学",
		"subItems" : []
	}, {
		"id" : "1554",
		"name" : "湖北师范学院",
		"subItems" : []
	}, {
		"id" : "1555",
		"name" : "黄冈师范学院",
		"subItems" : []
	}, {
		"id" : "1556",
		"name" : "湖北民族学院",
		"subItems" : []
	}, {
		"id" : "1557",
		"name" : "湖北文理学院",
		"subItems" : []
	}, {
		"id" : "1558",
		"name" : "中南财经政法大学",
		"subItems" : []
	}, {
		"id" : "1559",
		"name" : "武汉体育学院",
		"subItems" : []
	}, {
		"id" : "1560",
		"name" : "湖北美术学院",
		"subItems" : []
	}, {
		"id" : "1561",
		"name" : "中南民族大学",
		"subItems" : []
	}, {
		"id" : "1562",
		"name" : "湖北汽车工业学院",
		"subItems" : []
	}, {
		"id" : "1563",
		"name" : "湖北工程学院",
		"subItems" : []
	}, {
		"id" : "1564",
		"name" : "湖北理工学院",
		"subItems" : []
	}, {
		"id" : "1565",
		"name" : "湖北科技学院",
		"subItems" : []
	}, {
		"id" : "1566",
		"name" : "湖北医药学院",
		"subItems" : []
	}, {
		"id" : "1567",
		"name" : "江汉大学",
		"subItems" : []
	}, {
		"id" : "1568",
		"name" : "三峡大学",
		"subItems" : []
	}, {
		"id" : "1569",
		"name" : "湖北警官学院",
		"subItems" : []
	}, {
		"id" : "1570",
		"name" : "荆楚理工学院",
		"subItems" : []
	}, {
		"id" : "1571",
		"name" : "武汉音乐学院",
		"subItems" : []
	}, {
		"id" : "1572",
		"name" : "湖北经济学院",
		"subItems" : []
	}, {
		"id" : "1573",
		"name" : "武汉商学院",
		"subItems" : []
	}, {
		"id" : "1574",
		"name" : "武汉东湖学院",
		"subItems" : []
	}, {
		"id" : "1575",
		"name" : "汉口学院",
		"subItems" : []
	}, {
		"id" : "1576",
		"name" : "武昌理工学院",
		"subItems" : []
	}, {
		"id" : "1577",
		"name" : "武汉生物工程学院",
		"subItems" : []
	}, {
		"id" : "1578",
		"name" : "武昌工学院",
		"subItems" : []
	}, {
		"id" : "1579",
		"name" : "武汉工商学院",
		"subItems" : []
	}, {
		"id" : "1580",
		"name" : "文华学院",
		"subItems" : []
	}, {
		"id" : "1581",
		"name" : "武汉工程科技学院",
		"subItems" : []
	}, {
		"id" : "1582",
		"name" : "湖北第二师范学院",
		"subItems" : []
	}, {
		"id" : "1583",
		"name" : "郧阳师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1584",
		"name" : "武汉职业技术学院",
		"subItems" : []
	}, {
		"id" : "1585",
		"name" : "黄冈职业技术学院",
		"subItems" : []
	}, {
		"id" : "1586",
		"name" : "长江职业学院",
		"subItems" : []
	}, {
		"id" : "1587",
		"name" : "荆州理工职业学院",
		"subItems" : []
	}, {
		"id" : "1588",
		"name" : "湖北工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1589",
		"name" : "鄂州职业大学",
		"subItems" : []
	}, {
		"id" : "1590",
		"name" : "武汉城市职业学院",
		"subItems" : []
	}, {
		"id" : "1591",
		"name" : "湖北职业技术学院",
		"subItems" : []
	}, {
		"id" : "1592",
		"name" : "武汉船舶职业技术学院",
		"subItems" : []
	}, {
		"id" : "1593",
		"name" : "恩施职业技术学院",
		"subItems" : []
	}, {
		"id" : "1594",
		"name" : "襄阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1595",
		"name" : "武汉工贸职业学院",
		"subItems" : []
	}, {
		"id" : "1596",
		"name" : "荆州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1597",
		"name" : "武汉工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1598",
		"name" : "仙桃职业学院",
		"subItems" : []
	}, {
		"id" : "1599",
		"name" : "湖北轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1600",
		"name" : "湖北交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1601",
		"name" : "湖北中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "1602",
		"name" : "武汉航海职业技术学院",
		"subItems" : []
	}, {
		"id" : "1603",
		"name" : "武汉铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "1604",
		"name" : "武汉软件工程职业学院",
		"subItems" : []
	}, {
		"id" : "1605",
		"name" : "湖北三峡职业技术学院",
		"subItems" : []
	}, {
		"id" : "1606",
		"name" : "随州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1607",
		"name" : "武汉电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1608",
		"name" : "湖北水利水电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1609",
		"name" : "湖北城市建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "1610",
		"name" : "武汉警官职业学院",
		"subItems" : []
	}, {
		"id" : "1611",
		"name" : "湖北生物科技职业学院",
		"subItems" : []
	}, {
		"id" : "1612",
		"name" : "湖北开放职业学院",
		"subItems" : []
	}, {
		"id" : "1613",
		"name" : "武汉科技职业学院",
		"subItems" : []
	}, {
		"id" : "1614",
		"name" : "武汉外语外事职业学院",
		"subItems" : []
	}, {
		"id" : "1615",
		"name" : "武汉信息传播职业技术学院",
		"subItems" : []
	}, {
		"id" : "1616",
		"name" : "武昌职业学院",
		"subItems" : []
	}, {
		"id" : "1617",
		"name" : "武汉商贸职业学院",
		"subItems" : []
	}, {
		"id" : "1618",
		"name" : "湖北艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1619",
		"name" : "武汉交通职业学院",
		"subItems" : []
	}, {
		"id" : "1620",
		"name" : "咸宁职业技术学院",
		"subItems" : []
	}, {
		"id" : "1621",
		"name" : "长江工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1622",
		"name" : "江汉艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1623",
		"name" : "武汉工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1624",
		"name" : "武汉民政职业学院",
		"subItems" : []
	}, {
		"id" : "1625",
		"name" : "鄂东职业技术学院",
		"subItems" : []
	}, {
		"id" : "1626",
		"name" : "湖北财税职业学院",
		"subItems" : []
	}, {
		"id" : "1627",
		"name" : "黄冈科技职业学院",
		"subItems" : []
	}, {
		"id" : "1628",
		"name" : "湖北国土资源职业学院",
		"subItems" : []
	}, {
		"id" : "1629",
		"name" : "湖北生态工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1630",
		"name" : "三峡电力职业学院",
		"subItems" : []
	}, {
		"id" : "1631",
		"name" : "湖北科技职业学院",
		"subItems" : []
	}, {
		"id" : "1632",
		"name" : "湖北青年职业学院",
		"subItems" : []
	}, {
		"id" : "1633",
		"name" : "湖北工程职业学院",
		"subItems" : []
	}, {
		"id" : "1634",
		"name" : "三峡旅游职业技术学院",
		"subItems" : []
	}, {
		"id" : "1635",
		"name" : "天门职业学院",
		"subItems" : []
	}, {
		"id" : "1636",
		"name" : "湖北体育职业学院",
		"subItems" : []
	}, {
		"id" : "1637",
		"name" : "襄阳汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "1638",
		"name" : "湖北幼儿师范高等专科学校",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "湖南省",
	"subItems" : [ {
		"id" : "1639",
		"name" : "湖南大学",
		"subItems" : []
	}, {
		"id" : "1640",
		"name" : "中南大学",
		"subItems" : []
	}, {
		"id" : "1641",
		"name" : "湘潭大学",
		"subItems" : []
	}, {
		"id" : "1642",
		"name" : "吉首大学",
		"subItems" : []
	}, {
		"id" : "1643",
		"name" : "湖南科技大学",
		"subItems" : []
	}, {
		"id" : "1644",
		"name" : "长沙理工大学",
		"subItems" : []
	}, {
		"id" : "1645",
		"name" : "湖南农业大学",
		"subItems" : []
	}, {
		"id" : "1646",
		"name" : "中南林业科技大学",
		"subItems" : []
	}, {
		"id" : "1647",
		"name" : "湖南中医药大学",
		"subItems" : []
	}, {
		"id" : "1648",
		"name" : "湖南师范大学",
		"subItems" : []
	}, {
		"id" : "1649",
		"name" : "湖南理工学院",
		"subItems" : []
	}, {
		"id" : "1650",
		"name" : "湘南学院",
		"subItems" : []
	}, {
		"id" : "1651",
		"name" : "衡阳师范学院",
		"subItems" : []
	}, {
		"id" : "1652",
		"name" : "邵阳学院",
		"subItems" : []
	}, {
		"id" : "1653",
		"name" : "怀化学院",
		"subItems" : []
	}, {
		"id" : "1654",
		"name" : "湖南文理学院",
		"subItems" : []
	}, {
		"id" : "1655",
		"name" : "湖南科技学院",
		"subItems" : []
	}, {
		"id" : "1656",
		"name" : "湖南人文科技学院",
		"subItems" : []
	}, {
		"id" : "1657",
		"name" : "湖南商学院",
		"subItems" : []
	}, {
		"id" : "1658",
		"name" : "南华大学",
		"subItems" : []
	}, {
		"id" : "1659",
		"name" : "长沙医学院",
		"subItems" : []
	}, {
		"id" : "1660",
		"name" : "长沙学院",
		"subItems" : []
	}, {
		"id" : "1661",
		"name" : "湖南工程学院",
		"subItems" : []
	}, {
		"id" : "1662",
		"name" : "湖南城市学院",
		"subItems" : []
	}, {
		"id" : "1663",
		"name" : "湖南工学院",
		"subItems" : []
	}, {
		"id" : "1664",
		"name" : "湖南财政经济学院",
		"subItems" : []
	}, {
		"id" : "1665",
		"name" : "湖南警察学院",
		"subItems" : []
	}, {
		"id" : "1666",
		"name" : "湖南工业大学",
		"subItems" : []
	}, {
		"id" : "1667",
		"name" : "湖南女子学院",
		"subItems" : []
	}, {
		"id" : "1668",
		"name" : "湖南第一师范学院",
		"subItems" : []
	}, {
		"id" : "1669",
		"name" : "湖南医药学院",
		"subItems" : []
	}, {
		"id" : "1670",
		"name" : "湖南涉外经济学院",
		"subItems" : []
	}, {
		"id" : "1671",
		"name" : "长沙师范学院",
		"subItems" : []
	}, {
		"id" : "1672",
		"name" : "湖南应用技术学院",
		"subItems" : []
	}, {
		"id" : "1673",
		"name" : "湖南信息学院",
		"subItems" : []
	}, {
		"id" : "1674",
		"name" : "湖南交通工程学院",
		"subItems" : []
	}, {
		"id" : "1675",
		"name" : "长沙民政职业技术学院",
		"subItems" : []
	}, {
		"id" : "1676",
		"name" : "湖南工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1677",
		"name" : "株洲师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1678",
		"name" : "湖南信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1679",
		"name" : "湖南税务高等专科学校",
		"subItems" : []
	}, {
		"id" : "1680",
		"name" : "湖南冶金职业技术学院",
		"subItems" : []
	}, {
		"id" : "1681",
		"name" : "长沙航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "1682",
		"name" : "湖南大众传媒职业技术学院",
		"subItems" : []
	}, {
		"id" : "1683",
		"name" : "永州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1684",
		"name" : "湖南铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "1685",
		"name" : "湖南科技职业学院",
		"subItems" : []
	}, {
		"id" : "1686",
		"name" : "湖南生物机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1687",
		"name" : "湖南交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1688",
		"name" : "湖南商务职业技术学院",
		"subItems" : []
	}, {
		"id" : "1689",
		"name" : "湖南体育职业学院",
		"subItems" : []
	}, {
		"id" : "1690",
		"name" : "湖南工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1691",
		"name" : "保险职业学院",
		"subItems" : []
	}, {
		"id" : "1692",
		"name" : "湖南外贸职业学院",
		"subItems" : []
	}, {
		"id" : "1693",
		"name" : "湖南网络工程职业学院",
		"subItems" : []
	}, {
		"id" : "1694",
		"name" : "邵阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1695",
		"name" : "湖南司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "1696",
		"name" : "长沙商贸旅游职业技术学院",
		"subItems" : []
	}, {
		"id" : "1697",
		"name" : "湖南环境生物职业技术学院",
		"subItems" : []
	}, {
		"id" : "1698",
		"name" : "湖南邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1699",
		"name" : "湘潭职业技术学院",
		"subItems" : []
	}, {
		"id" : "1700",
		"name" : "郴州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1701",
		"name" : "娄底职业技术学院",
		"subItems" : []
	}, {
		"id" : "1702",
		"name" : "张家界航空工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1703",
		"name" : "长沙环境保护职业技术学院",
		"subItems" : []
	}, {
		"id" : "1704",
		"name" : "湖南艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1705",
		"name" : "湖南机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1706",
		"name" : "长沙职业技术学院",
		"subItems" : []
	}, {
		"id" : "1707",
		"name" : "怀化职业技术学院",
		"subItems" : []
	}, {
		"id" : "1708",
		"name" : "岳阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1709",
		"name" : "常德职业技术学院",
		"subItems" : []
	}, {
		"id" : "1710",
		"name" : "长沙南方职业学院",
		"subItems" : []
	}, {
		"id" : "1711",
		"name" : "潇湘职业学院",
		"subItems" : []
	}, {
		"id" : "1712",
		"name" : "湖南化工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1713",
		"name" : "湖南城建职业技术学院",
		"subItems" : []
	}, {
		"id" : "1714",
		"name" : "湖南石油化工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1715",
		"name" : "湖南中医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "1716",
		"name" : "邵阳医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1717",
		"name" : "湖南民族职业学院",
		"subItems" : []
	}, {
		"id" : "1718",
		"name" : "湘西民族职业技术学院",
		"subItems" : []
	}, {
		"id" : "1719",
		"name" : "衡阳财经工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1720",
		"name" : "益阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1721",
		"name" : "湖南工艺美术职业学院",
		"subItems" : []
	}, {
		"id" : "1722",
		"name" : "湖南九嶷职业技术学院",
		"subItems" : []
	}, {
		"id" : "1723",
		"name" : "湖南理工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1724",
		"name" : "湖南软件职业学院",
		"subItems" : []
	}, {
		"id" : "1725",
		"name" : "湖南汽车工程职业学院",
		"subItems" : []
	}, {
		"id" : "1726",
		"name" : "长沙电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1727",
		"name" : "湖南水利水电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1728",
		"name" : "湖南现代物流职业技术学院",
		"subItems" : []
	}, {
		"id" : "1729",
		"name" : "湖南高速铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "1730",
		"name" : "湖南铁路科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "1731",
		"name" : "湖南安全技术职业学院",
		"subItems" : []
	}, {
		"id" : "1732",
		"name" : "湖南电气职业技术学院",
		"subItems" : []
	}, {
		"id" : "1733",
		"name" : "湖南外国语职业学院",
		"subItems" : []
	}, {
		"id" : "1734",
		"name" : "益阳医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1735",
		"name" : "湖南都市职业学院",
		"subItems" : []
	}, {
		"id" : "1736",
		"name" : "湖南电子科技职业学院",
		"subItems" : []
	}, {
		"id" : "1737",
		"name" : "湖南科技工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1738",
		"name" : "湖南高尔夫旅游职业学院",
		"subItems" : []
	}, {
		"id" : "1739",
		"name" : "湖南工商职业学院",
		"subItems" : []
	}, {
		"id" : "1740",
		"name" : "湖南三一工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1741",
		"name" : "长沙卫生职业学院",
		"subItems" : []
	}, {
		"id" : "1742",
		"name" : "湖南食品药品职业学院",
		"subItems" : []
	}, {
		"id" : "1743",
		"name" : "湖南有色金属职业技术学院",
		"subItems" : []
	}, {
		"id" : "1744",
		"name" : "湖南吉利汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "1745",
		"name" : "湖南幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1746",
		"name" : "湘南幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1747",
		"name" : "湖南劳动人事职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "甘肃省",
	"subItems" : [ {
		"id" : "1748",
		"name" : "兰州大学",
		"subItems" : []
	}, {
		"id" : "1749",
		"name" : "西北民族大学",
		"subItems" : []
	}, {
		"id" : "1750",
		"name" : "兰州理工大学",
		"subItems" : []
	}, {
		"id" : "1751",
		"name" : "兰州交通大学",
		"subItems" : []
	}, {
		"id" : "1752",
		"name" : "甘肃农业大学",
		"subItems" : []
	}, {
		"id" : "1753",
		"name" : "甘肃中医学院",
		"subItems" : []
	}, {
		"id" : "1754",
		"name" : "西北师范大学",
		"subItems" : []
	}, {
		"id" : "1755",
		"name" : "兰州城市学院",
		"subItems" : []
	}, {
		"id" : "1756",
		"name" : "陇东学院",
		"subItems" : []
	}, {
		"id" : "1757",
		"name" : "天水师范学院",
		"subItems" : []
	}, {
		"id" : "1758",
		"name" : "河西学院",
		"subItems" : []
	}, {
		"id" : "1759",
		"name" : "兰州商学院",
		"subItems" : []
	}, {
		"id" : "1760",
		"name" : "甘肃政法学院",
		"subItems" : []
	}, {
		"id" : "1761",
		"name" : "甘肃民族师范学院",
		"subItems" : []
	}, {
		"id" : "1762",
		"name" : "兰州文理学院",
		"subItems" : []
	}, {
		"id" : "1763",
		"name" : "兰州工业学院",
		"subItems" : []
	}, {
		"id" : "1764",
		"name" : "兰州石化职业技术学院",
		"subItems" : []
	}, {
		"id" : "1765",
		"name" : "平凉医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1766",
		"name" : "陇南师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1767",
		"name" : "定西师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1768",
		"name" : "甘肃建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "1769",
		"name" : "酒泉职业技术学院",
		"subItems" : []
	}, {
		"id" : "1770",
		"name" : "兰州外语职业学院",
		"subItems" : []
	}, {
		"id" : "1771",
		"name" : "兰州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1772",
		"name" : "甘肃警察职业学院",
		"subItems" : []
	}, {
		"id" : "1773",
		"name" : "甘肃林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1774",
		"name" : "甘肃工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1775",
		"name" : "武威职业学院",
		"subItems" : []
	}, {
		"id" : "1776",
		"name" : "甘肃交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1777",
		"name" : "兰州资源环境职业技术学院",
		"subItems" : []
	}, {
		"id" : "1778",
		"name" : "甘肃农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1779",
		"name" : "甘肃畜牧工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1780",
		"name" : "甘肃钢铁职业技术学院",
		"subItems" : []
	}, {
		"id" : "1781",
		"name" : "甘肃机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1782",
		"name" : "甘肃有色冶金职业技术学院",
		"subItems" : []
	}, {
		"id" : "1783",
		"name" : "白银矿冶职业技术学院",
		"subItems" : []
	}, {
		"id" : "1784",
		"name" : "甘肃卫生职业学院",
		"subItems" : []
	}, {
		"id" : "1785",
		"name" : "兰州科技职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "福建省",
	"subItems" : [ {
		"id" : "1786",
		"name" : "厦门大学",
		"subItems" : []
	}, {
		"id" : "1787",
		"name" : "华侨大学",
		"subItems" : []
	}, {
		"id" : "1788",
		"name" : "福州大学",
		"subItems" : []
	}, {
		"id" : "1789",
		"name" : "福建工程学院",
		"subItems" : []
	}, {
		"id" : "1790",
		"name" : "福建农林大学",
		"subItems" : []
	}, {
		"id" : "1791",
		"name" : "集美大学",
		"subItems" : []
	}, {
		"id" : "1792",
		"name" : "福建医科大学",
		"subItems" : []
	}, {
		"id" : "1793",
		"name" : "福建中医药大学",
		"subItems" : []
	}, {
		"id" : "1794",
		"name" : "福建师范大学",
		"subItems" : []
	}, {
		"id" : "1795",
		"name" : "闽江学院",
		"subItems" : []
	}, {
		"id" : "1796",
		"name" : "武夷学院",
		"subItems" : []
	}, {
		"id" : "1797",
		"name" : "宁德师范学院",
		"subItems" : []
	}, {
		"id" : "1798",
		"name" : "泉州师范学院",
		"subItems" : []
	}, {
		"id" : "1799",
		"name" : "闽南师范大学",
		"subItems" : []
	}, {
		"id" : "1800",
		"name" : "厦门理工学院",
		"subItems" : []
	}, {
		"id" : "1801",
		"name" : "三明学院",
		"subItems" : []
	}, {
		"id" : "1802",
		"name" : "龙岩学院",
		"subItems" : []
	}, {
		"id" : "1803",
		"name" : "福建警察学院",
		"subItems" : []
	}, {
		"id" : "1804",
		"name" : "莆田学院",
		"subItems" : []
	}, {
		"id" : "1805",
		"name" : "仰恩大学",
		"subItems" : []
	}, {
		"id" : "1806",
		"name" : "闽南理工学院",
		"subItems" : []
	}, {
		"id" : "1807",
		"name" : "福州外语外贸学院",
		"subItems" : []
	}, {
		"id" : "1808",
		"name" : "福建江夏学院",
		"subItems" : []
	}, {
		"id" : "1809",
		"name" : "泉州信息工程学院",
		"subItems" : []
	}, {
		"id" : "1810",
		"name" : "福建船政交通职业学院",
		"subItems" : []
	}, {
		"id" : "1811",
		"name" : "福建商业高等专科学校",
		"subItems" : []
	}, {
		"id" : "1812",
		"name" : "漳州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1813",
		"name" : "闽西职业技术学院",
		"subItems" : []
	}, {
		"id" : "1814",
		"name" : "黎明职业大学",
		"subItems" : []
	}, {
		"id" : "1815",
		"name" : "福建华南女子职业学院",
		"subItems" : []
	}, {
		"id" : "1816",
		"name" : "福州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1817",
		"name" : "福建林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1818",
		"name" : "福建信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1819",
		"name" : "福建水利电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1820",
		"name" : "福建电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1821",
		"name" : "厦门海洋职业技术学院",
		"subItems" : []
	}, {
		"id" : "1822",
		"name" : "福建农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1823",
		"name" : "厦门医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1824",
		"name" : "福建卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "1825",
		"name" : "泉州医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1826",
		"name" : "福州英华职业学院",
		"subItems" : []
	}, {
		"id" : "1827",
		"name" : "厦门华厦职业学院",
		"subItems" : []
	}, {
		"id" : "1828",
		"name" : "泉州纺织服装职业学院",
		"subItems" : []
	}, {
		"id" : "1829",
		"name" : "泉州华光职业学院",
		"subItems" : []
	}, {
		"id" : "1830",
		"name" : "泉州理工职业学院",
		"subItems" : []
	}, {
		"id" : "1831",
		"name" : "福建警官职业学院",
		"subItems" : []
	}, {
		"id" : "1832",
		"name" : "闽北职业技术学院",
		"subItems" : []
	}, {
		"id" : "1833",
		"name" : "福州黎明职业技术学院",
		"subItems" : []
	}, {
		"id" : "1834",
		"name" : "厦门演艺职业学院",
		"subItems" : []
	}, {
		"id" : "1835",
		"name" : "厦门华天涉外职业技术学院",
		"subItems" : []
	}, {
		"id" : "1836",
		"name" : "福州科技职业技术学院",
		"subItems" : []
	}, {
		"id" : "1837",
		"name" : "泉州经贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "1838",
		"name" : "福建对外经济贸易职业技术学院",
		"subItems" : []
	}, {
		"id" : "1839",
		"name" : "湄洲湾职业技术学院",
		"subItems" : []
	}, {
		"id" : "1840",
		"name" : "福州海峡职业技术学院",
		"subItems" : []
	}, {
		"id" : "1841",
		"name" : "福建生物工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "1842",
		"name" : "福建艺术职业学院",
		"subItems" : []
	}, {
		"id" : "1843",
		"name" : "福建幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1844",
		"name" : "厦门城市职业学院",
		"subItems" : []
	}, {
		"id" : "1845",
		"name" : "泉州工艺美术职业学院",
		"subItems" : []
	}, {
		"id" : "1846",
		"name" : "三明职业技术学院",
		"subItems" : []
	}, {
		"id" : "1847",
		"name" : "宁德职业技术学院",
		"subItems" : []
	}, {
		"id" : "1848",
		"name" : "福州软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "1849",
		"name" : "厦门兴才职业技术学院",
		"subItems" : []
	}, {
		"id" : "1850",
		"name" : "厦门软件职业技术学院",
		"subItems" : []
	}, {
		"id" : "1851",
		"name" : "福建体育职业技术学院",
		"subItems" : []
	}, {
		"id" : "1852",
		"name" : "漳州城市职业学院",
		"subItems" : []
	}, {
		"id" : "1853",
		"name" : "厦门南洋职业学院",
		"subItems" : []
	}, {
		"id" : "1854",
		"name" : "厦门东海职业技术学院",
		"subItems" : []
	}, {
		"id" : "1855",
		"name" : "漳州科技职业学院",
		"subItems" : []
	}, {
		"id" : "1856",
		"name" : "漳州理工职业学院",
		"subItems" : []
	}, {
		"id" : "1857",
		"name" : "武夷山职业学院",
		"subItems" : []
	}, {
		"id" : "1858",
		"name" : "漳州卫生职业学院",
		"subItems" : []
	}, {
		"id" : "1859",
		"name" : "泉州海洋职业学院",
		"subItems" : []
	}, {
		"id" : "1860",
		"name" : "泉州轻工职业学院",
		"subItems" : []
	}, {
		"id" : "1861",
		"name" : "厦门安防科技职业学院",
		"subItems" : []
	}, {
		"id" : "1862",
		"name" : "泉州幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1863",
		"name" : "闽江师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1864",
		"name" : "泉州工程职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "西藏自治区",
	"subItems" : [ {
		"id" : "1865",
		"name" : "西藏大学",
		"subItems" : []
	}, {
		"id" : "1866",
		"name" : "西藏民族学院",
		"subItems" : []
	}, {
		"id" : "1867",
		"name" : "西藏藏医学院",
		"subItems" : []
	}, {
		"id" : "1868",
		"name" : "西藏警官高等专科学校",
		"subItems" : []
	}, {
		"id" : "1869",
		"name" : "拉萨师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1870",
		"name" : "西藏职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "贵州省",
	"subItems" : [ {
		"id" : "1871",
		"name" : "贵州大学",
		"subItems" : []
	}, {
		"id" : "1872",
		"name" : "贵阳医学院",
		"subItems" : []
	}, {
		"id" : "1873",
		"name" : "遵义医学院",
		"subItems" : []
	}, {
		"id" : "1874",
		"name" : "贵阳中医学院",
		"subItems" : []
	}, {
		"id" : "1875",
		"name" : "贵州师范大学",
		"subItems" : []
	}, {
		"id" : "1876",
		"name" : "遵义师范学院",
		"subItems" : []
	}, {
		"id" : "1877",
		"name" : "铜仁学院",
		"subItems" : []
	}, {
		"id" : "1878",
		"name" : "兴义民族师范学院",
		"subItems" : []
	}, {
		"id" : "1879",
		"name" : "安顺学院",
		"subItems" : []
	}, {
		"id" : "1880",
		"name" : "贵州工程应用技术学院",
		"subItems" : []
	}, {
		"id" : "1881",
		"name" : "凯里学院",
		"subItems" : []
	}, {
		"id" : "1882",
		"name" : "黔南民族师范学院",
		"subItems" : []
	}, {
		"id" : "1883",
		"name" : "贵州财经大学",
		"subItems" : []
	}, {
		"id" : "1884",
		"name" : "贵州民族大学",
		"subItems" : []
	}, {
		"id" : "1885",
		"name" : "贵阳学院",
		"subItems" : []
	}, {
		"id" : "1886",
		"name" : "六盘水师范学院",
		"subItems" : []
	}, {
		"id" : "1887",
		"name" : "贵州师范学院",
		"subItems" : []
	}, {
		"id" : "1888",
		"name" : "贵州理工学院",
		"subItems" : []
	}, {
		"id" : "1889",
		"name" : "黔南民族医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1890",
		"name" : "贵州商业高等专科学校",
		"subItems" : []
	}, {
		"id" : "1891",
		"name" : "贵州警官职业学院",
		"subItems" : []
	}, {
		"id" : "1892",
		"name" : "贵州交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "1893",
		"name" : "贵州航天职业技术学院",
		"subItems" : []
	}, {
		"id" : "1894",
		"name" : "贵州电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "1895",
		"name" : "安顺职业技术学院",
		"subItems" : []
	}, {
		"id" : "1896",
		"name" : "黔东南民族职业技术学院",
		"subItems" : []
	}, {
		"id" : "1897",
		"name" : "黔南民族职业技术学院",
		"subItems" : []
	}, {
		"id" : "1898",
		"name" : "遵义职业技术学院",
		"subItems" : []
	}, {
		"id" : "1899",
		"name" : "贵州城市职业学院",
		"subItems" : []
	}, {
		"id" : "1900",
		"name" : "贵州工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1901",
		"name" : "贵州电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "1902",
		"name" : "六盘水职业技术学院",
		"subItems" : []
	}, {
		"id" : "1903",
		"name" : "铜仁职业技术学院",
		"subItems" : []
	}, {
		"id" : "1904",
		"name" : "黔西南民族职业技术学院",
		"subItems" : []
	}, {
		"id" : "1905",
		"name" : "贵州轻工职业技术学院",
		"subItems" : []
	}, {
		"id" : "1906",
		"name" : "遵义医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "1907",
		"name" : "贵阳护理职业学院",
		"subItems" : []
	}, {
		"id" : "1908",
		"name" : "贵阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1909",
		"name" : "毕节职业技术学院",
		"subItems" : []
	}, {
		"id" : "1910",
		"name" : "贵州职业技术学院",
		"subItems" : []
	}, {
		"id" : "1911",
		"name" : "贵州盛华职业学院",
		"subItems" : []
	}, {
		"id" : "1912",
		"name" : "贵州工商职业学院",
		"subItems" : []
	}, {
		"id" : "1913",
		"name" : "贵阳幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1914",
		"name" : "铜仁幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1915",
		"name" : "黔南民族幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1916",
		"name" : "毕节医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "1917",
		"name" : "贵州建设职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "辽宁省",
	"subItems" : [ {
		"id" : "1918",
		"name" : "大连理工大学",
		"subItems" : []
	}, {
		"id" : "1919",
		"name" : "辽宁大学",
		"subItems" : []
	}, {
		"id" : "1920",
		"name" : "沈阳工业大学",
		"subItems" : []
	}, {
		"id" : "1921",
		"name" : "沈阳航空航天大学",
		"subItems" : []
	}, {
		"id" : "1922",
		"name" : "沈阳理工大学",
		"subItems" : []
	}, {
		"id" : "1923",
		"name" : "东北大学",
		"subItems" : []
	}, {
		"id" : "1924",
		"name" : "辽宁科技大学",
		"subItems" : []
	}, {
		"id" : "1925",
		"name" : "辽宁工程技术大学",
		"subItems" : []
	}, {
		"id" : "1926",
		"name" : "辽宁石油化工大学",
		"subItems" : []
	}, {
		"id" : "1927",
		"name" : "沈阳化工大学",
		"subItems" : []
	}, {
		"id" : "1928",
		"name" : "大连交通大学",
		"subItems" : []
	}, {
		"id" : "1929",
		"name" : "大连海事大学",
		"subItems" : []
	}, {
		"id" : "1930",
		"name" : "大连工业大学",
		"subItems" : []
	}, {
		"id" : "1931",
		"name" : "沈阳建筑大学",
		"subItems" : []
	}, {
		"id" : "1932",
		"name" : "辽宁工业大学",
		"subItems" : []
	}, {
		"id" : "1933",
		"name" : "沈阳农业大学",
		"subItems" : []
	}, {
		"id" : "1934",
		"name" : "大连海洋大学",
		"subItems" : []
	}, {
		"id" : "1935",
		"name" : "中国医科大学",
		"subItems" : []
	}, {
		"id" : "1936",
		"name" : "辽宁医学院",
		"subItems" : []
	}, {
		"id" : "1937",
		"name" : "大连医科大学",
		"subItems" : []
	}, {
		"id" : "1938",
		"name" : "辽宁中医药大学",
		"subItems" : []
	}, {
		"id" : "1939",
		"name" : "沈阳药科大学",
		"subItems" : []
	}, {
		"id" : "1940",
		"name" : "沈阳医学院",
		"subItems" : []
	}, {
		"id" : "1941",
		"name" : "辽宁师范大学",
		"subItems" : []
	}, {
		"id" : "1942",
		"name" : "沈阳师范大学",
		"subItems" : []
	}, {
		"id" : "1943",
		"name" : "渤海大学",
		"subItems" : []
	}, {
		"id" : "1944",
		"name" : "鞍山师范学院",
		"subItems" : []
	}, {
		"id" : "1945",
		"name" : "大连外国语大学",
		"subItems" : []
	}, {
		"id" : "1946",
		"name" : "东北财经大学",
		"subItems" : []
	}, {
		"id" : "1947",
		"name" : "中国刑事警察学院",
		"subItems" : []
	}, {
		"id" : "1948",
		"name" : "沈阳体育学院",
		"subItems" : []
	}, {
		"id" : "1949",
		"name" : "沈阳音乐学院",
		"subItems" : []
	}, {
		"id" : "1950",
		"name" : "鲁迅美术学院",
		"subItems" : []
	}, {
		"id" : "1951",
		"name" : "辽宁对外经贸学院",
		"subItems" : []
	}, {
		"id" : "1952",
		"name" : "沈阳大学",
		"subItems" : []
	}, {
		"id" : "1953",
		"name" : "大连大学",
		"subItems" : []
	}, {
		"id" : "1954",
		"name" : "辽宁科技学院",
		"subItems" : []
	}, {
		"id" : "1955",
		"name" : "辽宁警察学院",
		"subItems" : []
	}, {
		"id" : "1956",
		"name" : "沈阳工程学院",
		"subItems" : []
	}, {
		"id" : "1957",
		"name" : "辽东学院",
		"subItems" : []
	}, {
		"id" : "1958",
		"name" : "大连民族学院",
		"subItems" : []
	}, {
		"id" : "1959",
		"name" : "沈阳工学院",
		"subItems" : []
	}, {
		"id" : "1960",
		"name" : "大连科技学院",
		"subItems" : []
	}, {
		"id" : "1961",
		"name" : "沈阳城市建设学院",
		"subItems" : []
	}, {
		"id" : "1962",
		"name" : "辽宁理工学院",
		"subItems" : []
	}, {
		"id" : "1963",
		"name" : "大连财经学院",
		"subItems" : []
	}, {
		"id" : "1964",
		"name" : "沈阳城市学院",
		"subItems" : []
	}, {
		"id" : "1965",
		"name" : "大连艺术学院",
		"subItems" : []
	}, {
		"id" : "1966",
		"name" : "辽宁何氏医学院",
		"subItems" : []
	}, {
		"id" : "1967",
		"name" : "大连东软信息学院",
		"subItems" : []
	}, {
		"id" : "1968",
		"name" : "辽宁财贸学院",
		"subItems" : []
	}, {
		"id" : "1969",
		"name" : "辽宁传媒学院",
		"subItems" : []
	}, {
		"id" : "1970",
		"name" : "营口理工学院",
		"subItems" : []
	}, {
		"id" : "1971",
		"name" : "朝阳师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1972",
		"name" : "抚顺师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1973",
		"name" : "锦州师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1974",
		"name" : "营口职业技术学院",
		"subItems" : []
	}, {
		"id" : "1975",
		"name" : "铁岭师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "1976",
		"name" : "大连职业技术学院",
		"subItems" : []
	}, {
		"id" : "1977",
		"name" : "辽宁农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1978",
		"name" : "抚顺职业技术学院",
		"subItems" : []
	}, {
		"id" : "1979",
		"name" : "辽阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1980",
		"name" : "阜新高等专科学校",
		"subItems" : []
	}, {
		"id" : "1981",
		"name" : "辽宁省交通高等专科学校",
		"subItems" : []
	}, {
		"id" : "1982",
		"name" : "辽宁税务高等专科学校",
		"subItems" : []
	}, {
		"id" : "1983",
		"name" : "盘锦职业技术学院",
		"subItems" : []
	}, {
		"id" : "1984",
		"name" : "沈阳航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "1985",
		"name" : "辽宁体育运动职业技术学院",
		"subItems" : []
	}, {
		"id" : "1986",
		"name" : "辽宁职业学院",
		"subItems" : []
	}, {
		"id" : "1987",
		"name" : "辽宁林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "1988",
		"name" : "沈阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "1989",
		"name" : "辽宁理工职业学院",
		"subItems" : []
	}, {
		"id" : "1990",
		"name" : "大连商务职业学院",
		"subItems" : []
	}, {
		"id" : "1991",
		"name" : "辽宁金融职业学院",
		"subItems" : []
	}, {
		"id" : "1992",
		"name" : "辽宁轨道交通职业学院",
		"subItems" : []
	}, {
		"id" : "1993",
		"name" : "辽宁广告职业学院",
		"subItems" : []
	}, {
		"id" : "1994",
		"name" : "辽宁机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "1995",
		"name" : "辽宁经济职业技术学院",
		"subItems" : []
	}, {
		"id" : "1996",
		"name" : "辽宁石化职业技术学院",
		"subItems" : []
	}, {
		"id" : "1997",
		"name" : "渤海船舶职业学院",
		"subItems" : []
	}, {
		"id" : "1998",
		"name" : "大连软件职业学院",
		"subItems" : []
	}, {
		"id" : "1999",
		"name" : "大连翻译职业学院",
		"subItems" : []
	}, {
		"id" : "2000",
		"name" : "辽宁商贸职业学院",
		"subItems" : []
	}, {
		"id" : "2001",
		"name" : "大连枫叶职业技术学院",
		"subItems" : []
	}, {
		"id" : "2002",
		"name" : "辽宁装备制造职业技术学院",
		"subItems" : []
	}, {
		"id" : "2003",
		"name" : "辽河石油职业技术学院",
		"subItems" : []
	}, {
		"id" : "2004",
		"name" : "辽宁地质工程职业学院",
		"subItems" : []
	}, {
		"id" : "2005",
		"name" : "辽宁铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "2006",
		"name" : "辽宁建筑职业学院",
		"subItems" : []
	}, {
		"id" : "2007",
		"name" : "大连航运职业技术学院",
		"subItems" : []
	}, {
		"id" : "2008",
		"name" : "大连装备制造职业技术学院",
		"subItems" : []
	}, {
		"id" : "2009",
		"name" : "大连汽车职业技术学院",
		"subItems" : []
	}, {
		"id" : "2010",
		"name" : "辽宁现代服务职业技术学院",
		"subItems" : []
	}, {
		"id" : "2011",
		"name" : "辽宁冶金职业技术学院",
		"subItems" : []
	}, {
		"id" : "2012",
		"name" : "辽宁工程职业学院",
		"subItems" : []
	}, {
		"id" : "2013",
		"name" : "辽宁城市建设职业技术学院",
		"subItems" : []
	}, {
		"id" : "2014",
		"name" : "辽宁医药职业学院",
		"subItems" : []
	}, {
		"id" : "2015",
		"name" : "铁岭卫生职业学院",
		"subItems" : []
	}, {
		"id" : "2016",
		"name" : "沈阳北软信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "2017",
		"name" : "辽宁政法职业学院",
		"subItems" : []
	}, {
		"id" : "2018",
		"name" : "辽宁民族师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "2019",
		"name" : "辽宁轻工职业学院",
		"subItems" : []
	}, {
		"id" : "2020",
		"name" : "辽宁水利职业学院",
		"subItems" : []
	}, {
		"id" : "2021",
		"name" : "辽宁特殊教育师范高等专科学校",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "重庆市",
	"subItems" : [ {
		"id" : "2022",
		"name" : "重庆大学",
		"subItems" : []
	}, {
		"id" : "2023",
		"name" : "重庆邮电大学",
		"subItems" : []
	}, {
		"id" : "2024",
		"name" : "重庆交通大学",
		"subItems" : []
	}, {
		"id" : "2025",
		"name" : "重庆医科大学",
		"subItems" : []
	}, {
		"id" : "2026",
		"name" : "西南大学",
		"subItems" : []
	}, {
		"id" : "2027",
		"name" : "重庆师范大学",
		"subItems" : []
	}, {
		"id" : "2028",
		"name" : "重庆文理学院",
		"subItems" : []
	}, {
		"id" : "2029",
		"name" : "重庆三峡学院",
		"subItems" : []
	}, {
		"id" : "2030",
		"name" : "长江师范学院",
		"subItems" : []
	}, {
		"id" : "2031",
		"name" : "四川外国语大学",
		"subItems" : []
	}, {
		"id" : "2032",
		"name" : "西南政法大学",
		"subItems" : []
	}, {
		"id" : "2033",
		"name" : "四川美术学院",
		"subItems" : []
	}, {
		"id" : "2034",
		"name" : "重庆科技学院",
		"subItems" : []
	}, {
		"id" : "2035",
		"name" : "重庆理工大学",
		"subItems" : []
	}, {
		"id" : "2036",
		"name" : "重庆工商大学",
		"subItems" : []
	}, {
		"id" : "2037",
		"name" : "重庆工程学院",
		"subItems" : []
	}, {
		"id" : "2038",
		"name" : "重庆警察学院",
		"subItems" : []
	}, {
		"id" : "2039",
		"name" : "重庆人文科技学院",
		"subItems" : []
	}, {
		"id" : "2040",
		"name" : "重庆第二师范学院",
		"subItems" : []
	}, {
		"id" : "2041",
		"name" : "重庆航天职业技术学院",
		"subItems" : []
	}, {
		"id" : "2042",
		"name" : "重庆电力高等专科学校",
		"subItems" : []
	}, {
		"id" : "2043",
		"name" : "重庆工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "2044",
		"name" : "重庆三峡职业学院",
		"subItems" : []
	}, {
		"id" : "2045",
		"name" : "重庆工贸职业技术学院",
		"subItems" : []
	}, {
		"id" : "2046",
		"name" : "重庆机电职业技术学院",
		"subItems" : []
	}, {
		"id" : "2047",
		"name" : "重庆电子工程职业学院",
		"subItems" : []
	}, {
		"id" : "2048",
		"name" : "重庆海联职业技术学院",
		"subItems" : []
	}, {
		"id" : "2049",
		"name" : "重庆信息技术职业学院",
		"subItems" : []
	}, {
		"id" : "2050",
		"name" : "重庆传媒职业学院",
		"subItems" : []
	}, {
		"id" : "2051",
		"name" : "重庆城市管理职业学院",
		"subItems" : []
	}, {
		"id" : "2052",
		"name" : "重庆工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "2053",
		"name" : "重庆房地产职业学院",
		"subItems" : []
	}, {
		"id" : "2054",
		"name" : "重庆城市职业学院",
		"subItems" : []
	}, {
		"id" : "2055",
		"name" : "重庆水利电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "2056",
		"name" : "重庆工商职业学院",
		"subItems" : []
	}, {
		"id" : "2057",
		"name" : "重庆应用技术职业学院",
		"subItems" : []
	}, {
		"id" : "2058",
		"name" : "重庆三峡医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "2059",
		"name" : "重庆医药高等专科学校",
		"subItems" : []
	}, {
		"id" : "2060",
		"name" : "重庆青年职业技术学院",
		"subItems" : []
	}, {
		"id" : "2061",
		"name" : "重庆财经职业学院",
		"subItems" : []
	}, {
		"id" : "2062",
		"name" : "重庆科创职业学院",
		"subItems" : []
	}, {
		"id" : "2063",
		"name" : "重庆建筑工程职业学院",
		"subItems" : []
	}, {
		"id" : "2064",
		"name" : "重庆电讯职业学院",
		"subItems" : []
	}, {
		"id" : "2065",
		"name" : "重庆能源职业学院",
		"subItems" : []
	}, {
		"id" : "2066",
		"name" : "重庆商务职业学院",
		"subItems" : []
	}, {
		"id" : "2067",
		"name" : "重庆交通职业学院",
		"subItems" : []
	}, {
		"id" : "2068",
		"name" : "重庆化工职业学院",
		"subItems" : []
	}, {
		"id" : "2069",
		"name" : "重庆旅游职业学院",
		"subItems" : []
	}, {
		"id" : "2070",
		"name" : "重庆安全技术职业学院",
		"subItems" : []
	}, {
		"id" : "2071",
		"name" : "重庆公共运输职业学院",
		"subItems" : []
	}, {
		"id" : "2072",
		"name" : "重庆艺术工程职业学院",
		"subItems" : []
	}, {
		"id" : "2073",
		"name" : "重庆轻工职业学院",
		"subItems" : []
	}, {
		"id" : "2074",
		"name" : "重庆电信职业学院",
		"subItems" : []
	}, {
		"id" : "2075",
		"name" : "重庆经贸职业学院",
		"subItems" : []
	}, {
		"id" : "2076",
		"name" : "重庆幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "2077",
		"name" : "重庆文化艺术职业学院",
		"subItems" : []
	}, {
		"id" : "2078",
		"name" : "重庆服装工程职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "陕西省",
	"subItems" : [ {
		"id" : "2079",
		"name" : "西安交通大学",
		"subItems" : []
	}, {
		"id" : "2080",
		"name" : "西北农林科技大学",
		"subItems" : []
	}, {
		"id" : "2081",
		"name" : "长安大学",
		"subItems" : []
	}, {
		"id" : "2082",
		"name" : "西安电子科技大学",
		"subItems" : []
	}, {
		"id" : "2083",
		"name" : "西北工业大学",
		"subItems" : []
	}, {
		"id" : "2084",
		"name" : "西北大学",
		"subItems" : []
	}, {
		"id" : "2085",
		"name" : "西安理工大学",
		"subItems" : []
	}, {
		"id" : "2086",
		"name" : "西安工业大学",
		"subItems" : []
	}, {
		"id" : "2087",
		"name" : "西安建筑科技大学",
		"subItems" : []
	}, {
		"id" : "2088",
		"name" : "西安科技大学",
		"subItems" : []
	}, {
		"id" : "2089",
		"name" : "西安石油大学",
		"subItems" : []
	}, {
		"id" : "2090",
		"name" : "陕西科技大学",
		"subItems" : []
	}, {
		"id" : "2091",
		"name" : "西安工程大学",
		"subItems" : []
	}, {
		"id" : "2092",
		"name" : "陕西中医学院",
		"subItems" : []
	}, {
		"id" : "2093",
		"name" : "陕西师范大学",
		"subItems" : []
	}, {
		"id" : "2094",
		"name" : "延安大学",
		"subItems" : []
	}, {
		"id" : "2095",
		"name" : "陕西理工学院",
		"subItems" : []
	}, {
		"id" : "2096",
		"name" : "宝鸡文理学院",
		"subItems" : []
	}, {
		"id" : "2097",
		"name" : "咸阳师范学院",
		"subItems" : []
	}, {
		"id" : "2098",
		"name" : "渭南师范学院",
		"subItems" : []
	}, {
		"id" : "2099",
		"name" : "西安外国语大学",
		"subItems" : []
	}, {
		"id" : "2100",
		"name" : "西北政法大学",
		"subItems" : []
	}, {
		"id" : "2101",
		"name" : "西安体育学院",
		"subItems" : []
	}, {
		"id" : "2102",
		"name" : "西安音乐学院",
		"subItems" : []
	}, {
		"id" : "2103",
		"name" : "西安美术学院",
		"subItems" : []
	}, {
		"id" : "2104",
		"name" : "西安文理学院",
		"subItems" : []
	}, {
		"id" : "2105",
		"name" : "榆林学院",
		"subItems" : []
	}, {
		"id" : "2106",
		"name" : "商洛学院",
		"subItems" : []
	}, {
		"id" : "2107",
		"name" : "安康学院",
		"subItems" : []
	}, {
		"id" : "2108",
		"name" : "西安培华学院",
		"subItems" : []
	}, {
		"id" : "2109",
		"name" : "西安财经学院",
		"subItems" : []
	}, {
		"id" : "2110",
		"name" : "西安邮电大学",
		"subItems" : []
	}, {
		"id" : "2111",
		"name" : "西安航空学院",
		"subItems" : []
	}, {
		"id" : "2112",
		"name" : "西安医学院",
		"subItems" : []
	}, {
		"id" : "2113",
		"name" : "西安欧亚学院",
		"subItems" : []
	}, {
		"id" : "2114",
		"name" : "西安外事学院",
		"subItems" : []
	}, {
		"id" : "2115",
		"name" : "西安翻译学院",
		"subItems" : []
	}, {
		"id" : "2116",
		"name" : "西京学院",
		"subItems" : []
	}, {
		"id" : "2117",
		"name" : "西安思源学院",
		"subItems" : []
	}, {
		"id" : "2118",
		"name" : "陕西国际商贸学院",
		"subItems" : []
	}, {
		"id" : "2119",
		"name" : "陕西服装工程学院",
		"subItems" : []
	}, {
		"id" : "2120",
		"name" : "西安交通工程学院",
		"subItems" : []
	}, {
		"id" : "2121",
		"name" : "陕西学前师范学院",
		"subItems" : []
	}, {
		"id" : "2122",
		"name" : "陕西工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "2123",
		"name" : "杨凌职业技术学院",
		"subItems" : []
	}, {
		"id" : "2124",
		"name" : "西安电力高等专科学校",
		"subItems" : []
	}, {
		"id" : "2125",
		"name" : "陕西能源职业技术学院",
		"subItems" : []
	}, {
		"id" : "2126",
		"name" : "陕西国防工业职业技术学院",
		"subItems" : []
	}, {
		"id" : "2127",
		"name" : "西安航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "2128",
		"name" : "陕西财经职业技术学院",
		"subItems" : []
	}, {
		"id" : "2129",
		"name" : "陕西交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "2130",
		"name" : "陕西职业技术学院",
		"subItems" : []
	}, {
		"id" : "2131",
		"name" : "西安高新科技职业学院",
		"subItems" : []
	}, {
		"id" : "2132",
		"name" : "西安城市建设职业学院",
		"subItems" : []
	}, {
		"id" : "2133",
		"name" : "陕西铁路工程职业技术学院",
		"subItems" : []
	}, {
		"id" : "2134",
		"name" : "宝鸡职业技术学院",
		"subItems" : []
	}, {
		"id" : "2135",
		"name" : "陕西航空职业技术学院",
		"subItems" : []
	}, {
		"id" : "2136",
		"name" : "陕西电子信息职业技术学院",
		"subItems" : []
	}, {
		"id" : "2137",
		"name" : "陕西邮电职业技术学院",
		"subItems" : []
	}, {
		"id" : "2138",
		"name" : "西安海棠职业学院",
		"subItems" : []
	}, {
		"id" : "2139",
		"name" : "西安汽车科技职业学院",
		"subItems" : []
	}, {
		"id" : "2140",
		"name" : "西安东方亚太职业技术学院",
		"subItems" : []
	}, {
		"id" : "2141",
		"name" : "陕西警官职业学院",
		"subItems" : []
	}, {
		"id" : "2142",
		"name" : "陕西经济管理职业技术学院",
		"subItems" : []
	}, {
		"id" : "2143",
		"name" : "西安铁路职业技术学院",
		"subItems" : []
	}, {
		"id" : "2144",
		"name" : "咸阳职业技术学院",
		"subItems" : []
	}, {
		"id" : "2145",
		"name" : "西安职业技术学院",
		"subItems" : []
	}, {
		"id" : "2146",
		"name" : "商洛职业技术学院",
		"subItems" : []
	}, {
		"id" : "2147",
		"name" : "汉中职业技术学院",
		"subItems" : []
	}, {
		"id" : "2148",
		"name" : "延安职业技术学院",
		"subItems" : []
	}, {
		"id" : "2149",
		"name" : "渭南职业技术学院",
		"subItems" : []
	}, {
		"id" : "2150",
		"name" : "安康职业技术学院",
		"subItems" : []
	}, {
		"id" : "2151",
		"name" : "铜川职业技术学院",
		"subItems" : []
	}, {
		"id" : "2152",
		"name" : "陕西青年职业学院",
		"subItems" : []
	}, {
		"id" : "2153",
		"name" : "陕西工商职业学院",
		"subItems" : []
	}, {
		"id" : "2154",
		"name" : "陕西电子科技职业学院",
		"subItems" : []
	}, {
		"id" : "2155",
		"name" : "陕西旅游烹饪职业学院",
		"subItems" : []
	}, {
		"id" : "2156",
		"name" : "西安医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "2157",
		"name" : "榆林职业技术学院",
		"subItems" : []
	}, {
		"id" : "2158",
		"name" : "陕西艺术职业学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "青海省",
	"subItems" : [ {
		"id" : "2159",
		"name" : "青海大学",
		"subItems" : []
	}, {
		"id" : "2160",
		"name" : "青海师范大学",
		"subItems" : []
	}, {
		"id" : "2161",
		"name" : "青海民族大学",
		"subItems" : []
	}, {
		"id" : "2162",
		"name" : "青海卫生职业技术学院",
		"subItems" : []
	}, {
		"id" : "2163",
		"name" : "青海警官职业学院",
		"subItems" : []
	}, {
		"id" : "2164",
		"name" : "青海畜牧兽医职业技术学院",
		"subItems" : []
	}, {
		"id" : "2165",
		"name" : "青海交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "2166",
		"name" : "青海建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "2167",
		"name" : "西宁城市职业技术学院",
		"subItems" : []
	}, {
		"id" : "2168",
		"name" : "青海高等职业技术学院",
		"subItems" : []
	}, {
		"id" : "2169",
		"name" : "青海柴达木职业技术学院",
		"subItems" : []
	} ]
}, {
	"id" : "",
	"name" : "黑龙江省",
	"subItems" : [ {
		"id" : "2170",
		"name" : "黑龙江大学",
		"subItems" : []
	}, {
		"id" : "2171",
		"name" : "哈尔滨工业大学",
		"subItems" : []
	}, {
		"id" : "2172",
		"name" : "哈尔滨理工大学",
		"subItems" : []
	}, {
		"id" : "2173",
		"name" : "哈尔滨工程大学",
		"subItems" : []
	}, {
		"id" : "2174",
		"name" : "黑龙江科技大学",
		"subItems" : []
	}, {
		"id" : "2175",
		"name" : "东北石油大学",
		"subItems" : []
	}, {
		"id" : "2176",
		"name" : "佳木斯大学",
		"subItems" : []
	}, {
		"id" : "2177",
		"name" : "黑龙江八一农垦大学",
		"subItems" : []
	}, {
		"id" : "2178",
		"name" : "东北农业大学",
		"subItems" : []
	}, {
		"id" : "2179",
		"name" : "东北林业大学",
		"subItems" : []
	}, {
		"id" : "2180",
		"name" : "哈尔滨医科大学",
		"subItems" : []
	}, {
		"id" : "2181",
		"name" : "黑龙江中医药大学",
		"subItems" : []
	}, {
		"id" : "2182",
		"name" : "牡丹江医学院",
		"subItems" : []
	}, {
		"id" : "2183",
		"name" : "哈尔滨师范大学",
		"subItems" : []
	}, {
		"id" : "2184",
		"name" : "齐齐哈尔大学",
		"subItems" : []
	}, {
		"id" : "2185",
		"name" : "牡丹江师范学院",
		"subItems" : []
	}, {
		"id" : "2186",
		"name" : "哈尔滨学院",
		"subItems" : []
	}, {
		"id" : "2187",
		"name" : "大庆师范学院",
		"subItems" : []
	}, {
		"id" : "2188",
		"name" : "绥化学院",
		"subItems" : []
	}, {
		"id" : "2189",
		"name" : "哈尔滨商业大学",
		"subItems" : []
	}, {
		"id" : "2190",
		"name" : "哈尔滨体育学院",
		"subItems" : []
	}, {
		"id" : "2191",
		"name" : "哈尔滨金融学院",
		"subItems" : []
	}, {
		"id" : "2192",
		"name" : "齐齐哈尔医学院",
		"subItems" : []
	}, {
		"id" : "2193",
		"name" : "黑龙江工业学院",
		"subItems" : []
	}, {
		"id" : "2194",
		"name" : "黑龙江东方学院",
		"subItems" : []
	}, {
		"id" : "2195",
		"name" : "哈尔滨信息工程学院",
		"subItems" : []
	}, {
		"id" : "2196",
		"name" : "黑龙江工程学院",
		"subItems" : []
	}, {
		"id" : "2197",
		"name" : "齐齐哈尔工程学院",
		"subItems" : []
	}, {
		"id" : "2198",
		"name" : "黑龙江外国语学院",
		"subItems" : []
	}, {
		"id" : "2199",
		"name" : "黑龙江财经学院",
		"subItems" : []
	}, {
		"id" : "2200",
		"name" : "哈尔滨石油学院",
		"subItems" : []
	}, {
		"id" : "2201",
		"name" : "哈尔滨远东理工学院",
		"subItems" : []
	}, {
		"id" : "2202",
		"name" : "哈尔滨剑桥学院",
		"subItems" : []
	}, {
		"id" : "2203",
		"name" : "哈尔滨广厦学院",
		"subItems" : []
	}, {
		"id" : "2204",
		"name" : "哈尔滨华德学院",
		"subItems" : []
	}, {
		"id" : "2205",
		"name" : "黑河学院",
		"subItems" : []
	}, {
		"id" : "2206",
		"name" : "齐齐哈尔高等师范专科学校",
		"subItems" : []
	}, {
		"id" : "2207",
		"name" : "伊春职业学院",
		"subItems" : []
	}, {
		"id" : "2208",
		"name" : "牡丹江大学",
		"subItems" : []
	}, {
		"id" : "2209",
		"name" : "黑龙江职业学院",
		"subItems" : []
	}, {
		"id" : "2210",
		"name" : "黑龙江建筑职业技术学院",
		"subItems" : []
	}, {
		"id" : "2211",
		"name" : "黑龙江艺术职业学院",
		"subItems" : []
	}, {
		"id" : "2212",
		"name" : "大庆职业学院",
		"subItems" : []
	}, {
		"id" : "2213",
		"name" : "黑龙江林业职业技术学院",
		"subItems" : []
	}, {
		"id" : "2214",
		"name" : "黑龙江农业职业技术学院",
		"subItems" : []
	}, {
		"id" : "2215",
		"name" : "黑龙江农业工程职业学院",
		"subItems" : []
	}, {
		"id" : "2216",
		"name" : "黑龙江农垦职业学院",
		"subItems" : []
	}, {
		"id" : "2217",
		"name" : "黑龙江司法警官职业学院",
		"subItems" : []
	}, {
		"id" : "2218",
		"name" : "鹤岗师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "2219",
		"name" : "哈尔滨电力职业技术学院",
		"subItems" : []
	}, {
		"id" : "2220",
		"name" : "哈尔滨铁道职业技术学院",
		"subItems" : []
	}, {
		"id" : "2221",
		"name" : "大兴安岭职业学院",
		"subItems" : []
	}, {
		"id" : "2222",
		"name" : "黑龙江农业经济职业学院",
		"subItems" : []
	}, {
		"id" : "2223",
		"name" : "哈尔滨职业技术学院",
		"subItems" : []
	}, {
		"id" : "2224",
		"name" : "哈尔滨传媒职业学院",
		"subItems" : []
	}, {
		"id" : "2225",
		"name" : "黑龙江生物科技职业学院",
		"subItems" : []
	}, {
		"id" : "2226",
		"name" : "黑龙江商业职业学院",
		"subItems" : []
	}, {
		"id" : "2227",
		"name" : "黑龙江公安警官职业学院",
		"subItems" : []
	}, {
		"id" : "2228",
		"name" : "黑龙江信息技术职业学院",
		"subItems" : []
	}, {
		"id" : "2229",
		"name" : "哈尔滨江南职业技术学院",
		"subItems" : []
	}, {
		"id" : "2230",
		"name" : "黑龙江农垦科技职业学院",
		"subItems" : []
	}, {
		"id" : "2231",
		"name" : "黑龙江旅游职业技术学院",
		"subItems" : []
	}, {
		"id" : "2232",
		"name" : "黑龙江三江美术职业学院",
		"subItems" : []
	}, {
		"id" : "2233",
		"name" : "黑龙江生态工程职业学院",
		"subItems" : []
	}, {
		"id" : "2234",
		"name" : "黑龙江煤炭职业技术学院",
		"subItems" : []
	}, {
		"id" : "2235",
		"name" : "七台河职业学院",
		"subItems" : []
	}, {
		"id" : "2236",
		"name" : "黑龙江民族职业学院",
		"subItems" : []
	}, {
		"id" : "2237",
		"name" : "大庆医学高等专科学校",
		"subItems" : []
	}, {
		"id" : "2238",
		"name" : "黑龙江交通职业技术学院",
		"subItems" : []
	}, {
		"id" : "2239",
		"name" : "哈尔滨应用职业技术学院",
		"subItems" : []
	}, {
		"id" : "2240",
		"name" : "黑龙江幼儿师范高等专科学校",
		"subItems" : []
	}, {
		"id" : "2241",
		"name" : "哈尔滨科学技术职业学院",
		"subItems" : []
	}, {
		"id" : "2242",
		"name" : "黑龙江粮食职业学院",
		"subItems" : []
	}, {
		"id" : "2243",
		"name" : "佳木斯职业学院",
		"subItems" : []
	}, {
		"id" : "2244",
		"name" : "黑龙江护理高等专科学校",
		"subItems" : []
	}, {
		"id" : "2245",
		"name" : "哈尔滨工程技术职业学院",
		"subItems" : []
	}, {
		"id" : "2246",
		"name" : "齐齐哈尔理工职业学院",
		"subItems" : []
	}, {
		"id" : "2247",
		"name" : "哈尔滨幼儿师范高等专科学校",
		"subItems" : []
	} ]
} ];//定义学校列表全局变量

var system_province_cities = [ {
	"id" : "11",
	"name" : "北京市",
	"subItems" : [ {
		"id" : "1101",
		"name" : "市辖区",
		"subItems" : [ {
			"id" : "110101",
			"name" : "东城区",
			"subItems" : []
		}, {
			"id" : "110102",
			"name" : "西城区",
			"subItems" : []
		}, {
			"id" : "110103",
			"name" : "崇文区",
			"subItems" : []
		}, {
			"id" : "110104",
			"name" : "宣武区",
			"subItems" : []
		}, {
			"id" : "110105",
			"name" : "朝阳区",
			"subItems" : []
		}, {
			"id" : "110106",
			"name" : "丰台区",
			"subItems" : []
		}, {
			"id" : "110107",
			"name" : "石景山区",
			"subItems" : []
		}, {
			"id" : "110108",
			"name" : "海淀区",
			"subItems" : []
		}, {
			"id" : "110109",
			"name" : "门头沟区",
			"subItems" : []
		}, {
			"id" : "110111",
			"name" : "房山区",
			"subItems" : []
		}, {
			"id" : "110112",
			"name" : "通州区",
			"subItems" : []
		}, {
			"id" : "110113",
			"name" : "顺义区",
			"subItems" : []
		}, {
			"id" : "110114",
			"name" : "昌平区",
			"subItems" : []
		}, {
			"id" : "110115",
			"name" : "大兴区",
			"subItems" : []
		}, {
			"id" : "110116",
			"name" : "怀柔区",
			"subItems" : []
		}, {
			"id" : "110117",
			"name" : "平谷区",
			"subItems" : []
		} ]
	}, {
		"id" : "1102",
		"name" : "县",
		"subItems" : [ {
			"id" : "110228",
			"name" : "密云县",
			"subItems" : []
		}, {
			"id" : "110229",
			"name" : "延庆县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "12",
	"name" : "天津市",
	"subItems" : [ {
		"id" : "1201",
		"name" : "市辖区",
		"subItems" : [ {
			"id" : "120101",
			"name" : "和平区",
			"subItems" : []
		}, {
			"id" : "120102",
			"name" : "河东区",
			"subItems" : []
		}, {
			"id" : "120103",
			"name" : "河西区",
			"subItems" : []
		}, {
			"id" : "120104",
			"name" : "南开区",
			"subItems" : []
		}, {
			"id" : "120105",
			"name" : "河北区",
			"subItems" : []
		}, {
			"id" : "120106",
			"name" : "红桥区",
			"subItems" : []
		}, {
			"id" : "120107",
			"name" : "塘沽区",
			"subItems" : []
		}, {
			"id" : "120108",
			"name" : "汉沽区",
			"subItems" : []
		}, {
			"id" : "120109",
			"name" : "大港区",
			"subItems" : []
		}, {
			"id" : "120110",
			"name" : "东丽区",
			"subItems" : []
		}, {
			"id" : "120111",
			"name" : "西青区",
			"subItems" : []
		}, {
			"id" : "120112",
			"name" : "津南区",
			"subItems" : []
		}, {
			"id" : "120113",
			"name" : "北辰区",
			"subItems" : []
		}, {
			"id" : "120114",
			"name" : "武清区",
			"subItems" : []
		}, {
			"id" : "120115",
			"name" : "宝坻区",
			"subItems" : []
		} ]
	}, {
		"id" : "1202",
		"name" : "市辖县",
		"subItems" : [ {
			"id" : "120221",
			"name" : "宁河县",
			"subItems" : []
		}, {
			"id" : "120223",
			"name" : "静海县",
			"subItems" : []
		}, {
			"id" : "120225",
			"name" : "蓟县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "13",
	"name" : "河北省",
	"subItems" : [ {
		"id" : "1301",
		"name" : "石家庄市",
		"subItems" : [ {
			"id" : "130101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130102",
			"name" : "长安区",
			"subItems" : []
		}, {
			"id" : "130103",
			"name" : "桥东区",
			"subItems" : []
		}, {
			"id" : "130104",
			"name" : "桥西区",
			"subItems" : []
		}, {
			"id" : "130105",
			"name" : "新华区",
			"subItems" : []
		}, {
			"id" : "130107",
			"name" : "井陉矿区",
			"subItems" : []
		}, {
			"id" : "130108",
			"name" : "裕华区",
			"subItems" : []
		}, {
			"id" : "130121",
			"name" : "井陉县",
			"subItems" : []
		}, {
			"id" : "130123",
			"name" : "正定县",
			"subItems" : []
		}, {
			"id" : "130124",
			"name" : "栾城县",
			"subItems" : []
		}, {
			"id" : "130125",
			"name" : "行唐县",
			"subItems" : []
		}, {
			"id" : "130126",
			"name" : "灵寿县",
			"subItems" : []
		}, {
			"id" : "130127",
			"name" : "高邑县",
			"subItems" : []
		}, {
			"id" : "130128",
			"name" : "深泽县",
			"subItems" : []
		}, {
			"id" : "130129",
			"name" : "赞皇县",
			"subItems" : []
		}, {
			"id" : "130130",
			"name" : "无极县",
			"subItems" : []
		}, {
			"id" : "130131",
			"name" : "平山县",
			"subItems" : []
		}, {
			"id" : "130132",
			"name" : "元氏县",
			"subItems" : []
		}, {
			"id" : "130133",
			"name" : "赵县",
			"subItems" : []
		}, {
			"id" : "130181",
			"name" : "辛集市",
			"subItems" : []
		}, {
			"id" : "130182",
			"name" : "藁城市",
			"subItems" : []
		}, {
			"id" : "130183",
			"name" : "晋州市",
			"subItems" : []
		}, {
			"id" : "130184",
			"name" : "新乐市",
			"subItems" : []
		}, {
			"id" : "130185",
			"name" : "鹿泉市",
			"subItems" : []
		} ]
	}, {
		"id" : "1302",
		"name" : "唐山市",
		"subItems" : [ {
			"id" : "130201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130202",
			"name" : "路南区",
			"subItems" : []
		}, {
			"id" : "130203",
			"name" : "路北区",
			"subItems" : []
		}, {
			"id" : "130204",
			"name" : "古冶区",
			"subItems" : []
		}, {
			"id" : "130205",
			"name" : "开平区",
			"subItems" : []
		}, {
			"id" : "130207",
			"name" : "丰南区",
			"subItems" : []
		}, {
			"id" : "130208",
			"name" : "丰润区",
			"subItems" : []
		}, {
			"id" : "130223",
			"name" : "滦县",
			"subItems" : []
		}, {
			"id" : "130224",
			"name" : "滦南县",
			"subItems" : []
		}, {
			"id" : "130225",
			"name" : "乐亭县",
			"subItems" : []
		}, {
			"id" : "130227",
			"name" : "迁西县",
			"subItems" : []
		}, {
			"id" : "130229",
			"name" : "玉田县",
			"subItems" : []
		}, {
			"id" : "130230",
			"name" : "唐海县",
			"subItems" : []
		}, {
			"id" : "130281",
			"name" : "遵化市",
			"subItems" : []
		}, {
			"id" : "130283",
			"name" : "迁安市",
			"subItems" : []
		} ]
	}, {
		"id" : "1303",
		"name" : "秦皇岛市",
		"subItems" : [ {
			"id" : "130301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130302",
			"name" : "海港区",
			"subItems" : []
		}, {
			"id" : "130303",
			"name" : "山海关区",
			"subItems" : []
		}, {
			"id" : "130304",
			"name" : "北戴河区",
			"subItems" : []
		}, {
			"id" : "130321",
			"name" : "青龙满族自治县",
			"subItems" : []
		}, {
			"id" : "130322",
			"name" : "昌黎县",
			"subItems" : []
		}, {
			"id" : "130323",
			"name" : "抚宁县",
			"subItems" : []
		}, {
			"id" : "130324",
			"name" : "卢龙县",
			"subItems" : []
		} ]
	}, {
		"id" : "1304",
		"name" : "邯郸市",
		"subItems" : [ {
			"id" : "130401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130402",
			"name" : "邯山区",
			"subItems" : []
		}, {
			"id" : "130403",
			"name" : "丛台区",
			"subItems" : []
		}, {
			"id" : "130404",
			"name" : "复兴区",
			"subItems" : []
		}, {
			"id" : "130406",
			"name" : "峰峰矿区",
			"subItems" : []
		}, {
			"id" : "130421",
			"name" : "邯郸县",
			"subItems" : []
		}, {
			"id" : "130423",
			"name" : "临漳县",
			"subItems" : []
		}, {
			"id" : "130424",
			"name" : "成安县",
			"subItems" : []
		}, {
			"id" : "130425",
			"name" : "大名县",
			"subItems" : []
		}, {
			"id" : "130426",
			"name" : "涉县",
			"subItems" : []
		}, {
			"id" : "130427",
			"name" : "磁县",
			"subItems" : []
		}, {
			"id" : "130428",
			"name" : "肥乡县",
			"subItems" : []
		}, {
			"id" : "130429",
			"name" : "永年县",
			"subItems" : []
		}, {
			"id" : "130430",
			"name" : "邱县",
			"subItems" : []
		}, {
			"id" : "130431",
			"name" : "鸡泽县",
			"subItems" : []
		}, {
			"id" : "130432",
			"name" : "广平县",
			"subItems" : []
		}, {
			"id" : "130433",
			"name" : "馆陶县",
			"subItems" : []
		}, {
			"id" : "130434",
			"name" : "魏县",
			"subItems" : []
		}, {
			"id" : "130435",
			"name" : "曲周县",
			"subItems" : []
		}, {
			"id" : "130481",
			"name" : "武安市",
			"subItems" : []
		} ]
	}, {
		"id" : "1305",
		"name" : "邢台市",
		"subItems" : [ {
			"id" : "130501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130502",
			"name" : "桥东区",
			"subItems" : []
		}, {
			"id" : "130503",
			"name" : "桥西区",
			"subItems" : []
		}, {
			"id" : "130521",
			"name" : "邢台县",
			"subItems" : []
		}, {
			"id" : "130522",
			"name" : "临城县",
			"subItems" : []
		}, {
			"id" : "130523",
			"name" : "内邱县",
			"subItems" : []
		}, {
			"id" : "130524",
			"name" : "柏乡县",
			"subItems" : []
		}, {
			"id" : "130525",
			"name" : "隆尧县",
			"subItems" : []
		}, {
			"id" : "130526",
			"name" : "任县",
			"subItems" : []
		}, {
			"id" : "130527",
			"name" : "南和县",
			"subItems" : []
		}, {
			"id" : "130528",
			"name" : "宁晋县",
			"subItems" : []
		}, {
			"id" : "130529",
			"name" : "巨鹿县",
			"subItems" : []
		}, {
			"id" : "130530",
			"name" : "新河县",
			"subItems" : []
		}, {
			"id" : "130531",
			"name" : "广宗县",
			"subItems" : []
		}, {
			"id" : "130532",
			"name" : "平乡县",
			"subItems" : []
		}, {
			"id" : "130533",
			"name" : "威县",
			"subItems" : []
		}, {
			"id" : "130534",
			"name" : "清河县",
			"subItems" : []
		}, {
			"id" : "130535",
			"name" : "临西县",
			"subItems" : []
		}, {
			"id" : "130581",
			"name" : "南宫市",
			"subItems" : []
		}, {
			"id" : "130582",
			"name" : "沙河市",
			"subItems" : []
		} ]
	}, {
		"id" : "1306",
		"name" : "保定市",
		"subItems" : [ {
			"id" : "130601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130602",
			"name" : "新市区",
			"subItems" : []
		}, {
			"id" : "130603",
			"name" : "北市区",
			"subItems" : []
		}, {
			"id" : "130604",
			"name" : "南市区",
			"subItems" : []
		}, {
			"id" : "130621",
			"name" : "满城县",
			"subItems" : []
		}, {
			"id" : "130622",
			"name" : "清苑县",
			"subItems" : []
		}, {
			"id" : "130623",
			"name" : "涞水县",
			"subItems" : []
		}, {
			"id" : "130624",
			"name" : "阜平县",
			"subItems" : []
		}, {
			"id" : "130625",
			"name" : "徐水县",
			"subItems" : []
		}, {
			"id" : "130626",
			"name" : "定兴县",
			"subItems" : []
		}, {
			"id" : "130627",
			"name" : "唐县",
			"subItems" : []
		}, {
			"id" : "130628",
			"name" : "高阳县",
			"subItems" : []
		}, {
			"id" : "130629",
			"name" : "容城县",
			"subItems" : []
		}, {
			"id" : "130630",
			"name" : "涞源县",
			"subItems" : []
		}, {
			"id" : "130631",
			"name" : "望都县",
			"subItems" : []
		}, {
			"id" : "130632",
			"name" : "安新县",
			"subItems" : []
		}, {
			"id" : "130633",
			"name" : "易县",
			"subItems" : []
		}, {
			"id" : "130634",
			"name" : "曲阳县",
			"subItems" : []
		}, {
			"id" : "130635",
			"name" : "蠡县",
			"subItems" : []
		}, {
			"id" : "130636",
			"name" : "顺平县",
			"subItems" : []
		}, {
			"id" : "130637",
			"name" : "博野县",
			"subItems" : []
		}, {
			"id" : "130638",
			"name" : "雄县",
			"subItems" : []
		}, {
			"id" : "130681",
			"name" : "涿州市",
			"subItems" : []
		}, {
			"id" : "130682",
			"name" : "定州市",
			"subItems" : []
		}, {
			"id" : "130683",
			"name" : "安国市",
			"subItems" : []
		}, {
			"id" : "130684",
			"name" : "高碑店市",
			"subItems" : []
		} ]
	}, {
		"id" : "1307",
		"name" : "张家口市",
		"subItems" : [ {
			"id" : "130701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130702",
			"name" : "桥东区",
			"subItems" : []
		}, {
			"id" : "130703",
			"name" : "桥西区",
			"subItems" : []
		}, {
			"id" : "130705",
			"name" : "宣化区",
			"subItems" : []
		}, {
			"id" : "130706",
			"name" : "下花园区",
			"subItems" : []
		}, {
			"id" : "130721",
			"name" : "宣化县",
			"subItems" : []
		}, {
			"id" : "130722",
			"name" : "张北县",
			"subItems" : []
		}, {
			"id" : "130723",
			"name" : "康保县",
			"subItems" : []
		}, {
			"id" : "130724",
			"name" : "沽源县",
			"subItems" : []
		}, {
			"id" : "130725",
			"name" : "尚义县",
			"subItems" : []
		}, {
			"id" : "130726",
			"name" : "蔚县",
			"subItems" : []
		}, {
			"id" : "130727",
			"name" : "阳原县",
			"subItems" : []
		}, {
			"id" : "130728",
			"name" : "怀安县",
			"subItems" : []
		}, {
			"id" : "130729",
			"name" : "万全县",
			"subItems" : []
		}, {
			"id" : "130730",
			"name" : "怀来县",
			"subItems" : []
		}, {
			"id" : "130731",
			"name" : "涿鹿县",
			"subItems" : []
		}, {
			"id" : "130732",
			"name" : "赤城县",
			"subItems" : []
		}, {
			"id" : "130733",
			"name" : "崇礼县",
			"subItems" : []
		} ]
	}, {
		"id" : "1308",
		"name" : "承德市",
		"subItems" : [ {
			"id" : "130801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130802",
			"name" : "双桥区",
			"subItems" : []
		}, {
			"id" : "130803",
			"name" : "双滦区",
			"subItems" : []
		}, {
			"id" : "130804",
			"name" : "鹰手营子矿区",
			"subItems" : []
		}, {
			"id" : "130821",
			"name" : "承德县",
			"subItems" : []
		}, {
			"id" : "130822",
			"name" : "兴隆县",
			"subItems" : []
		}, {
			"id" : "130823",
			"name" : "平泉县",
			"subItems" : []
		}, {
			"id" : "130824",
			"name" : "滦平县",
			"subItems" : []
		}, {
			"id" : "130825",
			"name" : "隆化县",
			"subItems" : []
		}, {
			"id" : "130826",
			"name" : "丰宁满族自治县",
			"subItems" : []
		}, {
			"id" : "130827",
			"name" : "宽城满族自治县",
			"subItems" : []
		}, {
			"id" : "130828",
			"name" : "围场满族蒙古族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "1309",
		"name" : "沧州市",
		"subItems" : [ {
			"id" : "130901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "130902",
			"name" : "新华区",
			"subItems" : []
		}, {
			"id" : "130903",
			"name" : "运河区",
			"subItems" : []
		}, {
			"id" : "130921",
			"name" : "沧县",
			"subItems" : []
		}, {
			"id" : "130922",
			"name" : "青县",
			"subItems" : []
		}, {
			"id" : "130923",
			"name" : "东光县",
			"subItems" : []
		}, {
			"id" : "130924",
			"name" : "海兴县",
			"subItems" : []
		}, {
			"id" : "130925",
			"name" : "盐山县",
			"subItems" : []
		}, {
			"id" : "130926",
			"name" : "肃宁县",
			"subItems" : []
		}, {
			"id" : "130927",
			"name" : "南皮县",
			"subItems" : []
		}, {
			"id" : "130928",
			"name" : "吴桥县",
			"subItems" : []
		}, {
			"id" : "130929",
			"name" : "献县",
			"subItems" : []
		}, {
			"id" : "130930",
			"name" : "孟村回族自治县",
			"subItems" : []
		}, {
			"id" : "130981",
			"name" : "泊头市",
			"subItems" : []
		}, {
			"id" : "130982",
			"name" : "任邱市",
			"subItems" : []
		}, {
			"id" : "130983",
			"name" : "黄骅市",
			"subItems" : []
		}, {
			"id" : "130984",
			"name" : "河间市",
			"subItems" : []
		} ]
	}, {
		"id" : "1310",
		"name" : "廊坊市",
		"subItems" : [ {
			"id" : "131001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "131002",
			"name" : "安次区",
			"subItems" : []
		}, {
			"id" : "131003",
			"name" : "广阳区",
			"subItems" : []
		}, {
			"id" : "131022",
			"name" : "固安县",
			"subItems" : []
		}, {
			"id" : "131023",
			"name" : "永清县",
			"subItems" : []
		}, {
			"id" : "131024",
			"name" : "香河县",
			"subItems" : []
		}, {
			"id" : "131025",
			"name" : "大城县",
			"subItems" : []
		}, {
			"id" : "131026",
			"name" : "文安县",
			"subItems" : []
		}, {
			"id" : "131028",
			"name" : "大厂回族自治县",
			"subItems" : []
		}, {
			"id" : "131081",
			"name" : "霸州市",
			"subItems" : []
		}, {
			"id" : "131082",
			"name" : "三河市",
			"subItems" : []
		} ]
	}, {
		"id" : "1311",
		"name" : "衡水市",
		"subItems" : [ {
			"id" : "131101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "131102",
			"name" : "桃城区",
			"subItems" : []
		}, {
			"id" : "131121",
			"name" : "枣强县",
			"subItems" : []
		}, {
			"id" : "131122",
			"name" : "武邑县",
			"subItems" : []
		}, {
			"id" : "131123",
			"name" : "武强县",
			"subItems" : []
		}, {
			"id" : "131124",
			"name" : "饶阳县",
			"subItems" : []
		}, {
			"id" : "131125",
			"name" : "安平县",
			"subItems" : []
		}, {
			"id" : "131126",
			"name" : "故城县",
			"subItems" : []
		}, {
			"id" : "131127",
			"name" : "景县",
			"subItems" : []
		}, {
			"id" : "131128",
			"name" : "阜城县",
			"subItems" : []
		}, {
			"id" : "131181",
			"name" : "冀州市",
			"subItems" : []
		}, {
			"id" : "131182",
			"name" : "深州市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "14",
	"name" : "山西",
	"subItems" : [ {
		"id" : "1401",
		"name" : "太原市",
		"subItems" : [ {
			"id" : "140101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140105",
			"name" : "小店区(人口含高新经济区)",
			"subItems" : []
		}, {
			"id" : "140106",
			"name" : "迎泽区",
			"subItems" : []
		}, {
			"id" : "140107",
			"name" : "杏花岭区",
			"subItems" : []
		}, {
			"id" : "140108",
			"name" : "尖草坪区",
			"subItems" : []
		}, {
			"id" : "140109",
			"name" : "万柏林区",
			"subItems" : []
		}, {
			"id" : "140110",
			"name" : "晋源区",
			"subItems" : []
		}, {
			"id" : "140121",
			"name" : "清徐县",
			"subItems" : []
		}, {
			"id" : "140122",
			"name" : "阳曲县",
			"subItems" : []
		}, {
			"id" : "140123",
			"name" : "娄烦县",
			"subItems" : []
		}, {
			"id" : "140181",
			"name" : "古交市",
			"subItems" : []
		} ]
	}, {
		"id" : "1402",
		"name" : "大同市",
		"subItems" : [ {
			"id" : "140201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140202",
			"name" : "大同市城区",
			"subItems" : []
		}, {
			"id" : "140203",
			"name" : "矿区",
			"subItems" : []
		}, {
			"id" : "140211",
			"name" : "南郊区",
			"subItems" : []
		}, {
			"id" : "140212",
			"name" : "新荣区",
			"subItems" : []
		}, {
			"id" : "140221",
			"name" : "阳高县",
			"subItems" : []
		}, {
			"id" : "140222",
			"name" : "天镇县",
			"subItems" : []
		}, {
			"id" : "140223",
			"name" : "广灵县",
			"subItems" : []
		}, {
			"id" : "140224",
			"name" : "灵丘县",
			"subItems" : []
		}, {
			"id" : "140225",
			"name" : "浑源县",
			"subItems" : []
		}, {
			"id" : "140226",
			"name" : "左云县",
			"subItems" : []
		}, {
			"id" : "140227",
			"name" : "大同县",
			"subItems" : []
		} ]
	}, {
		"id" : "1403",
		"name" : "阳泉市",
		"subItems" : [ {
			"id" : "140301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140302",
			"name" : "城区",
			"subItems" : []
		}, {
			"id" : "140303",
			"name" : "矿区",
			"subItems" : []
		}, {
			"id" : "140311",
			"name" : "郊区",
			"subItems" : []
		}, {
			"id" : "140321",
			"name" : "平定县",
			"subItems" : []
		}, {
			"id" : "140322",
			"name" : "盂县",
			"subItems" : []
		} ]
	}, {
		"id" : "1404",
		"name" : "长治市",
		"subItems" : [ {
			"id" : "140401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140402",
			"name" : "长治市城区",
			"subItems" : []
		}, {
			"id" : "140411",
			"name" : "长治市郊区",
			"subItems" : []
		}, {
			"id" : "140421",
			"name" : "长治县",
			"subItems" : []
		}, {
			"id" : "140423",
			"name" : "襄垣县",
			"subItems" : []
		}, {
			"id" : "140424",
			"name" : "屯留县",
			"subItems" : []
		}, {
			"id" : "140425",
			"name" : "平顺县",
			"subItems" : []
		}, {
			"id" : "140426",
			"name" : "黎城县",
			"subItems" : []
		}, {
			"id" : "140427",
			"name" : "壶关县",
			"subItems" : []
		}, {
			"id" : "140428",
			"name" : "长子县",
			"subItems" : []
		}, {
			"id" : "140429",
			"name" : "武乡县",
			"subItems" : []
		}, {
			"id" : "140430",
			"name" : "沁县",
			"subItems" : []
		}, {
			"id" : "140431",
			"name" : "沁源县",
			"subItems" : []
		}, {
			"id" : "140481",
			"name" : "潞城市",
			"subItems" : []
		} ]
	}, {
		"id" : "1405",
		"name" : "晋城市",
		"subItems" : [ {
			"id" : "140501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140502",
			"name" : "晋城市城区",
			"subItems" : []
		}, {
			"id" : "140521",
			"name" : "沁水县",
			"subItems" : []
		}, {
			"id" : "140522",
			"name" : "阳城县",
			"subItems" : []
		}, {
			"id" : "140524",
			"name" : "陵川县",
			"subItems" : []
		}, {
			"id" : "140525",
			"name" : "泽州县",
			"subItems" : []
		}, {
			"id" : "140581",
			"name" : "高平市",
			"subItems" : []
		} ]
	}, {
		"id" : "1406",
		"name" : "朔州市",
		"subItems" : [ {
			"id" : "140601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140602",
			"name" : "朔城区",
			"subItems" : []
		}, {
			"id" : "140603",
			"name" : "平鲁区",
			"subItems" : []
		}, {
			"id" : "140621",
			"name" : "山阴县",
			"subItems" : []
		}, {
			"id" : "140622",
			"name" : "应县",
			"subItems" : []
		}, {
			"id" : "140623",
			"name" : "右玉县",
			"subItems" : []
		}, {
			"id" : "140624",
			"name" : "怀仁县",
			"subItems" : []
		} ]
	}, {
		"id" : "1407",
		"name" : "晋中市",
		"subItems" : [ {
			"id" : "140701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140702",
			"name" : "榆次区",
			"subItems" : []
		}, {
			"id" : "140721",
			"name" : "榆社县",
			"subItems" : []
		}, {
			"id" : "140722",
			"name" : "左权县",
			"subItems" : []
		}, {
			"id" : "140723",
			"name" : "和顺县",
			"subItems" : []
		}, {
			"id" : "140724",
			"name" : "昔阳县",
			"subItems" : []
		}, {
			"id" : "140725",
			"name" : "寿阳县",
			"subItems" : []
		}, {
			"id" : "140726",
			"name" : "太谷县",
			"subItems" : []
		}, {
			"id" : "140727",
			"name" : "祁县",
			"subItems" : []
		}, {
			"id" : "140728",
			"name" : "平遥县",
			"subItems" : []
		}, {
			"id" : "140729",
			"name" : "灵石县",
			"subItems" : []
		}, {
			"id" : "140781",
			"name" : "介休市",
			"subItems" : []
		} ]
	}, {
		"id" : "1408",
		"name" : "运城市",
		"subItems" : [ {
			"id" : "140801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140802",
			"name" : "盐湖区",
			"subItems" : []
		}, {
			"id" : "140821",
			"name" : "临猗县",
			"subItems" : []
		}, {
			"id" : "140822",
			"name" : "万荣县",
			"subItems" : []
		}, {
			"id" : "140823",
			"name" : "闻喜县",
			"subItems" : []
		}, {
			"id" : "140824",
			"name" : "稷山县",
			"subItems" : []
		}, {
			"id" : "140825",
			"name" : "新绛县",
			"subItems" : []
		}, {
			"id" : "140826",
			"name" : "绛县",
			"subItems" : []
		}, {
			"id" : "140827",
			"name" : "垣曲县",
			"subItems" : []
		}, {
			"id" : "140828",
			"name" : "夏县",
			"subItems" : []
		}, {
			"id" : "140829",
			"name" : "平陆县",
			"subItems" : []
		}, {
			"id" : "140830",
			"name" : "芮城县",
			"subItems" : []
		}, {
			"id" : "140881",
			"name" : "永济市",
			"subItems" : []
		}, {
			"id" : "140882",
			"name" : "河津市",
			"subItems" : []
		} ]
	}, {
		"id" : "1409",
		"name" : "忻州市",
		"subItems" : [ {
			"id" : "140901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "140902",
			"name" : "忻府区",
			"subItems" : []
		}, {
			"id" : "140921",
			"name" : "定襄县",
			"subItems" : []
		}, {
			"id" : "140922",
			"name" : "五台县",
			"subItems" : []
		}, {
			"id" : "140923",
			"name" : "代县",
			"subItems" : []
		}, {
			"id" : "140924",
			"name" : "繁峙县",
			"subItems" : []
		}, {
			"id" : "140925",
			"name" : "宁武县",
			"subItems" : []
		}, {
			"id" : "140926",
			"name" : "静乐县",
			"subItems" : []
		}, {
			"id" : "140927",
			"name" : "神池县",
			"subItems" : []
		}, {
			"id" : "140928",
			"name" : "五寨县",
			"subItems" : []
		}, {
			"id" : "140929",
			"name" : "岢岚县",
			"subItems" : []
		}, {
			"id" : "140930",
			"name" : "河曲县",
			"subItems" : []
		}, {
			"id" : "140931",
			"name" : "保德县",
			"subItems" : []
		}, {
			"id" : "140932",
			"name" : "偏关县",
			"subItems" : []
		}, {
			"id" : "140981",
			"name" : "原平市",
			"subItems" : []
		} ]
	}, {
		"id" : "1410",
		"name" : "临汾市",
		"subItems" : [ {
			"id" : "141001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "141002",
			"name" : "尧都区",
			"subItems" : []
		}, {
			"id" : "141021",
			"name" : "曲沃县",
			"subItems" : []
		}, {
			"id" : "141022",
			"name" : "翼城县",
			"subItems" : []
		}, {
			"id" : "141023",
			"name" : "襄汾县",
			"subItems" : []
		}, {
			"id" : "141024",
			"name" : "洪洞县",
			"subItems" : []
		}, {
			"id" : "141025",
			"name" : "古县",
			"subItems" : []
		}, {
			"id" : "141026",
			"name" : "安泽县",
			"subItems" : []
		}, {
			"id" : "141027",
			"name" : "浮山县",
			"subItems" : []
		}, {
			"id" : "141028",
			"name" : "吉县",
			"subItems" : []
		}, {
			"id" : "141029",
			"name" : "乡宁县",
			"subItems" : []
		}, {
			"id" : "141030",
			"name" : "大宁县",
			"subItems" : []
		}, {
			"id" : "141031",
			"name" : "隰县",
			"subItems" : []
		}, {
			"id" : "141032",
			"name" : "永和县",
			"subItems" : []
		}, {
			"id" : "141033",
			"name" : "蒲县",
			"subItems" : []
		}, {
			"id" : "141034",
			"name" : "汾西县",
			"subItems" : []
		}, {
			"id" : "141081",
			"name" : "侯马市",
			"subItems" : []
		}, {
			"id" : "141082",
			"name" : "霍州市",
			"subItems" : []
		} ]
	}, {
		"id" : "1411",
		"name" : "吕梁市",
		"subItems" : [ {
			"id" : "141101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "141102",
			"name" : "离石区",
			"subItems" : []
		}, {
			"id" : "141121",
			"name" : "文水县",
			"subItems" : []
		}, {
			"id" : "141122",
			"name" : "交城县",
			"subItems" : []
		}, {
			"id" : "141123",
			"name" : "兴县",
			"subItems" : []
		}, {
			"id" : "141124",
			"name" : "临县",
			"subItems" : []
		}, {
			"id" : "141125",
			"name" : "柳林县",
			"subItems" : []
		}, {
			"id" : "141126",
			"name" : "石楼县",
			"subItems" : []
		}, {
			"id" : "141127",
			"name" : "岚县",
			"subItems" : []
		}, {
			"id" : "141128",
			"name" : "方山县",
			"subItems" : []
		}, {
			"id" : "141129",
			"name" : "中阳县",
			"subItems" : []
		}, {
			"id" : "141130",
			"name" : "交口县",
			"subItems" : []
		}, {
			"id" : "141181",
			"name" : "孝义市",
			"subItems" : []
		}, {
			"id" : "141182",
			"name" : "汾阳市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "15",
	"name" : "内蒙古自治区",
	"subItems" : [ {
		"id" : "1501",
		"name" : "呼和浩特市",
		"subItems" : [ {
			"id" : "150101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150102",
			"name" : "新城区",
			"subItems" : []
		}, {
			"id" : "150103",
			"name" : "回民区",
			"subItems" : []
		}, {
			"id" : "150104",
			"name" : "玉泉区",
			"subItems" : []
		}, {
			"id" : "150105",
			"name" : "赛罕区",
			"subItems" : []
		}, {
			"id" : "150121",
			"name" : "土左旗",
			"subItems" : []
		}, {
			"id" : "150122",
			"name" : "托克托县",
			"subItems" : []
		}, {
			"id" : "150123",
			"name" : "和林格尔县",
			"subItems" : []
		}, {
			"id" : "150124",
			"name" : "清水河县",
			"subItems" : []
		}, {
			"id" : "150125",
			"name" : "武川县",
			"subItems" : []
		} ]
	}, {
		"id" : "1502",
		"name" : "包头市",
		"subItems" : [ {
			"id" : "150201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150202",
			"name" : "东河区",
			"subItems" : []
		}, {
			"id" : "150203",
			"name" : "昆都仑区",
			"subItems" : []
		}, {
			"id" : "150204",
			"name" : "青山区",
			"subItems" : []
		}, {
			"id" : "150205",
			"name" : "石拐区",
			"subItems" : []
		}, {
			"id" : "150206",
			"name" : "白云鄂博矿区",
			"subItems" : []
		}, {
			"id" : "150207",
			"name" : "九原区",
			"subItems" : []
		}, {
			"id" : "150221",
			"name" : "土默特右旗",
			"subItems" : []
		}, {
			"id" : "150222",
			"name" : "固阳县",
			"subItems" : []
		}, {
			"id" : "150223",
			"name" : "达茂联合旗",
			"subItems" : []
		} ]
	}, {
		"id" : "1503",
		"name" : "乌海市",
		"subItems" : [ {
			"id" : "150301",
			"name" : "乌海市辖区",
			"subItems" : []
		}, {
			"id" : "150302",
			"name" : "海勃湾区",
			"subItems" : []
		}, {
			"id" : "150303",
			"name" : "海南区",
			"subItems" : []
		}, {
			"id" : "150304",
			"name" : "乌达区",
			"subItems" : []
		} ]
	}, {
		"id" : "1504",
		"name" : "赤峰市",
		"subItems" : [ {
			"id" : "150401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150402",
			"name" : "红山区",
			"subItems" : []
		}, {
			"id" : "150403",
			"name" : "元宝山区",
			"subItems" : []
		}, {
			"id" : "150404",
			"name" : "松山区",
			"subItems" : []
		}, {
			"id" : "150421",
			"name" : "阿鲁科尔沁旗",
			"subItems" : []
		}, {
			"id" : "150422",
			"name" : "巴林左旗",
			"subItems" : []
		}, {
			"id" : "150423",
			"name" : "巴林右旗",
			"subItems" : []
		}, {
			"id" : "150424",
			"name" : "林西县",
			"subItems" : []
		}, {
			"id" : "150425",
			"name" : "克什克腾旗",
			"subItems" : []
		}, {
			"id" : "150426",
			"name" : "翁牛特旗",
			"subItems" : []
		}, {
			"id" : "150428",
			"name" : "喀喇沁旗",
			"subItems" : []
		}, {
			"id" : "150429",
			"name" : "宁城县",
			"subItems" : []
		}, {
			"id" : "150430",
			"name" : "敖汉旗",
			"subItems" : []
		} ]
	}, {
		"id" : "1505",
		"name" : "通辽市",
		"subItems" : [ {
			"id" : "150501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150502",
			"name" : "科尔沁区",
			"subItems" : []
		}, {
			"id" : "150521",
			"name" : "科尔沁左翼中旗",
			"subItems" : []
		}, {
			"id" : "150522",
			"name" : "科左后旗",
			"subItems" : []
		}, {
			"id" : "150523",
			"name" : "开鲁县",
			"subItems" : []
		}, {
			"id" : "150524",
			"name" : "库伦旗",
			"subItems" : []
		}, {
			"id" : "150525",
			"name" : "奈曼旗",
			"subItems" : []
		}, {
			"id" : "150526",
			"name" : "扎鲁特旗",
			"subItems" : []
		}, {
			"id" : "150581",
			"name" : "霍林郭勒市",
			"subItems" : []
		} ]
	}, {
		"id" : "1506",
		"name" : "鄂尔多斯市",
		"subItems" : [ {
			"id" : "150602",
			"name" : "东胜区",
			"subItems" : []
		}, {
			"id" : "150621",
			"name" : "达拉特旗",
			"subItems" : []
		}, {
			"id" : "150622",
			"name" : "准格尔旗",
			"subItems" : []
		}, {
			"id" : "150623",
			"name" : "鄂托克前旗",
			"subItems" : []
		}, {
			"id" : "150624",
			"name" : "鄂托克旗",
			"subItems" : []
		}, {
			"id" : "150625",
			"name" : "杭锦旗",
			"subItems" : []
		}, {
			"id" : "150626",
			"name" : "乌审旗",
			"subItems" : []
		}, {
			"id" : "150627",
			"name" : "伊金霍洛旗",
			"subItems" : []
		} ]
	}, {
		"id" : "1507",
		"name" : "呼伦贝尔市",
		"subItems" : [ {
			"id" : "150701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150702",
			"name" : "海拉尔区",
			"subItems" : []
		}, {
			"id" : "150721",
			"name" : "阿荣旗",
			"subItems" : []
		}, {
			"id" : "150722",
			"name" : "莫力达瓦达斡尔族自治旗",
			"subItems" : []
		}, {
			"id" : "150723",
			"name" : "鄂伦春自治旗",
			"subItems" : []
		}, {
			"id" : "150724",
			"name" : "鄂温克族自治旗",
			"subItems" : []
		}, {
			"id" : "150725",
			"name" : "陈巴尔虎旗镇",
			"subItems" : []
		}, {
			"id" : "150726",
			"name" : "新巴尔虎左旗",
			"subItems" : []
		}, {
			"id" : "150727",
			"name" : "新巴尔虎右旗",
			"subItems" : []
		}, {
			"id" : "150781",
			"name" : "满洲里市",
			"subItems" : []
		}, {
			"id" : "150782",
			"name" : "牙克石市",
			"subItems" : []
		}, {
			"id" : "150783",
			"name" : "扎兰屯市",
			"subItems" : []
		}, {
			"id" : "150784",
			"name" : "额尔古纳市",
			"subItems" : []
		}, {
			"id" : "150785",
			"name" : "根河市",
			"subItems" : []
		} ]
	}, {
		"id" : "1508",
		"name" : "巴彦淖尔市",
		"subItems" : [ {
			"id" : "150801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150802",
			"name" : "临河区",
			"subItems" : []
		}, {
			"id" : "150821",
			"name" : "五原县",
			"subItems" : []
		}, {
			"id" : "150822",
			"name" : "磴口县",
			"subItems" : []
		}, {
			"id" : "150823",
			"name" : "乌拉特前旗",
			"subItems" : []
		}, {
			"id" : "150824",
			"name" : "乌拉特中旗",
			"subItems" : []
		}, {
			"id" : "150825",
			"name" : "乌拉特后旗",
			"subItems" : []
		}, {
			"id" : "150826",
			"name" : "杭锦后旗",
			"subItems" : []
		} ]
	}, {
		"id" : "1509",
		"name" : "乌兰察布市",
		"subItems" : [ {
			"id" : "150901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "150902",
			"name" : "集宁区",
			"subItems" : []
		}, {
			"id" : "150921",
			"name" : "卓资县",
			"subItems" : []
		}, {
			"id" : "150922",
			"name" : "化德县",
			"subItems" : []
		}, {
			"id" : "150923",
			"name" : "商都县",
			"subItems" : []
		}, {
			"id" : "150924",
			"name" : "兴和县",
			"subItems" : []
		}, {
			"id" : "150925",
			"name" : "凉城县",
			"subItems" : []
		}, {
			"id" : "150926",
			"name" : "察哈尔右翼前旗",
			"subItems" : []
		}, {
			"id" : "150927",
			"name" : "察右中旗",
			"subItems" : []
		}, {
			"id" : "150928",
			"name" : "察哈尔右翼后旗",
			"subItems" : []
		}, {
			"id" : "150929",
			"name" : "四子王旗",
			"subItems" : []
		}, {
			"id" : "150981",
			"name" : "丰镇市",
			"subItems" : []
		} ]
	}, {
		"id" : "1522",
		"name" : "兴安盟",
		"subItems" : [ {
			"id" : "152201",
			"name" : "乌兰浩特市",
			"subItems" : []
		}, {
			"id" : "152202",
			"name" : "阿尔山市",
			"subItems" : []
		}, {
			"id" : "152221",
			"name" : "科右前旗",
			"subItems" : []
		}, {
			"id" : "152222",
			"name" : "科右中旗",
			"subItems" : []
		}, {
			"id" : "152223",
			"name" : "扎赉特旗",
			"subItems" : []
		}, {
			"id" : "152224",
			"name" : "突泉县",
			"subItems" : []
		} ]
	}, {
		"id" : "1525",
		"name" : "锡林郭勒盟",
		"subItems" : [ {
			"id" : "152501",
			"name" : "二连浩特市",
			"subItems" : []
		}, {
			"id" : "152502",
			"name" : "锡林浩特市",
			"subItems" : []
		}, {
			"id" : "152522",
			"name" : "阿巴嘎旗",
			"subItems" : []
		}, {
			"id" : "152523",
			"name" : "苏尼特左旗",
			"subItems" : []
		}, {
			"id" : "152524",
			"name" : "苏尼特右旗",
			"subItems" : []
		}, {
			"id" : "152525",
			"name" : "东乌珠穆沁旗",
			"subItems" : []
		}, {
			"id" : "152526",
			"name" : "西乌珠穆沁旗",
			"subItems" : []
		}, {
			"id" : "152527",
			"name" : "太仆寺旗",
			"subItems" : []
		}, {
			"id" : "152528",
			"name" : "镶黄旗",
			"subItems" : []
		}, {
			"id" : "152529",
			"name" : "正镶白旗",
			"subItems" : []
		}, {
			"id" : "152530",
			"name" : "正蓝旗",
			"subItems" : []
		}, {
			"id" : "152531",
			"name" : "多伦县",
			"subItems" : []
		} ]
	}, {
		"id" : "1529",
		"name" : "阿拉善盟",
		"subItems" : [ {
			"id" : "152921",
			"name" : "阿拉善左旗",
			"subItems" : []
		}, {
			"id" : "152922",
			"name" : "阿拉善右旗",
			"subItems" : []
		}, {
			"id" : "152923",
			"name" : "额济纳旗",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "21",
	"name" : "辽宁省",
	"subItems" : [ {
		"id" : "2101",
		"name" : "沈阳市",
		"subItems" : [ {
			"id" : "210101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210102",
			"name" : "和平区",
			"subItems" : []
		}, {
			"id" : "210103",
			"name" : "沈河区",
			"subItems" : []
		}, {
			"id" : "210104",
			"name" : "大东区",
			"subItems" : []
		}, {
			"id" : "210105",
			"name" : "皇姑区",
			"subItems" : []
		}, {
			"id" : "210106",
			"name" : "铁西区",
			"subItems" : []
		}, {
			"id" : "210111",
			"name" : "苏家屯区",
			"subItems" : []
		}, {
			"id" : "210112",
			"name" : "东陵区",
			"subItems" : []
		}, {
			"id" : "210113",
			"name" : "新城子区",
			"subItems" : []
		}, {
			"id" : "210114",
			"name" : "于洪区",
			"subItems" : []
		}, {
			"id" : "210122",
			"name" : "辽中县",
			"subItems" : []
		}, {
			"id" : "210123",
			"name" : "康平县",
			"subItems" : []
		}, {
			"id" : "210124",
			"name" : "法库县",
			"subItems" : []
		}, {
			"id" : "210181",
			"name" : "新民市",
			"subItems" : []
		} ]
	}, {
		"id" : "2102",
		"name" : "大连市",
		"subItems" : [ {
			"id" : "210201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210202",
			"name" : "中山区",
			"subItems" : []
		}, {
			"id" : "210203",
			"name" : "西岗区",
			"subItems" : []
		}, {
			"id" : "210204",
			"name" : "沙河口区",
			"subItems" : []
		}, {
			"id" : "210211",
			"name" : "甘井子区",
			"subItems" : []
		}, {
			"id" : "210212",
			"name" : "旅顺口区",
			"subItems" : []
		}, {
			"id" : "210213",
			"name" : "金州区",
			"subItems" : []
		}, {
			"id" : "210224",
			"name" : "长海县",
			"subItems" : []
		}, {
			"id" : "210281",
			"name" : "瓦房店市",
			"subItems" : []
		}, {
			"id" : "210282",
			"name" : "普兰店市",
			"subItems" : []
		}, {
			"id" : "210283",
			"name" : "庄河市",
			"subItems" : []
		} ]
	}, {
		"id" : "2103",
		"name" : "鞍山市",
		"subItems" : [ {
			"id" : "210301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210302",
			"name" : "铁东区",
			"subItems" : []
		}, {
			"id" : "210303",
			"name" : "铁西区",
			"subItems" : []
		}, {
			"id" : "210304",
			"name" : "立山区",
			"subItems" : []
		}, {
			"id" : "210311",
			"name" : "千山区",
			"subItems" : []
		}, {
			"id" : "210321",
			"name" : "台安县",
			"subItems" : []
		}, {
			"id" : "210323",
			"name" : "岫岩县",
			"subItems" : []
		}, {
			"id" : "210381",
			"name" : "海城市",
			"subItems" : []
		} ]
	}, {
		"id" : "2104",
		"name" : "抚顺市",
		"subItems" : [ {
			"id" : "210401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210402",
			"name" : "新抚区",
			"subItems" : []
		}, {
			"id" : "210403",
			"name" : "东洲区",
			"subItems" : []
		}, {
			"id" : "210404",
			"name" : "望花区",
			"subItems" : []
		}, {
			"id" : "210411",
			"name" : "顺城区",
			"subItems" : []
		}, {
			"id" : "210421",
			"name" : "抚顺县",
			"subItems" : []
		}, {
			"id" : "210422",
			"name" : "新宾满族自治县",
			"subItems" : []
		}, {
			"id" : "210423",
			"name" : "清原满族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "2105",
		"name" : "本溪市",
		"subItems" : [ {
			"id" : "210501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210502",
			"name" : "平山区",
			"subItems" : []
		}, {
			"id" : "210503",
			"name" : "溪湖区",
			"subItems" : []
		}, {
			"id" : "210504",
			"name" : "明山区",
			"subItems" : []
		}, {
			"id" : "210505",
			"name" : "南芬区",
			"subItems" : []
		}, {
			"id" : "210521",
			"name" : "本溪满族自治县",
			"subItems" : []
		}, {
			"id" : "210522",
			"name" : "桓仁满族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "2106",
		"name" : "丹东市",
		"subItems" : [ {
			"id" : "210601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210602",
			"name" : "元宝区",
			"subItems" : []
		}, {
			"id" : "210603",
			"name" : "振兴区",
			"subItems" : []
		}, {
			"id" : "210604",
			"name" : "振安区",
			"subItems" : []
		}, {
			"id" : "210624",
			"name" : "宽甸满族自治县",
			"subItems" : []
		}, {
			"id" : "210681",
			"name" : "东港市",
			"subItems" : []
		}, {
			"id" : "210682",
			"name" : "凤城市",
			"subItems" : []
		} ]
	}, {
		"id" : "2107",
		"name" : "锦州市",
		"subItems" : [ {
			"id" : "210701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210702",
			"name" : "古塔区",
			"subItems" : []
		}, {
			"id" : "210703",
			"name" : "凌河区",
			"subItems" : []
		}, {
			"id" : "210711",
			"name" : "太和区",
			"subItems" : []
		}, {
			"id" : "210726",
			"name" : "黑山县",
			"subItems" : []
		}, {
			"id" : "210727",
			"name" : "义县",
			"subItems" : []
		}, {
			"id" : "210781",
			"name" : "凌海市",
			"subItems" : []
		}, {
			"id" : "210782",
			"name" : "北镇市",
			"subItems" : []
		} ]
	}, {
		"id" : "2108",
		"name" : "营口市",
		"subItems" : [ {
			"id" : "210801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210802",
			"name" : "站前区",
			"subItems" : []
		}, {
			"id" : "210803",
			"name" : "西市区",
			"subItems" : []
		}, {
			"id" : "210804",
			"name" : "鲅鱼圈区",
			"subItems" : []
		}, {
			"id" : "210811",
			"name" : "老边区",
			"subItems" : []
		}, {
			"id" : "210881",
			"name" : "盖州市",
			"subItems" : []
		}, {
			"id" : "210882",
			"name" : "大石桥市",
			"subItems" : []
		} ]
	}, {
		"id" : "2109",
		"name" : "阜新市",
		"subItems" : [ {
			"id" : "210901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "210902",
			"name" : "海州区",
			"subItems" : []
		}, {
			"id" : "210903",
			"name" : "新邱区",
			"subItems" : []
		}, {
			"id" : "210904",
			"name" : "太平区",
			"subItems" : []
		}, {
			"id" : "210905",
			"name" : "清河门区",
			"subItems" : []
		}, {
			"id" : "210911",
			"name" : "细河区",
			"subItems" : []
		}, {
			"id" : "210921",
			"name" : "阜新蒙古族自治县",
			"subItems" : []
		}, {
			"id" : "210922",
			"name" : "彰武县",
			"subItems" : []
		} ]
	}, {
		"id" : "2110",
		"name" : "辽阳市",
		"subItems" : [ {
			"id" : "211001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "211002",
			"name" : "白塔区",
			"subItems" : []
		}, {
			"id" : "211003",
			"name" : "文圣区",
			"subItems" : []
		}, {
			"id" : "211004",
			"name" : "宏伟区",
			"subItems" : []
		}, {
			"id" : "211005",
			"name" : "弓长岭区",
			"subItems" : []
		}, {
			"id" : "211011",
			"name" : "太子河区",
			"subItems" : []
		}, {
			"id" : "211021",
			"name" : "辽阳县",
			"subItems" : []
		}, {
			"id" : "211081",
			"name" : "灯塔市",
			"subItems" : []
		} ]
	}, {
		"id" : "2111",
		"name" : "盘锦市",
		"subItems" : [ {
			"id" : "211101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "211102",
			"name" : "双台子区",
			"subItems" : []
		}, {
			"id" : "211103",
			"name" : "兴隆台区",
			"subItems" : []
		}, {
			"id" : "211121",
			"name" : "大洼县",
			"subItems" : []
		}, {
			"id" : "211122",
			"name" : "盘山县",
			"subItems" : []
		} ]
	}, {
		"id" : "2112",
		"name" : "铁岭市",
		"subItems" : [ {
			"id" : "211201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "211202",
			"name" : "银州区",
			"subItems" : []
		}, {
			"id" : "211204",
			"name" : "清河区",
			"subItems" : []
		}, {
			"id" : "211221",
			"name" : "铁岭县",
			"subItems" : []
		}, {
			"id" : "211223",
			"name" : "西丰县",
			"subItems" : []
		}, {
			"id" : "211224",
			"name" : "昌图县",
			"subItems" : []
		}, {
			"id" : "211281",
			"name" : "调兵山市",
			"subItems" : []
		}, {
			"id" : "211282",
			"name" : "开原市",
			"subItems" : []
		} ]
	}, {
		"id" : "2113",
		"name" : "朝阳市",
		"subItems" : [ {
			"id" : "211301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "211302",
			"name" : "双塔区",
			"subItems" : []
		}, {
			"id" : "211303",
			"name" : "龙城区",
			"subItems" : []
		}, {
			"id" : "211321",
			"name" : "朝阳县",
			"subItems" : []
		}, {
			"id" : "211322",
			"name" : "建平县",
			"subItems" : []
		}, {
			"id" : "211324",
			"name" : "喀喇沁左翼蒙古族自治县",
			"subItems" : []
		}, {
			"id" : "211381",
			"name" : "北票市",
			"subItems" : []
		}, {
			"id" : "211382",
			"name" : "凌源市",
			"subItems" : []
		} ]
	}, {
		"id" : "2114",
		"name" : "葫芦岛市",
		"subItems" : [ {
			"id" : "211401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "211402",
			"name" : "连山区",
			"subItems" : []
		}, {
			"id" : "211403",
			"name" : "龙港区",
			"subItems" : []
		}, {
			"id" : "211404",
			"name" : "南票区",
			"subItems" : []
		}, {
			"id" : "211421",
			"name" : "绥中县",
			"subItems" : []
		}, {
			"id" : "211422",
			"name" : "建昌县",
			"subItems" : []
		}, {
			"id" : "211481",
			"name" : "兴城市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "22",
	"name" : "吉林省",
	"subItems" : [ {
		"id" : "2201",
		"name" : "长春市",
		"subItems" : [ {
			"id" : "220101",
			"name" : "长春市辖区",
			"subItems" : []
		}, {
			"id" : "220102",
			"name" : "南关区",
			"subItems" : []
		}, {
			"id" : "220103",
			"name" : "宽城区",
			"subItems" : []
		}, {
			"id" : "220104",
			"name" : "朝阳区",
			"subItems" : []
		}, {
			"id" : "220105",
			"name" : "二道区",
			"subItems" : []
		}, {
			"id" : "220106",
			"name" : "绿园区",
			"subItems" : []
		}, {
			"id" : "220112",
			"name" : "双阳区",
			"subItems" : []
		}, {
			"id" : "220122",
			"name" : "农安县",
			"subItems" : []
		}, {
			"id" : "220181",
			"name" : "九台市",
			"subItems" : []
		}, {
			"id" : "220182",
			"name" : "榆树市",
			"subItems" : []
		}, {
			"id" : "220183",
			"name" : "德惠市",
			"subItems" : []
		} ]
	}, {
		"id" : "2202",
		"name" : "吉林市",
		"subItems" : [ {
			"id" : "220201",
			"name" : "吉林市辖区",
			"subItems" : []
		}, {
			"id" : "220202",
			"name" : "昌邑区",
			"subItems" : []
		}, {
			"id" : "220203",
			"name" : "龙潭区",
			"subItems" : []
		}, {
			"id" : "220204",
			"name" : "船营区",
			"subItems" : []
		}, {
			"id" : "220211",
			"name" : "丰满区",
			"subItems" : []
		}, {
			"id" : "220221",
			"name" : "永吉县",
			"subItems" : []
		}, {
			"id" : "220281",
			"name" : "蛟河市",
			"subItems" : []
		}, {
			"id" : "220282",
			"name" : "桦甸市",
			"subItems" : []
		}, {
			"id" : "220283",
			"name" : "舒兰市",
			"subItems" : []
		}, {
			"id" : "220284",
			"name" : "磐石市",
			"subItems" : []
		} ]
	}, {
		"id" : "2203",
		"name" : "四平市",
		"subItems" : [ {
			"id" : "220301",
			"name" : "四平市辖区",
			"subItems" : []
		}, {
			"id" : "220302",
			"name" : "铁西区",
			"subItems" : []
		}, {
			"id" : "220303",
			"name" : "铁东区",
			"subItems" : []
		}, {
			"id" : "220322",
			"name" : "梨树县",
			"subItems" : []
		}, {
			"id" : "220323",
			"name" : "伊通满族自治县",
			"subItems" : []
		}, {
			"id" : "220381",
			"name" : "公主岭市",
			"subItems" : []
		}, {
			"id" : "220382",
			"name" : "双辽市",
			"subItems" : []
		} ]
	}, {
		"id" : "2204",
		"name" : "辽源市",
		"subItems" : [ {
			"id" : "220401",
			"name" : "辽源市辖区",
			"subItems" : []
		}, {
			"id" : "220402",
			"name" : "龙山区",
			"subItems" : []
		}, {
			"id" : "220403",
			"name" : "西安区",
			"subItems" : []
		}, {
			"id" : "220421",
			"name" : "东丰县",
			"subItems" : []
		}, {
			"id" : "220422",
			"name" : "东辽县",
			"subItems" : []
		} ]
	}, {
		"id" : "2205",
		"name" : "通化市",
		"subItems" : [ {
			"id" : "220501",
			"name" : "通化市辖区",
			"subItems" : []
		}, {
			"id" : "220502",
			"name" : "东昌区",
			"subItems" : []
		}, {
			"id" : "220503",
			"name" : "二道江区",
			"subItems" : []
		}, {
			"id" : "220521",
			"name" : "通化县",
			"subItems" : []
		}, {
			"id" : "220523",
			"name" : "辉南县",
			"subItems" : []
		}, {
			"id" : "220524",
			"name" : "柳河县",
			"subItems" : []
		}, {
			"id" : "220581",
			"name" : "梅河口市",
			"subItems" : []
		}, {
			"id" : "220582",
			"name" : "集安市",
			"subItems" : []
		} ]
	}, {
		"id" : "2206",
		"name" : "白山市",
		"subItems" : [ {
			"id" : "220601",
			"name" : "白山市辖区",
			"subItems" : []
		}, {
			"id" : "220602",
			"name" : "八道江区",
			"subItems" : []
		}, {
			"id" : "220604",
			"name" : "江源区",
			"subItems" : []
		}, {
			"id" : "220621",
			"name" : "抚松县",
			"subItems" : []
		}, {
			"id" : "220622",
			"name" : "靖宇县",
			"subItems" : []
		}, {
			"id" : "220623",
			"name" : "长白朝鲜族自治县",
			"subItems" : []
		}, {
			"id" : "220681",
			"name" : "临江市",
			"subItems" : []
		} ]
	}, {
		"id" : "2207",
		"name" : "松原市",
		"subItems" : [ {
			"id" : "220701",
			"name" : "松原市辖区",
			"subItems" : []
		}, {
			"id" : "220702",
			"name" : "宁江区",
			"subItems" : []
		}, {
			"id" : "220721",
			"name" : "前郭尔罗斯蒙古族自治县",
			"subItems" : []
		}, {
			"id" : "220722",
			"name" : "长岭县",
			"subItems" : []
		}, {
			"id" : "220723",
			"name" : "乾安县",
			"subItems" : []
		}, {
			"id" : "220724",
			"name" : "扶余县",
			"subItems" : []
		} ]
	}, {
		"id" : "2208",
		"name" : "白城市",
		"subItems" : [ {
			"id" : "220801",
			"name" : "白城市辖区",
			"subItems" : []
		}, {
			"id" : "220802",
			"name" : "洮北区",
			"subItems" : []
		}, {
			"id" : "220821",
			"name" : "镇赉县",
			"subItems" : []
		}, {
			"id" : "220822",
			"name" : "通榆县",
			"subItems" : []
		}, {
			"id" : "220881",
			"name" : "洮南市",
			"subItems" : []
		}, {
			"id" : "220882",
			"name" : "大安市",
			"subItems" : []
		} ]
	}, {
		"id" : "2224",
		"name" : "延边朝鲜族自治州",
		"subItems" : [ {
			"id" : "222401",
			"name" : "延吉市",
			"subItems" : []
		}, {
			"id" : "222402",
			"name" : "图们市",
			"subItems" : []
		}, {
			"id" : "222403",
			"name" : "敦化市",
			"subItems" : []
		}, {
			"id" : "222404",
			"name" : "珲春市",
			"subItems" : []
		}, {
			"id" : "222405",
			"name" : "龙井市",
			"subItems" : []
		}, {
			"id" : "222406",
			"name" : "和龙市",
			"subItems" : []
		}, {
			"id" : "222424",
			"name" : "汪清县",
			"subItems" : []
		}, {
			"id" : "222426",
			"name" : "安图县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "23",
	"name" : "黑龙江省",
	"subItems" : [ {
		"id" : "2301",
		"name" : "哈尔滨市",
		"subItems" : [ {
			"id" : "230101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230102",
			"name" : "道里区",
			"subItems" : []
		}, {
			"id" : "230103",
			"name" : "南岗区",
			"subItems" : []
		}, {
			"id" : "230104",
			"name" : "道外区",
			"subItems" : []
		}, {
			"id" : "230108",
			"name" : "平房区",
			"subItems" : []
		}, {
			"id" : "230109",
			"name" : "松北区",
			"subItems" : []
		}, {
			"id" : "230110",
			"name" : "香坊区",
			"subItems" : []
		}, {
			"id" : "230111",
			"name" : "呼兰区",
			"subItems" : []
		}, {
			"id" : "230112",
			"name" : "阿城区",
			"subItems" : []
		}, {
			"id" : "230123",
			"name" : "依兰县",
			"subItems" : []
		}, {
			"id" : "230124",
			"name" : "方正县",
			"subItems" : []
		}, {
			"id" : "230125",
			"name" : "宾县",
			"subItems" : []
		}, {
			"id" : "230126",
			"name" : "巴彦县",
			"subItems" : []
		}, {
			"id" : "230127",
			"name" : "木兰县",
			"subItems" : []
		}, {
			"id" : "230128",
			"name" : "通河县",
			"subItems" : []
		}, {
			"id" : "230129",
			"name" : "延寿县",
			"subItems" : []
		}, {
			"id" : "230182",
			"name" : "双城市",
			"subItems" : []
		}, {
			"id" : "230183",
			"name" : "尚志市",
			"subItems" : []
		}, {
			"id" : "230184",
			"name" : "五常市",
			"subItems" : []
		} ]
	}, {
		"id" : "2302",
		"name" : "齐齐哈尔市",
		"subItems" : [ {
			"id" : "230201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230202",
			"name" : "龙沙区",
			"subItems" : []
		}, {
			"id" : "230203",
			"name" : "建华区",
			"subItems" : []
		}, {
			"id" : "230204",
			"name" : "铁锋区",
			"subItems" : []
		}, {
			"id" : "230205",
			"name" : "昂昂溪区",
			"subItems" : []
		}, {
			"id" : "230206",
			"name" : "富拉尔基区",
			"subItems" : []
		}, {
			"id" : "230207",
			"name" : "碾子山区",
			"subItems" : []
		}, {
			"id" : "230208",
			"name" : "梅里斯达斡尔族区",
			"subItems" : []
		}, {
			"id" : "230221",
			"name" : "龙江县",
			"subItems" : []
		}, {
			"id" : "230223",
			"name" : "依安县",
			"subItems" : []
		}, {
			"id" : "230224",
			"name" : "泰来县",
			"subItems" : []
		}, {
			"id" : "230225",
			"name" : "甘南县",
			"subItems" : []
		}, {
			"id" : "230227",
			"name" : "富裕县",
			"subItems" : []
		}, {
			"id" : "230229",
			"name" : "克山县",
			"subItems" : []
		}, {
			"id" : "230230",
			"name" : "克东县",
			"subItems" : []
		}, {
			"id" : "230231",
			"name" : "拜泉县",
			"subItems" : []
		}, {
			"id" : "230281",
			"name" : "讷河市",
			"subItems" : []
		} ]
	}, {
		"id" : "2303",
		"name" : "鸡西市",
		"subItems" : [ {
			"id" : "230301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230302",
			"name" : "鸡冠区",
			"subItems" : []
		}, {
			"id" : "230303",
			"name" : "恒山区",
			"subItems" : []
		}, {
			"id" : "230304",
			"name" : "滴道区",
			"subItems" : []
		}, {
			"id" : "230305",
			"name" : "梨树区",
			"subItems" : []
		}, {
			"id" : "230306",
			"name" : "城子河区",
			"subItems" : []
		}, {
			"id" : "230307",
			"name" : "麻山区",
			"subItems" : []
		}, {
			"id" : "230321",
			"name" : "鸡东县",
			"subItems" : []
		}, {
			"id" : "230381",
			"name" : "虎林市",
			"subItems" : []
		}, {
			"id" : "230382",
			"name" : "密山市",
			"subItems" : []
		} ]
	}, {
		"id" : "2304",
		"name" : "鹤岗市",
		"subItems" : [ {
			"id" : "230401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230402",
			"name" : "向阳区",
			"subItems" : []
		}, {
			"id" : "230403",
			"name" : "工农区",
			"subItems" : []
		}, {
			"id" : "230404",
			"name" : "南山区",
			"subItems" : []
		}, {
			"id" : "230405",
			"name" : "兴安区",
			"subItems" : []
		}, {
			"id" : "230406",
			"name" : "东山区",
			"subItems" : []
		}, {
			"id" : "230407",
			"name" : "兴山区",
			"subItems" : []
		}, {
			"id" : "230421",
			"name" : "萝北县",
			"subItems" : []
		}, {
			"id" : "230422",
			"name" : "绥滨县",
			"subItems" : []
		} ]
	}, {
		"id" : "2305",
		"name" : "双鸭山市",
		"subItems" : [ {
			"id" : "230501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230502",
			"name" : "尖山区",
			"subItems" : []
		}, {
			"id" : "230503",
			"name" : "岭东区",
			"subItems" : []
		}, {
			"id" : "230505",
			"name" : "四方台区",
			"subItems" : []
		}, {
			"id" : "230506",
			"name" : "宝山区",
			"subItems" : []
		}, {
			"id" : "230521",
			"name" : "集贤县",
			"subItems" : []
		}, {
			"id" : "230522",
			"name" : "友谊县",
			"subItems" : []
		}, {
			"id" : "230523",
			"name" : "宝清县",
			"subItems" : []
		}, {
			"id" : "230524",
			"name" : "饶河县",
			"subItems" : []
		} ]
	}, {
		"id" : "2306",
		"name" : "大庆市",
		"subItems" : [ {
			"id" : "230601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230602",
			"name" : "萨尔图区",
			"subItems" : []
		}, {
			"id" : "230603",
			"name" : "龙凤区",
			"subItems" : []
		}, {
			"id" : "230604",
			"name" : "让胡路区",
			"subItems" : []
		}, {
			"id" : "230605",
			"name" : "红岗区",
			"subItems" : []
		}, {
			"id" : "230606",
			"name" : "大同区",
			"subItems" : []
		}, {
			"id" : "230621",
			"name" : "肇州县",
			"subItems" : []
		}, {
			"id" : "230622",
			"name" : "肇源县",
			"subItems" : []
		}, {
			"id" : "230623",
			"name" : "林甸县",
			"subItems" : []
		}, {
			"id" : "230624",
			"name" : "杜尔伯特县",
			"subItems" : []
		} ]
	}, {
		"id" : "2307",
		"name" : "伊春市",
		"subItems" : [ {
			"id" : "230701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230702",
			"name" : "伊春区",
			"subItems" : []
		}, {
			"id" : "230703",
			"name" : "南岔区",
			"subItems" : []
		}, {
			"id" : "230704",
			"name" : "友好区",
			"subItems" : []
		}, {
			"id" : "230705",
			"name" : "西林区",
			"subItems" : []
		}, {
			"id" : "230706",
			"name" : "翠峦区",
			"subItems" : []
		}, {
			"id" : "230707",
			"name" : "新青区",
			"subItems" : []
		}, {
			"id" : "230708",
			"name" : "美溪区",
			"subItems" : []
		}, {
			"id" : "230709",
			"name" : "金山屯区",
			"subItems" : []
		}, {
			"id" : "230710",
			"name" : "五营区",
			"subItems" : []
		}, {
			"id" : "230711",
			"name" : "乌马河区",
			"subItems" : []
		}, {
			"id" : "230712",
			"name" : "汤旺河区",
			"subItems" : []
		}, {
			"id" : "230713",
			"name" : "带岭区",
			"subItems" : []
		}, {
			"id" : "230714",
			"name" : "乌伊岭区",
			"subItems" : []
		}, {
			"id" : "230715",
			"name" : "红星区",
			"subItems" : []
		}, {
			"id" : "230716",
			"name" : "上甘岭区",
			"subItems" : []
		}, {
			"id" : "230722",
			"name" : "嘉荫县",
			"subItems" : []
		}, {
			"id" : "230781",
			"name" : "铁力市",
			"subItems" : []
		} ]
	}, {
		"id" : "2308",
		"name" : "佳木斯市",
		"subItems" : [ {
			"id" : "230801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230803",
			"name" : "向阳区",
			"subItems" : []
		}, {
			"id" : "230804",
			"name" : "前进区",
			"subItems" : []
		}, {
			"id" : "230805",
			"name" : "东风区",
			"subItems" : []
		}, {
			"id" : "230811",
			"name" : "郊区",
			"subItems" : []
		}, {
			"id" : "230822",
			"name" : "桦南县",
			"subItems" : []
		}, {
			"id" : "230826",
			"name" : "桦川县",
			"subItems" : []
		}, {
			"id" : "230828",
			"name" : "汤原县",
			"subItems" : []
		}, {
			"id" : "230833",
			"name" : "抚远县",
			"subItems" : []
		}, {
			"id" : "230881",
			"name" : "同江市",
			"subItems" : []
		}, {
			"id" : "230882",
			"name" : "富锦市",
			"subItems" : []
		} ]
	}, {
		"id" : "2309",
		"name" : "七台河市",
		"subItems" : [ {
			"id" : "230901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "230902",
			"name" : "新兴区",
			"subItems" : []
		}, {
			"id" : "230903",
			"name" : "桃山区",
			"subItems" : []
		}, {
			"id" : "230904",
			"name" : "茄子河区",
			"subItems" : []
		}, {
			"id" : "230921",
			"name" : "勃利县",
			"subItems" : []
		} ]
	}, {
		"id" : "2310",
		"name" : "牡丹江市",
		"subItems" : [ {
			"id" : "231001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "231002",
			"name" : "东安区",
			"subItems" : []
		}, {
			"id" : "231003",
			"name" : "阳明区",
			"subItems" : []
		}, {
			"id" : "231004",
			"name" : "爱民区",
			"subItems" : []
		}, {
			"id" : "231005",
			"name" : "西安区",
			"subItems" : []
		}, {
			"id" : "231024",
			"name" : "东宁县",
			"subItems" : []
		}, {
			"id" : "231025",
			"name" : "林口县",
			"subItems" : []
		}, {
			"id" : "231081",
			"name" : "绥芬河市",
			"subItems" : []
		}, {
			"id" : "231083",
			"name" : "海林市",
			"subItems" : []
		}, {
			"id" : "231084",
			"name" : "宁安市",
			"subItems" : []
		}, {
			"id" : "231085",
			"name" : "穆棱市",
			"subItems" : []
		} ]
	}, {
		"id" : "2311",
		"name" : "黑河市",
		"subItems" : [ {
			"id" : "231101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "231102",
			"name" : "爱辉区",
			"subItems" : []
		}, {
			"id" : "231121",
			"name" : "嫩江县",
			"subItems" : []
		}, {
			"id" : "231123",
			"name" : "逊克县",
			"subItems" : []
		}, {
			"id" : "231124",
			"name" : "孙吴县",
			"subItems" : []
		}, {
			"id" : "231181",
			"name" : "北安市",
			"subItems" : []
		}, {
			"id" : "231182",
			"name" : "五大连池市",
			"subItems" : []
		} ]
	}, {
		"id" : "2312",
		"name" : "绥化市",
		"subItems" : [ {
			"id" : "231201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "231202",
			"name" : "北林区",
			"subItems" : []
		}, {
			"id" : "231221",
			"name" : "望奎县",
			"subItems" : []
		}, {
			"id" : "231222",
			"name" : "兰西县",
			"subItems" : []
		}, {
			"id" : "231223",
			"name" : "青冈县",
			"subItems" : []
		}, {
			"id" : "231224",
			"name" : "庆安县",
			"subItems" : []
		}, {
			"id" : "231225",
			"name" : "明水县",
			"subItems" : []
		}, {
			"id" : "231226",
			"name" : "绥棱县",
			"subItems" : []
		}, {
			"id" : "231281",
			"name" : "安达市",
			"subItems" : []
		}, {
			"id" : "231282",
			"name" : "肇东市",
			"subItems" : []
		}, {
			"id" : "231283",
			"name" : "海伦市",
			"subItems" : []
		} ]
	}, {
		"id" : "2327",
		"name" : "大兴安岭地区",
		"subItems" : [ {
			"id" : "232701",
			"name" : "加格达奇区",
			"subItems" : []
		}, {
			"id" : "232702",
			"name" : "松岭区",
			"subItems" : []
		}, {
			"id" : "232703",
			"name" : "新林区",
			"subItems" : []
		}, {
			"id" : "232704",
			"name" : "呼中区",
			"subItems" : []
		}, {
			"id" : "232721",
			"name" : "呼玛县",
			"subItems" : []
		}, {
			"id" : "232722",
			"name" : "塔河县",
			"subItems" : []
		}, {
			"id" : "232723",
			"name" : "漠河县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "31",
	"name" : "上海市",
	"subItems" : [ {
		"id" : "3101",
		"name" : "市辖区",
		"subItems" : [ {
			"id" : "310101",
			"name" : "黄浦区",
			"subItems" : []
		}, {
			"id" : "310103",
			"name" : "卢湾区",
			"subItems" : []
		}, {
			"id" : "310104",
			"name" : "徐汇区",
			"subItems" : []
		}, {
			"id" : "310105",
			"name" : "长宁区",
			"subItems" : []
		}, {
			"id" : "310106",
			"name" : "静安区",
			"subItems" : []
		}, {
			"id" : "310107",
			"name" : "普陀区",
			"subItems" : []
		}, {
			"id" : "310108",
			"name" : "闸北区",
			"subItems" : []
		}, {
			"id" : "310109",
			"name" : "虹口区",
			"subItems" : []
		}, {
			"id" : "310110",
			"name" : "杨浦区",
			"subItems" : []
		}, {
			"id" : "310112",
			"name" : "闵行区",
			"subItems" : []
		}, {
			"id" : "310113",
			"name" : "宝山区",
			"subItems" : []
		}, {
			"id" : "310114",
			"name" : "嘉定区",
			"subItems" : []
		}, {
			"id" : "310115",
			"name" : "浦东新区",
			"subItems" : []
		}, {
			"id" : "310116",
			"name" : "金山区",
			"subItems" : []
		}, {
			"id" : "310117",
			"name" : "松江区",
			"subItems" : []
		}, {
			"id" : "310118",
			"name" : "青浦区",
			"subItems" : []
		}, {
			"id" : "310119",
			"name" : "南汇区",
			"subItems" : []
		}, {
			"id" : "310120",
			"name" : "奉贤区",
			"subItems" : []
		} ]
	}, {
		"id" : "3102",
		"name" : "县",
		"subItems" : [ {
			"id" : "310230",
			"name" : "崇明县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "32",
	"name" : "江苏省",
	"subItems" : [ {
		"id" : "3201",
		"name" : "南京市",
		"subItems" : [ {
			"id" : "320101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320102",
			"name" : "玄武区",
			"subItems" : []
		}, {
			"id" : "320103",
			"name" : "白下区",
			"subItems" : []
		}, {
			"id" : "320104",
			"name" : "秦淮区",
			"subItems" : []
		}, {
			"id" : "320105",
			"name" : "建邺区",
			"subItems" : []
		}, {
			"id" : "320106",
			"name" : "鼓楼区",
			"subItems" : []
		}, {
			"id" : "320107",
			"name" : "下关区",
			"subItems" : []
		}, {
			"id" : "320111",
			"name" : "浦口区",
			"subItems" : []
		}, {
			"id" : "320113",
			"name" : "栖霞区",
			"subItems" : []
		}, {
			"id" : "320114",
			"name" : "雨花台区",
			"subItems" : []
		}, {
			"id" : "320115",
			"name" : "江宁区",
			"subItems" : []
		}, {
			"id" : "320116",
			"name" : "六合区",
			"subItems" : []
		}, {
			"id" : "320124",
			"name" : "溧水县",
			"subItems" : []
		}, {
			"id" : "320125",
			"name" : "高淳县",
			"subItems" : []
		} ]
	}, {
		"id" : "3202",
		"name" : "无锡市",
		"subItems" : [ {
			"id" : "320201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320202",
			"name" : "崇安区",
			"subItems" : []
		}, {
			"id" : "320203",
			"name" : "南长区",
			"subItems" : []
		}, {
			"id" : "320204",
			"name" : "北塘区",
			"subItems" : []
		}, {
			"id" : "320205",
			"name" : "锡山区",
			"subItems" : []
		}, {
			"id" : "320206",
			"name" : "惠山区",
			"subItems" : []
		}, {
			"id" : "320211",
			"name" : "滨湖区",
			"subItems" : []
		}, {
			"id" : "320281",
			"name" : "江阴市",
			"subItems" : []
		}, {
			"id" : "320282",
			"name" : "宜兴市",
			"subItems" : []
		} ]
	}, {
		"id" : "3203",
		"name" : "徐州市",
		"subItems" : [ {
			"id" : "320301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320302",
			"name" : "鼓楼区",
			"subItems" : []
		}, {
			"id" : "320303",
			"name" : "云龙区",
			"subItems" : []
		}, {
			"id" : "320304",
			"name" : "九里区",
			"subItems" : []
		}, {
			"id" : "320305",
			"name" : "贾汪区",
			"subItems" : []
		}, {
			"id" : "320311",
			"name" : "泉山区",
			"subItems" : []
		}, {
			"id" : "320321",
			"name" : "丰县",
			"subItems" : []
		}, {
			"id" : "320322",
			"name" : "沛县",
			"subItems" : []
		}, {
			"id" : "320323",
			"name" : "铜山县",
			"subItems" : []
		}, {
			"id" : "320324",
			"name" : "睢宁县",
			"subItems" : []
		}, {
			"id" : "320381",
			"name" : "新沂市",
			"subItems" : []
		}, {
			"id" : "320382",
			"name" : "邳州市",
			"subItems" : []
		} ]
	}, {
		"id" : "3204",
		"name" : "常州市",
		"subItems" : [ {
			"id" : "320401",
			"name" : "常州市区",
			"subItems" : []
		}, {
			"id" : "320402",
			"name" : "天宁区",
			"subItems" : []
		}, {
			"id" : "320404",
			"name" : "钟楼区",
			"subItems" : []
		}, {
			"id" : "320405",
			"name" : "戚墅堰区",
			"subItems" : []
		}, {
			"id" : "320411",
			"name" : "新北区",
			"subItems" : []
		}, {
			"id" : "320412",
			"name" : "武进区",
			"subItems" : []
		}, {
			"id" : "320481",
			"name" : "溧阳市",
			"subItems" : []
		}, {
			"id" : "320482",
			"name" : "金坛市",
			"subItems" : []
		} ]
	}, {
		"id" : "3205",
		"name" : "苏州市",
		"subItems" : [ {
			"id" : "320501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320502",
			"name" : "沧浪区",
			"subItems" : []
		}, {
			"id" : "320503",
			"name" : "平江区",
			"subItems" : []
		}, {
			"id" : "320504",
			"name" : "金阊区",
			"subItems" : []
		}, {
			"id" : "320505",
			"name" : "苏州高新区虎丘区",
			"subItems" : []
		}, {
			"id" : "320506",
			"name" : "吴中区",
			"subItems" : []
		}, {
			"id" : "320507",
			"name" : "相城区",
			"subItems" : []
		}, {
			"id" : "320581",
			"name" : "常熟市",
			"subItems" : []
		}, {
			"id" : "320582",
			"name" : "张家港市",
			"subItems" : []
		}, {
			"id" : "320583",
			"name" : "昆山市",
			"subItems" : []
		}, {
			"id" : "320584",
			"name" : "吴江市",
			"subItems" : []
		}, {
			"id" : "320585",
			"name" : "太仓市",
			"subItems" : []
		} ]
	}, {
		"id" : "3206",
		"name" : "南通市",
		"subItems" : [ {
			"id" : "320601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320602",
			"name" : "崇川区",
			"subItems" : []
		}, {
			"id" : "320611",
			"name" : "港闸区",
			"subItems" : []
		}, {
			"id" : "320621",
			"name" : "海安县",
			"subItems" : []
		}, {
			"id" : "320623",
			"name" : "如东",
			"subItems" : []
		}, {
			"id" : "320681",
			"name" : "启东市",
			"subItems" : []
		}, {
			"id" : "320682",
			"name" : "\"如皋市",
			"subItems" : []
		}, {
			"id" : "320683",
			"name" : "通州市",
			"subItems" : []
		}, {
			"id" : "320684",
			"name" : "海门市",
			"subItems" : []
		} ]
	}, {
		"id" : "3207",
		"name" : "连云港市",
		"subItems" : [ {
			"id" : "320701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320703",
			"name" : "连云区",
			"subItems" : []
		}, {
			"id" : "320705",
			"name" : "新浦区",
			"subItems" : []
		}, {
			"id" : "320706",
			"name" : "海州区",
			"subItems" : []
		}, {
			"id" : "320721",
			"name" : "赣榆县",
			"subItems" : []
		}, {
			"id" : "320722",
			"name" : "东海县",
			"subItems" : []
		}, {
			"id" : "320723",
			"name" : "灌云县",
			"subItems" : []
		}, {
			"id" : "320724",
			"name" : "灌南县",
			"subItems" : []
		} ]
	}, {
		"id" : "3208",
		"name" : "淮安市",
		"subItems" : [ {
			"id" : "320801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320802",
			"name" : "清河区",
			"subItems" : []
		}, {
			"id" : "320803",
			"name" : "楚州区",
			"subItems" : []
		}, {
			"id" : "320804",
			"name" : "淮阴区",
			"subItems" : []
		}, {
			"id" : "320811",
			"name" : "清浦区",
			"subItems" : []
		}, {
			"id" : "320826",
			"name" : "涟水县",
			"subItems" : []
		}, {
			"id" : "320829",
			"name" : "洪泽县",
			"subItems" : []
		}, {
			"id" : "320830",
			"name" : "盱眙县",
			"subItems" : []
		}, {
			"id" : "320831",
			"name" : "金湖县",
			"subItems" : []
		} ]
	}, {
		"id" : "3209",
		"name" : "盐城市",
		"subItems" : [ {
			"id" : "320901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "320902",
			"name" : "亭湖区",
			"subItems" : []
		}, {
			"id" : "320903",
			"name" : "盐都区",
			"subItems" : []
		}, {
			"id" : "320921",
			"name" : "响水县",
			"subItems" : []
		}, {
			"id" : "320922",
			"name" : "滨海县",
			"subItems" : []
		}, {
			"id" : "320923",
			"name" : "阜宁县",
			"subItems" : []
		}, {
			"id" : "320924",
			"name" : "射阳县",
			"subItems" : []
		}, {
			"id" : "320925",
			"name" : "建湖县",
			"subItems" : []
		}, {
			"id" : "320981",
			"name" : "东台市",
			"subItems" : []
		}, {
			"id" : "320982",
			"name" : "大丰市",
			"subItems" : []
		} ]
	}, {
		"id" : "3210",
		"name" : "扬州市",
		"subItems" : [ {
			"id" : "321001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "321002",
			"name" : "广陵区",
			"subItems" : []
		}, {
			"id" : "321003",
			"name" : "邗江区",
			"subItems" : []
		}, {
			"id" : "321011",
			"name" : "维扬区",
			"subItems" : []
		}, {
			"id" : "321023",
			"name" : "宝应县",
			"subItems" : []
		}, {
			"id" : "321081",
			"name" : "仪征市",
			"subItems" : []
		}, {
			"id" : "321084",
			"name" : "高邮市",
			"subItems" : []
		}, {
			"id" : "321088",
			"name" : "江都市",
			"subItems" : []
		} ]
	}, {
		"id" : "3211",
		"name" : "镇江市",
		"subItems" : [ {
			"id" : "321101",
			"name" : "市区",
			"subItems" : []
		}, {
			"id" : "321102",
			"name" : "京口区",
			"subItems" : []
		}, {
			"id" : "321111",
			"name" : "润州区",
			"subItems" : []
		}, {
			"id" : "321112",
			"name" : "丹徒区",
			"subItems" : []
		}, {
			"id" : "321181",
			"name" : "丹阳市",
			"subItems" : []
		}, {
			"id" : "321182",
			"name" : "扬中市",
			"subItems" : []
		}, {
			"id" : "321183",
			"name" : "句容市",
			"subItems" : []
		} ]
	}, {
		"id" : "3212",
		"name" : "泰州市",
		"subItems" : [ {
			"id" : "321201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "321202",
			"name" : "海陵区",
			"subItems" : []
		}, {
			"id" : "321203",
			"name" : "高港区",
			"subItems" : []
		}, {
			"id" : "321281",
			"name" : "兴化市",
			"subItems" : []
		}, {
			"id" : "321282",
			"name" : "靖江市",
			"subItems" : []
		}, {
			"id" : "321283",
			"name" : "泰兴市",
			"subItems" : []
		}, {
			"id" : "321284",
			"name" : "姜堰市",
			"subItems" : []
		} ]
	}, {
		"id" : "3213",
		"name" : "宿迁市",
		"subItems" : [ {
			"id" : "321301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "321302",
			"name" : "宿城区",
			"subItems" : []
		}, {
			"id" : "321311",
			"name" : "宿豫区",
			"subItems" : []
		}, {
			"id" : "321322",
			"name" : "沭阳县",
			"subItems" : []
		}, {
			"id" : "321323",
			"name" : "泗阳县",
			"subItems" : []
		}, {
			"id" : "321324",
			"name" : "泗洪县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "33",
	"name" : "浙江省",
	"subItems" : [ {
		"id" : "3301",
		"name" : "杭州市",
		"subItems" : [ {
			"id" : "330101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330102",
			"name" : "上城区",
			"subItems" : []
		}, {
			"id" : "330103",
			"name" : "下城区",
			"subItems" : []
		}, {
			"id" : "330104",
			"name" : "江干区",
			"subItems" : []
		}, {
			"id" : "330105",
			"name" : "拱墅区",
			"subItems" : []
		}, {
			"id" : "330106",
			"name" : "西湖区",
			"subItems" : []
		}, {
			"id" : "330108",
			"name" : "滨江区",
			"subItems" : []
		}, {
			"id" : "330109",
			"name" : "萧山区",
			"subItems" : []
		}, {
			"id" : "330110",
			"name" : "余杭区",
			"subItems" : []
		}, {
			"id" : "330122",
			"name" : "桐庐县",
			"subItems" : []
		}, {
			"id" : "330127",
			"name" : "淳安县",
			"subItems" : []
		}, {
			"id" : "330182",
			"name" : "建德市",
			"subItems" : []
		}, {
			"id" : "330183",
			"name" : "富阳市",
			"subItems" : []
		}, {
			"id" : "330185",
			"name" : "临安市",
			"subItems" : []
		} ]
	}, {
		"id" : "3302",
		"name" : "宁波市",
		"subItems" : [ {
			"id" : "330201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330203",
			"name" : "海曙区",
			"subItems" : []
		}, {
			"id" : "330204",
			"name" : "江东区",
			"subItems" : []
		}, {
			"id" : "330205",
			"name" : "江北区",
			"subItems" : []
		}, {
			"id" : "330206",
			"name" : "北仑区",
			"subItems" : []
		}, {
			"id" : "330211",
			"name" : "镇海区",
			"subItems" : []
		}, {
			"id" : "330212",
			"name" : "鄞州区",
			"subItems" : []
		}, {
			"id" : "330225",
			"name" : "象山县",
			"subItems" : []
		}, {
			"id" : "330226",
			"name" : "宁海县",
			"subItems" : []
		}, {
			"id" : "330281",
			"name" : "余姚市",
			"subItems" : []
		}, {
			"id" : "330282",
			"name" : "慈溪市",
			"subItems" : []
		}, {
			"id" : "330283",
			"name" : "奉化市",
			"subItems" : []
		} ]
	}, {
		"id" : "3303",
		"name" : "温州市",
		"subItems" : [ {
			"id" : "330301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330302",
			"name" : "鹿城区",
			"subItems" : []
		}, {
			"id" : "330303",
			"name" : "龙湾区",
			"subItems" : []
		}, {
			"id" : "330304",
			"name" : "瓯海区",
			"subItems" : []
		}, {
			"id" : "330322",
			"name" : "洞头县",
			"subItems" : []
		}, {
			"id" : "330324",
			"name" : "永嘉县",
			"subItems" : []
		}, {
			"id" : "330326",
			"name" : "平阳县",
			"subItems" : []
		}, {
			"id" : "330327",
			"name" : "苍南县",
			"subItems" : []
		}, {
			"id" : "330328",
			"name" : "文成县",
			"subItems" : []
		}, {
			"id" : "330329",
			"name" : "泰顺县",
			"subItems" : []
		}, {
			"id" : "330381",
			"name" : "瑞安市",
			"subItems" : []
		}, {
			"id" : "330382",
			"name" : "乐清市",
			"subItems" : []
		} ]
	}, {
		"id" : "3304",
		"name" : "嘉兴市",
		"subItems" : [ {
			"id" : "330401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330402",
			"name" : "南湖区",
			"subItems" : []
		}, {
			"id" : "330411",
			"name" : "秀洲区",
			"subItems" : []
		}, {
			"id" : "330421",
			"name" : "嘉善县",
			"subItems" : []
		}, {
			"id" : "330424",
			"name" : "海盐县",
			"subItems" : []
		}, {
			"id" : "330481",
			"name" : "海宁市",
			"subItems" : []
		}, {
			"id" : "330482",
			"name" : "平湖市",
			"subItems" : []
		}, {
			"id" : "330483",
			"name" : "桐乡市",
			"subItems" : []
		} ]
	}, {
		"id" : "3305",
		"name" : "湖州市",
		"subItems" : [ {
			"id" : "330501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330502",
			"name" : "吴兴区",
			"subItems" : []
		}, {
			"id" : "330503",
			"name" : "南浔区",
			"subItems" : []
		}, {
			"id" : "330521",
			"name" : "德清县",
			"subItems" : []
		}, {
			"id" : "330522",
			"name" : "长兴县",
			"subItems" : []
		}, {
			"id" : "330523",
			"name" : "安吉县",
			"subItems" : []
		} ]
	}, {
		"id" : "3306",
		"name" : "绍兴市",
		"subItems" : [ {
			"id" : "330601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330602",
			"name" : "越城区",
			"subItems" : []
		}, {
			"id" : "330621",
			"name" : "绍兴县",
			"subItems" : []
		}, {
			"id" : "330624",
			"name" : "新昌县",
			"subItems" : []
		}, {
			"id" : "330681",
			"name" : "诸暨市",
			"subItems" : []
		}, {
			"id" : "330682",
			"name" : "上虞市",
			"subItems" : []
		}, {
			"id" : "330683",
			"name" : "嵊州市",
			"subItems" : []
		} ]
	}, {
		"id" : "3307",
		"name" : "金华市",
		"subItems" : [ {
			"id" : "330701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330702",
			"name" : "婺城区",
			"subItems" : []
		}, {
			"id" : "330703",
			"name" : "金东区",
			"subItems" : []
		}, {
			"id" : "330723",
			"name" : "武义县",
			"subItems" : []
		}, {
			"id" : "330726",
			"name" : "浦江县",
			"subItems" : []
		}, {
			"id" : "330727",
			"name" : "磐安县",
			"subItems" : []
		}, {
			"id" : "330781",
			"name" : "兰溪市",
			"subItems" : []
		}, {
			"id" : "330782",
			"name" : "义乌市",
			"subItems" : []
		}, {
			"id" : "330783",
			"name" : "东阳市",
			"subItems" : []
		}, {
			"id" : "330784",
			"name" : "永康市",
			"subItems" : []
		} ]
	}, {
		"id" : "3308",
		"name" : "衢州市",
		"subItems" : [ {
			"id" : "330801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330802",
			"name" : "柯城区",
			"subItems" : []
		}, {
			"id" : "330803",
			"name" : "衢江区",
			"subItems" : []
		}, {
			"id" : "330822",
			"name" : "常山县",
			"subItems" : []
		}, {
			"id" : "330824",
			"name" : "开化县",
			"subItems" : []
		}, {
			"id" : "330825",
			"name" : "龙游县",
			"subItems" : []
		}, {
			"id" : "330881",
			"name" : "江山市",
			"subItems" : []
		} ]
	}, {
		"id" : "3309",
		"name" : "舟山市",
		"subItems" : [ {
			"id" : "330901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "330902",
			"name" : "定海区",
			"subItems" : []
		}, {
			"id" : "330903",
			"name" : "普陀区",
			"subItems" : []
		}, {
			"id" : "330921",
			"name" : "岱山县",
			"subItems" : []
		}, {
			"id" : "330922",
			"name" : "嵊泗县",
			"subItems" : []
		} ]
	}, {
		"id" : "3310",
		"name" : "台州市",
		"subItems" : [ {
			"id" : "331001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "331002",
			"name" : "椒江区",
			"subItems" : []
		}, {
			"id" : "331003",
			"name" : "黄岩区",
			"subItems" : []
		}, {
			"id" : "331004",
			"name" : "路桥区",
			"subItems" : []
		}, {
			"id" : "331021",
			"name" : "玉环县",
			"subItems" : []
		}, {
			"id" : "331022",
			"name" : "三门县",
			"subItems" : []
		}, {
			"id" : "331023",
			"name" : "天台县",
			"subItems" : []
		}, {
			"id" : "331024",
			"name" : "仙居县",
			"subItems" : []
		}, {
			"id" : "331081",
			"name" : "温岭市",
			"subItems" : []
		}, {
			"id" : "331082",
			"name" : "临海市",
			"subItems" : []
		} ]
	}, {
		"id" : "3311",
		"name" : "丽水市",
		"subItems" : [ {
			"id" : "331101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "331102",
			"name" : "莲都区",
			"subItems" : []
		}, {
			"id" : "331121",
			"name" : "青田县",
			"subItems" : []
		}, {
			"id" : "331122",
			"name" : "缙云县",
			"subItems" : []
		}, {
			"id" : "331123",
			"name" : "遂昌县",
			"subItems" : []
		}, {
			"id" : "331124",
			"name" : "松阳县",
			"subItems" : []
		}, {
			"id" : "331125",
			"name" : "云和县",
			"subItems" : []
		}, {
			"id" : "331126",
			"name" : "庆元县",
			"subItems" : []
		}, {
			"id" : "331127",
			"name" : "景宁畲族自治县",
			"subItems" : []
		}, {
			"id" : "331181",
			"name" : "龙泉市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "34",
	"name" : "安徽省",
	"subItems" : [ {
		"id" : "3401",
		"name" : "合肥市",
		"subItems" : [ {
			"id" : "340101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340102",
			"name" : "瑶海区",
			"subItems" : []
		}, {
			"id" : "340103",
			"name" : "庐阳区",
			"subItems" : []
		}, {
			"id" : "340104",
			"name" : "蜀山区",
			"subItems" : []
		}, {
			"id" : "340111",
			"name" : "包河区",
			"subItems" : []
		}, {
			"id" : "340121",
			"name" : "长丰县",
			"subItems" : []
		}, {
			"id" : "340122",
			"name" : "肥东县",
			"subItems" : []
		}, {
			"id" : "340123",
			"name" : "肥西县",
			"subItems" : []
		} ]
	}, {
		"id" : "3402",
		"name" : "芜湖市",
		"subItems" : [ {
			"id" : "340201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340202",
			"name" : "镜湖区",
			"subItems" : []
		}, {
			"id" : "340203",
			"name" : "弋江区",
			"subItems" : []
		}, {
			"id" : "340207",
			"name" : "鸠江区",
			"subItems" : []
		}, {
			"id" : "340208",
			"name" : "三山区",
			"subItems" : []
		}, {
			"id" : "340221",
			"name" : "芜湖县",
			"subItems" : []
		}, {
			"id" : "340222",
			"name" : "繁昌县",
			"subItems" : []
		}, {
			"id" : "340223",
			"name" : "南陵县",
			"subItems" : []
		} ]
	}, {
		"id" : "3403",
		"name" : "蚌埠市",
		"subItems" : [ {
			"id" : "340301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340302",
			"name" : "龙子湖区",
			"subItems" : []
		}, {
			"id" : "340303",
			"name" : "蚌山区",
			"subItems" : []
		}, {
			"id" : "340304",
			"name" : "禹会区",
			"subItems" : []
		}, {
			"id" : "340311",
			"name" : "淮上区",
			"subItems" : []
		}, {
			"id" : "340321",
			"name" : "怀远县",
			"subItems" : []
		}, {
			"id" : "340322",
			"name" : "五河县",
			"subItems" : []
		}, {
			"id" : "340323",
			"name" : "固镇县",
			"subItems" : []
		} ]
	}, {
		"id" : "3404",
		"name" : "淮南市",
		"subItems" : [ {
			"id" : "340401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340402",
			"name" : "大通区",
			"subItems" : []
		}, {
			"id" : "340403",
			"name" : "田家庵区",
			"subItems" : []
		}, {
			"id" : "340404",
			"name" : "谢家集区",
			"subItems" : []
		}, {
			"id" : "340405",
			"name" : "八公山区",
			"subItems" : []
		}, {
			"id" : "340406",
			"name" : "潘集区",
			"subItems" : []
		}, {
			"id" : "340421",
			"name" : "凤台县",
			"subItems" : []
		} ]
	}, {
		"id" : "3405",
		"name" : "马鞍山市",
		"subItems" : [ {
			"id" : "340501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340502",
			"name" : "金家庄区",
			"subItems" : []
		}, {
			"id" : "340503",
			"name" : "花山区",
			"subItems" : []
		}, {
			"id" : "340504",
			"name" : "雨山区",
			"subItems" : []
		}, {
			"id" : "340521",
			"name" : "当涂县",
			"subItems" : []
		} ]
	}, {
		"id" : "3406",
		"name" : "淮北市",
		"subItems" : [ {
			"id" : "340601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340602",
			"name" : "杜集区",
			"subItems" : []
		}, {
			"id" : "340603",
			"name" : "相山区",
			"subItems" : []
		}, {
			"id" : "340604",
			"name" : "烈山区",
			"subItems" : []
		}, {
			"id" : "340621",
			"name" : "濉溪县",
			"subItems" : []
		} ]
	}, {
		"id" : "3407",
		"name" : "铜陵市",
		"subItems" : [ {
			"id" : "340701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340702",
			"name" : "铜官山区",
			"subItems" : []
		}, {
			"id" : "340703",
			"name" : "狮子山区",
			"subItems" : []
		}, {
			"id" : "340711",
			"name" : "铜陵市郊区",
			"subItems" : []
		}, {
			"id" : "340721",
			"name" : "铜陵县",
			"subItems" : []
		} ]
	}, {
		"id" : "3408",
		"name" : "安庆市",
		"subItems" : [ {
			"id" : "340801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "340802",
			"name" : "迎江区",
			"subItems" : []
		}, {
			"id" : "340803",
			"name" : "大观区",
			"subItems" : []
		}, {
			"id" : "340811",
			"name" : "宜秀区",
			"subItems" : []
		}, {
			"id" : "340822",
			"name" : "怀宁县",
			"subItems" : []
		}, {
			"id" : "340823",
			"name" : "枞阳县",
			"subItems" : []
		}, {
			"id" : "340824",
			"name" : "潜山县",
			"subItems" : []
		}, {
			"id" : "340825",
			"name" : "太湖县",
			"subItems" : []
		}, {
			"id" : "340826",
			"name" : "宿松县",
			"subItems" : []
		}, {
			"id" : "340827",
			"name" : "望江县",
			"subItems" : []
		}, {
			"id" : "340828",
			"name" : "岳西县",
			"subItems" : []
		}, {
			"id" : "340881",
			"name" : "桐城市",
			"subItems" : []
		} ]
	}, {
		"id" : "3410",
		"name" : "黄山市",
		"subItems" : [ {
			"id" : "341001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341002",
			"name" : "屯溪区",
			"subItems" : []
		}, {
			"id" : "341003",
			"name" : "黄山区",
			"subItems" : []
		}, {
			"id" : "341004",
			"name" : "徽州区",
			"subItems" : []
		}, {
			"id" : "341021",
			"name" : "歙县",
			"subItems" : []
		}, {
			"id" : "341022",
			"name" : "休宁县",
			"subItems" : []
		}, {
			"id" : "341023",
			"name" : "黟县",
			"subItems" : []
		}, {
			"id" : "341024",
			"name" : "祁门县",
			"subItems" : []
		} ]
	}, {
		"id" : "3411",
		"name" : "滁州市",
		"subItems" : [ {
			"id" : "341101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341102",
			"name" : "琅琊区",
			"subItems" : []
		}, {
			"id" : "341103",
			"name" : "南谯区",
			"subItems" : []
		}, {
			"id" : "341122",
			"name" : "来安县",
			"subItems" : []
		}, {
			"id" : "341124",
			"name" : "全椒县",
			"subItems" : []
		}, {
			"id" : "341125",
			"name" : "定远县",
			"subItems" : []
		}, {
			"id" : "341126",
			"name" : "凤阳县",
			"subItems" : []
		}, {
			"id" : "341181",
			"name" : "天长市",
			"subItems" : []
		}, {
			"id" : "341182",
			"name" : "明光市",
			"subItems" : []
		} ]
	}, {
		"id" : "3412",
		"name" : "阜阳市",
		"subItems" : [ {
			"id" : "341201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341202",
			"name" : "颍州区",
			"subItems" : []
		}, {
			"id" : "341203",
			"name" : "颍东区",
			"subItems" : []
		}, {
			"id" : "341204",
			"name" : "颍泉区",
			"subItems" : []
		}, {
			"id" : "341221",
			"name" : "临泉县",
			"subItems" : []
		}, {
			"id" : "341222",
			"name" : "太和县",
			"subItems" : []
		}, {
			"id" : "341225",
			"name" : "阜南县",
			"subItems" : []
		}, {
			"id" : "341226",
			"name" : "颍上县",
			"subItems" : []
		}, {
			"id" : "341282",
			"name" : "界首市",
			"subItems" : []
		} ]
	}, {
		"id" : "3413",
		"name" : "宿州市",
		"subItems" : [ {
			"id" : "341301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341302",
			"name" : "墉桥区",
			"subItems" : []
		}, {
			"id" : "341321",
			"name" : "砀山县",
			"subItems" : []
		}, {
			"id" : "341322",
			"name" : "萧县",
			"subItems" : []
		}, {
			"id" : "341323",
			"name" : "灵璧县",
			"subItems" : []
		}, {
			"id" : "341324",
			"name" : "泗县",
			"subItems" : []
		} ]
	}, {
		"id" : "3414",
		"name" : "巢湖市",
		"subItems" : [ {
			"id" : "341401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341402",
			"name" : "居巢区",
			"subItems" : []
		}, {
			"id" : "341421",
			"name" : "庐江县",
			"subItems" : []
		}, {
			"id" : "341422",
			"name" : "无为县",
			"subItems" : []
		}, {
			"id" : "341423",
			"name" : "含山县",
			"subItems" : []
		}, {
			"id" : "341424",
			"name" : "和县",
			"subItems" : []
		} ]
	}, {
		"id" : "3415",
		"name" : "六安市",
		"subItems" : [ {
			"id" : "341501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341502",
			"name" : "金安区",
			"subItems" : []
		}, {
			"id" : "341503",
			"name" : "裕安区",
			"subItems" : []
		}, {
			"id" : "341521",
			"name" : "寿县",
			"subItems" : []
		}, {
			"id" : "341522",
			"name" : "霍邱县",
			"subItems" : []
		}, {
			"id" : "341523",
			"name" : "舒城县",
			"subItems" : []
		}, {
			"id" : "341524",
			"name" : "金寨县",
			"subItems" : []
		}, {
			"id" : "341525",
			"name" : "霍山县",
			"subItems" : []
		} ]
	}, {
		"id" : "3416",
		"name" : "亳州市",
		"subItems" : [ {
			"id" : "341601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341602",
			"name" : "谯城区",
			"subItems" : []
		}, {
			"id" : "341621",
			"name" : "涡阳县",
			"subItems" : []
		}, {
			"id" : "341622",
			"name" : "蒙城县",
			"subItems" : []
		}, {
			"id" : "341623",
			"name" : "利辛县",
			"subItems" : []
		} ]
	}, {
		"id" : "3417",
		"name" : "池州市",
		"subItems" : [ {
			"id" : "341701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341702",
			"name" : "贵池区",
			"subItems" : []
		}, {
			"id" : "341721",
			"name" : "东至县",
			"subItems" : []
		}, {
			"id" : "341722",
			"name" : "石台县",
			"subItems" : []
		}, {
			"id" : "341723",
			"name" : "青阳县",
			"subItems" : []
		} ]
	}, {
		"id" : "3418",
		"name" : "宣城市",
		"subItems" : [ {
			"id" : "341801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "341802",
			"name" : "宣州区",
			"subItems" : []
		}, {
			"id" : "341821",
			"name" : "郎溪县",
			"subItems" : []
		}, {
			"id" : "341822",
			"name" : "广德县",
			"subItems" : []
		}, {
			"id" : "341823",
			"name" : "泾县",
			"subItems" : []
		}, {
			"id" : "341824",
			"name" : "绩溪县",
			"subItems" : []
		}, {
			"id" : "341825",
			"name" : "旌德县",
			"subItems" : []
		}, {
			"id" : "341881",
			"name" : "宁国市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "35",
	"name" : "福建省",
	"subItems" : [ {
		"id" : "3501",
		"name" : "福州市",
		"subItems" : [ {
			"id" : "350101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350102",
			"name" : "鼓楼区",
			"subItems" : []
		}, {
			"id" : "350103",
			"name" : "台江区",
			"subItems" : []
		}, {
			"id" : "350104",
			"name" : "仓山区",
			"subItems" : []
		}, {
			"id" : "350105",
			"name" : "马尾区",
			"subItems" : []
		}, {
			"id" : "350111",
			"name" : "晋安区",
			"subItems" : []
		}, {
			"id" : "350121",
			"name" : "闽侯县",
			"subItems" : []
		}, {
			"id" : "350122",
			"name" : "连江县",
			"subItems" : []
		}, {
			"id" : "350123",
			"name" : "罗源县",
			"subItems" : []
		}, {
			"id" : "350124",
			"name" : "闽清县",
			"subItems" : []
		}, {
			"id" : "350125",
			"name" : "永泰县",
			"subItems" : []
		}, {
			"id" : "350128",
			"name" : "平潭县",
			"subItems" : []
		}, {
			"id" : "350181",
			"name" : "福清市",
			"subItems" : []
		}, {
			"id" : "350182",
			"name" : "长乐市",
			"subItems" : []
		} ]
	}, {
		"id" : "3502",
		"name" : "厦门市",
		"subItems" : [ {
			"id" : "350201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350203",
			"name" : "思明区",
			"subItems" : []
		}, {
			"id" : "350205",
			"name" : "海沧区",
			"subItems" : []
		}, {
			"id" : "350206",
			"name" : "湖里区",
			"subItems" : []
		}, {
			"id" : "350211",
			"name" : "集美区",
			"subItems" : []
		}, {
			"id" : "350212",
			"name" : "同安区",
			"subItems" : []
		}, {
			"id" : "350213",
			"name" : "翔安区",
			"subItems" : []
		} ]
	}, {
		"id" : "3503",
		"name" : "莆田市",
		"subItems" : [ {
			"id" : "350301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350302",
			"name" : "城厢区",
			"subItems" : []
		}, {
			"id" : "350303",
			"name" : "涵江区",
			"subItems" : []
		}, {
			"id" : "350304",
			"name" : "荔城区",
			"subItems" : []
		}, {
			"id" : "350305",
			"name" : "秀屿区",
			"subItems" : []
		}, {
			"id" : "350322",
			"name" : "仙游县",
			"subItems" : []
		} ]
	}, {
		"id" : "3504",
		"name" : "三明市",
		"subItems" : [ {
			"id" : "350401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350402",
			"name" : "梅列区",
			"subItems" : []
		}, {
			"id" : "350403",
			"name" : "三元区",
			"subItems" : []
		}, {
			"id" : "350421",
			"name" : "明溪县",
			"subItems" : []
		}, {
			"id" : "350423",
			"name" : "清流县",
			"subItems" : []
		}, {
			"id" : "350424",
			"name" : "宁化县",
			"subItems" : []
		}, {
			"id" : "350425",
			"name" : "大田县",
			"subItems" : []
		}, {
			"id" : "350426",
			"name" : "尤溪县",
			"subItems" : []
		}, {
			"id" : "350427",
			"name" : "沙县",
			"subItems" : []
		}, {
			"id" : "350428",
			"name" : "将乐县",
			"subItems" : []
		}, {
			"id" : "350429",
			"name" : "泰宁县",
			"subItems" : []
		}, {
			"id" : "350430",
			"name" : "建宁县",
			"subItems" : []
		}, {
			"id" : "350481",
			"name" : "永安市",
			"subItems" : []
		} ]
	}, {
		"id" : "3505",
		"name" : "泉州市",
		"subItems" : [ {
			"id" : "350501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350502",
			"name" : "鲤城区",
			"subItems" : []
		}, {
			"id" : "350503",
			"name" : "丰泽区",
			"subItems" : []
		}, {
			"id" : "350504",
			"name" : "洛江区",
			"subItems" : []
		}, {
			"id" : "350505",
			"name" : "泉港区",
			"subItems" : []
		}, {
			"id" : "350521",
			"name" : "惠安县",
			"subItems" : []
		}, {
			"id" : "350524",
			"name" : "安溪县",
			"subItems" : []
		}, {
			"id" : "350525",
			"name" : "永春县",
			"subItems" : []
		}, {
			"id" : "350526",
			"name" : "德化县",
			"subItems" : []
		}, {
			"id" : "350527",
			"name" : "金门县",
			"subItems" : []
		}, {
			"id" : "350581",
			"name" : "石狮市",
			"subItems" : []
		}, {
			"id" : "350582",
			"name" : "晋江市",
			"subItems" : []
		}, {
			"id" : "350583",
			"name" : "南安市",
			"subItems" : []
		} ]
	}, {
		"id" : "3506",
		"name" : "漳州市",
		"subItems" : [ {
			"id" : "350601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350602",
			"name" : "芗城区",
			"subItems" : []
		}, {
			"id" : "350603",
			"name" : "龙文区",
			"subItems" : []
		}, {
			"id" : "350622",
			"name" : "云霄县",
			"subItems" : []
		}, {
			"id" : "350623",
			"name" : "漳浦县",
			"subItems" : []
		}, {
			"id" : "350624",
			"name" : "诏安县",
			"subItems" : []
		}, {
			"id" : "350625",
			"name" : "长泰县",
			"subItems" : []
		}, {
			"id" : "350626",
			"name" : "东山县",
			"subItems" : []
		}, {
			"id" : "350627",
			"name" : "南靖县",
			"subItems" : []
		}, {
			"id" : "350628",
			"name" : "平和县",
			"subItems" : []
		}, {
			"id" : "350629",
			"name" : "华安县",
			"subItems" : []
		}, {
			"id" : "350681",
			"name" : "龙海市",
			"subItems" : []
		} ]
	}, {
		"id" : "3507",
		"name" : "南平市",
		"subItems" : [ {
			"id" : "350701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350702",
			"name" : "延平区",
			"subItems" : []
		}, {
			"id" : "350721",
			"name" : "顺昌县",
			"subItems" : []
		}, {
			"id" : "350722",
			"name" : "浦城县",
			"subItems" : []
		}, {
			"id" : "350723",
			"name" : "光泽县",
			"subItems" : []
		}, {
			"id" : "350724",
			"name" : "松溪县",
			"subItems" : []
		}, {
			"id" : "350725",
			"name" : "政和县",
			"subItems" : []
		}, {
			"id" : "350781",
			"name" : "邵武市",
			"subItems" : []
		}, {
			"id" : "350782",
			"name" : "武夷山市",
			"subItems" : []
		}, {
			"id" : "350783",
			"name" : "建瓯市",
			"subItems" : []
		}, {
			"id" : "350784",
			"name" : "建阳市",
			"subItems" : []
		} ]
	}, {
		"id" : "3508",
		"name" : "龙岩市",
		"subItems" : [ {
			"id" : "350801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350802",
			"name" : "新罗区",
			"subItems" : []
		}, {
			"id" : "350821",
			"name" : "长汀县",
			"subItems" : []
		}, {
			"id" : "350822",
			"name" : "永定县",
			"subItems" : []
		}, {
			"id" : "350823",
			"name" : "上杭县",
			"subItems" : []
		}, {
			"id" : "350824",
			"name" : "武平县",
			"subItems" : []
		}, {
			"id" : "350825",
			"name" : "连城县",
			"subItems" : []
		}, {
			"id" : "350881",
			"name" : "漳平市",
			"subItems" : []
		} ]
	}, {
		"id" : "3509",
		"name" : "宁德市　",
		"subItems" : [ {
			"id" : "350901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "350902",
			"name" : "蕉城区",
			"subItems" : []
		}, {
			"id" : "350921",
			"name" : "霞浦县",
			"subItems" : []
		}, {
			"id" : "350922",
			"name" : "古田县",
			"subItems" : []
		}, {
			"id" : "350923",
			"name" : "屏南县",
			"subItems" : []
		}, {
			"id" : "350924",
			"name" : "寿宁县",
			"subItems" : []
		}, {
			"id" : "350925",
			"name" : "周宁县",
			"subItems" : []
		}, {
			"id" : "350926",
			"name" : "柘荣县",
			"subItems" : []
		}, {
			"id" : "350981",
			"name" : "福安市",
			"subItems" : []
		}, {
			"id" : "350982",
			"name" : "福鼎市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "36",
	"name" : "江西省",
	"subItems" : [ {
		"id" : "3601",
		"name" : "南昌市",
		"subItems" : [ {
			"id" : "360101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360102",
			"name" : "东湖区",
			"subItems" : []
		}, {
			"id" : "360103",
			"name" : "西湖区",
			"subItems" : []
		}, {
			"id" : "360104",
			"name" : "青云谱区",
			"subItems" : []
		}, {
			"id" : "360105",
			"name" : "湾里区",
			"subItems" : []
		}, {
			"id" : "360111",
			"name" : "青山湖区",
			"subItems" : []
		}, {
			"id" : "360121",
			"name" : "南昌县",
			"subItems" : []
		}, {
			"id" : "360122",
			"name" : "新建县",
			"subItems" : []
		}, {
			"id" : "360123",
			"name" : "安义县",
			"subItems" : []
		}, {
			"id" : "360124",
			"name" : "进贤县",
			"subItems" : []
		} ]
	}, {
		"id" : "3602",
		"name" : "景德镇市",
		"subItems" : [ {
			"id" : "360201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360202",
			"name" : "昌江区",
			"subItems" : []
		}, {
			"id" : "360203",
			"name" : "珠山区",
			"subItems" : []
		}, {
			"id" : "360222",
			"name" : "浮梁县",
			"subItems" : []
		}, {
			"id" : "360281",
			"name" : "乐平市",
			"subItems" : []
		} ]
	}, {
		"id" : "3603",
		"name" : "萍乡市",
		"subItems" : [ {
			"id" : "360301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360302",
			"name" : "安源区",
			"subItems" : []
		}, {
			"id" : "360313",
			"name" : "湘东区",
			"subItems" : []
		}, {
			"id" : "360321",
			"name" : "莲花县",
			"subItems" : []
		}, {
			"id" : "360322",
			"name" : "上栗县",
			"subItems" : []
		}, {
			"id" : "360323",
			"name" : "芦溪县",
			"subItems" : []
		} ]
	}, {
		"id" : "3604",
		"name" : "九江市",
		"subItems" : [ {
			"id" : "360401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360402",
			"name" : "庐山区",
			"subItems" : []
		}, {
			"id" : "360403",
			"name" : "浔阳区",
			"subItems" : []
		}, {
			"id" : "360421",
			"name" : "九江县",
			"subItems" : []
		}, {
			"id" : "360423",
			"name" : "武宁县",
			"subItems" : []
		}, {
			"id" : "360424",
			"name" : "修水县",
			"subItems" : []
		}, {
			"id" : "360425",
			"name" : "永修县",
			"subItems" : []
		}, {
			"id" : "360426",
			"name" : "德安县",
			"subItems" : []
		}, {
			"id" : "360427",
			"name" : "星子县",
			"subItems" : []
		}, {
			"id" : "360428",
			"name" : "都昌县",
			"subItems" : []
		}, {
			"id" : "360429",
			"name" : "湖口县",
			"subItems" : []
		}, {
			"id" : "360430",
			"name" : "彭泽县",
			"subItems" : []
		}, {
			"id" : "360481",
			"name" : "瑞昌市",
			"subItems" : []
		} ]
	}, {
		"id" : "3605",
		"name" : "新余市",
		"subItems" : [ {
			"id" : "360501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360502",
			"name" : "渝水区",
			"subItems" : []
		}, {
			"id" : "360521",
			"name" : "分宜县",
			"subItems" : []
		} ]
	}, {
		"id" : "3606",
		"name" : "鹰潭市",
		"subItems" : [ {
			"id" : "360601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360602",
			"name" : "月湖区",
			"subItems" : []
		}, {
			"id" : "360622",
			"name" : "余江县",
			"subItems" : []
		}, {
			"id" : "360681",
			"name" : "贵溪市",
			"subItems" : []
		} ]
	}, {
		"id" : "3607",
		"name" : "赣州市",
		"subItems" : [ {
			"id" : "360701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360702",
			"name" : "章贡区",
			"subItems" : []
		}, {
			"id" : "360721",
			"name" : "赣县",
			"subItems" : []
		}, {
			"id" : "360722",
			"name" : "信丰县",
			"subItems" : []
		}, {
			"id" : "360723",
			"name" : "大余县",
			"subItems" : []
		}, {
			"id" : "360724",
			"name" : "上犹县",
			"subItems" : []
		}, {
			"id" : "360725",
			"name" : "崇义县",
			"subItems" : []
		}, {
			"id" : "360726",
			"name" : "安远县",
			"subItems" : []
		}, {
			"id" : "360727",
			"name" : "龙南县",
			"subItems" : []
		}, {
			"id" : "360728",
			"name" : "定南县",
			"subItems" : []
		}, {
			"id" : "360729",
			"name" : "全南县",
			"subItems" : []
		}, {
			"id" : "360730",
			"name" : "宁都县",
			"subItems" : []
		}, {
			"id" : "360731",
			"name" : "于都县",
			"subItems" : []
		}, {
			"id" : "360732",
			"name" : "兴国县",
			"subItems" : []
		}, {
			"id" : "360733",
			"name" : "会昌县",
			"subItems" : []
		}, {
			"id" : "360734",
			"name" : "寻乌县",
			"subItems" : []
		}, {
			"id" : "360735",
			"name" : "石城县",
			"subItems" : []
		}, {
			"id" : "360781",
			"name" : "瑞金市",
			"subItems" : []
		}, {
			"id" : "360782",
			"name" : "南康市",
			"subItems" : []
		} ]
	}, {
		"id" : "3608",
		"name" : "吉安市",
		"subItems" : [ {
			"id" : "360801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360802",
			"name" : "吉州区",
			"subItems" : []
		}, {
			"id" : "360803",
			"name" : "青原区",
			"subItems" : []
		}, {
			"id" : "360821",
			"name" : "吉安县",
			"subItems" : []
		}, {
			"id" : "360822",
			"name" : "吉水县",
			"subItems" : []
		}, {
			"id" : "360823",
			"name" : "峡江县",
			"subItems" : []
		}, {
			"id" : "360824",
			"name" : "新干县",
			"subItems" : []
		}, {
			"id" : "360825",
			"name" : "永丰县",
			"subItems" : []
		}, {
			"id" : "360826",
			"name" : "泰和县",
			"subItems" : []
		}, {
			"id" : "360827",
			"name" : "遂川县",
			"subItems" : []
		}, {
			"id" : "360828",
			"name" : "万安县",
			"subItems" : []
		}, {
			"id" : "360829",
			"name" : "安福县",
			"subItems" : []
		}, {
			"id" : "360830",
			"name" : "永新县",
			"subItems" : []
		}, {
			"id" : "360881",
			"name" : "井冈山市",
			"subItems" : []
		} ]
	}, {
		"id" : "3609",
		"name" : "宜春市",
		"subItems" : [ {
			"id" : "360901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "360902",
			"name" : "袁州区",
			"subItems" : []
		}, {
			"id" : "360921",
			"name" : "奉新县",
			"subItems" : []
		}, {
			"id" : "360922",
			"name" : "万载县",
			"subItems" : []
		}, {
			"id" : "360923",
			"name" : "上高县",
			"subItems" : []
		}, {
			"id" : "360924",
			"name" : "宜丰县",
			"subItems" : []
		}, {
			"id" : "360925",
			"name" : "靖安县",
			"subItems" : []
		}, {
			"id" : "360926",
			"name" : "铜鼓县",
			"subItems" : []
		}, {
			"id" : "360981",
			"name" : "丰城市",
			"subItems" : []
		}, {
			"id" : "360982",
			"name" : "樟树市",
			"subItems" : []
		}, {
			"id" : "360983",
			"name" : "高安市",
			"subItems" : []
		} ]
	}, {
		"id" : "3610",
		"name" : "抚州市",
		"subItems" : [ {
			"id" : "361001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "361002",
			"name" : "临川区",
			"subItems" : []
		}, {
			"id" : "361021",
			"name" : "南城县",
			"subItems" : []
		}, {
			"id" : "361022",
			"name" : "黎川县",
			"subItems" : []
		}, {
			"id" : "361023",
			"name" : "南丰县",
			"subItems" : []
		}, {
			"id" : "361024",
			"name" : "崇仁县",
			"subItems" : []
		}, {
			"id" : "361025",
			"name" : "乐安县",
			"subItems" : []
		}, {
			"id" : "361026",
			"name" : "宜黄县",
			"subItems" : []
		}, {
			"id" : "361027",
			"name" : "金溪县",
			"subItems" : []
		}, {
			"id" : "361028",
			"name" : "资溪县",
			"subItems" : []
		}, {
			"id" : "361029",
			"name" : "东乡县",
			"subItems" : []
		}, {
			"id" : "361030",
			"name" : "广昌县",
			"subItems" : []
		} ]
	}, {
		"id" : "3611",
		"name" : "上饶市",
		"subItems" : [ {
			"id" : "361101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "361102",
			"name" : "信州区",
			"subItems" : []
		}, {
			"id" : "361121",
			"name" : "上饶县",
			"subItems" : []
		}, {
			"id" : "361122",
			"name" : "广丰县",
			"subItems" : []
		}, {
			"id" : "361123",
			"name" : "玉山县",
			"subItems" : []
		}, {
			"id" : "361124",
			"name" : "铅山县",
			"subItems" : []
		}, {
			"id" : "361125",
			"name" : "横峰县",
			"subItems" : []
		}, {
			"id" : "361126",
			"name" : "弋阳县",
			"subItems" : []
		}, {
			"id" : "361127",
			"name" : "余干县",
			"subItems" : []
		}, {
			"id" : "361128",
			"name" : "鄱阳县",
			"subItems" : []
		}, {
			"id" : "361129",
			"name" : "万年县",
			"subItems" : []
		}, {
			"id" : "361130",
			"name" : "婺源县",
			"subItems" : []
		}, {
			"id" : "361181",
			"name" : "德兴市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "37",
	"name" : "山东省",
	"subItems" : [ {
		"id" : "3701",
		"name" : "济南市",
		"subItems" : [ {
			"id" : "370101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370102",
			"name" : "历下区",
			"subItems" : []
		}, {
			"id" : "370103",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "370104",
			"name" : "槐荫区",
			"subItems" : []
		}, {
			"id" : "370105",
			"name" : "天桥区",
			"subItems" : []
		}, {
			"id" : "370112",
			"name" : "历城区",
			"subItems" : []
		}, {
			"id" : "370113",
			"name" : "长清区",
			"subItems" : []
		}, {
			"id" : "370124",
			"name" : "平阴县",
			"subItems" : []
		}, {
			"id" : "370125",
			"name" : "济阳县",
			"subItems" : []
		}, {
			"id" : "370126",
			"name" : "商河县",
			"subItems" : []
		}, {
			"id" : "370181",
			"name" : "章丘市",
			"subItems" : []
		} ]
	}, {
		"id" : "3702",
		"name" : "青岛市",
		"subItems" : [ {
			"id" : "370201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370202",
			"name" : "市南区",
			"subItems" : []
		}, {
			"id" : "370203",
			"name" : "市北区",
			"subItems" : []
		}, {
			"id" : "370205",
			"name" : "四方区",
			"subItems" : []
		}, {
			"id" : "370211",
			"name" : "黄岛区",
			"subItems" : []
		}, {
			"id" : "370212",
			"name" : "崂山区",
			"subItems" : []
		}, {
			"id" : "370213",
			"name" : "李沧区",
			"subItems" : []
		}, {
			"id" : "370214",
			"name" : "城阳区",
			"subItems" : []
		}, {
			"id" : "370281",
			"name" : "胶州市",
			"subItems" : []
		}, {
			"id" : "370282",
			"name" : "即墨市",
			"subItems" : []
		}, {
			"id" : "370283",
			"name" : "平度市",
			"subItems" : []
		}, {
			"id" : "370284",
			"name" : "胶南市",
			"subItems" : []
		}, {
			"id" : "370285",
			"name" : "莱西市",
			"subItems" : []
		} ]
	}, {
		"id" : "3703",
		"name" : "淄博市",
		"subItems" : [ {
			"id" : "370301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370302",
			"name" : "淄川区",
			"subItems" : []
		}, {
			"id" : "370303",
			"name" : "张店区",
			"subItems" : []
		}, {
			"id" : "370304",
			"name" : "博山区",
			"subItems" : []
		}, {
			"id" : "370305",
			"name" : "临淄区",
			"subItems" : []
		}, {
			"id" : "370306",
			"name" : "周村区",
			"subItems" : []
		}, {
			"id" : "370321",
			"name" : "桓台县",
			"subItems" : []
		}, {
			"id" : "370322",
			"name" : "高青县",
			"subItems" : []
		}, {
			"id" : "370323",
			"name" : "沂源县",
			"subItems" : []
		} ]
	}, {
		"id" : "3704",
		"name" : "枣庄市",
		"subItems" : [ {
			"id" : "370401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370402",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "370403",
			"name" : "薛城区",
			"subItems" : []
		}, {
			"id" : "370404",
			"name" : "峄城区",
			"subItems" : []
		}, {
			"id" : "370405",
			"name" : "台儿庄区",
			"subItems" : []
		}, {
			"id" : "370406",
			"name" : "山亭区",
			"subItems" : []
		}, {
			"id" : "370481",
			"name" : "滕州市",
			"subItems" : []
		} ]
	}, {
		"id" : "3705",
		"name" : "东营市",
		"subItems" : [ {
			"id" : "370501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370502",
			"name" : "东营区",
			"subItems" : []
		}, {
			"id" : "370503",
			"name" : "河口区",
			"subItems" : []
		}, {
			"id" : "370521",
			"name" : "垦利县",
			"subItems" : []
		}, {
			"id" : "370522",
			"name" : "利津县",
			"subItems" : []
		}, {
			"id" : "370523",
			"name" : "广饶县",
			"subItems" : []
		} ]
	}, {
		"id" : "3706",
		"name" : "烟台市",
		"subItems" : [ {
			"id" : "370601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370602",
			"name" : "芝罘区",
			"subItems" : []
		}, {
			"id" : "370611",
			"name" : "福山区",
			"subItems" : []
		}, {
			"id" : "370612",
			"name" : "牟平区",
			"subItems" : []
		}, {
			"id" : "370613",
			"name" : "莱山区",
			"subItems" : []
		}, {
			"id" : "370634",
			"name" : "长岛县",
			"subItems" : []
		}, {
			"id" : "370681",
			"name" : "龙口市",
			"subItems" : []
		}, {
			"id" : "370682",
			"name" : "莱阳市",
			"subItems" : []
		}, {
			"id" : "370683",
			"name" : "莱州市",
			"subItems" : []
		}, {
			"id" : "370684",
			"name" : "蓬莱市",
			"subItems" : []
		}, {
			"id" : "370685",
			"name" : "招远市",
			"subItems" : []
		}, {
			"id" : "370686",
			"name" : "栖霞市",
			"subItems" : []
		}, {
			"id" : "370687",
			"name" : "海阳市",
			"subItems" : []
		} ]
	}, {
		"id" : "3707",
		"name" : "潍坊市",
		"subItems" : [ {
			"id" : "370701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370702",
			"name" : "潍城区",
			"subItems" : []
		}, {
			"id" : "370703",
			"name" : "寒亭区",
			"subItems" : []
		}, {
			"id" : "370704",
			"name" : "坊子区",
			"subItems" : []
		}, {
			"id" : "370705",
			"name" : "奎文区",
			"subItems" : []
		}, {
			"id" : "370724",
			"name" : "临朐县",
			"subItems" : []
		}, {
			"id" : "370725",
			"name" : "昌乐县",
			"subItems" : []
		}, {
			"id" : "370781",
			"name" : "青州市",
			"subItems" : []
		}, {
			"id" : "370782",
			"name" : "诸城市",
			"subItems" : []
		}, {
			"id" : "370783",
			"name" : "寿光市",
			"subItems" : []
		}, {
			"id" : "370784",
			"name" : "安丘市",
			"subItems" : []
		}, {
			"id" : "370785",
			"name" : "高密市",
			"subItems" : []
		}, {
			"id" : "370786",
			"name" : "昌邑市",
			"subItems" : []
		} ]
	}, {
		"id" : "3708",
		"name" : "济宁市",
		"subItems" : [ {
			"id" : "370801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370802",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "370811",
			"name" : "任城区",
			"subItems" : []
		}, {
			"id" : "370826",
			"name" : "\"微山县",
			"subItems" : []
		}, {
			"id" : "370827",
			"name" : "鱼台县",
			"subItems" : []
		}, {
			"id" : "370828",
			"name" : "金乡县",
			"subItems" : []
		}, {
			"id" : "370829",
			"name" : "嘉祥县",
			"subItems" : []
		}, {
			"id" : "370830",
			"name" : "汶上县",
			"subItems" : []
		}, {
			"id" : "370831",
			"name" : "泗水县",
			"subItems" : []
		}, {
			"id" : "370832",
			"name" : "梁山县",
			"subItems" : []
		}, {
			"id" : "370881",
			"name" : "曲阜市",
			"subItems" : []
		}, {
			"id" : "370882",
			"name" : "兖州市",
			"subItems" : []
		}, {
			"id" : "370883",
			"name" : "邹城市",
			"subItems" : []
		} ]
	}, {
		"id" : "3709",
		"name" : "泰安市",
		"subItems" : [ {
			"id" : "370901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "370902",
			"name" : "泰山区",
			"subItems" : []
		}, {
			"id" : "370903",
			"name" : "岱岳区",
			"subItems" : []
		}, {
			"id" : "370921",
			"name" : "宁阳县",
			"subItems" : []
		}, {
			"id" : "370923",
			"name" : "东平县",
			"subItems" : []
		}, {
			"id" : "370982",
			"name" : "新泰市",
			"subItems" : []
		}, {
			"id" : "370983",
			"name" : "肥城市",
			"subItems" : []
		} ]
	}, {
		"id" : "3710",
		"name" : "威海市",
		"subItems" : [ {
			"id" : "371001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371002",
			"name" : "环翠区",
			"subItems" : []
		}, {
			"id" : "371081",
			"name" : "文登市",
			"subItems" : []
		}, {
			"id" : "371082",
			"name" : "荣成市",
			"subItems" : []
		}, {
			"id" : "371083",
			"name" : "乳山市",
			"subItems" : []
		} ]
	}, {
		"id" : "3711",
		"name" : "日照市",
		"subItems" : [ {
			"id" : "371101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371102",
			"name" : "东港区",
			"subItems" : []
		}, {
			"id" : "371103",
			"name" : "岚山区",
			"subItems" : []
		}, {
			"id" : "371121",
			"name" : "五莲县",
			"subItems" : []
		}, {
			"id" : "371122",
			"name" : "莒县",
			"subItems" : []
		} ]
	}, {
		"id" : "3712",
		"name" : "莱芜市",
		"subItems" : [ {
			"id" : "371201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371202",
			"name" : "莱城区",
			"subItems" : []
		}, {
			"id" : "371203",
			"name" : "钢城区",
			"subItems" : []
		} ]
	}, {
		"id" : "3713",
		"name" : "临沂市",
		"subItems" : [ {
			"id" : "371301",
			"name" : "临沂市辖区",
			"subItems" : []
		}, {
			"id" : "371302",
			"name" : "兰山区",
			"subItems" : []
		}, {
			"id" : "371311",
			"name" : "罗庄区",
			"subItems" : []
		}, {
			"id" : "371312",
			"name" : "河东区",
			"subItems" : []
		}, {
			"id" : "371321",
			"name" : "沂南县",
			"subItems" : []
		}, {
			"id" : "371322",
			"name" : "郯城县",
			"subItems" : []
		}, {
			"id" : "371323",
			"name" : "沂水县",
			"subItems" : []
		}, {
			"id" : "371324",
			"name" : "苍山县",
			"subItems" : []
		}, {
			"id" : "371325",
			"name" : "费县",
			"subItems" : []
		}, {
			"id" : "371326",
			"name" : "平邑县",
			"subItems" : []
		}, {
			"id" : "371327",
			"name" : "莒南县",
			"subItems" : []
		}, {
			"id" : "371328",
			"name" : "蒙阴县",
			"subItems" : []
		}, {
			"id" : "371329",
			"name" : "临沭县",
			"subItems" : []
		} ]
	}, {
		"id" : "3714",
		"name" : "德州市",
		"subItems" : [ {
			"id" : "371401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371402",
			"name" : "德城区",
			"subItems" : []
		}, {
			"id" : "371421",
			"name" : "陵县",
			"subItems" : []
		}, {
			"id" : "371422",
			"name" : "宁津县",
			"subItems" : []
		}, {
			"id" : "371423",
			"name" : "庆云县",
			"subItems" : []
		}, {
			"id" : "371424",
			"name" : "临邑县",
			"subItems" : []
		}, {
			"id" : "371425",
			"name" : "齐河县",
			"subItems" : []
		}, {
			"id" : "371426",
			"name" : "平原县",
			"subItems" : []
		}, {
			"id" : "371427",
			"name" : "夏津县",
			"subItems" : []
		}, {
			"id" : "371428",
			"name" : "武城县",
			"subItems" : []
		}, {
			"id" : "371481",
			"name" : "乐陵市",
			"subItems" : []
		}, {
			"id" : "371482",
			"name" : "禹城市",
			"subItems" : []
		} ]
	}, {
		"id" : "3715",
		"name" : "聊城市",
		"subItems" : [ {
			"id" : "371501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371502",
			"name" : "东昌府区",
			"subItems" : []
		}, {
			"id" : "371521",
			"name" : "阳谷县",
			"subItems" : []
		}, {
			"id" : "371522",
			"name" : "莘县",
			"subItems" : []
		}, {
			"id" : "371523",
			"name" : "茌平县",
			"subItems" : []
		}, {
			"id" : "371524",
			"name" : "东阿县",
			"subItems" : []
		}, {
			"id" : "371525",
			"name" : "冠县",
			"subItems" : []
		}, {
			"id" : "371526",
			"name" : "高唐县",
			"subItems" : []
		}, {
			"id" : "371581",
			"name" : "临清市",
			"subItems" : []
		} ]
	}, {
		"id" : "3716",
		"name" : "滨州市",
		"subItems" : [ {
			"id" : "371601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371602",
			"name" : "滨城区",
			"subItems" : []
		}, {
			"id" : "371621",
			"name" : "惠民县",
			"subItems" : []
		}, {
			"id" : "371622",
			"name" : "阳信县",
			"subItems" : []
		}, {
			"id" : "371623",
			"name" : "无棣县",
			"subItems" : []
		}, {
			"id" : "371624",
			"name" : "沾化县",
			"subItems" : []
		}, {
			"id" : "371625",
			"name" : "博兴县",
			"subItems" : []
		}, {
			"id" : "371626",
			"name" : "邹平县",
			"subItems" : []
		} ]
	}, {
		"id" : "3717",
		"name" : "菏泽市",
		"subItems" : [ {
			"id" : "371701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "371702",
			"name" : "牡丹区",
			"subItems" : []
		}, {
			"id" : "371721",
			"name" : "曹县",
			"subItems" : []
		}, {
			"id" : "371722",
			"name" : "单县",
			"subItems" : []
		}, {
			"id" : "371723",
			"name" : "成武县",
			"subItems" : []
		}, {
			"id" : "371724",
			"name" : "巨野县",
			"subItems" : []
		}, {
			"id" : "371725",
			"name" : "郓城县",
			"subItems" : []
		}, {
			"id" : "371726",
			"name" : "鄄城县",
			"subItems" : []
		}, {
			"id" : "371727",
			"name" : "定陶县",
			"subItems" : []
		}, {
			"id" : "371728",
			"name" : "东明县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "41",
	"name" : "河南省",
	"subItems" : [ {
		"id" : "4101",
		"name" : "郑州市",
		"subItems" : [ {
			"id" : "410101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410102",
			"name" : "中原区",
			"subItems" : []
		}, {
			"id" : "410103",
			"name" : "二七区",
			"subItems" : []
		}, {
			"id" : "410104",
			"name" : "管城回族区",
			"subItems" : []
		}, {
			"id" : "410105",
			"name" : "金水区",
			"subItems" : []
		}, {
			"id" : "410106",
			"name" : "上街区",
			"subItems" : []
		}, {
			"id" : "410108",
			"name" : "惠济区",
			"subItems" : []
		}, {
			"id" : "410122",
			"name" : "中牟县",
			"subItems" : []
		}, {
			"id" : "410181",
			"name" : "巩义市",
			"subItems" : []
		}, {
			"id" : "410182",
			"name" : "荥阳市",
			"subItems" : []
		}, {
			"id" : "410183",
			"name" : "新密市",
			"subItems" : []
		}, {
			"id" : "410184",
			"name" : "新郑市",
			"subItems" : []
		}, {
			"id" : "410185",
			"name" : "登封市",
			"subItems" : []
		} ]
	}, {
		"id" : "4102",
		"name" : "开封市",
		"subItems" : [ {
			"id" : "410201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410202",
			"name" : "龙亭区",
			"subItems" : []
		}, {
			"id" : "410203",
			"name" : "顺河区",
			"subItems" : []
		}, {
			"id" : "410204",
			"name" : "鼓楼区",
			"subItems" : []
		}, {
			"id" : "410205",
			"name" : "禹王台区",
			"subItems" : []
		}, {
			"id" : "410211",
			"name" : "金明区",
			"subItems" : []
		}, {
			"id" : "410221",
			"name" : "杞县",
			"subItems" : []
		}, {
			"id" : "410222",
			"name" : "通许县",
			"subItems" : []
		}, {
			"id" : "410223",
			"name" : "尉氏县",
			"subItems" : []
		}, {
			"id" : "410224",
			"name" : "开封县",
			"subItems" : []
		}, {
			"id" : "410225",
			"name" : "兰考县",
			"subItems" : []
		} ]
	}, {
		"id" : "4103",
		"name" : "洛阳市",
		"subItems" : [ {
			"id" : "410301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410302",
			"name" : "老城区",
			"subItems" : []
		}, {
			"id" : "410303",
			"name" : "西工区",
			"subItems" : []
		}, {
			"id" : "410304",
			"name" : "廛河回族区",
			"subItems" : []
		}, {
			"id" : "410305",
			"name" : "涧西区",
			"subItems" : []
		}, {
			"id" : "410306",
			"name" : "吉利区",
			"subItems" : []
		}, {
			"id" : "410307",
			"name" : "洛龙区",
			"subItems" : []
		}, {
			"id" : "410322",
			"name" : "孟津县",
			"subItems" : []
		}, {
			"id" : "410323",
			"name" : "新安县",
			"subItems" : []
		}, {
			"id" : "410324",
			"name" : "栾川县",
			"subItems" : []
		}, {
			"id" : "410325",
			"name" : "嵩县",
			"subItems" : []
		}, {
			"id" : "410326",
			"name" : "汝阳县",
			"subItems" : []
		}, {
			"id" : "410327",
			"name" : "宜阳县",
			"subItems" : []
		}, {
			"id" : "410328",
			"name" : "洛宁县",
			"subItems" : []
		}, {
			"id" : "410329",
			"name" : "伊川县",
			"subItems" : []
		}, {
			"id" : "410381",
			"name" : "偃师市",
			"subItems" : []
		} ]
	}, {
		"id" : "4104",
		"name" : "平顶山市",
		"subItems" : [ {
			"id" : "410401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410402",
			"name" : "新华区",
			"subItems" : []
		}, {
			"id" : "410403",
			"name" : "卫东区",
			"subItems" : []
		}, {
			"id" : "410404",
			"name" : "石龙区",
			"subItems" : []
		}, {
			"id" : "410411",
			"name" : "湛河区",
			"subItems" : []
		}, {
			"id" : "410421",
			"name" : "宝丰县",
			"subItems" : []
		}, {
			"id" : "410422",
			"name" : "叶 县",
			"subItems" : []
		}, {
			"id" : "410423",
			"name" : "鲁山县",
			"subItems" : []
		}, {
			"id" : "410425",
			"name" : "郏 县",
			"subItems" : []
		}, {
			"id" : "410481",
			"name" : "舞钢市",
			"subItems" : []
		}, {
			"id" : "410482",
			"name" : "汝州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4105",
		"name" : "安阳市",
		"subItems" : [ {
			"id" : "410501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410502",
			"name" : "文峰区",
			"subItems" : []
		}, {
			"id" : "410503",
			"name" : "北关区",
			"subItems" : []
		}, {
			"id" : "410505",
			"name" : "殷都区",
			"subItems" : []
		}, {
			"id" : "410506",
			"name" : "龙安区",
			"subItems" : []
		}, {
			"id" : "410522",
			"name" : "安阳县",
			"subItems" : []
		}, {
			"id" : "410523",
			"name" : "汤阴县",
			"subItems" : []
		}, {
			"id" : "410526",
			"name" : "滑县",
			"subItems" : []
		}, {
			"id" : "410527",
			"name" : "内黄县",
			"subItems" : []
		}, {
			"id" : "410581",
			"name" : "林州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4106",
		"name" : "鹤壁市",
		"subItems" : [ {
			"id" : "410601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410602",
			"name" : "鹤山区",
			"subItems" : []
		}, {
			"id" : "410603",
			"name" : "山城区",
			"subItems" : []
		}, {
			"id" : "410611",
			"name" : "淇滨区",
			"subItems" : []
		}, {
			"id" : "410621",
			"name" : "浚县",
			"subItems" : []
		}, {
			"id" : "410622",
			"name" : "淇县",
			"subItems" : []
		} ]
	}, {
		"id" : "4107",
		"name" : "新乡市",
		"subItems" : [ {
			"id" : "410701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410702",
			"name" : "红旗区",
			"subItems" : []
		}, {
			"id" : "410703",
			"name" : "卫滨区",
			"subItems" : []
		}, {
			"id" : "410704",
			"name" : "凤泉区",
			"subItems" : []
		}, {
			"id" : "410711",
			"name" : "牧野区",
			"subItems" : []
		}, {
			"id" : "410721",
			"name" : "新乡县",
			"subItems" : []
		}, {
			"id" : "410724",
			"name" : "获嘉县",
			"subItems" : []
		}, {
			"id" : "410725",
			"name" : "原阳县",
			"subItems" : []
		}, {
			"id" : "410726",
			"name" : "延津县",
			"subItems" : []
		}, {
			"id" : "410727",
			"name" : "封丘县",
			"subItems" : []
		}, {
			"id" : "410728",
			"name" : "长垣县",
			"subItems" : []
		}, {
			"id" : "410781",
			"name" : "卫辉市",
			"subItems" : []
		}, {
			"id" : "410782",
			"name" : "辉县市",
			"subItems" : []
		} ]
	}, {
		"id" : "4108",
		"name" : "焦作市",
		"subItems" : [ {
			"id" : "410801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410802",
			"name" : "解放区",
			"subItems" : []
		}, {
			"id" : "410803",
			"name" : "中站区",
			"subItems" : []
		}, {
			"id" : "410804",
			"name" : "马村区",
			"subItems" : []
		}, {
			"id" : "410811",
			"name" : "山阳区",
			"subItems" : []
		}, {
			"id" : "410821",
			"name" : "修武县",
			"subItems" : []
		}, {
			"id" : "410822",
			"name" : "博爱县",
			"subItems" : []
		}, {
			"id" : "410823",
			"name" : "武陟县",
			"subItems" : []
		}, {
			"id" : "410825",
			"name" : "温县",
			"subItems" : []
		}, {
			"id" : "410881",
			"name" : "济源市",
			"subItems" : []
		}, {
			"id" : "410882",
			"name" : "沁阳市",
			"subItems" : []
		}, {
			"id" : "410883",
			"name" : "孟州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4109",
		"name" : "濮阳市",
		"subItems" : [ {
			"id" : "410901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "410902",
			"name" : "华龙区",
			"subItems" : []
		}, {
			"id" : "410922",
			"name" : "清丰县",
			"subItems" : []
		}, {
			"id" : "410923",
			"name" : "南乐县",
			"subItems" : []
		}, {
			"id" : "410926",
			"name" : "范县",
			"subItems" : []
		}, {
			"id" : "410927",
			"name" : "台前县",
			"subItems" : []
		}, {
			"id" : "410928",
			"name" : "濮阳县",
			"subItems" : []
		} ]
	}, {
		"id" : "4110",
		"name" : "许昌市",
		"subItems" : [ {
			"id" : "411001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411002",
			"name" : "魏都区",
			"subItems" : []
		}, {
			"id" : "411023",
			"name" : "许昌县",
			"subItems" : []
		}, {
			"id" : "411024",
			"name" : "鄢陵县",
			"subItems" : []
		}, {
			"id" : "411025",
			"name" : "襄城县",
			"subItems" : []
		}, {
			"id" : "411081",
			"name" : "禹州市",
			"subItems" : []
		}, {
			"id" : "411082",
			"name" : "长葛市",
			"subItems" : []
		} ]
	}, {
		"id" : "4111",
		"name" : "漯河市",
		"subItems" : [ {
			"id" : "411101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411102",
			"name" : "源汇区",
			"subItems" : []
		}, {
			"id" : "411103",
			"name" : "郾城区",
			"subItems" : []
		}, {
			"id" : "411104",
			"name" : "召陵区",
			"subItems" : []
		}, {
			"id" : "411121",
			"name" : "舞阳县",
			"subItems" : []
		}, {
			"id" : "411122",
			"name" : "临颖县",
			"subItems" : []
		} ]
	}, {
		"id" : "4112",
		"name" : "三门峡市",
		"subItems" : [ {
			"id" : "411201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411202",
			"name" : "湖滨区",
			"subItems" : []
		}, {
			"id" : "411221",
			"name" : "渑池县",
			"subItems" : []
		}, {
			"id" : "411222",
			"name" : "陕县",
			"subItems" : []
		}, {
			"id" : "411224",
			"name" : "卢氏县",
			"subItems" : []
		}, {
			"id" : "411281",
			"name" : "义马市",
			"subItems" : []
		}, {
			"id" : "411282",
			"name" : "灵宝市",
			"subItems" : []
		} ]
	}, {
		"id" : "4113",
		"name" : "南阳市",
		"subItems" : [ {
			"id" : "411301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411302",
			"name" : "宛城区",
			"subItems" : []
		}, {
			"id" : "411303",
			"name" : "卧龙区",
			"subItems" : []
		}, {
			"id" : "411321",
			"name" : "南召县",
			"subItems" : []
		}, {
			"id" : "411322",
			"name" : "方城县",
			"subItems" : []
		}, {
			"id" : "411323",
			"name" : "西峡县",
			"subItems" : []
		}, {
			"id" : "411324",
			"name" : "镇平县",
			"subItems" : []
		}, {
			"id" : "411325",
			"name" : "内乡县",
			"subItems" : []
		}, {
			"id" : "411326",
			"name" : "淅川县",
			"subItems" : []
		}, {
			"id" : "411327",
			"name" : "社旗县",
			"subItems" : []
		}, {
			"id" : "411328",
			"name" : "唐河县",
			"subItems" : []
		}, {
			"id" : "411329",
			"name" : "新野县",
			"subItems" : []
		}, {
			"id" : "411330",
			"name" : "桐柏县",
			"subItems" : []
		}, {
			"id" : "411381",
			"name" : "邓州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4114",
		"name" : "商丘市",
		"subItems" : [ {
			"id" : "411401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411402",
			"name" : "梁园区",
			"subItems" : []
		}, {
			"id" : "411403",
			"name" : "睢阳区",
			"subItems" : []
		}, {
			"id" : "411421",
			"name" : "民权县",
			"subItems" : []
		}, {
			"id" : "411422",
			"name" : "睢县",
			"subItems" : []
		}, {
			"id" : "411423",
			"name" : "宁陵县",
			"subItems" : []
		}, {
			"id" : "411424",
			"name" : "柘城县",
			"subItems" : []
		}, {
			"id" : "411425",
			"name" : "虞城县",
			"subItems" : []
		}, {
			"id" : "411426",
			"name" : "夏邑县",
			"subItems" : []
		}, {
			"id" : "411481",
			"name" : "永城市",
			"subItems" : []
		} ]
	}, {
		"id" : "4115",
		"name" : "信阳市",
		"subItems" : [ {
			"id" : "411501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411502",
			"name" : "浉河区",
			"subItems" : []
		}, {
			"id" : "411503",
			"name" : "平桥区",
			"subItems" : []
		}, {
			"id" : "411521",
			"name" : "罗山县",
			"subItems" : []
		}, {
			"id" : "411522",
			"name" : "光山县",
			"subItems" : []
		}, {
			"id" : "411523",
			"name" : "新县",
			"subItems" : []
		}, {
			"id" : "411524",
			"name" : "商城县",
			"subItems" : []
		}, {
			"id" : "411525",
			"name" : "固始县",
			"subItems" : []
		}, {
			"id" : "411526",
			"name" : "潢川县",
			"subItems" : []
		}, {
			"id" : "411527",
			"name" : "淮滨县",
			"subItems" : []
		}, {
			"id" : "411528",
			"name" : "息县",
			"subItems" : []
		} ]
	}, {
		"id" : "4116",
		"name" : "周口市",
		"subItems" : [ {
			"id" : "411601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411602",
			"name" : "川汇区",
			"subItems" : []
		}, {
			"id" : "411621",
			"name" : "扶沟县",
			"subItems" : []
		}, {
			"id" : "411622",
			"name" : "西华县",
			"subItems" : []
		}, {
			"id" : "411623",
			"name" : "商水县",
			"subItems" : []
		}, {
			"id" : "411624",
			"name" : "沈丘县",
			"subItems" : []
		}, {
			"id" : "411625",
			"name" : "郸城县",
			"subItems" : []
		}, {
			"id" : "411626",
			"name" : "淮阳县",
			"subItems" : []
		}, {
			"id" : "411627",
			"name" : "太康县",
			"subItems" : []
		}, {
			"id" : "411628",
			"name" : "鹿邑县",
			"subItems" : []
		}, {
			"id" : "411681",
			"name" : "项城市",
			"subItems" : []
		} ]
	}, {
		"id" : "4117",
		"name" : "驻马店市",
		"subItems" : [ {
			"id" : "411701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "411702",
			"name" : "驿城区",
			"subItems" : []
		}, {
			"id" : "411721",
			"name" : "西平县",
			"subItems" : []
		}, {
			"id" : "411722",
			"name" : "上蔡县",
			"subItems" : []
		}, {
			"id" : "411723",
			"name" : "平舆县",
			"subItems" : []
		}, {
			"id" : "411724",
			"name" : "正阳县",
			"subItems" : []
		}, {
			"id" : "411725",
			"name" : "确山县",
			"subItems" : []
		}, {
			"id" : "411726",
			"name" : "泌阳县",
			"subItems" : []
		}, {
			"id" : "411727",
			"name" : "汝南县",
			"subItems" : []
		}, {
			"id" : "411728",
			"name" : "遂平县",
			"subItems" : []
		}, {
			"id" : "411729",
			"name" : "新蔡县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "42",
	"name" : "湖北省",
	"subItems" : [ {
		"id" : "4201",
		"name" : "武汉市",
		"subItems" : [ {
			"id" : "420101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420102",
			"name" : "江岸区",
			"subItems" : []
		}, {
			"id" : "420103",
			"name" : "江汉区",
			"subItems" : []
		}, {
			"id" : "420104",
			"name" : "硚口区",
			"subItems" : []
		}, {
			"id" : "420105",
			"name" : "汉阳区",
			"subItems" : []
		}, {
			"id" : "420106",
			"name" : "武昌区",
			"subItems" : []
		}, {
			"id" : "420107",
			"name" : "青山区",
			"subItems" : []
		}, {
			"id" : "420111",
			"name" : "洪山区",
			"subItems" : []
		}, {
			"id" : "420112",
			"name" : "东西湖区",
			"subItems" : []
		}, {
			"id" : "420113",
			"name" : "汉南区",
			"subItems" : []
		}, {
			"id" : "420114",
			"name" : "蔡甸区",
			"subItems" : []
		}, {
			"id" : "420115",
			"name" : "江夏区",
			"subItems" : []
		}, {
			"id" : "420116",
			"name" : "黄陂区",
			"subItems" : []
		}, {
			"id" : "420117",
			"name" : "武汉市新洲区",
			"subItems" : []
		} ]
	}, {
		"id" : "4202",
		"name" : "黄石市",
		"subItems" : [ {
			"id" : "420201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420202",
			"name" : "黄石港区",
			"subItems" : []
		}, {
			"id" : "420203",
			"name" : "西塞山区",
			"subItems" : []
		}, {
			"id" : "420204",
			"name" : "下陆区",
			"subItems" : []
		}, {
			"id" : "420205",
			"name" : "铁山区",
			"subItems" : []
		}, {
			"id" : "420222",
			"name" : "阳新县",
			"subItems" : []
		}, {
			"id" : "420281",
			"name" : "大冶市",
			"subItems" : []
		} ]
	}, {
		"id" : "4203",
		"name" : "十堰市",
		"subItems" : [ {
			"id" : "420301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420302",
			"name" : "茅箭区",
			"subItems" : []
		}, {
			"id" : "420303",
			"name" : "张湾区",
			"subItems" : []
		}, {
			"id" : "420321",
			"name" : "郧县",
			"subItems" : []
		}, {
			"id" : "420322",
			"name" : "郧西县",
			"subItems" : []
		}, {
			"id" : "420323",
			"name" : "竹山县",
			"subItems" : []
		}, {
			"id" : "420324",
			"name" : "竹溪县",
			"subItems" : []
		}, {
			"id" : "420325",
			"name" : "房县",
			"subItems" : []
		}, {
			"id" : "420381",
			"name" : "丹江口市",
			"subItems" : []
		} ]
	}, {
		"id" : "4205",
		"name" : "宜昌市",
		"subItems" : [ {
			"id" : "420501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420502",
			"name" : "西陵区",
			"subItems" : []
		}, {
			"id" : "420503",
			"name" : "伍家岗区",
			"subItems" : []
		}, {
			"id" : "420504",
			"name" : "点军区",
			"subItems" : []
		}, {
			"id" : "420505",
			"name" : "猇亭区",
			"subItems" : []
		}, {
			"id" : "420506",
			"name" : "夷陵区",
			"subItems" : []
		}, {
			"id" : "420525",
			"name" : "远安县",
			"subItems" : []
		}, {
			"id" : "420526",
			"name" : "兴山县",
			"subItems" : []
		}, {
			"id" : "420527",
			"name" : "秭归县",
			"subItems" : []
		}, {
			"id" : "420528",
			"name" : "长阳土家族自治县",
			"subItems" : []
		}, {
			"id" : "420529",
			"name" : "五峰土家族自治县",
			"subItems" : []
		}, {
			"id" : "420581",
			"name" : "宜都市",
			"subItems" : []
		}, {
			"id" : "420582",
			"name" : "当阳市",
			"subItems" : []
		}, {
			"id" : "420583",
			"name" : "枝江市",
			"subItems" : []
		} ]
	}, {
		"id" : "4206",
		"name" : "襄樊市",
		"subItems" : [ {
			"id" : "420601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420602",
			"name" : "襄城区",
			"subItems" : []
		}, {
			"id" : "420606",
			"name" : "樊城区",
			"subItems" : []
		}, {
			"id" : "420607",
			"name" : "襄阳区",
			"subItems" : []
		}, {
			"id" : "420624",
			"name" : "南漳县",
			"subItems" : []
		}, {
			"id" : "420625",
			"name" : "谷城县",
			"subItems" : []
		}, {
			"id" : "420626",
			"name" : "保康县",
			"subItems" : []
		}, {
			"id" : "420682",
			"name" : "老河口市",
			"subItems" : []
		}, {
			"id" : "420683",
			"name" : "枣阳市",
			"subItems" : []
		}, {
			"id" : "420684",
			"name" : "宜城市",
			"subItems" : []
		} ]
	}, {
		"id" : "4207",
		"name" : "鄂州市",
		"subItems" : [ {
			"id" : "420701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420702",
			"name" : "粱子湖区",
			"subItems" : []
		}, {
			"id" : "420703",
			"name" : "华容区",
			"subItems" : []
		}, {
			"id" : "420704",
			"name" : "鄂城区",
			"subItems" : []
		} ]
	}, {
		"id" : "4208",
		"name" : "荆门市",
		"subItems" : [ {
			"id" : "420801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420802",
			"name" : "东宝区",
			"subItems" : []
		}, {
			"id" : "420804",
			"name" : "掇刀区",
			"subItems" : []
		}, {
			"id" : "420821",
			"name" : "京山县",
			"subItems" : []
		}, {
			"id" : "420822",
			"name" : "沙洋县",
			"subItems" : []
		}, {
			"id" : "420881",
			"name" : "钟祥市",
			"subItems" : []
		} ]
	}, {
		"id" : "4209",
		"name" : "孝感市",
		"subItems" : [ {
			"id" : "420901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "420902",
			"name" : "孝南区",
			"subItems" : []
		}, {
			"id" : "420921",
			"name" : "孝昌县",
			"subItems" : []
		}, {
			"id" : "420922",
			"name" : "大悟县",
			"subItems" : []
		}, {
			"id" : "420923",
			"name" : "云梦县",
			"subItems" : []
		}, {
			"id" : "420981",
			"name" : "应城市",
			"subItems" : []
		}, {
			"id" : "420982",
			"name" : "安陆市",
			"subItems" : []
		}, {
			"id" : "420984",
			"name" : "汉川市",
			"subItems" : []
		} ]
	}, {
		"id" : "4210",
		"name" : "荆州市",
		"subItems" : [ {
			"id" : "421001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "421002",
			"name" : "沙市区",
			"subItems" : []
		}, {
			"id" : "421003",
			"name" : "荆州区",
			"subItems" : []
		}, {
			"id" : "421022",
			"name" : "公安县",
			"subItems" : []
		}, {
			"id" : "421023",
			"name" : "监利县",
			"subItems" : []
		}, {
			"id" : "421024",
			"name" : "江陵县",
			"subItems" : []
		}, {
			"id" : "421081",
			"name" : "石首市",
			"subItems" : []
		}, {
			"id" : "421083",
			"name" : "洪湖市",
			"subItems" : []
		}, {
			"id" : "421087",
			"name" : "松滋市",
			"subItems" : []
		} ]
	}, {
		"id" : "4211",
		"name" : "黄冈市",
		"subItems" : [ {
			"id" : "421101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "421102",
			"name" : "黄州区",
			"subItems" : []
		}, {
			"id" : "421121",
			"name" : "团风县",
			"subItems" : []
		}, {
			"id" : "421122",
			"name" : "红安县",
			"subItems" : []
		}, {
			"id" : "421123",
			"name" : "罗田县",
			"subItems" : []
		}, {
			"id" : "421124",
			"name" : "英山县",
			"subItems" : []
		}, {
			"id" : "421125",
			"name" : "浠水县",
			"subItems" : []
		}, {
			"id" : "421126",
			"name" : "蕲春县",
			"subItems" : []
		}, {
			"id" : "421127",
			"name" : "黄梅县",
			"subItems" : []
		}, {
			"id" : "421181",
			"name" : "麻城市",
			"subItems" : []
		}, {
			"id" : "421182",
			"name" : "武穴市",
			"subItems" : []
		} ]
	}, {
		"id" : "4212",
		"name" : "咸宁市",
		"subItems" : [ {
			"id" : "421201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "421202",
			"name" : "咸安区",
			"subItems" : []
		}, {
			"id" : "421221",
			"name" : "嘉鱼县",
			"subItems" : []
		}, {
			"id" : "421222",
			"name" : "通城县",
			"subItems" : []
		}, {
			"id" : "421223",
			"name" : "崇阳县",
			"subItems" : []
		}, {
			"id" : "421224",
			"name" : "通山县",
			"subItems" : []
		}, {
			"id" : "421281",
			"name" : "赤壁市",
			"subItems" : []
		} ]
	}, {
		"id" : "4213",
		"name" : "随州市",
		"subItems" : [ {
			"id" : "421301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "421302",
			"name" : "曾都区",
			"subItems" : []
		}, {
			"id" : "421381",
			"name" : "广水市",
			"subItems" : []
		} ]
	}, {
		"id" : "4228",
		"name" : "恩施州",
		"subItems" : [ {
			"id" : "422801",
			"name" : "恩施市",
			"subItems" : []
		}, {
			"id" : "422802",
			"name" : "利川市",
			"subItems" : []
		}, {
			"id" : "422822",
			"name" : "建始县",
			"subItems" : []
		}, {
			"id" : "422823",
			"name" : "巴东县",
			"subItems" : []
		}, {
			"id" : "422825",
			"name" : "宣恩县",
			"subItems" : []
		}, {
			"id" : "422826",
			"name" : "咸丰县",
			"subItems" : []
		}, {
			"id" : "422827",
			"name" : "来凤县",
			"subItems" : []
		}, {
			"id" : "422828",
			"name" : "鹤峰县",
			"subItems" : []
		} ]
	}, {
		"id" : "4290",
		"name" : "省直辖行政单位",
		"subItems" : [ {
			"id" : "429004",
			"name" : "仙桃市",
			"subItems" : []
		}, {
			"id" : "429005",
			"name" : "潜江市",
			"subItems" : []
		}, {
			"id" : "429006",
			"name" : "天门市",
			"subItems" : []
		}, {
			"id" : "429021",
			"name" : "神农架林区",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "43",
	"name" : "湖南省",
	"subItems" : [ {
		"id" : "4301",
		"name" : "长沙市",
		"subItems" : [ {
			"id" : "430101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430102",
			"name" : "芙蓉区",
			"subItems" : []
		}, {
			"id" : "430103",
			"name" : "天心区",
			"subItems" : []
		}, {
			"id" : "430104",
			"name" : "岳麓区",
			"subItems" : []
		}, {
			"id" : "430105",
			"name" : "开福区",
			"subItems" : []
		}, {
			"id" : "430111",
			"name" : "雨花区",
			"subItems" : []
		}, {
			"id" : "430121",
			"name" : "长沙县",
			"subItems" : []
		}, {
			"id" : "430122",
			"name" : "望城县",
			"subItems" : []
		}, {
			"id" : "430124",
			"name" : "宁乡县",
			"subItems" : []
		}, {
			"id" : "430181",
			"name" : "浏阳市",
			"subItems" : []
		} ]
	}, {
		"id" : "4302",
		"name" : "株洲市",
		"subItems" : [ {
			"id" : "430201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430202",
			"name" : "荷塘区",
			"subItems" : []
		}, {
			"id" : "430203",
			"name" : "芦淞区",
			"subItems" : []
		}, {
			"id" : "430204",
			"name" : "石峰区",
			"subItems" : []
		}, {
			"id" : "430211",
			"name" : "天元区",
			"subItems" : []
		}, {
			"id" : "430221",
			"name" : "株洲县",
			"subItems" : []
		}, {
			"id" : "430223",
			"name" : "攸县",
			"subItems" : []
		}, {
			"id" : "430224",
			"name" : "茶陵县",
			"subItems" : []
		}, {
			"id" : "430225",
			"name" : "炎陵县",
			"subItems" : []
		}, {
			"id" : "430281",
			"name" : "醴陵市",
			"subItems" : []
		} ]
	}, {
		"id" : "4303",
		"name" : "湘潭市",
		"subItems" : [ {
			"id" : "430301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430302",
			"name" : "雨湖区",
			"subItems" : []
		}, {
			"id" : "430304",
			"name" : "岳塘区",
			"subItems" : []
		}, {
			"id" : "430321",
			"name" : "湘潭县",
			"subItems" : []
		}, {
			"id" : "430381",
			"name" : "湘乡市",
			"subItems" : []
		}, {
			"id" : "430382",
			"name" : "韶山市",
			"subItems" : []
		} ]
	}, {
		"id" : "4304",
		"name" : "衡阳市",
		"subItems" : [ {
			"id" : "430401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430405",
			"name" : "珠晖区",
			"subItems" : []
		}, {
			"id" : "430406",
			"name" : "雁峰区",
			"subItems" : []
		}, {
			"id" : "430407",
			"name" : "石鼓区",
			"subItems" : []
		}, {
			"id" : "430408",
			"name" : "蒸湘区",
			"subItems" : []
		}, {
			"id" : "430412",
			"name" : "南岳区",
			"subItems" : []
		}, {
			"id" : "430421",
			"name" : "衡阳县",
			"subItems" : []
		}, {
			"id" : "430422",
			"name" : "衡南县",
			"subItems" : []
		}, {
			"id" : "430423",
			"name" : "衡山县",
			"subItems" : []
		}, {
			"id" : "430424",
			"name" : "衡东县",
			"subItems" : []
		}, {
			"id" : "430426",
			"name" : "祁东县",
			"subItems" : []
		}, {
			"id" : "430481",
			"name" : "耒阳市",
			"subItems" : []
		}, {
			"id" : "430482",
			"name" : "常宁市",
			"subItems" : []
		} ]
	}, {
		"id" : "4305",
		"name" : "邵阳市",
		"subItems" : [ {
			"id" : "430501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430502",
			"name" : "双清区",
			"subItems" : []
		}, {
			"id" : "430503",
			"name" : "大祥区",
			"subItems" : []
		}, {
			"id" : "430511",
			"name" : "北塔区",
			"subItems" : []
		}, {
			"id" : "430521",
			"name" : "邵东县",
			"subItems" : []
		}, {
			"id" : "430522",
			"name" : "新邵县",
			"subItems" : []
		}, {
			"id" : "430523",
			"name" : "邵阳县",
			"subItems" : []
		}, {
			"id" : "430524",
			"name" : "隆回县",
			"subItems" : []
		}, {
			"id" : "430525",
			"name" : "洞口县",
			"subItems" : []
		}, {
			"id" : "430527",
			"name" : "绥宁县",
			"subItems" : []
		}, {
			"id" : "430528",
			"name" : "新宁县",
			"subItems" : []
		}, {
			"id" : "430529",
			"name" : "城步苗族自治县",
			"subItems" : []
		}, {
			"id" : "430581",
			"name" : "武冈市",
			"subItems" : []
		} ]
	}, {
		"id" : "4306",
		"name" : "岳阳市",
		"subItems" : [ {
			"id" : "430601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430602",
			"name" : "岳阳楼区",
			"subItems" : []
		}, {
			"id" : "430603",
			"name" : "云溪区",
			"subItems" : []
		}, {
			"id" : "430611",
			"name" : "君山区",
			"subItems" : []
		}, {
			"id" : "430621",
			"name" : "岳阳县",
			"subItems" : []
		}, {
			"id" : "430623",
			"name" : "华容县",
			"subItems" : []
		}, {
			"id" : "430624",
			"name" : "湘阴县",
			"subItems" : []
		}, {
			"id" : "430626",
			"name" : "平江县",
			"subItems" : []
		}, {
			"id" : "430681",
			"name" : "汩罗市",
			"subItems" : []
		}, {
			"id" : "430682",
			"name" : "临湘市",
			"subItems" : []
		} ]
	}, {
		"id" : "4307",
		"name" : "常德市",
		"subItems" : [ {
			"id" : "430701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430702",
			"name" : "武陵区",
			"subItems" : []
		}, {
			"id" : "430703",
			"name" : "鼎城区",
			"subItems" : []
		}, {
			"id" : "430721",
			"name" : "安乡县",
			"subItems" : []
		}, {
			"id" : "430722",
			"name" : "汉寿县",
			"subItems" : []
		}, {
			"id" : "430723",
			"name" : "澧县",
			"subItems" : []
		}, {
			"id" : "430724",
			"name" : "临澧县",
			"subItems" : []
		}, {
			"id" : "430725",
			"name" : "桃源县",
			"subItems" : []
		}, {
			"id" : "430726",
			"name" : "石门县",
			"subItems" : []
		}, {
			"id" : "430781",
			"name" : "津市市",
			"subItems" : []
		} ]
	}, {
		"id" : "4308",
		"name" : "张家界市",
		"subItems" : [ {
			"id" : "430801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430802",
			"name" : "永定区",
			"subItems" : []
		}, {
			"id" : "430811",
			"name" : "武陵源区",
			"subItems" : []
		}, {
			"id" : "430821",
			"name" : "慈利县",
			"subItems" : []
		}, {
			"id" : "430822",
			"name" : "桑植县",
			"subItems" : []
		} ]
	}, {
		"id" : "4309",
		"name" : "益阳市",
		"subItems" : [ {
			"id" : "430901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "430902",
			"name" : "资阳区",
			"subItems" : []
		}, {
			"id" : "430903",
			"name" : "赫山区",
			"subItems" : []
		}, {
			"id" : "430921",
			"name" : "南县",
			"subItems" : []
		}, {
			"id" : "430922",
			"name" : "桃江县",
			"subItems" : []
		}, {
			"id" : "430923",
			"name" : "安化县",
			"subItems" : []
		}, {
			"id" : "430981",
			"name" : "沅江市",
			"subItems" : []
		} ]
	}, {
		"id" : "4310",
		"name" : "郴州市",
		"subItems" : [ {
			"id" : "431001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "431002",
			"name" : "北湖区",
			"subItems" : []
		}, {
			"id" : "431003",
			"name" : "苏仙区",
			"subItems" : []
		}, {
			"id" : "431021",
			"name" : "桂阳县",
			"subItems" : []
		}, {
			"id" : "431022",
			"name" : "宜章县",
			"subItems" : []
		}, {
			"id" : "431023",
			"name" : "永兴县",
			"subItems" : []
		}, {
			"id" : "431024",
			"name" : "嘉禾县",
			"subItems" : []
		}, {
			"id" : "431025",
			"name" : "临武县",
			"subItems" : []
		}, {
			"id" : "431026",
			"name" : "汝城县",
			"subItems" : []
		}, {
			"id" : "431027",
			"name" : "桂东县",
			"subItems" : []
		}, {
			"id" : "431028",
			"name" : "安仁县",
			"subItems" : []
		}, {
			"id" : "431081",
			"name" : "资兴市",
			"subItems" : []
		} ]
	}, {
		"id" : "4311",
		"name" : "永州市",
		"subItems" : [ {
			"id" : "431101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "431102",
			"name" : "零陵区",
			"subItems" : []
		}, {
			"id" : "431103",
			"name" : "冷水滩区",
			"subItems" : []
		}, {
			"id" : "431121",
			"name" : "祁阳县",
			"subItems" : []
		}, {
			"id" : "431122",
			"name" : "东安县",
			"subItems" : []
		}, {
			"id" : "431123",
			"name" : "双牌县",
			"subItems" : []
		}, {
			"id" : "431124",
			"name" : "道县",
			"subItems" : []
		}, {
			"id" : "431125",
			"name" : "江永县",
			"subItems" : []
		}, {
			"id" : "431126",
			"name" : "宁远县",
			"subItems" : []
		}, {
			"id" : "431127",
			"name" : "蓝山县",
			"subItems" : []
		}, {
			"id" : "431128",
			"name" : "新田县",
			"subItems" : []
		}, {
			"id" : "431129",
			"name" : "江华县",
			"subItems" : []
		} ]
	}, {
		"id" : "4312",
		"name" : "怀化市",
		"subItems" : [ {
			"id" : "431201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "431202",
			"name" : "鹤城区",
			"subItems" : []
		}, {
			"id" : "431221",
			"name" : "中方县",
			"subItems" : []
		}, {
			"id" : "431222",
			"name" : "沅陵县",
			"subItems" : []
		}, {
			"id" : "431223",
			"name" : "辰溪县",
			"subItems" : []
		}, {
			"id" : "431224",
			"name" : "溆浦县",
			"subItems" : []
		}, {
			"id" : "431225",
			"name" : "会同县",
			"subItems" : []
		}, {
			"id" : "431226",
			"name" : "麻阳苗族自治县",
			"subItems" : []
		}, {
			"id" : "431227",
			"name" : "新晃侗族自治县",
			"subItems" : []
		}, {
			"id" : "431228",
			"name" : "芷江侗族自治县",
			"subItems" : []
		}, {
			"id" : "431229",
			"name" : "靖州苗族侗族县",
			"subItems" : []
		}, {
			"id" : "431230",
			"name" : "通道侗族自治县",
			"subItems" : []
		}, {
			"id" : "431281",
			"name" : "洪江市",
			"subItems" : []
		} ]
	}, {
		"id" : "4313",
		"name" : "娄底市",
		"subItems" : [ {
			"id" : "431301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "431302",
			"name" : "娄星区",
			"subItems" : []
		}, {
			"id" : "431321",
			"name" : "双峰县",
			"subItems" : []
		}, {
			"id" : "431322",
			"name" : "新化县",
			"subItems" : []
		}, {
			"id" : "431381",
			"name" : "冷水江市",
			"subItems" : []
		}, {
			"id" : "431382",
			"name" : "涟源市",
			"subItems" : []
		} ]
	}, {
		"id" : "4331",
		"name" : "湘西土家族苗族自治州",
		"subItems" : [ {
			"id" : "433101",
			"name" : "吉首市",
			"subItems" : []
		}, {
			"id" : "433122",
			"name" : "泸溪县",
			"subItems" : []
		}, {
			"id" : "433123",
			"name" : "凤凰县",
			"subItems" : []
		}, {
			"id" : "433124",
			"name" : "花垣县",
			"subItems" : []
		}, {
			"id" : "433125",
			"name" : "保靖县",
			"subItems" : []
		}, {
			"id" : "433126",
			"name" : "古丈县",
			"subItems" : []
		}, {
			"id" : "433127",
			"name" : "永顺县",
			"subItems" : []
		}, {
			"id" : "433130",
			"name" : "龙山县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "44",
	"name" : "广东省",
	"subItems" : [ {
		"id" : "4401",
		"name" : "广州市",
		"subItems" : [ {
			"id" : "440101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440103",
			"name" : "荔湾区",
			"subItems" : []
		}, {
			"id" : "440104",
			"name" : "越秀区",
			"subItems" : []
		}, {
			"id" : "440105",
			"name" : "海珠区",
			"subItems" : []
		}, {
			"id" : "440106",
			"name" : "天河区",
			"subItems" : []
		}, {
			"id" : "440111",
			"name" : "白云区",
			"subItems" : []
		}, {
			"id" : "440112",
			"name" : "黄埔区",
			"subItems" : []
		}, {
			"id" : "440113",
			"name" : "番禺区",
			"subItems" : []
		}, {
			"id" : "440114",
			"name" : "花都区",
			"subItems" : []
		}, {
			"id" : "440115",
			"name" : "南沙区",
			"subItems" : []
		}, {
			"id" : "440116",
			"name" : "萝岗区",
			"subItems" : []
		}, {
			"id" : "440183",
			"name" : "增城市",
			"subItems" : []
		}, {
			"id" : "440184",
			"name" : "从化市",
			"subItems" : []
		} ]
	}, {
		"id" : "4402",
		"name" : "韶关市",
		"subItems" : [ {
			"id" : "440201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440203",
			"name" : "武江区",
			"subItems" : []
		}, {
			"id" : "440204",
			"name" : "浈江区",
			"subItems" : []
		}, {
			"id" : "440205",
			"name" : "曲江区",
			"subItems" : []
		}, {
			"id" : "440222",
			"name" : "始兴县",
			"subItems" : []
		}, {
			"id" : "440224",
			"name" : "仁化县",
			"subItems" : []
		}, {
			"id" : "440229",
			"name" : "翁源县",
			"subItems" : []
		}, {
			"id" : "440232",
			"name" : "乳源瑶族自治县",
			"subItems" : []
		}, {
			"id" : "440233",
			"name" : "新丰县",
			"subItems" : []
		}, {
			"id" : "440281",
			"name" : "乐昌市",
			"subItems" : []
		}, {
			"id" : "440282",
			"name" : "南雄市",
			"subItems" : []
		} ]
	}, {
		"id" : "4403",
		"name" : "深圳市",
		"subItems" : [ {
			"id" : "440301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440304",
			"name" : "福田区",
			"subItems" : []
		}, {
			"id" : "440303",
			"name" : "罗湖区",
			"subItems" : []
		}, {
			"id" : "440305",
			"name" : "南山区",
			"subItems" : []
		}, {
			"id" : "440308",
			"name" : "盐田区",
			"subItems" : []
		}, {
			"id" : "440306",
			"name" : "宝安区",
			"subItems" : []
		}, {
			"id" : "440307",
			"name" : "龙岗区",
			"subItems" : []
		}, {
			"id" : "440309",
			"name" : "龙华区",
			"subItems" : []
		}, {
			"id" : "440310",
			"name" : "光明区",
			"subItems" : []
		}, {
			"id" : "440311",
			"name" : "坪山区",
			"subItems" : []
		}, {
			"id" : "440312",
			"name" : "大鹏区",
			"subItems" : []
		} ]
	}, {
		"id" : "4404",
		"name" : "珠海市",
		"subItems" : [ {
			"id" : "440401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440402",
			"name" : "香洲区",
			"subItems" : []
		}, {
			"id" : "440403",
			"name" : "斗门区",
			"subItems" : []
		}, {
			"id" : "440404",
			"name" : "金湾区",
			"subItems" : []
		} ]
	}, {
		"id" : "4405",
		"name" : "汕头市",
		"subItems" : [ {
			"id" : "440501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440507",
			"name" : "龙湖区",
			"subItems" : []
		}, {
			"id" : "440511",
			"name" : "金平区",
			"subItems" : []
		}, {
			"id" : "440512",
			"name" : "濠江区",
			"subItems" : []
		}, {
			"id" : "440513",
			"name" : "潮阳区",
			"subItems" : []
		}, {
			"id" : "440514",
			"name" : "潮南区",
			"subItems" : []
		}, {
			"id" : "440515",
			"name" : "澄海区",
			"subItems" : []
		}, {
			"id" : "440523",
			"name" : "南澳县",
			"subItems" : []
		} ]
	}, {
		"id" : "4406",
		"name" : "佛山市",
		"subItems" : [ {
			"id" : "440601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440604",
			"name" : "禅城区",
			"subItems" : []
		}, {
			"id" : "440605",
			"name" : "南海区",
			"subItems" : []
		}, {
			"id" : "440606",
			"name" : "顺德区",
			"subItems" : []
		}, {
			"id" : "440607",
			"name" : "三水区",
			"subItems" : []
		}, {
			"id" : "440608",
			"name" : "高明区",
			"subItems" : []
		} ]
	}, {
		"id" : "4407",
		"name" : "江门市",
		"subItems" : [ {
			"id" : "440701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440703",
			"name" : "蓬江区",
			"subItems" : []
		}, {
			"id" : "440704",
			"name" : "江海区",
			"subItems" : []
		}, {
			"id" : "440705",
			"name" : "新会区",
			"subItems" : []
		}, {
			"id" : "440781",
			"name" : "台山市",
			"subItems" : []
		}, {
			"id" : "440783",
			"name" : "开平市",
			"subItems" : []
		}, {
			"id" : "440784",
			"name" : "鹤山市",
			"subItems" : []
		}, {
			"id" : "440785",
			"name" : "恩平市",
			"subItems" : []
		} ]
	}, {
		"id" : "4408",
		"name" : "湛江市",
		"subItems" : [ {
			"id" : "440801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440802",
			"name" : "湛江市赤坎区",
			"subItems" : []
		}, {
			"id" : "440803",
			"name" : "湛江市霞山区",
			"subItems" : []
		}, {
			"id" : "440804",
			"name" : "湛江市坡头区",
			"subItems" : []
		}, {
			"id" : "440811",
			"name" : "湛江市麻章区",
			"subItems" : []
		}, {
			"id" : "440823",
			"name" : "遂溪县",
			"subItems" : []
		}, {
			"id" : "440825",
			"name" : "徐闻县",
			"subItems" : []
		}, {
			"id" : "440881",
			"name" : "廉江市",
			"subItems" : []
		}, {
			"id" : "440882",
			"name" : "雷州市",
			"subItems" : []
		}, {
			"id" : "440883",
			"name" : "吴川市",
			"subItems" : []
		} ]
	}, {
		"id" : "4409",
		"name" : "茂名市",
		"subItems" : [ {
			"id" : "440901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "440902",
			"name" : "茂南区",
			"subItems" : []
		}, {
			"id" : "440903",
			"name" : "茂港区",
			"subItems" : []
		}, {
			"id" : "440923",
			"name" : "电白县",
			"subItems" : []
		}, {
			"id" : "440981",
			"name" : "高州市",
			"subItems" : []
		}, {
			"id" : "440982",
			"name" : "化州市",
			"subItems" : []
		}, {
			"id" : "440983",
			"name" : "信宜市",
			"subItems" : []
		} ]
	}, {
		"id" : "4412",
		"name" : "肇庆市",
		"subItems" : [ {
			"id" : "441201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441202",
			"name" : "端州区",
			"subItems" : []
		}, {
			"id" : "441203",
			"name" : "鼎湖区",
			"subItems" : []
		}, {
			"id" : "441223",
			"name" : "广宁县",
			"subItems" : []
		}, {
			"id" : "441224",
			"name" : "怀集县",
			"subItems" : []
		}, {
			"id" : "441225",
			"name" : "封开县",
			"subItems" : []
		}, {
			"id" : "441226",
			"name" : "德庆县",
			"subItems" : []
		}, {
			"id" : "441283",
			"name" : "高要市",
			"subItems" : []
		}, {
			"id" : "441284",
			"name" : "四会市",
			"subItems" : []
		} ]
	}, {
		"id" : "4413",
		"name" : "惠州市",
		"subItems" : [ {
			"id" : "441301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441302",
			"name" : "惠城区",
			"subItems" : []
		}, {
			"id" : "441303",
			"name" : "惠阳区",
			"subItems" : []
		}, {
			"id" : "441322",
			"name" : "博罗县",
			"subItems" : []
		}, {
			"id" : "441323",
			"name" : "惠东县",
			"subItems" : []
		}, {
			"id" : "441324",
			"name" : "龙门县",
			"subItems" : []
		} ]
	}, {
		"id" : "4414",
		"name" : "梅州市",
		"subItems" : [ {
			"id" : "441401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441402",
			"name" : "梅江区",
			"subItems" : []
		}, {
			"id" : "441421",
			"name" : "梅县",
			"subItems" : []
		}, {
			"id" : "441422",
			"name" : "大埔县",
			"subItems" : []
		}, {
			"id" : "441423",
			"name" : "丰顺县",
			"subItems" : []
		}, {
			"id" : "441424",
			"name" : "五华县",
			"subItems" : []
		}, {
			"id" : "441426",
			"name" : "平远县",
			"subItems" : []
		}, {
			"id" : "441427",
			"name" : "蕉岭县",
			"subItems" : []
		}, {
			"id" : "441481",
			"name" : "兴宁市",
			"subItems" : []
		} ]
	}, {
		"id" : "4415",
		"name" : "汕尾市",
		"subItems" : [ {
			"id" : "441501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441502",
			"name" : "城区",
			"subItems" : []
		}, {
			"id" : "441521",
			"name" : "海丰县",
			"subItems" : []
		}, {
			"id" : "441523",
			"name" : "陆河县",
			"subItems" : []
		}, {
			"id" : "441581",
			"name" : "陆丰市",
			"subItems" : []
		} ]
	}, {
		"id" : "4416",
		"name" : "河源市",
		"subItems" : [ {
			"id" : "441601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441602",
			"name" : "源城区",
			"subItems" : []
		}, {
			"id" : "441621",
			"name" : "紫金县",
			"subItems" : []
		}, {
			"id" : "441622",
			"name" : "龙川县",
			"subItems" : []
		}, {
			"id" : "441623",
			"name" : "连平县",
			"subItems" : []
		}, {
			"id" : "441624",
			"name" : "和平县",
			"subItems" : []
		}, {
			"id" : "441625",
			"name" : "东源县",
			"subItems" : []
		} ]
	}, {
		"id" : "4417",
		"name" : "阳江市",
		"subItems" : [ {
			"id" : "441701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441702",
			"name" : "江城区",
			"subItems" : []
		}, {
			"id" : "441721",
			"name" : "阳西县",
			"subItems" : []
		}, {
			"id" : "441723",
			"name" : "阳东县",
			"subItems" : []
		}, {
			"id" : "441781",
			"name" : "阳春市",
			"subItems" : []
		} ]
	}, {
		"id" : "4418",
		"name" : "清远市",
		"subItems" : [ {
			"id" : "441801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "441802",
			"name" : "清城区",
			"subItems" : []
		}, {
			"id" : "441821",
			"name" : "佛冈县",
			"subItems" : []
		}, {
			"id" : "441823",
			"name" : "阳山县",
			"subItems" : []
		}, {
			"id" : "441825",
			"name" : "连山县",
			"subItems" : []
		}, {
			"id" : "441826",
			"name" : "连南瑶族自治县",
			"subItems" : []
		}, {
			"id" : "441827",
			"name" : "清新县",
			"subItems" : []
		}, {
			"id" : "441881",
			"name" : "英德市",
			"subItems" : []
		}, {
			"id" : "441882",
			"name" : "连州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4419",
		"name" : "东莞市",
		"subItems" : []
	}, {
		"id" : "4420",
		"name" : "中山市",
		"subItems" : []
	}, {
		"id" : "4451",
		"name" : "潮州市",
		"subItems" : [ {
			"id" : "445101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "445102",
			"name" : "潮州市湘桥区",
			"subItems" : []
		}, {
			"id" : "445121",
			"name" : "潮州市潮安县",
			"subItems" : []
		}, {
			"id" : "445122",
			"name" : "潮州市饶平县",
			"subItems" : []
		} ]
	}, {
		"id" : "4452",
		"name" : "揭阳市",
		"subItems" : [ {
			"id" : "445201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "445202",
			"name" : "榕城区",
			"subItems" : []
		}, {
			"id" : "445221",
			"name" : "揭东县",
			"subItems" : []
		}, {
			"id" : "445222",
			"name" : "揭西县",
			"subItems" : []
		}, {
			"id" : "445224",
			"name" : "惠来县",
			"subItems" : []
		}, {
			"id" : "445281",
			"name" : "普宁市",
			"subItems" : []
		} ]
	}, {
		"id" : "4453",
		"name" : "云浮市",
		"subItems" : [ {
			"id" : "445301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "445302",
			"name" : "云城区",
			"subItems" : []
		}, {
			"id" : "445321",
			"name" : "新兴县",
			"subItems" : []
		}, {
			"id" : "445322",
			"name" : "郁南县",
			"subItems" : []
		}, {
			"id" : "445323",
			"name" : "云安县",
			"subItems" : []
		}, {
			"id" : "445381",
			"name" : "罗定市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "45",
	"name" : "广西壮族自治区",
	"subItems" : [ {
		"id" : "4501",
		"name" : "南宁市",
		"subItems" : [ {
			"id" : "450101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450102",
			"name" : "兴宁区",
			"subItems" : []
		}, {
			"id" : "450103",
			"name" : "青秀区",
			"subItems" : []
		}, {
			"id" : "450105",
			"name" : "江南区",
			"subItems" : []
		}, {
			"id" : "450107",
			"name" : "西乡塘区",
			"subItems" : []
		}, {
			"id" : "450108",
			"name" : "良庆区",
			"subItems" : []
		}, {
			"id" : "450109",
			"name" : "邕宁区",
			"subItems" : []
		}, {
			"id" : "450122",
			"name" : "武鸣县",
			"subItems" : []
		}, {
			"id" : "450123",
			"name" : "隆安县",
			"subItems" : []
		}, {
			"id" : "450124",
			"name" : "马山县",
			"subItems" : []
		}, {
			"id" : "450125",
			"name" : "上林县",
			"subItems" : []
		}, {
			"id" : "450126",
			"name" : "宾阳县",
			"subItems" : []
		}, {
			"id" : "450127",
			"name" : "横县",
			"subItems" : []
		} ]
	}, {
		"id" : "4502",
		"name" : "柳州市",
		"subItems" : [ {
			"id" : "450201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450202",
			"name" : "城中区",
			"subItems" : []
		}, {
			"id" : "450203",
			"name" : "鱼峰区",
			"subItems" : []
		}, {
			"id" : "450204",
			"name" : "柳南区",
			"subItems" : []
		}, {
			"id" : "450205",
			"name" : "柳北区",
			"subItems" : []
		}, {
			"id" : "450221",
			"name" : "柳江县",
			"subItems" : []
		}, {
			"id" : "450222",
			"name" : "柳城县",
			"subItems" : []
		}, {
			"id" : "450223",
			"name" : "鹿寨县",
			"subItems" : []
		}, {
			"id" : "450224",
			"name" : "融安县",
			"subItems" : []
		}, {
			"id" : "450225",
			"name" : "融水苗族自治县",
			"subItems" : []
		}, {
			"id" : "450226",
			"name" : "三江侗族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "4503",
		"name" : "桂林市",
		"subItems" : [ {
			"id" : "450301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450302",
			"name" : "秀峰区",
			"subItems" : []
		}, {
			"id" : "450303",
			"name" : "叠彩区",
			"subItems" : []
		}, {
			"id" : "450304",
			"name" : "象山区",
			"subItems" : []
		}, {
			"id" : "450305",
			"name" : "七星区",
			"subItems" : []
		}, {
			"id" : "450311",
			"name" : "雁山区",
			"subItems" : []
		}, {
			"id" : "450321",
			"name" : "阳朔县",
			"subItems" : []
		}, {
			"id" : "450322",
			"name" : "临桂县",
			"subItems" : []
		}, {
			"id" : "450323",
			"name" : "灵川县",
			"subItems" : []
		}, {
			"id" : "450324",
			"name" : "全州县",
			"subItems" : []
		}, {
			"id" : "450325",
			"name" : "兴安县",
			"subItems" : []
		}, {
			"id" : "450326",
			"name" : "永福县",
			"subItems" : []
		}, {
			"id" : "450327",
			"name" : "灌阳县",
			"subItems" : []
		}, {
			"id" : "450328",
			"name" : "龙胜各族自治县",
			"subItems" : []
		}, {
			"id" : "450329",
			"name" : "资源县",
			"subItems" : []
		}, {
			"id" : "450330",
			"name" : "平乐县",
			"subItems" : []
		}, {
			"id" : "450331",
			"name" : "荔浦县",
			"subItems" : []
		}, {
			"id" : "450332",
			"name" : "恭城县",
			"subItems" : []
		} ]
	}, {
		"id" : "4504",
		"name" : "梧州市",
		"subItems" : [ {
			"id" : "450401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450403",
			"name" : "万秀区",
			"subItems" : []
		}, {
			"id" : "450404",
			"name" : "蝶山区",
			"subItems" : []
		}, {
			"id" : "450405",
			"name" : "长洲区",
			"subItems" : []
		}, {
			"id" : "450421",
			"name" : "苍梧县",
			"subItems" : []
		}, {
			"id" : "450422",
			"name" : "藤县",
			"subItems" : []
		}, {
			"id" : "450423",
			"name" : "蒙山县",
			"subItems" : []
		}, {
			"id" : "450481",
			"name" : "岑溪市",
			"subItems" : []
		} ]
	}, {
		"id" : "4505",
		"name" : "北海市",
		"subItems" : [ {
			"id" : "450501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450502",
			"name" : "海城区",
			"subItems" : []
		}, {
			"id" : "450503",
			"name" : "银海区",
			"subItems" : []
		}, {
			"id" : "450512",
			"name" : "铁山港区",
			"subItems" : []
		}, {
			"id" : "450521",
			"name" : "合浦县",
			"subItems" : []
		} ]
	}, {
		"id" : "4506",
		"name" : "防城港市",
		"subItems" : [ {
			"id" : "450601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450602",
			"name" : "港口区",
			"subItems" : []
		}, {
			"id" : "450603",
			"name" : "防城区",
			"subItems" : []
		}, {
			"id" : "450621",
			"name" : "上思县",
			"subItems" : []
		}, {
			"id" : "450681",
			"name" : "东兴市",
			"subItems" : []
		} ]
	}, {
		"id" : "4507",
		"name" : "钦州市",
		"subItems" : [ {
			"id" : "450701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450702",
			"name" : "钦南区",
			"subItems" : []
		}, {
			"id" : "450703",
			"name" : "钦北区",
			"subItems" : []
		}, {
			"id" : "450721",
			"name" : "灵山县",
			"subItems" : []
		}, {
			"id" : "450722",
			"name" : "浦北县",
			"subItems" : []
		} ]
	}, {
		"id" : "4508",
		"name" : "贵港市",
		"subItems" : [ {
			"id" : "450801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450802",
			"name" : "港北区",
			"subItems" : []
		}, {
			"id" : "450803",
			"name" : "港南区",
			"subItems" : []
		}, {
			"id" : "450804",
			"name" : "覃塘区",
			"subItems" : []
		}, {
			"id" : "450821",
			"name" : "平南县",
			"subItems" : []
		}, {
			"id" : "450881",
			"name" : "桂平市",
			"subItems" : []
		} ]
	}, {
		"id" : "4509",
		"name" : "玉林市",
		"subItems" : [ {
			"id" : "450901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "450902",
			"name" : "玉州区",
			"subItems" : []
		}, {
			"id" : "450921",
			"name" : "容县",
			"subItems" : []
		}, {
			"id" : "450922",
			"name" : "陆川县",
			"subItems" : []
		}, {
			"id" : "450923",
			"name" : "博白县",
			"subItems" : []
		}, {
			"id" : "450924",
			"name" : "兴业县",
			"subItems" : []
		}, {
			"id" : "450981",
			"name" : "北流市",
			"subItems" : []
		} ]
	}, {
		"id" : "4510",
		"name" : "百色市",
		"subItems" : [ {
			"id" : "451001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "451002",
			"name" : "右江区",
			"subItems" : []
		}, {
			"id" : "451021",
			"name" : "田阳县",
			"subItems" : []
		}, {
			"id" : "451022",
			"name" : "田东县",
			"subItems" : []
		}, {
			"id" : "451023",
			"name" : "平果县",
			"subItems" : []
		}, {
			"id" : "451024",
			"name" : "德保县",
			"subItems" : []
		}, {
			"id" : "451025",
			"name" : "靖西县",
			"subItems" : []
		}, {
			"id" : "451026",
			"name" : "那坡县",
			"subItems" : []
		}, {
			"id" : "451027",
			"name" : "凌云县",
			"subItems" : []
		}, {
			"id" : "451028",
			"name" : "乐业县",
			"subItems" : []
		}, {
			"id" : "451029",
			"name" : "田林县",
			"subItems" : []
		}, {
			"id" : "451030",
			"name" : "西林县",
			"subItems" : []
		}, {
			"id" : "451031",
			"name" : "隆林各族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "4511",
		"name" : "贺州市",
		"subItems" : [ {
			"id" : "451101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "451102",
			"name" : "八步区",
			"subItems" : []
		}, {
			"id" : "451121",
			"name" : "昭平县",
			"subItems" : []
		}, {
			"id" : "451122",
			"name" : "钟山县",
			"subItems" : []
		}, {
			"id" : "451123",
			"name" : "富川瑶族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "4512",
		"name" : "河池市",
		"subItems" : [ {
			"id" : "451201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "451202",
			"name" : "金城江区",
			"subItems" : []
		}, {
			"id" : "451221",
			"name" : "南丹县",
			"subItems" : []
		}, {
			"id" : "451222",
			"name" : "天峨县",
			"subItems" : []
		}, {
			"id" : "451223",
			"name" : "凤山县",
			"subItems" : []
		}, {
			"id" : "451224",
			"name" : "东兰县",
			"subItems" : []
		}, {
			"id" : "451225",
			"name" : "罗城仫佬族自治县",
			"subItems" : []
		}, {
			"id" : "451226",
			"name" : "环江毛南族自治县",
			"subItems" : []
		}, {
			"id" : "451227",
			"name" : "巴马瑶族自治县",
			"subItems" : []
		}, {
			"id" : "451228",
			"name" : "都安瑶族自治县",
			"subItems" : []
		}, {
			"id" : "451229",
			"name" : "大化瑶族自治县",
			"subItems" : []
		}, {
			"id" : "451281",
			"name" : "宜州市",
			"subItems" : []
		} ]
	}, {
		"id" : "4513",
		"name" : "来宾市",
		"subItems" : [ {
			"id" : "451301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "451302",
			"name" : "兴宾区",
			"subItems" : []
		}, {
			"id" : "451321",
			"name" : "忻城县",
			"subItems" : []
		}, {
			"id" : "451322",
			"name" : "象州县",
			"subItems" : []
		}, {
			"id" : "451323",
			"name" : "武宣县",
			"subItems" : []
		}, {
			"id" : "451324",
			"name" : "金秀瑶族自治县",
			"subItems" : []
		}, {
			"id" : "451381",
			"name" : "合山市",
			"subItems" : []
		} ]
	}, {
		"id" : "4514",
		"name" : "崇左市",
		"subItems" : [ {
			"id" : "451401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "451402",
			"name" : "江州区",
			"subItems" : []
		}, {
			"id" : "451421",
			"name" : "扶绥县",
			"subItems" : []
		}, {
			"id" : "451422",
			"name" : "宁明县",
			"subItems" : []
		}, {
			"id" : "451423",
			"name" : "龙州县",
			"subItems" : []
		}, {
			"id" : "451424",
			"name" : "大新县",
			"subItems" : []
		}, {
			"id" : "451425",
			"name" : "天等县",
			"subItems" : []
		}, {
			"id" : "451481",
			"name" : "凭祥市",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "46",
	"name" : "海南省",
	"subItems" : [ {
		"id" : "4601",
		"name" : "海口市",
		"subItems" : [ {
			"id" : "460101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "460105",
			"name" : "秀英区",
			"subItems" : []
		}, {
			"id" : "460106",
			"name" : "龙华区",
			"subItems" : []
		}, {
			"id" : "460107",
			"name" : "琼山区",
			"subItems" : []
		}, {
			"id" : "460108",
			"name" : "美兰区",
			"subItems" : []
		} ]
	}, {
		"id" : "4602",
		"name" : "三亚市",
		"subItems" : [ {
			"id" : "460201",
			"name" : "市辖区",
			"subItems" : []
		} ]
	}, {
		"id" : "4690",
		"name" : "省属虚拟市",
		"subItems" : [ {
			"id" : "469001",
			"name" : "五指山市",
			"subItems" : []
		}, {
			"id" : "469002",
			"name" : "琼海市",
			"subItems" : []
		}, {
			"id" : "469003",
			"name" : "儋州市",
			"subItems" : []
		}, {
			"id" : "469005",
			"name" : "文昌市",
			"subItems" : []
		}, {
			"id" : "469006",
			"name" : "万宁市",
			"subItems" : []
		}, {
			"id" : "469007",
			"name" : "东方市",
			"subItems" : []
		}, {
			"id" : "469025",
			"name" : "定安县",
			"subItems" : []
		}, {
			"id" : "469026",
			"name" : "屯昌县",
			"subItems" : []
		}, {
			"id" : "469027",
			"name" : "澄迈县",
			"subItems" : []
		}, {
			"id" : "469028",
			"name" : "临高县",
			"subItems" : []
		}, {
			"id" : "469030",
			"name" : "白沙黎族自治县",
			"subItems" : []
		}, {
			"id" : "469031",
			"name" : "昌江黎族自治县",
			"subItems" : []
		}, {
			"id" : "469033",
			"name" : "乐东黎族自治县",
			"subItems" : []
		}, {
			"id" : "469034",
			"name" : "陵水黎族自治县",
			"subItems" : []
		}, {
			"id" : "469035",
			"name" : "保亭黎族苗族自治县",
			"subItems" : []
		}, {
			"id" : "469036",
			"name" : "琼中黎族苗族自治县",
			"subItems" : []
		}, {
			"id" : "469037",
			"name" : "西沙群岛",
			"subItems" : []
		}, {
			"id" : "469038",
			"name" : "南沙群岛",
			"subItems" : []
		}, {
			"id" : "469039",
			"name" : "中沙群岛的岛礁及其海域",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "50",
	"name" : "重庆市",
	"subItems" : [ {
		"id" : "5001",
		"name" : "市辖区",
		"subItems" : [ {
			"id" : "500101",
			"name" : "万州区",
			"subItems" : []
		}, {
			"id" : "500102",
			"name" : "涪陵区",
			"subItems" : []
		}, {
			"id" : "500103",
			"name" : "渝中区",
			"subItems" : []
		}, {
			"id" : "500104",
			"name" : "大渡口区",
			"subItems" : []
		}, {
			"id" : "500105",
			"name" : "江北区",
			"subItems" : []
		}, {
			"id" : "500106",
			"name" : "沙坪坝区",
			"subItems" : []
		}, {
			"id" : "500107",
			"name" : "九龙坡区",
			"subItems" : []
		}, {
			"id" : "500108",
			"name" : "南岸区",
			"subItems" : []
		}, {
			"id" : "500109",
			"name" : "北碚区",
			"subItems" : []
		}, {
			"id" : "500110",
			"name" : "万盛区",
			"subItems" : []
		}, {
			"id" : "500111",
			"name" : "双桥区",
			"subItems" : []
		}, {
			"id" : "500112",
			"name" : "渝北区",
			"subItems" : []
		}, {
			"id" : "500113",
			"name" : "巴南区",
			"subItems" : []
		}, {
			"id" : "500114",
			"name" : "黔江区",
			"subItems" : []
		}, {
			"id" : "500115",
			"name" : "长寿区",
			"subItems" : []
		}, {
			"id" : "500116",
			"name" : "江津区",
			"subItems" : []
		}, {
			"id" : "500117",
			"name" : "合川区",
			"subItems" : []
		}, {
			"id" : "500118",
			"name" : "永川区",
			"subItems" : []
		}, {
			"id" : "500119",
			"name" : "南川区",
			"subItems" : []
		} ]
	}, {
		"id" : "5002",
		"name" : "县",
		"subItems" : [ {
			"id" : "500222",
			"name" : "綦江县",
			"subItems" : []
		}, {
			"id" : "500223",
			"name" : "潼南县",
			"subItems" : []
		}, {
			"id" : "500224",
			"name" : "铜梁县",
			"subItems" : []
		}, {
			"id" : "500225",
			"name" : "大足县",
			"subItems" : []
		}, {
			"id" : "500226",
			"name" : "荣昌县",
			"subItems" : []
		}, {
			"id" : "500227",
			"name" : "璧山县",
			"subItems" : []
		}, {
			"id" : "500228",
			"name" : "梁平县",
			"subItems" : []
		}, {
			"id" : "500229",
			"name" : "城口县",
			"subItems" : []
		}, {
			"id" : "500230",
			"name" : "丰都县",
			"subItems" : []
		}, {
			"id" : "500231",
			"name" : "垫江县",
			"subItems" : []
		}, {
			"id" : "500232",
			"name" : "武隆县",
			"subItems" : []
		}, {
			"id" : "500233",
			"name" : "忠县",
			"subItems" : []
		}, {
			"id" : "500234",
			"name" : "开县",
			"subItems" : []
		}, {
			"id" : "500235",
			"name" : "云阳县",
			"subItems" : []
		}, {
			"id" : "500236",
			"name" : "奉节县",
			"subItems" : []
		}, {
			"id" : "500237",
			"name" : "巫山县",
			"subItems" : []
		}, {
			"id" : "500238",
			"name" : "巫溪县",
			"subItems" : []
		}, {
			"id" : "500240",
			"name" : "石柱县",
			"subItems" : []
		}, {
			"id" : "500241",
			"name" : "秀山土家族苗族自治县",
			"subItems" : []
		}, {
			"id" : "500242",
			"name" : "酉阳土家族苗族自治县",
			"subItems" : []
		}, {
			"id" : "500243",
			"name" : "彭水苗族土家族自治县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "51",
	"name" : "四川省",
	"subItems" : [ {
		"id" : "5101",
		"name" : "成都市",
		"subItems" : [ {
			"id" : "510101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510104",
			"name" : "锦江区",
			"subItems" : []
		}, {
			"id" : "510105",
			"name" : "青羊区",
			"subItems" : []
		}, {
			"id" : "510106",
			"name" : "金牛区",
			"subItems" : []
		}, {
			"id" : "510107",
			"name" : "武侯区",
			"subItems" : []
		}, {
			"id" : "510108",
			"name" : "成华区",
			"subItems" : []
		}, {
			"id" : "510112",
			"name" : "龙泉驿区",
			"subItems" : []
		}, {
			"id" : "510113",
			"name" : "青白江区",
			"subItems" : []
		}, {
			"id" : "510114",
			"name" : "新都区",
			"subItems" : []
		}, {
			"id" : "510115",
			"name" : "温江区",
			"subItems" : []
		}, {
			"id" : "510121",
			"name" : "金堂县",
			"subItems" : []
		}, {
			"id" : "510122",
			"name" : "双流县",
			"subItems" : []
		}, {
			"id" : "510124",
			"name" : "郫县",
			"subItems" : []
		}, {
			"id" : "510129",
			"name" : "大邑县",
			"subItems" : []
		}, {
			"id" : "510131",
			"name" : "蒲江县",
			"subItems" : []
		}, {
			"id" : "510132",
			"name" : "新津县",
			"subItems" : []
		}, {
			"id" : "510181",
			"name" : "都江堰市",
			"subItems" : []
		}, {
			"id" : "510182",
			"name" : "彭州市",
			"subItems" : []
		}, {
			"id" : "510183",
			"name" : "邛崃市",
			"subItems" : []
		}, {
			"id" : "510184",
			"name" : "崇州市",
			"subItems" : []
		} ]
	}, {
		"id" : "5103",
		"name" : "自贡市",
		"subItems" : [ {
			"id" : "510301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510302",
			"name" : "自流井区",
			"subItems" : []
		}, {
			"id" : "510303",
			"name" : "贡井区",
			"subItems" : []
		}, {
			"id" : "510304",
			"name" : "大安区",
			"subItems" : []
		}, {
			"id" : "510311",
			"name" : "沿滩区",
			"subItems" : []
		}, {
			"id" : "510321",
			"name" : "荣县",
			"subItems" : []
		}, {
			"id" : "510322",
			"name" : "富顺县",
			"subItems" : []
		} ]
	}, {
		"id" : "5104",
		"name" : "攀枝花市",
		"subItems" : [ {
			"id" : "510401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510402",
			"name" : "攀枝花东区",
			"subItems" : []
		}, {
			"id" : "510403",
			"name" : "西区",
			"subItems" : []
		}, {
			"id" : "510411",
			"name" : "仁和区",
			"subItems" : []
		}, {
			"id" : "510421",
			"name" : "米易县",
			"subItems" : []
		}, {
			"id" : "510422",
			"name" : "盐边县",
			"subItems" : []
		} ]
	}, {
		"id" : "5105",
		"name" : "泸州市",
		"subItems" : [ {
			"id" : "510501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510502",
			"name" : "江阳区",
			"subItems" : []
		}, {
			"id" : "510503",
			"name" : "纳溪区",
			"subItems" : []
		}, {
			"id" : "510504",
			"name" : "龙马潭区",
			"subItems" : []
		}, {
			"id" : "510521",
			"name" : "泸县",
			"subItems" : []
		}, {
			"id" : "510522",
			"name" : "合江县",
			"subItems" : []
		}, {
			"id" : "510524",
			"name" : "叙永县",
			"subItems" : []
		}, {
			"id" : "510525",
			"name" : "古蔺县",
			"subItems" : []
		} ]
	}, {
		"id" : "5106",
		"name" : "德阳市",
		"subItems" : [ {
			"id" : "510601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510603",
			"name" : "旌阳区",
			"subItems" : []
		}, {
			"id" : "510623",
			"name" : "中江县",
			"subItems" : []
		}, {
			"id" : "510626",
			"name" : "罗江县",
			"subItems" : []
		}, {
			"id" : "510681",
			"name" : "广汉市",
			"subItems" : []
		}, {
			"id" : "510682",
			"name" : "什邡市",
			"subItems" : []
		}, {
			"id" : "510683",
			"name" : "绵竹市",
			"subItems" : []
		} ]
	}, {
		"id" : "5107",
		"name" : "绵阳市",
		"subItems" : [ {
			"id" : "510701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510703",
			"name" : "涪城区",
			"subItems" : []
		}, {
			"id" : "510704",
			"name" : "游仙区",
			"subItems" : []
		}, {
			"id" : "510722",
			"name" : "三台县",
			"subItems" : []
		}, {
			"id" : "510723",
			"name" : "盐亭县",
			"subItems" : []
		}, {
			"id" : "510724",
			"name" : "安县",
			"subItems" : []
		}, {
			"id" : "510725",
			"name" : "梓潼县",
			"subItems" : []
		}, {
			"id" : "510726",
			"name" : "北川羌族自治县",
			"subItems" : []
		}, {
			"id" : "510727",
			"name" : "平武县",
			"subItems" : []
		}, {
			"id" : "510781",
			"name" : "江油市",
			"subItems" : []
		} ]
	}, {
		"id" : "5108",
		"name" : "广元市",
		"subItems" : [ {
			"id" : "510801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510802",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "510811",
			"name" : "元坝区",
			"subItems" : []
		}, {
			"id" : "510812",
			"name" : "朝天区",
			"subItems" : []
		}, {
			"id" : "510821",
			"name" : "旺苍县",
			"subItems" : []
		}, {
			"id" : "510822",
			"name" : "青川县",
			"subItems" : []
		}, {
			"id" : "510823",
			"name" : "剑阁县",
			"subItems" : []
		}, {
			"id" : "510824",
			"name" : "苍溪县",
			"subItems" : []
		} ]
	}, {
		"id" : "5109",
		"name" : "遂宁市",
		"subItems" : [ {
			"id" : "510901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "510903",
			"name" : "船山区",
			"subItems" : []
		}, {
			"id" : "510904",
			"name" : "安居区",
			"subItems" : []
		}, {
			"id" : "510921",
			"name" : "蓬溪县",
			"subItems" : []
		}, {
			"id" : "510922",
			"name" : "射洪县",
			"subItems" : []
		}, {
			"id" : "510923",
			"name" : "大英县",
			"subItems" : []
		} ]
	}, {
		"id" : "5110",
		"name" : "内江市",
		"subItems" : [ {
			"id" : "511001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511002",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "511011",
			"name" : "东兴区",
			"subItems" : []
		}, {
			"id" : "511024",
			"name" : "威远县",
			"subItems" : []
		}, {
			"id" : "511025",
			"name" : "资中县",
			"subItems" : []
		}, {
			"id" : "511028",
			"name" : "隆昌县",
			"subItems" : []
		} ]
	}, {
		"id" : "5111",
		"name" : "乐山市",
		"subItems" : [ {
			"id" : "511101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511102",
			"name" : "市中区",
			"subItems" : []
		}, {
			"id" : "511111",
			"name" : "沙湾区",
			"subItems" : []
		}, {
			"id" : "511112",
			"name" : "五通桥区",
			"subItems" : []
		}, {
			"id" : "511113",
			"name" : "金口河区",
			"subItems" : []
		}, {
			"id" : "511123",
			"name" : "犍为县",
			"subItems" : []
		}, {
			"id" : "511124",
			"name" : "井研县",
			"subItems" : []
		}, {
			"id" : "511126",
			"name" : "夹江县",
			"subItems" : []
		}, {
			"id" : "511129",
			"name" : "沐川县",
			"subItems" : []
		}, {
			"id" : "511132",
			"name" : "峨边彝族自治县",
			"subItems" : []
		}, {
			"id" : "511133",
			"name" : "马边彝族自治县",
			"subItems" : []
		}, {
			"id" : "511181",
			"name" : "峨眉山市",
			"subItems" : []
		} ]
	}, {
		"id" : "5113",
		"name" : "南充市",
		"subItems" : [ {
			"id" : "511301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511302",
			"name" : "顺庆区",
			"subItems" : []
		}, {
			"id" : "511303",
			"name" : "高坪区",
			"subItems" : []
		}, {
			"id" : "511304",
			"name" : "嘉陵区",
			"subItems" : []
		}, {
			"id" : "511321",
			"name" : "南部县",
			"subItems" : []
		}, {
			"id" : "511322",
			"name" : "营山县",
			"subItems" : []
		}, {
			"id" : "511323",
			"name" : "蓬安县",
			"subItems" : []
		}, {
			"id" : "511324",
			"name" : "仪陇县",
			"subItems" : []
		}, {
			"id" : "511325",
			"name" : "西充县",
			"subItems" : []
		}, {
			"id" : "511381",
			"name" : "阆中市",
			"subItems" : []
		} ]
	}, {
		"id" : "5114",
		"name" : "眉山市",
		"subItems" : [ {
			"id" : "511401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511402",
			"name" : "东坡区",
			"subItems" : []
		}, {
			"id" : "511421",
			"name" : "仁寿县",
			"subItems" : []
		}, {
			"id" : "511422",
			"name" : "彭山县",
			"subItems" : []
		}, {
			"id" : "511423",
			"name" : "洪雅县",
			"subItems" : []
		}, {
			"id" : "511424",
			"name" : "丹棱县",
			"subItems" : []
		}, {
			"id" : "511425",
			"name" : "青神县",
			"subItems" : []
		} ]
	}, {
		"id" : "5115",
		"name" : "宜宾市",
		"subItems" : [ {
			"id" : "511501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511502",
			"name" : "翠屏区",
			"subItems" : []
		}, {
			"id" : "511521",
			"name" : "宜宾县",
			"subItems" : []
		}, {
			"id" : "511522",
			"name" : "南溪县",
			"subItems" : []
		}, {
			"id" : "511523",
			"name" : "江安县",
			"subItems" : []
		}, {
			"id" : "511524",
			"name" : "长宁县",
			"subItems" : []
		}, {
			"id" : "511525",
			"name" : "高县",
			"subItems" : []
		}, {
			"id" : "511526",
			"name" : "珙县",
			"subItems" : []
		}, {
			"id" : "511527",
			"name" : "筠连县",
			"subItems" : []
		}, {
			"id" : "511528",
			"name" : "兴文县",
			"subItems" : []
		}, {
			"id" : "511529",
			"name" : "屏山县",
			"subItems" : []
		} ]
	}, {
		"id" : "5116",
		"name" : "广安市",
		"subItems" : [ {
			"id" : "511601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511602",
			"name" : "广安区",
			"subItems" : []
		}, {
			"id" : "511621",
			"name" : "岳池县",
			"subItems" : []
		}, {
			"id" : "511622",
			"name" : "武胜县",
			"subItems" : []
		}, {
			"id" : "511623",
			"name" : "邻水县",
			"subItems" : []
		}, {
			"id" : "511681",
			"name" : "华蓥市",
			"subItems" : []
		} ]
	}, {
		"id" : "5117",
		"name" : "达州市",
		"subItems" : [ {
			"id" : "511701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511702",
			"name" : "通川区",
			"subItems" : []
		}, {
			"id" : "511721",
			"name" : "达县",
			"subItems" : []
		}, {
			"id" : "511722",
			"name" : "宣汉县",
			"subItems" : []
		}, {
			"id" : "511723",
			"name" : "开江县",
			"subItems" : []
		}, {
			"id" : "511724",
			"name" : "大竹县",
			"subItems" : []
		}, {
			"id" : "511725",
			"name" : "渠县",
			"subItems" : []
		}, {
			"id" : "511781",
			"name" : "万源市",
			"subItems" : []
		} ]
	}, {
		"id" : "5118",
		"name" : "雅安市",
		"subItems" : [ {
			"id" : "511801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511802",
			"name" : "雨城区",
			"subItems" : []
		}, {
			"id" : "511821",
			"name" : "名山县",
			"subItems" : []
		}, {
			"id" : "511822",
			"name" : "荥经县",
			"subItems" : []
		}, {
			"id" : "511823",
			"name" : "汉源县",
			"subItems" : []
		}, {
			"id" : "511824",
			"name" : "石棉县",
			"subItems" : []
		}, {
			"id" : "511825",
			"name" : "天全县",
			"subItems" : []
		}, {
			"id" : "511826",
			"name" : "芦山县",
			"subItems" : []
		}, {
			"id" : "511827",
			"name" : "宝兴县",
			"subItems" : []
		} ]
	}, {
		"id" : "5119",
		"name" : "巴中市",
		"subItems" : [ {
			"id" : "511901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "511902",
			"name" : "巴州区",
			"subItems" : []
		}, {
			"id" : "511921",
			"name" : "通江县",
			"subItems" : []
		}, {
			"id" : "511922",
			"name" : "南江县",
			"subItems" : []
		}, {
			"id" : "511923",
			"name" : "平昌县",
			"subItems" : []
		} ]
	}, {
		"id" : "5120",
		"name" : "资阳市",
		"subItems" : [ {
			"id" : "512001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "512002",
			"name" : "雁江区",
			"subItems" : []
		}, {
			"id" : "512021",
			"name" : "安岳县",
			"subItems" : []
		}, {
			"id" : "512022",
			"name" : "乐至县",
			"subItems" : []
		}, {
			"id" : "512081",
			"name" : "简阳市",
			"subItems" : []
		} ]
	}, {
		"id" : "5132",
		"name" : "阿坝州",
		"subItems" : [ {
			"id" : "513221",
			"name" : "汶川县",
			"subItems" : []
		}, {
			"id" : "513222",
			"name" : "理县",
			"subItems" : []
		}, {
			"id" : "513223",
			"name" : "茂县",
			"subItems" : []
		}, {
			"id" : "513224",
			"name" : "松潘县",
			"subItems" : []
		}, {
			"id" : "513225",
			"name" : "九寨沟县",
			"subItems" : []
		}, {
			"id" : "513226",
			"name" : "金川县",
			"subItems" : []
		}, {
			"id" : "513227",
			"name" : "小金县",
			"subItems" : []
		}, {
			"id" : "513228",
			"name" : "黑水县",
			"subItems" : []
		}, {
			"id" : "513229",
			"name" : "马尔康县",
			"subItems" : []
		}, {
			"id" : "513230",
			"name" : "壤塘县",
			"subItems" : []
		}, {
			"id" : "513231",
			"name" : "阿坝县",
			"subItems" : []
		}, {
			"id" : "513232",
			"name" : "若尔盖县",
			"subItems" : []
		}, {
			"id" : "513233",
			"name" : "红原县",
			"subItems" : []
		} ]
	}, {
		"id" : "5133",
		"name" : "甘孜藏族自治州",
		"subItems" : [ {
			"id" : "513321",
			"name" : "康定县",
			"subItems" : []
		}, {
			"id" : "513322",
			"name" : "泸定县",
			"subItems" : []
		}, {
			"id" : "513323",
			"name" : "丹巴县",
			"subItems" : []
		}, {
			"id" : "513324",
			"name" : "九龙县",
			"subItems" : []
		}, {
			"id" : "513325",
			"name" : "雅江县",
			"subItems" : []
		}, {
			"id" : "513326",
			"name" : "道孚县",
			"subItems" : []
		}, {
			"id" : "513327",
			"name" : "炉霍县",
			"subItems" : []
		}, {
			"id" : "513328",
			"name" : "甘孜县",
			"subItems" : []
		}, {
			"id" : "513329",
			"name" : "新龙县",
			"subItems" : []
		}, {
			"id" : "513330",
			"name" : "德格县",
			"subItems" : []
		}, {
			"id" : "513331",
			"name" : "白玉县",
			"subItems" : []
		}, {
			"id" : "513332",
			"name" : "石渠县",
			"subItems" : []
		}, {
			"id" : "513333",
			"name" : "色达县",
			"subItems" : []
		}, {
			"id" : "513334",
			"name" : "理塘县",
			"subItems" : []
		}, {
			"id" : "513335",
			"name" : "巴塘县",
			"subItems" : []
		}, {
			"id" : "513336",
			"name" : "乡城县",
			"subItems" : []
		}, {
			"id" : "513337",
			"name" : "稻城县",
			"subItems" : []
		}, {
			"id" : "513338",
			"name" : "得荣县",
			"subItems" : []
		} ]
	}, {
		"id" : "5134",
		"name" : "凉山州",
		"subItems" : [ {
			"id" : "513401",
			"name" : "西昌市",
			"subItems" : []
		}, {
			"id" : "513422",
			"name" : "木里藏族自治县",
			"subItems" : []
		}, {
			"id" : "513423",
			"name" : "盐源县",
			"subItems" : []
		}, {
			"id" : "513424",
			"name" : "德昌",
			"subItems" : []
		}, {
			"id" : "513425",
			"name" : "会理县",
			"subItems" : []
		}, {
			"id" : "513426",
			"name" : "会东县",
			"subItems" : []
		}, {
			"id" : "513427",
			"name" : "宁南县",
			"subItems" : []
		}, {
			"id" : "513428",
			"name" : "普格县",
			"subItems" : []
		}, {
			"id" : "513429",
			"name" : "布拖县",
			"subItems" : []
		}, {
			"id" : "513430",
			"name" : "金阳县",
			"subItems" : []
		}, {
			"id" : "513431",
			"name" : "昭觉县",
			"subItems" : []
		}, {
			"id" : "513432",
			"name" : "喜德县",
			"subItems" : []
		}, {
			"id" : "513433",
			"name" : "冕宁县",
			"subItems" : []
		}, {
			"id" : "513434",
			"name" : "越西县",
			"subItems" : []
		}, {
			"id" : "513435",
			"name" : "甘洛县",
			"subItems" : []
		}, {
			"id" : "513436",
			"name" : "美姑县",
			"subItems" : []
		}, {
			"id" : "513437",
			"name" : "雷波县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "52",
	"name" : "贵州省",
	"subItems" : [ {
		"id" : "5201",
		"name" : "贵阳市",
		"subItems" : [ {
			"id" : "520101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "520102",
			"name" : "南明区",
			"subItems" : []
		}, {
			"id" : "520103",
			"name" : "云岩区",
			"subItems" : []
		}, {
			"id" : "520111",
			"name" : "花溪区",
			"subItems" : []
		}, {
			"id" : "520112",
			"name" : "乌当区",
			"subItems" : []
		}, {
			"id" : "520113",
			"name" : "白云区",
			"subItems" : []
		}, {
			"id" : "520114",
			"name" : "小河区",
			"subItems" : []
		}, {
			"id" : "520121",
			"name" : "开阳县",
			"subItems" : []
		}, {
			"id" : "520122",
			"name" : "息烽县",
			"subItems" : []
		}, {
			"id" : "520123",
			"name" : "修文县",
			"subItems" : []
		}, {
			"id" : "520181",
			"name" : "清镇市",
			"subItems" : []
		} ]
	}, {
		"id" : "5202",
		"name" : "六盘水市",
		"subItems" : [ {
			"id" : "520201",
			"name" : "钟山区",
			"subItems" : []
		}, {
			"id" : "520203",
			"name" : "六枝特区",
			"subItems" : []
		}, {
			"id" : "520221",
			"name" : "水城县",
			"subItems" : []
		}, {
			"id" : "520222",
			"name" : "盘县",
			"subItems" : []
		} ]
	}, {
		"id" : "5203",
		"name" : "遵义市",
		"subItems" : [ {
			"id" : "520301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "520302",
			"name" : "红花岗区",
			"subItems" : []
		}, {
			"id" : "520303",
			"name" : "汇川区",
			"subItems" : []
		}, {
			"id" : "520321",
			"name" : "遵义县",
			"subItems" : []
		}, {
			"id" : "520322",
			"name" : "桐梓县",
			"subItems" : []
		}, {
			"id" : "520323",
			"name" : "绥阳县",
			"subItems" : []
		}, {
			"id" : "520324",
			"name" : "正安县",
			"subItems" : []
		}, {
			"id" : "520325",
			"name" : "道真仡佬族苗族自治县",
			"subItems" : []
		}, {
			"id" : "520326",
			"name" : "务川仡佬族苗族自治县",
			"subItems" : []
		}, {
			"id" : "520327",
			"name" : "凤冈县",
			"subItems" : []
		}, {
			"id" : "520328",
			"name" : "湄潭县",
			"subItems" : []
		}, {
			"id" : "520329",
			"name" : "余庆县",
			"subItems" : []
		}, {
			"id" : "520330",
			"name" : "习水县",
			"subItems" : []
		}, {
			"id" : "520381",
			"name" : "赤水市",
			"subItems" : []
		}, {
			"id" : "520382",
			"name" : "仁怀市",
			"subItems" : []
		} ]
	}, {
		"id" : "5204",
		"name" : "安顺市",
		"subItems" : [ {
			"id" : "520401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "520402",
			"name" : "西秀区",
			"subItems" : []
		}, {
			"id" : "520421",
			"name" : "平坝县",
			"subItems" : []
		}, {
			"id" : "520422",
			"name" : "普定县",
			"subItems" : []
		}, {
			"id" : "520423",
			"name" : "镇宁布依族苗族自治县",
			"subItems" : []
		}, {
			"id" : "520424",
			"name" : "关岭自治县",
			"subItems" : []
		}, {
			"id" : "520425",
			"name" : "紫云苗族布依族自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "5222",
		"name" : "铜仁地区",
		"subItems" : [ {
			"id" : "522201",
			"name" : "铜仁市",
			"subItems" : []
		}, {
			"id" : "522222",
			"name" : "江口县",
			"subItems" : []
		}, {
			"id" : "522223",
			"name" : "玉屏侗族自治县",
			"subItems" : []
		}, {
			"id" : "522224",
			"name" : "石阡县",
			"subItems" : []
		}, {
			"id" : "522225",
			"name" : "思南县　",
			"subItems" : []
		}, {
			"id" : "522226",
			"name" : "印江土家族苗族自治县",
			"subItems" : []
		}, {
			"id" : "522227",
			"name" : "德江县",
			"subItems" : []
		}, {
			"id" : "522228",
			"name" : "沿河土家族自治县",
			"subItems" : []
		}, {
			"id" : "522229",
			"name" : "松桃苗族自治县",
			"subItems" : []
		}, {
			"id" : "522230",
			"name" : "万山特区",
			"subItems" : []
		} ]
	}, {
		"id" : "5223",
		"name" : "黔西南州",
		"subItems" : [ {
			"id" : "522301",
			"name" : "兴义市",
			"subItems" : []
		}, {
			"id" : "522322",
			"name" : "兴仁县",
			"subItems" : []
		}, {
			"id" : "522323",
			"name" : "普安县",
			"subItems" : []
		}, {
			"id" : "522324",
			"name" : "晴隆县",
			"subItems" : []
		}, {
			"id" : "522325",
			"name" : "贞丰县",
			"subItems" : []
		}, {
			"id" : "522326",
			"name" : "望谟县",
			"subItems" : []
		}, {
			"id" : "522327",
			"name" : "册亨县",
			"subItems" : []
		}, {
			"id" : "522328",
			"name" : "安龙县",
			"subItems" : []
		} ]
	}, {
		"id" : "5224",
		"name" : "毕节地区",
		"subItems" : [ {
			"id" : "522401",
			"name" : "毕节市",
			"subItems" : []
		}, {
			"id" : "522422",
			"name" : "大方县",
			"subItems" : []
		}, {
			"id" : "522423",
			"name" : "黔西县",
			"subItems" : []
		}, {
			"id" : "522424",
			"name" : "金沙县",
			"subItems" : []
		}, {
			"id" : "522425",
			"name" : "织金县",
			"subItems" : []
		}, {
			"id" : "522426",
			"name" : "纳雍县",
			"subItems" : []
		}, {
			"id" : "522427",
			"name" : "威宁彝族回族苗族自治县",
			"subItems" : []
		}, {
			"id" : "522428",
			"name" : "赫章县",
			"subItems" : []
		} ]
	}, {
		"id" : "5226",
		"name" : "黔东南苗族侗族自治州",
		"subItems" : [ {
			"id" : "522601",
			"name" : "凯里市",
			"subItems" : []
		}, {
			"id" : "522622",
			"name" : "黄平县",
			"subItems" : []
		}, {
			"id" : "522623",
			"name" : "施秉县",
			"subItems" : []
		}, {
			"id" : "522624",
			"name" : "三穗县",
			"subItems" : []
		}, {
			"id" : "522625",
			"name" : "镇远县",
			"subItems" : []
		}, {
			"id" : "522626",
			"name" : "岑巩县",
			"subItems" : []
		}, {
			"id" : "522627",
			"name" : "天柱县",
			"subItems" : []
		}, {
			"id" : "522628",
			"name" : "锦屏县",
			"subItems" : []
		}, {
			"id" : "522629",
			"name" : "剑河县",
			"subItems" : []
		}, {
			"id" : "522630",
			"name" : "台江县",
			"subItems" : []
		}, {
			"id" : "522631",
			"name" : "黎平县",
			"subItems" : []
		}, {
			"id" : "522632",
			"name" : "榕江县",
			"subItems" : []
		}, {
			"id" : "522633",
			"name" : "从江县",
			"subItems" : []
		}, {
			"id" : "522634",
			"name" : "雷山县",
			"subItems" : []
		}, {
			"id" : "522635",
			"name" : "麻江县",
			"subItems" : []
		}, {
			"id" : "522636",
			"name" : "丹寨县",
			"subItems" : []
		} ]
	}, {
		"id" : "5227",
		"name" : "黔南布依族苗族自治州",
		"subItems" : [ {
			"id" : "522701",
			"name" : "都匀市",
			"subItems" : []
		}, {
			"id" : "522702",
			"name" : "福泉市",
			"subItems" : []
		}, {
			"id" : "522722",
			"name" : "荔波县",
			"subItems" : []
		}, {
			"id" : "522723",
			"name" : "贵定县",
			"subItems" : []
		}, {
			"id" : "522725",
			"name" : "瓮安县",
			"subItems" : []
		}, {
			"id" : "522726",
			"name" : "独山县",
			"subItems" : []
		}, {
			"id" : "522727",
			"name" : "平塘县",
			"subItems" : []
		}, {
			"id" : "522728",
			"name" : "罗甸县",
			"subItems" : []
		}, {
			"id" : "522729",
			"name" : "长顺县",
			"subItems" : []
		}, {
			"id" : "522730",
			"name" : "龙里县",
			"subItems" : []
		}, {
			"id" : "522731",
			"name" : "惠水县",
			"subItems" : []
		}, {
			"id" : "522732",
			"name" : "三都水族自治县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "53",
	"name" : "云南省",
	"subItems" : [ {
		"id" : "5301",
		"name" : "昆明市",
		"subItems" : [ {
			"id" : "530101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530102",
			"name" : "五华区",
			"subItems" : []
		}, {
			"id" : "530103",
			"name" : "盘龙区",
			"subItems" : []
		}, {
			"id" : "530111",
			"name" : "官渡区",
			"subItems" : []
		}, {
			"id" : "530112",
			"name" : "西山区",
			"subItems" : []
		}, {
			"id" : "530113",
			"name" : "东川区",
			"subItems" : []
		}, {
			"id" : "530121",
			"name" : "呈贡县",
			"subItems" : []
		}, {
			"id" : "530122",
			"name" : "晋宁县",
			"subItems" : []
		}, {
			"id" : "530124",
			"name" : "富民县",
			"subItems" : []
		}, {
			"id" : "530125",
			"name" : "宜良县",
			"subItems" : []
		}, {
			"id" : "530126",
			"name" : "石林县",
			"subItems" : []
		}, {
			"id" : "530127",
			"name" : "嵩明县",
			"subItems" : []
		}, {
			"id" : "530128",
			"name" : "禄劝县",
			"subItems" : []
		}, {
			"id" : "530129",
			"name" : "寻甸县",
			"subItems" : []
		}, {
			"id" : "530181",
			"name" : "安宁市",
			"subItems" : []
		} ]
	}, {
		"id" : "5303",
		"name" : "曲靖市",
		"subItems" : [ {
			"id" : "530301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530302",
			"name" : "麒麟区",
			"subItems" : []
		}, {
			"id" : "530321",
			"name" : "马龙县",
			"subItems" : []
		}, {
			"id" : "530322",
			"name" : "陆良县",
			"subItems" : []
		}, {
			"id" : "530323",
			"name" : "师宗县",
			"subItems" : []
		}, {
			"id" : "530324",
			"name" : "罗平县",
			"subItems" : []
		}, {
			"id" : "530325",
			"name" : "富源县",
			"subItems" : []
		}, {
			"id" : "530326",
			"name" : "会泽县",
			"subItems" : []
		}, {
			"id" : "530328",
			"name" : "沾益县",
			"subItems" : []
		}, {
			"id" : "530381",
			"name" : "宣威市",
			"subItems" : []
		} ]
	}, {
		"id" : "5304",
		"name" : "玉溪市",
		"subItems" : [ {
			"id" : "530401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530402",
			"name" : "红塔区",
			"subItems" : []
		}, {
			"id" : "530421",
			"name" : "江川县",
			"subItems" : []
		}, {
			"id" : "530422",
			"name" : "澄江县",
			"subItems" : []
		}, {
			"id" : "530423",
			"name" : "通海县",
			"subItems" : []
		}, {
			"id" : "530424",
			"name" : "华宁县",
			"subItems" : []
		}, {
			"id" : "530425",
			"name" : "易门县",
			"subItems" : []
		}, {
			"id" : "530426",
			"name" : "峨山县",
			"subItems" : []
		}, {
			"id" : "530427",
			"name" : "新平县",
			"subItems" : []
		}, {
			"id" : "530428",
			"name" : "元江县",
			"subItems" : []
		} ]
	}, {
		"id" : "5305",
		"name" : "保山市",
		"subItems" : [ {
			"id" : "530501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530502",
			"name" : "隆阳区",
			"subItems" : []
		}, {
			"id" : "530521",
			"name" : "施甸县",
			"subItems" : []
		}, {
			"id" : "530522",
			"name" : "腾冲县",
			"subItems" : []
		}, {
			"id" : "530523",
			"name" : "龙陵县",
			"subItems" : []
		}, {
			"id" : "530524",
			"name" : "昌宁县",
			"subItems" : []
		} ]
	}, {
		"id" : "5306",
		"name" : "昭通市",
		"subItems" : [ {
			"id" : "530601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530602",
			"name" : "昭阳区",
			"subItems" : []
		}, {
			"id" : "530621",
			"name" : "鲁甸县",
			"subItems" : []
		}, {
			"id" : "530622",
			"name" : "巧家县",
			"subItems" : []
		}, {
			"id" : "530623",
			"name" : "盐津县",
			"subItems" : []
		}, {
			"id" : "530624",
			"name" : "大关县",
			"subItems" : []
		}, {
			"id" : "530625",
			"name" : "永善县",
			"subItems" : []
		}, {
			"id" : "530626",
			"name" : "绥江县",
			"subItems" : []
		}, {
			"id" : "530627",
			"name" : "镇雄县",
			"subItems" : []
		}, {
			"id" : "530628",
			"name" : "彝良县",
			"subItems" : []
		}, {
			"id" : "530629",
			"name" : "威信县",
			"subItems" : []
		}, {
			"id" : "530630",
			"name" : "水富县",
			"subItems" : []
		} ]
	}, {
		"id" : "5307",
		"name" : "丽江市",
		"subItems" : [ {
			"id" : "530701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530702",
			"name" : "古城区",
			"subItems" : []
		}, {
			"id" : "530721",
			"name" : "玉龙县",
			"subItems" : []
		}, {
			"id" : "530722",
			"name" : "永胜县",
			"subItems" : []
		}, {
			"id" : "530723",
			"name" : "华坪县",
			"subItems" : []
		}, {
			"id" : "530724",
			"name" : "宁蒗县",
			"subItems" : []
		} ]
	}, {
		"id" : "5308",
		"name" : "思茅市",
		"subItems" : [ {
			"id" : "530801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530802",
			"name" : "翠云区",
			"subItems" : []
		}, {
			"id" : "530821",
			"name" : "普洱县",
			"subItems" : []
		}, {
			"id" : "530822",
			"name" : "墨江县",
			"subItems" : []
		}, {
			"id" : "530823",
			"name" : "景东县",
			"subItems" : []
		}, {
			"id" : "530824",
			"name" : "景谷县",
			"subItems" : []
		}, {
			"id" : "530825",
			"name" : "镇沅县",
			"subItems" : []
		}, {
			"id" : "530826",
			"name" : "江城县",
			"subItems" : []
		}, {
			"id" : "530827",
			"name" : "孟连县",
			"subItems" : []
		}, {
			"id" : "530828",
			"name" : "澜沧县",
			"subItems" : []
		}, {
			"id" : "530829",
			"name" : "西盟县",
			"subItems" : []
		} ]
	}, {
		"id" : "5309",
		"name" : "临沧市",
		"subItems" : [ {
			"id" : "530901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "530902",
			"name" : "临翔区",
			"subItems" : []
		}, {
			"id" : "530921",
			"name" : "凤庆县",
			"subItems" : []
		}, {
			"id" : "530922",
			"name" : "云县",
			"subItems" : []
		}, {
			"id" : "530923",
			"name" : "永德县",
			"subItems" : []
		}, {
			"id" : "530924",
			"name" : "镇康县",
			"subItems" : []
		}, {
			"id" : "530925",
			"name" : "双江县",
			"subItems" : []
		}, {
			"id" : "530926",
			"name" : "耿马县",
			"subItems" : []
		}, {
			"id" : "530927",
			"name" : "沧源县",
			"subItems" : []
		} ]
	}, {
		"id" : "5323",
		"name" : "楚雄州",
		"subItems" : [ {
			"id" : "532301",
			"name" : "楚雄市",
			"subItems" : []
		}, {
			"id" : "532322",
			"name" : "双柏县",
			"subItems" : []
		}, {
			"id" : "532323",
			"name" : "牟定县",
			"subItems" : []
		}, {
			"id" : "532324",
			"name" : "南华县",
			"subItems" : []
		}, {
			"id" : "532325",
			"name" : "姚安县",
			"subItems" : []
		}, {
			"id" : "532326",
			"name" : "大姚县",
			"subItems" : []
		}, {
			"id" : "532327",
			"name" : "永仁县",
			"subItems" : []
		}, {
			"id" : "532328",
			"name" : "元谋县",
			"subItems" : []
		}, {
			"id" : "532329",
			"name" : "武定县",
			"subItems" : []
		}, {
			"id" : "532331",
			"name" : "禄丰县",
			"subItems" : []
		} ]
	}, {
		"id" : "5325",
		"name" : "红河州",
		"subItems" : [ {
			"id" : "532501",
			"name" : "个旧市",
			"subItems" : []
		}, {
			"id" : "532502",
			"name" : "开远市",
			"subItems" : []
		}, {
			"id" : "532522",
			"name" : "蒙自县",
			"subItems" : []
		}, {
			"id" : "532523",
			"name" : "屏边县",
			"subItems" : []
		}, {
			"id" : "532524",
			"name" : "建水县",
			"subItems" : []
		}, {
			"id" : "532525",
			"name" : "石屏县",
			"subItems" : []
		}, {
			"id" : "532526",
			"name" : "弥勒县",
			"subItems" : []
		}, {
			"id" : "532527",
			"name" : "泸西县",
			"subItems" : []
		}, {
			"id" : "532528",
			"name" : "元阳县",
			"subItems" : []
		}, {
			"id" : "532529",
			"name" : "红河县",
			"subItems" : []
		}, {
			"id" : "532530",
			"name" : "金平县",
			"subItems" : []
		}, {
			"id" : "532531",
			"name" : "绿春县",
			"subItems" : []
		}, {
			"id" : "532532",
			"name" : "河口县",
			"subItems" : []
		} ]
	}, {
		"id" : "5326",
		"name" : "文山州",
		"subItems" : [ {
			"id" : "532621",
			"name" : "文山县",
			"subItems" : []
		}, {
			"id" : "532622",
			"name" : "砚山县",
			"subItems" : []
		}, {
			"id" : "532623",
			"name" : "西畴县",
			"subItems" : []
		}, {
			"id" : "532624",
			"name" : "麻栗坡县",
			"subItems" : []
		}, {
			"id" : "532625",
			"name" : "马关县",
			"subItems" : []
		}, {
			"id" : "532626",
			"name" : "丘北县",
			"subItems" : []
		}, {
			"id" : "532627",
			"name" : "广南县",
			"subItems" : []
		}, {
			"id" : "532628",
			"name" : "富宁县",
			"subItems" : []
		} ]
	}, {
		"id" : "5328",
		"name" : "西双版纳州",
		"subItems" : [ {
			"id" : "532801",
			"name" : "景洪市",
			"subItems" : []
		}, {
			"id" : "532822",
			"name" : "勐海县",
			"subItems" : []
		}, {
			"id" : "532823",
			"name" : "勐腊县",
			"subItems" : []
		} ]
	}, {
		"id" : "5329",
		"name" : "大理州",
		"subItems" : [ {
			"id" : "532901",
			"name" : "大理市",
			"subItems" : []
		}, {
			"id" : "532922",
			"name" : "漾濞县",
			"subItems" : []
		}, {
			"id" : "532923",
			"name" : "祥云县",
			"subItems" : []
		}, {
			"id" : "532924",
			"name" : "宾川县",
			"subItems" : []
		}, {
			"id" : "532925",
			"name" : "弥渡县",
			"subItems" : []
		}, {
			"id" : "532926",
			"name" : "南涧县",
			"subItems" : []
		}, {
			"id" : "532927",
			"name" : "巍山县",
			"subItems" : []
		}, {
			"id" : "532928",
			"name" : "永平县",
			"subItems" : []
		}, {
			"id" : "532929",
			"name" : "云龙县",
			"subItems" : []
		}, {
			"id" : "532930",
			"name" : "洱源县",
			"subItems" : []
		}, {
			"id" : "532931",
			"name" : "剑川县",
			"subItems" : []
		}, {
			"id" : "532932",
			"name" : "鹤庆县",
			"subItems" : []
		} ]
	}, {
		"id" : "5331",
		"name" : "德宏州",
		"subItems" : [ {
			"id" : "533102",
			"name" : "瑞丽市",
			"subItems" : []
		}, {
			"id" : "533103",
			"name" : "潞西市",
			"subItems" : []
		}, {
			"id" : "533122",
			"name" : "梁河县",
			"subItems" : []
		}, {
			"id" : "533123",
			"name" : "盈江县",
			"subItems" : []
		}, {
			"id" : "533124",
			"name" : "陇川县",
			"subItems" : []
		} ]
	}, {
		"id" : "5333",
		"name" : "怒江州",
		"subItems" : [ {
			"id" : "533321",
			"name" : "泸水县",
			"subItems" : []
		}, {
			"id" : "533323",
			"name" : "福贡县",
			"subItems" : []
		}, {
			"id" : "533324",
			"name" : "贡山县",
			"subItems" : []
		}, {
			"id" : "533325",
			"name" : "兰坪县",
			"subItems" : []
		} ]
	}, {
		"id" : "5334",
		"name" : "迪庆州",
		"subItems" : [ {
			"id" : "533421",
			"name" : "香格里拉县",
			"subItems" : []
		}, {
			"id" : "533422",
			"name" : "德钦县",
			"subItems" : []
		}, {
			"id" : "533423",
			"name" : "维西县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "54",
	"name" : "西藏自治区",
	"subItems" : [ {
		"id" : "5401",
		"name" : "拉萨市",
		"subItems" : [ {
			"id" : "540101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "540102",
			"name" : "城关区",
			"subItems" : []
		}, {
			"id" : "540121",
			"name" : "林周县",
			"subItems" : []
		}, {
			"id" : "540122",
			"name" : "当雄县",
			"subItems" : []
		}, {
			"id" : "540123",
			"name" : "尼木县",
			"subItems" : []
		}, {
			"id" : "540124",
			"name" : "曲水县",
			"subItems" : []
		}, {
			"id" : "540125",
			"name" : "堆龙德庆",
			"subItems" : []
		}, {
			"id" : "540126",
			"name" : "达孜县",
			"subItems" : []
		}, {
			"id" : "540127",
			"name" : "墨竹工卡县",
			"subItems" : []
		} ]
	}, {
		"id" : "5421",
		"name" : "昌都地区",
		"subItems" : [ {
			"id" : "542121",
			"name" : "昌都县",
			"subItems" : []
		}, {
			"id" : "542122",
			"name" : "江达县",
			"subItems" : []
		}, {
			"id" : "542123",
			"name" : "贡觉县",
			"subItems" : []
		}, {
			"id" : "542124",
			"name" : "类乌齐县",
			"subItems" : []
		}, {
			"id" : "542125",
			"name" : "丁青县",
			"subItems" : []
		}, {
			"id" : "542126",
			"name" : "察亚县",
			"subItems" : []
		}, {
			"id" : "542127",
			"name" : "八宿县",
			"subItems" : []
		}, {
			"id" : "542128",
			"name" : "左贡县",
			"subItems" : []
		}, {
			"id" : "542129",
			"name" : "芒康县",
			"subItems" : []
		}, {
			"id" : "542132",
			"name" : "洛隆县",
			"subItems" : []
		}, {
			"id" : "542133",
			"name" : "边坝县",
			"subItems" : []
		} ]
	}, {
		"id" : "5422",
		"name" : "山南地区",
		"subItems" : [ {
			"id" : "542221",
			"name" : "乃东县",
			"subItems" : []
		}, {
			"id" : "542222",
			"name" : "扎囊县",
			"subItems" : []
		}, {
			"id" : "542223",
			"name" : "贡嘎县",
			"subItems" : []
		}, {
			"id" : "542224",
			"name" : "桑日县",
			"subItems" : []
		}, {
			"id" : "542225",
			"name" : "琼结县",
			"subItems" : []
		}, {
			"id" : "542226",
			"name" : "曲松县",
			"subItems" : []
		}, {
			"id" : "542227",
			"name" : "措美县",
			"subItems" : []
		}, {
			"id" : "542228",
			"name" : "洛扎县",
			"subItems" : []
		}, {
			"id" : "542229",
			"name" : "加查县",
			"subItems" : []
		}, {
			"id" : "542231",
			"name" : "隆子县",
			"subItems" : []
		}, {
			"id" : "542232",
			"name" : "错那县",
			"subItems" : []
		}, {
			"id" : "542233",
			"name" : "浪卡子县",
			"subItems" : []
		} ]
	}, {
		"id" : "5423",
		"name" : "日喀则地区",
		"subItems" : [ {
			"id" : "542301",
			"name" : "日喀则市",
			"subItems" : []
		}, {
			"id" : "542322",
			"name" : "南木林县",
			"subItems" : []
		}, {
			"id" : "542323",
			"name" : "江孜县",
			"subItems" : []
		}, {
			"id" : "542324",
			"name" : "定日县",
			"subItems" : []
		}, {
			"id" : "542325",
			"name" : "萨迦县",
			"subItems" : []
		}, {
			"id" : "542326",
			"name" : "拉孜县",
			"subItems" : []
		}, {
			"id" : "542327",
			"name" : "昂仁县",
			"subItems" : []
		}, {
			"id" : "542328",
			"name" : "谢通门县",
			"subItems" : []
		}, {
			"id" : "542329",
			"name" : "白朗县",
			"subItems" : []
		}, {
			"id" : "542330",
			"name" : "仁布县",
			"subItems" : []
		}, {
			"id" : "542331",
			"name" : "康马县",
			"subItems" : []
		}, {
			"id" : "542332",
			"name" : "定结县",
			"subItems" : []
		}, {
			"id" : "542333",
			"name" : "仲巴县",
			"subItems" : []
		}, {
			"id" : "542334",
			"name" : "亚东县",
			"subItems" : []
		}, {
			"id" : "542335",
			"name" : "吉隆县",
			"subItems" : []
		}, {
			"id" : "542336",
			"name" : "聂拉木县",
			"subItems" : []
		}, {
			"id" : "542337",
			"name" : "萨嘎县",
			"subItems" : []
		}, {
			"id" : "542338",
			"name" : "岗巴县",
			"subItems" : []
		} ]
	}, {
		"id" : "5424",
		"name" : "那曲地区",
		"subItems" : [ {
			"id" : "542421",
			"name" : "那曲县",
			"subItems" : []
		}, {
			"id" : "542422",
			"name" : "嘉黎县",
			"subItems" : []
		}, {
			"id" : "542423",
			"name" : "比如县",
			"subItems" : []
		}, {
			"id" : "542424",
			"name" : "聂荣县",
			"subItems" : []
		}, {
			"id" : "542425",
			"name" : "安多县",
			"subItems" : []
		}, {
			"id" : "542426",
			"name" : "申扎县",
			"subItems" : []
		}, {
			"id" : "542427",
			"name" : "索县",
			"subItems" : []
		}, {
			"id" : "542428",
			"name" : "班戈县",
			"subItems" : []
		}, {
			"id" : "542429",
			"name" : "巴青县",
			"subItems" : []
		}, {
			"id" : "542430",
			"name" : "尼玛县",
			"subItems" : []
		} ]
	}, {
		"id" : "5425",
		"name" : "阿里地区",
		"subItems" : [ {
			"id" : "542521",
			"name" : "普兰县",
			"subItems" : []
		}, {
			"id" : "542522",
			"name" : "札达县",
			"subItems" : []
		}, {
			"id" : "542523",
			"name" : "噶尔县",
			"subItems" : []
		}, {
			"id" : "542524",
			"name" : "日土县",
			"subItems" : []
		}, {
			"id" : "542525",
			"name" : "革吉县",
			"subItems" : []
		}, {
			"id" : "542526",
			"name" : "改则县",
			"subItems" : []
		}, {
			"id" : "542527",
			"name" : "措勤县",
			"subItems" : []
		} ]
	}, {
		"id" : "5426",
		"name" : "林芝地区",
		"subItems" : [ {
			"id" : "542621",
			"name" : "林芝县",
			"subItems" : []
		}, {
			"id" : "542622",
			"name" : "工布江达县",
			"subItems" : []
		}, {
			"id" : "542623",
			"name" : "米林县",
			"subItems" : []
		}, {
			"id" : "542624",
			"name" : "墨脱县",
			"subItems" : []
		}, {
			"id" : "542625",
			"name" : "波密县",
			"subItems" : []
		}, {
			"id" : "542626",
			"name" : "察隅县",
			"subItems" : []
		}, {
			"id" : "542627",
			"name" : "朗县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "61",
	"name" : "陕西省",
	"subItems" : [ {
		"id" : "6101",
		"name" : "西安市",
		"subItems" : [ {
			"id" : "610101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610102",
			"name" : "新城区",
			"subItems" : []
		}, {
			"id" : "610103",
			"name" : "碑林区",
			"subItems" : []
		}, {
			"id" : "610104",
			"name" : "莲湖区",
			"subItems" : []
		}, {
			"id" : "610111",
			"name" : "灞桥区",
			"subItems" : []
		}, {
			"id" : "610112",
			"name" : "未央区",
			"subItems" : []
		}, {
			"id" : "610113",
			"name" : "雁塔区",
			"subItems" : []
		}, {
			"id" : "610114",
			"name" : "阎良区",
			"subItems" : []
		}, {
			"id" : "610115",
			"name" : "临潼区",
			"subItems" : []
		}, {
			"id" : "610116",
			"name" : "长安区",
			"subItems" : []
		}, {
			"id" : "610122",
			"name" : "蓝田县",
			"subItems" : []
		}, {
			"id" : "610124",
			"name" : "周至县",
			"subItems" : []
		}, {
			"id" : "610125",
			"name" : "户县",
			"subItems" : []
		}, {
			"id" : "610126",
			"name" : "高陵县",
			"subItems" : []
		} ]
	}, {
		"id" : "6102",
		"name" : "铜川市",
		"subItems" : [ {
			"id" : "610201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610202",
			"name" : "王益区",
			"subItems" : []
		}, {
			"id" : "610203",
			"name" : "印台区",
			"subItems" : []
		}, {
			"id" : "610204",
			"name" : "耀州区",
			"subItems" : []
		}, {
			"id" : "610222",
			"name" : "宜君县",
			"subItems" : []
		} ]
	}, {
		"id" : "6103",
		"name" : "宝鸡市",
		"subItems" : [ {
			"id" : "610301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610302",
			"name" : "渭滨区",
			"subItems" : []
		}, {
			"id" : "610303",
			"name" : "金台区",
			"subItems" : []
		}, {
			"id" : "610304",
			"name" : "陈仓区",
			"subItems" : []
		}, {
			"id" : "610322",
			"name" : "凤翔县",
			"subItems" : []
		}, {
			"id" : "610323",
			"name" : "岐山县",
			"subItems" : []
		}, {
			"id" : "610324",
			"name" : "扶风县",
			"subItems" : []
		}, {
			"id" : "610326",
			"name" : "眉县",
			"subItems" : []
		}, {
			"id" : "610327",
			"name" : "陇县",
			"subItems" : []
		}, {
			"id" : "610328",
			"name" : "千阳县",
			"subItems" : []
		}, {
			"id" : "610329",
			"name" : "麟游县",
			"subItems" : []
		}, {
			"id" : "610330",
			"name" : "凤县",
			"subItems" : []
		}, {
			"id" : "610331",
			"name" : "太白县",
			"subItems" : []
		} ]
	}, {
		"id" : "6104",
		"name" : "咸阳市",
		"subItems" : [ {
			"id" : "610401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610402",
			"name" : "秦都区",
			"subItems" : []
		}, {
			"id" : "610403",
			"name" : "杨凌区",
			"subItems" : []
		}, {
			"id" : "610404",
			"name" : "渭城区",
			"subItems" : []
		}, {
			"id" : "610422",
			"name" : "三原县",
			"subItems" : []
		}, {
			"id" : "610423",
			"name" : "泾阳县",
			"subItems" : []
		}, {
			"id" : "610424",
			"name" : "乾县",
			"subItems" : []
		}, {
			"id" : "610425",
			"name" : "礼泉县",
			"subItems" : []
		}, {
			"id" : "610426",
			"name" : "永寿县",
			"subItems" : []
		}, {
			"id" : "610427",
			"name" : "彬县",
			"subItems" : []
		}, {
			"id" : "610428",
			"name" : "长武县",
			"subItems" : []
		}, {
			"id" : "610429",
			"name" : "旬邑县",
			"subItems" : []
		}, {
			"id" : "610430",
			"name" : "淳化县",
			"subItems" : []
		}, {
			"id" : "610431",
			"name" : "武功县",
			"subItems" : []
		}, {
			"id" : "610481",
			"name" : "兴平市",
			"subItems" : []
		} ]
	}, {
		"id" : "6105",
		"name" : "渭南市",
		"subItems" : [ {
			"id" : "610501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610502",
			"name" : "临渭区",
			"subItems" : []
		}, {
			"id" : "610521",
			"name" : "华县",
			"subItems" : []
		}, {
			"id" : "610522",
			"name" : "潼关县",
			"subItems" : []
		}, {
			"id" : "610523",
			"name" : "大荔县",
			"subItems" : []
		}, {
			"id" : "610524",
			"name" : "合阳县",
			"subItems" : []
		}, {
			"id" : "610525",
			"name" : "澄城县",
			"subItems" : []
		}, {
			"id" : "610526",
			"name" : "蒲城县",
			"subItems" : []
		}, {
			"id" : "610527",
			"name" : "白水县",
			"subItems" : []
		}, {
			"id" : "610528",
			"name" : "富平县",
			"subItems" : []
		}, {
			"id" : "610581",
			"name" : "韩城市",
			"subItems" : []
		}, {
			"id" : "610582",
			"name" : "华阴市",
			"subItems" : []
		} ]
	}, {
		"id" : "6106",
		"name" : "延安市",
		"subItems" : [ {
			"id" : "610601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610602",
			"name" : "宝塔区",
			"subItems" : []
		}, {
			"id" : "610621",
			"name" : "延长县",
			"subItems" : []
		}, {
			"id" : "610622",
			"name" : "延川县",
			"subItems" : []
		}, {
			"id" : "610623",
			"name" : "子长县",
			"subItems" : []
		}, {
			"id" : "610624",
			"name" : "安塞县",
			"subItems" : []
		}, {
			"id" : "610625",
			"name" : "志丹县",
			"subItems" : []
		}, {
			"id" : "610626",
			"name" : "吴起县",
			"subItems" : []
		}, {
			"id" : "610627",
			"name" : "甘泉县",
			"subItems" : []
		}, {
			"id" : "610628",
			"name" : "富县",
			"subItems" : []
		}, {
			"id" : "610629",
			"name" : "洛川县",
			"subItems" : []
		}, {
			"id" : "610630",
			"name" : "宜川县",
			"subItems" : []
		}, {
			"id" : "610631",
			"name" : "黄龙县",
			"subItems" : []
		}, {
			"id" : "610632",
			"name" : "黄陵县",
			"subItems" : []
		} ]
	}, {
		"id" : "6107",
		"name" : "汉中市",
		"subItems" : [ {
			"id" : "610701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610702",
			"name" : "汉台区",
			"subItems" : []
		}, {
			"id" : "610721",
			"name" : "南郑县",
			"subItems" : []
		}, {
			"id" : "610722",
			"name" : "城固县",
			"subItems" : []
		}, {
			"id" : "610723",
			"name" : "洋县",
			"subItems" : []
		}, {
			"id" : "610724",
			"name" : "西乡县",
			"subItems" : []
		}, {
			"id" : "610725",
			"name" : "勉县",
			"subItems" : []
		}, {
			"id" : "610726",
			"name" : "宁强县",
			"subItems" : []
		}, {
			"id" : "610727",
			"name" : "略阳县",
			"subItems" : []
		}, {
			"id" : "610728",
			"name" : "镇巴县",
			"subItems" : []
		}, {
			"id" : "610729",
			"name" : "留坝县",
			"subItems" : []
		}, {
			"id" : "610730",
			"name" : "佛坪县",
			"subItems" : []
		} ]
	}, {
		"id" : "6108",
		"name" : "榆林市",
		"subItems" : [ {
			"id" : "610801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610802",
			"name" : "榆阳区",
			"subItems" : []
		}, {
			"id" : "610821",
			"name" : "神木县",
			"subItems" : []
		}, {
			"id" : "610822",
			"name" : "府谷县",
			"subItems" : []
		}, {
			"id" : "610823",
			"name" : "横山县",
			"subItems" : []
		}, {
			"id" : "610824",
			"name" : "靖边县",
			"subItems" : []
		}, {
			"id" : "610825",
			"name" : "定边县",
			"subItems" : []
		}, {
			"id" : "610826",
			"name" : "绥德县",
			"subItems" : []
		}, {
			"id" : "610827",
			"name" : "米脂县",
			"subItems" : []
		}, {
			"id" : "610828",
			"name" : "佳县",
			"subItems" : []
		}, {
			"id" : "610829",
			"name" : "吴堡县",
			"subItems" : []
		}, {
			"id" : "610830",
			"name" : "清涧县",
			"subItems" : []
		}, {
			"id" : "610831",
			"name" : "子洲县",
			"subItems" : []
		} ]
	}, {
		"id" : "6109",
		"name" : "安康市",
		"subItems" : [ {
			"id" : "610901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "610902",
			"name" : "汉滨区",
			"subItems" : []
		}, {
			"id" : "610921",
			"name" : "汉阴县",
			"subItems" : []
		}, {
			"id" : "610922",
			"name" : "石泉县",
			"subItems" : []
		}, {
			"id" : "610923",
			"name" : "宁陕县",
			"subItems" : []
		}, {
			"id" : "610924",
			"name" : "紫阳县",
			"subItems" : []
		}, {
			"id" : "610925",
			"name" : "岚皋县",
			"subItems" : []
		}, {
			"id" : "610926",
			"name" : "平利县",
			"subItems" : []
		}, {
			"id" : "610927",
			"name" : "镇坪县",
			"subItems" : []
		}, {
			"id" : "610928",
			"name" : "旬阳县",
			"subItems" : []
		}, {
			"id" : "610929",
			"name" : "白河县",
			"subItems" : []
		} ]
	}, {
		"id" : "6110",
		"name" : "商洛市",
		"subItems" : [ {
			"id" : "611001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "611002",
			"name" : "商州区",
			"subItems" : []
		}, {
			"id" : "611021",
			"name" : "洛南县",
			"subItems" : []
		}, {
			"id" : "611022",
			"name" : "丹凤县",
			"subItems" : []
		}, {
			"id" : "611023",
			"name" : "商南县",
			"subItems" : []
		}, {
			"id" : "611024",
			"name" : "山阳县",
			"subItems" : []
		}, {
			"id" : "611025",
			"name" : "镇安县",
			"subItems" : []
		}, {
			"id" : "611026",
			"name" : "柞水县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "62",
	"name" : "甘肃省",
	"subItems" : [ {
		"id" : "6201",
		"name" : "兰州市",
		"subItems" : [ {
			"id" : "620101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620102",
			"name" : "城关区",
			"subItems" : []
		}, {
			"id" : "620103",
			"name" : "七里河区",
			"subItems" : []
		}, {
			"id" : "620104",
			"name" : "兰州市西固区",
			"subItems" : []
		}, {
			"id" : "620105",
			"name" : "安宁区",
			"subItems" : []
		}, {
			"id" : "620111",
			"name" : "红古区",
			"subItems" : []
		}, {
			"id" : "620121",
			"name" : "永登县",
			"subItems" : []
		}, {
			"id" : "620122",
			"name" : "皋兰县",
			"subItems" : []
		}, {
			"id" : "620123",
			"name" : "榆中县",
			"subItems" : []
		} ]
	}, {
		"id" : "6202",
		"name" : "嘉峪关市",
		"subItems" : [ {
			"id" : "620201",
			"name" : "市辖",
			"subItems" : []
		} ]
	}, {
		"id" : "6203",
		"name" : "金昌市",
		"subItems" : [ {
			"id" : "620301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620302",
			"name" : "金川区",
			"subItems" : []
		}, {
			"id" : "620321",
			"name" : "永昌县",
			"subItems" : []
		} ]
	}, {
		"id" : "6204",
		"name" : "白银市",
		"subItems" : [ {
			"id" : "620401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620402",
			"name" : "白银区",
			"subItems" : []
		}, {
			"id" : "620403",
			"name" : "平川区",
			"subItems" : []
		}, {
			"id" : "620421",
			"name" : "靖远县",
			"subItems" : []
		}, {
			"id" : "620422",
			"name" : "会宁县",
			"subItems" : []
		}, {
			"id" : "620423",
			"name" : "景泰县",
			"subItems" : []
		} ]
	}, {
		"id" : "6205",
		"name" : "天水市",
		"subItems" : [ {
			"id" : "620501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620502",
			"name" : "秦州区",
			"subItems" : []
		}, {
			"id" : "620503",
			"name" : "麦积区",
			"subItems" : []
		}, {
			"id" : "620521",
			"name" : "清水县",
			"subItems" : []
		}, {
			"id" : "620522",
			"name" : "秦安县",
			"subItems" : []
		}, {
			"id" : "620523",
			"name" : "甘谷县",
			"subItems" : []
		}, {
			"id" : "620524",
			"name" : "武山县",
			"subItems" : []
		}, {
			"id" : "620525",
			"name" : "张家川县",
			"subItems" : []
		} ]
	}, {
		"id" : "6206",
		"name" : "武威市",
		"subItems" : [ {
			"id" : "620601",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620602",
			"name" : "凉州区",
			"subItems" : []
		}, {
			"id" : "620621",
			"name" : "民勤县",
			"subItems" : []
		}, {
			"id" : "620622",
			"name" : "古浪县",
			"subItems" : []
		}, {
			"id" : "620623",
			"name" : "天祝县",
			"subItems" : []
		} ]
	}, {
		"id" : "6207",
		"name" : "张掖市",
		"subItems" : [ {
			"id" : "620701",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620702",
			"name" : "甘州区",
			"subItems" : []
		}, {
			"id" : "620721",
			"name" : "肃南裕固族自治县",
			"subItems" : []
		}, {
			"id" : "620722",
			"name" : "民乐县",
			"subItems" : []
		}, {
			"id" : "620723",
			"name" : "临泽县",
			"subItems" : []
		}, {
			"id" : "620724",
			"name" : "高台县",
			"subItems" : []
		}, {
			"id" : "620725",
			"name" : "山丹县",
			"subItems" : []
		} ]
	}, {
		"id" : "6208",
		"name" : "平凉市",
		"subItems" : [ {
			"id" : "620801",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620802",
			"name" : "崆峒区",
			"subItems" : []
		}, {
			"id" : "620821",
			"name" : "泾川县",
			"subItems" : []
		}, {
			"id" : "620822",
			"name" : "灵台县",
			"subItems" : []
		}, {
			"id" : "620823",
			"name" : "崇信县",
			"subItems" : []
		}, {
			"id" : "620824",
			"name" : "华亭县",
			"subItems" : []
		}, {
			"id" : "620825",
			"name" : "庄浪县",
			"subItems" : []
		}, {
			"id" : "620826",
			"name" : "静宁县",
			"subItems" : []
		} ]
	}, {
		"id" : "6209",
		"name" : "酒泉市",
		"subItems" : [ {
			"id" : "620901",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "620902",
			"name" : "肃州区",
			"subItems" : []
		}, {
			"id" : "620921",
			"name" : "金塔县",
			"subItems" : []
		}, {
			"id" : "620922",
			"name" : "瓜州县",
			"subItems" : []
		}, {
			"id" : "620923",
			"name" : "肃北蒙古族自治县",
			"subItems" : []
		}, {
			"id" : "620924",
			"name" : "阿克塞县",
			"subItems" : []
		}, {
			"id" : "620981",
			"name" : "玉门市",
			"subItems" : []
		}, {
			"id" : "620982",
			"name" : "敦煌市",
			"subItems" : []
		} ]
	}, {
		"id" : "6210",
		"name" : "庆阳市",
		"subItems" : [ {
			"id" : "621001",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "621002",
			"name" : "西峰区",
			"subItems" : []
		}, {
			"id" : "621021",
			"name" : "庆城县",
			"subItems" : []
		}, {
			"id" : "621022",
			"name" : "环县",
			"subItems" : []
		}, {
			"id" : "621023",
			"name" : "华池县",
			"subItems" : []
		}, {
			"id" : "621024",
			"name" : "合水县",
			"subItems" : []
		}, {
			"id" : "621025",
			"name" : "正宁县",
			"subItems" : []
		}, {
			"id" : "621026",
			"name" : "宁县",
			"subItems" : []
		}, {
			"id" : "621027",
			"name" : "镇原县",
			"subItems" : []
		} ]
	}, {
		"id" : "6211",
		"name" : "定西市",
		"subItems" : [ {
			"id" : "621101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "621102",
			"name" : "安定区",
			"subItems" : []
		}, {
			"id" : "621121",
			"name" : "通渭县",
			"subItems" : []
		}, {
			"id" : "621122",
			"name" : "陇西县",
			"subItems" : []
		}, {
			"id" : "621123",
			"name" : "渭源县",
			"subItems" : []
		}, {
			"id" : "621124",
			"name" : "临洮县",
			"subItems" : []
		}, {
			"id" : "621125",
			"name" : "漳县",
			"subItems" : []
		}, {
			"id" : "621126",
			"name" : "岷县",
			"subItems" : []
		} ]
	}, {
		"id" : "6212",
		"name" : "陇南市",
		"subItems" : [ {
			"id" : "621201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "621202",
			"name" : "武都区",
			"subItems" : []
		}, {
			"id" : "621221",
			"name" : "成县",
			"subItems" : []
		}, {
			"id" : "621222",
			"name" : "文县",
			"subItems" : []
		}, {
			"id" : "621223",
			"name" : "宕昌县",
			"subItems" : []
		}, {
			"id" : "621224",
			"name" : "康县",
			"subItems" : []
		}, {
			"id" : "621225",
			"name" : "西和县",
			"subItems" : []
		}, {
			"id" : "621226",
			"name" : "礼县",
			"subItems" : []
		}, {
			"id" : "621227",
			"name" : "徽县",
			"subItems" : []
		}, {
			"id" : "621228",
			"name" : "两当县",
			"subItems" : []
		} ]
	}, {
		"id" : "6229",
		"name" : "临夏州",
		"subItems" : [ {
			"id" : "622901",
			"name" : "临夏市",
			"subItems" : []
		}, {
			"id" : "622921",
			"name" : "临夏县",
			"subItems" : []
		}, {
			"id" : "622922",
			"name" : "康乐县",
			"subItems" : []
		}, {
			"id" : "622923",
			"name" : "永靖县",
			"subItems" : []
		}, {
			"id" : "622924",
			"name" : "广河县",
			"subItems" : []
		}, {
			"id" : "622925",
			"name" : "和政县",
			"subItems" : []
		}, {
			"id" : "622926",
			"name" : "东乡族自治县",
			"subItems" : []
		}, {
			"id" : "622927",
			"name" : "积石山县",
			"subItems" : []
		} ]
	}, {
		"id" : "6230",
		"name" : "甘南州",
		"subItems" : [ {
			"id" : "623001",
			"name" : "合作市",
			"subItems" : []
		}, {
			"id" : "623021",
			"name" : "临潭县",
			"subItems" : []
		}, {
			"id" : "623022",
			"name" : "卓尼县",
			"subItems" : []
		}, {
			"id" : "623023",
			"name" : "舟曲县",
			"subItems" : []
		}, {
			"id" : "623024",
			"name" : "迭部县",
			"subItems" : []
		}, {
			"id" : "623025",
			"name" : "玛曲县",
			"subItems" : []
		}, {
			"id" : "623026",
			"name" : "碌曲县",
			"subItems" : []
		}, {
			"id" : "623027",
			"name" : "夏河县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "63",
	"name" : "青海省",
	"subItems" : [ {
		"id" : "6301",
		"name" : "西宁市",
		"subItems" : [ {
			"id" : "630101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "630102",
			"name" : "城东区",
			"subItems" : []
		}, {
			"id" : "630103",
			"name" : "城中区",
			"subItems" : []
		}, {
			"id" : "630104",
			"name" : "城西区",
			"subItems" : []
		}, {
			"id" : "630105",
			"name" : "城北区",
			"subItems" : []
		}, {
			"id" : "630121",
			"name" : "大通回族土族自治县",
			"subItems" : []
		}, {
			"id" : "630122",
			"name" : "湟中县",
			"subItems" : []
		}, {
			"id" : "630123",
			"name" : "湟源县",
			"subItems" : []
		} ]
	}, {
		"id" : "6321",
		"name" : "海东地区",
		"subItems" : [ {
			"id" : "632121",
			"name" : "平安县",
			"subItems" : []
		}, {
			"id" : "632122",
			"name" : "民和县",
			"subItems" : []
		}, {
			"id" : "632123",
			"name" : "乐都县",
			"subItems" : []
		}, {
			"id" : "632126",
			"name" : "互助县",
			"subItems" : []
		}, {
			"id" : "632127",
			"name" : "化隆回族自治县",
			"subItems" : []
		}, {
			"id" : "632128",
			"name" : "循化县",
			"subItems" : []
		} ]
	}, {
		"id" : "6322",
		"name" : "海北州",
		"subItems" : [ {
			"id" : "632221",
			"name" : "门源县",
			"subItems" : []
		}, {
			"id" : "632222",
			"name" : "祁连县",
			"subItems" : []
		}, {
			"id" : "632223",
			"name" : "海晏县",
			"subItems" : []
		}, {
			"id" : "632224",
			"name" : "刚察县",
			"subItems" : []
		} ]
	}, {
		"id" : "6323",
		"name" : "黄南州",
		"subItems" : [ {
			"id" : "632321",
			"name" : "同仁县",
			"subItems" : []
		}, {
			"id" : "632322",
			"name" : "尖扎县",
			"subItems" : []
		}, {
			"id" : "632323",
			"name" : "泽库县",
			"subItems" : []
		}, {
			"id" : "632324",
			"name" : "河南县",
			"subItems" : []
		} ]
	}, {
		"id" : "6325",
		"name" : "海南州",
		"subItems" : [ {
			"id" : "632521",
			"name" : "共和县",
			"subItems" : []
		}, {
			"id" : "632522",
			"name" : "同德县",
			"subItems" : []
		}, {
			"id" : "632523",
			"name" : "贵德县",
			"subItems" : []
		}, {
			"id" : "632524",
			"name" : "兴海县",
			"subItems" : []
		}, {
			"id" : "632525",
			"name" : "贵南县",
			"subItems" : []
		} ]
	}, {
		"id" : "6326",
		"name" : "果洛州",
		"subItems" : [ {
			"id" : "632621",
			"name" : "玛沁县",
			"subItems" : []
		}, {
			"id" : "632622",
			"name" : "班玛县",
			"subItems" : []
		}, {
			"id" : "632623",
			"name" : "甘德县",
			"subItems" : []
		}, {
			"id" : "632624",
			"name" : "达日县",
			"subItems" : []
		}, {
			"id" : "632625",
			"name" : "久治县",
			"subItems" : []
		}, {
			"id" : "632626",
			"name" : "玛多县",
			"subItems" : []
		} ]
	}, {
		"id" : "6327",
		"name" : "玉树州",
		"subItems" : [ {
			"id" : "632721",
			"name" : "玉树县",
			"subItems" : []
		}, {
			"id" : "632722",
			"name" : "杂多县",
			"subItems" : []
		}, {
			"id" : "632723",
			"name" : "称多县",
			"subItems" : []
		}, {
			"id" : "632724",
			"name" : "治多县",
			"subItems" : []
		}, {
			"id" : "632725",
			"name" : "囊谦县",
			"subItems" : []
		}, {
			"id" : "632726",
			"name" : "曲麻莱县",
			"subItems" : []
		} ]
	}, {
		"id" : "6328",
		"name" : "海西州",
		"subItems" : [ {
			"id" : "632801",
			"name" : "格尔木市",
			"subItems" : []
		}, {
			"id" : "632802",
			"name" : "德令哈市",
			"subItems" : []
		}, {
			"id" : "632821",
			"name" : "乌兰县",
			"subItems" : []
		}, {
			"id" : "632822",
			"name" : "都兰县",
			"subItems" : []
		}, {
			"id" : "632823",
			"name" : "天峻县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "64",
	"name" : "宁夏回族自治区",
	"subItems" : [ {
		"id" : "6401",
		"name" : "银川市",
		"subItems" : [ {
			"id" : "640101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "640104",
			"name" : "兴庆区",
			"subItems" : []
		}, {
			"id" : "640105",
			"name" : "西夏区",
			"subItems" : []
		}, {
			"id" : "640106",
			"name" : "金凤区",
			"subItems" : []
		}, {
			"id" : "640121",
			"name" : "永宁县",
			"subItems" : []
		}, {
			"id" : "640122",
			"name" : "贺兰县",
			"subItems" : []
		}, {
			"id" : "640181",
			"name" : "灵武市",
			"subItems" : []
		} ]
	}, {
		"id" : "6402",
		"name" : "石嘴山市",
		"subItems" : [ {
			"id" : "640201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "640202",
			"name" : "大武口区",
			"subItems" : []
		}, {
			"id" : "640205",
			"name" : "惠农区",
			"subItems" : []
		}, {
			"id" : "640221",
			"name" : "平罗县",
			"subItems" : []
		} ]
	}, {
		"id" : "6403",
		"name" : "吴忠市",
		"subItems" : [ {
			"id" : "640301",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "640302",
			"name" : "利通区",
			"subItems" : []
		}, {
			"id" : "640323",
			"name" : "盐池县",
			"subItems" : []
		}, {
			"id" : "640324",
			"name" : "同心县",
			"subItems" : []
		}, {
			"id" : "640381",
			"name" : "青铜峡市",
			"subItems" : []
		} ]
	}, {
		"id" : "6404",
		"name" : "固原市",
		"subItems" : [ {
			"id" : "640401",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "640402",
			"name" : "原州区",
			"subItems" : []
		}, {
			"id" : "640422",
			"name" : "西吉县",
			"subItems" : []
		}, {
			"id" : "640423",
			"name" : "隆德县",
			"subItems" : []
		}, {
			"id" : "640424",
			"name" : "泾源县",
			"subItems" : []
		}, {
			"id" : "640425",
			"name" : "彭阳县",
			"subItems" : []
		} ]
	}, {
		"id" : "6405",
		"name" : "中卫市",
		"subItems" : [ {
			"id" : "640501",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "640502",
			"name" : "沙坡头区",
			"subItems" : []
		}, {
			"id" : "640521",
			"name" : "中宁县",
			"subItems" : []
		}, {
			"id" : "640522",
			"name" : "海原县",
			"subItems" : []
		} ]
	} ]
}, {
	"id" : "65",
	"name" : "新疆维吾尔自治区",
	"subItems" : [ {
		"id" : "6501",
		"name" : "乌鲁木齐市",
		"subItems" : [ {
			"id" : "650101",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "650102",
			"name" : "天山区",
			"subItems" : []
		}, {
			"id" : "650103",
			"name" : "沙依巴克区",
			"subItems" : []
		}, {
			"id" : "650104",
			"name" : "新市区",
			"subItems" : []
		}, {
			"id" : "650105",
			"name" : "水磨沟区",
			"subItems" : []
		}, {
			"id" : "650106",
			"name" : "头屯河区",
			"subItems" : []
		}, {
			"id" : "650107",
			"name" : "达坂城区",
			"subItems" : []
		}, {
			"id" : "650108",
			"name" : "东山区",
			"subItems" : []
		}, {
			"id" : "650121",
			"name" : "乌鲁木齐县",
			"subItems" : []
		} ]
	}, {
		"id" : "6502",
		"name" : "克拉玛依市",
		"subItems" : [ {
			"id" : "650201",
			"name" : "市辖区",
			"subItems" : []
		}, {
			"id" : "650202",
			"name" : "独山子区",
			"subItems" : []
		}, {
			"id" : "650203",
			"name" : "克拉玛依区",
			"subItems" : []
		}, {
			"id" : "650204",
			"name" : "白碱滩区",
			"subItems" : []
		}, {
			"id" : "650205",
			"name" : "乌尔禾区",
			"subItems" : []
		} ]
	}, {
		"id" : "6521",
		"name" : "吐鲁番地区",
		"subItems" : [ {
			"id" : "652101",
			"name" : "吐鲁番市",
			"subItems" : []
		}, {
			"id" : "652122",
			"name" : "鄯善县",
			"subItems" : []
		}, {
			"id" : "652123",
			"name" : "托克逊县",
			"subItems" : []
		} ]
	}, {
		"id" : "6522",
		"name" : "哈密地区",
		"subItems" : [ {
			"id" : "652201",
			"name" : "哈密市",
			"subItems" : []
		}, {
			"id" : "652222",
			"name" : "巴里坤县",
			"subItems" : []
		}, {
			"id" : "652223",
			"name" : "伊吾县",
			"subItems" : []
		} ]
	}, {
		"id" : "6523",
		"name" : "昌吉州",
		"subItems" : [ {
			"id" : "652301",
			"name" : "昌吉市",
			"subItems" : []
		}, {
			"id" : "652302",
			"name" : "阜康市",
			"subItems" : []
		}, {
			"id" : "652303",
			"name" : "米泉市",
			"subItems" : []
		}, {
			"id" : "652323",
			"name" : "呼图壁县",
			"subItems" : []
		}, {
			"id" : "652324",
			"name" : "玛纳斯",
			"subItems" : []
		}, {
			"id" : "652325",
			"name" : "奇台县",
			"subItems" : []
		}, {
			"id" : "652327",
			"name" : "吉木萨尔县",
			"subItems" : []
		}, {
			"id" : "652328",
			"name" : "木垒县",
			"subItems" : []
		} ]
	}, {
		"id" : "6527",
		"name" : "博尔塔拉蒙古自治州",
		"subItems" : [ {
			"id" : "652701",
			"name" : "博乐市",
			"subItems" : []
		}, {
			"id" : "652722",
			"name" : "精河县",
			"subItems" : []
		}, {
			"id" : "652723",
			"name" : "温泉县",
			"subItems" : []
		} ]
	}, {
		"id" : "6528",
		"name" : "巴音郭楞蒙古自治州",
		"subItems" : [ {
			"id" : "652801",
			"name" : "库尔勒市",
			"subItems" : []
		}, {
			"id" : "652822",
			"name" : "轮台县",
			"subItems" : []
		}, {
			"id" : "652823",
			"name" : "尉犁县",
			"subItems" : []
		}, {
			"id" : "652824",
			"name" : "若羌县",
			"subItems" : []
		}, {
			"id" : "652825",
			"name" : "且末县",
			"subItems" : []
		}, {
			"id" : "652826",
			"name" : "焉耆县",
			"subItems" : []
		}, {
			"id" : "652827",
			"name" : "和静县",
			"subItems" : []
		}, {
			"id" : "652828",
			"name" : "和硕县",
			"subItems" : []
		}, {
			"id" : "652829",
			"name" : "博湖县",
			"subItems" : []
		} ]
	}, {
		"id" : "6529",
		"name" : "阿克苏地区",
		"subItems" : [ {
			"id" : "652901",
			"name" : "阿克苏市",
			"subItems" : []
		}, {
			"id" : "652922",
			"name" : "温宿县",
			"subItems" : []
		}, {
			"id" : "652923",
			"name" : "库车县",
			"subItems" : []
		}, {
			"id" : "652924",
			"name" : "沙雅县",
			"subItems" : []
		}, {
			"id" : "652925",
			"name" : "新和县",
			"subItems" : []
		}, {
			"id" : "652926",
			"name" : "拜城县",
			"subItems" : []
		}, {
			"id" : "652927",
			"name" : "乌什县",
			"subItems" : []
		}, {
			"id" : "652928",
			"name" : "阿瓦提县",
			"subItems" : []
		}, {
			"id" : "652929",
			"name" : "柯坪县",
			"subItems" : []
		} ]
	}, {
		"id" : "6530",
		"name" : "克州",
		"subItems" : [ {
			"id" : "653001",
			"name" : "阿图什市",
			"subItems" : []
		}, {
			"id" : "653022",
			"name" : "阿克陶县",
			"subItems" : []
		}, {
			"id" : "653023",
			"name" : "阿合奇县",
			"subItems" : []
		}, {
			"id" : "653024",
			"name" : "乌恰县",
			"subItems" : []
		} ]
	}, {
		"id" : "6531",
		"name" : "喀什地区",
		"subItems" : [ {
			"id" : "653101",
			"name" : "喀什市",
			"subItems" : []
		}, {
			"id" : "653121",
			"name" : "疏附县",
			"subItems" : []
		}, {
			"id" : "653122",
			"name" : "疏勒县",
			"subItems" : []
		}, {
			"id" : "653123",
			"name" : "英吉沙县",
			"subItems" : []
		}, {
			"id" : "653124",
			"name" : "泽普县",
			"subItems" : []
		}, {
			"id" : "653125",
			"name" : "莎车县",
			"subItems" : []
		}, {
			"id" : "653126",
			"name" : "叶城县",
			"subItems" : []
		}, {
			"id" : "653127",
			"name" : "麦盖提县",
			"subItems" : []
		}, {
			"id" : "653128",
			"name" : "岳普湖县",
			"subItems" : []
		}, {
			"id" : "653129",
			"name" : "伽师县",
			"subItems" : []
		}, {
			"id" : "653130",
			"name" : "巴楚县",
			"subItems" : []
		}, {
			"id" : "653131",
			"name" : "塔什库尔干县",
			"subItems" : []
		} ]
	}, {
		"id" : "6532",
		"name" : "和田地区",
		"subItems" : [ {
			"id" : "653201",
			"name" : "和田市",
			"subItems" : []
		}, {
			"id" : "653221",
			"name" : "和田县",
			"subItems" : []
		}, {
			"id" : "653222",
			"name" : "墨玉县",
			"subItems" : []
		}, {
			"id" : "653223",
			"name" : "皮山县",
			"subItems" : []
		}, {
			"id" : "653224",
			"name" : "洛浦县",
			"subItems" : []
		}, {
			"id" : "653225",
			"name" : "策勒县",
			"subItems" : []
		}, {
			"id" : "653226",
			"name" : "于田县",
			"subItems" : []
		}, {
			"id" : "653227",
			"name" : "民丰县",
			"subItems" : []
		} ]
	}, {
		"id" : "6540",
		"name" : "伊犁州",
		"subItems" : [ {
			"id" : "654002",
			"name" : "伊宁市",
			"subItems" : []
		}, {
			"id" : "654003",
			"name" : "奎屯市",
			"subItems" : []
		}, {
			"id" : "654021",
			"name" : "伊宁县",
			"subItems" : []
		}, {
			"id" : "654022",
			"name" : "察布查尔县",
			"subItems" : []
		}, {
			"id" : "654023",
			"name" : "霍城县",
			"subItems" : []
		}, {
			"id" : "654024",
			"name" : "巩留县",
			"subItems" : []
		}, {
			"id" : "654025",
			"name" : "新源县",
			"subItems" : []
		}, {
			"id" : "654026",
			"name" : "昭苏县",
			"subItems" : []
		}, {
			"id" : "654027",
			"name" : "特克斯县",
			"subItems" : []
		}, {
			"id" : "654028",
			"name" : "尼勒克县",
			"subItems" : []
		} ]
	}, {
		"id" : "6542",
		"name" : "塔城地区",
		"subItems" : [ {
			"id" : "654201",
			"name" : "塔城市",
			"subItems" : []
		}, {
			"id" : "654202",
			"name" : "乌苏市",
			"subItems" : []
		}, {
			"id" : "654221",
			"name" : "额敏县",
			"subItems" : []
		}, {
			"id" : "654223",
			"name" : "沙湾县",
			"subItems" : []
		}, {
			"id" : "654224",
			"name" : "托里县",
			"subItems" : []
		}, {
			"id" : "654225",
			"name" : "裕民县",
			"subItems" : []
		}, {
			"id" : "654226",
			"name" : "和布克赛尔蒙古自治县",
			"subItems" : []
		} ]
	}, {
		"id" : "6543",
		"name" : "阿勒泰地区",
		"subItems" : [ {
			"id" : "654301",
			"name" : "阿勒泰市",
			"subItems" : []
		}, {
			"id" : "654321",
			"name" : "布尔津县",
			"subItems" : []
		}, {
			"id" : "654322",
			"name" : "富蕴县",
			"subItems" : []
		}, {
			"id" : "654323",
			"name" : "福海县",
			"subItems" : []
		}, {
			"id" : "654324",
			"name" : "哈巴河县",
			"subItems" : []
		}, {
			"id" : "654325",
			"name" : "青河县",
			"subItems" : []
		}, {
			"id" : "654326",
			"name" : "吉木乃县",
			"subItems" : []
		} ]
	}, {
		"id" : "6590",
		"name" : "省直辖行政单位",
		"subItems" : [ {
			"id" : "659001",
			"name" : "石河子市",
			"subItems" : []
		}, {
			"id" : "659002",
			"name" : "阿拉尔市",
			"subItems" : []
		}, {
			"id" : "659003",
			"name" : "图木舒克市",
			"subItems" : []
		}, {
			"id" : "659004",
			"name" : "五家渠市",
			"subItems" : []
		} ]
	} ]
}];//定义全国奥省市地区

var system_server_time=new Date();

var system_all_companies={};

var system_storage = window.localStorage;  

var system_show_cand_login_block=false;//控制显示求职者登录还是注册
var system_show_hr_login_block=false;//控制显示HR登录还是注册
