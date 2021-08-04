(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),o=a.n(c),s=(a(104),a(25)),l=a.n(s),i=a(38),u=a(16),m=(a(106),a(242)),f=a(243),d=a(244),v=a(236),p=a(240),h=a(92),b=a(241);a(107);var E=function(e){var t=e.title,a=e.cases,n=e.total,c=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return console.log(t,c),r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(p.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),r.a.createElement(b.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},g=a(89),y=a(15),j=a.n(y),O={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return j()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return j()(e).format("0a")}}}]}},x=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var w=function(e){var t=e.casesType,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var a=x(e,t);s(a),console.log(a)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",null,(null===o||void 0===o?void 0:o.length)>0&&r.a.createElement(g.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:o}]},options:O}))};a(207);var _=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.country),r.a.createElement("td",null,r.a.createElement("strong",null,j()(e.cases).format("0,0"))))})))},k=a(91),C=a(245),N=a(246),S={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:800},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:1200},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},B=function(e){var t=Object(k.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},I=function(e){return e?"+".concat(j()(e).format("0.0a")):"+0"},R=a(247),D=a(248);a(208);var T=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(R.a,{center:n,zoom:c},r.a.createElement(D.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(C.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:S[t].hex,fillColor:S[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*S[t].multiplier},r.a.createElement(N.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",j()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",j()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",j()(e.deaths).format("0,0")))))}))}(t,a)))},M=(a(209),function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)({}),s=Object(u.a)(o,2),h=s[0],b=s[1],g=Object(n.useState)([]),y=Object(u.a)(g,2),O=y[0],x=y[1],k=Object(n.useState)([]),C=Object(u.a)(k,2),N=C[0],S=C[1],R=Object(n.useState)([]),D=Object(u.a)(R,2),M=D[0],z=D[1],W=Object(n.useState)("cases"),A=Object(u.a)(W,2),L=A[0],J=A[1],Y=Object(n.useState)({lat:34.80746,lng:-40.4796}),q=Object(u.a)(Y,2),F=q[0],V=q[1],$=Object(n.useState)(3),G=Object(u.a)($,2),H=G[0],K=G[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){b(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=B(e);x(t),S(e),z(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(L);var P=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){c(a),b(e),V([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 Tracker"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",value:a,onChange:P},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),O.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(E,{onClick:function(e){return J("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===L,cases:I(h.todayCases),total:j()(h.cases).format("0.0a")}),r.a.createElement(E,{onClick:function(e){return J("recovered")},title:"Recovered",active:"recovered"===L,cases:I(h.todayRecovered),total:j()(h.recovered).format("0.0a")}),r.a.createElement(E,{onClick:function(e){return J("deaths")},title:"Deaths",isRed:!0,active:"deaths"===L,cases:I(h.todayDeaths),total:j()(h.deaths).format("0.0a")})),r.a.createElement(T,{countries:N,casesType:L,center:F,zoom:H})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(_,{countries:M}),r.a.createElement("h3",null,"Worldwide new ",L),r.a.createElement(w,{casesType:L})))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},99:function(e,t,a){e.exports=a(210)}},[[99,1,2]]]);
//# sourceMappingURL=main.1d16ebc6.chunk.js.map