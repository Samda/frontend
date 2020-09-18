/*! For license information please see ../../LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{419:function(t,e,o){"use strict";var n=o(114);e.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},424:function(t,e,o){var content=o(449);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("6bffd5a4",content,!0,{sourceMap:!1})},425:function(t,e,o){var content=o(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("2d62e390",content,!0,{sourceMap:!1})},426:function(t,e,o){(e=o(11)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},445:function(t,e,o){"use strict";o.r(e);function n(){return(n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t}).apply(this,arguments)}var r=function(){function t(t,e){var o=this,n=void 0!==e?e:{};this.version="3.7.7",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:n.customStickyChangeNumber||null,noStyles:n.noStyles||!1,stickyBitStickyOffset:n.stickyBitStickyOffset||0,parentClass:n.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof n.scrollEl?document.querySelector(n.scrollEl):n.scrollEl||window,stickyClass:n.stickyClass||"js-is-sticky",stuckClass:n.stuckClass||"js-is-stuck",stickyChangeClass:n.stickyChangeClass||"js-is-sticky--change",useStickyClasses:n.useStickyClasses||!1,useFixed:n.useFixed||!1,useGetBoundingClientRect:n.useGetBoundingClientRect||!1,verticalPosition:n.verticalPosition||"top",applyStyle:n.applyStyle||function(t,style){return o.applyStyle(t,style)}},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var r=this.props,l=r.positionVal,c=r.verticalPosition,h=r.noStyles,v=r.stickyBitStickyOffset,d="top"!==c||h?"":v+"px",m="fixed"!==l?l:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var i=0;i<this.els.length;i++){var f,y=this.els[i],w=this.addInstance(y,this.props);this.props.applyStyle({styles:(f={},f[c]=d,f.position=m,f),classes:{}},w),this.manageState(w),this.instances.push(w)}}var e=t.prototype;return e.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var e=["","-o-","-webkit-","-moz-","-ms-"],o=document.head.style,i=0;i<e.length;i+=1)o.position=e[i]+"sticky";t=o.position?o.position:"fixed",o.position=""}return t},e.addInstance=function(t,e){var o=this,n={el:t,parent:t.parentNode,props:e};if("fixed"===e.positionVal||e.useStickyClasses){this.isWin=this.props.scrollEl===window;var r=this.isWin?window:this.getClosestParent(n.el,n.props.scrollEl);this.computeScrollOffsets(n),this.toggleClasses(n.parent,"",e.parentClass),n.state="default",n.stateChange="default",n.stateContainer=function(){return o.manageState(n)},r.addEventListener("scroll",n.stateContainer)}return n},e.getClosestParent=function(t,e){var p=e,o=t;if(o.parentElement===p)return p;for(;o.parentElement!==p;)o=o.parentElement;return p},e.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);var e=0;do{e=t.offsetTop+e}while(t=t.offsetParent);return e},e.computeScrollOffsets=function(t){var e=t,p=e.props,o=e.el,n=e.parent,r=!this.isWin&&"fixed"===p.positionVal,l="bottom"!==p.verticalPosition,c=r?this.getTopPosition(p.scrollEl):0,h=r?this.getTopPosition(n)-c:this.getTopPosition(n),v=null!==p.customStickyChangeNumber?p.customStickyChangeNumber:o.offsetHeight,d=h+n.offsetHeight;e.offset=r?0:c+p.stickyBitStickyOffset,e.stickyStart=l?h-e.offset:0,e.stickyChange=e.stickyStart+v,e.stickyStop=l?d-(o.offsetHeight+e.offset):d-window.innerHeight},e.toggleClasses=function(t,e,a){var o=t,n=o.className.split(" ");a&&-1===n.indexOf(a)&&n.push(a);var r=n.indexOf(e);-1!==r&&n.splice(r,1),o.className=n.join(" ")},e.manageState=function(t){var e=this,o=t,p=o.props,r=o.state,l=o.stateChange,c=o.stickyStart,h=o.stickyChange,v=o.stickyStop,d=p.positionVal,m=p.scrollEl,f=p.stickyClass,y=p.stickyChangeClass,w=p.stuckClass,x=p.verticalPosition,k="bottom"!==x,_=p.applyStyle,C=p.noStyles,O=function(t){t()},S=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||O,j=this.isWin?window.scrollY||window.pageYOffset:m.scrollTop,P=k&&j<=c&&("sticky"===r||"stuck"===r),E=j>=v&&"sticky"===r;j>c&&j<v&&("default"===r||"stuck"===r)?o.state="sticky":P?o.state="default":E&&(o.state="stuck");var B=j>=h&&j<=v;j<h/2||j>v?o.stateChange="default":B&&(o.stateChange="sticky"),r===o.state&&l===o.stateChange||S((function(){var r,l,c,h,v,m,k={sticky:{styles:(r={position:d,top:"",bottom:""},r[x]=p.stickyBitStickyOffset+"px",r),classes:(l={},l[f]=!0,l)},default:{styles:(c={},c[x]="",c),classes:{}},stuck:{styles:n((h={},h[x]="",h),"fixed"===d&&!C||!e.isWin?{position:"absolute",top:"",bottom:"0"}:{}),classes:(v={},v[w]=!0,v)}};"fixed"===d&&(k.default.styles.position="");var style=k[o.state];style.classes=((m={})[w]=!!style.classes[w],m[f]=!!style.classes[f],m[y]=B,m),_(style,t)}))},e.applyStyle=function(t,e){var o=t.styles,n=t.classes,r=e,l=r.el,p=r.props,c=l.style,h=p.noStyles,v=l.className.split(" ");for(var d in n){if(n[d])-1===v.indexOf(d)&&v.push(d);else{var m=v.indexOf(d);-1!==m&&v.splice(m,1)}}if(l.className=v.join(" "),o.position&&(c.position=o.position),!h)for(var f in o)c[f]=o[f]},e.update=function(t){var e=this;return void 0===t&&(t=null),this.instances.forEach((function(o){if(e.computeScrollOffsets(o),t)for(var n in t)o.props[n]=t[n]})),this},e.removeInstance=function(t){var e,o,n=t.el,p=t.props;this.applyStyle({styles:(e={position:""},e[p.verticalPosition]="",e),classes:(o={},o[p.stickyClass]="",o[p.stuckClass]="",o)},t),this.toggleClasses(n.parentNode,p.parentClass)},e.cleanup=function(){for(var i=0;i<this.instances.length;i+=1){var t=this.instances[i];t.stateContainer&&t.props.scrollEl.removeEventListener("scroll",t.stateContainer),this.removeInstance(t)}this.manageState=!1,this.instances=[]},t}();var l=function(t,e){return new r(t,e)},c={data:function(){return{model:"",slides:[{src:"https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%201.jpg"},{src:"https://raw.githubusercontent.com/Samda/khland-assets/master/slide1.JPG"},{src:"https://raw.githubusercontent.com/Samda/khland-assets/master/slide2.jpg"}],config_options:[{title:"Exterior Building Materials",attributes:[{title:"Outdoor Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg"},{id:2,image:"https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg"},{id:3,image:"https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY"}]},{title:"Roof Tiles",values:[{id:1,image:"https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg"},{id:2,image:"https://www.textures.com/system/categories/2130/frontend-large.jpg"},{id:3,image:"https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg"}]}]},{title:"Interior Living Room Materials",attributes:[{title:"Sofa",values:[{id:1,image:"https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png"},{id:2,image:"https://s3.eu-west-1.amazonaws.com/openreply-poltronafrau/prod/poltronafrau/catalog/category/D_divani_1_1.png"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/sofa1.png"}]},{title:"Chairs",values:[{id:1,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png"},{id:2,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char2.png"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/char4.png"}]}]},{title:"Bath Room Materials",attributes:[{title:"Wall Tiles",values:[{id:1,image:"https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg"},{id:2,image:"https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg"},{id:3,image:"https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131"}]},{title:"Light",values:[{id:1,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%202.png"},{id:2,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%20a.png"},{id:3,image:"https://raw.githubusercontent.com/Samda/khland-assets/master/light%20c.png"}]}]}],houseAreabuttons:[{title:"Garden Area"},{title:"Exterior"},{title:"Interior"},{title:"Livinng Room"},{title:"Bathroom"},{title:"Kitchen"}]}},mounted:function(){l(".sticky-option",{useStickyClasses:!0,stickyBitStickyOffset:0})}},h=(o(448),o(26)),v=o(31),d=o.n(v),m=o(177),f=(o(13),o(9),o(7),o(6),o(10),o(2)),y=(o(117),o(16),o(450),o(134)),w=o(419),x=o(18),k=o(88),_=o(132),C=o(179),O=o(14),S=o(32),j=o(4),P=o(8);function E(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function B(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V=Object(j.a)(Object(y.a)("bottom",["height","inputValue"]),x.a,k.a,Object(S.b)("inputValue"),_.a,C.a,O.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return C.a.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return B(B({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(P.a)("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var data=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(data.directives=data.directives||[],data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(w.a,this.setTextColor(this.color,data),this.$slots.default)}}),D=o(184),A=o(452),T=o(453),$=o(400),I=o(413),z=o(388),N=o(402),R=o(174),H=o(230),W=o(401),F=o(49),M=o(481),G=o(85),L=o(1).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(f.a)({},this.activeClass,this.isActive)}),element):(Object(P.c)("v-item should only contain a single element",this),element)):(Object(P.c)("v-item is missing a default scopedSlot",this),null);var element}}),Y=(Object(j.a)(L,Object(G.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),Object(j.a)(L,Object(G.a)("slideGroup")).extend({name:"v-slide-item"})),component=Object(h.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{staticStyle:{position:"fixed",top:"0",padding:"0px"}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-sheet",{staticClass:"mt-n5 mx-auto",attrs:{"max-width":"100%"}},[o("v-bottom-navigation",{staticClass:"elevation-0",attrs:{horizontal:""}},[o("v-slide-group",{attrs:{"show-arrows":"","center-active":"",mandatory:""}},[t._l(t.houseAreabuttons,(function(b,e){return[o("v-slide-item",{key:e,scopedSlots:t._u([{key:"default",fn:function(n){var r=n.active,l=n.toggle;return[o("v-btn",{staticClass:"btn-timeline py-0",attrs:{"x-small":"",ripple:!1,tile:"",value:b.title,"input-value":r},on:{click:l}},[o("span",[t._v(t._s(b.title))]),o("v-icon",[t._v("mdi-numeric-"+t._s(e+1))])],1)]}}],null,!0)}),o("v-divider",{staticClass:"my-4",attrs:{inset:"",vertical:""}})]})),o("v-slide-item",[o("v-btn",{staticClass:"btn-timeline",attrs:{value:"finish"}},[o("span",[t._v("Finish")]),o("v-icon",[t._v("mdi-check")])],1)],1)],2)],1)],1)],1)],1)],1),o("v-container",{attrs:{fluid:""}},[o("v-row",{attrs:{"no-gutters":""}},[o("v-col",{attrs:{cols:"12",md:"8",sm:"12"}},[o("div",{staticClass:"carousel",staticStyle:{"padding-left":"5px",position:"fixed",top:"50px",width:"750px",height:"70vh"}},[o("div",{staticClass:"text-content",staticStyle:{display:"inline"}},[o("div",{staticClass:"text-center mt-5 text-uppercase"},[o("span",{staticClass:"mr-2 grey--text"}),o("span",{staticClass:"text-h5 brown--text"},[o("strong",[t._v("វីឡាភ្លោះ")])])]),o("v-btn",{staticClass:"pa-0",attrs:{to:"/",small:"",tile:"",text:"",color:"#5b3804"}},[o("v-icon",{attrs:{left:""}},[t._v("mdi-chevron-left")]),t._v("go back")],1)],1),o("v-carousel",{attrs:{height:"400","hide-delimiter-background":!0,"delimiter-icon":"mdi-minus","show-arrows-on-hover":""}},t._l(t.slides,(function(t,i){return o("v-carousel-item",{key:i,attrs:{color:"black"}},[o("v-img",{attrs:{src:t.src,contain:""}})],1)})),1)],1)]),o("v-col",{attrs:{cols:"12",md:"4",sm:"12"}},[o("div",{staticClass:"options-container ml-n15",staticStyle:{top:"70px",position:"absolute",overflow:"auto",height:"500px"}},[o("div",{staticClass:"option-section config-section"},[t._l(t.config_options,(function(e,n){return[o("strong",{staticClass:"sticky-option config-header"},[t._v(t._s(e.title))]),t._l(e.attributes,(function(e){return o("div",{staticClass:"config-body"},[o("div",{staticClass:"text-overline config-key"},[t._v(t._s(e.title))]),o("div",{staticClass:"config-values"},t._l(e.values,(function(t){return o("div",{staticClass:"thumbnail-image"},[o("img",{attrs:{src:t.image}})])})),0)])}))]})),o("div",{staticClass:"options-footer",staticStyle:{height:"200px"}})],2)])])],1)],1),o("v-footer",{attrs:{fixed:""}},[o("span",{staticClass:"pt-8 text-caption"},[t._v("House Modify Web Application")]),o("v-row",[o("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[o("div",{staticClass:"text-center"},[o("v-avatar",{attrs:{size:"50",tile:""}},[o("v-img",{attrs:{src:"https://www.khland.com.kh/assets/images/kh_lg.png"}})],1)],1)])],1),o("span",{staticClass:"pt-8 text-caption"},[t._v("© "+t._s((new Date).getFullYear())+",  KHLAND CO.,TLD.")])],1)],1)}),[],!1,null,"d14a2126",null);e.default=component.exports;d()(component,{VAvatar:m.a,VBottomNavigation:V,VBtn:D.a,VCarousel:A.a,VCarouselItem:T.a,VCol:$.a,VContainer:I.a,VDivider:z.a,VFooter:N.a,VIcon:R.a,VImg:H.a,VRow:W.a,VSheet:F.a,VSlideGroup:M.b,VSlideItem:Y})},448:function(t,e,o){"use strict";var n=o(424);o.n(n).a},449:function(t,e,o){(e=o(11)(!1)).push([t.i,"div.v-window__next button:hover span.v-btn__content i[data-v-d14a2126],div.v-window__prev button:hover span.v-btn__content[data-v-d14a2126]{color:#000!important}button.btn-timeline.v-btn--active[data-v-d14a2126]{border-bottom:2px solid #5b3804}button.btn-timeline.v-btn--active i[data-v-d14a2126],button.btn-timeline.v-btn--active span.v-btn__content span[data-v-d14a2126]{color:#5b3804!important}div.config-section[data-v-d14a2126]{margin-bottom:15px}div.config-section strong.config-header[data-v-d14a2126]{background:#fff;display:block;padding:8px 0;color:#5b3804}div.config-values[data-v-d14a2126]{display:block}div.config-values div.thumbnail-image[data-v-d14a2126]{border:1px solid #5b3804;display:inline-grid;width:30%;height:70px;text-align:center;margin-right:3px;margin-bottom:3px}div.config-values div.thumbnail-image img[data-v-d14a2126]{width:100%;height:100%;margin-left:auto;margin-right:auto;display:block;-o-object-fit:contain;object-fit:contain}div.thumbnail-image[data-v-d14a2126]{width:90px;height:90px;text-align:center}div.thumbnail-image img[data-v-d14a2126]{height:100%;width:auto}",""]),t.exports=e},450:function(t,e,o){var content=o(451);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("5ea6d85e",content,!0,{sourceMap:!1})},451:function(t,e,o){(e=o(11)(!1)).push([t.i,".theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){background-color:transparent}.v-item-group.v-bottom-navigation .v-btn{border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}",""]),t.exports=e},452:function(t,e,o){"use strict";o(13),o(9),o(7),o(6),o(10);var n=o(2),r=(o(16),o(425),o(420)),l=o(149),c=o(41),h=o(188),v=o(419),d=o(0),m=o(8);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=r.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return y(y({},r.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(m.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:r.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,o=[],i=0;i<e;i++){var n=this.$createElement(l.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(c.a,{props:{size:18}},this.delimiterIcon)]);o.push(n)}return this.$createElement(v.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},o)},genProgress:function(){return this.$createElement(h.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=r.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(d.f)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},453:function(t,e,o){"use strict";o(13),o(9),o(7),o(6),o(10);var n=o(2),r=o(421),l=o(230),c=o(4),h=o(0),v=o(43);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.a)(r.a,v.a);e.a=f.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(l.a,{staticClass:"v-carousel__item",props:m(m({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(h.o)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}})},492:function(t,e,o){"use strict";o.r(e);var n={layout:"configuration",components:{Configure:o(445).default}},r=o(26),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Configure")],1)}),[],!1,null,"54377d71",null);e.default=component.exports;installComponents(component,{Configure:o(445).default})}}]);