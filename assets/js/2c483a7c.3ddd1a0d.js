"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[8206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,g=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return a?n.createElement(g,o(o({ref:t},d),{},{components:a})):n.createElement(g,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"Missing Data",sidebar_position:5},o=void 0,l={unversionedId:"modules/cleaning/Background/missing",id:"modules/cleaning/Background/missing",title:"Missing Data",description:"We usually want to strive for a good complete data set, but more often than not we will be dealing with missing or corrupted data for one or many attributes of an observation.",source:"@site/docs/modules/cleaning/Background/missing.md",sourceDirName:"modules/cleaning/Background",slug:"/modules/cleaning/Background/missing",permalink:"/modules/cleaning/Background/missing",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/cleaning/Background/missing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Missing Data",sidebar_position:5},sidebar:"docSidebar",previous:{title:"Accurate representations",permalink:"/modules/cleaning/Background/typos"},next:{title:"Evaluating data cleanliness",permalink:"/modules/cleaning/Background/evaluating"}},s={},u=[{value:"True defaults",id:"true-defaults",level:2}],d={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We usually want to strive for a good complete data set, but more often than not we will be dealing with missing or corrupted data for one or many attributes of an observation. "),(0,r.kt)("p",null,'Usually in a data wrangling context, "missing" data is data that is missing for a particular observation. For example, if we are looking at a data set of people and their heights, we might have a data set that looks like this:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Height"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alice"),(0,r.kt)("td",{parentName:"tr",align:null},"5'4\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bob"),(0,r.kt)("td",{parentName:"tr",align:null},"6'1\"")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Charlie"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dave"),(0,r.kt)("td",{parentName:"tr",align:null},"6'2\"")))),(0,r.kt)("p",null,"Obviously, we're missing the height for Charlie here. The way to proceed here is probably straightforward for this example; if we want to know the group's average height, we'd just leave Charlie out of the calculation."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Be careful when replacing missing values with a constant value. In a different context, it might be tempting to replace a missing value with ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", but doing so might throw off some calculations. Conversely, it's important to identify when a data set you have inherited contains this kind of data collection error and correct it. It's more common than you'd think.")),(0,r.kt)("p",null,"In other examples, it might not be so clear what to do with missing data. For example, if we are looking at a data set of people and their heights and weights, we might have a data set that looks like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Height"),(0,r.kt)("th",{parentName:"tr",align:null},"Weight"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alice"),(0,r.kt)("td",{parentName:"tr",align:null},"5'4\""),(0,r.kt)("td",{parentName:"tr",align:null},"120 lbs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bob"),(0,r.kt)("td",{parentName:"tr",align:null},"6'1\""),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Charlie"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"140 lbs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dave"),(0,r.kt)("td",{parentName:"tr",align:null},"6'2\""),(0,r.kt)("td",{parentName:"tr",align:null},"150 lbs")))),(0,r.kt)("p",null,"We won't get too deep in the mathematics, but hopefully the point here is intuitive. Let's imagine we're trying to model the relationship between height and weight. Obviously this is not a straight line, but you can imagine it being something like that. Since we observe a relationship between the other data points, we can probably make a reasonable guess about what Bob's weight is. We can also probably make a reasonable guess about what Charlie's height is. Filling in missing data with estimated values is called ",(0,r.kt)("em",{parentName:"p"},"interpolation"),". Whether or not you may want to actually do this depends on the problem's context, but the point is that we can make a reasonable guess about what the missing data is, and we can use that to make a more complete or illustrative data set."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"What step would we need to take before we would be able to make these interpolations?")),(0,r.kt)("h2",{id:"true-defaults"},"True defaults"),(0,r.kt)("p",null,'Despite our warning earlier about filling in missing values with a constant, sometimes it makes sense to do so if we can surmise some sort of true default value. In most instances, the need to do this will be remedied by adequate data collection practices: if "missing" data has a true default, it should be collected as such. For example, maybe you are administering an online quiz and you want to count wrong (provided) answers and non-answers alike to be marked incorrect in the evaluation. If we are truly confident that we will not need to differentiate between incorrect answers and non-answers, our software can simply record them all as "wrong". However, maybe the person programming the quiz is not confident that this is the case, and so they record the non-answers as ',(0,r.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"NaN")," or whatever the language's equivalent is. In this case, we can fill in the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values with ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or whatever our analysis needs to know that the non-answers should be counted incorrectly."))}m.isMDXComponent=!0}}]);