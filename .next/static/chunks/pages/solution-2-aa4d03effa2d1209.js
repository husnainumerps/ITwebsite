(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9394],{9782:function(e,l,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/solution-2",function(){return i(3455)}])},5677:function(e,l,i){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),function(e,l){for(var i in l)Object.defineProperty(e,i,{enumerable:!0,get:l[i]})}(l,{noSSR:function(){return r},default:function(){return n}});let s=i(8754),a=(i(7294),s._(i(8976)));function t(e){return{default:(null==e?void 0:e.default)||e}}function r(e,l){return delete l.webpack,delete l.modules,e(l)}function n(e,l){let i=a.default,s={loading:e=>{let{error:l,isLoading:i,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e}),s={...s,...l};let n=s.loader,c=()=>null!=n?n().then(t):Promise.resolve(t(()=>null));return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?i({...s,loader:c}):(delete s.webpack,delete s.modules,r(i,s))}("function"==typeof l.default||"object"==typeof l.default&&null!==l.default)&&void 0===l.default.__esModule&&(Object.defineProperty(l.default,"__esModule",{value:!0}),Object.assign(l.default,l),e.exports=l.default)},2254:function(e,l,i){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"LoadableContext",{enumerable:!0,get:function(){return t}});let s=i(8754),a=s._(i(7294)),t=a.default.createContext(null)},8976:function(e,l,i){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),Object.defineProperty(l,"default",{enumerable:!0,get:function(){return h}});let s=i(8754),a=s._(i(7294)),t=i(2254),r=[],n=[],c=!1;function m(e){let l=e(),i={loading:!0,loaded:null,error:null};return i.promise=l.then(e=>(i.loading=!1,i.loaded=e,e)).catch(e=>{throw i.loading=!1,i.error=e,e}),i}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:l}=this;e.loading&&("number"==typeof l.delay&&(0===l.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},l.delay)),"number"==typeof l.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},l.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,l){this._loadFn=e,this._opts=l,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function o(e){return function(e,l){let i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},l),s=null;function r(){if(!s){let l=new d(e,i);s={getCurrentValue:l.getCurrentValue.bind(l),subscribe:l.subscribe.bind(l),retry:l.retry.bind(l),promise:l.promise.bind(l)}}return s.promise()}if(!c){let e=i.webpack?i.webpack():i.modules;e&&n.push(l=>{for(let i of e)if(l.includes(i))return r()})}function m(e,l){!function(){r();let e=a.default.useContext(t.LoadableContext);e&&Array.isArray(i.modules)&&i.modules.forEach(l=>{e(l)})}();let n=a.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(l,()=>({retry:s.retry}),[]),a.default.useMemo(()=>{var l;return n.loading||n.error?a.default.createElement(i.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:s.retry}):n.loaded?a.default.createElement((l=n.loaded)&&l.default?l.default:l,e):null},[e,n])}return m.preload=()=>r(),m.displayName="LoadableComponent",a.default.forwardRef(m)}(m,e)}function u(e,l){let i=[];for(;e.length;){let s=e.pop();i.push(s(l))}return Promise.all(i).then(()=>{if(e.length)return u(e,l)})}o.preloadAll=()=>new Promise((e,l)=>{u(r).then(e,l)}),o.preloadReady=e=>(void 0===e&&(e=[]),new Promise(l=>{let i=()=>(c=!0,l());u(n,e).then(i,i)})),window.__NEXT_PRELOADREADY=o.preloadReady;let h=o},8226:function(e,l,i){"use strict";var s=i(5893);let a=()=>(0,s.jsxs)("section",{className:"mil-contact mil-gradient-bg mil-p-120-0",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:0,right:"10%"}}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("h2",{className:"mil-light mil-mb-90",children:["Contact ",(0,s.jsx)("span",{className:"mil-accent",children:"Me"})]}),(0,s.jsx)("form",{children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-6",children:[(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Name"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Name Here"})]}),(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Email Adress"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("input",{type:"email",placeholder:"Your Email"})]}),(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-60",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Phone"}),(0,s.jsx)("span",{className:"mil-light-soft",children:"Optional"})]}),(0,s.jsx)("input",{type:"number",placeholder:"Your Phone"})]}),(0,s.jsxs)("div",{className:"mil-attach-frame mil-mb-60",children:[(0,s.jsx)("i",{className:"fas fa-paperclip"}),(0,s.jsxs)("label",{className:"mil-custom-file-input",children:[(0,s.jsx)("span",{children:"Attach your file"}),(0,s.jsx)("input",{type:"file",id:"mil-file-input"})]}),(0,s.jsx)("p",{className:"mil-text-sm mil-light-soft",children:"up to 20MB"})]})]}),(0,s.jsxs)("div",{className:"col-lg-6",children:[(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Email Adress"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("textarea",{placeholder:"Your Message",defaultValue:""})]}),(0,s.jsx)("p",{className:"mil-text-sm mil-light-soft mil-mb-15",children:"We will process your personal information in accordance with our Privacy Policy."}),(0,s.jsxs)("div",{className:"mil-checbox-frame mil-mb-60",children:[(0,s.jsx)("input",{className:"mil-checkbox",id:"checkbox-1",type:"checkbox",defaultValue:"value"}),(0,s.jsxs)("label",{htmlFor:"checkbox-1",className:"mil-text-sm mil-light",children:["I would like to be contacted with news and updates about your"," ",(0,s.jsx)("a",{href:"#.",className:"mil-accent",children:"events and services"})]})]})]}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("button",{className:"mil-button mil-accent-bg mil-fw",children:(0,s.jsx)("span",{children:"Send Message Now"})})})]})})]})]});l.Z=a},3269:function(e,l,i){"use strict";var s=i(5893),a=i(1664),t=i.n(a);let r=e=>{let{pageTitle:l,pageName:i}=e;return(0,s.jsxs)("div",{className:"mil-banner-sm mil-deep-bg",children:[(0,s.jsx)("img",{src:"img/deco/map.png",alt:"background",className:"mil-background-image"}),(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"47%",right:"10%",transform:"rotate(90deg)"}}),(0,s.jsx)("div",{className:"mil-banner-content",children:(0,s.jsxs)("div",{className:"container mil-relative",children:[(0,s.jsxs)("ul",{className:"mil-breadcrumbs mil-mb-30",children:[(0,s.jsx)("li",{children:(0,s.jsx)(t(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:i})})]}),(0,s.jsx)("h2",{className:"mil-uppercase",children:l})]})})]})};l.Z=r},3455:function(e,l,i){"use strict";i.r(l);var s=i(5893),a=i(8226),t=i(3269),r=i(7544),n=i(5152),c=i.n(n);let m=c()(()=>Promise.all([i.e(1949),i.e(6531)]).then(i.bind(i,9277)),{loadableGenerated:{webpack:()=>[9277]},ssr:!1}),d=c()(()=>Promise.all([i.e(1949),i.e(6530)]).then(i.bind(i,7620)),{loadableGenerated:{webpack:()=>[7620]},ssr:!1}),o=c()(()=>Promise.all([i.e(1949),i.e(1417)]).then(i.bind(i,5482)),{loadableGenerated:{webpack:()=>[5482]},ssr:!1}),u=()=>(0,s.jsxs)(r.Z,{footer:2,children:[(0,s.jsx)(t.Z,{pageName:"Solution",pageTitle:"Big data"}),(0,s.jsx)("section",{className:"mil-p-120-90",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("h2",{className:"mil-mb-60",children:["Making ",(0,s.jsx)("span",{className:"mil-accent",children:"Business"})," Sense of"," ",(0,s.jsx)("span",{className:"mil-accent",children:"Your Data"})," for Any User,",(0,s.jsx)("br",{})," Anytime, Anywhere"]}),(0,s.jsx)("p",{className:"mil-mb-60",children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsx)("div",{className:"mil-hover-card mil-price-card mil-card-only-30 mil-mb-30",children:(0,s.jsxs)("div",{className:"mil-icon-box-2",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/17.svg",alt:"icon"})}),(0,s.jsx)("div",{className:"mil-box-text",children:(0,s.jsxs)("h6",{className:"mil-box-text",children:["Enable a Single Source ",(0,s.jsx)("br",{}),"of Truth"]})})]})})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsx)("div",{className:"mil-hover-card mil-price-card mil-card-only-30 mil-mb-30",children:(0,s.jsxs)("div",{className:"mil-icon-box-2",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/19.svg",alt:"icon"})}),(0,s.jsx)("div",{className:"mil-box-text",children:(0,s.jsxs)("h6",{className:"mil-box-text",children:["Democratize Your ",(0,s.jsx)("br",{}),"Data Safely"]})})]})})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsx)("div",{className:"mil-hover-card mil-price-card mil-card-only-30 mil-mb-30",children:(0,s.jsxs)("div",{className:"mil-icon-box-2",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/18.svg",alt:"icon"})}),(0,s.jsx)("div",{className:"mil-box-text",children:(0,s.jsx)("h6",{className:"mil-box-text",children:"Foster a Data Culture For Efficiency"})})]})})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsx)("div",{className:"mil-hover-card mil-price-card mil-card-only-30 mil-mb-30",children:(0,s.jsxs)("div",{className:"mil-icon-box-2",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("img",{src:"img/icons/md/11.svg",alt:"icon"})}),(0,s.jsx)("div",{className:"mil-box-text",children:(0,s.jsx)("h6",{className:"mil-box-text",children:"Scale UP With an AI-Ready Infrastructure"})})]})})})]})]})}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsx)(d,{}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsx)(o,{}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsx)(m,{}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsxs)("section",{className:"mil-p-120-60",children:[(0,s.jsx)("div",{className:"mil-deco",style:{top:0,left:"15%"}}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"mil-text-center mil-mb-90",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-mb-30",children:"A Great Service"}),(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Values That ",(0,s.jsx)("span",{className:"mil-accent",children:"Lead Us"})]})]}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("h3",{children:"I"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Productivity"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("h3",{children:"II"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Transparency"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("h3",{children:"III"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Personality"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-lg-3",children:(0,s.jsxs)("div",{className:"mil-box-center mil-mb-60",children:[(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30",children:(0,s.jsx)("h3",{children:"IV"})}),(0,s.jsx)("h5",{className:"mil-mb-20",children:"Volition"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore magna aliqua."})]})})]})]})]}),(0,s.jsx)(a.Z,{})]});l.default=u},5152:function(e,l,i){e.exports=i(5677)}},function(e){e.O(0,[1664,7544,9774,2888,179],function(){return e(e.s=9782)}),_N_E=e.O()}]);