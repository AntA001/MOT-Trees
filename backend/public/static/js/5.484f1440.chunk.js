(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{243:function(e,t,n){},244:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var a=n(53),r=n.n(a),i=n(59),u=n(47),l=n(10),o=n(0),c=n.n(o),s=n(144),p=n(48),d=function(e,t){var n,a=!0,r=Object(p.a)(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;"REQUIRE"===i.type&&(a=a&&e.trim().length>0),"MINLENGTH"===i.type&&(a=a&&e.trim().length>=i.val),"MAXLENGTH"===i.type&&(a=a&&e.trim().length<=i.val),"MIN"===i.type&&(a=a&&+e>=i.val),"MAX"===i.type&&(a=a&&+e<=i.val),"EMAIL"===i.type&&(a=a&&/^\S+@\S+\.\S+$/.test(e))}}catch(u){r.e(u)}finally{r.f()}return a},f=(n(243),function(e,t){switch(t.type){case"CHANGE":return Object(u.a)(Object(u.a)({},e),{},{value:t.val,isValid:d(t.val,t.validators)});case"TOUCH":return Object(u.a)(Object(u.a)({},e),{},{isTouched:!0});default:return e}}),b=function(e){var t=Object(o.useReducer)(f,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),n=Object(l.a)(t,2),a=n[0],r=n[1],i=e.id,u=e.onInput,s=a.value,p=a.isValid;Object(o.useEffect)((function(){u(i,s,p)}),[i,s,p,u]);var d=function(t){r({type:"CHANGE",val:t.target.value,validators:e.validators})},b=function(){r({type:"TOUCH"})},v="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:d,onBlur:b,value:a.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:d,onBlur:b,value:a.value});return c.a.createElement("div",{className:"form-control ".concat(!a.isValid&&a.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),v,!a.isValid&&a.isTouched&&c.a.createElement("p",null,e.errorText))},v=n(114),m=n(145),O=n(16),y=n(51),j=function(e,t){switch(t.type){case"INPUT_CHANGE":var n=!0;for(var a in e.inputs)e.inputs[a]&&(n=a===t.inputId?n&&t.isValid:n&&e.inputs[a].isValid);return Object(u.a)(Object(u.a)({},e),{},{inputs:Object(u.a)(Object(u.a)({},e.inputs),{},Object(y.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:n});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}},h=n(101),E=n(11);n(244),t.default=function(){var e,t=Object(o.useContext)(E.a),n=Object(o.useState)(!0),a=Object(l.a)(n,2),p=a[0],d=a[1],f=Object(h.a)(),y=f.isLoading,w=f.error,g=f.sendRequest,T=f.clearError,V=function(e,t){var n=Object(o.useReducer)(j,{inputs:e,isValid:t}),a=Object(l.a)(n,2),r=a[0],i=a[1];return[r,Object(o.useCallback)((function(e,t,n){i({type:"INPUT_CHANGE",value:t,isValid:n,inputId:e})}),[]),Object(o.useCallback)((function(e,t){i({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}({email:{value:"",isValid:!1},password:{value:"",isValid:!1}},!1),I=Object(l.a)(V,3),S=I[0],N=I[1],k=I[2],C=function(){var e=Object(i.a)(r.a.mark((function e(n){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!p){e.next=13;break}return e.prev=2,e.next=5,g("https://mottrees.herokuapp.com/api/users/login","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 5:a=e.sent,t.login(a.userId,a.token),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:e.next=22;break;case 13:return e.prev=13,e.next=16,g("https://mottrees.herokuapp.com/api/users/signup","POST",JSON.stringify({email:S.inputs.email.value,password:S.inputs.password.value}),{"Content-Type":"application/json"});case 16:i=e.sent,t.login(i.userId,i.token),e.next=22;break;case 20:e.prev=20,e.t1=e.catch(13);case 22:case"end":return e.stop()}}),e,null,[[2,9],[13,20]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{error:w,onClear:T}),c.a.createElement(s.a,{className:"authentication"},y&&c.a.createElement(O.a,{asOverlay:!0}),c.a.createElement("h2",null,"\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7"),c.a.createElement("hr",null),c.a.createElement("form",{onSubmit:C},c.a.createElement(b,{element:"input",id:"email",type:"email",label:"E-Mail",validators:[{type:"EMAIL"}],errorText:"\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf email.",onInput:N}),c.a.createElement(b,{element:"input",id:"password",type:"password",label:"\u039a\u03c9\u03b4\u03b9\u03ba\u03cc\u03c2 \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2",validators:[(e=6,{type:"MINLENGTH",val:e})],errorText:"\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c7\u03c1\u03b7\u03c3\u03b9\u03bc\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03c4\u03b5 \u03ad\u03b3\u03ba\u03c5\u03c1\u03bf \u03ba\u03c9\u03b4\u03b9\u03ba\u03cc \u03c0\u03c1\u03cc\u03c3\u03b2\u03b1\u03c3\u03b7\u03c2. \u03a4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03ad\u03be\u03b9 \u03c7\u03b1\u03c1\u03b1\u03ba\u03c4\u03ae\u03c1\u03b5\u03c2.",onInput:N}),c.a.createElement(v.a,{type:"submit",disabled:!S.isValid},p?"\u03a3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7":"\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bd\u03ad\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd")),c.a.createElement(v.a,{inverse:!0,onClick:function(){k(Object(u.a)({},S.inputs),!p&&(S.inputs.email.isValid&&S.inputs.password.isValid)),d((function(e){return!e}))}},"\u039c\u03b5\u03c4\u03b1\u03c6\u03b5\u03c1\u03b8\u03b5\u03af\u03c4\u03b5 \u03c3\u03c4\u03b7\u03bd ",p?"\u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03af\u03b1 \u03bd\u03ad\u03bf\u03c5 \u03bb\u03bf\u03b3\u03b1\u03c1\u03b9\u03b1\u03c3\u03bc\u03bf\u03cd":"\u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7")))}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(51);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(17);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,u=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return u=e.done,e},e:function(e){l=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(l)throw i}}}}},51:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.484f1440.chunk.js.map