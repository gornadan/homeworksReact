(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={message:"Message_message__1zGYa",message_img:"Message_message_img__1WOUQ",message_wrapper:"Message_message_wrapper__1Sp_I",message_wrap:"Message_message_wrap__2foIW",name_mess:"Message_name_mess__19a-F",message_mess:"Message_message_mess__G_dhj",time_mess:"Message_time_mess__2Z7dN"}},function(e,a,t){e.exports={wrapper:"Header_wrapper__1FoRz",item1:"Header_item1__vfmmx",item1_active:"Header_item1_active__1BhCx",item:"Header_item__26b5e",menu_btm:"Header_menu_btm__6w7Qg"}},,,,function(e,a,t){e.exports={someClass_button:"Affairs_someClass_button__2ZLJx"}},function(e,a,t){e.exports={wrapper:"HW5_wrapper__3bU5-"}},,function(e,a,t){e.exports={wrapper_affair:"Affair_wrapper_affair__2pkvh",affair_span:"Affair_affair_span__3RfYn",affair_button:"Affair_affair_button__3WHN_"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1qEWR",error:"Greeting_error__1z-G4",spanClass:"Greeting_spanClass__1aWJM"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3rbqf",errorInput:"SuperInputText_errorInput__3DAK9",error:"SuperInputText_error__1hE6R"}},,function(e,a,t){e.exports={default:"SuperButton_default__3bvhf",red:"SuperButton_red__2x5FD"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2k3-V",spanClassName:"SuperCheckbox_spanClassName__3Cwe_"}},function(e,a,t){e.exports={btm:"HW6_btm__2d4OF",wrapper:"HW6_wrapper__1oIJ4"}},,,,,,,function(e,a,t){e.exports={blue:"HW4_blue__1q1wJ",column:"HW4_column__2Cmwe"}},function(e,a,t){e.exports={spanItem:"SuperEditableSpan_spanItem__a8xx6"}},function(e,a,t){e.exports={item2:"Routes_item2__2ocLA"}},,,function(e,a,t){e.exports=t(43)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),s=(t(37),t(12)),m=t.n(s),o=t(2),i=t(1),u=t(6),_=t.n(u);var p=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.message_img},r.a.createElement("img",{src:e.avatar,alt:"pic"})),r.a.createElement("div",{className:_.a.message_wrapper},r.a.createElement("div",{className:_.a.message_wrap},r.a.createElement("div",{className:_.a.name_mess},r.a.createElement("span",null,e.name)),r.a.createElement("div",{className:_.a.message_mess},r.a.createElement("span",null,e.message)),r.a.createElement("div",{className:_.a.time_mess},r.a.createElement("span",null,e.time)))))},E="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Natali",d="Hi! How are you?",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:E,name:f,message:d,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(14),g=t.n(b);var N=function(e){return r.a.createElement("div",{className:g.a.wrapper_affair},r.a.createElement("div",{className:g.a.affair_span},r.a.createElement("span",null,e.affair.name)),r.a.createElement("div",null,r.a.createElement("button",{className:g.a.affair_button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))},C=t(11),k=t.n(C);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(N,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:k.a.someClass_button,onClick:function(){e.setFilter("low")}},"Low"))},x=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(x),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(o.a)(c,2),m=s[0],i=s[1],u=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(t,m);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 2"),r.a.createElement(w,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(31),S=t(15),y=t.n(S),I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=y.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:s}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:y.a.spanClass},c))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(o.a)(l,2),s=c[0],m=c[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),_=u[0],p=u[1],E=a.length;return r.a.createElement(I,{name:s,setNameCallback:function(e){m(e.currentTarget.value)},addUser:function(){s?(t(s),alert("Hello  ".concat(s,"!")),m("")):(p(_),alert("Error!!!"))},error:_,totalUsers:E})},A=t(45);var F=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 3"),r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};l([a].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},W=t(5),M=t(16),T=t.n(M),J=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=(e.className,e.spanClassName),m=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(T.a.error," ").concat(s||""),i=" ".concat(c?T.a.errorInput:T.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:i},m)),c&&r.a.createElement("span",{className:o},c))},U=t(27),B=t.n(U),P=t(18),R=t.n(P),G=function(e){var a=e.red,t=e.className,n=Object(W.a)(e,["red","className"]),l="".concat(a?R.a.red:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},D=t(19),q=t.n(D),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},m=Object(n.useState)(!1),i=Object(o.a)(m,2),u=i[0],_=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 4"),r.a.createElement("div",{className:B.a.column},r.a.createElement(J,{value:t,onChangeText:l,onEnter:s,error:c}),r.a.createElement(G,{red:!0,onClick:s},"delete "),r.a.createElement(L,{checked:u,onChangeChecked:_},"some text "),r.a.createElement(L,{checked:u,onChange:function(e){_(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=t(28),Y=t.n(z),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(W.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(n.useState)(!1),m=Object(o.a)(s,2),i=m[0],u=m[1],_=l||{},p=_.children,E=_.onDoubleClick,f=_.className,d=Object(W.a)(_,["children","onDoubleClick","className"]),h="".concat(Y.a.spanItem," ").concat(f);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){u(!i),a&&a(e)},onEnter:function(){u(!i),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){u(!i),E&&E(e)},className:h},d),p||c.value))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function X(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Q("test",{x:"A",y:1});X("test",{x:"",y:0});var V=t(20),$=t.n(V);var ee=function(){var e=Object(n.useState)(""),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:$.a.wrapper},r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 6"),r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:$.a.btm},r.a.createElement(G,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(G,{onClick:function(){l(X("editable-span-value",t))}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(F,null),r.a.createElement(K,null),r.a.createElement(ee,null))};var te=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"wrap_box"},r.a.createElement("div",{className:"error"},"404"),r.a.createElement("div",{className:"error_2"},"Page not found!"),r.a.createElement("div",{className:"error_3"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",r.a.createElement("p",null,"Let's go ",r.a.createElement("a",{href:"#"},"home.")," "))))};var ne=function(){return r.a.createElement("div",null,"Hello!!!")};var re=function(){return r.a.createElement("div",null,"Hello Middle!!!")},le=t(29),ce=t.n(le),se="/pre-junior",me="/junior",oe="/middle";var ie=function(){return r.a.createElement("div",{className:ce.a.item2},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0,render:function(){return r.a.createElement(i.a,{to:se})}}),r.a.createElement(i.b,{path:se,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(i.b,{path:me,render:function(){return r.a.createElement(ne,null)}}),r.a.createElement(i.b,{path:oe,render:function(){return r.a.createElement(re,null)}}),r.a.createElement(i.b,{render:function(){return r.a.createElement(te,null)}})))},ue=t(7),_e=t.n(ue),pe=t(8);var Ee=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:_e.a.wrapper},r.a.createElement("div",{className:_e.a.menu_btm,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:t?_e.a.item1:_e.a.item1_active},r.a.createElement("div",null,r.a.createElement(pe.b,{to:se,className:_e.a.item},"PRE_JUNIOR")),r.a.createElement("div",null,r.a.createElement(pe.b,{to:me,className:_e.a.item},"JUNIOR")),r.a.createElement("div",null,r.a.createElement(pe.b,{to:oe,className:_e.a.item},"MIDDLE"))))};var fe=function(){return r.a.createElement("div",{className:m.a.wrapper},r.a.createElement(pe.a,null,r.a.createElement(Ee,null),r.a.createElement(ie,null)))};var de=function(){return r.a.createElement("div",{className:m.a.App},r.a.createElement("h2",null,"react homeworks:"),r.a.createElement(fe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[32,1,2]]]);
//# sourceMappingURL=main.e4f71a5d.chunk.js.map