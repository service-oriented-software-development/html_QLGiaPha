package BLL;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Common.ConnectionPool;
import DAO.familytree.FamilyTreeImpl;
import Model.FamilyTreeModel;

public class FamilyTreeBLL {
	FamilyTreeImpl us;

	public FamilyTreeBLL(ConnectionPool cp) {
		super();
		this.us = new FamilyTreeImpl(cp);
	}

	public boolean addFamilyTree(FamilyTreeModel item) {
		return this.us.addFamilyTree(item);
	}

	public boolean editFamilyTree(FamilyTreeModel item) {

		return this.us.editFamilyTree(item);
	}

	public boolean delFamilyTree(FamilyTreeModel item) {
		return this.us.delFamilyTree(item);
	}

	public FamilyTreeModel getFamilyTree(int id) {
		ResultSet rs = this.us.getFamilyTree(id);
		FamilyTreeModel item = new FamilyTreeModel();
		if (rs != null) {
			try {
				if (rs.next()) {
					item.setKhoa(rs.getInt("Khoa"));
					item.setTen(rs.getString("Ten"));
					item.setCha(rs.getInt("Cha"));
					item.setNhanh(rs.getString("Nhanh"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}

	public ArrayList<FamilyTreeModel> getChild(int chaid) {
		ResultSet rs = this.us.getFamilyTrees();
		ArrayList<FamilyTreeModel> items = new ArrayList<FamilyTreeModel>();
		if (rs != null) {
			try {
				while (rs.next()) {
					FamilyTreeModel item = new FamilyTreeModel();
					item.setKhoa(rs.getInt("Khoa"));
					item.setTen(rs.getString("Ten"));
					item.setCha(rs.getInt("Cha"));
					item.setNhanh(rs.getString("Nhanh"));
					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}

	public ArrayList<FamilyTreeModel> getFamilyTrees() {
		ResultSet rs = this.us.getFamilyTrees();
		ArrayList<FamilyTreeModel> items = new ArrayList<FamilyTreeModel>();
		if (rs != null) {
			try {
				while (rs.next()) {
					FamilyTreeModel item = new FamilyTreeModel();
					item.setKhoa(rs.getInt("Khoa"));
					item.setTen(rs.getString("Ten"));
					item.setCha(rs.getInt("Cha"));
					item.setNhanh(rs.getString("Nhanh"));
					items.add(item);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return items;
	}

	public ArrayList<FamilyTreeModel> getFamilyTrees(FamilyTreeModel similar, int page, byte total) {
		int at = (page - 1) * total;
		ResultSet rs = this.us.getFamilyTrees(similar, at, total);
		ArrayList<FamilyTreeModel> items = new ArrayList<FamilyTreeModel>();
		if (rs != null) {
			try {
				while (rs.next()) {
					FamilyTreeModel item = new FamilyTreeModel();
					item.setKhoa(rs.getInt("Khoa"));
					item.setTen(rs.getString("Ten"));
					item.setCha(rs.getInt("Cha"));
					item.setNhanh(rs.getString("Nhanh"));
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

	public String viewFamilyTree(ArrayList<FamilyTreeModel> items) {
		
		String tmp = "";
		tmp +="<div class=\"rcontent-item item3\" >";

		for (FamilyTreeModel item : items) {
			if(item.getNhanh().length()!=1) {
				tmp +="&nbsp;&nbsp;<img src=\"template/familytree/images/line3.gif\" align=\"absmiddle\" style=\"width: 12px; height: 19px;\">";
			}
			for(int i = 0; i < item.getNhanh().length(); i++) {
				tmp +="&nbsp;";
			}
			
			if(item.getNhanh().length()!=1) {
				tmp +="&nbsp;&nbsp;<img src=\"template/familytree/images/line3.gif\" align=\"absmiddle\" style=\"width: 12px; height: 19px;\">";
			}
			tmp +=
					"<img align=\"absmiddle\" src=\"template/familytree/images/plus4.gif\" style=\"padding: 0px; margin: 0px; width: 18px; height: 18px;\" id=\"img0\" onclick=\"img1()\">";
			tmp +=
					"<img src=\"template/familytree/images/m.jpg\" align=\"absmiddle\" style=\"width: 18px; height: 18px;\" id=\"img1\">";

			tmp +="&nbsp;<span nowrap style=\"font:normal 11px tahoma; cursor: pointer\"><a href=\"#\">"+ item.getTen() +"</a></span>";
			tmp +="&nbsp;<span nowrap style=\"font:normal 13px tahoma; border=\"red solid 1px\"\"><a href=\"#\">Edit</a></span>&nbsp;";
			tmp +="<span nowrap style=\"font:normal 13px tahoma; border=\"red solid 1px\"\"><a href=\"#\">Del</a></span>";
			tmp +="</br>";

		}

		tmp +="</div>";
		return tmp;
	}

}
