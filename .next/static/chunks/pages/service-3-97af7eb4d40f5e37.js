(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9045],{6413:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-3",function(){return l(1815)}])},5677:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var l in i)Object.defineProperty(e,l,{enumerable:!0,get:i[l]})}(i,{noSSR:function(){return m},default:function(){return c}});let s=l(8754),a=(l(7294),s._(l(8976)));function t(e){return{default:(null==e?void 0:e.default)||e}}function m(e,i){return delete i.webpack,delete i.modules,e(i)}function c(e,i){let l=a.default,s={loading:e=>{let{error:i,isLoading:l,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e}),s={...s,...i};let c=s.loader,r=()=>null!=c?c().then(t):Promise.resolve(t(()=>null));return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?l({...s,loader:r}):(delete s.webpack,delete s.modules,m(l,s))}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},2254:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"LoadableContext",{enumerable:!0,get:function(){return t}});let s=l(8754),a=s._(l(7294)),t=a.default.createContext(null)},8976:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return h}});let s=l(8754),a=s._(l(7294)),t=l(2254),m=[],c=[],r=!1;function n(e){let i=e(),l={loading:!0,loaded:null,error:null};return l.promise=i.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:i}=this;e.loading&&("number"==typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},i.delay)),"number"==typeof i.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},i.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,i){this._loadFn=e,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function o(e){return function(e,i){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},i),s=null;function m(){if(!s){let i=new d(e,l);s={getCurrentValue:i.getCurrentValue.bind(i),subscribe:i.subscribe.bind(i),retry:i.retry.bind(i),promise:i.promise.bind(i)}}return s.promise()}if(!r){let e=l.webpack?l.webpack():l.modules;e&&c.push(i=>{for(let l of e)if(i.includes(l))return m()})}function n(e,i){!function(){m();let e=a.default.useContext(t.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(i=>{e(i)})}();let c=a.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(i,()=>({retry:s.retry}),[]),a.default.useMemo(()=>{var i;return c.loading||c.error?a.default.createElement(l.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:s.retry}):c.loaded?a.default.createElement((i=c.loaded)&&i.default?i.default:i,e):null},[e,c])}return n.preload=()=>m(),n.displayName="LoadableComponent",a.default.forwardRef(n)}(n,e)}function u(e,i){let l=[];for(;e.length;){let s=e.pop();l.push(s(i))}return Promise.all(l).then(()=>{if(e.length)return u(e,i)})}o.preloadAll=()=>new Promise((e,i)=>{u(m).then(e,i)}),o.preloadReady=e=>(void 0===e&&(e=[]),new Promise(i=>{let l=()=>(r=!0,i());u(c,e).then(l,l)})),window.__NEXT_PRELOADREADY=o.preloadReady;let h=o},3269:function(e,i,l){"use strict";var s=l(5893),a=l(1664),t=l.n(a);let m=e=>{let{pageTitle:i,pageName:l}=e;return(0,s.jsxs)("div",{className:"mil-banner-sm mil-deep-bg",children:[(0,s.jsx)("img",{src:"img/deco/map.png",alt:"background",className:"mil-background-image"}),(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"47%",right:"10%",transform:"rotate(90deg)"}}),(0,s.jsx)("div",{className:"mil-banner-content",children:(0,s.jsxs)("div",{className:"container mil-relative",children:[(0,s.jsxs)("ul",{className:"mil-breadcrumbs mil-mb-30",children:[(0,s.jsx)("li",{children:(0,s.jsx)(t(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:l})})]}),(0,s.jsx)("h2",{className:"mil-uppercase",children:i})]})})]})};i.Z=m},1815:function(e,i,l){"use strict";l.r(i);var s=l(5893),a=l(3269),t=l(7544),m=l(5152),c=l.n(m),r=l(1664),n=l.n(r);let d=c()(()=>Promise.all([l.e(1949),l.e(8709)]).then(l.bind(l,2803)),{loadableGenerated:{webpack:()=>[2803]},ssr:!1}),o=c()(()=>Promise.all([l.e(1949),l.e(4695)]).then(l.bind(l,9992)),{loadableGenerated:{webpack:()=>[9992]},ssr:!1}),u=()=>(0,s.jsxs)(t.Z,{footer:2,children:[(0,s.jsx)(a.Z,{pageName:"Service",pageTitle:"Mobile app development"}),(0,s.jsx)("section",{className:"mil-p-120-60",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"mil-mb-90",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-mb-30",children:"Our Data Analytics Expertise"}),(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Custom ",(0,s.jsx)("span",{className:"mil-accent",children:"App Solutions"})," For any Mobile Platform"]})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/22.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Android Platform"}),(0,s.jsx)("p",{className:"mil-mb-30",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis."}),(0,s.jsxs)("ul",{className:"mil-dot-list",children:[(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Java"}),(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Kotlin"})]})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/22.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Android Platform"}),(0,s.jsx)("p",{className:"mil-mb-30",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis."}),(0,s.jsxs)("ul",{className:"mil-dot-list",children:[(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Swift"}),(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Objective-C"})]})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/22.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Cross Platform"}),(0,s.jsx)("p",{className:"mil-mb-30",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua accumsan lacus vel facilisis."}),(0,s.jsxs)("ul",{className:"mil-dot-list",children:[(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"React Native"}),(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Flutter"}),(0,s.jsx)("li",{className:"mil-text-sm mil-bold mil-dark",children:"Xamarin"})]})]})})]})]})}),(0,s.jsx)(o,{}),(0,s.jsx)(d,{}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsxs)("section",{className:"mil-p-120-60",children:[(0,s.jsx)("div",{className:"mil-deco",style:{top:0,right:"15%"}}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"mil-mb-90",children:(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Delivering ",(0,s.jsx)("span",{className:"mil-accent",children:"Industry Specific"})," ","Mobile ",(0,s.jsx)("br",{}),"App Solutions"]})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/23.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"eCcommerce"}),(0,s.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis."," "]})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/24.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Entertainment"}),(0,s.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis."," "]})]})}),(0,s.jsx)("div",{className:"col-lg-4",children:(0,s.jsxs)("div",{className:"mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/6.svg",alt:"icon"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Enterprise"}),(0,s.jsxs)("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor facilisis."," "]})]})})]})]})]}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsx)("section",{className:"mil-p-120-60",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"row align-items-end mil-mb-60-adapt",children:[(0,s.jsxs)("div",{className:"col-md-6 col-xl-6",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-mb-30",children:"Tech, Business and Talents"}),(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Next ",(0,s.jsx)("span",{className:"mil-accent",children:"Gen Tech"})," For Mobile App Development"]})]}),(0,s.jsx)("div",{className:"col-md-6 col-xl-6",children:(0,s.jsx)("div",{className:"mil-adaptive-right",children:(0,s.jsx)(n(),{href:"contact",className:"mil-button mil-border mil-mb-30",children:(0,s.jsx)("span",{children:"Learn More"})})})})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/1.svg",alt:"icon"})}),(0,s.jsx)("h6",{children:"Cloud"})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/11.svg",alt:"icon"})}),(0,s.jsx)("h6",{children:"AI / ML"})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/2.svg",alt:"icon"})}),(0,s.jsx)("h6",{children:"AR / VR"})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/4.svg",alt:"icon"})}),(0,s.jsx)("h6",{children:"IoT"})]})})]})]})})]});i.default=u},5152:function(e,i,l){e.exports=l(5677)}},function(e){e.O(0,[1664,7544,9774,2888,179],function(){return e(e.s=6413)}),_N_E=e.O()}]);