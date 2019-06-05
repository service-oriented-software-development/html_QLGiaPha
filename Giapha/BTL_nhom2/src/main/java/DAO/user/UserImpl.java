package DAO.user;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Common.ConnectionPool;
import DAO.basic.BasicImpl;
import Model.UserModel;

public class UserImpl extends BasicImpl implements User {

	public UserImpl(ConnectionPool cp) {
		super(cp, "User");
		// TODO Auto-generated constructor stub
	}

	public boolean addUser(UserModel item) {
		String sql = "insert account values(?,?)";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getUsername());
			pre.setString(2, item.getUserpass());
			
			return this.add(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public boolean editUser(UserModel item) {
		
		return false;
	}

	public boolean delUser(UserModel item) {
		String sql = "delete account where username=?";
		PreparedStatement pre;
		try {
			pre = this.con.prepareStatement(sql);
			pre.setString(1, item.getUsername());
			
			return this.del(pre);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}

	public ResultSet getUser(int id) {
		String sql = "select * from account";
		return this.get(sql);
	}

	public ResultSet getUser(String username, String userpass) {
		String sql = "select * from account where ";
		sql += "username = ? and userpass=?";
		
		return this.get(sql, username, userpass);
	}

	public ResultSet getUsers(UserModel similar, int at, byte total) {
		String sql = "select * from account ";
		sql+="Limit" + at +"," + total;
		return this.get(sql);
	}

}