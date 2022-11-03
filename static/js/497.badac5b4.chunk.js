"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[497],{497:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r,a,o,i=n(861),c=n(885),s=n(757),u=n.n(s),l=n(731),d=n(689),p=n(791),f=n(840),v=n(299),h=n.n(v),m=n(184),g=function(){return(0,m.jsx)(h(),{color:"#36d7b7",margin:0})},x=n(168),b=n(444),y=b.ZP.div(r||(r=(0,x.Z)(["\n  gap: 20px;\n  padding: 20px;\n  display: flex;\n"]))),j=b.ZP.button(a||(a=(0,x.Z)(["\n  margin-left: 10px;\n  color: #ffffff;\n  background-color: #07c;\n  border-color: transparent;\n  border-radius: 3px;\n  padding: 2px 10px;\n  cursor: pointer;\n"]))),w=b.ZP.h3(o||(o=(0,x.Z)(["\n  padding-left: 20px;\n"]))),_=function(){var e,t=(0,p.useState)(null),n=(0,c.Z)(t,2),r=n[0],a=n[1],o=(0,p.useState)(!1),s=(0,c.Z)(o,2),v=s[0],h=s[1],x=(0,p.useState)(null),b=(0,c.Z)(x,2),_=b[0],O=b[1],k=(0,d.UO)().movieId,Z=(0,d.TH)(),P=(0,d.s0)();console.log(v),(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,f.y.fetchMovieById(t);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),O(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();e(k)}),[k]);return(0,m.jsxs)(m.Fragment,{children:[r&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(j,{type:"button",onClick:function(){var e,t;P(null!==(e=null===Z||void 0===Z||null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/")},children:"Go back"}),(0,m.jsxs)(y,{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:r.title,width:"250"})}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("h2",{children:[r.title," (",new Date(r.release_date).getFullYear(),")"]}),(0,m.jsxs)("p",{children:["User score: ",Math.round(10*r.vote_average)," %"]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:r.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:null===(e=r.genres)||void 0===e?void 0:e.map((function(e){return e.name})).join(", ")})]})]}),(0,m.jsx)(w,{children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",state:Z.state,children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",state:Z.state,children:"Reviews"})})]})]}),_&&(0,m.jsx)("p",{children:"We don't have any information on this movie."}),(0,m.jsx)(p.Suspense,{fallback:(0,m.jsx)(g,{}),children:(0,m.jsx)(d.j3,{})})]})}},840:function(e,t,n){n.d(t,{y:function(){return s}});var r=n(861),a=n(757),o=n.n(a),i=n(44),c="409be53f0690f3671d041d97004c0d68",s={fetchMovies:function(){return(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c));case 2:return t=e.sent,e.next=5,t.data.results;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchMovieById:function(e){return(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieBySearch:function(e){return(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n=t.sent,t.next=5,n.data.results;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieCast:function(e){return(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},fetchMovieReviews:function(e){return(0,r.Z)(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.next=5,n.data;case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()}}},299:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return o(t,e),t},c=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var s=i(n(791)),u=n(945),l=(0,n(74).createAnimation)("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");t.default=function(e){var t=e.loading,n=void 0===t||t,a=e.color,o=void 0===a?"#000000":a,i=e.speedMultiplier,d=void 0===i?1:i,p=e.cssOverride,f=void 0===p?{}:p,v=e.size,h=void 0===v?35:v,m=c(e,["loading","color","speedMultiplier","cssOverride","size"]),g=r({background:"transparent !important",width:(0,u.cssValue)(h),height:(0,u.cssValue)(h),borderRadius:"100%",border:"2px solid",borderTopColor:o,borderBottomColor:"transparent",borderLeftColor:o,borderRightColor:o,display:"inline-block",animation:"".concat(l," ").concat(.75/d,"s 0s infinite linear"),animationFillMode:"both"},f);return n?s.createElement("span",r({style:g},m)):null}},74:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return o&&o.insertRule(i,0),r}},945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function r(e){if("number"===typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var a=(e.match(/[^0-9]*$/)||"").toString();return n[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=r,t.cssValue=function(e){var t=r(e);return"".concat(t.value).concat(t.unit)}}}]);
//# sourceMappingURL=497.badac5b4.chunk.js.map