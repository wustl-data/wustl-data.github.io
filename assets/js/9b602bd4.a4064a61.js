"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(y,s(s({ref:t},l),{},{components:n})):o.createElement(y,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const r={title:"Imports, Packages, and Modules",sidebar_position:2},s=void 0,p={unversionedId:"modules/python-pandas/Background and Exercises/Python/imports-packages-modules",id:"modules/python-pandas/Background and Exercises/Python/imports-packages-modules",title:"Imports, Packages, and Modules",description:"At the top of most Python scripts you will see statements like:",source:"@site/docs/modules/python-pandas/Background and Exercises/Python/imports-packages-modules.md",sourceDirName:"modules/python-pandas/Background and Exercises/Python",slug:"/modules/python-pandas/Background and Exercises/Python/imports-packages-modules",permalink:"/modules/python-pandas/Background and Exercises/Python/imports-packages-modules",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/python-pandas/Background and Exercises/Python/imports-packages-modules.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Imports, Packages, and Modules",sidebar_position:2},sidebar:"docSidebar",previous:{title:"The Zen of Python",permalink:"/modules/python-pandas/Background and Exercises/Python/zen-of-python"},next:{title:"Classes vs Functions",permalink:"/modules/python-pandas/Background and Exercises/Python/classes-v-functions"}},i={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"At the top of most Python scripts you will see statements like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\nfrom scipy import stats\n")),(0,a.kt)("p",null,"These statements are called ",(0,a.kt)("em",{parentName:"p"},"imports"),". They allow us to use code from other Python scripts. The ",(0,a.kt)("inlineCode",{parentName:"p"},"pandas")," library is a ",(0,a.kt)("em",{parentName:"p"},"package")," that contains many ",(0,a.kt)("em",{parentName:"p"},"modules"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"pd")," is an ",(0,a.kt)("em",{parentName:"p"},"alias")," that allows us to refer to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pandas")," package using a shorter name. The ",(0,a.kt)("inlineCode",{parentName:"p"},"stats")," module is part of the ",(0,a.kt)("inlineCode",{parentName:"p"},"scipy")," package. The ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," statement allows us to import only the ",(0,a.kt)("inlineCode",{parentName:"p"},"stats")," module from ",(0,a.kt)("inlineCode",{parentName:"p"},"scipy"),"."),(0,a.kt)("p",null,"Not only can you import packages and modules from third-party packages, you can also use them to reuse your own code from other files in your project. For example, if you have a file in your root directory called ",(0,a.kt)("inlineCode",{parentName:"p"},"my_functions.py")," that contains a function called ",(0,a.kt)("inlineCode",{parentName:"p"},"my_function"),", you can import it into another file using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from my_functions import my_function\n")))}u.isMDXComponent=!0}}]);