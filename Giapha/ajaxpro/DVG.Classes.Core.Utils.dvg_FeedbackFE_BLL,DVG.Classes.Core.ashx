if(typeof System == "undefined") System={};
if(typeof System.Data == "undefined") System.Data={};
if(typeof System.Data.Utils == "undefined") System.Data.Utils={};
if(typeof System.Data.Utils.FeedBackFE_class == "undefined") System.Data.Utils.FeedBackFE_class={};
System.Data.Utils.FeedBackFE_class = function() {};
Object.extend(System.Data.Utils.FeedBackFE_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	Insert: function(obj, captCha, pageCode) {
		return this.invoke("Insert", {"obj":obj, "captCha":captCha, "pageCode":pageCode}, this.Insert.getArguments().slice(3));
	},
	url: '/ajaxpro/DVG.Classes.Core.Utils.dvg_FeedbackFE_BLL,DVG.Classes.Core.ashx'
}));
System.Data.Utils.FeedBackFE = new System.Data.Utils.FeedBackFE_class();

