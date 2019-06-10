package BLL;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Common.ConnectionPool;
import DAO.user.UserImpl;
import Model.UserModel;

public class UserBLL {
	UserImpl us;

	public UserBLL(ConnectionPool cp) {
		super();
		this.us = new UserImpl(cp);
	}
	public boolean addUser(UserModel item) {
		return this.us.addUser(item);
	}

	public boolean editUser(UserModel item) {
		
		return this.us.editUser(item);
	}

	public boolean delUser(UserModel item) {
		return this.us.delUser(item);
	}

	public UserModel getUser(int id) {
		ResultSet rs = this.us.getUser(id);
		UserModel item = new UserModel();
		if(rs!=null) {
			try {
				if(rs.next()) {
					item.setUsername(rs.getString("username"));
					item.setUserpass(rs.getString("userpass"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}

	public UserModel getUser(String username, String userpass) {
		
		ResultSet rs = this.us.getUser(username, userpass);
		UserModel item = new UserModel();
		if(rs!=null) {
			try {
				if(rs.next()) {
					item.setUsername(rs.getString("username"));
					item.setUserpass(rs.getString("userpass"));
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return item;
	}

	public ArrayList<UserModel> getUsers(UserModel similar, int page, byte total) {
		int at = (page-1)*total;
		ResultSet rs = this.us.getUsers(similar, at, total);
		ArrayList<UserModel> items = new ArrayList<UserModel>();
		if(rs!=null) {
			try {
				while(rs.next()) {
					UserModel item = new UserModel();
					item.setUsername(rs.getString("username"));
					item.setUserpass(rs.getString("userpass"));
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
}