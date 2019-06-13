if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.NTTT_class == "undefined") GPVN.System.API.NTTT_class={};
GPVN.System.API.NTTT_class = function() {};
Object.extend(GPVN.System.API.NTTT_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	TimKiem: function(noitem, pnum, kw, id, type) {
		return this.invoke("TimKiem", {"noitem":noitem, "pnum":pnum, "kw":kw, "id":id, "type":type}, this.TimKiem.getArguments().slice(5));
	},
	NghiaTrangDongHo: function(page_index, kw, tree_id) {
		return this.invoke("NghiaTrangDongHo", {"page_index":page_index, "kw":kw, "tree_id":tree_id}, this.NghiaTrangDongHo.getArguments().slice(3));
	},
	Ucp_DanhSach: function(strSf) {
		return this.invoke("Ucp_DanhSach", {"strSf":strSf}, this.Ucp_DanhSach.getArguments().slice(1));
	},
	ChuyenVaoNghiaTrang: function(strObj, pageCode) {
		return this.invoke("ChuyenVaoNghiaTrang", {"strObj":strObj, "pageCode":pageCode}, this.ChuyenVaoNghiaTrang.getArguments().slice(2));
	},
	Ucp_ShowForm: function(id) {
		return this.invoke("Ucp_ShowForm", {"id":id}, this.Ucp_ShowForm.getArguments().slice(1));
	},
	Ucp_UpdateForm: function(strObj, pageCode) {
		return this.invoke("Ucp_UpdateForm", {"strObj":strObj, "pageCode":pageCode}, this.Ucp_UpdateForm.getArguments().slice(2));
	},
	Ucp_CreateNewTom: function(strObj, pageCode) {
		return this.invoke("Ucp_CreateNewTom", {"strObj":strObj, "pageCode":pageCode}, this.Ucp_CreateNewTom.getArguments().slice(2));
	},
	url: '/ajaxpro/DVG.Classes.Core.FamilyTree.Dvg_NTTT_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.NTTT = new GPVN.System.API.NTTT_class();

