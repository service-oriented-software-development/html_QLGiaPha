if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.TinTuc_class == "undefined") GPVN.System.API.TinTuc_class={};
GPVN.System.API.TinTuc_class = function() {};
Object.extend(GPVN.System.API.TinTuc_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	TinDongHo: function(page_index, tree_id) {
		return this.invoke("TinDongHo", {"page_index":page_index, "tree_id":tree_id}, this.TinDongHo.getArguments().slice(2));
	},
	Ucp_ShowList: function(strSf) {
		return this.invoke("Ucp_ShowList", {"strSf":strSf}, this.Ucp_ShowList.getArguments().slice(1));
	},
	Ucp_ShowForm: function(id) {
		return this.invoke("Ucp_ShowForm", {"id":id}, this.Ucp_ShowForm.getArguments().slice(1));
	},
	Ucp_UpdateNews: function(strObj, pageCode) {
		return this.invoke("Ucp_UpdateNews", {"strObj":strObj, "pageCode":pageCode}, this.Ucp_UpdateNews.getArguments().slice(2));
	},
	Ucp_CreateNews: function(strObj, pageCode) {
		return this.invoke("Ucp_CreateNews", {"strObj":strObj, "pageCode":pageCode}, this.Ucp_CreateNews.getArguments().slice(2));
	},
	url: '/ajaxpro/DVG.Classes.Core.CMS.Dvg_Content_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.TinTuc = new GPVN.System.API.TinTuc_class();

