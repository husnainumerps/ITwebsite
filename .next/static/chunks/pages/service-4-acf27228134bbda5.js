(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7408],{7404:function(e,i,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service-4",function(){return l(4972)}])},5677:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),function(e,i){for(var l in i)Object.defineProperty(e,l,{enumerable:!0,get:i[l]})}(i,{noSSR:function(){return c},default:function(){return r}});let s=l(8754),a=(l(7294),s._(l(8976)));function t(e){return{default:(null==e?void 0:e.default)||e}}function c(e,i){return delete i.webpack,delete i.modules,e(i)}function r(e,i){let l=a.default,s={loading:e=>{let{error:i,isLoading:l,pastDelay:s}=e;return null}};e instanceof Promise?s.loader=()=>e:"function"==typeof e?s.loader=e:"object"==typeof e&&(s={...s,...e}),s={...s,...i};let r=s.loader,n=()=>null!=r?r().then(t):Promise.resolve(t(()=>null));return(s.loadableGenerated&&(s={...s,...s.loadableGenerated},delete s.loadableGenerated),"boolean"!=typeof s.ssr||s.ssr)?l({...s,loader:n}):(delete s.webpack,delete s.modules,c(l,s))}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),e.exports=i.default)},2254:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"LoadableContext",{enumerable:!0,get:function(){return t}});let s=l(8754),a=s._(l(7294)),t=a.default.createContext(null)},8976:function(e,i,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return h}});let s=l(8754),a=s._(l(7294)),t=l(2254),c=[],r=[],n=!1;function m(e){let i=e(),l={loading:!0,loaded:null,error:null};return l.promise=i.then(e=>(l.loading=!1,l.loaded=e,e)).catch(e=>{throw l.loading=!1,l.error=e,e}),l}class o{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:i}=this;e.loading&&("number"==typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},i.delay)),"number"==typeof i.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},i.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,i){this._loadFn=e,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,i){let l=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},i),s=null;function c(){if(!s){let i=new o(e,l);s={getCurrentValue:i.getCurrentValue.bind(i),subscribe:i.subscribe.bind(i),retry:i.retry.bind(i),promise:i.promise.bind(i)}}return s.promise()}if(!n){let e=l.webpack?l.webpack():l.modules;e&&r.push(i=>{for(let l of e)if(i.includes(l))return c()})}function m(e,i){!function(){c();let e=a.default.useContext(t.LoadableContext);e&&Array.isArray(l.modules)&&l.modules.forEach(i=>{e(i)})}();let r=a.default.useSyncExternalStore(s.subscribe,s.getCurrentValue,s.getCurrentValue);return a.default.useImperativeHandle(i,()=>({retry:s.retry}),[]),a.default.useMemo(()=>{var i;return r.loading||r.error?a.default.createElement(l.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:s.retry}):r.loaded?a.default.createElement((i=r.loaded)&&i.default?i.default:i,e):null},[e,r])}return m.preload=()=>c(),m.displayName="LoadableComponent",a.default.forwardRef(m)}(m,e)}function u(e,i){let l=[];for(;e.length;){let s=e.pop();l.push(s(i))}return Promise.all(l).then(()=>{if(e.length)return u(e,i)})}d.preloadAll=()=>new Promise((e,i)=>{u(c).then(e,i)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(i=>{let l=()=>(n=!0,i());u(r,e).then(l,l)})),window.__NEXT_PRELOADREADY=d.preloadReady;let h=d},3269:function(e,i,l){"use strict";var s=l(5893),a=l(1664),t=l.n(a);let c=e=>{let{pageTitle:i,pageName:l}=e;return(0,s.jsxs)("div",{className:"mil-banner-sm mil-deep-bg",children:[(0,s.jsx)("img",{src:"img/deco/map.png",alt:"background",className:"mil-background-image"}),(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"47%",right:"10%",transform:"rotate(90deg)"}}),(0,s.jsx)("div",{className:"mil-banner-content",children:(0,s.jsxs)("div",{className:"container mil-relative",children:[(0,s.jsxs)("ul",{className:"mil-breadcrumbs mil-mb-30",children:[(0,s.jsx)("li",{children:(0,s.jsx)(t(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",children:l})})]}),(0,s.jsx)("h2",{className:"mil-uppercase",children:i})]})})]})};i.Z=c},4972:function(e,i,l){"use strict";l.r(i);var s=l(5893),a=l(3269),t=l(7544),c=l(5152),r=l.n(c);let n=r()(()=>Promise.all([l.e(1949),l.e(8574)]).then(l.bind(l,157)),{loadableGenerated:{webpack:()=>[157]},ssr:!1}),m=()=>(0,s.jsxs)(t.Z,{footer:2,children:[(0,s.jsx)(a.Z,{pageName:"Service",pageTitle:"Cybersecurity"}),(0,s.jsxs)("section",{className:"mil-p-120-90",children:[(0,s.jsx)("div",{className:"mil-deco",style:{bottom:0,right:"20%",transform:"rotate(180deg)"}}),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-circle-illustration mil-with-dots-2 mil-mb-60","data-swiper-parallax-scale":".8",children:[(0,s.jsx)("div",{className:"mil-circle-bg"}),(0,s.jsx)("div",{className:"mil-image-frame",children:(0,s.jsx)("img",{src:"img/faces/t4.png",alt:"img"})})]})}),(0,s.jsxs)("div",{className:"col-xl-7",children:[(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Protect Your IT Environments With"," ",(0,s.jsx)("span",{className:"mil-accent",children:"Powerful Cloud Security"})," ","Solutions and Always on Support"]}),(0,s.jsxs)("div",{className:"mil-hori-box mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-mr-30",children:(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg",children:(0,s.jsx)("img",{src:"img/icons/md/1.svg",alt:"icon"})})}),(0,s.jsxs)("p",{children:["Our"," ",(0,s.jsx)("span",{className:"mil-accent",children:"certified cloud security"})," ","experts help protect your environments across hyperscale public and private clouds so you can run your business confidence."]})]}),(0,s.jsx)("a",{href:"#.",className:"mil-button mil-border mil-mb-30",children:(0,s.jsx)("span",{children:"Get in Touch"})})]})]})})]}),(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"mil-divider"})}),(0,s.jsx)("section",{className:"mil-p-120-90",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-xl-7",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-mb-30",children:"Discover Our Company"}),(0,s.jsxs)("h2",{className:"mil-mb-30",children:["Explore ",(0,s.jsx)("span",{className:"mil-accent",children:"Cloud Security"})," ","Solutions"]}),(0,s.jsx)("p",{className:"mil-mb-90",children:'The import ContactForm from "@/src/components/ContactForm"; import Layouts from "@/src/layouts/Layouts"; constant evolution of threats and the race for more sophisticated tools to combat them means that security is changing rapidly.'})]})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"I"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Application Security"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"II"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Data Protection"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"III"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Network Security"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"IV"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Security Strategy"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"V"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Detection and Response"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})}),(0,s.jsx)("div",{className:"col-xl-4",children:(0,s.jsxs)("div",{className:"mil-hover-card mil-box-center mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"VI"})}),(0,s.jsx)("h5",{className:"mil-mb-30",children:"Elastic Engineering"}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})})]})]})}),(0,s.jsx)("section",{className:"mil-deep-bg mil-p-120-90",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-xl-7",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-mb-30",children:"Explore More Solutions"}),(0,s.jsxs)("h2",{className:"mil-mb-90",children:["Boost Your ",(0,s.jsx)("span",{className:"mil-accent",children:"Advantage"})]})]})}),(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-xl-3 mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"I"})}),(0,s.jsxs)("h5",{className:"mil-mb-30",children:["Cloud Native ",(0,s.jsx)("br",{}),"Security Services"]}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,s.jsxs)("div",{className:"col-xl-3 mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"II"})}),(0,s.jsxs)("h5",{className:"mil-mb-30",children:["Multi ",(0,s.jsx)("br",{}),"Cloud Security"]}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,s.jsxs)("div",{className:"col-xl-3 mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"III"})}),(0,s.jsxs)("h5",{className:"mil-mb-30",children:["On Site Security ",(0,s.jsx)("br",{}),"and Compliance"]}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),(0,s.jsxs)("div",{className:"col-xl-3 mil-mb-30",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:"-10%",right:"-10%"}}),(0,s.jsx)("div",{className:"mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30",children:(0,s.jsx)("h3",{children:"IV"})}),(0,s.jsxs)("h5",{className:"mil-mb-30",children:["Consectetur ",(0,s.jsx)("br",{}),"adipiscing elit"]}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})]})]})}),(0,s.jsxs)("section",{className:"mil-gradient-bg mil-p-120-90",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{bottom:0,right:"20%",transform:"rotate(180deg)"}}),(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"row justify-content-between align-items-center",children:[(0,s.jsxs)("div",{className:"col-xl-4",children:[(0,s.jsx)("span",{className:"mil-suptitle mil-suptitle-2 mil-light mil-mb-30",children:"Explore More Solutions"}),(0,s.jsxs)("h2",{className:"mil-light mil-mb-90",children:["Do You Know what Your"," ",(0,s.jsx)("span",{className:"mil-accent",children:"Cybersecurity"})," Risk Score Is?"]})]}),(0,s.jsxs)("div",{className:"col-xl-7 mil-mb-30",children:[(0,s.jsx)("p",{className:"mil-light-soft mil-mb-30",children:"By answering these simple questions about your cybersecurity technology, processes, and people, you'll receive a cybersecurity risk score against our baseline that can help you identify common security gaps in your environment that you may not be aware of."}),(0,s.jsx)("a",{href:"#.",className:"mil-button mil-border mil-light",children:(0,s.jsx)("span",{children:"Start Now"})})]})]})})]}),(0,s.jsx)(n,{}),(0,s.jsxs)("section",{className:"mil-contact mil-gradient-bg mil-p-120-0",children:[(0,s.jsx)("div",{className:"mil-deco mil-deco-accent",style:{top:0,right:"10%"}}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("h2",{className:"mil-light mil-mb-90",children:["Contact ",(0,s.jsx)("span",{className:"mil-accent",children:"Us"})]}),(0,s.jsx)("form",{children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:"col-lg-6",children:[(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Name"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("input",{type:"text",placeholder:"Enter Your Name Here"})]}),(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Email Adress"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("input",{type:"email",id:"email",placeholder:"Your Email"})]}),(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-60",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Phone"}),(0,s.jsx)("span",{className:"mil-light-soft",children:"Optional"})]}),(0,s.jsx)("input",{type:"number",placeholder:"Your Phone"})]}),(0,s.jsxs)("div",{className:"mil-attach-frame mil-mb-60",children:[(0,s.jsx)("i",{className:"fas fa-paperclip"}),(0,s.jsxs)("label",{className:"mil-custom-file-input",children:[(0,s.jsx)("span",{children:"Attach your file"}),(0,s.jsx)("input",{type:"file",id:"mil-file-input"})]}),(0,s.jsx)("p",{className:"mil-text-sm mil-light-soft",children:"up to 20MB"})]})]}),(0,s.jsxs)("div",{className:"col-lg-6",children:[(0,s.jsxs)("div",{className:"mil-input-frame mil-mb-30",children:[(0,s.jsxs)("label",{children:[(0,s.jsx)("span",{className:"mil-light",children:"Email Adress"}),(0,s.jsx)("span",{className:"mil-accent",children:"Required"})]}),(0,s.jsx)("textarea",{placeholder:"Your Message",defaultValue:""})]}),(0,s.jsx)("p",{className:"mil-text-sm mil-light-soft mil-mb-15",children:"We will process your personal information in accordance with our Privacy Policy."}),(0,s.jsxs)("div",{className:"mil-checbox-frame mil-mb-60",children:[(0,s.jsx)("input",{className:"mil-checkbox",id:"checkbox-1",type:"checkbox",defaultValue:"value"}),(0,s.jsxs)("label",{htmlFor:"checkbox-1",className:"mil-text-sm mil-light",children:["I would like to be contacted with news and updates about your"," ",(0,s.jsx)("a",{href:"#.",className:"mil-accent",children:"events and services"})]})]})]}),(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("button",{className:"mil-button mil-accent-bg mil-fw",children:(0,s.jsx)("span",{children:"Send Message Now"})})})]})})]})]})]});i.default=m},5152:function(e,i,l){e.exports=l(5677)}},function(e){e.O(0,[1664,7544,9774,2888,179],function(){return e(e.s=7404)}),_N_E=e.O()}]);