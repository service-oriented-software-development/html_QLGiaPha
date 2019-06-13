if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.Phado_class == "undefined") GPVN.System.API.Phado_class={};
GPVN.System.API.Phado_class = function() {};
Object.extend(GPVN.System.API.Phado_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	XemChiTiet: function(id, tid) {
		return this.invoke("XemChiTiet", {"id":id, "tid":tid}, this.XemChiTiet.getArguments().slice(2));
	},
	url: '/ajaxpro/DVG.Classes.Core.FamilyTree.Phado,DVG.Classes.Core.ashx'
}));
GPVN.System.API.Phado = new GPVN.System.API.Phado_class();

