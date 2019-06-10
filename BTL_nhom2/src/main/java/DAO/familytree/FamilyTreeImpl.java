package DAO.familytree;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import Common.ConnectionPool;
import DAO.basic.BasicImpl;
import Model.FamilyTreeModel;

public class FamilyTreeImpl extends BasicImpl implements FamilyTree {

	public FamilyTreeImpl(ConnectionPool cp) {
		super(cp, "FamilyTree");
		// TODO Auto-generated constructor stub
	}

	public boolean addFamilyTree(FamilyTreeModel item) {
		String sql = "insert giaphahole values(?,?,?,?)";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setInt(1, item.getKhoa());
			pre.setString(2, item.getTen());
			pre.setInt(3, item.getCha());
			pre.setString(4, item.getNhanh());
			return this.add(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public boolean editFamilyTree(FamilyTreeModel item) {
		// TODO Auto-generated method stub
		return false;
	}

	public boolean delFamilyTree(FamilyTreeModel item) {
		String sql = "delete giaphahole where khoa=?";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setInt(1, item.getKhoa());

			return this.del(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public ResultSet getFamilyTrees() {
		String sql = "select * from giaphahole ";
		sql += "order by nhanh";
		return this.get(sql);
	}

	public ResultSet getFamilyTrees(FamilyTreeModel similar, int at, byte total) {
		String sql = "select * from giaphahole ";
		sql += "Limit" + at + "," + total;
		return this.get(sql);
	}

	public ResultSet getFamilyTree(int id) {
		String sql = "select * from giaphahole where khoa=?";
		return this.get(sql, id);
	}

	public ResultSet getChild(int id) {
		String sql = "select * from giaphahole where cha=?";
		return this.get(sql, id);
	}

	

}
