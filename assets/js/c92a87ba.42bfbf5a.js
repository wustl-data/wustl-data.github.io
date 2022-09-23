"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[9660],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,f=u["".concat(d,".").concat(m)]||u[m]||l[m]||o;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2510:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Pandas"},i=void 0,s={unversionedId:"modules/python-pandas/Background and Exercises/pandas/index",id:"modules/python-pandas/Background and Exercises/pandas/index",title:"Pandas",description:"Pandas, in essence, is a library built on top of NumPy that provides some user-friendly ways to organize and label data. It takes advantage of the speed of Numpy, but also provides more sophisticated data manipulation functions than found in NumPy.",source:"@site/docs/modules/python-pandas/Background and Exercises/pandas/index.md",sourceDirName:"modules/python-pandas/Background and Exercises/pandas",slug:"/modules/python-pandas/Background and Exercises/pandas/",permalink:"/modules/python-pandas/Background and Exercises/pandas/",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/python-pandas/Background and Exercises/pandas/index.md",tags:[],version:"current",frontMatter:{title:"Pandas"},sidebar:"docSidebar",previous:{title:"Dictionaries and Dict Comprehensions",permalink:"/modules/python-pandas/Background and Exercises/Python/dict-comprehensions"},next:{title:"Series",permalink:"/modules/python-pandas/Background and Exercises/pandas/series"}},d={},p=[],c={toc:p};function l(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pandas, in essence, is a library built on top of NumPy that provides some user-friendly ways to organize and label data. It takes advantage of the speed of Numpy, but also provides more sophisticated data manipulation functions than found in NumPy. "),(0,r.kt)("p",null,"Take a very quick glance at the ",(0,r.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/user_guide/index.html#user-guide"},"Pandas User Guide")," to get an idea of the various capbabilities of Pandas."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The name ",(0,r.kt)("em",{parentName:"p"},"Pandas")," derives from the econometric term ",(0,r.kt)("em",{parentName:"p"},"panel data"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The fact that Pandas is built upon NumPy (which is built on C) makes it very fast -- on par with SQL for straightforward queries. Because Pandas offers all of the advantages of NumPy and more, it is a rare occasion that I find it necessary to use the NumPy package directly. Usually these occasions are:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"compatibility with third-party packages which require NumPy arrays as inputs, or"),(0,r.kt)("li",{parentName:"ol"},"NumPy's ",(0,r.kt)("inlineCode",{parentName:"li"},"linspace")," method which is often useful for creating arbitrary x-axis data points for plotting symbolic mathematical functions (e.g. making the ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," array to plot ",(0,r.kt)("inlineCode",{parentName:"li"},"y = m*x + b"),")."))))}l.isMDXComponent=!0}}]);