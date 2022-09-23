"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[6883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Natural constraints",sidebar_position:3},i=void 0,l={unversionedId:"modules/cleaning/Background/constraints",id:"modules/cleaning/Background/constraints",title:"Natural constraints",description:'Often, you will want to make sure that your data set adheres to the physical laws of the universe. For example, you might want to make sure that your data set does not contain any negative values for a variable that is supposed to be positive, like the number of people in a district. Alternatively, you might have some artificially imposed constraints that you might want to impose on your data set to make sure that it is internally consistent. For example, you might want to make sure that the values in a column labeled "State" are all valid US state abbreviations. Or, you might want to double check that a column labeled "Color" actually contains some kind of objective representation of color, like a hex code, an RGB value, or a color name.',source:"@site/docs/modules/cleaning/Background/constraints.md",sourceDirName:"modules/cleaning/Background",slug:"/modules/cleaning/Background/constraints",permalink:"/modules/cleaning/Background/constraints",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/cleaning/Background/constraints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Natural constraints",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Data types of fields",permalink:"/modules/cleaning/Background/dtypes"},next:{title:"Accurate representations",permalink:"/modules/cleaning/Background/typos"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Often, you will want to make sure that your data set adheres to the physical laws of the universe. For example, you might want to make sure that your data set does not contain any negative values for a variable that is supposed to be positive, like the number of people in a district. Alternatively, you might have some artificially imposed constraints that you might want to impose on your data set to make sure that it is internally consistent. For example, you might want to make sure that the values in a column labeled "State" are all valid US state abbreviations. Or, you might want to double check that a column labeled "Color" actually contains some kind of objective representation of color, like a hex code, an RGB value, or a color name.'))}p.isMDXComponent=!0}}]);