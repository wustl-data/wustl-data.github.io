"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[2256],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||o;return n?a.createElement(h,l(l({ref:e},m),{},{components:n})):a.createElement(h,l({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7277:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"Accurate representations",sidebar_position:4},l=void 0,i={unversionedId:"modules/cleaning/Background/typos",id:"modules/cleaning/Background/typos",title:"Accurate representations",description:"Typos and Synonyms",source:"@site/docs/modules/cleaning/Background/typos.md",sourceDirName:"modules/cleaning/Background",slug:"/modules/cleaning/Background/typos",permalink:"/modules/cleaning/Background/typos",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/cleaning/Background/typos.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Accurate representations",sidebar_position:4},sidebar:"docSidebar",previous:{title:"Natural constraints",permalink:"/modules/cleaning/Background/constraints"},next:{title:"Missing Data",permalink:"/modules/cleaning/Background/missing"}},s={},d=[{value:"Typos and Synonyms",id:"typos-and-synonyms",level:3}],m={toc:d};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"typos-and-synonyms"},"Typos and Synonyms"),(0,r.kt)("p",null,'When working with string data, it might seem obvious that we want to handle any typos or misspellings in the data. After all, we do want our data to be "correct".'),(0,r.kt)("admonition",{title:"Keep In Mind",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'What is considered "correct" might depend on what\'s consuming the data.')),(0,r.kt)("p",null,"However, the benefits of correcting typos and misspellings go much deeper than that. To illustrate why, let's look at some address data, which is notoriously ",(0,r.kt)("a",{parentName:"p",href:"https://pe.usps.com/text/pub28/welcome.htm"},"heterogenous")," and therefore ",(0,r.kt)("a",{parentName:"p",href:"https://www.mjt.me.uk/posts/falsehoods-programmers-believe-about-addresses/"},"difficult to parse"),". Additionally, the data is often entered by hand, which means that there are many opportunities for typos and misspellings."),(0,r.kt)("p",null,"For our example, let's say we're collecting some field data on a door to door campaign. Our brave field volunteers are well meaning, but aren't exactly trained in the art of data science, and your campaign isn't exactly flush with cash, so your volunteers are given pen and paper as they go door to door, which are then transcribed into a word doc by a different volunteer who can barely read his handwriting, etc. Here's what we get:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123 Main St"),(0,r.kt)("td",{parentName:"tr",align:null},"Jon Smth"),(0,r.kt)("td",{parentName:"tr",align:null},"1230")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"456 Wrangler Ln"),(0,r.kt)("td",{parentName:"tr",align:null},"Jane Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"1500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123 main street"),(0,r.kt)("td",{parentName:"tr",align:null},"J Smith"),(0,r.kt)("td",{parentName:"tr",align:null},"noon")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"456 Wrangler Ln"),(0,r.kt)("td",{parentName:"tr",align:null},"Jane Elizabeth Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"1:00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123A S Main St."),(0,r.kt)("td",{parentName:"tr",align:null},"John Smith"),(0,r.kt)("td",{parentName:"tr",align:null},"4/3c")))),(0,r.kt)("p",null,'As far as volunteer-collected data goes, we could have done a lot worse. At least we, as humans, can make some sense of it: we knocked on the door of two people named Jane and John a few times this week at various times in the afternoon. However, if we were to try to parse this data programmatically, we would run into some problems. For example, we might want to know how many times we knocked on the door of each person, but we can\'t do that if we don\'t know that "Jane Doe" and "Jane Elizabeth Doe" are the same person, or that "Jhn Smith" and "John Smith" are the same person, or even if "John Smith" and "John Smith" are the same person. We might also want to know how many times we knocked on the door of each address, but we can\'t do that if we don\'t know that "123 Main St" and "123 main street" are the same address. We might want know what time we knocked on the door of each person, but we can\'t do that if we don\'t know that "1230" is 30 minutes past "noon".'),(0,r.kt)("p",null,"At least with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time")," column, we might be able to rely on some super smart time parsing library to figure out what time it was. However, we can't always rely on accurate ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," parsing, because there are so many ways to write an address. This small example data set isn't so bad, but we we get to thousands or millions of rows, it becomes effectively impossible to parse the addresses without some kind of manual intervention or expenive geocoding service. However, we can still massively improve the quality of our data set by going by some selected set of rules for how we want to represent addresses, and then cleaning the data to match those rules."),(0,r.kt)("p",null,"This section's homework assignment will have you perform this standardization by transforming abbreviations, capitalizations, and punctuations into a consistent format."),(0,r.kt)("p",null,"Once the data is clean, it might look like this:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Time"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123 MAIN ST"),(0,r.kt)("td",{parentName:"tr",align:null},"JOHN SMITH"),(0,r.kt)("td",{parentName:"tr",align:null},"12:30 PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"456 WRANGLER LN"),(0,r.kt)("td",{parentName:"tr",align:null},"JANE DOE"),(0,r.kt)("td",{parentName:"tr",align:null},"3:00 PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123 MAIN ST"),(0,r.kt)("td",{parentName:"tr",align:null},"JOHN SMITH"),(0,r.kt)("td",{parentName:"tr",align:null},"12:00 PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"456 WRANGLER LN"),(0,r.kt)("td",{parentName:"tr",align:null},"JANE DOE"),(0,r.kt)("td",{parentName:"tr",align:null},"1:00 PM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123 MAIN ST"),(0,r.kt)("td",{parentName:"tr",align:null},"JOHN SMITH"),(0,r.kt)("td",{parentName:"tr",align:null},"3:00 PM")))),(0,r.kt)("p",null,"Now our program can much more easily tell us some basic statistics of the data by grouping on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," columns: we knocked on the door of John Smith at 123 MAIN ST three times, and Jane Doe at 456 WRANGLER LN two times."))}p.isMDXComponent=!0}}]);