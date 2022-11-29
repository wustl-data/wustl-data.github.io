"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[996],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7475:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"Corrections/Clarifications",sidebar_position:2},i=void 0,s={unversionedId:"modules/apis/corrections",id:"modules/apis/corrections",title:"Corrections/Clarifications",description:"1. In an early version of the starter code, the type hint for the geos argument to get was incorrectly given as:",source:"@site/docs/modules/apis/corrections.md",sourceDirName:"modules/apis",slug:"/modules/apis/corrections",permalink:"/modules/apis/corrections",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/apis/corrections.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Corrections/Clarifications",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Assignment 4",permalink:"/modules/testing/Assignment 4"},next:{title:"Assignment 6",permalink:"/modules/apis/assignment"}},l={},p=[],c={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In an early version of the starter code, the type hint for the ",(0,o.kt)("inlineCode",{parentName:"p"},"geos")," argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," was incorrectly given as: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dict[str, dict[str, list[str]]],\n")),(0,o.kt)("p",{parentName:"li"},"The type hint should be:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dict[str, list[str]],\n")),(0,o.kt)("p",{parentName:"li"},"It was also incorrectly listed as ",(0,o.kt)("inlineCode",{parentName:"p"},"geographies")," in the docstring. You may see an updated version in your starter code if you cloned the assignment more recently.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Python was prematurely updated to version 3.11 in some versions of the starter code and needed to be reverted to 3.10 in order to be autograder-compatible. As of the time of this writing, all submissions running into the error have been fixed. Some students may still see the error in their starter code if they cloned the assignment before the fix was applied. Here are the steps I took to fix the error:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},".devcontainer/Dockerfile"),", change the Python version to 3.10 in line 1"),(0,o.kt)("li",{parentName:"ol"},"In ",(0,o.kt)("inlineCode",{parentName:"li"},"pyproject.toml"),", in the ",(0,o.kt)("inlineCode",{parentName:"li"},"[tool.poetry.dependencies]")," section, change line that defines the Python version to ",(0,o.kt)("inlineCode",{parentName:"li"},'python = ">=3.10,<3.12"'),"."),(0,o.kt)("li",{parentName:"ol"},"Open the VS Code command palette and search for ",(0,o.kt)("inlineCode",{parentName:"li"},"rebuild"),". Select the appropriate option to rebuild the devcontainer with the new Python version."),(0,o.kt)("li",{parentName:"ol"},"In the new devcontainer, run ",(0,o.kt)("inlineCode",{parentName:"li"},"poetry update")," to update the virtual environment with the new Python version."),(0,o.kt)("li",{parentName:"ol"},"Commit your code"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Some other packages were also updated in the starter code to fix some mypy incompatibility issues. If you're interested in using the type checking, ask about an updated pyproject.toml file, or keep an eye on this space.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Be aware that the autograder is testing for more example cases than the ones provided in the starter tests. If you are passing your tests locally but failing your autograder's assertions, you may consider adding more test cases as appropriate. You should at least be able to see which tests are failing, if your autograder fails completely, please open a post on Piazza."))))}d.isMDXComponent=!0}}]);