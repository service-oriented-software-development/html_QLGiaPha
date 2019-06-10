package Controller.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BLL.UserBLL;
import Common.ConnectionPool;
import Common.ConnectionPoolImpl;
import Model.UserModel;
import Utils.HttpUtil;
import DAO.user.*;;

//@WebServlet(urlPatterns = {"/home", "/admin"})
@WebServlet("/home")
public class Home extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";
	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public Home() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType(CONTENT_TYPE);
		PrintWriter out = response.getWriter();
		
		
		RequestDispatcher rd = request.getRequestDispatcher("/views/web/home.jsp");
		rd.include(request, response);
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
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
					response.sendRedirect(request.getContextPath() + "/admin");
				} else {
					response.sendRedirect(request.getContextPath() + "/adv/home?err=notok");
				}
			} else {
				response.sendRedirect(request.getContextPath() + "/adv/home?err=value");
			}
		} else {
			response.sendRedirect(request.getContextPath()  +"/adv/home?err=param");
		}
	}

}
