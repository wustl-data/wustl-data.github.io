"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[8841],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return o?n.createElement(h,a(a({ref:t},l),{},{components:o})):n.createElement(h,a({ref:t},l))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},9644:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={title:"Documentation",sidebar_position:4},a=void 0,s={unversionedId:"project/doc_guide",id:"project/doc_guide",title:"Documentation",description:"Documenting your project",source:"@site/docs/project/doc_guide.md",sourceDirName:"project",slug:"/project/doc_guide",permalink:"/project/doc_guide",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/project/doc_guide.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Documentation",sidebar_position:4},sidebar:"docSidebar",previous:{title:"Progress Report 2",permalink:"/project/progress_report_2"}},c={},u=[{value:"Documenting your project",id:"documenting-your-project",level:2},{value:"MkDocs vs Sphinx",id:"mkdocs-vs-sphinx",level:3},{value:"Adding MkDocs to your project",id:"adding-mkdocs-to-your-project",level:3},{value:"Theming your documentation",id:"theming-your-documentation",level:3},{value:"Using an API documentation generator",id:"using-an-api-documentation-generator",level:3},{value:"Documentation checklist",id:"documentation-checklist",level:3},{value:"Optional: Hosting your documentation",id:"optional-hosting-your-documentation",level:3}],l={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"documenting-your-project"},"Documenting your project"),(0,r.kt)("p",null,"Proper documentation is worth 10 points on your final project grade. "),(0,r.kt)("p",null,"In addition to making sure your documentation is clear and descriptive, I expect that the documentation is professionally arranged/presented. Mostly, this means that you should use a ",(0,r.kt)("em",{parentName:"p"},"static site generator")," to convert a collection of text files (usually Markdown files) into a fully styled website."),(0,r.kt)("h3",{id:"mkdocs-vs-sphinx"},"MkDocs vs Sphinx"),(0,r.kt)("p",null,"There are two main static site generators that are usually used for Python projects. The first, Sphinx, is perhaps the most commonly used for many of the larger open-source Python projects out there. It uses the ReStructuredText (.rst) format for its documentation. The second, MkDocs, is a more lightweight alternative that uses Markdown (.md) for its documentation. It contains a few less features by default than Sphinx, but it is much easier to get started with in my opinion."),(0,r.kt)("h3",{id:"adding-mkdocs-to-your-project"},"Adding MkDocs to your project"),(0,r.kt)("p",null,"If you are using Poetry, you can add MkDocs to your project by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"poetry add mkdocs\n")),(0,r.kt)("p",null,"This will add MkDocs to your project's dependencies. "),(0,r.kt)("p",null,"Follow the MkDocs ",(0,r.kt)("a",{parentName:"p",href:"https://www.mkdocs.org/getting-started/"},"Getting Started"),' guide to integrate MkDocs into your project. These instructions, like many tutorials, show you how to "bootstrap" a new example MkDocs project from scratch. However, some of you may have already started your project and would like to add MkDocs to your existing codebase. If this is the case, I suggest thinking carefully about the instructions on the Getting Started page and translating the steps to your existing project immediately. If you need to, examine the ',(0,r.kt)("a",{parentName:"p",href:"https://www.mkdocs.org/user-guide/configuration/"},"configuration")," page in the MkDocs documentation to see what options you can use to customize your project's documentation."),(0,r.kt)("h3",{id:"theming-your-documentation"},"Theming your documentation"),(0,r.kt)("p",null,"Add a custom theme to your MkDocs project to give your project some original flair. There are some prepackaged themes on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mkdocs/mkdocs/wiki/MkDocs-Themes"},"MkDocs Community Wiki"),". Some themes provide a more distinct look out of the box. Others are more minimalistic and require more customization to get the look you want. I usually prefer using ",(0,r.kt)("inlineCode",{parentName:"p"},"mkdocs-material")," for my projects and tweaking some basic settings, but you can use whatever theme you like."),(0,r.kt)("h3",{id:"using-an-api-documentation-generator"},"Using an API documentation generator"),(0,r.kt)("p",null,"While plain-english documentation of your project is usually more important than having a complete API reference, it can still be helpful to provide documentation that outlines the purpose of each function in your project and what arguments it takes. This is especially helpful in Data Science projects where your users may be looking to use your project as a library in their own code."),(0,r.kt)("admonition",{title:"What is an API?",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"In this context, an API is a set of functions and methods that allow you to interact with a software library (different from a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Web_API"},"web API"),', which people commonly describe as an "API"). It describes the "style" that people need to understand in order to execute your code effectively. For example, the ',(0,r.kt)("inlineCode",{parentName:"p"},"pandas")," library has an API that allows you to create and manipulate DataFrames. You are already familiar with the ",(0,r.kt)("inlineCode",{parentName:"p"},"pandas")," API documentation when you look up how to use a function. You should provide similar details for users seeking to understand or utilize your project.")),(0,r.kt)("p",null,"Many documentation frameworks provide the ability to generate API documentation from ",(0,r.kt)("a",{parentName:"p",href:"https://www.datacamp.com/tutorial/docstrings-python"},"docstrings")," in your module code. Sphinx comes with a built-in API documentation generator, but MkDocs requires a third-party plugin, of which there are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mkdocs/mkdocs/wiki/MkDocs-Plugins#api-documentation-building"},"many choices"),". Choosing one mostly depends on how you want to format your docstrings but I recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://mkdocstrings.github.io/"},"mkdocstrings")),(0,r.kt)("h3",{id:"documentation-checklist"},"Documentation checklist"),(0,r.kt)("p",null,"Please include the following sections in your documentation as appropriate:"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Installation instructions"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Getting started guide"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Examples"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","BDD-style feature documentation"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","API documentation"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Contributing guide")),(0,r.kt)("p",null,"You are welcome to incorporate notebooks into your documentation for your Getting Started guide and Examples. Your contributing guide should include instructions for how to set up your project for development and how to run the tests if you have any."),(0,r.kt)("h3",{id:"optional-hosting-your-documentation"},"Optional: Hosting your documentation"),(0,r.kt)("p",null,"If you would like to host your documentation on the web, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://pages.github.com/"},"GitHub Pages")," or ",(0,r.kt)("a",{parentName:"p",href:"https://readthedocs.org/"},"Read the Docs")," to host your documentation for free (public repos only). Both of these services have instructions for how to integrate with MkDocs."))}p.isMDXComponent=!0}}]);