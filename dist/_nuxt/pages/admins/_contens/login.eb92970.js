(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{426:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{show1:!1,loginInfo:{email:"user1@email.com",password:"password"}}},props:["submitForm"]},n=o(24),l=o(31),c=o.n(l),d=o(191),v=o(184),m=o(45),f=o(404),h=o(405),w=o(416),V=o(406),k=o(409),x=o(74),$=o(50),C=o(85),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"6",ms:"8"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{attrs:{color:"teal darken-2",dark:"",flat:""}},[o("v-spacer"),o("v-toolbar-title",[t._v("Login")]),o("v-spacer")],1),o("v-card-text",[o("v-form",[o("v-text-field",{attrs:{color:"teal",label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.loginInfo.email,callback:function(e){t.$set(t.loginInfo,"email",e)},expression:"loginInfo.email"}}),o("v-text-field",{attrs:{color:"teal","append-icon":t.show1?"mdi-eye":"mdi-eye-off",id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",type:t.show1?"text":"password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.loginInfo.password,callback:function(e){t.$set(t.loginInfo,"password",e)},expression:"loginInfo.password"}})],1)],1),o("v-card-actions",[o("v-btn",{staticClass:"white--text ml-2",attrs:{color:"teal darken-2"},on:{click:function(e){return t.submitForm(t.loginInfo)}}},[t._v("Login")]),o("v-btn",{staticClass:"white--text mr-5",attrs:{color:"teal darken-2"},on:{click:function(e){return t.submitForm(t.loginInfo)}}},[t._v("Sing Up")]),o("v-spacer"),o("span",[o("nuxt-link",{attrs:{to:"/forget_password"}},[t._v("Forget password?")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"62c7b0ad",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCol:f.a,VContainer:h.a,VForm:w.a,VRow:V.a,VSpacer:k.a,VTextField:x.a,VToolbar:$.a,VToolbarTitle:C.b})},484:function(t,e,o){"use strict";o.r(e);o(46);var r={layout:"admin",methods:{userLogin:function(t){this.$store.dispatch("userLogin",t)}},mounted:function(){if(this.$auth.loggedIn)return this.$auth.$storage.getUniversal("redirect")?(this.$router.replace(this.$auth.$storage.getUniversal("redirect")),void this.$auth.$storage.removeUniversal("redirect")):void this.$router.replace("/admin")}},n=o(24),l=o(31),c=o.n(l),d=o(181),v=o(404),m=o(405),f=o(410),h=o(150),w=o(406),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"text-center"},[e("v-avatar",{attrs:{size:"100",tile:""}},[e("v-img",{attrs:{"aspect-ratio":"1",height:"100%",src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1)])],1)],1),e("LoginForm",{attrs:{submitForm:this.userLogin}}),e("v-footer",{attrs:{padless:"",absolute:""}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[this._v(this._s((new Date).getFullYear())+"\n©"),e("strong",[this._v("KH LAND CO.,LTD.")])])],1)],1)}),[],!1,null,"392281bb",null);e.default=component.exports;c()(component,{LoginForm:o(426).default}),c()(component,{VAvatar:d.a,VCol:v.a,VContainer:m.a,VFooter:f.a,VImg:h.a,VRow:w.a})}}]);