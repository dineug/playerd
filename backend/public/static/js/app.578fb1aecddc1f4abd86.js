webpackJsonp([1],{"/gfG":function(e,t){},"1/oy":function(e,t){},"1fxk":function(e,t){},"9M+g":function(e,t){},GfHa:function(e,t){},"Gs/h":function(e,t){},Id91:function(e,t){},Jmt5:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),a=n("pFYg"),o=n.n(a);window.JSLog=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if("to"===e)n.forEach(function(e){var t="",n=[],i=0;for(var a in e)0!==i&&(t+="JSLog: "),i++,t+=[a," : ",e[a],"\n"].join(""),"object"===o()(e[a])&&n.push({name:a,o:e[a]});JSLog(t),n.forEach(function(e){JSLog("-> "+e.name),JSLog("to",e.o)})});else{var a=Array.prototype.slice.call(arguments);window.console&&console.log("JSLog: "+a.join(" | "))}};n("Jmt5"),n("9M+g");var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App"},s,!1,function(e){n("/gfG")},null,null).exports,l=n("/ocq"),u=(n("1fxk"),n("fZjL")),r=n.n(u),d=n("Zrlr"),m=n.n(d),p=n("wxAW"),f=n.n(p),h=new(function(){function e(){m()(this,e),JSLog("Class Event"),this.core=null,this.rightClickListener=[],this.setEvent()}return f()(e,[{key:"init",value:function(e){JSLog("Class Event init"),this.core=e}},{key:"setEvent",value:function(){window.addEventListener("contextmenu",function(e){e.preventDefault(),this.core.event.onRightClick(e)}.bind(this)),window.onbeforeunload=function(e){return e.returnValue="Dialog text here","Dialog text here"}}},{key:"addRightClick",value:function(e,t){this.rightClickListener.push({fn:e,id:t})}},{key:"removeRightClick",value:function(e){for(var t in this.rightClickListener)if(e===this.rightClickListener[t].id){this.rightClickListener.splice(t,1);break}}},{key:"onRightClick",value:function(e){JSLog("initialize","onRightClick"),JSLog("to",this.rightClickListener),this.rightClickListener.forEach(function(t){"function"==typeof t.fn&&t.fn(e)})}}]),e}()),v=new(function(){function e(){m()(this,e),JSLog("Class ERD"),this.core={event:h},this.setInit(this.core)}return f()(e,[{key:"setInit",value:function(e){JSLog("Class ERD Init"),r()(this.core).forEach(function(t){this[t].init(e)}.bind(this.core))}}]),e}()),y=n("BO1k"),b=n.n(y),g=n("NYxO"),T=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return[e(),e(),"-",e(),"-",e(),"-",e(),"-",e(),e(),e()].join("")},k=function(e,t){for(var n in e)if(t===e[n].id)return e[n]},C=function(){var e=_.state.DBType,t=[];for(var n in _.state.DBTypes)if(e===_.state.DBTypes[n].value){t=_.state.DBTypes[n].dataTypes;break}var i=[];return t.forEach(function(e){i.push({value:e.name,text:e.name})}),i},S=function(e){var t=0;return $(e).each(function(){var e=Number($(this).css("z-index"));t<e&&(t=e)}),++t};i.a.use(g.a);var _=new g.a.Store({state:{DBType:"mysql5.7",DBTypes:[{value:"mysql5.7",text:"MySQL 5.7",dataTypes:[{name:"BIT",type:"Number"},{name:"TINYINT",type:"Number"},{name:"BOOL",type:"Number"},{name:"BOOLEAN",type:"Number"},{name:"SMALLINT",type:"Number"},{name:"MEDIUMINT",type:"Number"},{name:"INT",type:"Number"},{name:"INTEGER",type:"Number"},{name:"BIGINT",type:"Number"},{name:"DECIMAL",type:"Number"},{name:"DEC",type:"Number"},{name:"FLOAT",type:"Number"},{name:"DOUBLE",type:"Number"},{name:"DATE",type:"Date"},{name:"DATETIME",type:"Date"},{name:"TIMESTAMP",type:"Date"},{name:"TIME",type:"Date"},{name:"YEAR(4)",type:"Date"},{name:"CHAR",type:"String"},{name:"VARCHAR",type:"String"},{name:"BINARY",type:"String"},{name:"VARBINARY",type:"String"},{name:"TINYBLOB",type:"String"},{name:"TINYTEXT",type:"String"},{name:"BLOB",type:"String"},{name:"TEXT",type:"String"},{name:"MEDIUMBLOB",type:"String"},{name:"MEDIUMTEXT",type:"String"},{name:"LONGBLOB",type:"String"},{name:"LONGTEXT",type:"String"},{name:"ENUM",type:"String"},{name:"SET",type:"String"}]}],tables:[]},mutations:{addTable:function(e){e.tables.push({id:T(),name:null,comment:null,columns:[],ui:{selected:!1}})},deleteTable:function(e,t){for(var n in e.tables)if(t.id===e.tables[n].id){e.tables.splice(n,1);break}},addColumn:function(e,t){for(var n in e.tables)if(t.id===e.tables[n].id){e.tables[n].columns.push({id:T(),name:null,comment:null,dataType:null,isNull:!0,ui:{selected:!1,key:{pk:!1,fk:!1,pfk:!1}}});break}},deleteColumn:function(e,t){var n=k(e.tables,t.tableId);for(var i in n.columns)if(t.columnId===n.columns[i].id){n.columns.splice(i,1);break}},changeNull:function(e,t){var n=k(e.tables,t.tableId),i=k(n.columns,t.columnId);i.isNull=!i.isNull},changeDataType:function(e,t){var n=k(e.tables,t.tableId);k(n.columns,t.columnId).dataType=t.dataType},changeDB:function(e,t){e.DBType=t.DBType},tableSelected:function(e,t){e.tables.forEach(function(e){e.ui.selected=t.id===e.id}),t.onlyTableSelected&&w(e)},columnSelected:function(e,t){w(e);var n=k(e.tables,t.tableId);k(n.columns,t.columnId).ui.selected=!0},columnKey:function(e,t){switch(t.key){case"pk":!function(e,t){var n=!0,i=!1,a=void 0;try{for(var o,s=b()(e.tables);!(n=(o=s.next()).done);n=!0){var c=o.value,l=!1,u=!0,r=!1,d=void 0;try{for(var m,p=b()(c.columns);!(u=(m=p.next()).done);u=!0){var f=m.value;if(f.ui.selected){f.ui.key[t]=!f.ui.key[t],l=!0;break}}}catch(e){r=!0,d=e}finally{try{!u&&p.return&&p.return()}finally{if(r)throw d}}if(l)break}}catch(e){i=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(i)throw a}}}(e,t.key)}}}});function w(e){e.tables.forEach(function(e){e.columns.forEach(function(e){e.ui.selected=!1})})}var I=n("ZAW5"),L={name:"TopMenu",components:{BasicSelect:I.BasicSelect},data:function(){return{item:{value:"mysql5.7",text:"MySQL 5.7"}}},computed:{options:function(){return _.state.DBTypes}},methods:{addTable:function(){JSLog("TopMenu","addTable"),_.commit({type:"addTable"})},selectDB:function(e){JSLog("TopMenu","selectDB"),JSLog("to",e),this.item=e}},watch:{item:function(e){_.commit({type:"changeDB",DBType:e.value})}}},N={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menuBar"},[t("b-button",{on:{click:this.addTable}},[t("font-awesome-icon",{attrs:{icon:"table"}})],1),this._v(" "),t("div",{staticClass:"dbType"},[t("basic-select",{attrs:{options:this.options,"selected-option":this.item,placeholder:"DB type"},on:{select:this.selectDB}})],1)],1)},staticRenderFns:[]};var D=n("VU/8")(L,N,!1,function(e){n("vDoK")},"data-v-66f9d75d",null).exports,E={name:"TableMenu",data:function(){return{menus:[{type:"pk_active",icon:"",name:"PK",keymap:""}]}},methods:{menuAction:function(e){switch(e){case"pk_active":_.commit({type:"columnKey",key:"pk"})}}},mounted:function(){v.core.event.addRightClick(function(e){var t=$(this);t.css({top:e.clientY+"px",left:e.clientX+"px","z-index":S(".erd_table")}),t.show()}.bind(this.$el)),$(document).on("mousedown",function(e){var t=$(this),n=t.offset();n.width=t.width(),n.height=t.height(),n.top<=e.clientY&&e.clientY<=n.top+n.height&&n.left<=e.clientX&&e.clientX<=n.left+n.width||t.hide()}.bind(this.$el))}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"menu"},e._l(e.menus,function(t){return n("li",{key:t.id,on:{click:function(n){e.menuAction(t.type)}}},[n("span",[e._v(e._s(t.icon))]),e._v(" "),n("span",[e._v(e._s(t.name))]),e._v(" "),n("span",[e._v(e._s(t.keymap))])])}))},staticRenderFns:[]};var M=n("VU/8")(E,x,!1,function(e){n("hG4v")},"data-v-5b3e00aa",null).exports,B={name:"DataType",props:["tableId","columnId"],data:function(){return{dataType:"",selected:"",options:[],hintCheck:!0,searchCheck:!0}},methods:{setSearchOptions:function(e){var t=function(e){var t=C();for(var n in t){var i=!0;-1!==t[n].text.toLowerCase().indexOf(e.toLowerCase())&&(i=!1),i&&(t.splice(n,1),n--)}return t}(e);0!==t.length&&(this.options=t,this.dataType=e)},dataTypeHintVisible:function(e){JSLog("DataType","dataTypeHintVisible",e),this.hintCheck="show"===e,$(this.$el).find("select")[e]()},dataTypeHintHide:function(){setTimeout(function(){JSLog("DataType","dataTypeHintHide",this.hintCheck),this.hintCheck&&this.dataTypeHintVisible("hide")}.bind(this),100)},selectFocus:function(e){"ArrowDown"===e.key?(this.searchCheck=!1,this.hintCheck=!1,$(this.$el).find("select").focus(),$(this.$el).find("select > option").eq(0).prop("selected",!0)):this.searchCheck=!0}},watch:{dataType:function(e){_.commit({type:"changeDataType",tableId:this.tableId,columnId:this.columnId,dataType:e}),this.searchCheck&&this.setSearchOptions(e)},selected:function(e){""!==e&&(this.searchCheck=!1,this.dataType=e)}},created:function(){var e=k(_.state.tables,this.tableId),t=k(e.columns,this.columnId);t.dataType&&(this.dataType=t.dataType),this.options=C()},mounted:function(){$(this.$el).find("select").mouseleave(function(){this.dataTypeHintVisible("hide")}.bind(this)),$(this.$el).find("select").mouseenter(function(){this.hintCheck=!1}.bind(this)),$(this.$el).find("select").keyup(function(e){13===e.keyCode&&(this.hintCheck=!0,$(this.$el).find("input").focus())}.bind(this))}},A={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dataType"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dataType,expression:"dataType"}],attrs:{type:"text",placeholder:"dataType"},domProps:{value:e.dataType},on:{click:function(t){e.dataTypeHintVisible("show")},keydown:function(t){e.dataTypeHintVisible("show")},keyup:e.selectFocus,mouseout:e.dataTypeHintHide,blur:e.dataTypeHintHide,input:function(t){t.target.composing||(e.dataType=t.target.value)}}}),e._v(" "),n("b-form-select",{ref:"box",staticClass:"mb-4",attrs:{options:e.options,"select-size":20},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},staticRenderFns:[]};var J=n("VU/8")(B,A,!1,function(e){n("Gs/h")},"data-v-68c60c19",null).exports,R=n("DAYN"),O={name:"MainCanvas",components:{DataType:J,draggable:n.n(R).a},data:function(){return{tables:_.state.tables,onlyTableSelected:!0}},methods:{addColumn:function(e){JSLog("MainCanvas","addColumn",e),_.commit({type:"addColumn",id:e})},deleteColumn:function(e,t){JSLog("MainCanvas","deleteColumn",e,t),_.commit({type:"deleteColumn",tableId:e,columnId:t})},changeNull:function(e,t){_.commit({type:"changeNull",tableId:e,columnId:t})},deleteTable:function(e){JSLog("MainCanvas","deleteTable",e),_.commit({type:"deleteTable",id:e})},tableSelected:function(e){JSLog("MainCanvas","tableSelected",e),_.commit({type:"tableSelected",id:e,onlyTableSelected:this.onlyTableSelected}),this.onlyTableSelected=!0},columnSelected:function(e,t){JSLog("MainCanvas","columnSelected",e,t),_.commit({type:"columnSelected",tableId:e,columnId:t}),this.onlyTableSelected=!1}},updated:function(){$(".erd_table").draggable().off("mousedown",H).mousedown(H)}};function H(){$(this).css("z-index",S(".erd_table"))}var V={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("transition-group",{attrs:{name:"slide-fade",tag:"div"}},e._l(e.tables,function(t){return n("div",{key:t.id,staticClass:"erd_table",class:{selected:t.ui.selected},on:{mousedown:function(n){e.tableSelected(t.id)}}},[n("div",{staticClass:"erd_table_top"}),e._v(" "),n("div",{staticClass:"erd_table_header"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"table.name"}],attrs:{type:"text",placeholder:"table"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}}),e._v(" "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:function(n){e.addColumn(t.id)}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1),e._v(" "),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(n){e.deleteTable(t.id)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1),e._v(" "),n("draggable",{attrs:{options:{group:"table"}},model:{value:t.columns,callback:function(n){e.$set(t,"columns",n)},expression:"table.columns"}},[n("transition-group",{attrs:{name:"slide-fade",tag:"div"}},e._l(t.columns,function(i){return n("div",{key:i.id,staticClass:"erd_column",class:{selected:i.ui.selected},on:{mousedown:function(n){e.columnSelected(t.id,i.id)}}},[n("div",[n("div",{staticClass:"erd_column_key",class:{pk:i.ui.key.pk,fk:i.ui.key.fk,pfk:i.ui.key.pfk}},[n("font-awesome-icon",{attrs:{icon:"key"}})],1),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:i.name,expression:"column.name"}],attrs:{type:"text",placeholder:"column"},domProps:{value:i.name},on:{input:function(t){t.target.composing||e.$set(i,"name",t.target.value)}}}),e._v(" "),n("data-type",{attrs:{tableId:t.id,columnId:i.id}}),e._v(" "),i.isNull?n("input",{staticClass:"erd_column_not_null",attrs:{type:"text",readonly:"",value:"NULL"},on:{click:function(n){e.changeNull(t.id,i.id)}}}):n("input",{staticClass:"erd_column_not_null",attrs:{type:"text",readonly:"",value:"N-N"},on:{click:function(n){e.changeNull(t.id,i.id)}}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:i.comment,expression:"column.comment"}],attrs:{type:"text",placeholder:"comment"},domProps:{value:i.comment},on:{input:function(t){t.target.composing||e.$set(i,"comment",t.target.value)}}}),e._v(" "),n("b-button",{attrs:{variant:"outline-danger"},on:{click:function(n){e.deleteColumn(t.id,i.id)}}},[n("font-awesome-icon",{attrs:{icon:"times"}})],1)],1)])}))],1)],1)}))],1)},staticRenderFns:[]};var Y={name:"ERD",components:{TopMenu:D,TableMenu:M,MainCanvas:n("VU/8")(O,V,!1,function(e){n("kIDv")},"data-v-70d0d941",null).exports}},U={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"erd"},[t("TopMenu"),this._v(" "),t("MainCanvas"),this._v(" "),t("TableMenu")],1)},staticRenderFns:[]};var F=n("VU/8")(Y,U,!1,function(e){n("VO+Y")},"data-v-58482d04",null).exports;i.a.use(l.a);var G=new l.a({mode:"history",routes:[{path:"/",name:"ERD",component:F}]});i.a.use(g.a);var j=new g.a.Store({state:{},mutations:{}}),P=n("mtWM"),X=n.n(P),z=n("e6fC"),q=n("C/JF"),K=n("fhbW"),W=n("U0v6");i.a.config.productionTip=!1,i.a.prototype.$http=X.a,i.a.prototype.$event=new i.a,i.a.use(z.a),q.library.add(K.c,K.b,K.d,K.a),i.a.component("font-awesome-icon",W.FontAwesomeIcon),new i.a({el:"#app",router:G,store:j,components:{App:c},template:"<App/>"})},"VO+Y":function(e,t){},hG4v:function(e,t){},kIDv:function(e,t){},vDoK:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.578fb1aecddc1f4abd86.js.map