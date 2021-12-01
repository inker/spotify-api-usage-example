"use strict";(self.webpackChunkspotify_api_usage_example=self.webpackChunkspotify_api_usage_example||[]).push([[143],{5537:(t,e,s)=>{s(6487);var a=s(538),n=s(4765),i=s.n(n),r=s(266),o=s(629),c=s(1463),l=s.n(c);const u=t=>{return"set"+`${(e=t)[0].toUpperCase()}${e.slice(1)}`;var e},d=t=>(e,s)=>{e[t]=s},m=t=>[u(t),d(t)],h=t=>Object.fromEntries(t.map(m)),p=Object.freeze({colorTheme:"light",systemTheme:null}),v={namespaced:!0,state:{...p},getters:{isDarkMode(t){const{colorTheme:e}=t;return"dark"===e||"auto"===e&&"dark"===t.systemTheme}},mutations:h(Object.keys(p))},f=Object.freeze({x:void 0}),_={namespaced:!0,state:{...f},mutations:{...h(Object.keys(f)),resetState(t){Object.assign(t,f)}}};var g=s(8345),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)};y._withStripped=!0;var b=s(1900),w=(0,b.Z)({},y,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"not-found-root"},[s("div",{staticClass:"not-found-text"},[t._v("\n    Page not found\n  ")])])}],!1,null,"28345dd6",null);w.options.__file="src/pages/NotFound/index.vue";const k=w.exports;var T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"login-root"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.signIn.apply(null,arguments)}}},[s("BaseButton",{staticClass:"login-button",attrs:{type:"submit"}},[t._v("\n      Sign in via Spotify\n    ")])],1)])};T._withStripped=!0;var S=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({attrs:{type:t.type,disabled:t.disabled||t.isLoading},on:{click:t.onClick}},"button",t.$attrs,!1),t.$listeners),[t._t("default",null,{isLoading:t.isLoading})],2)};S._withStripped=!0;const C={inheritAttrs:!1,props:{type:{type:String,default:"button"},disabled:Boolean,action:Function},data:()=>({isLoading:!1}),methods:{async onClick(t){var e;this.$emit("click",t),this.isLoading=!0,await(null===(e=this.action)||void 0===e?void 0:e.call(this,t)),this.isLoading=!1}}};var I=(0,b.Z)(C,S,[],!1,null,null,null);I.options.__file="src/ui/BaseButton/index.vue";const E=I.exports,x={components:{BaseButton:E},methods:{...(0,o.nv)("auth",{signIn:"signIn"})}};var O=(0,b.Z)(x,T,[],!1,null,"2ddd9490",null);O.options.__file="src/pages/Login/index.vue";const L=O.exports;var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"menu-container"},[s("div",{staticClass:"menu-top"},[s("ThemeSelector"),t._v(" "),s("ArtistsList",{attrs:{list:t.recentArtists,selectedId:t.selectedArtistId}})],1),t._v(" "),s("MenuFooter")],1)]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content-container"},[t.selectedArtistId?s("router-link",{staticClass:"unselect-link",attrs:{to:{query:{artist:void 0}}}},[t._v("\n        Display all artists\n      ")]):t._e(),t._v(" "),t.displayedTracks?s("fragment",[t.displayedTracks.length>0?s("ul",{staticClass:"track-grid"},t._l(t.displayedTracks,(function(t){return s("li",{key:""+t.track.id+t.played_at},[s("TrackCard",{staticClass:"track-card",class:{"new-item":t.isNew},attrs:{item:t}})],1)})),0):s("div",[t._v("\n          No tracks found\n        ")])]):s("div",{staticClass:"loading-item"},[t._v("\n        Loading...\n      ")]),t._v(" "),s("div",{staticClass:"content-footer"},[s("BaseButton",{staticClass:"more-button",attrs:{disabled:!t.hasNext,action:t.loadRecentTracks},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(e.isLoading?"Wait...":"Load more")+"\n          ")]}}])})],1)],1)]},proxy:!0}])})};M._withStripped=!0;var R=s(5578),$=s.n(R),A=s(6033),D=s(3092);class P extends Error{constructor(t){super(t),this.name="RequestError"}}class U extends Error{constructor(t){super(t),this.name="UnauthorizedError"}}var Z=s(6604),z=s.n(Z),N=s(2353),B=s.n(N),F=s(4176),j=s.n(F),H=s(4293),Y=s.n(H);const W=t=>{if(Y()(t))return"";const e=z()(j()(t,B()),String);return new URLSearchParams(e).toString()};function q(t,e,s){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,s)}const{SPOTIFY_API_HOST:J}={NODE_ENV:"production",VERSION:"v1.0.0",SPOTIFY_API_HOST:"https://api.spotify.com",SPOTIFY_AUTH_HOST:"https://accounts.spotify.com/authorize",SPOTIFY_CLIENT_ID:"e900798eba474a8c8ac4c4373b175d7c",SPOTIFY_REDIRECT_URI:"https://inker.github.io/spotify-api-usage-example"};var K=new WeakMap;const G=new class{constructor(){q(this,K,{writable:!0,value:void 0})}setAccessToken(t){(0,D.Z)(this,K,t)}async getJson(t,e){const s=e?`${t}?${W(e)}`:t,a=await fetch(s,{headers:{Authorization:`Bearer ${(0,A.Z)(this,K)}`}}),n=await a.json();if(a.ok)return n;if(401===a.status)throw new U(n.error.message);throw new P(n.error.message)}getCurrentUser(){return this.getJson(`${J}/v1/me`)}getRecentlyPlayedTracks(t){return this.getJson(`${J}/v1/me/player/recently-played`,t)}};function V(t,e,s){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,s)}var X=new WeakMap,Q=new WeakMap;const tt=new class{constructor(){V(this,X,{writable:!0,value:void 0}),V(this,Q,{writable:!0,value:void 0})}setRouter(t){(0,D.Z)(this,X,t)}setStore(t){(0,D.Z)(this,Q,t)}async handle(t){console.error(t),t instanceof U&&((0,A.Z)(this,Q).dispatch("auth/signOut"),await(0,A.Z)(this,X).push({name:"login"})),a.default.notify({group:"global",title:"Error",text:t.message})}};var et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-root"},[s("Resize",{model:{value:t.isResizing,callback:function(e){t.isResizing=e},expression:"isResizing"}}),t._v(" "),s("div",{staticClass:"sidebar",style:{width:t.sideBarLeft}},[t._t("sidebar")],2),t._v(" "),s("main",{staticClass:"content",style:{"margin-left":t.sideBarLeft}},[t._t("content")],2)],1)};et._withStripped=!0;var st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fragment",[s("GlobalEvents",{on:{mousemove:function(e){return e.stopPropagation(),t.onMouseMove.apply(null,arguments)},mouseup:function(e){return e.stopPropagation(),t.onMouseUp.apply(null,arguments)}}}),t._v(" "),s("GlobalClassList",{attrs:{value:t.globalClass}}),t._v(" "),s("div",{staticClass:"resize-bar",style:{left:t.x},on:{mousedown:t.onMouseDown}})],1)};st._withStripped=!0;var at=s(4691),nt=s.n(at),it=s(8849),rt=s(7361),ot=s.n(rt);const ct={props:{value:String,target:{type:[String,Array],default:()=>["document","body"]}},computed:{targetClassList(){return ot()(window,this.target).classList}},watch:{value(t,e){e&&this.targetClassList.remove(e),t&&this.targetClassList.add(t)},target(t,e){window[e].classList.remove(this.value),window[t].classList.add(this.value)}},mounted(){this.value&&this.targetClassList.add(this.value)},beforeDestroy(){this.value&&this.targetClassList.remove(this.value)},render:t=>t()},lt={name:"Resize",components:{GlobalEvents:it.Z,GlobalClassList:ct},props:{value:Boolean},computed:{...(0,o.rn)("sidebar",["x"]),globalClass(){return this.value?"global-resizing":void 0}},methods:{...(0,o.OI)("sidebar",["setX","resetState"]),onMouseDown(){this.$emit("input",!0)},onMouseMove(t){if(!this.value)return;const e=.4*(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),s=Math.round(nt()(t.clientX,200,e));this.setX(`${s}px`)},onMouseUp(){this.$emit("input",!1)}}};var ut=(0,b.Z)(lt,st,[],!1,null,"92dbdcb4",null);ut.options.__file="src/ui/Resize.vue";const dt={components:{Resize:ut.exports},data:()=>({isResizing:!1}),computed:{...(0,o.rn)("sidebar",{sideBarLeft:"x"})}};var mt=(0,b.Z)(dt,et,[],!1,null,"50bf451c",null);mt.options.__file="src/ui/Layout.vue";const ht=mt.exports;var pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-selector-root"},[s("Radio",{attrs:{name:t.name,list:t.list,selected:t.colorTheme},on:{input:t.setColorTheme}})],1)};pt._withStripped=!0;const vt=()=>Math.random().toString(36).slice(2);var ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radio-root"},t._l(t.list,(function(e){return s("label",{key:e.value,staticClass:"theme-item",class:{selected:e.value===t.selected}},[s("input",{attrs:{type:"radio",name:t.name},domProps:{value:e.value,checked:e.value===t.selected},on:{input:function(s){return t.$emit("input",e.value)}}}),t._v("\n    "+t._s(e.label)+"\n  ")])})),0)};ft._withStripped=!0;const _t={props:{name:String,list:Array,selected:String}};var gt=(0,b.Z)(_t,ft,[],!1,null,"e538135c",null);gt.options.__file="src/ui/ThemeSelector/Radio.vue";const yt={components:{Radio:gt.exports},data:()=>({name:vt(),list:[{value:"light",label:"Light theme"},{value:"dark",label:"Dark theme"},{value:"auto",label:"System theme"}]}),computed:{...(0,o.rn)("appearance",{colorTheme:"colorTheme"})},methods:{...(0,o.OI)("appearance",{setColorTheme:"setColorTheme"})}};var bt=(0,b.Z)(yt,pt,[],!1,null,"1fa4a7c9",null);bt.options.__file="src/ui/ThemeSelector/index.vue";const wt=bt.exports;var kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"artists-title"},[t._v("\n    Recent artists:\n  ")]),t._v(" "),t.list?s("fragment",[t.list.length>0?s("ul",{staticClass:"artist-list"},t._l(t.list,(function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"artist-link",attrs:{to:{query:{artist:e.id}}}},[s("MenuItem",{attrs:{text:e.name,isSelected:e.id===t.selectedId}})],1)],1)})),0):s("MenuItem",{attrs:{text:"No artists found"}})],1):s("MenuItem",{staticClass:"loading-item",attrs:{text:"Loading..."}})],1)};kt._withStripped=!0;var Tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artist-item-root",class:{selected:t.isSelected}},[s("div",{staticClass:"name"},[t._v("\n    "+t._s(t.text)+"\n  ")])])};Tt._withStripped=!0;const St={props:{text:String,isSelected:Boolean}};var Ct=(0,b.Z)(St,Tt,[],!1,null,"7f5f6d1e",null);Ct.options.__file="src/pages/Dashboard/MenuItem.vue";const It=Ct.exports,Et={components:{MenuItem:It},props:{list:Array,selectedId:String}};var xt=(0,b.Z)(Et,kt,[],!1,null,"e658eb8a",null);xt.options.__file="src/pages/Dashboard/ArtistsList.vue";const Ot=xt.exports;var Lt=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{staticClass:"logout-link",attrs:{to:{name:"logout"}}},[e("MenuItem",{attrs:{text:"Sign out"}})],1)],1)};Lt._withStripped=!0;const Mt={components:{MenuItem:It},methods:{...(0,o.nv)("auth",{signOut:"signOut"})}};var Rt=(0,b.Z)(Mt,Lt,[],!1,null,"09cac679",null);Rt.options.__file="src/pages/Dashboard/MenuFooter.vue";const $t=Rt.exports;var At=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"track-card-root"},[s("LazyImage",{staticClass:"track-image",attrs:{src:t.imageUrl}}),t._v(" "),s("div",{staticClass:"content"},[s("div",[s("div",{staticClass:"title"},[t._v("\n        "+t._s(t.item.track.name)+"\n      ")]),t._v(" "),s("div",[s("ul",t._l(t.item.track.artists,(function(e){return s("li",{key:e.id,staticClass:"artist"},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])]),t._v(" "),s("div",[s("span",{staticClass:"played-at"},[t._v("\n        Played at: "+t._s(t.formattedPlayedAtTimestamp)+"\n      ")])])])],1)};At._withStripped=!0;var Dt=s(1384),Pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.imageUrl?s("img",{attrs:{src:t.imageUrl}}):s("div",{staticClass:"dummy-div"})};Pt._withStripped=!0;const Ut={props:{src:String},data:()=>({imageUrl:void 0}),created(){this.preloadImage()},methods:{async preloadImage(){const t=await(t=>{const e=new Image;return new Promise(((s,a)=>{e.onload=()=>{s(e)},e.onerror=a,e.src=t}))})(this.src);this.imageUrl=t.src}}};var Zt=(0,b.Z)(Ut,Pt,[],!1,null,"4320da76",null);Zt.options.__file="src/ui/LazyImage.vue";const zt={components:{LazyImage:Zt.exports},props:{item:Object},computed:{imageUrl(){return this.item.track.album.images[1].url},formattedPlayedAtTimestamp(){return(0,Dt.Z)(new Date(this.item.played_at),"dd MMM yyyy, HH:mm")}}};var Nt=(0,b.Z)(zt,At,[],!1,null,"7d51262c",null);Nt.options.__file="src/pages/Dashboard/TrackCard.vue";const Bt=Nt.exports,Ft={components:{BaseButton:E,Layout:ht,ThemeSelector:wt,ArtistsList:Ot,MenuFooter:$t,TrackCard:Bt},data:()=>({timer:null,recentTracks:null,after:void 0,before:void 0,hasNext:!0}),computed:{selectedArtistId(){return this.$route.query.artist},recentArtists(){const{recentTracks:t}=this;if(!t)return null;const e=null==t?void 0:t.flatMap((t=>t.track.artists));return $()(e,"id")},displayedTracks(){const{recentTracks:t}=this;if(!t)return null;const{selectedArtistId:e}=this;return e?t.filter(this.isItemHasArtist):t}},created(){this.init()},beforeDestroy(){this.timer&&clearTimeout(this.timer)},methods:{async init(){await this.loadRecentTracks(),await this.repeat()},repeat(){this.timer=setTimeout((async()=>{await this.loadNewItems(),this.repeat()}),3e4)},async loadRecentTracks(){try{const t=await G.getRecentlyPlayedTracks({limit:50,before:this.before});this.recentTracks=[...this.recentTracks??[],...t.items];const{cursors:e}=t;this.before=null==e?void 0:e.before,this.after||(this.after=null==e?void 0:e.after),e||(this.hasNext=!1)}catch(t){tt.handle(t)}},async loadNewItems(){if(!this.after)return;const t=await G.getRecentlyPlayedTracks({limit:50,after:this.after});this.recentTracks=[...t.items.map((t=>({...t,isNew:!0}))),...this.recentTracks??[]];const{cursors:e}=t;e&&(this.after=null==e?void 0:e.after)},isItemHasArtist(t){const{selectedArtistId:e}=this;return t.track.artists.some((t=>t.id===e))}}};var jt=(0,b.Z)(Ft,M,[],!1,null,"fe23c5ba",null);jt.options.__file="src/pages/Dashboard/index.vue";const Ht=[{path:"/",component:jt.exports,beforeEnter:(t,e,s)=>{if(ee().state.auth.accessToken)s();else{const e=t.fullPath;s({name:"login",query:{redirect:"/"!==e&&e||void 0}})}}},{path:"/login",name:"login",component:L,beforeEnter:(t,e,s)=>{ee().state.auth.accessToken?s("/"):s()}},{path:"/logout",name:"logout",beforeEnter:(t,e,s)=>{ee().dispatch("auth/signOut"),s({name:"login"})}},{path:"*",component:k}];a.default.use(g.Z);const Yt=new g.Z({routes:Ht,scrollBehavior:(t,e,s)=>s||(t.hash?{selector:t.hash}:t.name!==e.name?{x:0,y:0}:void 0)}),{SPOTIFY_AUTH_HOST:Wt,SPOTIFY_CLIENT_ID:qt,SPOTIFY_REDIRECT_URI:Jt}={NODE_ENV:"production",VERSION:"v1.0.0",SPOTIFY_API_HOST:"https://api.spotify.com",SPOTIFY_AUTH_HOST:"https://accounts.spotify.com/authorize",SPOTIFY_CLIENT_ID:"e900798eba474a8c8ac4c4373b175d7c",SPOTIFY_REDIRECT_URI:"https://inker.github.io/spotify-api-usage-example"},Kt=Object.freeze({stateKey:void 0,accessToken:void 0,userData:null}),Gt={namespaced:!0,state:{...Kt},mutations:h(Object.keys(Kt)),actions:{async refreshUserData(t){let{commit:e}=t;e("setUserData",await G.getCurrentUser())},signOut(t){let{commit:e}=t;e("setAccessToken",void 0),e("setUserData",null)},signIn(t){let{commit:e}=t;const s=vt();e("setStateKey",s);const a=W({response_type:"token",client_id:qt,scope:"user-read-recently-played",redirect_uri:Jt,state:s});window.location=`${Wt}?${a}`},async restoreSession(t){let{commit:e,dispatch:s,state:a}=t;try{const{search:t,hash:n}=window.location;if(t){const e=new URLSearchParams(t).get("error");if(e){throw new Error("access_denied"===e?"Access denied":e)}}const i=new URLSearchParams(n.slice(2)),r=i.get("access_token");if(r){const t=i.get("state");if(r&&(!t||t!==a.stateKey))throw new U("Error during authentication");if(e("setStateKey",void 0),!r)return;e("setAccessToken",r),G.setAccessToken(r),await s("refreshUserData"),await Yt.push("/")}else{const{accessToken:t}=a;G.setAccessToken(t),await s("refreshUserData")}}catch(t){tt.handle(t)}}}},Vt=Object.freeze({position:null,items:[]}),Xt={namespaced:!0,state:{...Vt},mutations:{...h(Object.keys(Vt)),resetState(t){Object.assign(t,Vt)}},actions:{show(t,e){let{commit:s}=t,{items:a,mouseEvent:n}=e;s("setItems",a),s("setPosition",[n.clientX,n.clientY])},reset(t){let{commit:e}=t;e("resetState")}}};var Qt=s(4702);const te=(t,e)=>(0,Qt.Z)({key:`vuex:${t}`,paths:(null==e?void 0:e.map((e=>[t,e].join("."))))??[t],filter:e=>e.type.startsWith(`${t}/`),getState:(e,s)=>{const a=s.getItem(e);try{const e=JSON.parse(a);return e?{[t]:e}:{}}catch{return{}}},setState:(e,s,a)=>{a.setItem(e,JSON.stringify(s[t]))}}),ee=l()((()=>{const t=new o.yh({modules:{appearance:v,sidebar:_,auth:Gt,contextMenu:Xt},plugins:[te("auth",["stateKey","accessToken"]),te("appearance",["colorTheme"]),te("sidebar"),te("dateTime")]});return(t=>{t.watch((t=>t.auth.accessToken),(t=>{t||a.default.notify({clean:!0})}))})(t),t}));var se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-root"},[s("Theming"),t._v(" "),s("notifications",{attrs:{group:"global"}}),t._v(" "),s("router-view")],1)};se._withStripped=!0;const ae=window.matchMedia("(prefers-color-scheme: dark)"),ne={components:{Theming:{computed:{...(0,o.Se)("appearance",{isDarkMode:"isDarkMode"})},watch:{isDarkMode:{immediate:!0,handler(t){document.body.dataset.theme=t?"dark":"light"}}},mounted(){this.setSystemTheme(ae.matches?"dark":"light"),ae.addEventListener("change",this.handleMatchMediaChange)},beforeDestroy(){document.body.removeAttribute("data-theme"),ae.removeEventListener("change",this.handleMatchMediaChange)},methods:{...(0,o.OI)("appearance",["setSystemTheme"]),handleMatchMediaChange(t){this.setSystemTheme(t.matches?"dark":"light")}},render:t=>t()}}};var ie=(0,b.Z)(ne,se,[],!1,null,"3689a55b",null);ie.options.__file="src/Root.vue";const re=ie.exports,oe=s.e(872).then(s.t.bind(s,3119,23));a.default.config.productionTip=!1,a.default.use(o.ZP),a.default.use(r.Sy),a.default.use(i()),tt.setRouter(Yt);const ce=ee();tt.setStore(ce),async function(){await oe,await ce.dispatch("auth/restoreSession"),new a.default({el:"#app",components:{Root:re},store:ce,router:Yt,template:"<Root/>"})}()}},t=>{t.O(0,[421,485,202,284,736],(()=>{return e=5537,t(t.s=e);var e}));t.O()}]);