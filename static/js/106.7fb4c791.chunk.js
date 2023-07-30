"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{3106:function(e,s,r){r.r(s),r.d(s,{default:function(){return Z}});var a=r(1413),o=r(4165),t=r(5861),n=r(9439),i=r(5705),l=r(6727),d=r(9434),c=r(8665),u=r(9273),h=r(2791),p=r(3439),m=r(1014),w=r(5218),x=r(184),j=(0,l.Ry)({email:(0,l.Z_)().required().email("Please enter a valid email"),password:(0,l.Z_)().min(6,"Your password is too short.").max(16,"Your password is too long.").required().matches(/[0-9]/,"Your password must have at least 1 number").matches(/[a-z]/,"Your password must have at least 1 lowercase letter").matches(/[A-Z]/,"Your password must have at least 1 uppercase letter")}),f={name:"",email:"",password:"",confirmPassword:""},v=function(e){var s=(0,d.I0)(),r=(0,h.useState)(!1),l=(0,n.Z)(r,2),v=l[0],Z=l[1],g=(0,d.v9)(m.Z.userErrorSelector),y=function(){var e=(0,t.Z)((0,o.Z)().mark((function e(r,a){var t,n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.resetForm,n=r.email,i=r.password,s(u.Z.loginUser({email:n,password:i})),null===!g&&t();case 4:case"end":return e.stop()}}),e)})));return function(s,r){return e.apply(this,arguments)}}();return(0,x.jsxs)(c.ER,{children:[(0,x.jsx)(c.l3,{children:"Login"}),(0,x.jsx)(i.J9,{initialValues:f,validationSchema:j,onSubmit:y,children:function(s){var r=s.errors,o=s.touched,t=s.handleChange,n=s.handleBlur,l=s.values,d=s.isValid,u=s.isSubmitting;return(0,x.jsxs)(c.Bt,{children:[(0,x.jsxs)(c.sI,{children:[(0,x.jsx)(c.Ye,(0,a.Z)((0,a.Z)({},e),{},{type:"email",name:"email",placeholder:"Email",onChange:t,onBlur:n,value:l.email,valid:o.email&&!r.email,error:o.email&&r.email,autoCapitalize:"off",autoCorrect:"off",autoComplete:"email"})),r.email&&o.email&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.xp,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-cross-small")})})}),!r.email&&o.email&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.OP,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-check")})})}),r.email&&o.email&&(0,x.jsx)(i.Bc,{name:"email",render:function(e){return(0,x.jsx)(c.y,{children:e})}})]}),(0,x.jsxs)(c.sI,{children:[(0,x.jsx)(c.Ye,{type:v?"text":"password",name:"password",placeholder:"Password",onChange:t,onBlur:n,value:l.password,valid:o.password&&!r.password,error:o.password&&r.password}),r.password&&o.password&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.xp,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-cross-small")})})}),!r.password&&o.password&&(0,x.jsx)(c._e,{type:"button",children:(0,x.jsx)(c.OP,{width:24,height:24,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-check")})})}),v?(0,x.jsx)(c.xH,{type:"button",onClick:function(){return Z(!v)},value:l.password,valid:o.password&&!r.password,error:o.password&&r.password,children:(0,x.jsx)(c.ln,{width:24,height:24,valid:o.password&&!r.password,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-eye-closed")})})}):(0,x.jsx)(c.xH,{type:"button",onClick:function(){return Z(!v)},value:l.password,valid:o.password&&!r.password,error:o.password&&r.password,children:(0,x.jsx)(c.ln,{width:24,height:24,valid:o.password&&!r.password,children:(0,x.jsx)("use",{href:"".concat(p.Z,"#icon-eye-open")})})}),(0,x.jsx)(i.Bc,{name:"password",render:function(e){return(0,x.jsx)(c.y,{children:e})}})]}),(0,x.jsx)(c.c_,{disabled:!d||u,type:"submit",children:"Login"}),(0,x.jsxs)(c.fV,{children:["Don't have an account? ",(0,x.jsx)(c.ZA,{to:"/register",children:"Registration"})]}),(0,x.jsx)(w.x7,{})]})}})]})};var Z=function(){return(0,x.jsx)(v,{})}}}]);
//# sourceMappingURL=106.7fb4c791.chunk.js.map