if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.ThongKe_class == "undefined") GPVN.System.API.ThongKe_class={};
GPVN.System.API.ThongKe_class = function() {};
Object.extend(GPVN.System.API.ThongKe_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	GetToDisplay: function() {
		return this.invoke("GetToDisplay", {}, this.GetToDisplay.getArguments().slice(0));
	},
	url: '/ajaxpro/DVG.Classes.Core.Utils.ThongKe_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.ThongKe = new GPVN.System.API.ThongKe_class();

