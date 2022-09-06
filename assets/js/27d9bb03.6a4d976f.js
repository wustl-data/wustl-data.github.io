"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[11],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),g=r,p=m["".concat(l,".").concat(g)]||m[g]||d[g]||a;return n?i.createElement(p,o(o({ref:t},c),{},{components:n})):i.createElement(p,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7212:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={title:"git status",sidebar_position:3},o=void 0,s={unversionedId:"resources/git-github/git/git-status",id:"resources/git-github/git/git-status",title:"git status",description:"git status lists 4 main sections:",source:"@site/docs/resources/git-github/git/git-status.md",sourceDirName:"resources/git-github/git",slug:"/resources/git-github/git/git-status",permalink:"/resources/git-github/git/git-status",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/resources/git-github/git/git-status.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"git status",sidebar_position:3},sidebar:"docSidebar",previous:{title:"Commits",permalink:"/resources/git-github/git/commits"},next:{title:"Branches",permalink:"/resources/git-github/git/branches"}},l={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ git status\nOn branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges to be committed:\n  (use "git restore --staged <file>..." to unstage)\n        modified:   commit-me.md\n\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n        modified:   work-in-progress.py\n\nUntracked files:\n    (use "git add <file>..." to include in what will be committed)\n        data/just-created.csv\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"git status")," lists 4 main sections:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A check against your ",(0,r.kt)("em",{parentName:"p"},"remote tracking branch"),". More on this in a moment.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Staged files (styled in green in the terminal). These are files that have been designated as ready-to-commit (or in a working state) but are waiting on changes to other files that should be included in the commit.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Unstaged files (styled in red in the terminal). These are files that have been modified since your last commit but are not ready to be committed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Untracked files (also styled in red in the terminal). These are files that ",(0,r.kt)("em",{parentName:"p"},"git")," determines it hasn't seen before."))),(0,r.kt)("admonition",{title:"Thinking cap",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The file extensions I chose for files in the example above were not arbitrary. What do you think these file types say about the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit")," process in the context above? What kinds of files do you want to add to your source control and when?")),(0,r.kt)("p",null,'We\'ll dig into the purpose of each of these commit "stages" in the exercise at the end of this section. '),(0,r.kt)("p",null,"Get in the habit of running ",(0,r.kt)("inlineCode",{parentName:"p"},"git status")," between everything you do. If you're using a GUI, use its indicators and shortcut buttons to frequently check the tracking status of the files in your branch. Here are the benefits of frequently running ",(0,r.kt)("inlineCode",{parentName:"p"},"git status"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Obviously, it will keep you in the habit of committing frequently. Keep in mind, reviewing a large change with tons of lines of code can be a lot more disorienting than reviewing the same change broken up into a series of small, digestible chunks. This is helpful not just for your collaborators, but also for yourself! After all, ",(0,r.kt)("em",{parentName:"li"},"you")," are the person who will most frequently read your code. And I'm sure I don't need to convince you that code you wrote just an hour ago can quickly turn into something that looks like it was written by a Martian. (What was this person thinking? Oh... is it me? ...am I the Martian?)"),(0,r.kt)("li",{parentName:"ul"},"It will quickly notify you of any undesired changes to the file hierarchy of your project. For example, some scripts that you write will generate files in your project directory. It will also tell you if you have any untracked files (files that git is not tracking).\nIt will tell you if you have any untracked files. Untracked files are files that git is not tracking. This means that git will not take a snapshot of them when you commit. This is generally not what you want, but sometimes is! If you have untracked files, you can add them to git's tracking by running ",(0,r.kt)("inlineCode",{parentName:"li"},"git add <filename>"),". You can also add all untracked files by running ",(0,r.kt)("inlineCode",{parentName:"li"},"git add .")," (note the period at the end). If you would like to keep a file out of source control, you can add it to a ",(0,r.kt)("inlineCode",{parentName:"li"},".gitignore")," file. ")),(0,r.kt)("p",null,"Let's continue now and learn about ",(0,r.kt)("em",{parentName:"p"},"branches")," in git."))}d.isMDXComponent=!0}}]);