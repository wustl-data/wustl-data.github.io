"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[8918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=s.createContext({}),u=function(e){var t=s.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return s.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?s.createElement(m,a(a({ref:t},l),{},{components:n})):s.createElement(m,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(7462),o=(n(7294),n(3905));const r={title:"Classes vs Functions",sidebar_position:3},a=void 0,i={unversionedId:"modules/python-pandas/Background and Exercises/Python/classes-v-functions",id:"modules/python-pandas/Background and Exercises/Python/classes-v-functions",title:"Classes vs Functions",description:'You may be familiar with classes in other languages as part of an object-oriented approach. Python has classes as well, but we will use them sparingly in this course. Because "everything is an object" in Python, we can accomplish many of the same object-oriented principles in more concise ways. The mechanisms behind this philosophy are somewhat outside the scope of this course (link for the curious), but for now just keep in mind that it\'s often better to organize your code with modules (files) and functions rather than classes. That being said, you will frequently encounter classes in third-party packages (such as Pandas--more on this in a moment).',source:"@site/docs/modules/python-pandas/Background and Exercises/Python/classes-v-functions.md",sourceDirName:"modules/python-pandas/Background and Exercises/Python",slug:"/modules/python-pandas/Background and Exercises/Python/classes-v-functions",permalink:"/modules/python-pandas/Background and Exercises/Python/classes-v-functions",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/python-pandas/Background and Exercises/Python/classes-v-functions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Classes vs Functions",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Imports, Packages, and Modules",permalink:"/modules/python-pandas/Background and Exercises/Python/imports-packages-modules"},next:{title:"List Comprehensions",permalink:"/modules/python-pandas/Background and Exercises/Python/list-comprehensions"}},c={},u=[],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'You may be familiar with classes in other languages as part of an object-oriented approach. Python has classes as well, but we will use them sparingly in this course. Because "everything is an object" in Python, we can accomplish many of the same object-oriented principles in more concise ways. The mechanisms behind this philosophy are somewhat outside the scope of this course (',(0,o.kt)("a",{parentName:"p",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjApMiA6_X5AhVcoWoFHQFIDhgQyCl6BAgCEAM&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Do9pEzgHorH0&usg=AOvVaw0q-NqGjckLD9XmCi9I1x_a"},"link for the curious"),"), but for now just keep in mind that it's often better to organize your code with modules (files) and functions rather than classes. That being said, you will frequently encounter classes in third-party packages (such as Pandas--more on this in a moment)."))}p.isMDXComponent=!0}}]);