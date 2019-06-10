package Controller.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/parentage")
public class Parentage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String CONTENT_TYPE = "text/html; charset=UTF-8";
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Parentage() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType(CONTENT_TYPE);
		PrintWriter out = response.getWriter();
		
		out.print("<div class=\"card-body\" style=\"background-image: url('icon/cloud.png');\">");
		out.print("<h4 class=\"card-title\">");
		out.print("<img src=\"/m/icon/favicon-32x32.png\" alt=\"vietnamgiapha\">Gia phả họ LƯƠNG - Nam Phước");
		out.print("<button class=\"btn btn-sm btn-warning\">1</button>");
			out.print("<div class=\"fb-share-button fb_iframe_widget\" data-href=\"http://vietnamgiapha.com/XemGiaPha/1/giapha.html\" data-layout=\"button_count\" data-size=\"large\" >");
			out.print("</div>");
		out.print("</h4>");
		out.print("<div class=\"card-block text-center\">");
		out.print("<p class=\"card-text\">ở tại Thị trấn Nam Phước, tỉnh Quảng Nam, Việt Nam, ngày cập nhật cuối cùng 18/01/2038 <a class=\"btn btn-sm pull-right btn-warning\" target=\"_blank\" href=\"/XemGiaPha/1/giapha.html\">Xem chi tiết</a>");
		out.print("</p>");
		out.print("</div>");
		out.print("</div>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
