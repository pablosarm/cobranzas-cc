(function(){"use strict";var t={9445:function(t,e,r){var n=r(144),o=r(1096),a=r(3551),s=function(){var t=this,e=t._self._c;return e(o.Z,[e(a.Z,[e("router-view")],1)],1)},i=[],c={name:"App",data:()=>({})},l=c,u=r(1001),d=(0,u.Z)(l,s,i,!1,null,null,null),p=d.exports,f=r(8345),h=function(){var t=this,e=t._self._c;return e("dashboard")},v=[],m=r(8846),b=r(5223),Z=r(4437),C=r(6035),g=r(5057),_=r(5294),y=function(){var t=this,e=t._self._c;return e("div",[e("MainTemplate",{attrs:{title:"Inicio"}},[e(C.Z,[e(m.Z,{staticClass:"pa-4"},[e(_.Z,{staticClass:"align-items-center"},[e(Z.Z,{attrs:{cols:"2"}},[e(g.Z,{staticClass:"red-bell",attrs:{color:"red",size:"36"}},[t._v("mdi-bell-ring")])],1),e(Z.Z,{attrs:{cols:"10"}},[e("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v("Contratos vencidos: ")]),e("span",{staticClass:"subtitle-1"},[t._v(t._s(t.expiredContracts))])])],1),e(_.Z,{staticClass:"align-items-center"},[e(Z.Z,{attrs:{cols:"2"}},[e(g.Z,{attrs:{color:"orange",size:"36"}},[t._v("mdi-bell")])],1),e(Z.Z,{attrs:{cols:"10"}},[e("span",{staticClass:"subtitle-2 font-weight-bold"},[t._v("Contratos próximos a vencer: ")]),e("span",{staticClass:"subtitle-1"},[t._v(t._s(t.expiringContracts))])])],1)],1),e(_.Z,{staticClass:"mt-2"},[e(Z.Z,{attrs:{cols:"12",md:"6",lg:"3"}},[e(m.Z,{attrs:{color:"primary",dark:""}},[e(b.EB,{staticClass:"white--text"},[t._v("Clientes")]),e(b.ZB,{staticClass:"text-h5 white--text"},[t._v(t._s(t.totalClients))])],1)],1),e(Z.Z,{attrs:{cols:"12",md:"6",lg:"3"}},[e(m.Z,{attrs:{color:"warning",dark:""}},[e(b.EB,[t._v("Cobros pendientes")]),e(b.ZB,{staticClass:"text-h5"},[t._v(t._s(t.pendingCollections))])],1)],1),e(Z.Z,{attrs:{cols:"12",md:"6",lg:"3"}},[e(m.Z,{attrs:{color:"success",dark:""}},[e(b.EB,[t._v("Cobros realizados")]),e(b.ZB,{staticClass:"text-h5"},[t._v(t._s(t.completedCollections))])],1)],1),e(Z.Z,{attrs:{cols:"12",md:"6",lg:"3"}},[e(m.Z,{attrs:{color:"info",dark:""}},[e(b.EB,[t._v("Ingresos")]),e(b.ZB,{staticClass:"text-h5"},[t._v(t._s(t.totalIncome))])],1)],1)],1),e(_.Z,[e(Z.Z,{staticClass:"align-self-stretch",attrs:{cols:"12",md:"6"}},[e("bar-chart",{attrs:{title:"Cobros por departamento","chart-data":t.collectionsByDepartment,"chart-options":t.chartOptions}})],1),e(Z.Z,{staticClass:"align-self-stretch",attrs:{cols:"12",md:"6"}},[e("doughnut-chart",{attrs:{title:"Cobros pendientes vs completados","chart-data":t.collectionsPendingVsCompleted,"chart-options":t.chartOptions}})],1)],1)],1)],1)],1)},w=[],k=r(5378),x=r(8983),O=r(1828),P=r(3584),j=r(248),B=r(1908),E=r(8153),S=r(4831),T=r(1350),A=r(5234),D=r(2370),F=function(){var t=this,e=t._self._c;return e(o.Z,[e(k.Z,{attrs:{app:"",dense:"",color:"blue darken-3",dark:""}},[e(x.Z,{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),e(D.qW,[t._v(t._s(t.title))]),e(A.Z),e(S.Z,{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:r,attrs:n}){return[e(O.Z,t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),r),[e(g.Z,[t._v("mdi-account-circle")])],1)]}}])},[e(j.Z,[e(B.Z,[e(E.V9,[t._v("Perfil")])],1),e(B.Z,[e(E.V9,[t._v("Configuración")])],1),e(B.Z,[e(E.V9,[t._v("Cerrar sesión")])],1)],1)],1)],1),e(T.Z,{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(j.Z,t._l(t.items,(function(r,n){return e(B.Z,{key:n,attrs:{router:"",to:r.route}},[e(E.V9,[t._v(t._s(r.title))])],1)})),1)],1),e(a.Z,[t._t("default")],2),e(P.Z,{attrs:{app:"",color:"blue darken-3",dark:""}},[e("span",{staticClass:"white--text"},[t._v("© CardioCuore r 2023")])])],1)},V=[],q={name:"MainTemplate",props:{title:{type:String,required:!0}},data(){return{drawer:!1,items:[{title:"Inicio",route:"/"},{title:"Clientes",route:"/clientes"},{title:"Contratos",route:"/contratos"}]}}},z=q,M=(0,u.Z)(z,F,V,!1,null,null,null),I=M.exports,$=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("canvas",{ref:"chartCanvas"})])},N=[],L=r(3564),H={props:{title:{type:String,required:!0},chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>({})}},mounted(){this.renderChart()},methods:{renderChart(){const t=this.$refs.chartCanvas.getContext("2d");new L.ZP(t,{type:"bar",data:this.chartData,options:this.chartOptions})}}},R=H,W=(0,u.Z)(R,$,N,!1,null,null,null),G=W.exports,J=function(){var t=this,e=t._self._c;return e("div",[e("h2",[t._v(t._s(t.title))]),e("canvas",{ref:"chart"})])},K=[],Q={props:{title:{type:String,required:!0},chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>({})}},mounted(){this.renderChart()},methods:{renderChart(){const t=this.$refs.chart.getContext("2d");new L.ZP(t,{type:"doughnut",data:this.chartData,options:this.chartOptions})}}},U=Q,X=(0,u.Z)(U,J,K,!1,null,"46d8f2ec",null),Y=X.exports,tt={name:"Dashboard",components:{MainTemplate:I,BarChart:G,DoughnutChart:Y},data(){return{totalClients:523,pendingCollections:230,completedCollections:293,expiredContracts:2,expiringContracts:4,totalIncome:"$420,000",chartOptions:{responsive:!0,aspectRatio:1},collectionsByDepartment:{labels:["Ventas","Soporte","Finanzas","Marketing"],datasets:[{label:"Cobros",backgroundColor:["#66BB6A","#FFA726","#FF7043","#42A5F5"],data:[2,5,10,3]}]},collectionsPendingVsCompleted:{labels:["Pendientes","Completados"],datasets:[{backgroundColor:["#EF5350","#66BB6A"],data:[230,293]}]}}}},et=tt,rt=(0,u.Z)(et,y,w,!1,null,null,null),nt=rt.exports,ot={name:"HomeView",components:{Dashboard:nt}},at=ot,st=(0,u.Z)(at,h,v,!1,null,null,null),it=st.exports;n.ZP.use(f.ZP);const ct=[{path:"/",name:"home",component:it},{path:"/about",name:"about",component:()=>r.e(443).then(r.bind(r,7750))}],lt=new f.ZP({mode:"history",base:"/",routes:ct});var ut=lt,dt=r(629);n.ZP.use(dt.ZP);var pt=new dt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),ft=r(2250);n.ZP.use(ft.Z);var ht=new ft.Z({});n.ZP.config.productionTip=!1,new n.ZP({router:ut,store:pt,vuetify:ht,render:t=>t(p)}).$mount("#app")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],a=t[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.b429317b.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="cobranzas-cc:";r.l=function(n,o,a,s){if(t[n])t[n].push(o);else{var i,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+a),i.src=n),t[n]=[o];var p=function(e,r){i.onerror=i.onload=null,clearTimeout(f);var o=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(e),i=new Error,c=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,s=n[0],i=n[1],c=n[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(e&&e(n);l<s.length;l++)a=s[l],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},n=self["webpackChunkcobranzas_cc"]=self["webpackChunkcobranzas_cc"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(9445)}));n=r.O(n)})();
//# sourceMappingURL=app.1207c0d9.js.map