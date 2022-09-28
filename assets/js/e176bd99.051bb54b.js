"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[5274],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>d});var r=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(o),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||n;return o?r.createElement(f,i(i({ref:t},u),{},{components:o})):r.createElement(f,i({ref:t},u))}));function d(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8834:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(7462),a=(o(7294),o(3905));const n={title:"Project Specification",sidebar_position:1},i=void 0,l={unversionedId:"project/specs",id:"project/specs",title:"Project Specification",description:"Project Goals",source:"@site/docs/project/specs.md",sourceDirName:"project",slug:"/project/specs",permalink:"/project/specs",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/project/specs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Project Specification",sidebar_position:1},sidebar:"docSidebar",previous:{title:"Course Project",permalink:"/project"},next:{title:"Progress Report 1",permalink:"/project/progress_report_1"}},s={},p=[{value:"Project Goals",id:"project-goals",level:2},{value:"Scope of project",id:"scope-of-project",level:2},{value:"Sample final project rubric",id:"sample-final-project-rubric",level:2},{value:"Kaggle competition format",id:"kaggle-competition-format",level:2},{value:"Example problem statements from the previous semester",id:"example-problem-statements-from-the-previous-semester",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"project-goals"},"Project Goals"),(0,a.kt)("p",null,'The primary goal of this assignment is for your team to develop a data wrangling pipeline that addresses an interesting problem statement, including a curated data set. You will then use this data set and pipeline to demonstrate a preliminary/"benchmark" analysis of your data to answer your problem statement.'),(0,a.kt)("h2",{id:"scope-of-project"},"Scope of project"),(0,a.kt)("p",null,"The specifications above are somewhat intentionally vague so that teams have the freedom to explore a topic domain of their choosing"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Knowledge of a problem domain and motivation to study it will be one of the most helpful tools in your wrangling utility belt.")),(0,a.kt)("p",null,"The only hard requirement is that your project, including any data gathering, cleaning, and processing steps, should have 3 appropriately-scoped ",(0,a.kt)("em",{parentName:"p"},"features")," that implement material from at least 3 of our 8 course modules."),(0,a.kt)("p",null,"You should roughly define the complexity of each feature  by the amount of work expected from 1 person for the duration of the project. The actual distribution of work on your team is up to you and your teammates, but the sum of work should roughly equal 3 features. "),(0,a.kt)("p",null,"If you think work on a feature will take more or less than the equivalent of one person's full effort, you may count it as 1.5 or 0.5 features, etc, with proper justification in your progress reports. You should also mention which course modules these features are from."),(0,a.kt)("p",null,"Appropriately scoped features will be formalized via feedback on your progress reports, but are flexible and fluid through the course of the project as your approach to your problem develops."),(0,a.kt)("p",null,"An example project proposal with appropriately-scoped features can be found on the ",(0,a.kt)("a",{parentName:"p",href:"progress_report_1"},"Progress Report 1")," page."),(0,a.kt)("h2",{id:"sample-final-project-rubric"},"Sample final project rubric"),(0,a.kt)("p",null,"Here is a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1rVTQRFsJ18zJON_LUlQkTaPqqOx9npBtaQkTezaPnwE/edit?usp=sharing"},"link to a sample ",(0,a.kt)("em",{parentName:"a"},"final project")," rubric"),", slightly modified from last semester. This should not be considered an official rubric until designated as such on this page."),(0,a.kt)("h2",{id:"kaggle-competition-format"},"Kaggle competition format"),(0,a.kt)("p",null,"Is is suggested, but not required, that you use the Kaggle Community Competition guidelines to structure your project. This might be helpful for those who have a general topic in mind but are struggling coming up with a problem statement. The requirements to submit a Community Competition provide a great example of the types of measures you should take when sharing your data wrangling work with anyone."),(0,a.kt)("p",null,"These requirements can be found in Kaggle's documentation ",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com/community-competitions-setup-guide"},"here"),". It prompts you to follow these steps in building your project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a competition"),(0,a.kt)("li",{parentName:"ul"},"Choose a dataset"),(0,a.kt)("li",{parentName:"ul"},"Prepare the dataset"),(0,a.kt)("li",{parentName:"ul"},"Set up scoring"),(0,a.kt)("li",{parentName:"ul"},"Test your competition & set up a benchmark")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If applicable, your 'benchmark' solution should represent the bare minimum needed to get an analysis going. Your project should not focus on achieving a high benchmark, but creating a fluid data pipeline using your benchmark solution as an example.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In addition to simply having more structure, projects that follow this format will be eligible for extra credit at the end of the semester--one project will be chosen for 10 points extra credit and the highest competition submission for that project will receive another 10 points extra credit on their project grade. It will also be a cool portfolio piece for everyone on your team upon graduation.")),(0,a.kt)("h2",{id:"example-problem-statements-from-the-previous-semester"},"Example problem statements from the previous semester"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Which quarterbacks are the most overpaid?"),(0,a.kt)("li",{parentName:"ul"},"Which genres are more popular in US vs Non-US markets?"),(0,a.kt)("li",{parentName:"ul"},"Can we use Twitter sentiment analysis to predict stock market performance?"),(0,a.kt)("li",{parentName:"ul"},"How can we simulate and organize COVID-19 data from an agent-based model?")))}c.isMDXComponent=!0}}]);