package jsoft.ads.individual;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Common.ConnectionPool;
import jsoft.ads.object.IndividualObject;

public class IndividualControl {
	IndividualImpl us;

	public IndividualControl(ConnectionPool cp) {
		super();
		this.us = new IndividualImpl(cp);
	}

	public boolean addIndividual(IndividualObject item) {
		return this.us.addIndividual(item);
	}

	public boolean editIndividual(IndividualObject item) {

		return this.us.editIndividual(item);
	}

	public boolean delIndividual(IndividualObject item) {
		return this.us.delIndividual(item);
	}

	public IndividualObject getIndividual(int id) {
		ResultSet rs = this.us.getIndividual(id);
		IndividualObject item = new IndividualObject();
		if (rs != null) {
			try {
				if (rs.next()) {
					item.setIndividual_id(rs.getInt("Individual_id"));
					item.setParentage_id(rs.getInt("parentage_id"));
					item.setGender(rs.getInt("gender"));
					item.setFullname(rs.getString("fullname"));
					item.setFather(rs.getInt("father"));
					item.setDate_of_death(rs.getString("date_of_death"));
					item.setDate_of_birth(rs.getString("date_of_birth"));
					item.setBranch(rs.getString("branch"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}

	public ArrayList<IndividualObject> getChild(int chaid) {
		ResultSet rs = this.us.getIndividuals();
		ArrayList<IndividualObject> items = new ArrayList<IndividualObject>();
		if (rs != null) {
			try {
				while (rs.next()) {
					IndividualObject item = new IndividualObject();
					item.setIndividual_id(rs.getInt("Individual_id"));
					item.setParentage_id(rs.getInt("parentage_id"));
					item.setGender(rs.getInt("gender"));
					item.setFullname(rs.getString("fullname"));
					item.setFather(rs.getInt("father"));
					item.setDate_of_death(rs.getString("date_of_death"));
					item.setDate_of_birth(rs.getString("date_of_birth"));
					item.setBranch(rs.getString("branch"));
					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}

	public ArrayList<IndividualObject> getIndividuals() {
		ResultSet rs = this.us.getIndividuals();
		ArrayList<IndividualObject> items = new ArrayList<IndividualObject>();
		if (rs != null) {
			try {
				while (rs.next()) {
					IndividualObject item = new IndividualObject();
					item.setIndividual_id(rs.getInt("Individual_id"));
					item.setParentage_id(rs.getInt("parentage_id"));
					item.setGender(rs.getInt("gender"));
					item.setFullname(rs.getString("fullname"));
					item.setFather(rs.getInt("father"));
					item.setDate_of_death(rs.getString("date_of_death"));
					item.setDate_of_birth(rs.getString("date_of_birth"));
					item.setBranch(rs.getString("branch"));
					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}

	public ArrayList<IndividualObject> getIndividuals(IndividualObject similar, int page, byte total) {
		int at = (page - 1) * total;
		ResultSet rs = this.us.getIndividuals(similar, at, total);
		ArrayList<IndividualObject> items = new ArrayList<IndividualObject>();
		if (rs != null) {
			try {
				while (rs.next()) {
					IndividualObject item = new IndividualObject();
					item.setIndividual_id(rs.getInt("Individual_id"));
					item.setParentage_id(rs.getInt("parentage_id"));
					item.setGender(rs.getInt("gender"));
					item.setFullname(rs.getString("fullname"));
					item.setFather(rs.getInt("father"));
					item.setDate_of_death(rs.getString("date_of_death"));
					item.setDate_of_birth(rs.getString("date_of_birth"));
					item.setBranch(rs.getString("branch"));
					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;

	}

	public ConnectionPool getCP() {
		return this.us.getCP();
	}

	public void releaseConnection() {
		this.us.releaseConnection();
	}

	public String viewIndividual(ArrayList<IndividualObject> items) {
		
		String tmp = "";
		tmp +="<div class=\"rcontent-item item3\" >";

		for (IndividualObject item : items) {
			if(item.getBranch().length()!=1) {
				tmp +="&nbsp;&nbsp;<img src=\"adimgs/line3.gif\" align=\"absmiddle\" style=\"width: 12px; height: 19px;\">";
			}
//			for(int i = 0; i < item.getBranch().length(); i++) {
//				if(item.getBranch().charAt(i)=='-') {
//					tmp +="&nbsp;";
//				}
//			}
//			tmp +="&nbsp;";
			
			for(int i = 0; i < item.getBranch().length(); i++) {
				tmp +="&nbsp;";
			}
			
			if(item.getBranch().length()!=1) {
				tmp +="&nbsp;&nbsp;<img src=\"adimgs/line3.gif\" align=\"absmiddle\" style=\"width: 12px; height: 19px;\">";
			}
			tmp +=
					"<img align=\"absmiddle\" src=\"adimgs/plus4.gif\" style=\"padding: 0px; margin: 0px; width: 18px; height: 18px;\" id=\"img0\" onclick=\"img1()\">";
			tmp +=
					"<img src=\"adimgs/m.jpg\" align=\"absmiddle\" style=\"width: 18px; height: 18px;\" id=\"img1\">";

			tmp +="&nbsp;<span nowrap style=\"font:normal 11px tahoma; cursor: pointer\"><a href=\"#\">"+ item.getFullname() +"</a></span>";
			tmp +="&nbsp;<span nowrap style=\"font:normal 13px tahoma; border=\"red solid 1px\"\"><a href=\"#\">Edit</a></span>&nbsp;";
			tmp +="<span nowrap style=\"font:normal 13px tahoma; border=\"red solid 1px\"\"><a href=\"#\">Del</a></span>";
			tmp +="</br>";

		}

		tmp +="</div>";
		return tmp;
	}

}