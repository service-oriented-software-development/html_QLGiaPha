if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.LienKet_class == "undefined") GPVN.System.API.LienKet_class={};
GPVN.System.API.LienKet_class = function() {};
Object.extend(GPVN.System.API.LienKet_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	GetToDisplay: function() {
		return this.invoke("GetToDisplay", {}, this.GetToDisplay.getArguments().slice(0));
	},
	url: '/ajaxpro/DVG.Classes.Core.Utils.LienKet_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.LienKet = new GPVN.System.API.LienKet_class();

