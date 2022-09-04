"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(7294),a=r(6010);const n="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(n,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var o=r(7462),a=r(7294),n=r(6010),i=r(2389),l=r(7392),s=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:i,defaultValue:d,values:m,groupId:h,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:r,attributes:o}}=e;return{value:t,label:r,attributes:o}})),v=(0,l.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[j,x]=(0,a.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==j&&f.some((t=>t.value===e))&&x(e)}const P=e=>{const t=e.currentTarget,r=E.indexOf(t),o=f[r].value;o!==j&&(O(t),x(o),null!=h&&w(h,String(o)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,n.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:r,attributes:i}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:P,onClick:P},i,{className:(0,n.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":j===t})}),r??t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function m(e){const t=(0,i.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},5817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=r(7462),a=(r(7294),r(3905)),n=r(5488),i=r(5162);const l={title:"Grade Policy",sidebar_position:2},s=void 0,u={unversionedId:"syllabus/grades",id:"syllabus/grades",title:"Grade Policy",description:"Grading Breakdown",source:"@site/docs/syllabus/grades.mdx",sourceDirName:"syllabus",slug:"/syllabus/grades",permalink:"/syllabus/grades",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syllabus/grades.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Grade Policy",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Calendar",permalink:"/syllabus/calendar"},next:{title:"Academic Integrity",permalink:"/syllabus/integrity"}},c={},p=[{value:"Grading Breakdown",id:"grading-breakdown",level:2},{value:"Homeworks - 50%",id:"homeworks---50",level:3},{value:"Project - 50%",id:"project---50",level:3},{value:"<strong>20% - Progress reports</strong>",id:"20---progress-reports",level:2},{value:"<strong>30% - Project</strong>",id:"30---project",level:2},{value:"<strong>20% - Progress reports</strong>",id:"20---progress-reports-1",level:2},{value:"<strong>30% - Project</strong>",id:"30---project-1",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"grading-breakdown"},"Grading Breakdown"),(0,a.kt)("h3",{id:"homeworks---50"},"Homeworks - 50%"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"7 homeworks planned (making them worth about 7 points each)"),(0,a.kt)("li",{parentName:"ul"},"Most, if not all, homeworks will be autograded."),(0,a.kt)("li",{parentName:"ul"},"The autograder will accept unlimited submissions up to the deadline.")),(0,a.kt)("h3",{id:"project---50"},"Project - 50%"),(0,a.kt)("p",null,"Select the appropriate tab based on course section."),(0,a.kt)(n.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"cse",label:"CSE 314",mdxType:"TabItem"},(0,a.kt)("p",null,"Each group will be expected to curate a data set and establish analysis techniques in the form of a ",(0,a.kt)("a",{parentName:"p",href:"https://www.kaggle.com/community-competitions-setup-guide"},"Kaggle Community Competition"),". Actual submission to the Kaggle platform is advised but not required. Requirements for the project may build upon those provided by Kaggle to tailor the content for this course."),(0,a.kt)("h2",{id:"20---progress-reports"},(0,a.kt)("strong",{parentName:"h2"},"20% - Progress reports")),(0,a.kt)("p",null,"Each group will be expected to submit two progress reports. Guidelines for the content of the reports will be provided, but these are expected to be brief check-ins (1 or 2 pages) that will allow me to help you make sure your project is in scope, that work is being distributed and executed equitably among the group, and provide feedback on the direction of the project."),(0,a.kt)("h2",{id:"30---project"},(0,a.kt)("strong",{parentName:"h2"},"30% - Project")),(0,a.kt)("p",null,"A rubric will be provided early in the semester for evaluation criteria on the project, but will generally encompass things like documentation, data/code cleanliness, speed, and demonstration of course concepts. Each group will be expected to give a brief presentation towards the end of the semester providing the context for their work. Your work will be graded in the context of the presentation and your submitted code.")),(0,a.kt)(i.Z,{value:"dcds",label:"DCDS 510",mdxType:"TabItem"},(0,a.kt)("p",null,"DCDS students will present an individual project tailored towards personal research. Students are expected to scope their own projects as long as the work establishes an data management approach towards a research question. Examples of in-scope projects could look like a data dashboard, a data processing technique, or an aggregated data set from multiple sources. "),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},'The "research question" itself doesnt have to be particularly groundbreaking, but is meant to ground your work in a creative and exploratory mindset. Here\'s a simple example, borrowed from some of my previous research: '),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"What can ",(0,a.kt)("inlineCode",{parentName:"p"},"data simulation")," reveal about ",(0,a.kt)("inlineCode",{parentName:"p"},"two-alternative task models"),"?")),(0,a.kt)("p",{parentName:"admonition"},"Replace the highlighted terms with your own technique and domain for a good starting point in formulating your project. ")),(0,a.kt)("p",null,"It's great if you have a more specific application of your project in mind, but it's also great if you want to answer generic questions about a new data processing technique or data domain. Feel free to use projects that use actual data from your lab with your PI's permission, ensuring any appropriate cautions to prevent unethically sharing intellectual property or personal information are taken. Talk to the instructor if you have any questions about this."),(0,a.kt)("h2",{id:"20---progress-reports-1"},(0,a.kt)("strong",{parentName:"h2"},"20% - Progress reports")),(0,a.kt)("p",null,"Each student will be expected to submit two progress reports. Guidelines for the content of the reports will be provided, but these are expected to be brief check-ins (1 or 2 pages) that will allow me to help you make sure your project is in scope and provide feedback on the direction of the project."),(0,a.kt)("h2",{id:"30---project-1"},(0,a.kt)("strong",{parentName:"h2"},"30% - Project")),(0,a.kt)("p",null,"A rubric will be provided early in the semester for evaluation criteria on the project, but will generally encompass things like documentation, data/code cleanliness, speed, and demonstration of course concepts. Each student will be expected to give a brief presentation towards the end of the semester providing the context for their work. Your work will be graded in the context of the presentation and your submitted code."))))}m.isMDXComponent=!0}}]);