(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[68],{7974:function(e,t,a){"use strict";var n=a("d651"),i=a.n(n);t["default"]=i.a},d651:function(e,t){},da22:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("new"),icon:"add"},on:{click:function(t){e.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("newtip"))+"\n            ")])],1),a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("refreshtip"))+"\n            ")])],1),a("q-btn",{attrs:{label:e.$t("download"),icon:"cloud_download"},on:{click:function(t){return e.downloadData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n              "+e._s(e.$t("downloadtip"))+"\n            ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"bin_name",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_binset.bin_name"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},model:{value:e.editFormData.bin_name,callback:function(t){e.$set(e.editFormData,"bin_name",t)},expression:"editFormData.bin_name"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"bin_name",attrs:{props:t}},[e._v("\n              "+e._s(t.row.bin_name)+"\n            ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"bin_size",attrs:{props:t}},[a("q-select",{attrs:{dense:"",outlined:"",square:"",options:e.bin_size_list,"transition-show":"scale","transition-hide":"scale",label:e.$t("warehouse.view_binset.bin_size"),rules:[function(t){return t&&t.length>0||e.error2}]},model:{value:e.editFormData.bin_size,callback:function(t){e.$set(e.editFormData,"bin_size",t)},expression:"editFormData.bin_size"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"bin_size",attrs:{props:t}},[e._v("\n              "+e._s(t.row.bin_size)+"\n            ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"bin_property",attrs:{props:t}},[a("q-select",{attrs:{dense:"",outlined:"",square:"",options:e.bin_property_list,"transition-show":"scale","transition-hide":"scale",label:e.$t("warehouse.view_binset.bin_property"),rules:[function(t){return t&&t.length>0||e.error3}]},model:{value:e.editFormData.bin_property,callback:function(t){e.$set(e.editFormData,"bin_property",t)},expression:"editFormData.bin_property"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"bin_property",attrs:{props:t}},[e._v("\n              "+e._s(t.row.bin_property)+"\n            ")])]:e._e(),a("q-td",{key:"empty_label",attrs:{props:t}},[e._v("\n            "+e._s(t.row.empty_label)+"\n          ")]),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n            "+e._s(t.row.creater)+"\n          ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n            "+e._s(t.row.create_time)+"\n          ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n            "+e._s(t.row.update_time)+"\n          ")]),e.editMode?e.editMode?[t.row.id===e.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("confirmedit"))+"\n                  ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                    "+e._s(e.$t("canceledit"))+"\n                  ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:"Supplier"!==e.$q.localStorage.getItem("staff_type")&&"Customer"!==e.$q.localStorage.getItem("staff_type")&&"Outbound"!==e.$q.localStorage.getItem("staff_type")&&"StockControl"!==e.$q.localStorage.getItem("staff_type"),expression:"$q.localStorage.getItem('staff_type') !== 'Supplier' &&\n                            $q.localStorage.getItem('staff_type') !== 'Customer' &&\n                            $q.localStorage.getItem('staff_type') !== 'Outbound' &&\n                            $q.localStorage.getItem('staff_type') !== 'StockControl'\n                           "}],attrs:{round:"",flat:"",push:"",color:"info",icon:"print"},on:{click:function(a){return e.viewData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                  "+e._s(e.$t("warehouse.printbin"))+"\n                ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return e.editData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                  "+e._s(e.$t("edit"))+"2222\n                ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                  "+e._s(e.$t("delete"))+"1111\n                ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("warehouse.view_binset.bin_name"),autofocus:"",rules:[function(t){return t&&t.length>0||e.error1}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.bin_name,callback:function(t){e.$set(e.newFormData,"bin_name",t)},expression:"newFormData.bin_name"}}),a("q-select",{attrs:{dense:"",outlined:"",square:"",options:e.bin_size_list,"transition-show":"scale","transition-hide":"scale",label:e.$t("warehouse.view_binset.bin_size"),rules:[function(t){return t&&t.length>0||e.error2}]},model:{value:e.newFormData.bin_size,callback:function(t){e.$set(e.newFormData,"bin_size",t)},expression:"newFormData.bin_size"}}),a("q-select",{attrs:{dense:"",outlined:"",square:"",options:e.bin_property_list,"transition-show":"scale","transition-hide":"scale",label:e.$t("warehouse.view_binset.bin_property"),rules:[function(t){return t&&t.length>0||e.error3}]},model:{value:e.newFormData.bin_property,callback:function(t){e.$set(e.newFormData,"bin_property",t)},expression:"newFormData.bin_property"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4"}},[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n        "+e._s(e.$t("deletetip"))+"\n      ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.viewForm,callback:function(t){e.viewForm=t},expression:"viewForm"}},[a("div",{staticStyle:{width:"400px",height:"280px","background-color":"white"},attrs:{id:"printMe"}},[a("q-card-section",[a("div",{staticClass:"row",staticStyle:{height:"50px"}},[a("div",{staticClass:"col-3"},[a("img",{staticStyle:{width:"60px",height:"50px","margin-top":"5px","margin-left":"5px"},attrs:{src:"/statics/goods/logo.png"}})]),a("div",{staticClass:"col-9",staticStyle:{height:"50px",float:"contour","margin-top":"10px"}},[a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[e._v(e._s(e.$t("warehouse.view_binset.bin_name")+":"+e.bin_name))])])]),a("hr"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-8",staticStyle:{"margin-top":"30px","padding-left":"3%"}},[a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[e._v(e._s(e.$t("warehouse.view_binset.bin_property")+":"))]),a("p",{staticStyle:{"font-size":"20px","font-weight":"550"}},[e._v(e._s(e.bin_property))])]),a("div",{staticClass:"col-4",staticStyle:{"margin-top":"25px"}},[a("img",{staticStyle:{width:"70%","margin-left":"23px"},attrs:{src:e.bar_code}})])])])],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{directives:[{name:"print",rawName:"v-print",value:e.printObj,expression:"printObj"}],attrs:{color:"primary",icon:"print"}},[e._v("print")])],1)])],2)},i=[],o=a("bd4c"),r=a("a357"),s=a("18d6"),l=a("3004"),c={name:"Pagebinset",data(){return{bin_name:"",bin_property:"",openid:"",login_name:"",authin:"0",pathname:"binset/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],bin_size_list:[],bin_property_list:[],viewForm:!1,printObj:{id:"printMe",popTitle:this.$t("inbound.asn")},columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"bin_size",label:this.$t("warehouse.view_binset.bin_size"),field:"bin_size",align:"center"},{name:"bin_property",label:this.$t("warehouse.view_binset.bin_property"),field:"bin_property",align:"center"},{name:"empty_label",label:this.$t("warehouse.view_binset.empty_label"),field:"empty_label",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{bin_name:"",bin_size:"",bin_property:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,bar_code:"",error1:this.$t("warehouse.view_binset.error1"),error2:this.$t("warehouse.view_binset.error2"),error3:this.$t("warehouse.view_binset.error3")}},methods:{getList(){var e=this;s["a"].has("auth")&&Object(l["e"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.bin_property_list=t.bin_property_list,e.bin_size_list=t.bin_size_list,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;s["a"].has("auth")&&Object(l["e"])(e.pathname+"?bin_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.bin_property_list=t.bin_property_list,e.bin_size_list=t.bin_size_list,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;s["a"].has("auth")&&Object(l["e"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.bin_property_list=t.bin_property_list,e.bin_size_list=t.bin_size_list,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;s["a"].has("auth")&&Object(l["e"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.bin_property_list=t.bin_property_list,e.bin_size_list=t.bin_size_list,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this,t=[];e.table_list.forEach((e=>{t.push(e.bin_name)})),-1===t.indexOf(e.newFormData.bin_name)&&0!==e.newFormData.bin_name.length?(e.newFormData.creater=e.login_name,Object(l["h"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):-1!==t.indexOf(e.newFormData.bin_name)?e.$q.notify({message:e.$t("notice.warehouseerror.binseterror"),icon:"close",color:"negative"}):0===e.newFormData.bin_name.length&&e.$q.notify({message:e.$t("warehouse.view_binset.error1"),icon:"close",color:"negative"})},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={bin_name:"",bin_size:"",bin_property:"",creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={bin_name:e.bin_name,bin_size:e.bin_size,bin_property:e.bin_property,creater:t.login_name}},editDataSubmit(){var e=this;Object(l["i"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={bin_name:"",bin_size:"",bin_property:"",empty_label:"",creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(l["d"])(e.pathname+e.deleteid+"/").then((t=>{e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0},downloadData(){var e=this;Object(l["f"])(e.pathname+"file/?lang="+s["a"].getItem("lang")).then((t=>{var a=Date.now(),n=o["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const i=Object(r["a"])(e.pathname+n+".csv","\ufeff"+t.data,"text/csv");!0!==i&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},viewData(e){var t=this,n=a("d055");n.toDataURL(e.bar_code,[{errorCorrectionLevel:"H",mode:"byte",version:"2",type:"image/jpeg"}]).then((a=>{t.bin_name=e.bin_name,t.bin_property=e.bin_property,t.bar_code=a})).catch((e=>{console.error(e)})),t.viewForm=!0}},created(){var e=this;s["a"].has("openid")?e.openid=s["a"].getItem("openid"):(e.openid="",s["a"].set("openid","")),s["a"].has("login_name")?e.login_name=s["a"].getItem("login_name"):(e.login_name="",s["a"].set("login_name","")),s["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},p=c,d=a("42e1"),b=a("7974"),_=a("eaac"),u=a("e7a9"),m=a("9c40"),h=a("05c0"),f=a("2c91"),g=a("27f9"),w=a("0016"),v=a("bd08"),y=a("db86"),x=a("ddd8"),q=a("24e8"),$=a("f09f"),k=a("d847"),D=a("a370"),S=a("7f67"),F=a("eebe"),z=a.n(F),C=Object(d["a"])(p,n,i,!1,null,null,null);"function"===typeof b["default"]&&Object(b["default"])(C);t["default"]=C.exports;z()(C,"components",{QTable:_["a"],QBtnGroup:u["a"],QBtn:m["a"],QTooltip:h["a"],QSpace:f["a"],QInput:g["a"],QIcon:w["a"],QTr:v["a"],QTd:y["a"],QSelect:x["a"],QDialog:q["a"],QCard:$["a"],QBar:k["a"],QCardSection:D["a"]}),z()(C,"directives",{ClosePopup:S["a"]})}}]);