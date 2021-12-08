"use strict";(self.webpackChunkdocusaurus_tecuntecs=self.webpackChunkdocusaurus_tecuntecs||[]).push([[276],{8215:function(a,e,t){var n=t(7294);e.Z=function(a){var e=a.children,t=a.hidden,s=a.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:s},e)}},3445:function(a,e,t){t.d(e,{Z:function(){return u}});var n=t(7462),s=t(7294),r=t(2389),m=t(9443);var p=function(){var a=(0,s.useContext)(m.Z);if(null==a)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return a},i=t(2256),l=t(6010),o="tabItem_vU9c";function c(a){var e,t,n,r=a.lazy,m=a.block,c=a.defaultValue,u=a.values,N=a.groupId,h=a.className,k=s.Children.map(a.children,(function(a){if((0,s.isValidElement)(a)&&void 0!==a.props.value)return a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof a.type?a.type:a.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=u?u:k.map((function(a){var e=a.props;return{value:e.value,label:e.label}})),g=(0,i.lx)(d,(function(a,e){return a.value===e.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(a){return a.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===c?c:null!=(e=null!=c?c:null==(t=k.find((function(a){return a.props.default})))?void 0:t.props.value)?e:null==(n=k[0])?void 0:n.props.value;if(null!==v&&!d.some((function(a){return a.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+d.map((function(a){return a.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=p(),b=f.tabGroupChoices,y=f.setTabGroupChoices,x=(0,s.useState)(v),w=x[0],P=x[1],z=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var A=b[N];null!=A&&A!==w&&d.some((function(a){return a.value===A}))&&P(A)}var T=function(a){var e=a.currentTarget,t=z.indexOf(e),n=d[t].value;n!==w&&(E(e),P(n),null!=N&&y(N,n))},Q=function(a){var e,t=null;switch(a.key){case"ArrowRight":var n=z.indexOf(a.currentTarget)+1;t=z[n]||z[0];break;case"ArrowLeft":var s=z.indexOf(a.currentTarget)-1;t=z[s]||z[z.length-1]}null==(e=t)||e.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},h)},d.map((function(a){var e=a.value,t=a.label;return s.createElement("li",{role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":w===e}),key:e,ref:function(a){return z.push(a)},onKeyDown:Q,onFocus:T,onClick:T},null!=t?t:e)}))),r?(0,s.cloneElement)(k.filter((function(a){return a.props.value===w}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},k.map((function(a,e){return(0,s.cloneElement)(a,{key:e,hidden:a.props.value!==w})}))))}function u(a){var e=(0,r.Z)();return s.createElement(c,(0,n.Z)({key:String(e)},a))}},6853:function(a,e,t){t.d(e,{Z:function(){return b}});var n=t(7757),s=t.n(n),r=t(7294),m="container_x7Mn",p="header_mr2h",i="btn_mdbq",l="btn-block_oQ+9",o="add-form_5AuN",c="form-control_S2fF",u="form-control-check_eHs0",N=function(a){var e=a.color,t=a.text,n=a.onClick;return r.createElement("button",{onClick:n,style:{backgroundColor:e},className:i},t)};N.defaultProps={color:"#00b5a5"};var h=t(5861),k=t(7617),d=function(a){var e=a.arrayState,t=a.setArrayState,n=a.placeholder,s=a.type;console.log("arrayState",e);return r.createElement("div",null,r.createElement("div",{className:c},e.map((function(a,m){return r.createElement("input",{key:m,type:s,placeholder:n[m],value:e[m],onChange:function(a){return n=m,s=parseInt(a.target.value),console.log("index",n,"newItemValue",parseInt(s)),console.log(e),e[n]=parseInt(s),e=[].concat(e),console.log(e),void t(e);var n,s}})})),r.createElement("button",{style:{backgroundColor:"#808080",width:"100%"},className:i,onClick:function(){e.push(0),e=[].concat(e),t(e)}},"Add field"),r.createElement("button",{style:{backgroundColor:"#808080",width:"100%"},className:i,onClick:function(){e=[].concat(e.slice(0,-1)),t(e)}},"Remove field")))},g=function(a){var e=a.name,t=a.description,n=a.blockmath,s=(a.inlinemath,a.type),m=a.placeholder,p=a.value,i=a.setValue,l=a.isArray;a.checked;return r.createElement("div",{className:"checkbox"!=s?c:u},r.createElement("label",null,r.createElement("code",null,e),": ",t,n&&!Array.isArray(n)&&r.createElement(k.BlockMath,{math:n}),n&&Array.isArray(n)&&n.map((function(a){return r.createElement(k.BlockMath,{math:a})}))),l?r.createElement(d,{arrayState:p,setArrayState:i,placeholder:m,type:s}):r.createElement("input",{type:s,placeholder:m,value:p,onChange:"checkbox"===s?function(a){return i(a.target.checked)}:"number"===s?function(a){return i(parseInt(a.target.value))}:function(a){return i(a.target.value)},id:e,name:e,checked:p}))};g.defaultProps={isArray:!1};var v=g,f=function(a){var e=a.onCalculate,t=a.paramInfo,n=(a.result,a.setResult),m={},p={},c=(0,r.useState)(!1),u=c[0],N=c[1];t.forEach((function(a){var e=(0,r.useState)(a.placeholder),t=e[0],n=e[1];m[a.name]=t,p[a.name]=n}));var k=function(){var a=(0,h.Z)(s().mark((function a(t){var r;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),N(!0),console.log("paramDict",m),a.next=5,e(m);case 5:r=a.sent,n(r),console.log("result",r),N(!1);case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.createElement("form",{className:o,onSubmit:k},t.map((function(a){return r.createElement(v,{key:a.name,name:a.name,description:a.description,blockmath:a.blockmath,type:a.type,placeholder:a.placeholder,value:m[a.name],setValue:p[a.name],isArray:a.isArray})})),r.createElement("input",{type:"submit",value:"Calculate",className:i+" "+l}),u&&r.createElement("p",null,"Simulation is running..."))},b=function(a){var e=a.title,t=a.onCalculate,n=a.paramInfo,s=a.resultComponent,i=(0,r.useState)({}),l=i[0],o=i[1];return r.createElement("div",{className:m},r.createElement("header",{className:p},r.createElement("h2",null,e)),r.createElement(f,{onCalculate:t,paramInfo:n,result:l,setResult:o}),r.createElement(s,{result:l}))}},8331:function(a,e,t){var n=t(7294),s=t(3928);e.Z=function(){return n.createElement("div",null,n.createElement("div",{"data-frill-widget":"d64d6407-8367-4fc0-b20b-43fe90a00548",style:{width:"100%",height:"460px"}}),n.createElement(s.Z,{async:!0,src:"https://widget.frill.co/v2/widget.js"}))}},6293:function(a,e,t){t.r(e),t.d(e,{contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return y}});var n=t(7462),s=t(3366),r=t(7294),m=t(3905),p=t(3445),i=t(8215),l=t(6853),o=t(5861),c=t(7757),u=t.n(c),N=[{name:"partition_weights",description:"The weights to be assigned to every number",type:"number",isArray:!0,placeholder:[1,5,9,21,35,5,3,5,10,11]}],h=function(){var a=(0,o.Z)(u().mark((function a(e){var t,n;return u().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("https://api.tecuntecs.com/optimize-qio/number-partition",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 2:return t=a.sent,n=t.json(),a.abrupt("return",n);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),k=function(a){var e=a.result;return r.createElement("div",null,r.createElement("h2",null,"Result:"),r.createElement("p",null,!1),"resultsZip"in e&&r.createElement("p",null,"Results ZIP File: ",r.createElement("a",{href:e.resultsZip},e.resultsZip)),"resultsPng"in e&&r.createElement("img",{src:e.resultsPng}),"result"in e&&r.createElement("table",{style:{width:"100%"}},r.createElement("tr",null,r.createElement("th",null,"Partition A"),r.createElement("th",null,"Partition B")),function(a){console.log("start tableRows()");for(var e=function(a){console.log("start largestPartition()");var e=[];console.log("partitions",a);for(var t=0;t<a.length;t++)a[t].length>e.length&&(e=a[t]);return console.log("end largestPartition()",e),e}(a).length,t=[],n=0;n<e;n++){for(var s=[],r=0;r<a.length;r++)console.log("i",n,"j",r),n<a[r].length&&s.push(a[r][n]);t.push(s)}return console.log("end tableRows()",t),t}(e.result).map((function(a){return r.createElement("tr",null,a.map((function(a){return r.createElement("td",null,a)})))}))))},d=t(8331),g=["components"],v={sidebar_position:1},f="Quantum-inspired Optimization (QIO)",b={unversionedId:"quantum-computing/quantum-inspired-optimization-QIO",id:"quantum-computing/quantum-inspired-optimization-QIO",isDocsHomePage:!1,title:"Quantum-inspired Optimization (QIO)",description:"Quantum-inspired Optimization (QIO) is not really quantum computing, but it will be.",source:"@site/docs/quantum-computing/quantum-inspired-optimization-QIO.mdx",sourceDirName:"quantum-computing",slug:"/quantum-computing/quantum-inspired-optimization-QIO",permalink:"/docs/quantum-computing/quantum-inspired-optimization-QIO",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Energy Management",permalink:"/docs/optimization/energy-management"},next:{title:"Bayesian Time Series",permalink:"/docs/computational-statistics/bayesian-time-series"}},y=[{value:"Quadratic Unconstrained Binary Optimization (QUBO)",id:"quadratic-unconstrained-binary-optimization-qubo",children:[{value:"Structure of a Binary Optimization Problem",id:"structure-of-a-binary-optimization-problem",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[{value:"Number Partitioning Problem (NPP)",id:"number-partitioning-problem-npp",children:[{value:"Complete Anytime Algorithms for NPP",id:"complete-anytime-algorithms-for-npp",children:[],level:4},{value:"Quantum-inspired Approach to NPP",id:"quantum-inspired-approach-to-npp",children:[],level:4}],level:3}],level:2},{value:"TecunTecs API",id:"tecuntecs-api",children:[{value:"Programmatic HTTP Call",id:"programmatic-http-call",children:[],level:3},{value:"Interactive Interface",id:"interactive-interface",children:[],level:3}],level:2},{value:"References",id:"references",children:[],level:2}],x={toc:y};function w(a){var e=a.components,t=(0,s.Z)(a,g);return(0,m.kt)("wrapper",(0,n.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"quantum-inspired-optimization-qio"},"Quantum-inspired Optimization (QIO)"),(0,m.kt)("p",null,"Quantum-inspired Optimization (QIO) is not really quantum computing, but it will be.\nQIO might be said to be the future input format of certain types of quantum computers.\nThis input format is called ",(0,m.kt)("em",{parentName:"p"},"Quadratic Unconstrained Binary Optimization")," (QUBO),\na relatively new approach to optimization with many promising applications."),(0,m.kt)("h2",{id:"quadratic-unconstrained-binary-optimization-qubo"},"Quadratic Unconstrained Binary Optimization (QUBO)"),(0,m.kt)("p",null,"Quadratic unconstrained binary optimization (QUBO) has vast applications from\nfinance and economics to machine learning. Oftentimes, applications appear\nnaturally in the form of QUBO, but in many cases, important constrained nonlinear\nbinary models have been re-cast into the form of QUBO problems (Kochenberger et al., 2014, p. 59). "),(0,m.kt)("p",null,"Mathematical models applicable across different fields include "),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},"Quadratic Assignment Problems; "),(0,m.kt)("li",{parentName:"ul"},"Capital Budgeting Problems; "),(0,m.kt)("li",{parentName:"ul"},"Multiple Knapsack Problems; "),(0,m.kt)("li",{parentName:"ul"},"Task Allocation Problems (distributed computer systems); "),(0,m.kt)("li",{parentName:"ul"},"Maximum Diversity Problems; "),(0,m.kt)("li",{parentName:"ul"},"P-Median Problems; "),(0,m.kt)("li",{parentName:"ul"},"Asymmetric Assignment Problems; "),(0,m.kt)("li",{parentName:"ul"},"Symmetric Assignment Problems; "),(0,m.kt)("li",{parentName:"ul"},"Side Constrained Assignment Problems; "),(0,m.kt)("li",{parentName:"ul"},"Quadratic Knapsack Problems; "),(0,m.kt)("li",{parentName:"ul"},"Constraint Satisfaction Problems (CSPs); "),(0,m.kt)("li",{parentName:"ul"},"Discrete Tomography Problems; "),(0,m.kt)("li",{parentName:"ul"},"Set Partitioning Problems; "),(0,m.kt)("li",{parentName:"ul"},"Set Packing Problems; "),(0,m.kt)("li",{parentName:"ul"},"Warehouse Location Problems; "),(0,m.kt)("li",{parentName:"ul"},"Maximum Clique Problems; "),(0,m.kt)("li",{parentName:"ul"},"Maximum Independent Set Problems; "),(0,m.kt)("li",{parentName:"ul"},"Maximum Cut Problems; "),(0,m.kt)("li",{parentName:"ul"},"Graph Coloring Problems; "),(0,m.kt)("li",{parentName:"ul"},"Number Partitioning Problems; "),(0,m.kt)("li",{parentName:"ul"},"Linear Ordering Problems; "),(0,m.kt)("li",{parentName:"ul"},"Clique Partitioning Problems; "),(0,m.kt)("li",{parentName:"ul"},"and SAT problems (Glover & Konchenberger, 2006, p. 113).")),(0,m.kt)("p",null,"According to Glover et al. (2018), \u201cThrough special reformulation techniques that are easy to apply,\nthe power of QUBO solvers can be used to efficiently solve many important problems once they are put\ninto the QUBO framework.\u201d"),(0,m.kt)("h3",{id:"structure-of-a-binary-optimization-problem"},"Structure of a Binary Optimization Problem"),(0,m.kt)("p",null,"The problem is formally expressed as:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("munder",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munder"},(0,m.kt)("mi",{parentName:"mo"},"min"),(0,m.kt)("mo",{parentName:"mo"},"\u2061")),(0,m.kt)("mi",{parentName:"munder"},"x")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"x"),(0,m.kt)("mi",{parentName:"msup"},"T")),(0,m.kt)("mi",{parentName:"mrow"},"Q"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\min_x x^T Qx")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.5913309999999998em",verticalAlign:"-0.7em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.66786em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.4em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop"},"min")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913309999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T")))))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"s.t.\xa0"),(0,m.kt)("msub",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msub"},"x"),(0,m.kt)("mi",{parentName:"msub"},"i")),(0,m.kt)("mo",{parentName:"mrow"},"\u2208"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"{"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"}")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{s.t. } x_i \\in \\{-1,1\\}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.76508em",verticalAlign:"-0.15em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"s.t.\xa0")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.31166399999999994em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.15em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"\u2208"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"{"),(0,m.kt)("span",{parentName:"span",className:"mord"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mclose"},"}")))))),(0,m.kt)("p",null,"where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"Q")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Q")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q")))))," is a symmetric ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mi",{parentName:"mrow"},"n")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"n \\times n")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.66666em",verticalAlign:"-0.08333em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n")))))," matrix."),(0,m.kt)("p",null,"Because we can model the linear constraints using quadratic equations, we can write the equivalent polynomial formulation:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("munder",{parentName:"mrow"},(0,m.kt)("mo",{parentName:"munder"},(0,m.kt)("mi",{parentName:"mo"},"min"),(0,m.kt)("mo",{parentName:"mo"},"\u2061")),(0,m.kt)("mi",{parentName:"munder"},"x")),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msup"},"x"),(0,m.kt)("mi",{parentName:"msup"},"T")),(0,m.kt)("mi",{parentName:"mrow"},"Q"),(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\min_x x^T Qx")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.5913309999999998em",verticalAlign:"-0.7em"}}),(0,m.kt)("span",{parentName:"span",className:"mop op-limits"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.66786em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.4em",marginLeft:"0em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"x"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,m.kt)("span",{parentName:"span"},(0,m.kt)("span",{parentName:"span",className:"mop"},"min")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.7em"}},(0,m.kt)("span",{parentName:"span"}))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8913309999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.13889em"}},"T")))))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mtext",{parentName:"mrow"},"s.t.\xa0"),(0,m.kt)("msubsup",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"msubsup"},"x"),(0,m.kt)("mi",{parentName:"msubsup"},"i"),(0,m.kt)("mn",{parentName:"msubsup"},"2")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{s.t. } x_i^2 = 1")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1.1111079999999998em",verticalAlign:"-0.247em"}}),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"s.t.\xa0")),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8641079999999999em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-2.4530000000000003em",marginLeft:"0em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"i"))),(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"2")))),(0,m.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.247em"}},(0,m.kt)("span",{parentName:"span"})))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.64444em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1")))))),(0,m.kt)("p",null,"In other words, ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"x")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))))," is a vector of binary decision variables to\noptimize and ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"Q")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Q")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8777699999999999em",verticalAlign:"-0.19444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"Q")))))," is a square matrix of constants that defines the\nproblem."),(0,m.kt)("h2",{id:"examples"},"Examples"),(0,m.kt)("h3",{id:"number-partitioning-problem-npp"},"Number Partitioning Problem (NPP)"),(0,m.kt)("p",null,"The number partitioning problem is to divide a given set of integers\ninto a collection of subsets, so that the sum of the numbers in each\nsubset are as nearly equal as possible. It is NP-complete."),(0,m.kt)("h4",{id:"complete-anytime-algorithms-for-npp"},"Complete Anytime Algorithms for NPP"),(0,m.kt)("p",null,"(Korf, 1998, p. 182) presented a case study of a different approach\nto algorithm design. He starts with the best polynomial-time\napproximation algorithm for a problem. The idea is to find the\napproximate solution based on a heuristic first, and let the algorithm\ncontinue to run to find only better solutions. He claims that,\neventually, it should find and verify the optimal solution."),(0,m.kt)("h4",{id:"quantum-inspired-approach-to-npp"},"Quantum-inspired Approach to NPP"),(0,m.kt)("p",null,"Alidaee et al. (2005) recast the problem as a QUBO problem. Their approach accommodates both the two-subset partition case as well as the more general case of multiple subsets. The novelty lies in the fact of illustrating a common formulation for a variety of NPP problems that can be solved by recently developed metaheuristic methods."),(0,m.kt)("h2",{id:"tecuntecs-api"},"TecunTecs API"),(0,m.kt)("p",null,"For more information, review the ",(0,m.kt)("a",{parentName:"p",href:"https://api.tecuntecs.com/api-docs/"},"TecunTecs API Docs"),"\nand check the ",(0,m.kt)("a",{parentName:"p",href:"https://api.tecuntecs.com/api-docs/#/Stretch%20Goal%3A%20Quantum-inspired%20Optimization/post_optimize_qio_number_partition"},(0,m.kt)("inlineCode",{parentName:"a"},"/optimize-qio/number-partition"))," route."),(0,m.kt)("h3",{id:"programmatic-http-call"},"Programmatic HTTP Call"),(0,m.kt)(p.Z,{mdxType:"Tabs"},(0,m.kt)(i.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-js"},'// Node.js\nconst fetch = require("node-fetch");\n\nconst optimizeNumberPartitionQIO = async (parameterSet) => {\n  const res = await fetch(\n    "https://api.tecuntecs.com/optimize-qio/number-partition",\n    {\n      method: "POST",\n      headers: {\n        "Content-type": "application/json",\n      },\n      body: JSON.stringify(parameterSet),\n    }\n  );\n\n  const data = res.json();\n  return data;\n};\n\noptimizeNumberPartitionQIO({\n  partition_weights: [1, 5, 9, 21, 35, 5, 3, 5, 10, 11],\n}).then((result) => console.log(result));\n\n//Output\n// {\n//   description: \'Partition results (quantum-inspired optimization)).\',\n//   result: [ [ 5, 35, 5, 3, 5 ], [ 1, 9, 21, 10, 11 ] ]\n// }\n'))),(0,m.kt)(i.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nparameterSet = {\n  \"partition_weights\": [1, 5, 9, 21, 35, 5, 3, 5, 10, 11],\n}\nr = requests.post('https://api.tecuntecs.com/optimize-qio/number-partition',\n                    json = parameterSet)\nprint(r.json())\n\n# Output\n# {'description': 'Partition results (quantum-inspired optimization)).', 'result': [[5, 35, 5, 3, 5], [1, 9, 21, 10, 11]]}\n")))),(0,m.kt)("h3",{id:"interactive-interface"},"Interactive Interface"),(0,m.kt)(l.Z,{title:"Number Partition Optimizer",onCalculate:h,paramInfo:N,resultComponent:k,mdxType:"Calculator"}),(0,m.kt)("h2",{id:"references"},"References"),(0,m.kt)("p",null,"Alidaee, B., Glover, F., & Kochenberger, G. A. (2005).\nA new modeling and solution approach for the number partitioning\nproblem. ",(0,m.kt)("em",{parentName:"p"},"Journal of Applied Mathematics and Decision Sciences"),".\n",(0,m.kt)("a",{parentName:"p",href:"https://doi.org/10.1155/JAMDS.2005.113"},"https://doi.org/10.1155/JAMDS.2005.113")),(0,m.kt)("p",null,"Glover, F., Kochenberger, G., & Du, Y. (2018).\n",(0,m.kt)("em",{parentName:"p"},"Quantum Bridge Analytics I: A Tutorial on Formulating and Using QUBO Models"),".\nRetrieved from ",(0,m.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1811.11538.pdf"},"https://arxiv.org/pdf/1811.11538.pdf")),(0,m.kt)("p",null,"Kochenberger, G., Hao, J.-K., Glover, F., Lewis, M., Lu, Z.,\nWang, H., & Wang, Y. (2014, April 18).\nThe unconstrained binary quadratic programming problem: a survey.\n",(0,m.kt)("em",{parentName:"p"},"Journal of Combinatorial Optimization"),", 28, 58-81."),(0,m.kt)(d.Z,{mdxType:"FrillEmbeddedWidget"}))}w.isMDXComponent=!0}}]);