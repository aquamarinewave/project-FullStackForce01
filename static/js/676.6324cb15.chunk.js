"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{3439:function(n,e,t){t(2791);e.Z=t.p+"static/media/icons.150bbff73e55b87e0352699f077a0bc0.svg"},8751:function(n,e,t){t.r(e),t.d(e,{ContainerRadioButton:function(){return d},RadioButton:function(){return s},RadioInput:function(){return u}});var r,i,a,o=t(168),l=t(7691),c=t(5705),d=l.ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n  }\n"]))),s=l.ZP.label(i||(i=(0,o.Z)(["\n  display: inline-block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n"])),(function(n){return n.checked?"var(--dark-blue)":"var(--lightblue)"}),(function(n){return n.checked?"#fef9f9":"var(--dark-blue)"})),u=(0,l.ZP)(c.gN)(a||(a=(0,o.Z)(["\n  display: none;\n\n  &:checked + "," {\n    background-color: var(--dark-blue);\n    color: #fef9f9;\n  }\n"])),s)},8676:function(n,e,t){t.r(e),t.d(e,{default:function(){return qn}});var r,i,a,o,l,c,d,s,u,p,h,x,f,m,g,v,b,w,y,Z,j,k,P,R,_,C,B,S,z=t(4165),T=t(1413),F=t(5861),N=t(9439),q=t(2791),I=t(7689),A=t(9434),L=t(5705),M=t(6727),O=t(7758),E=t(184),G=t(8751),D=G.RadioButton,U=G.RadioInput,J=G.ContainerRadioButton,K=[{value:"your_pet",label:"your pet"},{value:"sell",label:"sell"},{value:"lost-found",label:"lost/found"},{value:"for-free",label:"in good hands"}],V=function(n){n.formik;var e=n.handleOptionChange,t=n.currentRadioButton;return(0,E.jsx)(J,{children:K.map((function(n){var r=n.value,i=n.label;return(0,E.jsxs)(D,{checked:t===r,children:[i,(0,E.jsx)(U,{type:"radio",name:"category",id:"option_".concat(r),value:r,onChange:e},"option_".concat(r))]},r)}))})},H=t(168),Q=t(7691),W=Q.ZP.div(r||(r=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-top: 36px;\n\n  @media screen and (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),X=Q.ZP.div(i||(i=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n  }\n"]))),Y=Q.ZP.label(a||(a=(0,H.Z)(["\n  display: block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),$=(0,Q.ZP)(L.gN)(o||(o=(0,H.Z)(["\n  max-width: 100%;\n  height: 40px;\n  padding: 8px 16px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  border: 1px solid var(--dark-blue);\n  border-radius: 40px;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    padding: 12px 16px;\n    height: 48px;\n  }\n\n  &::placeholder {\n    color: #888;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n\n    @media screen and (min-width: 768px) {\n      font-size: 16px;\n    }\n  }\n  &:hover {\n    border: 1px solid var(--accent-color);\n  }\n"]))),nn=[{name:"title",placeholder:"Title of add",label:"Title of add"},{name:"name",placeholder:"Type name pet",label:"Pet\u2019s name"},{name:"birthday",placeholder:"Type date of birth",label:"Date of birth"},{name:"type",placeholder:"Type of pet",label:"Type"}],en=function(n){var e=n.formik,t=n.currentRadioButton,r=function(n){switch(n){case"birthday":return"date";case"price":return"number";default:return"text"}};return(0,E.jsx)(W,{children:nn.map((function(n){var i=n.name,a=n.placeholder,o=n.label;return"your_pet"===t&&["title"].includes(i)?null:(0,E.jsxs)(X,{children:[(0,E.jsx)(Y,{htmlFor:i,children:o}),(0,E.jsx)($,{type:r(i),id:i,name:i,autoComplete:"off",placeholder:a,value:e.values[i]}),e.touched[i]&&e.errors[i]&&(0,E.jsx)("div",{style:{color:"red"},children:e.errors[i]})]},i)}))})},tn=t(3439),rn=Q.ZP.div(l||(l=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 36px;\n  gap: 12px;\n  @media screen and (min-width: 768px) {\n    flex-direction: ",";\n    gap: ",";\n  }\n"])),(function(n){return n.currentRadioButton?"row":"column"}),(function(n){return n.currentRadioButton?"34px":"24px"})),an=Q.ZP.div(c||(c=(0,H.Z)(["\n  display: flex;\n  gap: 14px;\n  align-items: center;\n  @media screen and (min-width: 768px) {\n    flex-direction: ",";\n    align-items: ",";\n    margin-top: ",";\n    gap: ",";\n  }\n"])),(function(n){return n.currentRadioButton?"column":"row"}),(function(n){return n.currentRadioButton?"start":"center"}),(function(n){return n.currentRadioButton?"40px":"0"}),(function(n){return n.currentRadioButton?"8px":"16px"})),on=Q.ZP.p(d||(d=(0,H.Z)(["\n  width: 81px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    width: ",";\n  }\n"])),(function(n){return n.currentRadioButton?"200px":"114px"})),ln=Q.ZP.div(s||(s=(0,H.Z)(["\n  position: relative;\n  width: 112px;\n  height: 112px;\n  border-radius: 20px;\n  overflow: hidden;\n  @media screen and (min-width: 768px) {\n    width: 182px;\n    height: 182px;\n    border-radius: 40px;\n  }\n"]))),cn=Q.ZP.div(u||(u=(0,H.Z)(["\n  background-color: var(--lightblue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),dn=Q.ZP.span(p||(p=(0,H.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n  }\n"]))),sn=(0,Q.ZP)(L.gN)(h||(h=(0,H.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n"]))),un=(0,Q.ZP)(L.gN)(x||(x=(0,H.Z)(["\n  margin-top: 4px;\n  width: 100%;\n  height: 92px;\n\n  @media screen and (min-width: 768px) {\n    height: ",";\n  }\n"])),(function(n){return n.heightTextarea})),pn=Q.ZP.textarea(f||(f=(0,H.Z)(["\n  /* height: 92px; */\n  padding: 8px 16px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 20px;\n  resize: vertical;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n  }\n"]))),hn=Q.ZP.svg(m||(m=(0,H.Z)(["\n  width: 30px;\n  height: 30px;\n  stroke: var(--dark-blue);\n\n  @media screen and (min-width: 768px) {\n    width: 48px;\n    height: 48px;\n  }\n"]))),xn=Q.ZP.svg(g||(g=(0,H.Z)(["\n  width: 24px;\n  height: 24px;\n  fill: none;\n\n  &.male-icon {\n    stroke: ",";\n  }\n  &.female-icon {\n    stroke: ",";\n  }\n"])),(function(n){return function(n){switch(n){case"male":return"#fef9f9";case"female":return"#888";default:return"var(--dark-blue)"}}(n.selectedGender)}),(function(n){return function(n){switch(n){case"female":return"#fef9f9";case"male":return"#888";default:return"var(--fail-color)"}}(n.selectedGender)})),fn=Q.ZP.label(v||(v=(0,H.Z)(["\n  display: flex;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  margin-bottom: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n\n  input {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0;\n  }\n"])),(function(n){return n.checked?"var(--dark-blue)":null}),(function(n){return n.checked?"#fef9f9":"#888"})),mn=Q.ZP.div(b||(b=(0,H.Z)(["\n  display: flex;\n  width: 100%;\n"]))),gn=Q.ZP.div(w||(w=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),vn=Q.ZP.div(y||(y=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  width: 100%;\n\n  @media screen and (min-width: 768px) {\n    gap: 24px;\n  }\n"]))),bn=[{value:"female",label:"Female"},{value:"male",label:"Male"}],wn=function(n){switch(n){case"your_pet":case"sell":return"79px";default:return"182px"}},yn=function(n){var e=n.showPlaceholder,t=n.setPreviewImage,r=n.setShowPlaceholder,i=n.previewImage,a=n.formik,o=n.setSelectedFile,l=n.currentRadioButton;return(0,E.jsxs)(rn,{currentRadioButton:"your_pet"!==l,children:[(0,E.jsxs)(gn,{children:["your_pet"!==l&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(on,{children:"The sex"}),(0,E.jsx)(mn,{children:bn.map((function(n){var e=n.value,t=n.label;return(0,E.jsxs)(fn,{checked:a.values.sex===e,children:[(0,E.jsx)(xn,{className:"male"===e?"male-icon":"female-icon",selectedGender:a.values.sex,children:(0,E.jsx)("use",{href:"".concat(tn.Z,"#icon-").concat(e)})}),t,(0,E.jsx)(L.gN,{type:"radio",name:"sex",id:"opt".concat(e),value:e,onChange:a.handleChange},"opt".concat(e))]},e)}))})]}),(0,E.jsxs)(an,{currentRadioButton:"your_pet"!==l,children:[(0,E.jsx)(on,{currentRadioButton:"your_pet"!==l,children:"Load the pet\u2019s image:"}),(0,E.jsxs)(ln,{children:[e?(0,E.jsx)(cn,{children:(0,E.jsx)(hn,{children:(0,E.jsx)("use",{href:"".concat(tn.Z,"#icon-plus")})})}):(0,E.jsx)("img",{src:i,alt:"Selected",style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,E.jsx)(sn,{type:"file",id:"avatar",name:"avatar",accept:"image/*",onChange:function(n){var e=n.currentTarget.files[0];e?(o(e),t(URL.createObjectURL(e)),r(!1)):(o(null),r(!0),t("")),a.handleChange(n)}})]})]})]}),(0,E.jsxs)(vn,{children:["your_pet"!==l&&(0,E.jsxs)(X,{children:[(0,E.jsx)(Y,{htmlFor:"location",children:"Location"}),(0,E.jsx)($,{type:"text",id:"location",name:"location",autoComplete:"off",placeholder:"Type of location",value:a.values.location,onChange:a.handleChange})]},"location"),"sell"===l&&(0,E.jsxs)(X,{children:[(0,E.jsx)(Y,{htmlFor:"price",children:"Price"}),(0,E.jsx)($,{type:"text",id:"price",name:"price",autoComplete:"off",placeholder:"Type of price",value:a.values.price,onChange:a.handleChange})]},"price"),(0,E.jsxs)("div",{children:[(0,E.jsx)(dn,{children:"Comments"}),(0,E.jsx)(un,{heightTextarea:wn(l),as:pn,id:"comments",name:"comments",placeholder:"Type of pet",value:a.values.comments,onChange:a.handleChange})]})]})]})},Zn=Q.ZP.svg(Z||(Z=(0,H.Z)(["\n  fill: var(--bg-color);\n  stroke: var(--dark-blue);\n"]))),jn=Q.ZP.button(j||(j=(0,H.Z)(["\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  background-color: var(--dark-blue);\n  border: none;\n  border-radius: 40px;\n  padding: 8px 28px;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  color: #fef9f9;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.64px;\n\n  @media screen and (min-width: 768px) {\n    /* flex-direction: row-reverse; */\n    width: 248px;\n    /* min-height: 542px;  */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 280px; */\n    /* min-height: 542px; */\n    /* margin-top: 20px; */\n  }\n\n  & span {\n    margin: auto 0;\n    text-align: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n  &:active {\n    background-color: #fef9f9;\n    color: var(--dark-blue);\n\n    "," {\n      fill: var(--dark-blue);\n    }\n  }\n  &:last-child {\n    background-color: transparent;\n    color: var(--dark-blue);\n    text-align: center;\n    align-content: center;\n    align-items: center;\n    @media screen and (min-width: 768px) {\n      /* flex-direction: row-reverse; */\n      width: 148px;\n      /* min-height: 542px;  */\n    }\n\n    @media screen and (min-width: 1280px) {\n      /* width: 280px; */\n      /* min-height: 542px; */\n      /* margin-top: 20px; */\n    }\n  }\n  &:last-child:hover {\n    background-color: var(--dark-blue);\n    color: #fef9f9;\n\n    "," {\n      stroke: var(--container-bg);\n    }\n  }\n"])),Zn,Zn),kn=function(n){var e=n.handleNextStage,t=n.handleCancelStage,r=n.currentStage;return(0,E.jsxs)(E.Fragment,{children:["third"!==r&&(0,E.jsxs)(jn,{type:"button",onClick:e,children:[(0,E.jsx)("span",{children:"Next"}),(0,E.jsx)(Zn,{width:24,height:24,children:(0,E.jsx)("use",{href:"".concat(tn.Z,"#icon-pawprint-1")})})]}),"third"===r&&(0,E.jsxs)(jn,{type:"submit",children:[(0,E.jsx)("span",{children:"Done"}),(0,E.jsx)(Zn,{width:24,height:24,children:(0,E.jsx)("use",{href:"".concat(tn.Z,"#icon-pawprint-1")})})]}),(0,E.jsxs)(jn,{type:"button",onClick:t,children:[(0,E.jsx)(Zn,{width:24,height:24,children:(0,E.jsx)("use",{href:"".concat(tn.Z,"#icon-arrow-left")})}),(0,E.jsx)("span",{children:"first"===r?"Cancel":"Back"})]})]})},Pn=Q.ZP.h3(k||(k=(0,H.Z)(["\n  position: relative;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: 80px;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 120px;\n    font-size: 16px;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    background-color: ",";\n    border-radius: 8px;\n    width: 80px;\n    height: 8px;\n    top: 25px;\n    left: 0;\n    @media screen and (min-width: 768px) {\n      width: 120px;\n      top: 35px;\n    }\n  }\n  &:nth-child(2) {\n    color: ",";\n  }\n  &:nth-child(2)::after {\n    background-color: ",";\n  }\n  &:last-child {\n    color: ",";\n  }\n  &:last-child::after {\n    background-color: ",";\n  }\n"])),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return n.title}),(function(n){return"#888"===n.title?"var(--lightblue)":n.title}),(function(n){return"third"===n.current?"var(--dark-blue)":"#888"}),(function(n){return"third"===n.current?"var(--dark-blue)":"var(--lightblue)"})),Rn=Q.ZP.div(P||(P=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 280px;\n  min-height: 496px;\n  padding: 20px 8px;\n  margin: 20px auto 0;\n  background-color: #fff;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  border-radius: 40px;\n  @media screen and (min-width: 768px) {\n    width: ",";\n    min-height: 542px;\n    padding: 32px;\n    margin-top: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: ",";\n    margin-top: 40px;\n  }\n"])),(function(n){return"third"===n.currentStage&&"your_pet"!==n.currentRadioButton?"704px":"458px"}),(function(n){return"third"===n.currentStage&&"your_pet"!==n.currentRadioButton?"822px":"458px"})),_n=(0,Q.ZP)(L.l0)(R||(R=(0,H.Z)(["\n  display: flex;\n"]))),Cn=Q.ZP.h2(_||(_=(0,H.Z)(["\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: fit-content;\n  margin-left: 12px;\n  margin-bottom: 24px;\n  color: #111;\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n    margin: ",";\n  }\n"])),(function(n){return"third"===n.currentStage&&"your_pet"!==n.currentRadioButton?"0 auto 24px auto":"0 0 24px 0"})),Bn=Q.ZP.div(C||(C=(0,H.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  color: red;\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n  }\n"]))),Sn=Q.ZP.div(B||(B=(0,H.Z)(["\n  margin: 0 auto;\n"]))),zn=Q.ZP.div(S||(S=(0,H.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px 0;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    margin-top: 17px;\n    justify-content: center;\n  }\n"]))),Tn=function(n){switch(n){case"second":return"var(--dark-blue)";case"third":return"var(--success-color)";default:return"#888"}},Fn=function(n){switch(n){case"sell":return"Add pet for sale";case"lost-found":return"Add lost pet";case"for-free":return"Add a pet in good hands";default:return"Add pet"}},Nn=function(){var n=(0,A.I0)(),e=(0,I.s0)(),t=(0,q.useState)("first"),r=(0,N.Z)(t,2),i=r[0],a=r[1],o=(0,q.useState)("your_pet"),l=(0,N.Z)(o,2),c=l[0],d=l[1],s=(0,q.useState)(!0),u=(0,N.Z)(s,2),p=u[0],h=u[1],x=(0,q.useState)(""),f=(0,N.Z)(x,2),m=f[0],g=f[1],v=(0,q.useState)(!1),b=(0,N.Z)(v,2),w=b[0],y=b[1],Z=(0,q.useState)(null),j=(0,N.Z)(Z,2),k=j[0],P=j[1],R={title:"",category:c,avatar:"",name:"",birthday:"",type:"",sex:"",comments:"",location:"",price:""};(0,q.useEffect)((function(){w&&("your_pet"===c?e("/user"):"your_pet"!==c&&e("/notices/".concat(c)))}),[w,c,e]);var _,C=function(){"first"===i?a("second"):"second"===i&&a("third")},B=function(){"second"===i?a("first"):"third"===i?a("second"):e(-1)},S=function(){var e=(0,F.Z)((0,z.Z)().mark((function e(t,r){var i,a,o;return(0,z.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.setSubmitting,a=r.resetForm,o=(0,T.Z)((0,T.Z)({},t),{},{avatar:k}),e.prev=2,"your_pet"!==c){e.next=8;break}return e.next=6,n(O.Z.addPetThunk(o));case 6:e.next=10;break;case 8:return e.next=10,n(O.Z.addNoticeThunk(o));case 10:y(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error submitting form:",e.t0);case 16:i(!1),a();case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,E.jsx)(L.J9,{initialValues:R,validationSchema:(_=k,M.Ry().shape({category:M.Z_().oneOf(["sell","lost-found","for-free","your_pet"]).required(),name:M.Z_().required().min(2).max(16),birthday:M.hT().required(),type:M.Z_().required().min(2).max(16),avatar:M.nK().test("required","Please select a file",(function(){return!!_})),sex:M.Z_().when("category",{is:function(n){return["sell","lost-found","for-free"].includes(n)},then:function(){return M.Z_().oneOf(["male","female"]).required()}}),location:M.Z_().when("category",{is:function(n){return["sell","lost-found","for-free"].includes(n)},then:function(){return M.Z_().required("Location is required")}}),price:M.Rx().when("category",{is:"sell",then:function(){return M.Rx().required().positive().typeError("Price must be a number")}}),comments:M.Z_().max(120)})),onSubmit:S,children:function(n){return(0,E.jsx)(_n,{children:(0,E.jsxs)(Rn,{currentStage:i,currentRadioButton:c,children:[(0,E.jsxs)("div",{children:[(0,E.jsxs)(Cn,{currentStage:i,currentRadioButton:c,children:["first"!==i?Fn(c):"Add pet"," "]}),(0,E.jsxs)(Bn,{children:[(0,E.jsx)(Pn,{current:i,children:"Choose option"}),(0,E.jsx)(Pn,{title:Tn(i),current:i,children:"Personal details"}),(0,E.jsx)(Pn,{current:i,children:"More info"})]}),(0,E.jsxs)(Sn,{children:["first"===i&&(0,E.jsx)(V,{currentRadioButton:c,handleOptionChange:function(e){d(e.target.value),n.handleChange(e)},formik:n}),"second"===i&&(0,E.jsx)(en,{currentRadioButton:c,formik:n}),"third"===i&&(0,E.jsx)(yn,{formik:n,currentRadioButton:c,showPlaceholder:p,previewImage:m,setPreviewImage:g,setShowPlaceholder:h,setSelectedFile:P})]})]}),(0,E.jsx)(zn,{children:(0,E.jsx)(kn,{currentStage:i,handleNextStage:C,handleCancelStage:B})})]})})}})},qn=function(){return(0,E.jsx)(Nn,{})}}}]);
//# sourceMappingURL=676.6324cb15.chunk.js.map