"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{3439:function(n,e,t){t(2791);e.Z=t.p+"static/media/icons.29896e80873140f97ab240538dc1b43d.svg"},8751:function(n,e,t){t.r(e),t.d(e,{RadioButton:function(){return c},RadioInput:function(){return d}});var r,i,a=t(168),o=t(6444),l=t(5705),c=o.ZP.label(r||(r=(0,a.Z)(["\n  display: inline-block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  /* margin-right: 10px; */\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n"])),(function(n){return n.checked?"var(--dark-blue)":"var(--lightblue)"}),(function(n){return n.checked?"#fef9f9":"var(--dark-blue)"})),d=(0,o.ZP)(l.gN)(i||(i=(0,a.Z)(["\n  display: none;\n\n  &:checked + "," {\n    background-color: var(--dark-blue);\n    color: #fef9f9;\n  }\n"])),c)},8676:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pn}});var r,i,a,o,l,c,d,s,h,u,p,f,x,m,g,v,b,w,Z,j,y,k,P,C=t(4165),S=t(1413),F=t(5861),I=t(9439),z=t(2791),R=t(7689),_=t(9434),T=t(5705),N=t(7758),B=t(184),A=t(8751),L=A.RadioButton,M=A.RadioInput,O=[{value:"your_pet",label:"your pet"},{value:"sell",label:"sell"},{value:"lost-found",label:"lost/found"},{value:"for-free",label:"in good hands"}],D=function(n){var e=n.handleOptionChange,t=n.currentRadioButton;return(0,B.jsx)(B.Fragment,{children:O.map((function(n){var r=n.value,i=n.label;return(0,B.jsxs)(L,{checked:t===r,children:[i,(0,B.jsx)(M,{type:"radio",name:"category",id:"option_".concat(r),value:r,onChange:e},"option_".concat(r))]},r)}))})},E=t(168),G=t(6444),U=G.ZP.div(r||(r=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),H=G.ZP.label(i||(i=(0,E.Z)(["\n  display: block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"]))),J=(0,G.ZP)(T.gN)(a||(a=(0,E.Z)(["\n  max-width: 100%;\n  height: 40px;\n  padding: 8px 16px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  border: 1px solid var(--dark-blue);\n  border-radius: 40px;\n\n  &::placeholder {\n    color: #888;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n  }\n  &:hover {\n    border: 1px solid var(--accent-color);\n  }\n"]))),V=[{name:"title",placeholder:"Title of add",label:"Title of add"},{name:"name",placeholder:"Type name pet",label:"Pet\u2019s name"},{name:"birthday",placeholder:"Type date of birth",label:"Date of birth"},{name:"type",placeholder:"Type of pet",label:"Type"}],Y=function(n){var e=n.formik,t=n.currentRadioButton,r=function(n){switch(n){case"birthday":return"date";case"price":return"number";default:return"text"}};return(0,B.jsx)(B.Fragment,{children:V.map((function(n){var i=n.name,a=n.placeholder,o=n.label;return"your_pet"===t&&["title"].includes(i)?null:(0,B.jsxs)(U,{children:[(0,B.jsx)(H,{htmlFor:i,children:o}),(0,B.jsx)(J,{type:r(i),id:i,name:i,autoComplete:"off",placeholder:a,value:e.values[i]}),e.touched[i]&&e.errors[i]&&(0,B.jsx)("div",{style:{color:"red"},children:e.errors[i]})]},i)}))})},q=t(963),K=t(3439),Q=G.ZP.div(o||(o=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 207px;\n  margin-bottom: 24px;\n"]))),W=G.ZP.p(l||(l=(0,E.Z)(["\n  max-width: 81px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n"]))),X=G.ZP.div(c||(c=(0,E.Z)(["\n  position: relative;\n  width: 112px;\n  height: 112px;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),$=G.ZP.div(d||(d=(0,E.Z)(["\n  background-color: var(--lightblue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),nn=G.ZP.span(s||(s=(0,E.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n"]))),en=(0,G.ZP)(T.gN)(h||(h=(0,E.Z)(["\n  margin-top: 4px;\n  width: 100%;\n"]))),tn=(0,G.ZP)(T.gN)(u||(u=(0,E.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  cursor: pointer;\n"]))),rn=G.ZP.textarea(p||(p=(0,E.Z)(["\n  height: 92px;\n  padding: 8px 16px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 20px;\n  resize: vertical;\n"]))),an=G.ZP.svg(f||(f=(0,E.Z)(["\n  width: 24px;\n  height: 24px;\n  fill: none;\n\n  &.male-icon {\n    stroke: ",";\n  }\n  &.female-icon {\n    stroke: ",";\n  }\n"])),(function(n){return"male"===n.colorIcon?"#fef9f9":n.colorIcon}),(function(n){return"female"===n.colorIconFemale?"#fef9f9":n.colorIconFemale})),on=G.ZP.label(x||(x=(0,E.Z)(["\n  display: flex;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  margin-right: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n\n  input {\n    display: none;\n  }\n"])),(function(n){return n.checked?"var(--dark-blue)":null}),(function(n){return n.checked?"#fef9f9":"#888"})),ln=G.ZP.div(m||(m=(0,E.Z)(["\n  display: flex;\n"]))),cn=[{value:"female",label:"Female"},{value:"male",label:"Male"}],dn=function(n){switch(n){case"male":return"#fef9f9";case"female":return"#888";default:return"var(--dark-blue)"}},sn=function(n){switch(n){case"female":return"#fef9f9";case"male":return"#888";default:return"var(--fail-color)"}},hn=function(n){var e=n.showPlaceholder,t=n.setPreviewImage,r=n.setShowPlaceholder,i=n.setSelectedFile,a=n.previewImage,o=n.formik,l=n.currentRadioButton,c=n.selectedGender,d=n.handleSexChange;return(0,B.jsxs)(B.Fragment,{children:["your_pet"!==l&&(0,B.jsxs)(B.Fragment,{children:[" ",(0,B.jsx)(W,{children:"The sex"}),(0,B.jsx)(ln,{children:cn.map((function(n){var e=n.value,t=n.label;return(0,B.jsxs)(on,{checked:c===e,children:[(0,B.jsx)(an,{className:"male"===e?"male-icon":"female-icon",colorIcon:dn(c),colorIconFemale:sn(c),children:(0,B.jsx)("use",{href:"".concat(K.Z,"#icon-").concat(e)})}),t,(0,B.jsx)(T.gN,{type:"radio",name:"sex",id:"opt".concat(e),value:e,onChange:d},"opt".concat(e))]},e)}))})]}),(0,B.jsxs)(Q,{children:[(0,B.jsx)(W,{children:"Load the pet\u2019s image:"}),(0,B.jsxs)(X,{children:[e?(0,B.jsx)($,{children:(0,B.jsx)(q.Z,{name:"plus",color:"var(--dark-blue)",size:30})}):(0,B.jsx)("img",{src:a,alt:"Selected",style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,B.jsx)(tn,{type:"file",id:"photoInput",name:"avatar",accept:"image/*",onChange:function(n){var e=n.currentTarget.files[0];e?(i(e),t(URL.createObjectURL(e)),r(!1)):(r(!0),t(""),i(null))}})]})]}),"your_pet"!==l&&(0,B.jsxs)(U,{children:[(0,B.jsx)(H,{htmlFor:"location",children:"Location"}),(0,B.jsx)(J,{type:"text",id:"location",name:"location",autoComplete:"off",placeholder:"Type of location",value:o.values.location,onChange:o.handleChange})]},"location"),"sell"===l&&(0,B.jsxs)(U,{children:[(0,B.jsx)(H,{htmlFor:"price",children:"Price"}),(0,B.jsx)(J,{type:"text",id:"price",name:"price",autoComplete:"off",placeholder:"Type of price",value:o.values.price,onChange:o.handleChange})]},"price"),(0,B.jsxs)("div",{children:[(0,B.jsx)(nn,{children:"Comments"}),(0,B.jsx)(en,{as:rn,id:"comments",name:"comments",placeholder:"Type of pet",value:o.values.comments,onChange:o.handleChange})]})]})},un=G.ZP.svg(g||(g=(0,E.Z)(["\n  fill: var(--bg-color);\n  stroke: var(--dark-blue);\n"]))),pn=G.ZP.button(v||(v=(0,E.Z)(["\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  background-color: var(--dark-blue);\n  border: none;\n  border-radius: 40px;\n  padding: 8px 28px;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  color: #fef9f9;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.64px;\n\n  & span {\n    margin: auto 0;\n    text-align: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n  &:active {\n    background-color: #fef9f9;\n    color: var(--dark-blue);\n\n    "," {\n      fill: var(--dark-blue);\n    }\n  }\n  &:last-child {\n    background-color: transparent;\n    color: var(--dark-blue);\n    text-align: center;\n    align-content: center;\n    align-items: center;\n  }\n  &:last-child:hover {\n    background-color: var(--dark-blue);\n    color: #fef9f9;\n\n    "," {\n      stroke: var(--container-bg);\n    }\n  }\n"])),un,un),fn=function(n){var e=n.handleNextStage,t=n.handleCancelStage,r=n.currentStage;return(0,B.jsxs)(B.Fragment,{children:["third"!==r&&(0,B.jsxs)(pn,{type:"button",onClick:e,children:[(0,B.jsx)("span",{children:"Next"}),(0,B.jsx)(un,{width:24,height:24,children:(0,B.jsx)("use",{href:"".concat(K.Z,"#icon-pawprint-1")})})]}),"third"===r&&(0,B.jsxs)(pn,{type:"submit",children:[(0,B.jsx)("span",{children:"Done"}),(0,B.jsx)(un,{width:24,height:24,children:(0,B.jsx)("use",{href:"".concat(K.Z,"#icon-pawprint-1")})})]}),(0,B.jsxs)(pn,{type:"button",onClick:t,children:[(0,B.jsx)(un,{width:24,height:24,children:(0,B.jsx)("use",{href:"".concat(K.Z,"#icon-arrow-left")})}),(0,B.jsx)("span",{children:"first"===r?"Cancel":"Back"})]})]})},xn=G.ZP.h3(b||(b=(0,E.Z)(["\n  position: relative;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: 80px;\n  color: ",";\n  @media screen and (min-width: 768px) {\n    width: 120px;\n    /* min-height: 542px; */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 280px; */\n    /* min-height: 542px; */\n    /* margin-top: 20px; */\n  }\n  &:after {\n    content: '';\n    position: absolute;\n    background-color: ",";\n    border-radius: 8px;\n    width: 80px;\n    height: 8px;\n    top: 25px;\n    left: 0;\n    @media screen and (min-width: 768px) {\n      width: 120px;\n      /* min-height: 542px; */\n    }\n\n    @media screen and (min-width: 1280px) {\n      /* width: 280px; */\n      /* min-height: 542px; */\n      /* margin-top: 20px; */\n    }\n  }\n  &:nth-child(2) {\n    color: ",";\n  }\n  &:nth-child(2)::after {\n    background-color: ",";\n  }\n  &:last-child {\n    color: ",";\n  }\n  &:last-child::after {\n    background-color: ",";\n  }\n"])),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return n.title}),(function(n){return"#888"===n.title?"var(--lightblue)":n.title}),(function(n){return"third"===n.current?"var(--dark-blue)":"#888"}),(function(n){return"third"===n.current?"var(--dark-blue)":"var(--lightblue)"})),mn=(0,G.ZP)(T.l0)(w||(w=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 280px;\n  min-height: 496px;\n  padding: 8px;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  border-radius: 40px;\n  @media screen and (min-width: 768px) {\n    width: 458px;\n    min-height: 542px;\n    padding: 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 280px; */\n    /* min-height: 542px; */\n    /* margin-top: 20px; */\n  }\n"]))),gn=G.ZP.div(Z||(Z=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n  margin-bottom: 36px;\n"]))),vn=G.ZP.h2(j||(j=(0,E.Z)(["\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: fit-content;\n  margin-left: 12px;\n  margin-bottom: 24px;\n  color: #111;\n"]))),bn=G.ZP.div(y||(y=(0,E.Z)(["\n  display: flex;\n  gap: 12px;\n  color: red;\n  @media screen and (min-width: 768px) {\n    gap: 16px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 280px; */\n    /* min-height: 542px; */\n    /* margin-top: 20px; */\n  }\n"]))),wn=G.ZP.div(k||(k=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px 0;\n"]))),Zn=G.ZP.div(P||(P=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px 0;\n  margin-top: 24px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    /* width: 458px;\n    min-height: 542px; */\n  }\n\n  @media screen and (min-width: 1280px) {\n    /* width: 280px; */\n    /* min-height: 542px; */\n    /* margin-top: 20px; */\n  }\n"]))),jn=function(n){switch(n){case"second":return"var(--dark-blue)";case"third":return"var(--success-color)";default:return"#888"}},yn=function(n){switch(n){case"sell":return"Add pet for sale";case"lost-found":return"Add lost pet";case"for-free":return"Add a pet in good hands";default:return"Add pet"}},kn=function(){var n=(0,_.I0)(),e=(0,R.s0)(),t=(0,z.useState)("first"),r=(0,I.Z)(t,2),i=r[0],a=r[1],o=(0,z.useState)("your_pet"),l=(0,I.Z)(o,2),c=l[0],d=l[1],s=(0,z.useState)(""),h=(0,I.Z)(s,2),u=h[0],p=h[1],f=(0,z.useState)(!0),x=(0,I.Z)(f,2),m=x[0],g=x[1],v=(0,z.useState)(""),b=(0,I.Z)(v,2),w=b[0],Z=b[1],j=(0,z.useState)(""),y=(0,I.Z)(j,2),k=y[0],P=y[1],A=(0,z.useState)(!1),L=(0,I.Z)(A,2),M=L[0],O=L[1],E={title:"",category:c,avatar:u,name:"",birthday:"",type:"",sex:k,comments:"",location:"",price:""};(0,z.useEffect)((function(){M&&e(-1)}),[M,e]);var G=function(){"first"===i?a("second"):"second"===i&&a("third")},U=function(){"second"===i?a("first"):"third"===i?a("second"):e(-1)},H=function(){var e=(0,F.Z)((0,C.Z)().mark((function e(t,r){var i,a,o;return(0,C.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r.setSubmitting,a=r.resetForm,o=(0,S.Z)((0,S.Z)({},t),{},{avatar:u}),e.prev=2,"your_pet"!==c){e.next=8;break}return e.next=6,n((0,N.F)(o));case 6:e.next=10;break;case 8:return e.next=10,n((0,N.Y)(o));case 10:O(!0),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error submitting form:",e.t0);case 16:i(!1),a();case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(n,t){return e.apply(this,arguments)}}();return(0,B.jsx)(T.J9,{initialValues:E,onSubmit:H,children:function(n){return(0,B.jsxs)(mn,{children:[(0,B.jsxs)("div",{children:[(0,B.jsxs)(gn,{children:[(0,B.jsx)(vn,{children:"first"!==i?yn(c):"Add pet"}),(0,B.jsxs)(bn,{children:[(0,B.jsx)(xn,{current:i,children:"Choose option"}),(0,B.jsx)(xn,{title:jn(i),current:i,children:"Personal details"}),(0,B.jsx)(xn,{current:i,children:"More info"})]})]}),(0,B.jsxs)(wn,{children:["first"===i&&(0,B.jsx)(D,{currentRadioButton:c,handleOptionChange:function(e){d(e.target.value),n.handleChange(e)}}),"second"===i&&(0,B.jsx)(Y,{currentRadioButton:c,formik:n}),"third"===i&&(0,B.jsx)(hn,{selectedGender:k,handleSexChange:function(e){P(e.target.value),n.handleChange(e)},currentRadioButton:c,formik:n,showPlaceholder:m,previewImage:w,setPreviewImage:Z,setShowPlaceholder:g,setSelectedFile:p})]})]}),(0,B.jsx)(Zn,{children:(0,B.jsx)(fn,{currentStage:i,handleNextStage:G,handleCancelStage:U})})]})}})},Pn=function(){return(0,B.jsx)(kn,{})}},963:function(n,e,t){var r=t(3439),i=t(184);e.Z=function(n){var e=n.name,t=n.color,a=n.size;return(0,i.jsx)("svg",{className:"icon icon-".concat(e),fill:t,stroke:t,width:a,height:a,children:(0,i.jsx)("use",{xlinkHref:"".concat(r.Z,"#icon-").concat(e)})})}}}]);
//# sourceMappingURL=676.a9cbb5bf.chunk.js.map