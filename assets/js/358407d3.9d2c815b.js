"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[957],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(r),g=n,m=h["".concat(s,".").concat(g)]||h[g]||u[g]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},382:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const i={title:"Branches",sidebar_position:5},o=void 0,c={unversionedId:"resources/git-github/git/branches",id:"resources/git-github/git/branches",title:"Branches",description:"To get an idea of the purposes of branches, let's take a look at a git graph. A git graph simply represents the history of a repository, representing each commit as a node in a directed acyclic graph (DAG).",source:"@site/docs/resources/git-github/git/branches.md",sourceDirName:"resources/git-github/git",slug:"/resources/git-github/git/branches",permalink:"/resources/git-github/git/branches",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/resources/git-github/git/branches.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Branches",sidebar_position:5},sidebar:"docSidebar",previous:{title:"git status",permalink:"/resources/git-github/git/git-status"},next:{title:"Merging",permalink:"/resources/git-github/git/merging"}},s={},l=[{value:"Creating a Branch",id:"creating-a-branch",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To get an idea of the purposes of branches, let's take a look at a git graph. A git graph simply represents the history of a repository, representing each commit as a node in a directed acyclic graph (DAG)."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"source: ",(0,n.kt)("a",{parentName:"em",href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow"},"Gitflow Workflow")," by Atlassian")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://wac-cdn.atlassian.com/dam/jcr:8f00f1a4-ef2d-498a-a2c6-8020bb97902f/03%20Release%20branches.svg?cdnVersion=506",alt:"Git Flow DAG"})),(0,n.kt)("p",null,"I will go over this workflow in more detail in lecture, but for now try to visualize how this organization can help us work together on code in teams and how it can help us manage our own code."),(0,n.kt)("h2",{id:"creating-a-branch"},"Creating a Branch"),(0,n.kt)("p",null,"To create a branch, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"git branch")," command. This command takes a single argument, the name of the branch you want to create. Let's create a branch called ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-1"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git branch feature-1\n")),(0,n.kt)("p",null,"This command will create a branch called ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-1")," but will not switch to it. To switch to the branch, we use the ",(0,n.kt)("inlineCode",{parentName:"p"},"git checkout")," command. This command takes a single argument, the name of the branch you want to switch to. Let's switch to the ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-1")," branch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout feature-1\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"A shortcut for creating and switching to a branch is to use the ",(0,n.kt)("inlineCode",{parentName:"p"},"-b")," flag with the ",(0,n.kt)("inlineCode",{parentName:"p"},"git checkout")," command. This will create a branch and switch to it in one command. Let's create a branch called ",(0,n.kt)("inlineCode",{parentName:"p"},"feature-2")," and switch to it:"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b feature-2\n"))))}u.isMDXComponent=!0}}]);