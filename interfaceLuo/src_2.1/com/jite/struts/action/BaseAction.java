package com.jite.struts.action;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.Map;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.Preparable;

public class BaseAction extends ActionSupport implements SessionAware, ServletRequestAware, ServletResponseAware,Preparable{

	private static final long serialVersionUID = -2460743127716872237L;
	protected Map dataMap;
	protected ServletContext servletContext = null;
	protected HttpServletRequest request;
	protected HttpServletResponse response;	
	protected JSONObject returnJson;
	protected Map session;
	protected Integer operater;//定义是什么访问接口 10：网站， 20 ：Andord， 30：iOS ，40 ：Weixin 
	
	public Map getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map dataMap) {
		this.dataMap = dataMap;
	}

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
		try {
			this.request.setCharacterEncoding("UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
	}

	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}

	public void prepare() throws Exception {
		
	}	
	
	// redirect
	protected void redirect(HttpServletResponse response, String toURL) {
		try {
			response.sendRedirect(toURL);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	// forword
	protected void forward(HttpServletRequest request,
			HttpServletResponse response, String toURL) {
		try {
			this.getRequest().getRequestDispatcher(toURL).forward(request,
					response);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public HttpServletRequest getRequest() {
		return ServletActionContext.getRequest();
	}

	public HttpServletResponse getResponse() {
		return ServletActionContext.getResponse();
	}

	public ServletContext getServletContext() {
		if (null == this.servletContext) {
			return ServletActionContext.getServletContext();
		}
		return this.servletContext;
	}

	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}
	/**
	 * 获取session作用域中的�?(admin paltform)
	 * key:adminUserName
	 * @return  String
	 */
	protected String getCurrentUserInSession(){
		return (String)ActionContext.getContext().getSession().get("loginedUser");
	}

	protected void returnJsonStr(String str){
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out;
		
		try {
			String strOutJSONP;
			out = response.getWriter();
			
			//此时str是一个纯JSON格式的数据，必须将其变成作实参被放入回调函数中的形式（即JSONP格式）。
			if(request.getParameter("callback")!=null){   //有 ?callback=回调函数名，则采用JSONP方式返回数据
				//jquery.jsonp.js插件中定义了默认的回调函数名为_jqjsp
				//System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + request.getParameter("callback"));  //测试用
				
				strOutJSONP = request.getParameter("callback")+"("+str+")";
			}else{
				strOutJSONP = str;   //如果没有request.getParameter("callback")，则采用AJAX方式返回纯JSON格式数据
			}
			
			//将JSONP格式的数据通过IO输出流输出
			out.println(strOutJSONP);
			
			out.flush();
			out.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}
	
	protected void returnError(String code,String str){
		returnJson=new JSONObject();
		returnJson.put("code", code);
		returnJson.put("info",str);
		returnJsonStr(returnJson.toString());
	}

	public Integer getOperater() {
		return operater;
	}

	public void setOperater(Integer operater) {
		this.operater = operater;
	}
	
}
