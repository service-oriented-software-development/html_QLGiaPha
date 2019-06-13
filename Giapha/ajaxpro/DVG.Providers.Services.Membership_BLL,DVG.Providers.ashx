if(typeof GPVN == "undefined") GPVN={};
if(typeof GPVN.System == "undefined") GPVN.System={};
if(typeof GPVN.System.API == "undefined") GPVN.System.API={};
if(typeof GPVN.System.API.UserFE_class == "undefined") GPVN.System.API.UserFE_class={};
GPVN.System.API.UserFE_class = function() {};
Object.extend(GPVN.System.API.UserFE_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	RegisterNew: function(userdata) {
		return this.invoke("RegisterNew", {"userdata":userdata}, this.RegisterNew.getArguments().slice(1));
	},
	Authenticate: function(username, password, cookie) {
		return this.invoke("Authenticate", {"username":username, "password":password, "cookie":cookie}, this.Authenticate.getArguments().slice(3));
	},
	AutoLogin: function() {
		return this.invoke("AutoLogin", {}, this.AutoLogin.getArguments().slice(0));
	},
	BrowseFolder: function(path) {
		return this.invoke("BrowseFolder", {"path":path}, this.BrowseFolder.getArguments().slice(1));
	},
	CreateFolder: function(name) {
		return this.invoke("CreateFolder", {"name":name}, this.CreateFolder.getArguments().slice(1));
	},
	DeleteFolder: function(name) {
		return this.invoke("DeleteFolder", {"name":name}, this.DeleteFolder.getArguments().slice(1));
	},
	DeleteFile: function(path) {
		return this.invoke("DeleteFile", {"path":path}, this.DeleteFile.getArguments().slice(1));
	},
	url: '/ajaxpro/DVG.Providers.Services.Membership_BLL,DVG.Providers.ashx'
}));
GPVN.System.API.UserFE = new GPVN.System.API.UserFE_class();

