"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[6080],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(o),d=n,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return o?r.createElement(h,i(i({ref:t},p),{},{components:o})):r.createElement(h,i({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},227:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={title:"Assignment",sidebar_position:1},i=void 0,s={unversionedId:"project/assignment",id:"project/assignment",title:"Assignment",description:"Project Goals",source:"@site/docs/project/assignment.md",sourceDirName:"project",slug:"/project/assignment",permalink:"/project/assignment",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/project/assignment.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Assignment",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Other Resources",permalink:"/syllabus/resources"},next:{title:"Progress Report 1",permalink:"/project/progress_report_1"}},l={},u=[{value:"Project Goals",id:"project-goals",level:2},{value:"Scope of project",id:"scope-of-project",level:2},{value:"Sample final project rubric",id:"sample-final-project-rubric",level:2},{value:"Kaggle competition format",id:"kaggle-competition-format",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"project-goals"},"Project Goals"),(0,n.kt)("p",null,'The primary goal of this assignment is for your team to develop a data wrangling pipeline that addresses an interesting problem statement, including a curated data set. You will then use this data set and pipeline to demonstrate a preliminary analysis of your data to answer your problem statement. You should use your data pipeline to provide a "benchmark" analysis of your problem statement.'),(0,n.kt)("h2",{id:"scope-of-project"},"Scope of project"),(0,n.kt)("p",null,"These specifications above are left intentionally vague so that teams have the freedom to explore a topic domain of their choosing; knowledge of a problem domain and motivation to study it will be one of your most helpful tools. The only hard requirements of the project are thus:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The construction of your data set and your data pipeline must cover, on average, 3 of our 8 course modules. The amount of work needed to cover each module topic should be the expected contribution from one individual team member. The actual distribution of the work is up to you. These requirements will be formalized via your progress reports, but are flexible and fluid through the course of the project. ")),(0,n.kt)("p",null,"Here are some examples of how you might scope your project."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Your project covers the modules "Normalization", "Cleaning", and "Dashboards". However, you realize that your data sources are already mostly normalized and the thus might only make up 1/2 the contribution from one of your team members. You may decide to add "Data Visualization" to your project to make up the difference.'),(0,n.kt)("li",{parentName:"ul"},'Your project covers the modules "APIs", "SQL", and "Dashboards". Instead of assigning one module topic per person, you decide that 1 of you will work on building your API client and the other 2 will split the work on SQL and Dashboards. ')),(0,n.kt)("p",null,"These are just examples, and feedback will be provided on your progress reports to help you adjust your scope as needed."),(0,n.kt)("h2",{id:"sample-final-project-rubric"},"Sample final project rubric"),(0,n.kt)("p",null,"Here is a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1rVTQRFsJ18zJON_LUlQkTaPqqOx9npBtaQkTezaPnwE/edit?usp=sharing"},"link to a sample ",(0,n.kt)("em",{parentName:"a"},"final project")," rubric"),", slightly modified from last semester. This should not be considered an official rubric until designated as such on this page."),(0,n.kt)("h2",{id:"kaggle-competition-format"},"Kaggle competition format"),(0,n.kt)("p",null,"Is is suggested, but not required, that you use the Kaggle Community Competition guidelines to structure your project. The requirements to submit a Community Competition are good measures you may take to share your data wrangling work with anyone."),(0,n.kt)("p",null,"These requirements can be found in Kaggle's documentation ",(0,n.kt)("a",{parentName:"p",href:"https://www.kaggle.com/community-competitions-setup-guide"},"here"),". It prompts you to follow these steps in building your project:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a competition"),(0,n.kt)("li",{parentName:"ul"},"Choose a dataset"),(0,n.kt)("li",{parentName:"ul"},"Prepare the dataset"),(0,n.kt)("li",{parentName:"ul"},"Set up scoring"),(0,n.kt)("li",{parentName:"ul"},"Test your competition & set up a benchmark")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If applicable, your 'benchmark' solution should represent the bare minimum needed to get an analysis going. Your project should not focus on achieving a high benchmark, but creating a fluid data pipleine using your benchmark solution as an example.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In addition to simply having more structure, projects that follow this format will be eligible for extra credit at the end of the semester--one project will be chosen for 10 points extra credit and the highest competition submission for that project will receive another 10 points extra credit on their project grade. It will also be a cool portfolio piece for your team upon graduation.")))}c.isMDXComponent=!0}}]);