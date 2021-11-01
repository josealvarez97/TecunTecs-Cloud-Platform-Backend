"use strict";(self.webpackChunkdocusaurus_tecuntecs=self.webpackChunkdocusaurus_tecuntecs||[]).push([[433],{4799:function(a,e,t){t.r(e),t.d(e,{contentTitle:function(){return b},default:function(){return R},frontMatter:function(){return x},metadata:function(){return E},toc:function(){return M}});var n=t(7462),s=t(3366),m=t(7294),r=t(3905),p=t(5861),l=t(7757),c=t.n(l),i="container_2Mvw",o="header_2200",N="btn_14wT",k="btn-block_1E9N",u="add-form_b2aj",h="form-control_1ebH",d=function(a){var e=a.color,t=a.text,n=a.onClick;return m.createElement("button",{onClick:n,style:{backgroundColor:e},className:N},t)};d.defaultProps={color:"#00b5a5"};var g=t(7617),f=function(a){var e=a.onCalculate,t=(0,m.useState)("lambda t: 3*(t**2)*exp(t**3)"),n=t[0],s=t[1],r=(0,m.useState)(0),l=r[0],i=r[1],o=(0,m.useState)(1),d=o[0],f=o[1],w=(0,m.useState)(4),v=w[0],y=w[1],x=(0,m.useState)("trapezoidal"),b=x[0],E=x[1],M=(0,m.useState)({}),C=M[0],R=M[1],T=function(){var a=(0,p.Z)(c().mark((function a(t){var s;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,e({f:n,a:l,b:d,n:v,method:b});case 3:s=a.sent,R(s);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return m.createElement("form",{className:u,onSubmit:T},m.createElement("div",{className:h},m.createElement("label",null,m.createElement("code",null,"f"),": Single variable function, a rate of change with respect to one variable.",m.createElement(g.BlockMath,{math:"\\frac{dx}{dt}=f(t)"})),m.createElement("input",{type:"text",placeholder:"lambda t: 3*(t**2)*exp(t**3)",value:n,onChange:function(a){return s(a.target.value)}})),m.createElement("div",{className:h},m.createElement("label",null,m.createElement("code",null,"a"),": Starting limit of integration.",m.createElement(g.BlockMath,{math:"\\int_{a}"})),m.createElement("input",{type:"text",placeholder:"0",value:l,onChange:function(a){return i(a.target.value)}})),m.createElement("div",{className:h},m.createElement("label",null," ",m.createElement("code",null,"b"),": Ending limit of integration.",m.createElement(g.BlockMath,{math:"\\int^{b}"})),m.createElement("input",{type:"text",placeholder:"1",value:d,onChange:function(a){return f(a.target.value)}})),m.createElement("div",{className:h},m.createElement("label",null," ",m.createElement("code",null,"n"),": Number of steps for numerical approximation.",m.createElement(g.BlockMath,{math:"\\int_{a}^{b} f(t)dx \\approx \\sum ^{n-1}_{i=0} f(a + i\\Delta x) \\Delta x"}),m.createElement(g.BlockMath,{math:"\\Delta x = \\frac{b-a}{n}"})),m.createElement("input",{type:"text",placeholder:"4",value:v,onChange:function(a){return y(a.target.value)}})),m.createElement("div",{className:h},m.createElement("label",null," ",m.createElement("p",null,m.createElement("code",null,"method"),": Algorithm for numerical integration (",m.createElement("code",null,"trapezoidal")," or ",m.createElement("code",null,"midpoint"),")."),"trapezoidal"==b&&m.createElement("div",null,m.createElement("img",{src:"https://api.tecuntecs.com/archive/Trapezoidal-Rule-TecunTecs.gif",alt:"Trapezoidal Rule GIF"})),"midpoint"==b&&m.createElement(g.BlockMath,{math:"\\text{midpoint formula here}"})),m.createElement("input",{type:"text",placeholder:"trapezoidal",value:b,onChange:function(a){return E(a.target.value)}})),m.createElement("input",{type:"submit",value:"Calculate",className:N+" "+k}),m.createElement("div",null,m.createElement("br",null),m.createElement("h2",null,"Result: "),m.createElement("p",null,"result"in C&&C.result)))},w=function(){var a=(0,p.Z)(c().mark((function a(e){var t,n;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("calculateParameter()"),console.log(JSON.stringify(e)),a.next=4,fetch("https://tecuntecs-cloud-platform.appspot.com/integrate",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)});case 4:return t=a.sent,n=t.json(),console.log(n),a.abrupt("return",n);case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),v=function(a){var e=a.title;return m.createElement("div",{className:i},m.createElement("header",{className:o},m.createElement("h2",null,e)),m.createElement(f,{onCalculate:w}))},y=["components"],x={sidebar_position:1},b="Numerical Integration",E={unversionedId:"integration/numerical-integration",id:"integration/numerical-integration",isDocsHomePage:!1,title:"Numerical Integration",description:"Few things are easier than a rate of change that depends upon the independent",source:"@site/docs/integration/numerical-integration.mdx",sourceDirName:"integration",slug:"/integration/numerical-integration",permalink:"/docs/integration/numerical-integration",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TecunTecs Intro",permalink:"/docs/intro"},next:{title:"Create a Document",permalink:"/docs/integration/create-a-document"}},M=[],C={toc:M};function R(a){var e=a.components,m=(0,s.Z)(a,y);return(0,r.kt)("wrapper",(0,n.Z)({},C,m,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"numerical-integration"},"Numerical Integration"),(0,r.kt)("p",null,"Few things are easier than a rate of change that depends upon the independent\nvariable. In a way (every way), this is any\u2013single variable\u2013function that you have set sail to\nintegrate."),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"t"))),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"\u21d2"),(0,r.kt)("mo",{parentName:"mrow"},"\u222b"),(0,r.kt)("mfrac",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("mrow",{parentName:"mfrac"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"t"))),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\frac{dx}{dt}=f(t) \\Rightarrow \\int \\frac{dx}{dt} dx=x(t)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.05744em",verticalAlign:"-0.686em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.37144em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"\u21d2"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"2.23369em",verticalAlign:"-0.86225em"}}),(0,r.kt)("span",{parentName:"span",className:"mop op-symbol large-op",style:{marginRight:"0.44445em",position:"relative",top:"-0.0011249999999999316em"}},"\u222b"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.16666666666666666em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mopen nulldelimiter"}),(0,r.kt)("span",{parentName:"span",className:"mfrac"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"1.37144em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.314em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.23em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"frac-line",style:{borderBottomWidth:"0.04em"}})),(0,r.kt)("span",{parentName:"span",style:{top:"-3.677em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"3em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x")))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.686em"}},(0,r.kt)("span",{parentName:"span"}))))),(0,r.kt)("span",{parentName:"span",className:"mclose nulldelimiter"})),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2777777777777778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("p",null,"You would compute the previous with an algorithm such as the midpoint method\nor trapezoidal rule. Just start with a given value of ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.61508em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))),", calculate ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(t)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),",\nand multiply by a small amount of change ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"x")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"x")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"))))),"."),(0,r.kt)(v,{title:"Calculator",mdxType:"Header"}),(0,r.kt)("p",null,"Work in progres...\n",(0,r.kt)("img",{alt:"Trapezoidal Rule",src:t(9893).Z})))}R.isMDXComponent=!0},9893:function(a,e,t){e.Z=t.p+"assets/images/Trapezoidal-Rule-TecunTecs-d12d6e0c17bfef617b6241b09d4a9fa4.gif"}}]);