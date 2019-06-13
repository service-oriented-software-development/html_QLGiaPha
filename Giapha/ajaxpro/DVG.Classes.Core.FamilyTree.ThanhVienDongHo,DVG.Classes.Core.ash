if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.ThanhVien_class == "undefined") GPVN.System.API.ThanhVien_class={};
GPVN.System.API.ThanhVien_class = function() {};
Object.extend(GPVN.System.API.ThanhVien_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	TimKiem: function(strSf) {
		return this.invoke("TimKiem", {"strSf":strSf}, this.TimKiem.getArguments().slice(1));
	},
	GetBasicInfo: function(id) {
		return this.invoke("GetBasicInfo", {"id":id}, this.GetBasicInfo.getArguments().slice(1));
	},
	UpdateBasicInfo: function(strObj, pageCode) {
		return this.invoke("UpdateBasicInfo", {"strObj":strObj, "pageCode":pageCode}, this.UpdateBasicInfo.getArguments().slice(2));
	},
	UpdateHistory: function(id, id2, data, pageCode) {
		return this.invoke("UpdateHistory", {"id":id, "id2":id2, "data":data, "pageCode":pageCode}, this.UpdateHistory.getArguments().slice(4));
	},
	TaoThanhVienDauTien: function(strObj, pageCode) {
		return this.invoke("TaoThanhVienDauTien", {"strObj":strObj, "pageCode":pageCode}, this.TaoThanhVienDauTien.getArguments().slice(2));
	},
	TaoMoi: function(strObj, pageCode) {
		return this.invoke("TaoMoi", {"strObj":strObj, "pageCode":pageCode}, this.TaoMoi.getArguments().slice(2));
	},
	CapNhat: function(strObj, pageCode) {
		return this.invoke("CapNhat", {"strObj":strObj, "pageCode":pageCode}, this.CapNhat.getArguments().slice(2));
	},
	XoaThanhVien: function(id, pageCode) {
		return this.invoke("XoaThanhVien", {"id":id, "pageCode":pageCode}, this.XoaThanhVien.getArguments().slice(2));
	},
	HienThi: function(id) {
		return this.invoke("HienThi", {"id":id}, this.HienThi.getArguments().slice(1));
	},
	url: '/ajaxpro/DVG.Classes.Core.FamilyTree.ThanhVienDongHo,DVG.Classes.Core.ashx'
}));
GPVN.System.API.ThanhVien = new GPVN.System.API.ThanhVien_class();

