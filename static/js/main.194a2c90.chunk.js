(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,function(e,t,a){e.exports={list:"Statistics_list__IESt1",item:"Statistics_item__1qd82",text:"Statistics_text__3xl-M"}},,,function(e,t,a){},function(e,t,a){e.exports={container:"Section_container__2k7Bx",title:"Section_title__11_Rq"}},function(e,t,a){e.exports={btn:"FeedbackOptions_btn__2c4UM"}},,,,,function(e,t,a){e.exports={text:"Notification_text__3G3qm"}},,,,,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(7),i=a.n(s),r=(a(18),a(8)),l=a(9),o=a(10),j=a(13),d=a(12),b=a(5),u=a.n(b),x=a(0);function h(e){var t=e.title,a=e.children;return Object(x.jsxs)("div",{className:u.a.container,children:[Object(x.jsx)("h2",{className:u.a.title,children:t}),a]})}var m=a(6),O=a.n(m);function f(e){var t=e.options,a=e.onLeaveFeedback;return Object(x.jsx)("div",{className:O.a.container,children:t.map((function(e){return Object(x.jsx)("button",{type:"button",className:O.a.btn,onClick:a(e),children:e},e)}))})}var p=a(1),v=a.n(p);function _(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,s=e.positivePercentage;return Object(x.jsx)("div",{className:v.a.container,children:Object(x.jsxs)("ul",{className:v.a.list,children:[Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsx)("span",{className:v.a.text,children:"Good:"}),t]}),Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsx)("span",{className:v.a.text,children:"Neutral:"}),a]}),Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsx)("span",{className:v.a.text,children:"Bad:"}),n]}),Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsx)("span",{className:v.a.text,children:"Total:"}),c]}),Object(x.jsxs)("li",{className:v.a.item,children:[Object(x.jsx)("span",{className:v.a.text,children:"Positive feedback:"}),s,"%"]})]})})}var N=a(11),k=a.n(N);function g(e){var t=e.message;return Object(x.jsx)("p",{className:k.a.text,children:t})}var S=a(4),y=a.n(S),w=(a(20),function(e){Object(j.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.increment=function(t){return function(){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,c=t+a+n,s=Math.round(t/c*100),i=Object.keys(this.state);return Object(x.jsxs)("div",{className:y.a.container,children:[Object(x.jsx)(h,{title:"Please leave feedback",children:Object(x.jsx)(f,{options:i,onLeaveFeedback:this.increment})}),c>0?Object(x.jsx)(h,{title:"Statistics",children:Object(x.jsx)(_,{good:t,neutral:a,bad:n,total:c,positivePercentage:s})}):Object(x.jsx)(g,{message:"No feedback given"})]})}}]),a}(n.Component));i.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.194a2c90.chunk.js.map