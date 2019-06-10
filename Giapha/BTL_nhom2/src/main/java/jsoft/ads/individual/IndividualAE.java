package jsoft.ads.individual;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

//@WebServlet("individual/ae")
public class IndividualAE extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IndividualAE() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher rd = request.getRequestDispatcher("/views/admin/edit.jsp");
		rd.forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	   <servlet>
    <description></description>
    <display-name>IndividualAE</display-name>
    <servlet-name>IndividualAE</servlet-name>
    <servlet-class>jsoft.ads.individual.IndividualAE</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>IndividualAE</servlet-name>
    <url-pattern>/individual/ae</url-pattern>
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>AccountView</display-name>
    <servlet-name>AccountView</servlet-name>
    <servlet-class>jsoft.ads.account.AccountView</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>AccountView</servlet-name>
    <url-pattern>/account/view</url-pattern>
  </servlet-mapping>
  <servlet>
    <description></description>
    <display-name>ParentageView</display-name>
    <servlet-name>ParentageView</servlet-name>
    <servlet-class>jsoft.ads.parentage</servlet-class>
  </servlet>
  <servlet-mapping>
    <servlet-name>ParentageView</servlet-name>
    <url-pattern>/parentage/view</url-pattern>
  </servlet-mapping>
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
