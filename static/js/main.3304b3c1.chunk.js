(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={message:"Message_message__1zGYa",message_img:"Message_message_img__1WOUQ",message_wrapper:"Message_message_wrapper__1Sp_I",message_wrap:"Message_message_wrap__2foIW",name_mess:"Message_name_mess__19a-F",message_mess:"Message_message_mess__G_dhj",time_mess:"Message_time_mess__2Z7dN"}},,,,,function(e,a,t){e.exports={someClass_button:"Affairs_someClass_button__2ZLJx"}},function(e,a,t){e.exports={nav:"Header_nav__2iLaO",item:"Header_item__26b5e",activeLink:"Header_activeLink__3u_1m"}},function(e,a,t){e.exports={App:"App_App__3JrBF",appWrapper:"App_appWrapper__1sVK1"}},,function(e,a,t){e.exports={wrapper_affair:"Affair_wrapper_affair__2pkvh",affair_span:"Affair_affair_span__3RfYn",affair_button:"Affair_affair_button__3WHN_"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1qEWR",error:"Greeting_error__1z-G4",spanClass:"Greeting_spanClass__1aWJM"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3rbqf",errorInput:"SuperInputText_errorInput__3DAK9",error:"SuperInputText_error__1hE6R"}},,function(e,a,t){e.exports={default:"SuperButton_default__3bvhf",red:"SuperButton_red__2x5FD"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2k3-V",spanClassName:"SuperCheckbox_spanClassName__3Cwe_"}},,,,,,,function(e,a,t){e.exports={blue:"HW4_blue__1q1wJ",column:"HW4_column__2Cmwe"}},,,function(e,a,t){e.exports=t(40)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),s=(t(34),t(12)),m=t.n(s),o=t(1),u=t(5),i=t.n(u);var _=function(e){return r.a.createElement("div",{className:i.a.message},r.a.createElement("div",{className:i.a.message_img},r.a.createElement("img",{src:e.avatar,alt:"pic"})),r.a.createElement("div",{className:i.a.message_wrapper},r.a.createElement("div",{className:i.a.message_wrap},r.a.createElement("div",{className:i.a.name_mess},r.a.createElement("span",null,e.name)),r.a.createElement("div",{className:i.a.message_mess},r.a.createElement("span",null,e.message)),r.a.createElement("div",{className:i.a.time_mess},r.a.createElement("span",null,e.time)))))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Natali",E="Hi! How are you?",d="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:p,name:f,message:E,time:d}),r.a.createElement("hr",null),r.a.createElement("hr",null))},v=t(4),b=t(14),g=t.n(b);var C=function(e){return r.a.createElement("div",{className:g.a.wrapper_affair},r.a.createElement("div",{className:g.a.affair_span},r.a.createElement("span",null,e.affair.name)),r.a.createElement("div",null,r.a.createElement("button",{className:g.a.affair_button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))},N=t(10),k=t.n(N);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(x),a=Object(v.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(v.a)(c,2),m=s[0],o=s[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(t,m);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 2"),r.a.createElement(w,{data:u,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(28),y=t(15),S=t.n(y),A=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=S.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:S.a.spanClass},c))},I=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(v.a)(l,2),s=c[0],m=c[1],o=Object(n.useState)(""),u=Object(v.a)(o,2),i=u[0],_=u[1],p=a.length;return r.a.createElement(A,{name:s,setNameCallback:function(e){m(e.currentTarget.value)},addUser:function(){s?(t(s),alert("Hello  ".concat(s,"!")),m("")):(_(i),alert("Error!!!"))},error:i,totalUsers:p})},W=t(42);var H=function(){var e=Object(n.useState)([]),a=Object(v.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 3"),r.a.createElement(I,{users:t,addUserCallback:function(e){var a={_id:Object(W.a)(),name:e};l([a].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(6),T=t(16),F=t.n(T),J=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=(e.className,e.spanClassName),m=Object(M.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(F.a.error," ").concat(s||""),u=" ".concat(c?F.a.errorInput:F.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},m)),c&&r.a.createElement("span",{className:o},c))},U=t(26),G=t.n(U),R=t(18),B=t.n(R),L=function(e){var a=e.red,t=e.className,n=Object(M.a)(e,["red","className"]),l="".concat(a?B.a.red:B.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},P=t(19),K=t.n(P),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(M.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var D=function(){var e=Object(n.useState)(""),a=Object(v.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},m=Object(n.useState)(!1),o=Object(v.a)(m,2),u=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 4"),r.a.createElement("div",{className:G.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(L,{red:!0,onClick:s},"delete "),r.a.createElement(q,{checked:u,onChangeChecked:i},"some text "),r.a.createElement(q,{checked:u,onChange:function(e){i(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(O,null),r.a.createElement(H,null),r.a.createElement(D,null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var z=function(){return r.a.createElement("div",null,"Hello!!!")};var V=function(){return r.a.createElement("div",null,"Hello Middle!!!")},X="/pre-junior",Q="/junior",$="/middle";var ee=function(){return r.a.createElement("div",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0,render:function(){return r.a.createElement(o.a,{to:X})}}),r.a.createElement(o.b,{path:X,render:function(){return r.a.createElement(Y,null)}}),r.a.createElement(o.b,{path:Q,render:function(){return r.a.createElement(z,null)}}),r.a.createElement(o.b,{path:$,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(o.b,{render:function(){return r.a.createElement(Z,null)}})))},ae=t(11),te=t.n(ae),ne=t(7);var re=function(){return r.a.createElement("nav",{className:te.a.nav},r.a.createElement("div",{className:te.a.item},r.a.createElement(ne.b,{to:X},"PRE_JUNIOR")),r.a.createElement("div",{className:te.a.item},r.a.createElement(ne.b,{to:Q},"JUNIOR")),r.a.createElement("div",{className:te.a.item},r.a.createElement(ne.b,{to:$},"MIDDLE")))};var le=function(){return r.a.createElement("div",{className:m.a.appWrapper},r.a.createElement(ne.a,null,r.a.createElement(re,null),r.a.createElement(ee,null)))};var ce=function(){return r.a.createElement("div",{className:m.a.App},r.a.createElement("h2",null,"react homeworks:"),r.a.createElement(le,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.3304b3c1.chunk.js.map