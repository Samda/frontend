(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{509:function(t,e,o){"use strict";o.r(e);var r={props:["color"]},c=o(25),n=o(27),l=o.n(n),d=o(187),v=o(46),m=o(181),h=o(112),f=o(22),_=o(420),C=o(424),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.color,"max-width":"300"}},[o("v-card-title",[o("v-spacer"),t._v(" "),o("v-icon",{attrs:{size:"100"}},[t._v("\n      mdi-home-city-outline\n    ")]),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-card-title",{staticClass:"mt-n10",attrs:{size:"90"}},[o("v-spacer"),t._v(" "),o("span",[t._v("House")]),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-card-text",[t._v('\n    "Turns out semicolon-less "\n  ')]),t._v(" "),o("v-card-actions",[o("v-list-item",{staticClass:"grow"},[o("v-list-item-content",[o("v-list-item-title",[t._v("Evan You")])],1),t._v(" "),o("v-row",{attrs:{align:"center",justify:"end"}},[o("v-icon",{staticClass:"mr-1"},[t._v("mdi-heart")]),t._v(" "),o("span",{staticClass:"subheading mr-2"},[t._v("256")]),t._v(" "),o("span",{staticClass:"mr-1"},[t._v("·")]),t._v(" "),o("v-icon",{staticClass:"mr-1"},[t._v("mdi-share-variant")]),t._v(" "),o("span",{staticClass:"subheading"},[t._v("45")])],1)],1)],1)],1)}),[],!1,null,"5d46b5b2",null),V=component.exports;l()(component,{VCard:d.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VIcon:m.a,VListItem:h.a,VListItemContent:f.a,VListItemTitle:f.c,VRow:_.a,VSpacer:C.a});var x={data:function(){return{}},props:["item"]},y=o(196),w=Object(c.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{color:t.item.color,dark:""}},[o("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[o("div",[o("v-card-title",{staticClass:"headline",domProps:{textContent:t._s(t.item.title)}}),o("v-card-text",[o("div",{staticClass:"mt-2"},[t._v(t._s(t.item.total)+" "+t._s(t.item.unit))])]),o("v-card-actions",[o("v-btn",{attrs:{color:t.item.color,small:"",to:t.item.link}},[t._v("បើកចូល")])],1)],1),o("v-card-title",[o("v-spacer"),o("v-icon",{attrs:{size:"80"}},[t._v(t._s(t.item.icon))]),o("v-spacer")],1)],1)])}),[],!1,null,"10d483c6",null),j=w.exports;l()(w,{VBtn:y.a,VCard:d.a,VCardActions:v.a,VCardText:v.c,VCardTitle:v.d,VIcon:m.a,VSpacer:C.a});var k={components:{VueApexCharts:function(){return o.e(6).then(o.t.bind(null,508,7))}},data:function(){return{series:[{name:"Inflation",data:[40.5,36.1,30,20.1,20,40.6,23.2,42.3,61.4,60.8,70.5,90.2]}],chartOptions:{chart:{height:350,type:"bar"},plotOptions:{bar:{dataLabels:{position:"top"}}},dataLabels:{enabled:!0,formatter:function(t){return t+"%"},offsetY:-20,style:{fontSize:"12px",colors:["#304758"]}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],position:"top",axisBorder:{show:!1},axisTicks:{show:!1},crosshairs:{fill:{type:"gradient",gradient:{colorFrom:"#D8E3F0",colorTo:"#BED1E6",stops:[0,100],opacityFrom:.4,opacityTo:.5}}},tooltip:{enabled:!0}},yaxis:{axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,formatter:function(t){return t+"%"}}},title:{text:"",floating:!0,offsetY:330,align:"center",style:{fontSize:"12px",color:"#444"}}}}}},I={name:"admin",layout:"admin",components:{cardIcon:V,cardVerticle:j,annualSale:Object(c.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("VueApexCharts",{attrs:{type:"bar",height:"350",options:this.chartOptions,series:this.series}})],1)}),[],!1,null,"00483fb8",null).exports},data:function(){return{color:"#1F7087",items:[{icon:"mdi-home-circle-outline",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"ផ្ទះអតិថិជនរៀប",total:"២៣",unit:"ខ្នង",link:"configured_houses"},{icon:"mdi-home-group",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/foster.jpg",title:"ម៉ូតសំរាប់ផ្ទះគំរូ",total:"៤០",unit:"ម៉ូត",link:"house_models"},{icon:"mdi-account-group",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"ភ្នាក់ងារលក់",total:"៩៩",unit:"នាក់",link:"agencies"},{icon:"mdi-account-tie",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"ភ្នាក់ងារទីផ្សារ",total:"៨៩",unit:"នាក់",link:"/team_sales"},{icon:"mdi-briefcase-account-outline",color:"#1F7087",src:"https://cdn.vuetifyjs.com/images/cards/halcyon.png",title:"Management",total:"10",unit:"នាក់",link:"/users"}]}}},T=o(419),F=o(435),E=Object(c.a)(I,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{dense:""}},[e("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6",sm:"6"}},[e("v-row",{attrs:{dense:""}},this._l(this.items,(function(t,i){return e("v-col",{key:i,attrs:{cols:"12",md:"6"}},[e("cardVerticle",{attrs:{item:t}})],1)})),1)],1),e("v-col",{staticClass:"pl-4",attrs:{cols:"12",sm:"6",md:"6"}},[e("v-card",[e("v-spacer"),e("v-card-title",{staticClass:"headline"},[this._v("តារាងនៃការលក់ប្រចាំខ")]),e("v-spacer"),e("annualSale")],1)],1)],1),e("v-row",{attrs:{dense:""}},[e("v-col",{attrs:{cols:"12",md:"3"}},[e("cardIcon",{attrs:{color:"color"}})],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("cardIcon")],1),e("v-col",{attrs:{cols:"12",md:"3"}},[e("cardIcon")],1),e("v-col",{attrs:{cols:"3",md:"3"}},[e("cardIcon")],1)],1)],1)}),[],!1,null,null,null);e.default=E.exports;l()(E,{VCard:d.a,VCardTitle:v.d,VCol:T.a,VContainer:F.a,VRow:_.a,VSpacer:C.a})}}]);