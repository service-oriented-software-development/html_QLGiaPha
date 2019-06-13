if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.DongHoVN_class == "undefined") GPVN.System.API.DongHoVN_class={};
GPVN.System.API.DongHoVN_class = function() {};
Object.extend(GPVN.System.API.DongHoVN_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	GetActived: function() {
		return this.invoke("GetActived", {}, this.GetActived.getArguments().slice(0));
	},
	GetToDropDown: function() {
		return this.invoke("GetToDropDown", {}, this.GetToDropDown.getArguments().slice(0));
	},
	url: '/ajaxpro/DVG.Classes.Core.FamilyTree.DongHo_BLL,DVG.Classes.Core.ashx'
}));
GPVN.System.API.DongHoVN = new GPVN.System.API.DongHoVN_class();

