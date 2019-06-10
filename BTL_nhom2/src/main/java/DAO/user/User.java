package DAO.user;

import java.sql.ResultSet;
import java.util.ArrayList;

import Common.ShareControl;
import Model.UserModel;

public interface User extends ShareControl{
	public boolean addUser(UserModel item);
	public boolean editUser(UserModel item);
	public boolean delUser(UserModel item);
	
	public ResultSet getUser(int id);
	public ResultSet getUser(String username, String userpass);
	public ResultSet getUsers(UserModel similar, int at, byte total);
}