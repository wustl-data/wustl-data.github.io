"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[8338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"modules/testing/Assignment 4",id:"modules/testing/Assignment 4",title:"Assignment 4",description:"Due00 PM",source:"@site/docs/modules/testing/Assignment 4.md",sourceDirName:"modules/testing",slug:"/modules/testing/Assignment 4",permalink:"/modules/testing/Assignment 4",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/testing/Assignment 4.md",tags:[],version:"current",frontMatter:{},sidebar:"docSidebar",previous:{title:"4 - Test-Driven Data",permalink:"/modules/testing/"},next:{title:"2nd half overview",permalink:"/modules/tools/"}},l={},p=[{value:"Due: Tuesday, 11/1 5:00 PM",id:"due-tuesday-111-500-pm",level:2},{value:"[GitHub Classroom - Assignment 4]",id:"github-classroom---assignment-4",level:3},{value:"IMPORTANT:",id:"important",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"due-tuesday-111-500-pm"},"Due: Tuesday, 11/1 5:00 PM"),(0,o.kt)("h3",{id:"github-classroom---assignment-4"},"[",(0,o.kt)("a",{parentName:"h3",href:"https://classroom.github.com/a/3RHutrBD"},"GitHub Classroom - Assignment 4"),"]"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You should assume this assignment will be manually graded by default. Autograder code may be distributed and modified over the course of the week"),"."),(0,o.kt)("p",null,"Open the Stack Overflow Developer Survey dataset in this ",(0,o.kt)("a",{parentName:"p",href:"https://www.kaggle.com/code/razamh/stack-overflow-developer-survey-analysis"},"Kaggle Notebook"),". Skim the notebook to get oriented with the data set. Determine which column contains relevant salary data for analysis and replace the dummy column names in the starter code."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You might be thinking about downloading the .csv of the dataset into your project repo for data exploration at this step. You are more than welcome to do so, but you'll likely get more out of this assignment without it.")),(0,o.kt)("h3",{id:"important"},"IMPORTANT:"),(0,o.kt)("p",null,"I will be looking at your git histories to track your methodology as your repo progresses. You do not have to do steps 1-10 in order, but you do need to follow the red-green-refactor methodology. ",(0,o.kt)("strong",{parentName:"p"},"Include commits at each red-green-refactor step.")," You might need multiple cycles of R-G-R to fulfill the requirements at each step."),(0,o.kt)("admonition",{title:"NOTE ADDED 10/22",type:"info"},(0,o.kt)("p",{parentName:"admonition"},'"\ud83d\udd34" steps will be subjectively evaluated to determine your test coverage--i.e. how closely your tests reflect the correctness of your code in the final solution. You can receive minimum 5 points for testing at least one attribute/behavior of the function accurately.')),(0,o.kt)("p",null,"\ud83d\udfe2 - Write the bare mimimum amount of code to make your test pass. If you're unsure where to begin, try the approach of fixing the errors displayed in the terminal from the test run one-by-one until you get to green."),(0,o.kt)("p",null,"\u2705\u2705\u2705 - Refactor as many times as necessary, in small chunks, keeping your tests green. Commit after each refactoring. "),(0,o.kt)("admonition",{title:"NOTE ADDED 10/22",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Unless it is explicitly its own step, your refactoring steps wont be graded, but it is strongly encouraged to spend more time on this step up front to battle complexity in your code.")),(0,o.kt)("p",null,'As a courtesy, try to only perform commits at each step above. Use the "staging" tree (using ',(0,o.kt)("inlineCode",{parentName:"p"},"git add"),") to manage your files and changes as much as possible between these commits. If you end up with a lot of stray commits, look up how to do a ",(0,o.kt)("inlineCode",{parentName:"p"},"rebase")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"squash")," with your commits. I may ask you to resubmit the assignment if your git history is hard to track."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"10 points")," - Refactor ",(0,o.kt)("inlineCode",{parentName:"li"},"test_median_by_undergrad_no_data")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"test_median_by_undergrad_single_major")," into a single test. ")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Instructions for Part 1 updated 10/31")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You may use the implementation in this ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/wustl-data/4-schlich/tree/6fc24430e945d3ca97f967c14f1b1d09da87c394/tests"},"example")," repo")," to guide your refactoring, however you must show at least one intermediate refactoring step. The implementation for this approach was reviewed in class and is available on Zoom. Alternatively, you also may attempt the following process as provided in the original version of the assignment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"1. Configure the tests to use the `survey` fixture in [`conftest.py`](https://docs.pytest.org/en/6.2.x/fixture.html#conftest-py-sharing-fixtures-across-multiple-files). \u2705\n2. Configure the `survey` fixture to take a `salaries_majors` fixture as input.\n3. Implement the `salaries_majors` fixture to return a 2-element tuple in the format `(salaries, majors)` where `salaries` and `majors` are lists. \n4. Use the [params](https://docs.pytest.org/en/latest/how-to/fixtures.html#parametrizing-fixtures) argument to pass both test cases to the fixtures. \n5. Merge your two tests into one. \u2705\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Using ",(0,o.kt)("inlineCode",{parentName:"p"},"groupby.quantile"),", write tests for a function ",(0,o.kt)("inlineCode",{parentName:"p"},"salary_quantile")," that returns the 10th, 50th, and 90th salary percentile grouped by undergraduate major. \ud83d\udd34")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"salary_quantile"),". \ud83d\udfe2")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Refactor your ",(0,o.kt)("inlineCode",{parentName:"p"},"median_by_undergrad")," function to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"salary_quantile")," function above. \u2705\u2705\u2705")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Write tests for a function ",(0,o.kt)("inlineCode",{parentName:"p"},"ecdf")," which will manually calculate the eCDF of the data. Test for bounds and monotonicity. \ud83d\udd34"))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Implement the above function \ud83d\udfe2\u2705"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You may use any resources you find on the internet to implement this function, just cite your sources in the README. You may also spot-check your work using Plotly's ecdf plot generator and the real .csv data.")))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," Implement tests & a function ",(0,o.kt)("inlineCode",{parentName:"p"},"salaries_ecdf")," that uses your previous functions to return salary ecdfs with undergraduate major as the first index level. \ud83d\udd34\ud83d\udfe2\u2705")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," Refactor your implementations to take a ",(0,o.kt)("inlineCode",{parentName:"p"},"GroupBy")," object as input instead of a DataFrame. \u2705")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Implement tests and function ",(0,o.kt)("inlineCode",{parentName:"p"},"gt_50_k")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"groupby.filter")," to restrict your results to majors where the median salary is at least 50k. \ud83d\udd34\ud83d\udfe2\u2705")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"10 points")," - Using the functions we've built thus far, implement tests & a function ",(0,o.kt)("inlineCode",{parentName:"p"},"group_analysis")," that takes any arbitrary numerical column and any arbitrary categorical column, and an arbitrary choice of the previous transformation functions (median, quantile, ecdf) to return attribute info by groupings. \ud83d\udd34\ud83d\udfe2\u2705"))))}m.isMDXComponent=!0}}]);