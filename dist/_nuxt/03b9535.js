(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{141:function(t,e,o){var content=o(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("938f3782",content,!0,{sourceMap:!1})},142:function(t,e,o){var content=o(355);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("bc8ca87c",content,!0,{sourceMap:!1})},143:function(t,e,o){var content=o(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("83d56722",content,!0,{sourceMap:!1})},144:function(t,e,o){var content=o(365);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("5d2cfce8",content,!0,{sourceMap:!1})},145:function(t,e,o){var content=o(385);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(13).default)("6e116ed7",content,!0,{sourceMap:!1})},189:function(t,e,o){"use strict";o.r(e);o(11),o(9),o(7),o(6),o(10);var n=o(2),r=o(87);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var l={props:{source:String},data:function(){return{drawer:!1,user_menu_items:[{icon:"mdi-user",text:"Profile",route:"/admin/users/profile"},{icon:"mdi-user",text:"update",route:"/admin/users/update"},{icon:"mdi-logout",text:"Logout",route:""}],items:[{icon:"mdi-home-city-outline",text:"ផ្ទះគំរូ",route:"/admin/houses"},{icon:"mdi-home-group",text:"ប្រភេទម៉ូតផ្ទះគំរូ",route:"/admin/house_models"},{icon:"mdi-folder-home",text:"ផ្ទះគំរូរបស់អតិថិជន",route:"/admin/modified_houses"},{icon:"mdi-home",text:"សំភារះសំរាប់ផ្ទះ",route:"/admin/utilities"},{icon:"mdi-account-group",text:"ផ្នាក់ងារលក់",route:"/admin/agencies"},{icon:"mdi-cloud-upload",text:"បញ្ចូលទិន្ន័យផ្ទះ",route:"/admin/import-file"},{icon:"mdi-lifebuoy",text:"ជំនួយក្នុងការប្រើប្រាស់",route:"/admin/system-support"},{icon:"mdi-comment-account-outline",text:"មតិអតិថិជន",route:"/admin/feedback"}],items2:[{picture:28,text:"Brian Nang"},{picture:38,text:"Panha Leng"},{picture:48,text:"Khemrith"},{picture:58,text:"Emma"},{picture:78,text:"Pisey"}]}},methods:{Linkto:function(t){this.$router.push({path:t})},Logout:function(){this.$store.dispatch("logOut"),this.$router.push("/admin/login")}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["auth"]))},m=o(25),d=o(27),h=o.n(d),v=o(425),f=o(426),_=o(185),x=o(197),k=o(439),w=o(411),y=o(182),j=o(151),V=o(181),C=o(113),S=o(183),I=o(184),L=o(21),O=o(97),R=o(413),D=o(427),T=o(428),$=o(412),E=o(90),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-container",[o("div",{staticClass:"mb-5 text-center"},[o("nuxt-link",{attrs:{to:"/admin"}},[o("v-avatar",{attrs:{size:"80",tile:""}},[o("v-img",{attrs:{src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1)],1),o("v-divider"),o("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return o("v-list-item",{key:e.text,attrs:{router:"",to:e.route}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.text))])],1)],1)})),o("v-subheader",{staticClass:"mt-4 grey--text text--darken-1"},[t._v("Admin Users")]),o("v-list",t._l(t.items2,(function(e){return o("v-list-item",{key:e.text,attrs:{link:""}},[o("v-list-item-avatar",[o("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKSEuKKwqIqbJH-NRiDHluGbuC9ysMW99BPA&usqp=CAU",alt:""}})]),o("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)})),1),o("v-list",[o("v-list-item",{attrs:{link:""},on:{click:t.Logout}},[o("v-list-item-action",[o("v-icon",{attrs:{color:"#6b4912"}},[t._v("mdi-logout")])],1),o("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)],1),o("v-app-bar",{attrs:{app:"","clipped-left":""}},[o("v-app-bar-nav-icon",{attrs:{color:"#6b4912"},on:{click:function(e){t.drawer=!0}}}),o("v-toolbar-title",[o("span",{staticClass:"title"},[o("nuxt-link",{staticClass:"text-decoration-none",attrs:{to:"/admin"}},[t._v("KH LAND")])],1)]),o("v-spacer"),o("v-menu",{attrs:{"z-index":"90",transition:"slide-y-transition",small:"",bottom:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[o("v-btn",t._g(t._b({attrs:{color:"#6b4912",text:""}},"v-btn",r,!1),n),[o("v-icon",{attrs:{left:""}},[t._v("mdi-account")]),t._v(t._s(t.$auth.user.email))],1)]}}])},[o("v-list",[o("v-list-item",{attrs:{router:"",to:"/admin/users/2"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-box-outline")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("My Profile")])],1)],1),o("v-divider"),o("v-list-item",{attrs:{router:"",to:"/admin/users/edit/2"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-account-edit")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Edit Profile")])],1)],1),o("v-divider"),o("v-list-item",{attrs:{router:"",to:"settings"}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-cog")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Settings")])],1)],1),o("v-divider"),o("v-list-item",{attrs:{color:"red"},on:{click:t.Logout}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-logout")])],1),o("v-list-item-content",[o("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"7e05c916",null);e.default=component.exports;h()(component,{VAppBar:v.a,VAppBarNavIcon:f.a,VAvatar:_.a,VBtn:x.a,VContainer:k.a,VDivider:w.a,VIcon:y.a,VImg:j.a,VList:V.a,VListItem:C.a,VListItemAction:S.a,VListItemAvatar:I.a,VListItemContent:L.a,VListItemIcon:O.a,VListItemTitle:L.c,VMenu:R.a,VNavigationDrawer:D.a,VSpacer:T.a,VSubheader:$.a,VToolbarTitle:E.b})},192:function(t,e,o){"use strict";var n=o(1),r=o(80);r.a.config.silent=!0,n.a.use(r.a),e.a=new r.a({theme:{themes:{light:{primary:"#7aa84f",secondary:"#66481c",accent:"#8c9eff",error:"#b71c1c"}}}})},193:function(t,e,o){"use strict";o(26),o(30);e.a=function(t){var e=t.$axios,o=t.store,n=t.redirect;e.onError((function(t){t.response&&500===t.response.status&&n("/error")})),e.interceptors.response.use((function(t){return 200===t.status&&t.request.responseURL&&t.request.responseURL.includes("login")&&(o.$auth.setUser(t.data),o.$auth.setToken(t.headers.authorization)),t}))}},194:function(t,e,o){"use strict";var n=o(1),r=o(245);n.a.use(r.a)},241:function(t,e,o){"use strict";var n={data:function(){return{dialog:!1,nav:[{icon:"mdi-home",text:"Home",title:"Back to Home page",active:!0,link:"/"},{icon:"mdi-information-outline",text:"About",title:"About this demo",active:!1,link:"/about"},{icon:"mdi-lifebuoy",text:"SUPPORT",title:"Some stuff that needs doing",active:!1,link:"support"},{icon:"mdi-email",text:"Contact",title:"Our Contact info",active:!1,link:"contact"},{icon:"mdi-login",text:"login",title:"Our Contact info",active:!1,link:"login"}]}},methods:{toRoute:function(link){this.$router.push(link),this.dialog=!1}}},r=(o(356),o(25)),c=o(27),l=o.n(c),m=o(425),d=o(426),h=o(197),v=o(188),f=o(432),_=o(182),x=o(151),k=o(181),w=o(113),y=o(21),j=o(186),V=o(97),C=o(428),S=o(90),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-app-bar",{staticClass:"d-none d-sm-block",attrs:{app:"",color:"#DFE0DF"}},[o("v-toolbar-title",[o("nuxt-link",{attrs:{to:"/"}},[o("v-img",{attrs:{"max-height":"60","max-width":"60",contain:"",src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1),o("v-toolbar-items",{staticClass:"ml-16"},[o("v-btn",{staticClass:"navbar-items",attrs:{to:"/configuration",text:""}},[t._v("Config you house now")])],1),o("v-spacer"),o("v-toolbar-items",{staticClass:"ml-16"},t._l(t.nav,(function(e){return o("v-btn",{key:e.icon,staticClass:"navbar-items",attrs:{text:"",title:e.title,to:e.link}},[t._v(t._s(e.text))])})),1)],1),o("v-app-bar",{staticClass:"d-block d-sm-none",attrs:{app:""}},[o("v-toolbar-title",[o("nuxt-link",{attrs:{to:"/"}},[o("v-img",{attrs:{"max-height":"50","max-width":"50",contain:"",src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1),o("v-spacer"),o("v-btn",{attrs:{color:"primary",icon:""},on:{click:function(e){t.dialog=!0}}},[o("v-app-bar-nav-icon")],1)],1),o("v-dialog",{staticClass:"d-flex d-sm-none",attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-app-bar",{attrs:{flat:""}},[o("v-toolbar-title",[o("a",{attrs:{href:"/"}},[o("v-img",{attrs:{"max-height":"50","max-width":"50",contain:"",src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)]),o("v-toolbar-items",{staticClass:"ml-16"},[o("v-btn",{staticClass:"navbar-items",attrs:{to:"/configuration",text:""}},[t._v("Config you house now")])],1),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),o("v-list",{attrs:{flat:""}},[o("v-list-item-group",t._l(t.nav,(function(e,n){return o("v-list-item",{key:n,staticClass:"text-transform-uppercase",on:{click:function(o){return t.toRoute(e.link)}}},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),o("v-list-item-content",[o("v-list-item-title",{attrs:{to:e.link},domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"4b425117",null),I=component.exports;l()(component,{VAppBar:m.a,VAppBarNavIcon:d.a,VBtn:h.a,VCard:v.a,VDialog:f.a,VIcon:_.a,VImg:x.a,VList:k.a,VListItem:w.a,VListItemContent:y.a,VListItemGroup:j.a,VListItemIcon:V.a,VListItemTitle:y.c,VSpacer:C.a,VToolbarItems:S.a,VToolbarTitle:S.b});var L={data:function(){return{icons:["mdi-facebook","mdi-instagram","mdi-twitter","mdi-telegram","mdi-whatsapp"]}}},O=o(45),R=o(423),D=o(439),T=o(411),$=o(429),E=o(424),M=Object(r.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-footer",{attrs:{color:"green darken-1",padless:""}},[o("v-container",[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"10",color:"green darken-1"}},[o("v-card",{staticClass:"green darken-1 white--text",attrs:{flat:"",tile:""}},[o("v-card-text",{staticClass:"ml-n8"},[t._l(t.icons,(function(e){return o("v-btn",{key:e,staticClass:"mx-4 blue-grey--text text--darken-4",attrs:{icon:"",small:"",fab:"",outlined:""}},[o("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e))])],1)})),o("v-spacer")],2),o("v-card-text",{staticClass:"blue-grey--text text--darken-4 pt-0 pa-0"},[t._v("Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.")]),o("v-divider",{staticStyle:{"background-color":"#3E2723"}}),o("v-card-text",{staticClass:"blue-grey--text text--darken-4 pa-0"},[t._v("Copyright\n©\n"+t._s((new Date).getFullYear())),o("span",{staticClass:"ml-2 mr-2"},[t._v("KHLAND CO.,LTD")]),t._v("All Rights Reserved")])],1)],1)],1)],1)],1)}),[],!1,null,"c47b210a",null),B=M.exports;l()(M,{VBtn:h.a,VCard:v.a,VCardText:O.c,VCol:R.a,VContainer:D.a,VDivider:T.a,VFooter:$.a,VIcon:_.a,VRow:E.a,VSpacer:C.a});o(54);var z=o(15),A={data:function(){return{comment_dialog:"",feedback:{title:"",comment:"",picture:[],rate:4.5}}},methods:{formSubmit:function(){var t=this;return Object(z.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new FormData).append("feedback[title]",t.feedback.title),o.append("feedback[rate]",t.feedback.rate),o.append("feedback[comment]",t.feedback.comment),void 0!==t.feedback.picture[0]&&o.append("feedback[picture]",t.feedback.picture[0]),e.next=7,t.$store.dispatch("feedback/addFeedback",o);case 7:e.sent,t.feedback={title:"",comment:"",rate:1,picture:[]},t.comment_dialog=!1;case 10:case"end":return e.stop()}}),e)})))()}},computed:{isLoading:function(){return this.$store.getters["feedback/isLoading"]}}},N=(o(364),o(253)),P=o(433),F=o(434),U=o(413),H=o(180),G=o(440),J=o(75),K=o(435),Y=Object(r.a)(A,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-btn",{staticClass:"comment-button-sheet",attrs:{outlined:"",color:"brown darken-3",fab:""},on:{click:function(e){t.comment_dialog=!t.comment_dialog}}},[t.comment_dialog?o("v-icon",[t._v("mdi-close")]):o("v-icon",[t._v("mdi-comment")])],1),o("v-dialog",{staticClass:"comments-dialog",attrs:{scrollable:"",transition:"fab-transition","max-width":"500px"},model:{value:t.comment_dialog,callback:function(e){t.comment_dialog=e},expression:"comment_dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-center"},[o("p",[t._v("Give us a feedback")]),o("v-spacer"),o("v-btn",{attrs:{text:"",icon:"",small:"",color:"brown darken-1"},on:{click:function(e){t.comment_dialog=!1}}},[o("v-icon",[t._v("mdi-close")])],1)],1),o("v-card-subtitle",[o("div",[t._v("This will help us serve you better.")])]),o("v-card-text",[o("v-form",{ref:"feedback_form"},[o("div",{staticClass:"text-left"},[o("span",[t._v("Rating")]),o("v-rating",{attrs:{color:"yellow darken-3","background-color":"grey darken-1","empty-icon":"$ratingFull","half-increments":"",hover:""},model:{value:t.feedback.rate,callback:function(e){t.$set(t.feedback,"rate",e)},expression:"feedback.rate"}})],1),o("v-menu",{attrs:{bottom:"",left:""}},[o("v-btn",{attrs:{icon:""}},[o("v-icon",[t._v("mdi-dots-vertical")])],1)],1),o("v-text-field",{attrs:{color:"brown darken-1",label:"Title",required:""},model:{value:t.feedback.title,callback:function(e){t.$set(t.feedback,"title",e)},expression:"feedback.title"}}),o("v-textarea",{attrs:{rows:"3",color:"brown darken-1",label:"Feedback",required:""},model:{value:t.feedback.comment,callback:function(e){t.$set(t.feedback,"comment",e)},expression:"feedback.comment"}}),o("v-file-input",{attrs:{color:"brown darken-1",counter:"",label:"Picture",multiple:"",placeholder:"Select file","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.index,text=e.text;return[n<2?o("v-chip",{attrs:{color:"brown darken-1",dark:"",label:"",small:""}},[t._v(t._s(text))]):2===n?o("span",{staticClass:"overline grey--text text--darken-3 mx-2"},[t._v("+ "+t._s(t.feedback.picture.length-2)+" File(s)")]):t._e()]}}]),model:{value:t.feedback.picture,callback:function(e){t.$set(t.feedback,"picture",e)},expression:"feedback.picture"}})],1)],1),o("v-card-actions",[t.isLoading?o("v-progress-circular",{attrs:{width:1,color:"brown darken-1",indeterminate:""}}):t._e(),o("v-spacer"),o("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"brown darken-1"},on:{click:t.formSubmit}},[t._v("submit")]),o("v-btn",{attrs:{outlined:"",color:"brown darken-1"},on:{click:function(e){t.comment_dialog=!1}}},[t._v("close")])],1)],1)],1)],1)}),[],!1,null,"5ca89263",null),W=Y.exports;l()(Y,{VBtn:h.a,VCard:v.a,VCardActions:O.a,VCardSubtitle:O.b,VCardText:O.c,VCardTitle:O.d,VChip:N.a,VDialog:f.a,VFileInput:P.a,VForm:F.a,VIcon:_.a,VMenu:U.a,VProgressCircular:H.a,VRating:G.a,VSpacer:C.a,VTextField:J.a,VTextarea:K.a});var X={name:"default",components:{feedBack:W,footerMain:B,navBar:I}},Q=(o(384),o(430)),Z=o(431),tt=Object(r.a)(X,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",[e("v-app",{attrs:{id:"inspire"}},[e("navBar"),e("v-container",[e("Nuxt")],1),e("footerMain"),e("feedBack")],1)],1)}),[],!1,null,"4aa425b9",null);e.a=tt.exports;l()(tt,{VApp:Q.a,VContainer:D.a,VMain:Z.a})},242:function(t,e,o){"use strict";var n=o(189),r={},c=o(25),l=o(27),m=o.n(l),d=o(423),h=o(429),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"font-weight-medium mt-5",attrs:{absolute:""}},[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("strong",[this._v("KHLAND CO.,LTD.")]),this._v(" © "+this._s((new Date).getFullYear()))])],1)}),[],!1,null,"7d99666c",null),v=component.exports;m()(component,{VCol:d.a,VFooter:h.a});var f={name:"admin",components:{NavbarAdmin:n.default,footerAdmin:v},created:function(){if(this.$auth.loggedIn){var t=JSON.parse(localStorage.getItem("auth_user")),e=localStorage.getItem("auth_token");this.$nuxt.$auth.setToken("local",e),this.$auth.setUser(t),this.$axios.defaults.headers.common.Authorization=e}else this.$router.push("/admin/login")}},_=(o(348),o(430)),x=o(431),k=Object(c.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",[e("v-app",{attrs:{id:"inspire"}},[this.$auth.loggedIn?e("NavbarAdmin"):this._e(),e("div",{staticClass:"mb-15"},[e("nuxt")],1),e("footerAdmin")],1)],1)}),[],!1,null,null,null);e.a=k.exports;m()(k,{NavbarAdmin:o(189).default}),m()(k,{VApp:_.a,VMain:x.a})},243:function(t,e,o){"use strict";var n={name:"configuration"},r=(o(354),o(25)),c=o(27),l=o.n(c),m=o(430),d=o(431),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",[e("v-app",{attrs:{id:"inspire"}},[e("nuxt")],1)],1)}),[],!1,null,"36687094",null);e.a=component.exports;l()(component,{VApp:m.a,VMain:d.a})},244:function(t,e,o){"use strict";var n={},r=o(25),c=o(27),l=o.n(c),m=o(430),d=o(431),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-main",[e("v-app",{attrs:{id:"inspire"}},[e("Nuxt")],1)],1)}),[],!1,null,"41086c1a",null);e.a=component.exports;l()(component,{VApp:m.a,VMain:d.a})},256:function(t,e,o){o(257),t.exports=o(258)},348:function(t,e,o){"use strict";var n=o(141);o.n(n).a},349:function(t,e,o){(e=o(12)(!1)).push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}',""]),t.exports=e},354:function(t,e,o){"use strict";var n=o(142);o.n(n).a},355:function(t,e,o){(e=o(12)(!1)).push([t.i,'html[data-v-36687094]{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*[data-v-36687094],[data-v-36687094]:after,[data-v-36687094]:before{box-sizing:border-box;margin:0}',""]),t.exports=e},356:function(t,e,o){"use strict";var n=o(143);o.n(n).a},357:function(t,e,o){(e=o(12)(!1)).push([t.i,"a.navbar-items[data-v-4b425117]:hover,a.v-btn--active[data-v-4b425117],a.v-btn--active[data-v-4b425117]:hover{border-bottom:2px solid #78a152;color:#78a152}",""]),t.exports=e},364:function(t,e,o){"use strict";var n=o(144);o.n(n).a},365:function(t,e,o){(e=o(12)(!1)).push([t.i,".comment-button-sheet[data-v-5ca89263]{position:fixed!important;right:10px;bottom:10px;z-index:999}",""]),t.exports=e},384:function(t,e,o){"use strict";var n=o(145);o.n(n).a},385:function(t,e,o){(e=o(12)(!1)).push([t.i,'html[data-v-4aa425b9]{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*[data-v-4aa425b9],[data-v-4aa425b9]:after,[data-v-4aa425b9]:before{box-sizing:border-box;margin:0}',""]),t.exports=e},386:function(t,e,o){"use strict";o.r(e),o.d(e,"mutations",(function(){return r})),o.d(e,"actions",(function(){return c}));o(54);var n=o(15),r={setAuth:function(t,e){var o=JSON.stringify(e.data);localStorage.setItem("auth_user",o),localStorage.setItem("auth_token",e.headers.authorization),this.$auth.setUserToken(e.headers.authorization),this.$auth.setUser(e.data)},isLoggedIn:function(t,e){return t.auth.user}},c={logOut:function(){localStorage.removeItem("auth_user"),localStorage.removeItem("auth_token"),this.$auth.logout()},userLogin:function(t,e){var o=this,n=t.commit;try{this.$axios.post("/api/v1/auth/login",e).then((function(t){n("setAuth",t),o.$router.push("/admin")}))}catch(t){var r=t.response?t.response.data.error:"Sorry an error occured, check your internet";console.log(r)}},addHouseModel:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.commit,n.prev=1,n.next=4,o.$axios.post("/api/v1/house_models",e);case 4:return n.sent,n.abrupt("return",res);case 8:n.prev=8,n.t0=n.catch(1),r=n.t0.response?n.t0.response.data.error:"Sorry an error occured, check your internet",console.log(r);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})))()}}},387:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return n})),o.d(e,"getters",(function(){return r}));var n=function(){return{new_configure:{house_model:{id:""},config_options:{id:"",opt_attrs:[]}},configure_options:[{id:1,head_title:"Garden",title:"Materials For Garden",attributes:[{id:1,title:"Flowers",values:[{id:1,image:"https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg",pre_image:"https://i.picsum.photos/id/554/600/350.jpg?hmac=DRfbWTCjVTtoTvp_MsSuBCofpnKzNTRIIDZtHokMGXo"},{id:2,image:"https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg",pre_image:"https://i.picsum.photos/id/642/600/350.jpg?hmac=e0ycJ5tS4UU8h1FEPJbbGSgc4YnlgsIQrwUDFJt39Jk"},{id:3,image:"https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131",pre_image:"https://i.picsum.photos/id/330/600/350.jpg?hmac=_gmZDbngfHbt9NDQZSdffksMjYQzKf28JwhnPzGpimE"}]},{id:2,title:"Grass",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]},{id:3,title:"Flower pot",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]},{id:3,title:"Garden tiles",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]}]},{id:2,head_title:"Roof",title:"Materials For Roof",attributes:[{id:1,title:"Outdoor Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY",pre_image:"https://picsum.photos/600/350"}]},{id:2,title:"Roof Tiles",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]}]},{id:3,head_title:"Wall",title:"Materials For Wall",attributes:[{id:1,title:"Outdoor Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY",pre_image:"https://picsum.photos/600/350"}]},{id:2,title:"Roof Tiles",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]}]},{id:4,head_title:"Exterior",title:"Exterior Building Materials",attributes:[{id:1,title:"Outdoor Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY",pre_image:"https://picsum.photos/600/350"}]},{id:2,title:"Roof Tiles",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg",pre_image:"https://picsum.photos/600/350"}]}]},{id:5,head_title:"Interior",title:"Interior Living Room Materials",attributes:[{id:1,title:"Sofa",values:[{id:1,image:"https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://s3.eu-west-1.amazonaws.com/openreply-poltronafrau/prod/poltronafrau/catalog/category/D_divani_1_1.png",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/sofa1.png",pre_image:"https://picsum.photos/600/350"}]},{id:1,title:"Chairs",values:[{id:1,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char2.png",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char4.png",pre_image:"https://picsum.photos/600/350"}]}]},{id:6,head_title:"Bath Room",title:"Bath Room Materials",attributes:[{id:1,title:"Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg",pre_image:"https://i.picsum.photos/id/554/600/350.jpg?hmac=DRfbWTCjVTtoTvp_MsSuBCofpnKzNTRIIDZtHokMGXo"},{id:2,image:"https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg",pre_image:"https://i.picsum.photos/id/642/600/350.jpg?hmac=e0ycJ5tS4UU8h1FEPJbbGSgc4YnlgsIQrwUDFJt39Jk"},{id:3,image:"https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131",pre_image:"https://i.picsum.photos/id/330/600/350.jpg?hmac=_gmZDbngfHbt9NDQZSdffksMjYQzKf28JwhnPzGpimE"}]},{id:2,title:"Light",values:[{id:1,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%202.png",pre_image:"https://picsum.photos/600/350"},{id:2,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%20a.png",pre_image:"https://picsum.photos/600/350"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%20c.png",pre_image:"https://picsum.photos/600/350"}]}]}]}},r={getConfigureOptions:function(t){return t.configure_options}}},388:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return c})),o.d(e,"actions",(function(){return l})),o.d(e,"getters",(function(){return m}));o(54);var n=o(15),r=function(){return{isLoading:!1,feedbacks:[],links:{current_page:1,per_page:1,total_page:1}}},c={setLoading:function(t,e){t.isLoading=e},setFeedbacks:function(t,data){t.feedbacks=data.data},setLink:function(t,e){t.links=e.links},setCurrentPage:function(t,e){t.links.current_page=e}},l={addFeedback:function(t,data){var e=t.commit;e("setLoading",!0);this.$axios.post("/api/v1/feedbacks",data).then((function(t){console.log(t.status),e("setLoading",!1)})).catch((function(t){e("setLoading",!1),console.log(t)}))},FETCH_FEEDBACKS:function(t,e){var o=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,o.$axios.get("/api/v1/feedbacks?".concat(e)).then((function(t){r("setFeedbacks",t.data),r("setLink",t.data)})).catch((function(t){console.log("error")}));case 4:n.sent,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log("bad connection");case 10:case"end":return n.stop()}}),n,null,[[1,7]])})))()}},m={isLoading:function(t){return t.isLoading},GET_FEEDBACKS:function(t){return t.feedbacks},getCurrentPage:function(t){return t.links.current_page}}},389:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return r})),o.d(e,"mutations",(function(){return c})),o.d(e,"actions",(function(){return l})),o.d(e,"getters",(function(){return m}));o(54);var n=o(15),r=function(){return{houses:[]}},c={setHouses:function(t,data){t.houses=data}},l={addHouse:function(t,data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.commit,o.prev=1,o.next=4,e.$axios.post("/houses",data);case 4:o.sent,o.next=10;break;case 7:o.prev=7,o.t0=o.catch(1),console.log("can't post to houses, bad connections.");case 10:case"end":return o.stop()}}),o,null,[[1,7]])})))()},getHouses:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/houses");case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("can't get /houses, bad connections.");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},m={}},78:function(t,e,o){"use strict";var n={layout:"error-layout",props:["error"]},r=o(25),c=o(27),l=o.n(c),m=o(197),d=o(423),h=o(439),v=o(113),f=o(21),_=o(424),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-row",{staticStyle:{height:"100vh"},attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12"}},[e("v-list-item",{staticClass:"text-center"},[e("v-list-item-content",[e("v-list-item-title",[e("div",[e("h1",{staticClass:"text-h1 mb-1 text-uppercase"},[this._v("404")]),e("h1",{staticClass:"headline"},[this._v("Page not found")])])]),e("v-list-item-subtitle",[e("p",{staticClass:"mb-5"},[this._v("Sorry we can't find the page you want to acces to.")])]),e("v-list-item-subtitle",[e("v-btn",{staticClass:"text-uppercase",attrs:{outlined:"",large:"",to:"/",color:"brown text-darken-1"}},[this._v("Bring me back")])],1)],1)],1)],1)],1)],1)}),[],!1,null,"2f32496a",null);e.a=component.exports;l()(component,{VBtn:m.a,VCol:d.a,VContainer:h.a,VListItem:v.a,VListItemContent:f.a,VListItemSubtitle:f.b,VListItemTitle:f.c,VRow:_.a})}},[[256,29,3,30]]]);