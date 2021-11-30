"use strict";(self.webpackChunkspotify_api_usage_example=self.webpackChunkspotify_api_usage_example||[]).push([[143],{772:(t,e,s)=>{s(6487);var a=s(538),n=s(4765),r=s.n(n),i=s(266),o=s(629),c=s(1463),l=s.n(c);const u=t=>{return"set"+`${(e=t)[0].toUpperCase()}${e.slice(1)}`;var e},d=t=>(e,s)=>{e[t]=s},m=t=>[u(t),d(t)],p=t=>Object.fromEntries(t.map(m)),h=Object.freeze({colorTheme:"light",systemTheme:null}),v={namespaced:!0,state:{...h},getters:{isDarkMode(t){const{colorTheme:e}=t;return"dark"===e||"auto"===e&&"dark"===t.systemTheme}},mutations:p(Object.keys(h))},f=Object.freeze({x:void 0}),_={namespaced:!0,state:{...f},mutations:{...p(Object.keys(f)),resetState(t){Object.assign(t,f)}}};var g=s(8345),y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)};y._withStripped=!0;var b=s(1900),w=(0,b.Z)({},y,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"not-found-root"},[s("div",{staticClass:"not-found-text"},[t._v("\n    Page not found\n  ")])])}],!1,null,"28345dd6",null);w.options.__file="src/pages/NotFound/index.vue";const T=w.exports;var k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"login-root"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.signIn.apply(null,arguments)}}},[s("LandingButton",{staticClass:"login-button",attrs:{type:"submit"}},[t._v("\n      Sign in via Spotify\n    ")])],1)])};k._withStripped=!0;var S=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"login-button",attrs:{type:t.type}},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)};S._withStripped=!0;const C={inheritAttrs:!1,props:{type:{type:String,default:"button"}}};var I=(0,b.Z)(C,S,[],!1,null,"486fcdea",null);I.options.__file="src/ui/LandingButton/index.vue";const x={components:{LandingButton:I.exports},methods:{...(0,o.nv)("auth",{signIn:"signIn"})}};var E=(0,b.Z)(x,k,[],!1,null,"2ddd9490",null);E.options.__file="src/pages/Login/index.vue";const O=E.exports;var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",{scopedSlots:t._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"menu-container"},[s("div",{staticClass:"menu-top"},[s("ThemeSelector"),t._v(" "),s("ArtistsList",{attrs:{list:t.recentArtists,selectedId:t.selectedArtistId}})],1),t._v(" "),s("MenuFooter")],1)]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"content-container"},[t.selectedArtistId?s("router-link",{staticClass:"unselect-link",attrs:{to:{query:{artist:void 0}}}},[t._v("\n        Display all artists\n      ")]):t._e(),t._v(" "),t.displayedTracks?s("fragment",[t.displayedTracks.length>0?s("ul",{staticClass:"track-grid"},t._l(t.displayedTracks,(function(t){return s("li",{key:t.track.id},[s("TrackCard",{staticClass:"track-card",class:{"new-item":t.isNew},attrs:{item:t}})],1)})),0):s("div",[t._v("\n          No tracks found\n        ")])]):s("div",{staticClass:"loading-item"},[t._v("\n        Loading...\n      ")]),t._v(" "),s("div",{staticClass:"content-footer"},[s("SmallButton",{attrs:{type:"button",disabled:!t.hasNext},on:{click:t.loadRecentTracks}},[t._v("\n          Load more\n        ")])],1)],1)]},proxy:!0}])})};M._withStripped=!0;var L=s(5578),R=s.n(L),$=s(6033),D=s(3092);class P extends Error{constructor(t){super(t),this.name="RequestError"}}class A extends Error{constructor(t){super(t),this.name="UnauthorizedError"}}var Z=s(6604),U=s.n(Z),z=s(2353),N=s.n(z),j=s(4176),F=s.n(j),B=s(4293),Y=s.n(B);const H=t=>{if(Y()(t))return"";const e=U()(F()(t,N()),String);return new URLSearchParams(e).toString()};function W(t,e,s){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,s)}const{SPOTIFY_API_HOST:q}={NODE_ENV:"production",VERSION:"v1.0.0",SPOTIFY_API_HOST:"https://api.spotify.com",SPOTIFY_AUTH_HOST:"https://accounts.spotify.com/authorize",SPOTIFY_CLIENT_ID:"e900798eba474a8c8ac4c4373b175d7c",SPOTIFY_REDIRECT_URI:"https://inker.github.io/spotify-api-usage-example"};var J=new WeakMap;const K=new class{constructor(){W(this,J,{writable:!0,value:void 0})}setAccessToken(t){(0,D.Z)(this,J,t)}async getJson(t,e){const s=e?`${t}?${H(e)}`:t,a=await fetch(s,{headers:{Authorization:`Bearer ${(0,$.Z)(this,J)}`}}),n=await a.json();if(a.ok)return n;if(401===a.status)throw new A(n.error.message);throw new P(n.error.message)}getCurrentUser(){return this.getJson(`${q}/v1/me`)}getRecentlyPlayedTracks(t){return this.getJson(`${q}/v1/me/player/recently-played`,t)}};function G(t,e,s){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.set(t,s)}var V=new WeakMap,X=new WeakMap;const Q=new class{constructor(){G(this,V,{writable:!0,value:void 0}),G(this,X,{writable:!0,value:void 0})}setRouter(t){(0,D.Z)(this,V,t)}setStore(t){(0,D.Z)(this,X,t)}async handle(t){console.error(t),t instanceof A&&((0,$.Z)(this,X).dispatch("auth/signOut"),await(0,$.Z)(this,V).push({name:"login"})),a.default.notify({group:"global",title:"Error",text:t.message})}};var tt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"small-button",attrs:{type:t.type}},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)};tt._withStripped=!0;const et={inheritAttrs:!1,props:{type:{type:String,default:"button"}}};var st=(0,b.Z)(et,tt,[],!1,null,"a2c8eb4c",null);st.options.__file="src/ui/SmallButton/index.vue";const at=st.exports;var nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-root"},[s("Resize",{model:{value:t.isResizing,callback:function(e){t.isResizing=e},expression:"isResizing"}}),t._v(" "),s("div",{staticClass:"sidebar",style:{width:t.sideBarLeft}},[t._t("sidebar")],2),t._v(" "),s("main",{staticClass:"content",style:{"margin-left":t.sideBarLeft}},[t._t("content")],2)],1)};nt._withStripped=!0;var rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fragment",[s("GlobalEvents",{on:{mousemove:function(e){return e.stopPropagation(),t.onMouseMove.apply(null,arguments)},mouseup:function(e){return e.stopPropagation(),t.onMouseUp.apply(null,arguments)}}}),t._v(" "),s("GlobalClassList",{attrs:{value:t.globalClass}}),t._v(" "),s("div",{staticClass:"resize-bar",style:{left:t.x},on:{mousedown:t.onMouseDown}})],1)};rt._withStripped=!0;var it=s(4691),ot=s.n(it),ct=s(8849),lt=s(7361),ut=s.n(lt);const dt={props:{value:String,target:{type:[String,Array],default:()=>["document","body"]}},computed:{targetClassList(){return ut()(window,this.target).classList}},watch:{value(t,e){e&&this.targetClassList.remove(e),t&&this.targetClassList.add(t)},target(t,e){window[e].classList.remove(this.value),window[t].classList.add(this.value)}},mounted(){this.value&&this.targetClassList.add(this.value)},beforeDestroy(){this.value&&this.targetClassList.remove(this.value)},render:t=>t()},mt={name:"Resize",components:{GlobalEvents:ct.Z,GlobalClassList:dt},props:{value:Boolean},computed:{...(0,o.rn)("sidebar",["x"]),globalClass(){return this.value?"global-resizing":void 0}},methods:{...(0,o.OI)("sidebar",["setX","resetState"]),onMouseDown(){this.$emit("input",!0)},onMouseMove(t){if(!this.value)return;const e=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,s=Math.max(.1*e,225),a=.4*e,n=Math.round(ot()(t.clientX,s,a));this.setX(`${n}px`)},onMouseUp(){this.$emit("input",!1)}}};var pt=(0,b.Z)(mt,rt,[],!1,null,"92dbdcb4",null);pt.options.__file="src/ui/Resize.vue";const ht={components:{Resize:pt.exports},data:()=>({isResizing:!1}),computed:{...(0,o.rn)("sidebar",{sideBarLeft:"x"})}};var vt=(0,b.Z)(ht,nt,[],!1,null,"50bf451c",null);vt.options.__file="src/ui/Layout.vue";const ft=vt.exports;var _t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"theme-selector-root"},[s("Radio",{attrs:{name:t.name,list:t.list,selected:t.colorTheme},on:{input:t.setColorTheme}})],1)};_t._withStripped=!0;const gt=()=>Math.random().toString(36).slice(2);var yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"radio-root"},t._l(t.list,(function(e){return s("label",{key:e.value,staticClass:"theme-item",class:{selected:e.value===t.selected}},[s("input",{attrs:{type:"radio",name:t.name},domProps:{value:e.value,checked:e.value===t.selected},on:{input:function(s){return t.$emit("input",e.value)}}}),t._v("\n    "+t._s(e.label)+"\n  ")])})),0)};yt._withStripped=!0;const bt={props:{name:String,list:Array,selected:String}};var wt=(0,b.Z)(bt,yt,[],!1,null,"e538135c",null);wt.options.__file="src/ui/ThemeSelector/Radio.vue";const Tt={components:{Radio:wt.exports},data:()=>({name:gt(),list:[{value:"light",label:"Light theme"},{value:"dark",label:"Dark theme"},{value:"auto",label:"System theme"}]}),computed:{...(0,o.rn)("appearance",{colorTheme:"colorTheme"})},methods:{...(0,o.OI)("appearance",{setColorTheme:"setColorTheme"})}};var kt=(0,b.Z)(Tt,_t,[],!1,null,"1fa4a7c9",null);kt.options.__file="src/ui/ThemeSelector/index.vue";const St=kt.exports;var Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"artists-title"},[t._v("\n    Recent artists:\n  ")]),t._v(" "),t.list?s("fragment",[t.list.length>0?s("ul",{staticClass:"artist-list"},t._l(t.list,(function(e){return s("li",{key:e.id},[s("router-link",{staticClass:"artist-link",attrs:{to:{query:{artist:e.id}}}},[s("MenuItem",{attrs:{text:e.name,isSelected:e.id===t.selectedId}})],1)],1)})),0):s("MenuItem",{attrs:{text:"No artists found"}})],1):s("MenuItem",{staticClass:"loading-item",attrs:{text:"Loading..."}})],1)};Ct._withStripped=!0;var It=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"artist-item-root",class:{selected:t.isSelected}},[s("div",{staticClass:"name"},[t._v("\n    "+t._s(t.text)+"\n  ")])])};It._withStripped=!0;const xt={props:{text:String,isSelected:Boolean}};var Et=(0,b.Z)(xt,It,[],!1,null,"7f5f6d1e",null);Et.options.__file="src/pages/Dashboard/MenuItem.vue";const Ot=Et.exports,Mt={components:{MenuItem:Ot},props:{list:Array,selectedId:String}};var Lt=(0,b.Z)(Mt,Ct,[],!1,null,"e658eb8a",null);Lt.options.__file="src/pages/Dashboard/ArtistsList.vue";const Rt=Lt.exports;var $t=function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{staticClass:"logout-link",attrs:{to:{name:"logout"}}},[e("MenuItem",{attrs:{text:"Sign out"}})],1)],1)};$t._withStripped=!0;const Dt={components:{MenuItem:Ot},methods:{...(0,o.nv)("auth",{signOut:"signOut"})}};var Pt=(0,b.Z)(Dt,$t,[],!1,null,"09cac679",null);Pt.options.__file="src/pages/Dashboard/MenuFooter.vue";const At=Pt.exports;var Zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"track-card-root"},[s("LazyImage",{staticClass:"track-image",attrs:{src:t.imageUrl}}),t._v(" "),s("div",{staticClass:"content"},[s("div",[s("div",{staticClass:"title"},[t._v("\n        "+t._s(t.item.track.name)+"\n      ")]),t._v(" "),s("div",[s("ul",t._l(t.item.track.artists,(function(e){return s("li",{key:e.id,staticClass:"artist"},[t._v("\n            "+t._s(e.name)+"\n          ")])})),0)])]),t._v(" "),s("div",[s("span",{staticClass:"played-at"},[t._v("\n        Played at: "+t._s(t.formattedPlayedAtTimestamp)+"\n      ")])])])],1)};Zt._withStripped=!0;var Ut=s(1384),zt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.imageUrl?s("img",{attrs:{src:t.imageUrl}}):s("div",{staticClass:"dummy-div"})};zt._withStripped=!0;const Nt={props:{src:String},data:()=>({imageUrl:void 0}),created(){this.preloadImage()},methods:{async preloadImage(){const t=await(t=>{const e=new Image;return new Promise(((s,a)=>{e.onload=()=>{s(e)},e.onerror=a,e.src=t}))})(this.src);this.imageUrl=t.src}}};var jt=(0,b.Z)(Nt,zt,[],!1,null,"4320da76",null);jt.options.__file="src/ui/LazyImage.vue";const Ft={components:{LazyImage:jt.exports},props:{item:Object},computed:{imageUrl(){return this.item.track.album.images[1].url},formattedPlayedAtTimestamp(){return(0,Ut.Z)(new Date(this.item.played_at),"dd MMM yyyy, HH:mm")}}};var Bt=(0,b.Z)(Ft,Zt,[],!1,null,"7d51262c",null);Bt.options.__file="src/pages/Dashboard/TrackCard.vue";const Yt=Bt.exports,Ht={components:{SmallButton:at,Layout:ft,ThemeSelector:St,ArtistsList:Rt,MenuFooter:At,TrackCard:Yt},data:()=>({timer:null,recentTracks:null,after:void 0,before:void 0,hasNext:!0}),computed:{selectedArtistId(){return this.$route.query.artist},recentArtists(){const{recentTracks:t}=this;if(!t)return null;const e=null==t?void 0:t.flatMap((t=>t.track.artists));return R()(e,"id")},displayedTracks(){const{recentTracks:t}=this;if(!t)return null;const{selectedArtistId:e}=this;return e?t.filter((t=>t.track.artists.some((t=>t.id===e)))):t}},created(){this.init()},beforeDestroy(){this.timer&&clearTimeout(this.timer)},methods:{async init(){await this.loadRecentTracks(),await this.repeat()},repeat(){this.timer=setTimeout((async()=>{await this.loadNewItems(),this.repeat()}),5e3)},async loadRecentTracks(){try{const t=await K.getRecentlyPlayedTracks({limit:20,before:this.before});this.recentTracks=[...this.recentTracks??[],...t.items];const{cursors:e}=t;this.after=null==e?void 0:e.after,this.before=null==e?void 0:e.before,e||(this.hasNext=!1)}catch(t){Q.handle(t)}},async loadNewItems(){if(!this.after)return;const t=await K.getRecentlyPlayedTracks({limit:20,after:this.after});this.recentTracks=[...t.items.map((t=>({...t,isNew:!0}))),...this.recentTracks??[]];const{cursors:e}=t;e&&(this.after=null==e?void 0:e.after)}}};var Wt=(0,b.Z)(Ht,M,[],!1,null,"fe23c5ba",null);Wt.options.__file="src/pages/Dashboard/index.vue";const qt=[{path:"/",component:Wt.exports,beforeEnter:(t,e,s)=>{if(ne().state.auth.accessToken)s();else{const e=t.fullPath;s({name:"login",query:{redirect:"/"!==e&&e||void 0}})}}},{path:"/login",name:"login",component:O,beforeEnter:(t,e,s)=>{ne().state.auth.accessToken?s("/"):s()}},{path:"/logout",name:"logout",beforeEnter:(t,e,s)=>{ne().dispatch("auth/signOut"),s({name:"login",params:{logout:!0}})}},{path:"*",component:T,meta:{resetTheme:!0}}];a.default.use(g.Z);const Jt=new g.Z({routes:qt,scrollBehavior:(t,e,s)=>s||(t.hash?{selector:t.hash}:t.name!==e.name?{x:0,y:0}:void 0)}),{SPOTIFY_AUTH_HOST:Kt,SPOTIFY_CLIENT_ID:Gt,SPOTIFY_REDIRECT_URI:Vt}={NODE_ENV:"production",VERSION:"v1.0.0",SPOTIFY_API_HOST:"https://api.spotify.com",SPOTIFY_AUTH_HOST:"https://accounts.spotify.com/authorize",SPOTIFY_CLIENT_ID:"e900798eba474a8c8ac4c4373b175d7c",SPOTIFY_REDIRECT_URI:"https://inker.github.io/spotify-api-usage-example"},Xt=Object.freeze({stateKey:void 0,accessToken:void 0,userData:void 0}),Qt={namespaced:!0,state:{...Xt},mutations:p(Object.keys(Xt)),actions:{async refreshUserData(t){let{commit:e}=t;e("setUserData",await K.getCurrentUser())},signOut(t){let{commit:e}=t;e("setAccessToken",void 0),e("setUserData",null)},signIn(t){let{commit:e}=t;const s=gt();e("setStateKey",s);const a=H({response_type:"token",client_id:Gt,scope:"user-read-recently-played",redirect_uri:Vt,state:s});window.location=`${Kt}?${a}`},async restoreSession(t){let{commit:e,dispatch:s,state:a}=t;try{const{search:t,hash:n}=window.location;if(t){const e=new URLSearchParams(t).get("error");if(e){throw new Error("access_denied"===e?"Access denied":e)}}const r=new URLSearchParams(n.slice(2)),i=r.get("access_token");if(i){const t=r.get("state");if(i&&(!t||t!==a.stateKey))throw new A("Error during authentication");if(e("setStateKey",void 0),!i)return;e("setAccessToken",i),K.setAccessToken(i),await s("refreshUserData"),await Jt.push("/")}else{const{accessToken:t}=a;K.setAccessToken(t),await s("refreshUserData")}}catch(t){Q.handle(t)}}}},te=Object.freeze({position:null,items:[]}),ee={namespaced:!0,state:{...te},mutations:{...p(Object.keys(te)),resetState(t){Object.assign(t,te)}},actions:{show(t,e){let{commit:s}=t,{items:a,mouseEvent:n}=e;s("setItems",a),s("setPosition",[n.clientX,n.clientY])},reset(t){let{commit:e}=t;e("resetState")}}};var se=s(4702);const ae=(t,e)=>(0,se.Z)({key:`vuex:${t}`,paths:(null==e?void 0:e.map((e=>[t,e].join("."))))??[t],filter:e=>e.type.startsWith(`${t}/`),getState:(e,s)=>{const a=s.getItem(e);try{const e=JSON.parse(a);return e?{[t]:e}:{}}catch{return{}}},setState:(e,s,a)=>{a.setItem(e,JSON.stringify(s[t]))}}),ne=l()((()=>{const t=new o.yh({modules:{appearance:v,sidebar:_,auth:Qt,contextMenu:ee},plugins:[ae("auth",["stateKey","accessToken"]),ae("appearance",["colorTheme"]),ae("sidebar"),ae("dateTime")]});return(t=>{t.watch((t=>t.auth.accessToken),(t=>{t||a.default.notify({clean:!0})}))})(t),t}));var re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-root"},[s("Theming"),t._v(" "),s("notifications",{attrs:{group:"global"}}),t._v(" "),s("router-view")],1)};re._withStripped=!0;const ie=window.matchMedia("(prefers-color-scheme: dark)"),oe={components:{Theming:{computed:{...(0,o.Se)("appearance",{isDarkMode:"isDarkMode"})},watch:{isDarkMode:{immediate:!0,handler(t){document.body.dataset.theme=t?"dark":"light"}}},mounted(){this.setSystemTheme(ie.matches),ie.addEventListener("change",this.handleMatchMediaChange)},beforeDestroy(){document.body.removeAttribute("data-theme"),ie.removeEventListener("change",this.handleMatchMediaChange)},methods:{...(0,o.OI)("appearance",["setSystemTheme"]),handleMatchMediaChange(t){this.setSystemTheme(t.matches?"dark":"light")}},render:t=>t()}}};var ce=(0,b.Z)(oe,re,[],!1,null,"3689a55b",null);ce.options.__file="src/Root.vue";const le=ce.exports,ue=s.e(872).then(s.t.bind(s,3119,23));a.default.config.productionTip=!1,a.default.use(o.ZP),a.default.use(i.Sy),a.default.use(r()),Q.setRouter(Jt);const de=ne();Q.setStore(de),async function(){await ue,await de.dispatch("auth/restoreSession"),new a.default({el:"#app",components:{Root:le},store:de,router:Jt,template:"<Root/>"})}()}},t=>{t.O(0,[421,485,202,284,736],(()=>{return e=772,t(t.s=e);var e}));t.O()}]);