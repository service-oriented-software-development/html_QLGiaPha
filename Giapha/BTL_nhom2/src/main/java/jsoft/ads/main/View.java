package jsoft.ads.main;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Common.ConnectionPool;
import Common.ConnectionPoolImpl;
import jsoft.ads.account.AccountControl;
import jsoft.ads.library.HttpUtil;
import jsoft.ads.object.AccountObject;

//@WebServlet("/view")
public class View extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public View() {
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
		String action = request.getParameter("action");
		if (action != null) {
			if (action.equalsIgnoreCase("logout")) {
				request.getSession().removeAttribute("Loginned");	
			}
		}
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
		AccountControl us = new AccountControl(cp);
		if (cp == null) {
			getServletContext().setAttribute("Pool", us.getCP());
		}
		String accountname = request.getParameter("loginid");
		String accountpass = request.getParameter("pass");
		if (accountname != null && accountpass != null) {
			accountname = accountname.trim();
			accountpass = accountpass.trim();
			if (!accountname.equalsIgnoreCase("") && !accountpass.equalsIgnoreCase("")) {
				AccountObject b = us.getAccount(accountname, accountpass);
				us.releaseConnection();
				if (b != null) {
					request.getSession().setAttribute("Loginned", b);
					response.sendRedirect(request.getContextPath() + "/view");
				} else {
					response.sendRedirect(request.getContextPath() + "/view?err=notok");
				}
			} else {
				response.sendRedirect(request.getContextPath() + "/view?err=value");
			}
		} else {
			response.sendRedirect(request.getContextPath() + "/view?err=param");
		}
	}

}