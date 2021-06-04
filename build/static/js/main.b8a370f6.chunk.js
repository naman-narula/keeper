(this["webpackJsonpkeeper-part-3-starting"]=this["webpackJsonpkeeper-part-3-starting"]||[]).push([[0],{23:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),o=n(3),i=n.n(o),u=n(7),s=n(8);var m=function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,"Keeper"))};var p=function(){var e=(new Date).getFullYear();return r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright \u24d2",e),r.a.createElement("p",null," developed by Naman Narula"))},f=n(22);function d(e){window.localStorage.setItem("token",e)}function h(e){var t=window.localStorage;return null===t.getItem(e)?null:t.getItem(e)}var E=function(e){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=h("token"),t.next=4,fetch("/api/home",{method:"DELETE",headers:{"Content-Type":"application/json",token:n},body:JSON.stringify({index:e.id})});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,console.log(r),e.delete(e.id),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"note"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.content),r.a.createElement("button",{onClick:function(){return t.apply(this,arguments)}},"DELETE"))},b=n(11);var v=function(e){var t=r.a.useState({title:"",content:""}),n=Object(s.a)(t,2),a=n[0],c=n[1];function l(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},{[n]:a})}))}function o(){return(o=Object(u.a)(i.a.mark((function t(n){var r,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=h("token"),n.preventDefault(),l={method:"POST",headers:{"Content-Type":"application/json",token:r},body:JSON.stringify({title:a.title,content:a.content})},fetch("/api/home",l).then((function(e){return e.json})).then((function(e){return console.log(e)})),e.addNote(a),c({title:"",content:""});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("input",{onChange:l,name:"title",placeholder:"Title",value:a.title}),r.a.createElement("textarea",{onChange:l,name:"content",placeholder:"Take a note...",rows:"3",value:a.content}),r.a.createElement("button",{onClick:function(e){return o.apply(this,arguments)}},"Add")))},g=n(1);function y(e){var t=r.a.useState([]),n=Object(s.a)(t,2),c=n[0],l=n[1];function o(e){l((function(t){return console.log("delete in dashboard"),t.filter((function(t,n){return n!==e}))}))}return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var n,a,r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h("token"),t.next=3,fetch("/api/home",{method:"GET",headers:{token:n}});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,a.ok?(e.setAuthenticate(!0),l(r)):e.setAuthenticate(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement("div",null,e.authenticate&&r.a.createElement("button",{onClick:function(){var t;e.setAuthenticate(!1),t="token",window.localStorage.removeItem(t)}}," Logout"),!e.authenticate&&r.a.createElement(g.a,{to:"/login"}),r.a.createElement(v,{addNote:function(e){l((function(t){return[].concat(Object(f.a)(t),[e])}))}}),c.map((function(e,t){return r.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,delete:o})})))}var w=n(10);var k=function(e){var t=r.a.useState({name:"",email:"",password:""}),n=Object(s.a)(t,2),a=n[0],c=n[1];function l(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(b.a)(Object(b.a)({},e),{},{[n]:a})}))}function o(){return(o=Object(u.a)(i.a.mark((function t(n){var r,c,l;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.name,email:a.email,password:a.password})},t.next=4,fetch("/api/".concat(e.type),r);case 4:return c=t.sent,t.next=7,c.json();case 7:l=t.sent,c.ok?(e.setAuthenticate(!0),d(l)):e.setAuthenticate(!1);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",null,e.authenticate&&r.a.createElement(g.a,{to:"/dashboard"}),r.a.createElement("form",{action:"POST"},"register"===e.type&&r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"name",name:"name",onChange:l,value:a.name})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Email address"),r.a.createElement("input",{type:"email",className:"form-control",id:"Email",name:"email",onChange:l,value:a.email})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{className:"form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"Password",name:"password",onChange:l,value:a.password})),r.a.createElement("button",{style:{width:"100px",borderRadius:"25px"},onClick:function(e){return o.apply(this,arguments)},type:"submit",className:"btn btn-warning"},"Submit")),"register"===e.type?r.a.createElement(w.b,{to:"/login"},"Login"):null)};var j=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=h("token"),c(null!==t);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/dashboard"},r.a.createElement(y,{setAuthenticate:c,authenticate:n})),r.a.createElement(g.b,{exact:!0,path:"/"},r.a.createElement(k,{type:"register",setAuthenticate:c,authenticate:n})),r.a.createElement(g.b,{exact:!0,path:"/login"},r.a.createElement(k,{type:"login",setAuthenticate:c,authenticate:n}))),r.a.createElement(p,null))};l.a.render(r.a.createElement(w.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b8a370f6.chunk.js.map