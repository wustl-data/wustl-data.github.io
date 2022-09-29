"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[8980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),p=a,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"What is normalized data?",sidebar_position:1},i=void 0,l={unversionedId:"modules/normalization/index",id:"modules/normalization/index",title:"What is normalized data?",description:"Before we begin, a word of caution:",source:"@site/docs/modules/normalization/index.md",sourceDirName:"modules/normalization",slug:"/modules/normalization/",permalink:"/modules/normalization/",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/normalization/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"What is normalized data?",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Assignment 2",permalink:"/modules/cleaning/Assignment"},next:{title:"Tidy Data",permalink:"/modules/normalization/tidy"}},d={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Before we begin, a word of caution:"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"In other contexts (including as a component of HW1), ",(0,a.kt)("em",{parentName:"p"},"normalization")," can refer to the process of transforming data to fit on a standard unit scale by subtracting the mean and dividing by the standard deviation. From this point on in the course, ",(0,a.kt)("em",{parentName:"p"},"normalization")," and ",(0,a.kt)("em",{parentName:"p"},"normalized data")," will refer to the concepts in this module.")),(0,a.kt)("p",null,"At a very high level, normalized data is data organized according to a particular set of standards that intends to make data easier to understand and query. These standards have formal definitions, but as an introduction we will talk about the reframing of normalized data as 'tidy' data."))}u.isMDXComponent=!0}}]);