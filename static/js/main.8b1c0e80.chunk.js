(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{155:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(3),r=n(32),s=n.n(r),o=n(10),i=n(11),u=n.n(i),l=n(13),d=n(19),j=n(21),b=n(12),p=n(35),f=n(6),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(d.a)(t,2),a=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},o=function(e){var t=e.target;r(Object(f.a)(Object(f.a)({},a),{},Object(p.a)({},t.name,t.value)))};return[a,o,s]},m=n(22),O=n.n(m),x=n(30);n(76),n(77);x.a.initializeApp({apiKey:"AIzaSyAXr83ffE_fctk1yM0OEG4V5bkRQXEhg3k",authDomain:"journalapp-react-2b5f7.firebaseapp.com",databaseURL:"https://journalapp-react-2b5f7.firebaseio.com",projectId:"journalapp-react-2b5f7",storageBucket:"journalapp-react-2b5f7.appspot.com",messagingSenderId:"567903171795",appId:"1:567903171795:web:31fe26407e5f29e9ee1026"});var v=x.a.firestore(),_=new x.a.auth.GoogleAuthProvider,g="[Auth] Login",y="[Auth] Logout",N="[UI] Set Error",w="[UI] Remove Error",k="[UI] Start loading",E="[UI] Finish loading",C="[Notes] New note",S="[Notes] Set active note",I="[Notes] Load notes",A="[Notes] Updated note",L="[Notes] Delete note",P="[Notes] Logout Cleaning",D=function(e){return{type:N,payload:e}},U=function(){return{type:E}},R=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(f.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dnkqzaolo/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dnkqzaolo/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),W=function(e,t){return{type:S,payload:Object(f.a)({id:e},t)}},q=function(e,t){return{type:C,payload:Object(f.a)({id:e},t)}},G=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:a=t.sent,n(T(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=function(e){return{type:I,payload:e}},X=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(f.a)({},e)).id,t.next=6,v.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(B(e.id,r)),O.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},B=function(e,t){return{type:A,payload:{id:e,note:Object(f.a)({id:e},t)}}},F=function(e){return{type:L,payload:e}},J=function(e,t){return function(n){n({type:k}),x.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(M(t.uid,t.displayName)),n(U())})).catch((function(e){n(U()),O.a.fire("Error",e.message,"error")}))}},M=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},V=function(){return{type:y}},K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=h({email:"demo@gmail.com",password:"123456"}),c=Object(d.a)(n,2),r=c[0],s=c[1],i=r.email,u=r.password;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(J(i,u))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:u,onChange:s}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disable:t.toString(),children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){x.a.auth().signInWithPopup(_).then((function(t){var n=t.user;e(M(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with google"})})]})]}),Object(a.jsx)(j.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},Q=n(62),H=n.n(Q),Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=h({name:"",email:"",password:"",password2:""}),c=Object(d.a)(n,2),r=c[0],s=c[1],i=r.name,b=r.email,p=r.password,f=r.password2,m=function(){return 0===i.trim().length?(e(D("Name is required")),!1):H.a.isEmail(b)?p!==f||p.length<5?(e(D("Password should be at least 6 characters and match each other")),!1):(e({type:w}),!0):(e(D("Email is not valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,n){return function(a){x.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(M(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){O.a.fire("Error",e.message,"error")}))}}(b,p,i))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(a.jsx)("div",{className:"auth__alert-error",children:t}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:s}),Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:b,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:s}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:f,onChange:s}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Register"}),Object(a.jsx)(j.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},Z=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{exact:!0,path:"/auth/login",component:K}),Object(a.jsx)(b.b,{exact:!0,path:"/auth/register",component:Y}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})},$=n(63),ee=n.n($),te=function(e){var t=e.id,n=e.date,c=e.title,r=e.body,s=e.url,i=Object(o.b)(),u=ee()(n);return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster ",onClick:function(){i(W(t,{date:n,title:c,body:r,url:s}))},children:[s&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(s,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:c}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:u.format("dddd")}),Object(a.jsx)("h4",{children:u.format("Do")})]})]})},ne=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(a.jsx)(te,Object(f.a)({},e),e.id)}))})},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"fa fa-moon"}),Object(a.jsxs)("span",{children:[" ",t," "]})]}),Object(a.jsx)("button",{className:"btn pointer",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.auth().signOut();case 2:t(V()),t({type:P});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry pointer",onClick:function(){e(function(){var e=Object(l.a)(u.a.mark((function e(t,n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,v.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(W(r.id,c)),t(q(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New Entry"})]}),Object(a.jsx)(ne,{})]})},ce=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:["Select something",Object(a.jsx)("br",{}),"pr create an entry"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},re=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"18 Noviembre 2020"}),Object(a.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,O.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,onBeforeOpen:function(){O.a.showLoading()}}),t.next=4,z(e);case 4:r=t.sent,c.url=r,n(X(c)),O.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn pointer",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn pointer",onClick:function(){e(X(t))},children:"Save"})]})]})},se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=h(t),r=Object(d.a)(n,3),s=r[0],i=r[1],j=r[2],b=s.body,p=s.title,m=s.id,O=Object(c.useRef)(t.Id);Object(c.useEffect)((function(){t.id!==O.current&&(j(t),O.current=t.id)}),[t,j]),Object(c.useEffect)((function(){e(W(s.id,Object(f.a)({},s)))}),[s,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(re,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",onChange:i,value:p}),Object(a.jsx)("textarea",{placeholder:"What happend today",className:"notes__textarea",name:"body",onChange:i,value:b}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"Imagen"})})]}),Object(a.jsx)("button",{className:"btn btn-danger pointer",onClick:function(){e(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n,a){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,v.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(F(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(m))},children:"Delete"})]})},oe=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(ae,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(se,{}):Object(a.jsx)(ce,{})})]})},ie=n(36),ue=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ie.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(f.a)(Object(f.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(f.a)({},e)):Object(a.jsx)(b.a,{to:"auth/login"})}}))},le=function(e){var t=e.isAuthenticated,n=e.component,c=Object(ie.a)(e,["isAuthenticated","component"]);return Object(a.jsx)(b.b,Object(f.a)(Object(f.a)({},c),{},{component:function(e){return t?Object(a.jsx)(b.a,{to:"/"}):Object(a.jsx)(n,Object(f.a)({},e))}}))},de=function(){var e=Object(o.b)(),t=Object(c.useState)(!0),n=Object(d.a)(t,2),r=n[0],s=n[1],i=Object(c.useState)(!1),p=Object(d.a)(i,2),f=p[0],h=p[1];return Object(c.useEffect)((function(){x.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(M(n.uid,n.displayName)),h(!0),e(G(n.uid))):h(!1),s(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,s,h]),r?Object(a.jsx)("h1",{children:"Wait..."}):Object(a.jsx)(j.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(b.d,{children:[Object(a.jsx)(le,{isAuthenticated:f,path:"/auth",component:Z}),Object(a.jsx)(ue,{exact:!0,isAuthenticated:f,path:"/",component:oe}),Object(a.jsx)(b.a,{to:"/auth/login"})]})})})},je=n(24),be={loading:!1,msgError:null},pe=n(64),fe=n(46),he={notes:[],active:null},me="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.d,Oe=Object(je.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(f.a)(Object(f.a)({},e),{},{msgError:t.payload});case w:return Object(f.a)(Object(f.a)({},e),{},{msgError:null});case k:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case E:return Object(f.a)(Object(f.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(f.a)(Object(f.a)({},e),{},{notes:[t.payload].concat(Object(fe.a)(e.notes))});case S:return Object(f.a)(Object(f.a)({},e),{},{active:Object(f.a)({},t.payload)});case I:return Object(f.a)(Object(f.a)({},e),{},{notes:Object(fe.a)(t.payload)});case A:return Object(f.a)(Object(f.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case L:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case P:return Object(f.a)(Object(f.a)({},e),{},{active:null,notes:[]});default:return e}}}),xe=Object(je.e)(Oe,me(Object(je.a)(pe.a))),ve=function(){return Object(a.jsx)(o.a,{store:xe,children:Object(a.jsx)(de,{})})};n(155);s.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.8b1c0e80.chunk.js.map