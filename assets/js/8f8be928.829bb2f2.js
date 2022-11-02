"use strict";(self.webpackChunkwrangling=self.webpackChunkwrangling||[]).push([[1733],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),i=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7462),i=a(7294),o=a(6010),l=a(2389),r=a(7392),s=a(7094),d=a(2466);const m="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:c,values:p,groupId:h,className:k}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),b=(0,r.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,s.U)(),[w,C]=(0,i.useState)(N),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,d.o5)();if(null!=h){const e=y[h];null!=e&&e!==w&&g.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,a=x.indexOf(t),n=g[a].value;n!==w&&(T(t),C(n),null!=h&&v(h,String(n)))},A=e=>{var t;let a=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;a=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;a=x[t]??x[x.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},g.map((e=>{let{value:t,label:a,attributes:l}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:A,onClick:E},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,i.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,l.Z)();return i.createElement(c,(0,n.Z)({key:String(t)},e))}},3430:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>m,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(5488),l=a(5162),r=a(814);const s={title:"Assignment 2",sidebar_position:3},d=void 0,m={unversionedId:"modules/cleaning/Assignment",id:"modules/cleaning/Assignment",title:"Assignment 2",description:"Grab your starter code from GitHub Classroom using this link. If you need them, follow the instructions in the README to help you get your starter code set up successfully.",source:"@site/docs/modules/cleaning/Assignment.mdx",sourceDirName:"modules/cleaning",slug:"/modules/cleaning/Assignment",permalink:"/modules/cleaning/Assignment",draft:!1,editUrl:"https://github.com/wustl-data/wustl-data.github.io/edit/main/docs/modules/cleaning/Assignment.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Assignment 2",sidebar_position:3},sidebar:"docSidebar",previous:{title:"exercises",permalink:"/modules/cleaning/exercises"},next:{title:"What is normalized data?",permalink:"/modules/normalization/"}},u={},c=[{value:"Cleaning Campaign Finance Data",id:"cleaning-campaign-finance-data",level:2},{value:"Getting started",id:"getting-started",level:3}],p={toc:c};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Grab your starter code from GitHub Classroom using ",(0,i.kt)("a",{parentName:"p",href:"https://classroom.github.com/a/EXN5F33w"},"this link"),". If you need them, follow the instructions in the ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," to help you get your starter code set up successfully."),(0,i.kt)("h2",{id:"cleaning-campaign-finance-data"},"Cleaning Campaign Finance Data"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"There's a new sheriff in town... and they're running for re-election! Imagine you've been hired as a political campaign's data director. The campaign wants you to organize and analyze Missouri campaign contribution data so that the candidate can efficiently target donors for their campaign. ")),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"The Missouri Ethics Commission (MEC) is responsible for collecting and distributing campaign finance information for state and municipal elections. They provide a download tool (",(0,i.kt)("a",{parentName:"p",href:"https://mec.mo.gov/MEC/Campaign_Finance/CF_ContrCSV.aspx"},"link for the curious"),") which allows you to manually download a CSV of campaign contribution data for a given year's MEC reports. I have downloaded this data set for every year since 2016 and reuploaded the collection as a compressed file on WUSTL Box."),(0,i.kt)("p",null,"Download and unzip the file using one of the following methods depending on your preference to use the command line or use GUIs:"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"Command Line",mdxType:"TabItem"},(0,i.kt)(r.Z,{language:"shell",mdxType:"CodeBlock"},"curl -L https://wustl.box.com/shared/static/q5lxh0wcj6jz6bj0fchtbfvxk4159063.gz | tar xz --directory data/raw"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Demystifying the command"),"cURL fetches the compressed tarball from the URL. The ",(0,i.kt)("code",null,"-L")," flag (short for ",(0,i.kt)("code",null,"--location"),") allows the command to follow the download redirect. The download is then ",(0,i.kt)("i",null,"piped")," (",(0,i.kt)("code",null,"|"),") to the ",(0,i.kt)("code",null,"tar")," command which ",(0,i.kt)("i",null,"extracts")," (",(0,i.kt)("code",null,"x"),") the ",(0,i.kt)("i",null,"zipped")," folder (",(0,i.kt)("code",null,"z"),") and places the output in ",(0,i.kt)("code",null,"data/raw/"),".")),(0,i.kt)(l.Z,{value:"GUI",mdxType:"TabItem"},(0,i.kt)("a",{href:"https://wustl.box.com/s/khyvqw1sj6vpuxsb4tbyrjy2e7vj6ivr"},"Click here to view the file on WUSTL Box"),". Download the files, unzip them, and copy/paste them into `data/raw/` within your project directory.")),(0,i.kt)("p",null,"In a module ",(0,i.kt)("inlineCode",{parentName:"p"},"mec.clean"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(20 points) - Write a function ",(0,i.kt)("inlineCode",{parentName:"p"},"rename")," that renames the files in ",(0,i.kt)("inlineCode",{parentName:"p"},"data/raw")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"os.rename()"),". Rename the files to their appropriate year using the most frequent year found in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Date")," column. Use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/glob.html"},(0,i.kt)("inlineCode",{parentName:"a"},"glob"))," to obtain the paths for the CSV files.\nRequirements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Your ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore")," files must be structured so that your repository contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"data/raw/")," directory, but ignores any ",(0,i.kt)("inlineCode",{parentName:"li"},".csv")," files placed in that directory."),(0,i.kt)("li",{parentName:"ul"},"When you rename the files, they should remain in the ",(0,i.kt)("inlineCode",{parentName:"li"},"data/raw/")," folder."),(0,i.kt)("li",{parentName:"ul"},"You must analyze the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," column using Pandas to determine the most frequent year."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(20 Points) - Write a function ",(0,i.kt)("inlineCode",{parentName:"p"},"combine")," that combines the CSVs in ",(0,i.kt)("inlineCode",{parentName:"p"},"data/raw"),", using the appropriate arguments to ",(0,i.kt)("inlineCode",{parentName:"p"},"read_csv")," to assign the correct dtypes upon load and assign ",(0,i.kt)("inlineCode",{parentName:"p"},"CD1_A ID")," as the index for the data. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"pd.concat")," to combine your dataframes into a single dataframe.  ",(0,i.kt)("del",{parentName:"p"},"The function should save the combined data in a file ",(0,i.kt)("inlineCode",{parentName:"del"},"data/contributions.csv"),".")," The function should return the combined DataFrame. "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: This data set should be manageable in-memory, however if this is not the case for your machine you may work on this assignment using a subset of the files provided -- the overall logic and code should be exactly the same and will not affect the autograder.")),(0,i.kt)("p",{parentName:"li"},"Requirements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data read and combined correctly into a single dataframe"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"read_csv")," assigns correct dtypes, sets correct column as index, and removes the timestamp ",(0,i.kt)("inlineCode",{parentName:"li"},"0:00")," from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Date")," column."),(0,i.kt)("li",{parentName:"ul"},"Function reads from correct location and contains the entire dataset."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(60 Points) - Write a function ",(0,i.kt)("inlineCode",{parentName:"p"},"clean(addresses)")," that takes a DataFrame containing address data and returns a DataFrame with the addresses cleaned."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Any sensible analysis using this data must involve some cleaning. Since the MEC simply relays the data submitted by the campaigns as entered, entities may not be represented the same way across multiple entries. We can imagine complex procedures to clean the full data set for each field (to account for nicknames, joint contributions, typos, synonyms, etc). However, we will stick to cleaning address data since the data adheres more closely to commonly-understood standards.")),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Effective usage of Pandas' ",(0,i.kt)("a",{parentName:"p",href:"https://pandas.pydata.org/docs/user_guide/text.html"},(0,i.kt)("inlineCode",{parentName:"a"},"str")," methods")," should make this problem much simpler.")),(0,i.kt)("p",{parentName:"li"},"Implement your function as follows:"),(0,i.kt)("p",{parentName:"li"},"Requirements:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'All strings are capitalized and has no extra white space, new line characters\n(e.g " ',"\xa0","\xa0","\xa0","\xa0","  Hello World ","\xa0",'    \\n"  --\x3e "HELLO WORLD")'),(0,i.kt)("li",{parentName:"ul"},"All punctuation is removed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"Every word is converted to its abbreviation, when possible. (All words on ",(0,i.kt)("a",{parentName:"del",href:"https://abbreviations.yourdictionary.com/articles/usps-street-and-building-abbreviations.html"},"this page"),', under "Building Abbreviations From the Post Office" and "Most Common Street Abbreviations" sections; and also the pair "Saint" --\x3e "St")')),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"Address 1")," column, all words in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wustl-data/hw2-hotfix/blob/main/data/suffixes.json"},"USPS-provided List of Street Suffixes")," are converted to their abbreviations."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"City"),' column, all instances of the word "SAINT" are converted to "ST"'),(0,i.kt)("li",{parentName:"ul"},"Data in ",(0,i.kt)("inlineCode",{parentName:"li"},"State"),' column must be verified and all values that do not correspond to an U.S state must be changed to the empty string "". '),(0,i.kt)("li",{parentName:"ul"},"Handle data in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Zip")," column as follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("del",{parentName:"li"},"data")," element has a hyphen ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," (e.g. 1234-56789), use the numbers before ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," as the zip code. "),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("del",{parentName:"li"},"data is not an integer"),' element contains non-digits (e.g. "200.0" or "Hello"), replace it with the empty string ""'),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("del",{parentName:"li"},"data is a integer with")," element contains only digits and more than 5 digits, keep the first 5."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("del",{parentName:"li"},"data is a integer with"),' element contains only digits less than 5 digits, pad "0" chars to the front so that it has 5 digits.\n(e.g. "1234" --\x3e "01234")'))),(0,i.kt)("li",{parentName:"ul"},"After cleaning, merge ",(0,i.kt)("inlineCode",{parentName:"li"},'"Address 1"')," and ",(0,i.kt)("inlineCode",{parentName:"li"},'"Address 2"')," into a single column called ",(0,i.kt)("inlineCode",{parentName:"li"},'"Street Address"')," ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},'You can achieve this easily using the "+" operation and space " " in between.')))))))}h.isMDXComponent=!0}}]);