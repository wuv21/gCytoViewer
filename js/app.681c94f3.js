(function(t){function e(e){for(var s,n,i=e[0],o=e[1],c=e[2],h=0,d=[];h<i.length;h++)n=i[h],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&d.push(l[n][0]),l[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var o=a[i];0!==l[o]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},l={app:0},r=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/g-cyto-viewer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("8a23"),l=a.n(s);l.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"gCytoViewer"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""},model:{value:t.drawerRight,callback:function(e){t.drawerRight=e},expression:"drawerRight"}},[a("div",{staticClass:"d-flex flex-column",attrs:{id:"antibody-panel"}},[a("div",[a("v-list-item",[a("v-list-item-content",[a("div",{staticClass:"d-flex flex-row"},[a("v-list-item-title",{staticClass:"title"},[t._v("Antibodies")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,l=e.attrs;return[a("div",{staticClass:"sidebar-icons"},[a("v-btn",t._g(t._b({attrs:{small:"",icon:"",disabled:0==t.selAbs.length,color:"#ff6b6b"},on:{click:t.clearAllExpScatter}},"v-btn",l,!1),s),[a("v-icon",[t._v("mdi-delete")])],1)],1)]}}])},[a("span",[t._v("Remove all abs")])])],1)])],1)],1),a("div",[a("v-list-item",[a("v-text-field",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}],staticClass:"mt-2",attrs:{label:"Search for abs",dense:"",clearable:""},model:{value:t.absSearch,callback:function(e){t.absSearch=e},expression:"absSearch"}})],1)],1),a("div",{staticClass:"flex-grow-1",attrs:{id:"antibody-list"}},[a("v-list",{attrs:{dense:"",id:"antibody-list"}},[a("v-list-item-group",{attrs:{multiple:!0,color:"#3d5a80"},model:{value:t.selAbs,callback:function(e){t.selAbs=e},expression:"selAbs"}},[a("draggable",{staticStyle:{"min-height":"10px"},attrs:{options:{group:{name:"test",pull:"clone",put:!1},sort:!1}},model:{value:t.abs,callback:function(e){t.abs=e},expression:"abs"}},t._l(t.abs,(function(e,s){return a("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.absDisplayBool[s],expression:"absDisplayBool[i]"}],key:"ab-"+s},[a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)})),1)],1)],1)],1)]),a("div",{staticClass:"d-flex flex-column",attrs:{id:"cluster-panel"}},[a("div",[a("v-list-item",[a("v-list-item-content",[a("div",{staticClass:"d-flex flex-row"},[a("v-list-item-title",{staticClass:"title"},[t._v("Clusters")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,l=e.attrs;return[a("v-btn",t._g(t._b({attrs:{small:"",icon:"",disabled:0==t.selClusterTrack.length,color:"#ff6b6b"},on:{click:t.clearClusterSel}},"v-btn",l,!1),s),[a("v-icon",[t._v("mdi-delete")])],1)]}}])},[a("span",[t._v("Remove all")])]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,l=e.attrs;return[a("v-btn",t._g(t._b({attrs:{small:"",icon:"",disabled:t.selClusterTrack.length==t.clusterCategoriesCurrentVals.length,color:"#4ecdc4"},on:{click:t.addAllClusterSel}},"v-btn",l,!1),s),[a("v-icon",[t._v("mdi-check-all")])],1)]}}])},[a("span",[t._v("Add all")])])],1)])],1)],1),a("div",{staticClass:"flex-grow-1",attrs:{id:"cluster-list"}},[a("v-list",{attrs:{dense:"",id:"cluster-list"}},[a("v-list-item-group",{attrs:{multiple:!0,color:"#ee6c4d"},on:{change:t.updateCells},model:{value:t.selClusterTrack,callback:function(e){t.selClusterTrack=e},expression:"selClusterTrack"}},t._l(t.clusterCategoriesCurrentVals,(function(e,s){return a("v-list-item",{key:"clust-"+s,attrs:{value:s}},[a("v-list-item-icon",{staticClass:"mr-3"},[a("v-icon",{attrs:{color:""+t.clusterCategoriesUniqCols[t.clusterCategoriesSel][s]}},[t._v("mdi-checkbox-blank-circle")])],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e)}})],1)],1)})),1)],1)],1)])]),a("v-app-bar",{attrs:{app:"","clipped-right":"",color:t.headerFooterColor,dark:""}},[a("v-toolbar-title",[t._v(t._s(t.title))]),a("v-spacer"),a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawerRight=!t.drawerRight}}})],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("v-file-input",{attrs:{name:"hi",accept:".tsv",label:"Upload TSV data file","truncate-length":"30"},on:{change:t.onFileChange}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showSpinner,expression:"showSpinner"}]},[a("v-progress-circular",{attrs:{indeterminate:"",color:t.headerFooterColor}}),a("p",{staticClass:"caption"},[t._v("Loading...please wait")])],1),a("div",[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.showAlertMsg,expression:"showAlertMsg"}],attrs:{outlined:"",type:"error"}},[t._v(" "+t._s(t.alertErrorMsg)+" ")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}]},[a("status-badge",{attrs:{"chip-color":"#335c67"}},[t._v(" "+t._s(t.abs.length)+" features ")]),a("status-badge",{attrs:{"chip-color":"#e09f3e"}},[t._v(" "+t._s(t.dataCiteLength)+" cells ")]),a("status-badge",{attrs:{"chip-color":"#540b0e"}},[t._v(" "+t._s(t.clusterCategories.length)+" cluster columns ")])],1)],1),a("v-col",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}],attrs:{cols:"8","text-center":"","justify-center":""}},[a("p",{staticClass:"title mb-0"},[t._v("Dashboard settings")]),a("v-row",[a("v-col",{attrs:{cols:"5"}},[a("p",{staticClass:"subtitle-2 mb-0"},[t._v("Random cell downsampling")]),a("p",{staticClass:"caption"},[t._v("Recommended to de-select all antibodies first.")]),a("v-slider",{staticClass:"align-center",attrs:{max:t.dataCiteLength,min:"0","hide-details":""},on:{input:t.updateCells},scopedSlots:t._u([{key:"append",fn:function(){return[a("v-text-field",{staticClass:"ma-0 pa-0",staticStyle:{width:"5em"},attrs:{"hide-details":"","single-line":"",max:t.dataCiteLength,min:"0",type:"number"},model:{value:t.cellsUsed,callback:function(e){t.cellsUsed=e},expression:"cellsUsed"}})]},proxy:!0}]),model:{value:t.cellsUsed,callback:function(e){t.cellsUsed=e},expression:"cellsUsed"}})],1),a("v-col",{attrs:{cols:"3"}},[a("p",{staticClass:"subtitle-2"},[t._v("Coordinate space")]),a("v-select",{attrs:{outlined:"",items:t.dimMethods,disabled:1==t.dimMethods.length,dense:"",label:"Select method"},on:{input:t.updateDimsAndCells},model:{value:t.dimMethodSel,callback:function(e){t.dimMethodSel=e},expression:"dimMethodSel"}})],1),a("v-col",{attrs:{cols:"4"}},[a("p",{staticClass:"subtitle-2"},[t._v("Cluster")]),a("v-select",{attrs:{outlined:"",items:t.clusterCategories,disabled:1==t.clusterCategories.length,dense:"",label:"Select category"},on:{input:t.updateClusterAndCells},model:{value:t.clusterCategoriesSel,callback:function(e){t.clusterCategoriesSel=e},expression:"clusterCategoriesSel"}})],1)],1)],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}],attrs:{align:"start",justify:"space-around"}},[a("v-col",{attrs:{cols:"6","text-center":"","justify-center":""}},[a("p",{staticClass:"title mb-0"},[t._v("Colored by cluster")]),a("p",{staticClass:"caption"},[t._v("To start, click on graph to place anchors for gating. Double click to finish and to allow gate dragging. "),a("br"),t._v(" To reset, click outside to start drawing new gate.")]),a("p",{staticClass:"subtitle-1 mb-0"},[t._v("Polygonal gate details")]),a("p",{staticClass:"caption mb-0"},[t._v("Current polygonal gate: "+t._s(t.dataPolyGate.length)+" cells selected of "+t._s(t.currentDataClean.length)+" cells shown on graph")]),a("p",{staticClass:"caption mt-0 pt-0"},[t._v(t._s(t.cellsUsed-t.currentDataClean.length)+" cells are not shown based on current cluster selection")]),a("div",{attrs:{id:"mainScatter"}})]),a("v-col",{attrs:{cols:"6"}},[a("p",{staticClass:"title mb-0"},[t._v("Polygonal gate")]),a("p",{staticClass:"caption"},[t._v("Drag and drop antibodies from right panel to the below boxes.")]),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-card-subtitle",{staticClass:"pb-0"},[t._v("x-axis antibody")]),a("draggable",{staticStyle:{"min-height":"15px"},attrs:{options:{group:{name:"test",pull:"clone"},sort:!1}},model:{value:t.polyGateXAb,callback:function(e){t.polyGateXAb=e},expression:"polyGateXAb"}},t._l(t.polyGateXAb,(function(e,s){return a("v-card-text",{key:"x-"+s,staticClass:"py-2"},[a("div",{domProps:{textContent:t._s(e)}})])})),1)],1)],1),a("v-col",{attrs:{cols:"6"}},[a("v-card",{staticClass:"mx-auto",attrs:{outlined:""}},[a("v-card-subtitle",{staticClass:"pb-0"},[t._v("y-axis antibody")]),a("draggable",{staticStyle:{"min-height":"15px"},attrs:{options:{group:{name:"test",pull:"clone"},sort:!1}},model:{value:t.polyGateYAb,callback:function(e){t.polyGateYAb=e},expression:"polyGateYAb"}},t._l(t.polyGateYAb,(function(e,s){return a("v-card-text",{key:"y-"+s,staticClass:"py-2"},[a("div",{domProps:{textContent:t._s(e)}})])})),1)],1)],1)],1),a("div",{attrs:{id:"polyGateScatter"}})],1)],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}],attrs:{id:"cluster-heatmap-section"}},[a("v-col",{attrs:{cols:"12","text-center":"","justify-center":""}},[a("p",{staticClass:"title mb-0"},[t._v("Mean expression value heatmap")]),a("p",{staticClass:"caption"},[t._v("Showing complete dataset (no filtering) aggregated by cluster. Colors scaled by each column.")]),a("div",{attrs:{id:"clusterHeatmap"}}),a("div",{attrs:{id:"tooltip"}})])],1),a("v-row",{directives:[{name:"show",rawName:"v-show",value:0!=t.abs.length,expression:"abs.length != 0"}]},[a("v-col",{attrs:{"text-center":"","justify-center":""}},[a("p",{staticClass:"title mb-0"},[t._v("Colored by scaled expression level")]),a("v-row",[a("v-col",{staticClass:"pt-0",attrs:{cols:"6"}},[a("v-switch",{attrs:{label:"Enable threshold filter"},model:{value:t.enableThresh,callback:function(e){t.enableThresh=e},expression:"enableThresh"}}),a("v-slider",{attrs:{label:"Threshold",hint:"Select antibodies on right panel. Can enable minimum threshold filter to increase app responsiveness.","persistent-hint":"","thumb-label":"always","thumb-size":24,disabled:!t.enableThresh,min:t.minThresh,max:t.maxThresh,step:"0.1",type:"number"},model:{value:t.expThresh,callback:function(e){t.expThresh=e},expression:"expThresh"}})],1),a("v-col",{attrs:{cols:"6"}},[a("v-row",[a("v-col",{staticClass:"pb-0",attrs:{cols:"4"}},[a("v-select",{attrs:{outlined:"",items:t.expColorScales,dense:"",label:"Select color scale (low - high)"},model:{value:t.expColorScaleSel,callback:function(e){t.expColorScaleSel=e},expression:"expColorScaleSel"}})],1),a("v-col",{staticClass:"pb-0",attrs:{cols:"8"}},[a("div",{attrs:{id:"expColorLegend"}})])],1),a("v-row",{staticClass:"mb-0"},[a("v-col",{staticClass:"pt-0",attrs:{cols:"6"}},[a("v-btn",{attrs:{color:"normal",disabled:0==t.selAbs.length},on:{click:t.clearAllExpScatter}},[t._v("Clear all expression plots")])],1)],1)],1)],1),a("div",{attrs:{id:"expressionScatter"}})],1)],1)],1)],1),a("v-footer",{staticClass:"white--text",attrs:{app:"",color:t.headerFooterColor}},[a("span",[t._v("Vincent Wu | Betts Lab")]),a("v-spacer"),a("v-btn",{attrs:{small:""},on:{click:t.toggleDarkTheme}},[t._v("dark/light mode")]),a("span",{staticClass:"ml-3"},[t._v("Updated 2020.10.30")])],1)],1)},r=[],n=(a("99af"),a("cb29"),a("4de4"),a("4160"),a("a630"),a("caad"),a("c975"),a("d81d"),a("13d5"),a("fb6a"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("1276"),a("159b"),a("ddb0"),a("b85c")),i=a("2909"),o=(a("5363"),a("310e")),c=a.n(o),u=a("5698"),h=a("2ef0"),d=a.n(h);a("a15b");function p(){var t=500,e=500,a=u["scaleLinear"](),s=u["scaleLinear"](),l="",r="",n="x axis",i="y axis",o="#000000",c="#000000",h="",d="",p="Chart title",f=null,g=2,v=!1,m={left:70,bottom:50,top:30,right:10};function b(b){if(v&&""!=l){var y=l.domain().reduce((function(t,e){return e.length>t?e.length:t}),0);m.right=m.right+6.5*y,e=t+6.5*y}var C=t-m.bottom-m.top,x=e-m.left-m.right;b.each((function(v){p=v.title,"expression"===v.type&&(r=v.title,l=v.fillScale);var b=u["select"](this),y=b.selectAll("svg").data([v.values]),S=y.enter().append("svg").attr("width",e).attr("height",t).attr("class","chart-svg");S.append("text").attr("transform","translate("+(m.left+x/2)+",30)").text(p).attr("class","chart-title").style("text-anchor","middle").style("fill",c),S.append("g").attr("transform","translate("+m.left+","+m.top+")").attr("class","scatterG"),S.append("g").attr("transform","translate("+m.left+","+(C+m.top)+")").attr("class","axis x"),S.append("g").attr("transform","translate("+m.left+","+m.top+")").attr("class","axis y"),S.append("text").attr("transform","translate("+(m.left+x/2)+","+(C+m.top+40)+")").attr("class","axis-title x").style("fill",o),S.append("text").attr("transform","translate("+(m.left-40)+","+(m.top+C/2)+") rotate(-90)").attr("class","axis-title y").style("fill",o);var w=u["axisBottom"](),k=u["axisLeft"](),A=null;function _(t,e){var a=Math.abs(t[1]-t[0]),s=[t[0]-a*e,t[1]+a*e];return s}A=null!=f?f:v.values;var V=.1,G=u["extent"](A,(function(t){return+v.orgData[h][t]}));a.range([0,x]).domain(_(G,V));var T=u["extent"](A,(function(t){return+v.orgData[d][t]}));s.range([C,0]).domain(_(T,V)),w.scale(a),k.scale(s),b.select(".axis.x").transition().duration(1e3).call(w),b.select(".axis.y").transition().duration(1e3).call(k),b.select(".axis-title.x").text(n),b.select(".axis-title.y").text(i);var D=document.createElement("custom"),P=u["select"](D),M=P.selectAll("circle").data(v.values,(function(t){return v.orgData["barcode"][t]})),E=M.join((function(t){return t.append("circle").attr("fill",(function(t){return l(v.orgData[r][t])})).style("opacity",.8).attr("cx",(function(t){return a(v.orgData[h][t])})).attr("cy",(function(t){return s(v.orgData[d][t])})).attr("r",g).attr("id",(function(t){return v.orgData["barcode"][t]}))}),(function(t){return t.attr("fill",(function(t){return l(v.orgData[r][t])})).attr("cx",(function(t){return a(v.orgData[h][t])})).attr("cy",(function(t){return s(v.orgData[d][t])}))}),(function(t){return t.remove()})),j="canvas-"+v.key,L=document.getElementById(j),O=null;O=null===L?u["select"](this).append("canvas").attr("width",e-m.left-m.right).attr("height",t-m.bottom-m.top).style("margin-left",m.left+"px").style("margin-right",m.right+"px").style("margin-bottom",m.bottom+"px").style("margin-top",m.top+"px").attr("class","canvas-plot").attr("id",j):u["select"](document.getElementById(j));var B=O.node().getContext("2d");function U(){B.clearRect(0,0,B.canvas.width,B.canvas.height),E.each((function(){var t=u["select"](this);B.fillStyle=t.attr("fill"),B.beginPath(),B.arc(t.attr("cx"),t.attr("cy"),t.attr("r"),0,2*Math.PI,!0),B.fill(),B.closePath()}))}U()}))}return b.height=function(e){return arguments.length?(t=e,b):t},b.width=function(t){return arguments.length?(e=t,b):e},b.margin=function(t){return arguments.length?(m=t,b):m},b.xTitle=function(t){return arguments.length?(n=t,b):n},b.yTitle=function(t){return arguments.length?(i=t,b):i},b.axesTitleColor=function(t){return arguments.length?(o=t,b):o},b.titleColor=function(t){return arguments.length?(c=t,b):c},b.radius=function(t){return arguments.length?(g=t,b):g},b.xVar=function(t){return arguments.length?(h=t,b):h},b.yVar=function(t){return arguments.length?(d=t,b):d},b.xScale=function(t){return arguments.length?(a=t,b):a},b.yScale=function(t){return arguments.length?(s=t,b):s},b.fillVar=function(t){return arguments.length?(r=t,b):r},b.fillScale=function(t){return arguments.length?(l=t,b):l},b.constrainAxes=function(t){return arguments.length?(f=t,b):f},b.legend=function(t){return arguments.length?(v=t,b):v},b}a("b680"),a("6062");function f(){var t=400,e=1800,a="",s="",l="#000000",r="",n="",o=14,c={left:75,bottom:100,top:100,right:0};function h(h){h.each((function(h){var d=u["select"](this),p=d.selectAll("svg").data([h.values]),f=p.enter().append("svg").attr("width",e).attr("height",t).attr("class","chart-heatmap-svg");f.append("g").attr("transform","translate("+c.left+","+c.top+")").attr("class","heatmapG"),f.append("g").attr("transform","translate("+c.left+","+c.top+")").attr("class","heatmap-x"),f.append("g").attr("transform","translate(0,"+c.top+")").attr("class","heatmap-y");var g=u["select"]("#tooltip").attr("class","tooltip").style("opacity",0),v=Object(i["a"])(new Set(h.values.map((function(t){return t[r]})))),m=u["scaleBand"]().domain(v).range([0,v.length*o]),b=Object(i["a"])(new Set(h.values.map((function(t){return t[n]})))),y=u["scaleBand"]().domain(b).range([0,b.length*o]),C=u["select"](".heatmap-y").selectAll(".y-hm-label").data(b,(function(t){return h.clusterCategory+":"+t}));C.join((function(t){return t.append("text").attr("class","y-hm-label hm-axis-tick").text((function(t){return t})).attr("x",0).attr("y",(function(t){return y(t)})).style("font-size",9).style("text-anchor","end").attr("transform","translate("+(c.left-5)+","+o/1.3+")").style("fill",l)}),(function(t){return t.attr("x",0).attr("y",(function(t){return y(t)})).style("fill",l)}),(function(t){return t.remove()}));var x=u["select"](".heatmap-x").selectAll(".x-hm-label").data(v,(function(t){return h.clusterCategory+":"+t}));x.join((function(t){return t.append("text").attr("class","x-hm-label hm-axis-tick").text((function(t){return t})).attr("y",(function(t){return m(t)+o/1.5})).attr("x",9).style("font-size",9).style("text-anchor","start").attr("transform","rotate(-90)").style("fill",l)}),(function(t){return t.attr("y",(function(t){return m(t)+o/1.5})).attr("x",9).style("fill",l)}),(function(t){return t.remove()}));var S=d.select(".heatmapG").selectAll(".tile").data(h.values,(function(t){return h.clusterCategory+":"+t[r]+":"+t[n]}));S.join((function(t){return t.append("rect").attr("x",(function(t){return m(t[r])})).attr("y",(function(t){return y(t[n])})).attr("class","tile").attr("width",o-1).attr("height",o-1).style("fill",(function(t){return a[t[r]](t[s])})).on("mouseover",(function(t){u["select"](this).transition().style("stroke","#2980B9").style("stroke-width","3px"),g.style("opacity",.9),g.html("value: "+t[s].toFixed(2)+"<br/>ab: "+t[r]+"<br/>cluster: "+t[n]).style("left",u["event"].pageX+"px").style("top",u["event"].pageY-28+"px")})).on("mouseout",(function(){g.style("opacity",0),u["select"](this).transition().style("stroke",null)}))}),(function(t){return t.attr("x",(function(t){return m(t[r])})).attr("y",(function(t){return y(t[n])})).style("fill",(function(t){return a[t[r]](t[s])}))}),(function(t){return t.remove()}))}))}return h.height=function(e){return arguments.length?(t=e,h):t},h.width=function(t){return arguments.length?(e=t,h):e},h.margin=function(t){return arguments.length?(c=t,h):c},h.xVar=function(t){return arguments.length?(r=t,h):r},h.yVar=function(t){return arguments.length?(n=t,h):n},h.axesLabelColor=function(t){return arguments.length?(l=t,h):l},h.tileSize=function(t){return arguments.length?(o=t,h):o},h.fillVar=function(t){return arguments.length?(s=t,h):s},h.fillScales=function(t){return arguments.length?(a=t,h):a},h}a("a434");(function(t){t.polybrush=function(){var e=t.dispatch("start","brush","end"),a=null,s=null,l=null,r=[],n=!0,i=!0,o=!1,c=null,u=t.line().x((function(t){return t[0]})).y((function(t){return t[1]}));function h(e){a=e,e.each((function(){var e=t.select(this).style("pointer-events","all").on("click.brush",m),a=e.selectAll(".background").data([0]).enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair");if(e.selectAll(".extent").data([r]).enter().append("path").attr("class","extent").attr("opacity",.2).style("cursor","move"),s){var n=p(s.range());a.attr("x",n[0]).attr("width",n[1]-n[0])}if(l){var i=p(l.range());a.attr("y",i[0]).attr("height",i[1]-i[0])}}))}function d(){return a.each((function(){t.select(this).selectAll("g path").attr("d",(function(t){return u(t)+"Z"}))}))}function p(t){var e=t[0],a=t[t.length-1];return e<a?[e,a]:[a,e]}function f(t){var e=p(s.range()),a=p(l.range()),r=Math.max(e[0],Math.min(e[1],t[0])),n=Math.max(a[0],Math.min(a[1],t[1]));return t[0]===r&&t[1]===n}function g(a){var s=t.mouse(a);i?(r.push(s),i=!1):(f(s)&&r.splice(r.length-1,1,s),d(),e.call("brush",this))}function v(){var a=t.select(window);return a.on("dblclick.brush",null).on("mousemove.brush",null),n=!0,2===r.length&&r[0][0]===r[1][0]&&r[0][1]===r[1][1]&&r.splice(0,r.length),t.select(".extent").on("mousedown.brush",C),e.call("end",this)}function m(){var a=this,s=t.select(window);if(i=!0,!o)return n&&(r.splice(0,r.length),n=!1,t.select(".extent").on("mousedown.brush",null),s.on("mousemove.brush",(function(){return g(a)})).on("dblclick.brush",v),e.call("start",this)),r.length>1&&r.pop(),r.push(t.mouse(this)),d();o=!1}function b(a){var s=t.mouse(a),l=s[0]-c[0],n=s[1]-c[1],i=!1;function o(t){t[0]+=l,t[1]+=n}function u(t){return f(t)||(i=!0),i}if(c=s,r.forEach((function(t){o(t)})),r.forEach((function(t){u(t)})),!i)return d(),e.call("brush",this,{mode:"move"})}function y(){var a;return a=t.select(window),a.on("mousemove.brush",null).on("mouseup.brush",null),o=!0,e.call("end",this)}function C(){var e=this;t.event.stopPropagation(),t.event.preventDefault(),n&&!h.empty()&&(t.select(window).on("mousemove.brush",(function(){return b(e)})).on("mouseup.brush",y),c=t.mouse(this))}return h.isWithinExtent=function(e,a){return t.polygonContains(r,[e,a])},h.x=function(t){return arguments.length?(s=t,h):s},h.y=function(t){return arguments.length?(l=t,h):l},h.extent=function(t){return arguments.length?(r=t,h):r},h.clear=function(){return r.splice(0,r.length),h},h.empty=function(){return 0===r.length},h.on=function(t,a){return e.on(t,a),h},h}})(u);var g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chip",{staticClass:"ma-1",attrs:{color:t.chipColor,"text-color":"white"}},[a("v-avatar",{attrs:{left:""}},[a("v-icon",[t._v("mdi-file-cabinet")])],1),t._t("default")],2)},v=[],m={name:"statusBadge",props:{"chip-color":{type:String,default:"#000000"}}},b=m,y=a("2877"),C=a("6544"),x=a.n(C),S=a("8212"),w=a("cc20"),k=a("132d"),A=Object(y["a"])(b,g,v,!1,null,null,null),_=A.exports;x()(A,{VAvatar:S["a"],VChip:w["a"],VIcon:k["a"]});var V={"Viridis (Purple - Blue - Yellow)":u["interpolateViridis"],"Plasma (Purple - Red - Yellow)":u["interpolatePlasma"],"Inferno (Black - Red - Yellow)":u["interpolateInferno"],"Purple - Green":u["interpolatePRGn"],"White - Red":u["interpolateReds"],"White - Blue":u["interpolateBlues"]};function G(t,e,a,s){return t?t.length<=1?"No data in file":0==a.length?"No axis columns":a.length%2!=0?"Number of axis columns are odd":0==s.length?"No cluster columns":e.includes("barcode")?"":"No barcode column":"No file"}var T={name:"gCytoViewer",icons:{iconfont:"mdi"},components:{draggable:c.a,"status-badge":_},data:function(){return{drawerRight:null,title:"gCytoViewer",headerFooterColor:"#264653",svgTextColor:"#000000",themeLight:!0,dataFile:null,alertErrorMsg:"",showAlertMsg:!1,header:[],abs:[],selAbs:[],selClusterTrack:[],absSearch:null,absDisplayBool:[],dataCite:{},dataCiteLength:0,currentDataClean:[],dataPolyGate:[],polyGateXAb:[],polyGateYAb:[],dataHeatmap:[],polyGateBrush:null,mainScatterXScale:null,mainScatterYScale:null,fillScales:[],enableThresh:!1,expThresh:0,minThresh:0,maxThresh:2,cellsUsed:0,dimMethods:[],dimMethodSel:null,clusterCategories:[],clusterCategoriesSel:null,clusterCategoriesUniqVals:{},clusterCategoriesScales:{},clusterCategoriesUniqCols:{},clusterCategoriesCurrentVals:[],showSpinner:!1,expColorScales:Object.keys(V),expColorScaleSel:Object.keys(V)[0]}},watch:{dataFile:function(t){var e=this;if(this.showAlertMsg=!1,t){var a=t.split("\n");this.header=a[0].split("\t"),a=d.a.map(a,(function(t){return t.split("\t")})),1==a[a.length-1].length&&a.pop();var s=function(t,e,a){var s=[];return t.forEach((function(t){"barcode"===a||isNaN(t[e])?s.push(t[e]):s.push(parseFloat(t[e]))})),s};this.header.forEach((function(t,l){e.dataCite[t]=s(a.slice(1,a.length),l,t)}));var l=["barcode"],r=d.a.filter(this.header,(function(t){return/^(xaxis|yaxis)/.test(t)})),o=d.a.filter(this.header,(function(t){return/^(cluster_)/.test(t)})),c=G(a,this.header,r,o);if(""!=c)return this.showAlertMsg=!0,this.alertErrorMsg=c,void(this.showSpinner=!1);this.abs=d.a.without.apply(d.a,[this.header].concat(Object(i["a"])(l.concat(r,o)))),this.absDisplayBool=Array(this.abs.length).fill(!0),this.dimMethods=d.a.chain(r).map((function(t){return t.replace(/^(xaxis|yaxis)_/,"")})).uniq().value(),this.dimMethodSel=this.dimMethods[0],this.clusterCategories=d.a.chain(o).map((function(t){return t.replace(/^cluster_/,"")})).uniq().value(),this.clusterCategoriesSel=this.clusterCategories[0],this.dataCiteLength=this.dataCite["barcode"].length,this.currentDataClean=Object(i["a"])(Array(this.dataCiteLength).keys()).map((function(t){return t})),this.abs.forEach((function(t){var a=d.a.min(e.dataCite[t]),s=d.a.max(e.dataCite[t]);e.fillScales[t]=u["scaleSequential"](V[e.expColorScaleSel]).domain([a,s])}));var h,p=Object(n["a"])(this.clusterCategories);try{for(p.s();!(h=p.n()).done;){var f=h.value;this.clusterCategoriesUniqVals[f]={};for(var g=this.dataCite["cluster_"+f],v=0;v<g.length;v++){var m=g[v];m in this.clusterCategoriesUniqVals[f]?this.clusterCategoriesUniqVals[f][m].push(v):this.clusterCategoriesUniqVals[f][m]=[v]}}}catch(x){p.e(x)}finally{p.f()}var b=function(t){var a=Object.keys(e.clusterCategoriesUniqVals[t]),s=C(a);e.clusterCategoriesScales[t]=u["scaleOrdinal"]().domain(Object.keys(e.clusterCategoriesUniqVals[t])).range(s),e.clusterCategoriesUniqCols[t]=d.a.map(Object.keys(e.clusterCategoriesUniqVals[t]),(function(a){return e.clusterCategoriesScales[t](a)}))};for(var y in this.clusterCategoriesUniqVals)b(y);this.cellsUsed=this.currentDataClean.length,this.clusterCategoriesCurrentVals=Object.keys(this.clusterCategoriesUniqVals[this.clusterCategoriesSel]),this.selClusterTrack=this.clusterCategoriesCurrentVals.map((function(t,e){return e})),this.makeMainScatter(),this.drawColorScaleLegend(),this.makeClusterHeatmap(),this.showSpinner=!1}else this.showSpinner=!1;function C(t){for(var e=[],a=0;a<t.length;a++)e.push(u["interpolateTurbo"](a/t.length));return e}},selAbs:function(){if(0!=this.selAbs.length){var t=this.makeExpressionScatterData();this.makeExpressionScatter(t)}},enableThresh:function(){if(0!=this.selAbs.length){var t=this.makeExpressionScatterData();this.makeExpressionScatter(t)}},expThresh:function(){if(0!=this.selAbs.length){var t=this.makeExpressionScatterData();this.makeExpressionScatter(t)}},dataPolyGate:function(){0!=this.dataCiteLength&&1==this.polyGateXAb.length&&1==this.polyGateYAb.length&&this.makePolyGateScatter()},polyGateXAb:function(t,e){0!=this.dataCiteLength&&(this.polyGateXAb=this.checkPolyGateAb(e,t),this.dataPolyGate.length>0&&1==this.polyGateYAb.length&&this.makePolyGateScatter())},polyGateYAb:function(t,e){0!=this.dataCiteLength&&(this.polyGateYAb=this.checkPolyGateAb(e,t),this.dataPolyGate.length>0&&1==this.polyGateXAb.length&&this.makePolyGateScatter())},absSearch:function(){var t=this;0!=this.dataCiteLength&&(null===this.absSearch||""==this.absSearch?this.absDisplayBool=Array(this.abs.length).fill(!0):this.absDisplayBool=d.a.map(this.abs,(function(e){return-1!==e.toLowerCase().indexOf(t.absSearch.toLowerCase())})))},expColorScaleSel:function(){var t=this;if(Object.keys(this.fillScales).forEach((function(e){t.fillScales[e]=u["scaleSequential"](V[t.expColorScaleSel]).domain(t.fillScales[e].domain())})),this.makeClusterHeatmap(),this.drawColorScaleLegend(),this.selAbs.length>0){var e=this.makeExpressionScatterData();this.makeExpressionScatter(e)}}},methods:{onFileChange:function(t){var e=this;if(this.resetGraphs(["#mainScatter","#polyGateScatter","#expressionScatter"]),t){this.showSpinner=!0;var a=new FileReader;a.onload=function(t){e.dataFile=t.target.result},a.readAsText(t)}},resetGraphs:function(t){Object.assign(this.$data,this.$options.data.apply(this)),"string"==typeof t?u["select"](t).selectAll("*").remove():Array.isArray(t)&&t.forEach((function(t){u["select"](t).selectAll("*").remove()})),this.showAlertMsg=!1},makeMainScatter:function(){var t=this,e=[{key:"mainPlot",title:"",type:"cluster",orgData:this.dataCite,values:this.currentDataClean}],a=p().width(400).height(400).radius(1).xVar("xaxis_"+this.dimMethodSel).yVar("yaxis_"+this.dimMethodSel).xTitle(this.dimMethodSel+" 1").yTitle(this.dimMethodSel+" 2").constrainAxes(Array.from({length:this.dataCiteLength},(function(t,e){return e}))).fillVar("cluster_"+this.clusterCategoriesSel).fillScale(this.clusterCategoriesScales[this.clusterCategoriesSel]).axesTitleColor(this.svgTextColor),s=function(){var s=u["select"]("#mainScatter").selectAll(".chart").data(e);s.enter().append("div").attr("class","chart").merge(s).call(a),s.exit().remove();var l=u["select"]("#clusterBrushG");if(l.empty()){var r=u["polybrush"]().x(a.xScale()).y(a.yScale()).on("start",(function(){t.dataPolyGate=[]})).on("end",(function(){t.updatePolyGateIndices(r,a.xScale(),a.yScale())}));u["select"]("#mainScatter").select(".scatterG").append("g").attr("id","clusterBrushG").call(r),t.polyGateBrush=r,t.mainScatterXScale=a.xScale(),t.mainScatterYScale=a.yScale()}};s()},makeClusterHeatmap:function(){var t=this,e=[];for(var a in this.clusterCategoriesUniqVals[this.clusterCategoriesSel]){var s,l=Object(n["a"])(this.abs);try{var r=function(){var l=s.value,r=t.clusterCategoriesUniqVals[t.clusterCategoriesSel][a],n={cluster:a,ab:l,value:u["mean"](r,(function(e){return t.dataCite[l][e]}))};e.push(n)};for(l.s();!(s=l.n()).done;)r()}catch(h){l.e(h)}finally{l.f()}}var i=[{key:"mainClusterHeatmap",clusterCategory:this.clusterCategoriesSel,values:e}],o=f().width(14*this.abs.length+90).height(14*Object.keys(this.clusterCategoriesUniqVals[this.clusterCategoriesSel]).length+125).tileSize(14).xVar("ab").yVar("cluster").fillVar("value").fillScales(this.fillScales).axesLabelColor(this.svgTextColor),c=function(){var t=u["select"]("#clusterHeatmap").selectAll(".chart-heatmap").data(i);t.enter().append("div").attr("class","chart-heatmap").merge(t).call(o),t.exit().remove()};c()},updatePolyGateIndices:function(t,e,a){var s=this,l=[],r="xaxis_"+this.dimMethodSel,n="yaxis_"+this.dimMethodSel;this.currentDataClean.forEach((function(i){t.isWithinExtent(e(s.dataCite[r][i]),a(s.dataCite[n][i]))&&l.push(i)})),this.dataPolyGate=l},makeExpressionScatterData:function(){var t=this,e=d.a.map(this.selAbs,(function(e){var a={type:"expression",key:e,title:t.abs[e],orgData:t.dataCite,fillScale:t.fillScales[t.abs[e]]},s=t.currentDataClean;if(t.enableThresh){var l=d.a.filter(t.currentDataClean,(function(a){var s=t.dataCite[t.abs[e]][a];return s>=t.expThresh}));s=l}return a.values=s,a}));return e},makeExpressionScatter:function(t){var e=p().width(275).height(275).radius(.5).constrainAxes(Array.from({length:this.dataCiteLength},(function(t,e){return e}))).xVar("xaxis_"+this.dimMethodSel).yVar("yaxis_"+this.dimMethodSel).xTitle(this.dimMethodSel+" 1").yTitle(this.dimMethodSel+" 2").axesTitleColor(this.svgTextColor).titleColor(this.svgTextColor),a=function(t){var a=u["select"]("#expressionScatter").selectAll(".chartexpressionScatter").data(t,(function(t){return t.key}));a.enter().append("div").attr("class","chartexpressionScatter").merge(a).call(e),a.exit().remove()};a(t)},checkPolyGateAb:function(t,e){return e.length>1?e[0]==t[0]?[e[1]]:[e[0]]:e},makePolyGateScatter:function(){var t=[{key:"polygate-"+this.polyGateXAb[0]+this.polyGateYAb[0],title:"",type:"cluster",orgData:this.dataCite,values:this.dataPolyGate}],e=p().width(400).height(400).radius(1.5).xVar(this.polyGateXAb[0]).yVar(this.polyGateYAb[0]).constrainAxes(Array.from({length:this.dataCiteLength},(function(t,e){return e}))).xTitle(this.polyGateXAb[0]).yTitle(this.polyGateYAb[0]).fillVar("cluster_"+this.clusterCategoriesSel).fillScale(this.clusterCategoriesScales[this.clusterCategoriesSel]).axesTitleColor(this.svgTextColor),a=function(t){var a=u["select"]("#polyGateScatter").selectAll(".polyGateScatter").data(t,(function(t){return t.key}));a.enter().append("div").attr("class","polyGateScatter").merge(a).call(e),a.exit().remove()};a(t)},updateCells:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=a.updatePolyGate,l=void 0!==s&&s,r=a.updateCluster,n=void 0!==r&&r;if(n&&(this.clusterCategoriesCurrentVals=Object.keys(this.clusterCategoriesUniqVals[this.clusterCategoriesSel]),this.selClusterTrack=this.clusterCategoriesCurrentVals.map((function(t,e){return e}))),this.cellsUsed==this.dataCiteLength?this.currentDataClean=Object(i["a"])(Array(this.dataCiteLength).keys()).map((function(t){return t})):this.currentDataClean=this.genRandomIndices(this.cellsUsed,this.dataCiteLength),0!=this.selClusterTrack.length){var o=this.selClusterTrack.reduce((function(t,a){var s=e.clusterCategoriesCurrentVals[a];return t=t.concat(e.clusterCategoriesUniqVals[e.clusterCategoriesSel][s]),t}),[]);this.currentDataClean=this.currentDataClean.filter((function(t){return o.includes(t)}))}else this.currentDataClean=[];l&&this.dataPolyGate.length>0&&(this.dataPolyGate=[],u["select"](".polyGateScatter").remove(),u["select"]("#clusterBrushG").remove(),u["select"]("#mainScatter").selectAll("circle").classed("selected",!1)),this.makeMainScatter();var c=this.makeExpressionScatterData();this.makeExpressionScatter(c),1==this.polyGateXAb.length&&1==this.polyGateYAb.length&&this.updatePolyGateIndices(this.polyGateBrush,this.mainScatterXScale,this.mainScatterYScale)},updateDimsAndCells:function(t){this.updateCells(t,{updatePolyGate:!0})},updateClusterAndCells:function(t){this.makeClusterHeatmap(),this.updateCells(t,{updateCluster:!0})},genRandomIndices:function(t,e){var a=[];while(a.length<t){var s=Math.floor(Math.random()*e);-1===a.indexOf(s)&&a.push(s)}return a},clearAllExpScatter:function(){if(this.selAbs.length>0){this.selAbs=[];var t=this.makeExpressionScatterData();this.makeExpressionScatter(t)}},drawColorScaleLegend:function(){var t="canvas-interpolate-legend",e=document.getElementById(t),a=null;a=null===e?u["select"]("#expColorLegend").append("canvas").style("width","250px").style("height","30px").style("margin-top","3px").style("image-rendering","pixelated").attr("id",t):u["select"](e);var s=a.node().getContext("2d"),l=2*window.devicePixelRatio;a.node().width=300*l,a.node().height=30*l,s.scale(l,l),s.clearRect(0,0,s.canvas.width,s.canvas.height);for(var r=512,n=u["scaleSequential"](V[this.expColorScaleSel]),i=n.ticks(r),o=0;o<i.length;++o)s.fillStyle=n(i[o]),s.fillRect(250*o/i.length,0,250/i.length+1,30)},clearClusterSel:function(){this.selClusterTrack=[],this.updateCells()},addAllClusterSel:function(){this.selClusterTrack=Array(this.clusterCategoriesCurrentVals.length).fill().map((function(t,e){return e})),this.updateCells()},toggleDarkTheme:function(){var t=this;if(this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.svgTextColor=this.$vuetify.theme.dark?"#f5f5f5":"#272727",0!=this.abs.length){var e=["axis-title","chart-title","hm-axis-tick"];e.forEach((function(e){document.getElementsByClassName(e).forEach((function(e){return e.style.fill=t.svgTextColor}))})),document.getElementById("clusterBrushG").getElementsByTagName("path")[0].setAttribute("fill",this.svgTextColor)}}}},D=T,P=(a("034f"),a("0798")),M=a("7496"),E=a("40dc"),j=a("5bc1"),L=a("8336"),O=a("b0af"),B=a("99d9"),U=a("62ad"),q=a("a523"),R=a("23a7"),I=a("553a"),N=a("8860"),Y=a("da13"),X=a("5d23"),F=a("1baa"),H=a("34c3"),$=a("f6c4"),z=a("f774"),W=a("490a"),J=a("0fd9"),Z=a("b974"),K=a("ba0d"),Q=a("2fa4"),tt=a("b73d"),et=a("8654"),at=a("2a7f"),st=a("3a2f"),lt=Object(y["a"])(D,l,r,!1,null,null,null),rt=lt.exports;x()(lt,{VAlert:P["a"],VApp:M["a"],VAppBar:E["a"],VAppBarNavIcon:j["a"],VBtn:L["a"],VCard:O["a"],VCardSubtitle:B["a"],VCardText:B["b"],VCol:U["a"],VContainer:q["a"],VFileInput:R["a"],VFooter:I["a"],VIcon:k["a"],VList:N["a"],VListItem:Y["a"],VListItemContent:X["a"],VListItemGroup:F["a"],VListItemIcon:H["a"],VListItemTitle:X["b"],VMain:$["a"],VNavigationDrawer:z["a"],VProgressCircular:W["a"],VRow:J["a"],VSelect:Z["a"],VSlider:K["a"],VSpacer:Q["a"],VSwitch:tt["a"],VTextField:et["a"],VToolbarTitle:at["a"],VTooltip:st["a"]});var nt=a("f309");s["a"].use(nt["a"]);var it=new nt["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:it,render:function(t){return t(rt)}}).$mount("#app")},"8a23":function(t,e,a){}});
//# sourceMappingURL=app.681c94f3.js.map