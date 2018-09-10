Vue.component('blog-settings',{mixins:[settingsMixin],data:()=>({radioGroup:1,siteSettingsValid:!1,blogSettingsValid:!1,titleRules:[a=>!!a.trim()||'Required'],postPerPageRules:[a=>!!a||'Required',a=>/^[0-9]+$/.test(a)||'Integer only',a=>1<=parseInt(a)&&100>=parseInt(a)||'Must be between 1 and 100'],errMsg:''}),methods:{saveSiteSettings(){let a={title:this.title,tagline:this.tagline,timeZoneId:this.selectedTimeZoneId,googleAnalyticsTrackingID:this.ga};axios.post('/admin/settings?handler=siteSettings',a,this.$root.headers).then(()=>{this.$root.toast('Site settings saved!',0,'green')}).catch(a=>{this.errMsg=a.response.data[0].errorMessage})},saveBlogSettings(){let a={disqusShortname:this.disqusShortname,postListDisplay:this.selectedPostListDisplay,allowComments:this.allowComments};axios.post('/admin/settings?handler=blogSettings',a,this.$root.headers).then(()=>{this.$root.toast('Blog settings saved!',0,'green')}).catch(a=>{this.errMsg=a.response.data[0].errorMessage})}}});
//# sourceMappingURL=blog-settings.js.map