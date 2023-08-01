"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{3106:function(e,s,r){r.r(s),r.d(s,{default:function(){return g}});var a=r(1413),o=r(4165),n=r(5861),t=r(9439),i=r(5705),l=r(6727),d=r(9434),c=r(1352),u=r(9273),h=r(2791),p=r(3439),w=r(1014),m=r(854),x=r(184),j=(0,l.Ry)({email:(0,l.Z_)().required("Email is a required field").email("Please enter a valid email"),password:(0,l.Z_)().min(6,"Your password is too short.").max(16,"Your password is too long.").required("Password is a required field").matches(/[0-9]/,"Your password must have at least 1 number").matches(/[a-z]/,"Your password must have at least 1 lowercase letter").matches(/[A-Z]/,"Your password must have at least 1 uppercase letter")}),f={name:"",email:"",password:"",confirmPassword:""},v=function(e){var s=(0,d.I0)(),r=(0,h.useState)(!1),l=(0,t.Z)(r,2),v=l[0],g=l[1],Z=(0,d.v9)(w.Z.userErrorSelector),y=(0,d.v9)(w.Z.loadingSelector),b=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(r,a){var n,t,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.resetForm,t=r.email,i=r.password,s(u.Z.loginUser({email:t,password:i})),null===!Z&&n();case 4:case"end":return e.stop()}}),e)})));return function(s,r){return e.apply(this,arguments)}}();return(0,x.jsx)(x.Fragment,{children:y?(0,x.jsx)(m.Z,{props:{marginTop:"20%",marginLeft:"45%"}}):(0,x.jsxs)(c.ER,{children:[(0,x.jsx)(c.l3,{children:"Login"}),(0,x.jsx)(i.J9,{initialValues:f,validationSchema:j,onSubmit:b,children:function(s){var r=s.errors,o=s.touched,n=s.handleChange,t=s.handleBlur,l=s.values;s.isValid,s.isSubmitting;return(0,x.jsxs)(c.Bt,{children:[(0,x.jsxs)(c.sI,{children:[(0,x.jsx)(c.Ye,(0,a.Z)((0,a.Z)({},e),{},{type:"email",name:"email",placeholder:"Email",onChange:n,onBlur:t,value:l.email,valid:o.email&&!r.email,error:o.email&&r.email,autoCapitalize:"off",autoCorrect:"off",autoComplete:"email"})),r.email&&o.email&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.xp,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-cross-small")})})}),!r.email&&o.email&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.OP,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-check")})})})]}),(0,x.jsx)(i.Bc,{name:"email",render:function(e){return(0,x.jsx)(c.y,{children:e})}}),(0,x.jsxs)(c.sI,{children:[(0,x.jsx)(c.Ye,{type:v?"text":"password",name:"password",placeholder:"Password",onChange:n,onBlur:t,value:l.password,valid:o.password&&!r.password,error:o.password&&r.password}),r.password&&o.password&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.xp,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-cross-small")})})}),!r.password&&o.password&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.OP,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-check")})})}),v?(0,x.jsx)(c.xH,{type:"button",onClick:function(){return g(!v)},value:l.password,valid:o.password&&!r.password,error:o.password&&r.password,children:(0,x.jsx)(c.ln,{width:24,height:24,valid:o.password&&!r.password,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-eye-open")})})}):(0,x.jsx)(c.xH,{type:"button",onClick:function(){return g(!v)},value:l.password,valid:o.password&&!r.password,error:o.password&&r.password,children:(0,x.jsx)(c.ln,{width:24,height:24,valid:o.password&&!r.password,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-eye-closed")})})})]}),o.password&&!r.password&&!v&&(0,x.jsx)(c.N0,{children:"Password is secure"}),r.password&&o.password&&(0,x.jsx)(i.Bc,{name:"password",render:function(e){return(0,x.jsx)(c.y,{children:e})}}),(0,x.jsx)(c.c_,{type:"submit",children:"Login"}),(0,x.jsxs)(c.fV,{children:["Don't have an account? ",(0,x.jsx)(c.ZA,{to:"/register",children:"Registration"})]})]})}})]})})};var g=function(){return(0,x.jsx)(v,{})}}}]);
//# sourceMappingURL=106.5fb22575.chunk.js.map