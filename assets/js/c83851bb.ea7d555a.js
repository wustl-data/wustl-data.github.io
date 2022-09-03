"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[91],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3079:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={title:"Slicing and Dicing",sidebar_position:3},s=void 0,i={unversionedId:"modules/python-pandas/Background and Exercises/pandas/slicing-dicing",id:"modules/python-pandas/Background and Exercises/pandas/slicing-dicing",title:"Slicing and Dicing",description:"Hopefully this knowledge of Pandas' underlying structure can demystify the syntax for accessing data somewhat. Let's see what we mean.",source:"@site/docs/modules/python-pandas/Background and Exercises/pandas/slicing-dicing.md",sourceDirName:"modules/python-pandas/Background and Exercises/pandas",slug:"/modules/python-pandas/Background and Exercises/pandas/slicing-dicing",permalink:"/modules/python-pandas/Background and Exercises/pandas/slicing-dicing",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/python-pandas/Background and Exercises/pandas/slicing-dicing.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Slicing and Dicing",sidebar_position:3},sidebar:"docSidebar",previous:{title:"DataFrames",permalink:"/modules/python-pandas/Background and Exercises/pandas/dataframes"},next:{title:"Resources",permalink:"/resources"}},l={},c=[],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Hopefully this knowledge of Pandas' underlying structure can demystify the syntax for accessing data somewhat. Let's see what we mean."),(0,r.kt)("p",null,"Most commonly, you will want to access a particular column of a DataFrame. The syntax for this in Pandas is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df['column_name']\n")),(0,r.kt)("p",null,"where ",(0,r.kt)("inlineCode",{parentName:"p"},"df")," is the name of the DataFrame and ",(0,r.kt)("inlineCode",{parentName:"p"},"column_name")," is the name of the column you want to access. For example, if we wanted to access the ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," column of the ",(0,r.kt)("inlineCode",{parentName:"p"},"measures")," DataFrame, we would write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"measures['height']\n")),(0,r.kt)("p",null,"This returns a Series named ",(0,r.kt)("em",{parentName:"p"},"height")," with the height measurements and retains the index labels from the dataframe! The bracket syntax we use to access a series from a DataFrame mirrors the syntax we would use if we wanted to access the list of height values from the dictionary that we initialized the DataFrame with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"measures_dict ={\n    'height': [1.5, 1.6, 1.7, 1.8, 1.9],\n    'weight': [60, 65, 70, 75, 80]\n}\nmeasures_dict['height']\n")),(0,r.kt)("p",null,"So what if we want only certain columns, or only certain rows? If you're reaching for ",(0,r.kt)("inlineCode",{parentName:"p"},".loc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".iloc")," in your holsters, just hold your horses, wrangler. First let's look at boolean indexing."),(0,r.kt)("p",null,"Boolean indexing uses a ",(0,r.kt)("em",{parentName:"p"},"boolean statement")," to determine which rows to filter from the frame. For example, if we wanted to filter the ",(0,r.kt)("inlineCode",{parentName:"p"},"measures")," DataFrame to only include people who are taller than 1.7 meters, we could write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"measures[measures['height'] > 1.7]\n")),(0,r.kt)("p",null,"When you're getting started with Pandas syntax, all of the brackets and repetition can get a little nauseating. But it's important to remember that the brackets are just a way to access the data, and the boolean statement is just a way to filter the data. So, if we wanted to filter the ",(0,r.kt)("inlineCode",{parentName:"p"},"measures")," DataFrame to only include people who are taller than 1.7 meters and weigh less than 75 kilograms, we could write:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"measures[(measures['height'] > 1.7) & (measures['weight'] < 75)]\n")),(0,r.kt)("p",null,"That's how Pandas selects rows, but what about columns?"),(0,r.kt)("p",null,"Here is the syntax for selecting multiple columns from a dataframe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"df[['column1', 'column3', 'column4']]\n")),(0,r.kt)("p",null,"It's easy enough to conceptualize the outer brackets as our 'selector' and the inner brackets as indicating the ",(0,r.kt)("em",{parentName:"p"},"list")," of column names. But let's think carefully about this one. Let's think again about our ",(0,r.kt)("inlineCode",{parentName:"p"},"measures_dict")," we used to initialize the ",(0,r.kt)("inlineCode",{parentName:"p"},"measures")," DataFrame. Can we access our data in the same way with the dictionary? Let's try it (with an ",(0,r.kt)("inlineCode",{parentName:"p"},"age")," column added for clarity):"),(0,r.kt)("iframe",{width:"100%",height:"600px",src:"https://replit.com/team/data-wrangling/Accessing-multiple-columns"}),(0,r.kt)("p",null,"Ultimately, it makes more sense that this syntax works in Pandas when we consider that Pandas actually stores the columns as its own index, just on a different axis. Here we start to see some of the power that Pandas brings to the table under the hood with some of its 'syntactic sugar'. It is these sorts of connections and discoveries that encourage me to keep my Pandas toolbox simple and lean. Things can get pretty messy when you take too much advantage of Pandas' overly-permissive API."),(0,r.kt)("p",null,"Remember:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"There should be one-- and preferably only one --obvious way to do it."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For more on this approach to Pandas syntax, check out the YouTube series ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PLgJhDSE2ZLxaENZWWF_VOUa5886KiUd15"},"An Opinionated Guide to Pandas"),", also linked in the Resources section.")))}d.isMDXComponent=!0}}]);