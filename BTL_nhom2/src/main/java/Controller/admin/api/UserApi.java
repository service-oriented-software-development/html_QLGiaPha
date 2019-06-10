package Controller.admin.api;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import BLL.UserBLL;
import Common.ConnectionPool;
import Common.ConnectionPoolImpl;
import DAO.user.UserImpl;
import Model.UserModel;
import Utils.HttpUtil;

@WebServlet("/home/login")
public class UserApi extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UserApi() {
		super();
		// TODO Auto-generated constructor stub
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
			response.sendRedirect("/adv/home");
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		ConnectionPool cp = (ConnectionPool) getServletContext().getAttribute("Pool");
		UserBLL us = new UserBLL(cp);
		if (cp == null) {
			getServletContext().setAttribute("Pool", us.getCP());
		}
		String username = request.getParameter("loginid");
		String userpass = request.getParameter("pass");
		if (username != null && userpass != null) {
			username = username.trim();
			userpass = userpass.trim();
			if (!username.equalsIgnoreCase("") && !userpass.equalsIgnoreCase("")) {
				UserModel b = us.getUser(username, userpass);
				us.releaseConnection();
				if (b != null) {
					request.getSession().setAttribute("Loginned", b);
					response.sendRedirect(request.getContextPath() + "/adv/admin/manager.jsp");
				} else {
					response.sendRedirect(request.getContextPath() + "/adv/home?err=notok");
				}
			} else {
				response.sendRedirect(request.getContextPath() + "/adv/home?err=value");
			}
		} else {
			response.sendRedirect(request.getContextPath()  +"/adv/home?err=param");
		}
		
//		ObjectMapper mapper = new ObjectMapper();
//		ConnectionPool cp = new ConnectionPoolImpl();
//		UserImpl ud = new UserImpl(cp);
//		request.setCharacterEncoding("UTF-8");
//		response.setContentType("application/json");
//		UserModel user = HttpUtil.of(request.getReader()).toModel(UserModel.class);
//		boolean b = ud.addUser(user);
//		mapper.writeValue(response.getOutputStream(), user);
		
	}
//	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//		// TODO Auto-generated method stub
//		doGet(request, response);
//	}
}
