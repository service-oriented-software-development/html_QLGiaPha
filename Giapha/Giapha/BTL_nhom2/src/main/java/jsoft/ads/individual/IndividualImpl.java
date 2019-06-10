package jsoft.ads.individual;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import Common.ConnectionPool;
import jsoft.ads.basic.BasicImpl;
import jsoft.ads.object.IndividualObject;

public class IndividualImpl extends BasicImpl implements Individual {

	public IndividualImpl(ConnectionPool cp) {
		super(cp, "Individual");
		// TODO Auto-generated constructor stub
	}

	public boolean addIndividual(IndividualObject item) {
		String sql = "insert into individual(fullname,gender,date_of_birth,date_of_death " + 
				",father,branch,parentage_id) values(?,?,?,?,?,?,?)";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getFullname());
			pre.setInt(2, item.getGender());
			pre.setString(3, item.getDate_of_birth());
			pre.setString(4, item.getDate_of_death());
			pre.setInt(4, item.getFather());
			pre.setString(4, item.getBranch());
			pre.setInt(4, item.getParentage_id());
			return this.add(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public boolean editIndividual(IndividualObject item) {
		String sql = "update individual set fullname=?,gender=?,date_of_birth=?,date_of_death=? " + 
				",father=?,branch=?,parentage_id=? where individual_id=?";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getFullname());
			pre.setInt(2, item.getGender());
			pre.setString(3, item.getDate_of_birth());
			pre.setString(4, item.getDate_of_death());
			pre.setInt(5, item.getFather());
			pre.setString(6, item.getBranch());
			pre.setInt(7, item.getParentage_id());
			pre.setInt(8, item.getIndividual_id());
			return this.add(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public boolean delIndividual(IndividualObject item) {
		String sql = "delete individual where individual_id=?";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setInt(1, item.getIndividual_id());

			return this.del(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public ResultSet getIndividuals() {
		String sql = "select * from individual ";
		sql += "order by branch";
		return this.get(sql);
	}

	public ResultSet getIndividuals(IndividualObject similar, int at, byte total) {
		String sql = "select * from individual ";
		sql += "Limit" + at + "," + total;
		return this.get(sql);
	}

	public ResultSet getIndividual(int id) {
		String sql = "select * from individual where individual_id=?";
		return this.get(sql, id);
	}

	public ResultSet getChild(int id) {
		String sql = "select * from individual where father=?";
		return this.get(sql, id);
	}

	

}