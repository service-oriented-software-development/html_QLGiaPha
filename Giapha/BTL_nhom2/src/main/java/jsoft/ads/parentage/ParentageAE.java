package jsoft.ads.parentage;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.Charset;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.JsonObject;

import Common.ConnectionPool;
import jsoft.ads.library.HttpUtil;
import jsoft.ads.object.AccountObject;
import jsoft.ads.object.ParentageObject;

/**
 * Servlet implementation class ParentageAE
 */
public class ParentageAE extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";   
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ParentageAE() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		AccountObject ac = (AccountObject)request.getSession().getAttribute("Loginned");
		if(ac==null) {
			response.sendRedirect(request.getContextPath() + "/view");
		}else {
			response.setContentType(CONTENT_TYPE);
			PrintWriter out = response.getWriter();
			ConnectionPool cp = (ConnectionPool)getServletContext().getAttribute("CPool");
			ParentageControl pr = new ParentageControl(cp);
			
			ParentageObject prO = pr.getParentage(ac.getAccountname());
			Gson json = new Gson();
			String information = json.toJson(prO);
			//System.out.print(information);
			out.print(information);	
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String data = request.getParameter("data");
		HttpUtil util = new HttpUtil(data);
	    ParentageObject save = util.toModel(ParentageObject.class);
	    System.out.println(save.getAccount_name());

	}

}
