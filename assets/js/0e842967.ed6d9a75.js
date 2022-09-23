"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[9007],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Data types of fields",sidebar_position:2},i=void 0,s={unversionedId:"modules/cleaning/Background/dtypes",id:"modules/cleaning/Background/dtypes",title:"Data types of fields",description:"One of the first things we can do is make sure our data fields are represented with the correct data type. Why is the data type important?",source:"@site/docs/modules/cleaning/Background/dtypes.md",sourceDirName:"modules/cleaning/Background",slug:"/modules/cleaning/Background/dtypes",permalink:"/modules/cleaning/Background/dtypes",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/cleaning/Background/dtypes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Data types of fields",sidebar_position:2},sidebar:"docSidebar",previous:{title:"What is Data Cleaning?",permalink:"/modules/cleaning/Background/cleaning"},next:{title:"Natural constraints",permalink:"/modules/cleaning/Background/constraints"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the first things we can do is make sure our data fields are represented with the correct data type. Why is the data type important?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Performance"),(0,n.kt)("p",{parentName:"li"},"As discussed in the last module, Pandas is built on top of Numpy. Part of the reason it can take advantage of Numpy's speed is the consistent use of data types. As you might remember from CompSci 101 or a data structures course, different data types are stored different ways in the computer's memory, which makes searching and manipulating sets/lists of that data type work differently. For example, a boolean represented as a true boolean data type only takes up one bit of memory (in theory). If you try to represent the same variable as an integer, the computer now needs 4 bytes of information. That's 32x the memory space! If you try to represent the same information as the string values \"True\" or \"False\" - That's 16 bytes per character, for a minimum of 80 bytes! That's 640x the memory! Now imagine you have a data set with millions of true/false values and you need to search through the true/false values... it adds up quickly. Representing data with its natural data type will usually allow us to operate on it the fastest."),(0,n.kt)("admonition",{parentName:"li",title:"Categoricals",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"It's good to know that if your variable is a ",(0,n.kt)("em",{parentName:"p"},"categorical variable"),", you can get huge performance boosts by representing it as such. Think of it as a boolean variable with more than two (binary) outcomes. If you have a column for day of the week, for example, you can (again, theoretically) represent all possible values in 3 bits (7 < 2**3 = 8) instead of the hundreds of bytes a string would take."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Functionality"),(0,n.kt)("p",{parentName:"li"},"Because we are working in Python, it provides us with all kinds of helpful datatype-specific operations that require the data be of the right type. This is no exception when the data happens to be stored in a DataFrame rather than just in a regular Python variable. We can add and multiply columns together if they're numeric, but not if they're represented as strings, etc."))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Saving time"),(0,n.kt)("p",{parentName:"li"},"When the data is properly stored as its correct data type as soon as possible, it can save countless hours for that data's users, including yourself, keeping us from needing to convert the data later on, possibly several times across a code base."))))}u.isMDXComponent=!0}}]);