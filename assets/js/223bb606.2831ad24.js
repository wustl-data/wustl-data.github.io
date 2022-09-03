"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1060:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"Dictionaries and Dict Comprehensions",sidebar_position:5},i=void 0,s={unversionedId:"modules/python-pandas/Background and Exercises/Python/dict-comprehensions",id:"modules/python-pandas/Background and Exercises/Python/dict-comprehensions",title:"Dictionaries and Dict Comprehensions",description:"Dictionaries are a very powerful and common data structure in Python. Fundamentally, they are a set of key-value pairs. Usually (but not necessarily), keys are strings, while their corresponding values can be whatever you wish (including function handles). They are often an efficient way to handle branching circumstances in your code (as opposed to long if/elif statements).",source:"@site/docs/modules/python-pandas/Background and Exercises/Python/dict-comprehensions.md",sourceDirName:"modules/python-pandas/Background and Exercises/Python",slug:"/modules/python-pandas/Background and Exercises/Python/dict-comprehensions",permalink:"/modules/python-pandas/Background and Exercises/Python/dict-comprehensions",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/python-pandas/Background and Exercises/Python/dict-comprehensions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Dictionaries and Dict Comprehensions",sidebar_position:5},sidebar:"docSidebar",previous:{title:"List Comprehensions",permalink:"/modules/python-pandas/Background and Exercises/Python/list-comprehensions"},next:{title:"Pandas",permalink:"/modules/python-pandas/Background and Exercises/pandas/"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Dictionaries are a very powerful and common data structure in Python. Fundamentally, they are a set of key-value pairs. Usually (but not necessarily), keys are strings, while their corresponding values can be whatever you wish (including function handles). They are often an efficient way to handle branching circumstances in your code (as opposed to long if/elif statements)."),(0,a.kt)("p",null,"For example instead of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"if foo='a':\n    print(1)\nelif foo='b':\n    print(2)\nelif foo='c':\n    print(3)\nelif foo='d':\n    print(4)\n")),(0,a.kt)("p",null,"We may simply write:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"awesome_dict = {'a': 1, 'b': 2, 'c': 3, 'd': 4}\nprint(awesome_dict[foo])\n")),(0,a.kt)("p",null,"You'll notice that we access the value for a key using brackets ([]) in the above example. Something to keep in mind is that if you try to access a nonexistent key with brackets, you will get an error. To avoid this, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," method, which will return ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," if the key doesn't exist. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"awesome_dict.get('e')\n")),(0,a.kt)("p",null,"will return ",(0,a.kt)("inlineCode",{parentName:"p"},"None")," instead of throwing an error."),(0,a.kt)("p",null,"Dict comprehensions are similar to list comprehensions and a concise way to create dictionaries. For example, if we have a dictionary of numbers and we want to create a new dictionary that contains the square of each number, we could do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"numbers = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}\nsquares = {key: value**2 for key, value in numbers.items()}\n")),(0,a.kt)("p",null,"This is equivalent to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"squares = {}\nfor key, value in numbers.items():\n    squares[key] = value**2\n")))}u.isMDXComponent=!0}}]);