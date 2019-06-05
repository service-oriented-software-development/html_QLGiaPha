package DAO.familytree;

import java.sql.ResultSet;

import Common.ShareControl;
import Model.FamilyTreeModel;

public interface FamilyTree extends ShareControl{
	public boolean addFamilyTree(FamilyTreeModel item);
	public boolean editFamilyTree(FamilyTreeModel item);
	public boolean delFamilyTree(FamilyTreeModel item);
	
	public ResultSet getChild(int id);
	public ResultSet getFamilyTree(int id);
	public ResultSet getFamilyTrees();
	public ResultSet getFamilyTrees(FamilyTreeModel similar, int at, byte total);
}
