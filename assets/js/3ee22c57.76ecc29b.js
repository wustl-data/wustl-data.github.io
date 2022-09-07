"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[826],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,y=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(y,i(i({ref:t},d),{},{components:n})):a.createElement(y,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Assignment 1",sidebar_position:2},i=void 0,l={unversionedId:"modules/python-pandas/Assignment",id:"modules/python-pandas/Assignment",title:"Assignment 1",description:"Due00 PM",source:"@site/docs/modules/python-pandas/Assignment.md",sourceDirName:"modules/python-pandas",slug:"/modules/python-pandas/Assignment",permalink:"/modules/python-pandas/Assignment",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/python-pandas/Assignment.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Assignment 1",sidebar_position:2},sidebar:"docSidebar",previous:{title:"Slicing and Dicing",permalink:"/modules/python-pandas/Background and Exercises/pandas/slicing-dicing"},next:{title:"Resources",permalink:"/resources"}},s={},p=[{value:"Part 1",id:"part-1",level:2},{value:"Part 2",id:"part-2",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Due: 9/13/2022 5:00 PM"),(0,r.kt)("p",null,"Grab your starter code from GitHub Classroom using ",(0,r.kt)("a",{parentName:"p",href:"https://classroom.github.com/a/XxyXydik"},"this link"),". If you need them, follow the instructions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"README")," to help you get your starter code set up successfully."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"A green circle will be provided intermittently in the assignment instructions as a friendly reminder to commit your code.")),(0,r.kt)("h2",{id:"part-1"},"Part 1"),(0,r.kt)("p",null,"Use the Faker library and Pandas to generate a CSV with simulated personal data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(40 points) - Create a script in your root of your project called ",(0,r.kt)("inlineCode",{parentName:"p"},"fake_records.py"),". Using the ",(0,r.kt)("a",{parentName:"p",href:"https://faker.readthedocs.io/en/master/index.html"},"Faker")," data generator, write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"generate")," in this module that generates 1000 records with the following labels: ",(0,r.kt)("inlineCode",{parentName:"p"},"First Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Last Name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Street Address"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Phone Number")," \ud83d\udfe2. Your function should organize the output using your choice of standard Python data structures (e.g. lists, dictionaries, tuples, etc.)."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Using Poetry, we can install new Python packages using the ",(0,r.kt)("inlineCode",{parentName:"p"},"poetry add")," command. For more info, see the ",(0,r.kt)("a",{parentName:"p",href:"/resources/dev-env/manual#poetry"},"Poetry section")," in the manual setup docs or view the ",(0,r.kt)("a",{parentName:"p",href:"https://python-poetry.org/docs/basic-usage/"},"Poetry documentation"),"."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(20 points) - Create a function ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"fake_records")," module that takes the output of your function above as input, uses Pandas to convert the records to a CSV file in a root-level directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"fake_records.csv"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify your ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," file to ignore the ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," directory \ud83d\udfe2."))),(0,r.kt)("h2",{id:"part-2"},"Part 2"),(0,r.kt)("p",null,"Perform some basic manipulations using Pandas."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(10 points) - Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"fake_records.py")," that loads the ",(0,r.kt)("inlineCode",{parentName:"p"},"fake_records.csv")," file into a Pandas DataFrame \ud83d\udfe2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(10 points) - Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"add_salaries")," that adds a column to the DataFrame called ",(0,r.kt)("inlineCode",{parentName:"p"},"Salary"),". The values in this column should be randomly generated integers between 20,000 and 100,000 \ud83d\udfe2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(10 points) - Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"over_50k")," that filters the DataFrame to only include records where the ",(0,r.kt)("inlineCode",{parentName:"p"},"Salary")," is greater than 50,000 \ud83d\udfe2.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(10 points) - Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"normalize")," that mathematically normalizes the ",(0,r.kt)("inlineCode",{parentName:"p"},"Salary")," column by subtracting the mean and dividing by the standard deviation \ud83d\udfe2. It should take a Series as input and return a Series as output. You do not need to modify the DataFrame."))),(0,r.kt)("p",null,"Submit your assignment to gradescope at any stage of the process to check your work. Your highest score will be accepted. If you do not have your IDE configured to format your code on save, format it manually with ",(0,r.kt)("inlineCode",{parentName:"p"},"black")," before submitting."),(0,r.kt)("p",null,"Follow this process for submitting your assignment to Gradescope."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure the code you wish to evaluate is properly committed to your local repository."),(0,r.kt)("li",{parentName:"ol"},"Push your local repository to its ",(0,r.kt)("inlineCode",{parentName:"li"},"origin")," remote on GitHub."),(0,r.kt)("li",{parentName:"ol"},"Use GradeScope to submit your assignment via the GitHub integration.")))}u.isMDXComponent=!0}}]);