package Controller.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BLL.FamilyTreeBLL;
import Common.ConnectionPool;
import Model.FamilyTreeModel;

@WebServlet(urlPatterns = { "/familytree" })
public class FamilyTree extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public FamilyTree() {
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
		request.setCharacterEncoding("UTF-8");
		PrintWriter out = response.getWriter();
		ConnectionPool cp = (ConnectionPool) getServletContext().getAttribute("Pool");
		FamilyTreeBLL fs = new FamilyTreeBLL(cp);

		FamilyTreeModel ThuyTo = fs.getFamilyTree(1);
		ArrayList<FamilyTreeModel> items = fs.getFamilyTrees();

		fs.releaseConnection();

		
		out.print(fs.viewFamilyTree(items));
		

	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
