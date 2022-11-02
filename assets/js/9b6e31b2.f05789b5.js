"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[9808],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(a),c=i,f=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(7462),i=(a(7294),a(3905));const r={title:"Tidying in Pandas",sidebar_position:2.5},o=void 0,l={unversionedId:"modules/normalization/pandas",id:"modules/normalization/pandas",title:"Tidying in Pandas",description:"Let's go over some functions and features that are useful for tidying data in Pandas.",source:"@site/docs/modules/normalization/pandas.md",sourceDirName:"modules/normalization",slug:"/modules/normalization/pandas",permalink:"/modules/normalization/pandas",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/normalization/pandas.md",tags:[],version:"current",sidebarPosition:2.5,frontMatter:{title:"Tidying in Pandas",sidebar_position:2.5},sidebar:"docSidebar",previous:{title:"Tidy Data",permalink:"/modules/normalization/tidy"},next:{title:"Normalized Data",permalink:"/modules/normalization/normal"}},s={},d=[{value:"Multi-indexing",id:"multi-indexing",level:2},{value:"DataFrame.stack",id:"dataframestack",level:2},{value:"DataFrame.drop_duplicates",id:"dataframedrop_duplicates",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's go over some functions and features that are useful for tidying data in Pandas."),(0,i.kt)("h2",{id:"multi-indexing"},"Multi-indexing"),(0,i.kt)("p",null,"Multi-indexing is a way to organize data in a table with multiple levels of row and column labels. This is useful for data that has multiple attributes for an identifier, such as a combination of 'Name' and \"Birthday\" to identify a person."),(0,i.kt)("p",null,"Multi-Indexing can be quite simple in Pandas if you stick to using it appropriately. You can usually form a multi-index by passing a list of column labels where you might be expected to provide a single one. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pd.DataFrame(\n    {\n        "Name": ["Alice", "Bob", "Alice"],\n        "Birthday": ["1990-01-01", "1991-01-01", "2001-01-01"],\n        "Favorite Color": ["Red", "Blue", "Green"],\n    }\n).set_index(["Name", "Birthday"])\n')),(0,i.kt)("p",null,"Multi-indexes are particularly useful when joining columns from different tables, as we'll see in the assignment."),(0,i.kt)("h2",{id:"dataframestack"},"DataFrame.stack"),(0,i.kt)("p",null,"Pandas has a ",(0,i.kt)("inlineCode",{parentName:"p"},"melt"),' method that can "melt" certain columns as previously described. However, I highly encourage the usage of ',(0,i.kt)("inlineCode",{parentName:"p"},"stack")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"melt")," for converting from wide form to long form--it will get you into the habit of using appropriate indexing, which gives you speed and readability."),(0,i.kt)("p",null,"Examine this diagram from the ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/pandas-docs/stable/user_guide/reshaping.html"},"Pandas ",(0,i.kt)("em",{parentName:"a"},"reshaping")," docs")," to understand how ",(0,i.kt)("inlineCode",{parentName:"p"},"stack")," works:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://pandas.pydata.org/pandas-docs/stable/_images/reshaping_stack.png",alt:null})),(0,i.kt)("p",null,"There are more nuanced differences between ",(0,i.kt)("inlineCode",{parentName:"p"},"stack")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"melt"),", but for our purposes, ",(0,i.kt)("inlineCode",{parentName:"p"},"stack")," is usually the better choice."),(0,i.kt)("h2",{id:"dataframedrop_duplicates"},"DataFrame.drop_duplicates"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"drop_duplicates")," method is useful for removing duplicate rows from a DataFrame. It takes a list of column names to use as the identifier for a row. For example, if we have a table of meetings we have scheduled with people identified with their names and birthdays, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"drop_duplicates")," to remove duplicate rows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pd.DataFrame(\n    {\n        "Name": ["Alice", "Bob", "Alice", "Alice"],\n        "Birthday": ["1990-01-01", "1991-01-01", "2001-01-01", "2001-01-01"],\n        "Meeting Date": ["2021-01-01", "2021-01-01", "2021-01-02", "2021-01-03"],\n    }\n).drop_duplicates(["Name", "Birthday"])\n')),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"What is a potentially harmful side effect of the operation above?")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Unlike in SQL databases, Pandas indexes are not required to be unique, but you should almost always try to make sure that they are.")))}u.isMDXComponent=!0}}]);