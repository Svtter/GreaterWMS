(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"5ef4":function(e,t,a){"use strict";var n=a("fa0e"),o=a.n(n);t["default"]=o.a},cd9e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-column-table shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,filter:e.filter,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:e.$t("new"),icon:"add"},on:{click:function(t){e.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("newtip"))+"\n           ")])],1),a("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n             "+e._s(e.$t("refreshtip"))+"\n           ")])],1),a("q-btn",{attrs:{label:e.$t("download"),icon:"cloud_download"},on:{click:function(t){return e.downloadData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n            "+e._s(e.$t("downloadtip"))+"\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{blur:function(t){return e.getSearchList()},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[t.row.id===e.editid?[a("q-td",{key:"customer_name",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_name"),autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter the Customer Name"}]},model:{value:e.editFormData.customer_name,callback:function(t){e.$set(e.editFormData,"customer_name",t)},expression:"editFormData.customer_name"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_name",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_name)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"customer_city",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_city"),rules:[function(e){return e&&e.length>0||"Please Enter the Customer City"}]},model:{value:e.editFormData.customer_city,callback:function(t){e.$set(e.editFormData,"customer_city",t)},expression:"editFormData.customer_city"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_city",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_city)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"customer_address",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_address"),rules:[function(e){return e&&e.length>0||"Please Enter the Customer Address"}]},model:{value:e.editFormData.customer_address,callback:function(t){e.$set(e.editFormData,"customer_address",t)},expression:"editFormData.customer_address"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_address",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_address)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"customer_contact",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("baseinfo.view_customer.customer_contact"),rules:[function(e){return e&&e>0||"Please Enter the Customer Contact"}]},model:{value:e.editFormData.customer_contact,callback:function(t){e.$set(e.editFormData,"customer_contact",e._n(t))},expression:"editFormData.customer_contact"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_contact",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_contact)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"customer_manager",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_manager"),rules:[function(e){return e&&e>0||"Please Enter the Customer Manager"}]},model:{value:e.editFormData.customer_manager,callback:function(t){e.$set(e.editFormData,"customer_manager",t)},expression:"editFormData.customer_manager"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_manager",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_manager)+"\n           ")])]:e._e(),t.row.id===e.editid?[a("q-td",{key:"customer_level",attrs:{props:t}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("baseinfo.view_customer.customer_level"),rules:[function(e){return e&&e>0||"Please Enter the Customer Level"}]},model:{value:e.editFormData.customer_level,callback:function(t){e.$set(e.editFormData,"customer_level",e._n(t))},expression:"editFormData.customer_level"}})],1)]:t.row.id!==e.editid?[a("q-td",{key:"customer_level",attrs:{props:t}},[e._v("\n             "+e._s(t.row.customer_level)+"\n           ")])]:e._e(),a("q-td",{key:"creater",attrs:{props:t}},[e._v("\n           "+e._s(t.row.creater)+"\n         ")]),a("q-td",{key:"create_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:t}},[e._v("\n           "+e._s(t.row.update_time)+"\n         ")]),e.editMode?e.editMode?[t.row.id===e.editid?[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(t){return e.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("confirmedit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(t){return e.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("canceledit"))+"\n              ")])],1)],1)]:t.row.id!==e.editid?void 0:e._e()]:e._e():[a("q-td",{key:"action",staticStyle:{width:"100px"},attrs:{props:t}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"edit"},on:{click:function(a){return e.editData(t.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("edit"))+"\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"dark",icon:"delete"},on:{click:function(a){return e.deleteData(t.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n                "+e._s(e.$t("delete"))+"\n              ")])],1)],1)]],2)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("previous"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[e._v("\n          "+e._s(e.$t("next"))+"\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)],a("q-dialog",{model:{value:e.newForm,callback:function(t){e.newForm=t},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("newtip")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v(e._s(e.$t("index.close")))])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_name"),autofocus:"",rules:[function(e){return e&&e.length>0||"Please Enter the Customer Name"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_name,callback:function(t){e.$set(e.newFormData,"customer_name",t)},expression:"newFormData.customer_name"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_city"),rules:[function(e){return e&&e.length>0||"Please Enter the Customer City"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_city,callback:function(t){e.$set(e.newFormData,"customer_city",t)},expression:"newFormData.customer_city"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_address"),rules:[function(e){return e&&e.length>0||"Please Enter the Customer Address"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_address,callback:function(t){e.$set(e.newFormData,"customer_address",t)},expression:"newFormData.customer_address"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("baseinfo.view_customer.customer_contact"),rules:[function(e){return e&&e>0||"Please Enter the Customer Contact"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_contact,callback:function(t){e.$set(e.newFormData,"customer_contact",e._n(t))},expression:"newFormData.customer_contact"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("baseinfo.view_customer.customer_manager"),rules:[function(e){return e&&e.length>0||"Please Enter the Customer Manager"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_manager,callback:function(t){e.$set(e.newFormData,"customer_manager",t)},expression:"newFormData.customer_manager"}}),a("q-input",{attrs:{dense:"",outlined:"",square:"",type:"number",label:e.$t("baseinfo.view_customer.customer_level"),rules:[function(e){return e&&e>0||"Please Enter the Customer Level"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.newDataSubmit()}},model:{value:e.newFormData.customer_level,callback:function(t){e.$set(e.newFormData,"customer_level",e._n(t))},expression:"newFormData.customer_level"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.newDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.newDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1),a("q-dialog",{model:{value:e.deleteForm,callback:function(t){e.deleteForm=t},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[e._v(e._s(e.$t("delete")))]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[e._v("Close")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[e._v("\n       "+e._s(e.$t("deletetip"))+"\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(t){return e.deleteDataCancel()}}},[e._v(e._s(e.$t("cancel")))]),a("q-btn",{attrs:{color:"primary"},on:{click:function(t){return e.deleteDataSubmit()}}},[e._v(e._s(e.$t("submit")))])],1)],1)],1)],2)},o=[],r=a("bd4c"),s=a("a357"),i=a("18d6"),c=a("3004"),l={name:"Pagecustomer",data(){return{openid:"",login_name:"",authin:"0",pathname:"customer/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"customer_name",required:!0,label:this.$t("baseinfo.view_customer.customer_name"),align:"left",field:"customer_name"},{name:"customer_city",label:this.$t("baseinfo.view_customer.customer_city"),field:"customer_city",align:"center"},{name:"customer_address",label:this.$t("baseinfo.view_customer.customer_address"),field:"customer_address",align:"center"},{name:"customer_contact",label:this.$t("baseinfo.view_customer.customer_contact"),field:"customer_contact",align:"center"},{name:"customer_manager",label:this.$t("baseinfo.view_customer.customer_manager"),align:"center"},{name:"customer_level",label:this.$t("baseinfo.view_customer.customer_level"),field:"customer_level",align:"center"},{name:"creater",label:"Creater",field:this.$t("creater"),align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{customer_name:"",customer_city:"",customer_address:"",customer_contact:"",customer_manager:"",customer_level:"",creater:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0}},methods:{getList(){var e=this;i["a"].has("auth")&&Object(c["d"])(e.pathname,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;i["a"].has("auth")&&Object(c["d"])(e.pathname+"?customer_name__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){var e=this;i["a"].has("auth")&&Object(c["d"])(e.pathname_previous,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListNext(){var e=this;i["a"].has("auth")&&Object(c["d"])(e.pathname_next,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},reFresh(){var e=this;e.getList()},newDataSubmit(){var e=this;e.newFormData.creater=e.login_name,Object(c["g"])(e.pathname,e.newFormData).then((t=>{e.getList(),e.newDataCancel(),e.$q.notify({message:"Success Create",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},newDataCancel(){var e=this;e.newForm=!1,e.newFormData={customer_name:"",customer_city:"",customer_address:"",customer_contact:"",customer_manager:"",customer_level:"",creater:""}},editData(e){var t=this;t.editMode=!0,t.editid=e.id,t.editFormData={customer_name:e.customer_name,customer_city:e.customer_city,customer_address:e.customer_address,customer_contact:e.customer_contact,customer_manager:e.customer_manager,customer_level:e.customer_level,creater:t.login_name}},editDataSubmit(){var e=this;Object(c["h"])(e.pathname+e.editid+"/",e.editFormData).then((t=>{e.editDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},editDataCancel(){var e=this;e.editMode=!1,e.editid=0,e.editFormData={customer_name:"",customer_city:"",customer_address:"",customer_contact:"",customer_manager:"",customer_level:"",creater:""}},deleteData(e){var t=this;t.deleteForm=!0,t.deleteid=e},deleteDataSubmit(){var e=this;Object(c["c"])(e.pathname+e.deleteid+"/").then((t=>{e.deleteDataCancel(),e.getList(),e.$q.notify({message:"Success Edit Data",icon:"check",color:"green"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var e=this;e.deleteForm=!1,e.deleteid=0},downloadData(){var e=this;Object(c["e"])(e.pathname+"file/?lang="+i["a"].getItem("lang")).then((t=>{var a=Date.now(),n=r["a"].formatDate(a,"YYYYMMDDHHmmssSSS");const o=Object(s["a"])(e.pathname+n+".csv","\ufeff"+t.data,"text/csv");!0!==o&&e.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))}},created(){var e=this;i["a"].has("openid")?e.openid=i["a"].getItem("openid"):(e.openid="",i["a"].set("openid","")),i["a"].has("login_name")?e.login_name=i["a"].getItem("login_name"):(e.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){var e=this;e.$q.platform.is.electron?e.height=String(e.$q.screen.height-290)+"px":e.height=e.$q.screen.height-290+"px"},updated(){},destroyed(){}},u=l,d=a("42e1"),m=a("5ef4"),_=a("eaac"),p=a("e7a9"),f=a("9c40"),h=a("05c0"),v=a("2c91"),b=a("27f9"),g=a("0016"),w=a("bd08"),y=a("db86"),q=a("24e8"),k=a("f09f"),x=a("d847"),D=a("a370"),$=a("7f67"),F=a("eebe"),C=a.n(F),S=Object(d["a"])(u,n,o,!1,null,null,null);"function"===typeof m["default"]&&Object(m["default"])(S);t["default"]=S.exports;C()(S,"components",{QTable:_["a"],QBtnGroup:p["a"],QBtn:f["a"],QTooltip:h["a"],QSpace:v["a"],QInput:b["a"],QIcon:g["a"],QTr:w["a"],QTd:y["a"],QDialog:q["a"],QCard:k["a"],QBar:x["a"],QCardSection:D["a"]}),C()(S,"directives",{ClosePopup:$["a"]})},fa0e:function(e,t){}}]);