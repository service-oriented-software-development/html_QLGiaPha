if(typeof System == "undefined") System={};
if(typeof System.Security == "undefined") System.Security={};
if(typeof System.Security.Captcha_class == "undefined") System.Security.Captcha_class={};
System.Security.Captcha_class = function() {};
Object.extend(System.Security.Captcha_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	GetImgUrl: function() {
		return this.invoke("GetImgUrl", {}, this.GetImgUrl.getArguments().slice(0));
	},
	url: '/ajaxpro/DVG.Classes.Utils.Security.PUICaptcha,DVG.Classes.Utils.ashx'
}));
System.Security.Captcha = new System.Security.Captcha_class();

