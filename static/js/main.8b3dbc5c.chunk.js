(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={message:"Message_message__1zGYa",message_img:"Message_message_img__1WOUQ",message_wrapper:"Message_message_wrapper__1Sp_I",message_wrap:"Message_message_wrap__2foIW",name_mess:"Message_name_mess__19a-F",message_mess:"Message_message_mess__G_dhj",time_mess:"Message_time_mess__2Z7dN"}},function(e,a,t){e.exports={wrapper:"Header_wrapper__1FoRz",item1:"Header_item1__vfmmx",item1_active:"Header_item1_active__1BhCx",item:"Header_item__26b5e",menu_btm:"Header_menu_btm__6w7Qg"}},,,,,function(e,a,t){e.exports={someClass_button:"Affairs_someClass_button__2ZLJx"}},function(e,a,t){e.exports={wrapper:"HW5_wrapper__3bU5-"}},,function(e,a,t){e.exports={wrapper_affair:"Affair_wrapper_affair__2pkvh",affair_span:"Affair_affair_span__3RfYn",affair_button:"Affair_affair_button__3WHN_"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1qEWR",error:"Greeting_error__1z-G4",spanClass:"Greeting_spanClass__1aWJM"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3rbqf",errorInput:"SuperInputText_errorInput__3DAK9",error:"SuperInputText_error__1hE6R"}},,function(e,a,t){e.exports={default:"SuperButton_default__3bvhf",red:"SuperButton_red__2x5FD"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2k3-V",spanClassName:"SuperCheckbox_spanClassName__3Cwe_"}},function(e,a,t){e.exports={btm:"HW6_btm__2d4OF",wrapper:"HW6_wrapper__1oIJ4"}},,,,,,,function(e,a,t){e.exports={blue:"HW4_blue__1q1wJ",column:"HW4_column__2Cmwe"}},function(e,a,t){e.exports={spanItem:"SuperEditableSpan_spanItem__a8xx6"}},function(e,a,t){e.exports={wrapper:"HW7_wrapper__ykV3G"}},function(e,a,t){e.exports={wrapper:"Clock_wrapper__2FPtn"}},function(e,a,t){e.exports={item2:"Routes_item2__2ocLA"}},,function(e,a,t){e.exports=t(45)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(27),c=t.n(l),o=(t(39),t(13)),s=t.n(o),m=t(2),u=t(1),i=t(6),p=t.n(i);var E=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.message_img},r.a.createElement("img",{src:e.avatar,alt:"pic"})),r.a.createElement("div",{className:p.a.message_wrapper},r.a.createElement("div",{className:p.a.message_wrap},r.a.createElement("div",{className:p.a.name_mess},r.a.createElement("span",null,e.name)),r.a.createElement("div",{className:p.a.message_mess},r.a.createElement("span",null,e.message)),r.a.createElement("div",{className:p.a.time_mess},r.a.createElement("span",null,e.time)))))},_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Natali",f="Hi! How are you?",h="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:_,name:d,message:f,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(15),g=t.n(b);var C=function(e){return r.a.createElement("div",{className:g.a.wrapper_affair},r.a.createElement("div",{className:g.a.affair_span},r.a.createElement("span",null,e.affair.name)),r.a.createElement("div",null,r.a.createElement("button",{className:g.a.affair_button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X")))},k=t(12),N=t.n(k);var w=function(e){var a=e.data.map((function(a){return r.a.createElement(C,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{className:N.a.someClass_button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:N.a.someClass_button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:N.a.someClass_button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:N.a.someClass_button,onClick:function(){e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(m.a)(c,2),s=o[0],u=o[1],i=function(e,a){return"all"===a?e:"high"===a?e.filter((function(e){return"high"===e.priority})):"low"===a?e.filter((function(e){return"low"===e.priority})):e.filter((function(e){return"middle"===e.priority}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 2"),r.a.createElement(w,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(11),x=t(16),S=t.n(x),I=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=S.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:S.a.spanClass},c))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),p=i[0],E=i[1],_=a.length;return r.a.createElement(I,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){o?(t(o),alert("Hello  ".concat(o,"!")),s("")):(E(p),alert("Error!!!"))},error:p,totalUsers:_})},F=t(47);var T=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 3"),r.a.createElement(H,{users:t,addUserCallback:function(e){var a={_id:Object(F.a)(),name:e};l([a].concat(Object(y.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},A=t(3),M=t(17),W=t.n(M),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName),s=Object(A.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(W.a.error," ").concat(o||""),u=" ".concat(c?W.a.errorInput:W.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},s)),c&&r.a.createElement("span",{className:m},c))},J=t(28),D=t.n(J),P=t(19),B=t.n(P),G=function(e){var a=e.red,t=e.className,n=Object(A.a)(e,["red","className"]),l="".concat(a?B.a.red:B.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},R=t(20),L=t.n(R),q=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(A.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(m.a)(s,2),i=u[0],p=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 4"),r.a.createElement("div",{className:D.a.column},r.a.createElement(U,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(q,{checked:i,onChangeChecked:p},"some text "),r.a.createElement(q,{checked:i,onChange:function(e){p(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=t(29),Y=t.n(K),Z=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(A.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(m.a)(o,2),u=s[0],i=s[1],p=l||{},E=p.children,_=p.onDoubleClick,d=p.className,f=Object(A.a)(p,["children","onDoubleClick","className"]),h="".concat(Y.a.spanItem," ").concat(d);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){i(!u),a&&a(e)},onEnter:function(){i(!u),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!u),_&&_(e)},className:h},f),E||c.value))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function V(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}Q("test",{x:"A",y:1});V("test",{x:"",y:0});var X=t(21),$=t.n(X);var ee=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:$.a.wrapper},r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 6"),r.a.createElement("div",null,r.a.createElement(Z,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:$.a.btm},r.a.createElement(G,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(G,{onClick:function(){l(V("editable-span-value",t))}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ae=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(z,null),r.a.createElement(ee,null))};var te=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"wrap_box"},r.a.createElement("div",{className:"error"},"404"),r.a.createElement("div",{className:"error_2"},"Page not found!"),r.a.createElement("div",{className:"error_3"},"Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?",r.a.createElement("p",null,"Let's go ",r.a.createElement("a",{href:"#"},"home.")," "))))},ne=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(A.a)(e,["options","onChange","onChangeOption"]),l=a?a.map((function(e,a){return r.a.createElement("option",{key:a},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e.currentTarget.value)}},n),l)},re=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(A.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e.currentTarget.value)}),o=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,checked:n===e,value:e,onChange:c}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},le=t(30),ce=t.n(le),oe=["x","y","z"];var se=function(){var e=Object(n.useState)(oe[1]),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ce.a.wrapper},r.a.createElement("hr",null),r.a.createElement("h2",null," homeworks 7"),r.a.createElement("div",null,r.a.createElement(ne,{options:oe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(re,{name:"radio",options:oe,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},me=function(e,a){switch(a.type){case"sort":if("up"===a.payload)return Object(y.a)(e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})));if("down"===a.payload)return Object(y.a)(e.sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})));case"check":return e.filter((function(e){return e.age>18}));default:return e}},ue=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ie=function(){var e=Object(n.useState)(ue),a=Object(m.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},e.name+" "+e.age)}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 8"),c,r.a.createElement("div",null,r.a.createElement(G,{onClick:function(){return l(me(ue,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null," ",r.a.createElement(G,{onClick:function(){return l(me(ue,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null," ",r.a.createElement(G,{onClick:function(){return l(me(ue,{type:"check"}))}},"check")),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(31),Ee=t.n(pe);var _e=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(),o=Object(m.a)(c,2),s=o[0],u=o[1],i=Object(n.useState)(!1),p=Object(m.a)(i,2),E=p[0],_=p[1],d=function(){clearInterval(t)},f="Time "+(null===s||void 0===s?void 0:s.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric"})),h="Date "+(null===s||void 0===s?void 0:s.toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric",weekday:"long"}));return r.a.createElement("div",{className:Ee.a.wrapper},r.a.createElement("div",{onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)}},f),E&&r.a.createElement("div",null,h),r.a.createElement(G,{onClick:function(){d();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(G,{onClick:d},"stop"))};var de=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"homeworks 9"),r.a.createElement(_e,null),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(se,null),r.a.createElement(ie,null),r.a.createElement(de,null))};var he=function(){return r.a.createElement("div",null,"Hello Middle!!!")},ve=t(32),be=t.n(ve),ge="/pre-junior",Ce="/junior",ke="/middle";var Ne=function(){return r.a.createElement("div",{className:be.a.item2},r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(){return r.a.createElement(u.a,{to:ge})}}),r.a.createElement(u.b,{path:ge,render:function(){return r.a.createElement(ae,null)}}),r.a.createElement(u.b,{path:Ce,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(u.b,{path:ke,render:function(){return r.a.createElement(he,null)}}),r.a.createElement(u.b,{render:function(){return r.a.createElement(te,null)}})))},we=t(7),Oe=t.n(we),je=t(8);var ye=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:Oe.a.wrapper},r.a.createElement("div",{className:Oe.a.menu_btm,onClick:function(){l(!t)}},"\u2630"),r.a.createElement("div",{className:t?Oe.a.item1:Oe.a.item1_active},r.a.createElement("div",null,r.a.createElement(je.b,{to:ge,className:Oe.a.item},"PRE_JUNIOR")),r.a.createElement("div",null,r.a.createElement(je.b,{to:Ce,className:Oe.a.item},"JUNIOR")),r.a.createElement("div",null,r.a.createElement(je.b,{to:ke,className:Oe.a.item},"MIDDLE"))))};var xe=function(){return r.a.createElement("div",{className:s.a.wrapper},r.a.createElement(je.a,null,r.a.createElement(ye,null),r.a.createElement(Ne,null)))};var Se=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("h2",null,"react homeworks:"),r.a.createElement(xe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.8b3dbc5c.chunk.js.map