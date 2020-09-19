(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(t,e,n){"use strict";var o=n(197);e.a=o.a},442:function(t,e,n){"use strict";n(11),n(9),n(7),n(6),n(10),n(198),n(64);var o=n(2),r=(n(443),n(196)),c=n(122),l=n(38),v=n(123);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=v.a.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:r.a},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return h(h({},v.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var o=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(c.a,{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){o.changedByDelimiters=!0,n()}}},[this.$createElement(l.a,{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var r=this.genIcon("next",o,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},443:function(t,e,n){var content=n(444);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("0d135400",content,!0,{sourceMap:!1})},444:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-window__container{height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=e},445:function(t,e,n){"use strict";var o=n(124),r=n(89),c=n(196),l=n(0),v=n(5),d=Object(v.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.f)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.f)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},446:function(t,e,n){"use strict";var o=n(123);e.a=o.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return o.a.options.computed.classes.call(this)}},methods:{genData:o.a.options.methods.genData}})},448:function(t,e,n){var content=n(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2d62e390",content,!0,{sourceMap:!1})},449:function(t,e,n){(e=n(12)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},459:function(t,e,n){var content=n(493);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("151c2cd8",content,!0,{sourceMap:!1})},460:function(t,e,n){var content=n(495);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("38656dda",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(11),n(9),n(7),n(6),n(10);var o=n(2),r=(n(16),n(448),n(442)),c=n(122),l=n(38),v=n(199),d=n(446),h=n(0),w=n(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(w.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:r.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var o=this.$createElement(c.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(l.a,{props:{size:18}},this.delimiterIcon)]);n.push(o)}return this.$createElement(d.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(v.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=r.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(h.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},466:function(t,e,n){"use strict";n(11),n(9),n(7),n(6),n(10);var o=n(2),r=n(445),c=n(151),l=n(5),v=n(0),d=n(43);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(l.a)(r.a,d.a);e.a=f.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(c.a,{staticClass:"v-carousel__item",props:w(w({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(v.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},492:function(t,e,n){"use strict";var o=n(459);n.n(o).a},493:function(t,e,n){(e=n(12)(!1)).push([t.i,".detail-image[data-v-534f27aa]{border-radius:5px!important;transition:all .2s}.detail-image[data-v-534f27aa]:hover{border:2px solid #6b4912;transform:scale(2.5);right:20;z-index:999}",""]),t.exports=e},494:function(t,e,n){"use strict";var o=n(460);n.n(o).a},495:function(t,e,n){(e=n(12)(!1)).push([t.i,"#configured_table table thead tr th[data-v-5959a1d8]{color:#6b4912}#configured_table table tbody tr[data-v-5959a1d8]:hover{background:none}.details-header[data-v-5959a1d8],.text-details[data-v-5959a1d8]{color:#6b4912}.row-data[data-v-5959a1d8],.row-details[data-v-5959a1d8]{color:#6b4912;padding:8px 0}.row-details[data-v-5959a1d8]{border-bottom:1px solid #ddd}@media only screen and (min-width:979px){.sidebar-carousel[data-v-5959a1d8]{width:600px;position:fixed}}@media only screen and (max-width:979px){.sidebar-carousel[data-v-5959a1d8]{width:auto;height:auto;position:relative}}",""]),t.exports=e},528:function(t,e,n){"use strict";n.r(e);var o={name:"configuredRow",layout:"configuration"},r=(n(492),n(25)),c=n(27),l=n.n(c),v=n(185),d=n(197),h=n(423),w=n(182),f=n(424),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-row",{staticClass:"row-data",attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pl-3",attrs:{cols:"6"}},[e("div",{staticClass:"caption"},[this._v("ម៉ូតផ្ការ")]),e("v-avatar",{staticClass:"detail-image",attrs:{tile:"",size:"80px"}},[e("img",{attrs:{src:"https://i.pinimg.com/600x315/3f/6a/2a/3f6a2adab86aea19e3abbb6846f8c551.jpg"}})])],1),e("v-col",{attrs:{cols:"2"}},[e("div",{staticClass:"caption"},[this._v("Flower Name")])]),e("v-col",{attrs:{cols:"2"}},[e("v-btn",{attrs:{"x-small":"",tile:"",icon:"",color:"primary"}},[e("v-icon",[this._v("mdi-pencil")])],1)],1),e("v-col",{staticClass:"pr-5",attrs:{cols:"2"}},[e("div",{staticClass:"caption text-right"},[this._v("80$")])])],1)}),[],!1,null,"534f27aa",null),m=component.exports;l()(component,{VAvatar:v.a,VBtn:d.a,VCol:h.a,VIcon:w.a,VRow:f.a});var _={layout:"configuration",components:{configuredRow:m},data:function(){return{item_details:[{active:!0,title:"Jason Oner",avatar:"https://picsum.photos/200/200"},{active:!0,title:"Ranee Carlson",avatar:"https://picsum.photos/200/200"},{title:"Cindy Baker",avatar:"https://picsum.photos/200/200"},{title:"Ali Connors",avatar:"https://picsum.photos/200/200"}],items:[{src:"https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117783770_1802414876591410_3603053929977972203_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Ag5SXRCccTMAX_wqOWV&_nc_ht=scontent.fpnh1-2.fna&oh=c2c3e58e7726c392ee82d52fbff820cf&oe=5F85FF5F"},{src:"https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117802743_1802415066591391_2684241018431028380_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=ykikfurTGrsAX_iV5FG&_nc_ht=scontent.fpnh1-1.fna&oh=09c1db641f1e2fe67816146d6181ea23&oe=5F84CBA0"},{src:"https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/118079817_1802415026591395_8305645295699313094_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=J5AuWzL8DGoAX8GW_1o&_nc_ht=scontent.fpnh1-1.fna&oh=efc145f8f5004aa8b9230cece3717ee0&oe=5F860604"},{src:"https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/118088335_1802414846591413_3822124463928800760_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=FjJyRfVL7ZkAX-PYshO&_nc_ht=scontent.fpnh1-1.fna&oh=802913714830902fb4d47b691f73eab4&oe=5F863324"}]}}},y=(n(494),n(465)),x=n(466),C=n(439),O=n(411),j=n(429),T=n(151),I=n(431),$=n(428),D=Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-main",[n("v-container",{staticStyle:{position:"fixed",top:"0px",display:"block","z-index":"9999",background:"#fff"},attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",[n("div",{staticClass:"mb-5 text-center"},[n("nuxt-link",{attrs:{to:"/configuration/configured"}},[n("v-avatar",{attrs:{size:"80",tile:""}},[n("v-img",{attrs:{src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1)],1),n("v-divider",{attrs:{color:"#6b4912"}})],1)],1)],1),n("v-container",{staticStyle:{"padding-top":"100px"},attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("div",{staticClass:"sidebar-carousel"},[n("h1",{staticClass:"config-header text-h6 mt-10",staticStyle:{color:"#6b4912"},attrs:{align:"center",justify:"center"}},[n("strong",[t._v("វីឡាតូលកូនកាត់")])]),n("v-btn",{staticClass:"pa-0",attrs:{to:"/configuration",small:"",tile:"",text:"",color:"#5b3804"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-left")]),t._v("go back")],1),n("v-carousel",{attrs:{width:"500",height:"350",cycle:"","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(t.items,(function(t,i){return n("v-carousel-item",{key:i,attrs:{src:t.src}})})),1)],1)]),n("v-col",{staticClass:"mt-n3",attrs:{cols:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[n("v-row",{staticClass:"row-details",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pl-3",attrs:{cols:"6"}},[n("div",{staticClass:"text-subtitle-2",attrs:{justify:"center"}},[n("strong",[t._v("ពិពណ៌នា")])])]),n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"subtitle-2"},[n("strong",[t._v("លេខកូដ")])])]),n("v-col",{attrs:{cols:"2"}}),n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"pr-5 text-right subtitle-2"},[n("strong",[t._v("តំលៃ")])])])],1),n("v-row",{staticClass:"row-details",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pl-3",attrs:{cols:"6"}},[n("div",{staticClass:"caption"},[n("strong",[t._v("វីឡាតូលកូនកាត់")])])]),n("v-col",{attrs:{cols:"2"}},[n("span",{staticClass:"caption"},[t._v("20200914")])]),n("v-col",{attrs:{cols:"2"}},[n("v-spacer"),n("v-btn",{attrs:{"x-small":"",tile:"",icon:"",color:"primary"}},[n("v-icon",[t._v("mdi-pencil")])],1)],1),n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"pr-5 text-right caption"},[t._v("90000$")])])],1),n("div",{staticClass:"row-details"},[n("v-row",{staticClass:"row-data",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pl-3",attrs:{cols:"12"}},[n("div",{staticClass:"caption"},[n("strong",[t._v("សំភារៈសំរាប់សួន")])])])],1),t._l(3,(function(t){return n("configuredRow",{key:t})}))],2),n("v-row",{staticClass:"row-details",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pl-3",attrs:{cols:"6"}},[n("div",{staticClass:"caption"},[n("strong",[t._v("សម្ភារៈសំរាប់ដំបូល")])]),n("v-row",[n("v-col",[n("div",{staticClass:"caption"},[t._v("ផ្ការ")])])],1)],1),n("v-col",{attrs:{cols:"2"}},[n("span",{staticClass:"caption"},[t._v("20200914")])]),n("v-col",{attrs:{cols:"2"}},[n("v-spacer"),n("v-btn",{attrs:{"x-small":"",tile:"",icon:"",color:"primary"}},[n("v-icon",[t._v("mdi-pencil")])],1)],1),n("v-col",{attrs:{cols:"2"}},[n("div",{staticClass:"pr-5 text-right caption"},[t._v("90$")])])],1),n("v-row",{staticClass:"row-data"},[n("v-col",{staticClass:"pl-3",attrs:{cols:"12"}},[n("div",{staticClass:"pr-5 text-right"},[n("div",{staticClass:"subtitle-2"},[t._v("Total: 99000$")])])])],1)],1)],1)],1),n("v-footer",{attrs:{padless:""}},[n("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[n("div",{staticClass:"caption brown--text text--darken-4"},[t._v("KHLAND CO.,LTD.")])])],1)],1)}),[],!1,null,"5959a1d8",null);e.default=D.exports;l()(D,{VAvatar:v.a,VBtn:d.a,VCarousel:y.a,VCarouselItem:x.a,VCol:h.a,VContainer:C.a,VDivider:O.a,VFooter:j.a,VIcon:w.a,VImg:T.a,VMain:I.a,VRow:f.a,VSpacer:$.a})}}]);