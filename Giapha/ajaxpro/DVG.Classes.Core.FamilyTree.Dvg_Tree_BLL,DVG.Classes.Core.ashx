if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.CayGiaPha_class == "undefined") GPVN.System.API.CayGiaPha_class={};
GPVN.System.API.CayGiaPha_class = function() {};
Object.extend(GPVN.System.API.CayGiaPha_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	TimKiem: function(pagesize, pageindex, id, keyword) {
		return this.invoke("TimKiem", {"pagesize":pagesize, "pageindex":pageindex, "id":id, "keyword":keyword}, this.TimKiem.getArguments().slice(4));
	},
	GetTopLatest: function() {
		return this.invoke("GetTopLatest", {}, this.GetTopLatest.getArguments().slice(0));
	},
	GetInfoToDisplay: function(id) {
		return this.invoke("GetInfoToDisplay", {"id":id}, this.GetInfoToDisplay.getArguments().slice(1));
	},
	GetUcpInfo: function() {
		return this.invoke("GetUcpInfo", {}, this.GetUcpInfo.getArguments().slice(0));
	},
	Update: function(strObj, pageCode) {
		return this.invoke("Update", {"strObj":strObj, "pageCode":pageCode}, this.Update.getArguments().slice(2));
	},
	UcpFirstCreation: function(strObj, pageCode) {
		return this.invoke("UcpFirstCreation", {"strObj":strObj, "pageCode":pageCode}, this.UcpFirstCreation.getArguments().slice(2));
	},
	url: '/ajaxpro/DVG.Classes.Core.FamilyTree.Dvg_Tree_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.CayGiaPha = new GPVN.System.API.CayGiaPha_class();

