(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{479:function(t,e,o){"use strict";o.r(e);var r={data:function(){return{show1:!1,loginInfo:{user:{email:"user2@email.com",password:"password"}}}},props:["submitForm"]},n=o(26),l=o(31),c=o.n(l),d=o(184),v=o(180),m=o(45),f=o(400),w=o(413),h=o(407),V=o(401),x=o(406),$=o(74),C=o(50),k=o(116),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",md:"6",ms:"8"}},[o("v-card",{staticClass:"elevation-12"},[o("v-toolbar",{staticClass:"brown--text",attrs:{color:"#78a152",flat:""}},[o("v-spacer"),o("v-toolbar-title",[t._v("Login")]),o("v-spacer")],1),o("v-card-text",[o("v-form",[o("v-text-field",{attrs:{color:"#78a152",label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.loginInfo.user.email,callback:function(e){t.$set(t.loginInfo.user,"email",e)},expression:"loginInfo.user.email"}}),o("v-text-field",{attrs:{color:"#78a152","append-icon":t.show1?"mdi-eye":"mdi-eye-off",id:"password",label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password",type:t.show1?"text":"password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.loginInfo.user.password,callback:function(e){t.$set(t.loginInfo.user,"password",e)},expression:"loginInfo.user.password"}})],1)],1),o("v-card-actions",[o("v-btn",{staticClass:"brown--text ml-2",attrs:{color:"#78a152"},on:{click:function(e){return t.submitForm(t.loginInfo)}}},[t._v("Login")]),o("v-btn",{staticClass:"brown--text mr-5",attrs:{color:"#78a152"}},[t._v("Sing Up sd")]),o("v-spacer"),o("span",[o("nuxt-link",{attrs:{to:"/forget_password"}},[t._v("Forget password?")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"1a5d5906",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardActions:m.a,VCardText:m.c,VCol:f.a,VContainer:w.a,VForm:h.a,VRow:V.a,VSpacer:x.a,VTextField:$.a,VToolbar:C.a,VToolbarTitle:k.b})},497:function(t,e,o){"use strict";o.r(e);o(53);var r={layout:"admin",methods:{userLogin:function(t){this.$store.dispatch("userLogin",t)}},mounted:function(){if(this.$auth.loggedIn)return this.$auth.$storage.getUniversal("redirect")?(this.$router.replace(this.$auth.$storage.getUniversal("redirect")),void this.$auth.$storage.removeUniversal("redirect")):void this.$router.replace("/admins")}},n=o(26),l=o(31),c=o.n(l),d=o(177),v=o(400),m=o(413),f=o(230),w=o(401),component=Object(n.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-container",[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"6"}},[e("div",{staticClass:"text-center"},[e("v-avatar",{attrs:{size:"100",tile:""}},[e("v-img",{attrs:{"aspect-ratio":"1",height:"100%",src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1)])],1)],1),e("LoginForm",{attrs:{submitForm:this.userLogin}})],1)}),[],!1,null,"7fbe22c8",null);e.default=component.exports;c()(component,{LoginForm:o(479).default}),c()(component,{VAvatar:d.a,VCol:v.a,VContainer:m.a,VImg:f.a,VRow:w.a})}}]);