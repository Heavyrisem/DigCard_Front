(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"a":"https://digcard.heavyrisem.xyz"}')},29:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(22),a=c.n(r),s=(c(29),c(10)),i=c(2),j=c(9),o=c.n(j),u=c(12),b=c(11),d=c(13),l=c(1);var h=function(){var e=Object(i.f)().id,t=Object(n.useState)(),c=Object(b.a)(t,2),r=c[0],a=c[1];function s(){return(s=Object(u.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d.a,"/v1/card/").concat(t),{method:"GET"});case 2:return c=e.sent,e.next=5,c.json();case 5:(n=e.sent).card?a(n.card):alert(n.err);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){console.log(e),function(e){s.apply(this,arguments)}(e)}),[e]),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"VIEW"}),r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{children:["\uc774\ub984: ",r.name]}),Object(l.jsxs)("div",{children:["\uc9c1\uc5c5: ",r.job]}),Object(l.jsxs)("div",{children:["\uc774\uba54\uc77c: ",r.email]})]})]})},O=c(24),x=c.n(O);var p=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),c=Object(n.useRef)(null),r=Object(n.useState)(""),a=Object(b.a)(r,2),i=a[0],j=a[1],h=Object(n.useState)(!1),O=Object(b.a)(h,2),p=O[0],f=O[1];function v(){return(v=Object(u.a)(o.a.mark((function n(){var r,a,s,i,u,b;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e&&t&&c)||p){n.next=11;break}return f(!0),i={name:null===(r=e.current)||void 0===r?void 0:r.value,job:null===(a=t.current)||void 0===a?void 0:a.value,email:null===(s=c.current)||void 0===s?void 0:s.value,author:"Anonymous"},n.next=5,fetch("".concat(d.a,"/v1/card/create"),{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}});case 5:return u=n.sent,n.next=8,u.json();case 8:(b=n.sent).id?j("/view/".concat(b.id)):alert(b.err),f(!1);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Create"}),Object(l.jsx)("input",{type:"text",placeholder:"\uc774\ub984",ref:e}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"\uc9c1\uc5c5",ref:t}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",placeholder:"\uc774\uba54\uc77c",ref:c}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:function(){return v.apply(this,arguments)},children:"\uc0dd\uc131"}),Object(l.jsx)("br",{}),i&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:"Share this QR Code/URL"}),Object(l.jsx)(x.a,{value:i}),Object(l.jsx)("br",{}),Object(l.jsx)(s.b,{to:i,children:"https://".concat(window.location.host).concat(i)})]})]})};var f=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:"/view/:id",children:Object(l.jsx)(h,{})}),Object(l.jsx)(i.a,{path:"/",children:Object(l.jsx)(p,{})})]})})};a.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7970159b.chunk.js.map