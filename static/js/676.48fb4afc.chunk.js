"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{3439:function(n,e,t){t(2791);e.Z=t.p+"static/media/icons.29896e80873140f97ab240538dc1b43d.svg"},8751:function(n,e,t){t.r(e),t.d(e,{RadioButton:function(){return a}});var r,o=t(168),a=t(6444).ZP.label(r||(r=(0,o.Z)(["\n  display: inline-block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  margin-right: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n\n  input {\n    display: none;\n  }\n\n  input:checked + span {\n    color: #fef9f9;\n  }\n"])),(function(n){return n.checked?"var(--dark-blue)":"var(--lightblue)"}),(function(n){return n.checked?"#fef9f9":"var(--dark-blue)"}))},8676:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,a,i,l,c,d,s,h,u,p,f,x,g,m,v,b,y,j,Z,k,w,P,C,F=t(1413),S=t(9439),_=t(2791),z=t(5705),B=t(9434),T=t(168),I=t(6444),R=I.ZP.h3(r||(r=(0,T.Z)(["\n  position: relative;\n  font-size: 10px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: 80px;\n  color: ",";\n  &:after {\n    content: '';\n    position: absolute;\n    background-color: ",";\n    border-radius: 8px;\n    width: 80px;\n    height: 8px;\n    top: 25px;\n    left: 0;\n  }\n  &:nth-child(2) {\n    color: ",";\n  }\n  &:nth-child(2)::after {\n    background-color: ",";\n  }\n  &:last-child {\n    color: ",";\n  }\n  &:last-child::after {\n    background-color: ",";\n  }\n"])),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return"first"===n.current?"var(--dark-blue)":"var(--success-color)"}),(function(n){return n.title}),(function(n){return"#888"===n.title?"var(--lightblue)":n.title}),(function(n){return"third"===n.current?"var(--dark-blue)":"#888"}),(function(n){return"third"===n.current?"var(--dark-blue)":"var(--lightblue)"})),L=(0,I.ZP)(z.Form)(o||(o=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 280px;\n  min-height: 496px;\n  padding: 8px;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  border-radius: 40px;\n"]))),E=I.ZP.div(a||(a=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 12px;\n  margin-bottom: 36px;\n"]))),M=I.ZP.h2(i||(i=(0,T.Z)(["\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  width: fit-content;\n  margin-left: 12px;\n  margin-bottom: 24px;\n  color: #111;\n"]))),A=I.ZP.div(l||(l=(0,T.Z)(["\n  display: flex;\n  gap: 11px;\n  color: red;\n"]))),D=I.ZP.div(c||(c=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px 0;\n"]))),N=I.ZP.div(d||(d=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px 0;\n"]))),O=I.ZP.div(s||(s=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),G=I.ZP.label(h||(h=(0,T.Z)(["\n  display: block;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"]))),U=(0,I.ZP)(z.Field)(u||(u=(0,T.Z)(["\n  max-width: 100%;\n  height: 40px;\n  padding: 8px 16px;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  /* line-height: 150%; */\n  /* letter-spacing: 0.56px; */\n  border: 1px solid var(--dark-blue);\n  border-radius: 40px;\n\n  &::placeholder {\n    color: #888;\n    font-size: 14px;\n    font-style: normal;\n    font-weight: 400;\n  }\n  &:hover {\n    border: 1px solid var(--accent-color);\n  }\n"]))),V=t(184),H=t(5705).Field,K=t(8751).RadioButton,Y=[{value:"your_pet",label:"your pet"},{value:"sell",label:"sell"},{value:"lost_or_found",label:"lost/found"},{value:"in_good_hands",label:"in good hands"}],q=function(n){n.formik;var e=n.handleOptionChange,t=n.currentRadioButton;return(0,V.jsx)(V.Fragment,{children:Y.map((function(n){var r=n.value,o=n.label;return(0,V.jsxs)(K,{checked:t===r,children:[(0,V.jsx)(G,{htmlFor:"option_".concat(r),children:o}),(0,V.jsx)(H,{type:"radio",name:"category",id:"option_".concat(r),value:r,onChange:e},"option_".concat(r))]},r)}))})},J=[{name:"title",placeholder:"Title of add",label:"Title of add"},{name:"name",placeholder:"Type name pet",label:"Pet\u2019s name"},{name:"birthday",placeholder:"Type date of birth",label:"Date of birth",pattern:"\\d*"},{name:"type",placeholder:"Type of pet",label:"Type"}],Q=function(n){var e=n.formik,t=n.currentRadioButton,r=function(n){var e=n.which?n.which:n.keyCode;e>31&&(e<48||e>57)&&n.preventDefault()},o=function(n){var t=n.target.value.replace(/\D/g,"");t.length>8&&(t=t.slice(0,8));var r="",o=0,a=t.slice(o,o+=2);a&&(r+=a);var i=t.slice(o,o+=2);i&&(r+=".".concat(i));var l=t.slice(o);if(l&&(r+=".".concat(l)),n.target.value=r,e.setFieldValue("birthday",r),2===t.length){var c=document.getElementById("monthInput");c&&(c.focus(),c.select())}else if(4===t.length){var d=document.getElementById("yearInput");d&&(d.focus(),d.select())}};return(0,V.jsx)(V.Fragment,{children:J.map((function(n){var a=n.name,i=n.placeholder,l=n.label,c=n.pattern;return"your_pet"===t&&["title"].includes(a)?null:(0,V.jsxs)(O,{children:[(0,V.jsx)(G,{htmlFor:a,children:l}),(0,V.jsx)(U,{type:"text",id:a,name:a,autoComplete:"off",placeholder:i,value:e.values[a],onChange:"birthday"===a?o:e.handleChange,onKeyPress:"birthday"===a?r:null,inputMode:"birthday"===a?"numeric":"text",maxLength:10,pattern:c}),e.touched[a]&&e.errors[a]&&(0,V.jsx)("div",{style:{color:"red"},children:e.errors[a]})]},a)}))})},W=I.ZP.div(p||(p=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 207px;\n  margin-bottom: 24px;\n"]))),X=I.ZP.p(f||(f=(0,T.Z)(["\n  max-width: 81px;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n"]))),$=I.ZP.div(x||(x=(0,T.Z)(["\n  position: relative;\n  width: 112px;\n  height: 112px;\n  border-radius: 20px;\n  overflow: hidden;\n"]))),nn=I.ZP.div(g||(g=(0,T.Z)(["\n  background-color: var(--lightblue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]))),en=I.ZP.span(m||(m=(0,T.Z)(["\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  color: #111;\n"]))),tn=(0,I.ZP)(z.Field)(v||(v=(0,T.Z)(["\n  margin-top: 4px;\n  width: 100%;\n"]))),rn=(0,I.ZP)(z.Field)(b||(b=(0,T.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n"]))),on=I.ZP.textarea(y||(y=(0,T.Z)(["\n  height: 92px;\n  padding: 8px 16px;\n  border: 1px solid var(--dark-blue);\n  border-radius: 20px;\n  resize: vertical;\n"]))),an=I.ZP.label(j||(j=(0,T.Z)(["\n  display: flex;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.56px;\n  border-radius: 40px;\n  padding: 8px 16px;\n  margin-right: 10px;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  width: fit-content;\n\n  input {\n    display: none;\n  }\n\n  input:checked + span {\n    color: #fef9f9;\n  }\n"])),(function(n){return n.checked?"var(--dark-blue)":null}),(function(n){return n.checked?"#fef9f9":"#888"})),ln=I.ZP.svg(Z||(Z=(0,T.Z)(["\n  /* stroke: var(--bg-color); */\n\n  &:hover {\n    ","\n  }\n"])),""),cn=I.ZP.div(k||(k=(0,T.Z)(["\n  display: flex;\n\n  &:hover {\n    ","\n  }\n"])),""),dn=t(963),sn=t(3439),hn=function(n){var e=n.showPlaceholder,t=n.setPreviewImage,r=n.setShowPlaceholder,o=n.setSelectedFile,a=n.previewImage,i=n.formik,l=n.currentRadioButton,c=n.selectedGender,d=n.handleSexChange;return(0,V.jsxs)(V.Fragment,{children:["your_pet"!==l&&(0,V.jsxs)(V.Fragment,{children:[" ",(0,V.jsx)(X,{children:"The sex"}),(0,V.jsx)(cn,{children:[{value:"female",label:"Female"},{value:"male",label:"Male"}].map((function(n){var e=n.value,t=n.label;return(0,V.jsxs)(an,{checked:c===e,children:[(0,V.jsx)(ln,{stroke:"male"===e?"var(--dark-blue)":"var(--fail-color)",width:24,height:24,children:(0,V.jsx)("use",{href:"".concat(sn.Z,"#icon-").concat(e)})}),t,(0,V.jsx)(z.Field,{type:"radio",name:"sex",id:"opt".concat(e),value:e,onChange:d},"opt".concat(e))]},e)}))})]}),(0,V.jsxs)(W,{children:[(0,V.jsx)(X,{children:"Load the pet\u2019s image:"}),(0,V.jsxs)($,{children:[e?(0,V.jsx)(nn,{children:(0,V.jsx)(dn.Z,{name:"plus",color:"var(--dark-blue)",size:30})}):(0,V.jsx)("img",{src:a,alt:"Selected",style:{width:"100%",height:"100%",objectFit:"cover"}}),(0,V.jsx)(rn,{type:"file",id:"photoInput",name:"avatar",accept:"image/*",onChange:function(n){var e=n.currentTarget.files[0];e?(o(e),t(URL.createObjectURL(e)),r(!1)):(r(!0),t(""),o(null))}})]})]}),"your_pet"!==l&&(0,V.jsxs)(O,{children:[(0,V.jsx)(G,{htmlFor:"location",children:"Location"}),(0,V.jsx)(U,{type:"text",id:"location",name:"location",autoComplete:"off",placeholder:"Type of location",value:i.values.location,onChange:i.handleChange})]},"location"),"sell"===l&&(0,V.jsxs)(O,{children:[(0,V.jsx)(G,{htmlFor:"price",children:"Price"}),(0,V.jsx)(U,{type:"text",id:"price",name:"price",autoComplete:"off",placeholder:"Type of price",value:i.values.price,onChange:i.handleChange})]},"price"),(0,V.jsxs)("div",{children:[(0,V.jsx)(en,{children:"Comments"}),(0,V.jsx)(tn,{as:on,id:"comments",name:"comments",placeholder:"Type of pet",value:i.values.comments,onChange:i.handleChange})]})]})},un=t(1087),pn=((0,I.ZP)(un.OL)(w||(w=(0,T.Z)(["\n  border-radius: 40px;\n  border: 2px solid var(--accent-color);\n  /* background: var(--accent-color);\n  cursor: pointer;\n  display: none;\n\n  @media screen and (min-width: 768px) {\n    height: 40px;\n    width: 165px;\n    padding-right: 20px;\n    padding-left: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-right: 20px;\n  }  */\n"]))),I.ZP.svg(P||(P=(0,T.Z)(["\n  fill: var(--bg-color);\n  stroke: var(--dark-blue);\n"])))),fn=I.ZP.button(C||(C=(0,T.Z)(["\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  background-color: var(--dark-blue);\n  border: none;\n  border-radius: 40px;\n  padding: 8px 28px;\n  text-align: center;\n  align-content: center;\n  align-items: center;\n  color: #fef9f9;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  letter-spacing: 0.64px;\n\n  & span {\n    margin: auto 0;\n    text-align: center;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n  &:active {\n    background-color: #fef9f9;\n    color: var(--dark-blue);\n\n    "," {\n      fill: var(--dark-blue);\n    }\n  }\n  &:last-child {\n    background-color: transparent;\n    color: var(--dark-blue);\n    text-align: center;\n    align-content: center;\n    align-items: center;\n  }\n  &:last-child:hover {\n    background-color: var(--dark-blue);\n    color: #fef9f9;\n\n    "," {\n      stroke: var(--container-bg);\n    }\n  }\n"])),pn,pn),xn=function(n){var e=n.handleNextStage,t=n.handleCancelStage,r=n.currentStage;return(0,V.jsxs)(V.Fragment,{children:["third"!==r&&(0,V.jsxs)(fn,{type:"button",onClick:e,children:[(0,V.jsx)("span",{children:"Next"}),(0,V.jsx)(pn,{width:24,height:24,children:(0,V.jsx)("use",{href:"".concat(sn.Z,"#icon-pawprint-1")})})]}),"third"===r&&(0,V.jsxs)(fn,{type:"submit",children:[(0,V.jsx)("span",{children:"Done"}),(0,V.jsx)(pn,{width:24,height:24,children:(0,V.jsx)("use",{href:"".concat(sn.Z,"#icon-pawprint-1")})})]}),(0,V.jsxs)(fn,{type:"button",onClick:t,children:[(0,V.jsx)(pn,{width:24,height:24,children:(0,V.jsx)("use",{href:"".concat(sn.Z,"#icon-arrow-left")})}),(0,V.jsx)("span",{children:"first"===r?"Cancel":"Back"})]})]})},gn=t(7758),mn=t(7689),vn=function(){var n=(0,B.I0)(),e=(0,_.useState)("first"),t=(0,S.Z)(e,2),r=t[0],o=t[1],a=(0,_.useState)("your_pet"),i=(0,S.Z)(a,2),l=i[0],c=i[1],d=(0,_.useState)(""),s=(0,S.Z)(d,2),h=s[0],u=s[1],p=(0,_.useState)(!0),f=(0,S.Z)(p,2),x=f[0],g=f[1],m=(0,_.useState)(""),v=(0,S.Z)(m,2),b=v[0],y=v[1],j=(0,_.useState)(""),Z=(0,S.Z)(j,2),k=Z[0],w=Z[1],P=(0,mn.s0)(),C=(0,_.useState)(!1),T=(0,S.Z)(C,2),I=T[0],O=T[1];(0,_.useEffect)((function(){I&&P("/user")}),[I,P]);var G=function(n){switch(n){case"second":return"var(--dark-blue)";case"third":return"var(--success-color)";default:return"#888"}},U=function(n){switch(n){case"sell":return"Add pet for sale";case"lost_or_found":return"Add lost pet";default:return"Add pet"}},H=function(){"first"===r?o("second"):"second"===r&&o("third")},K=function(){"second"===r?o("first"):"third"===r?o("second"):P("/user")};return(0,V.jsx)(z.Formik,{initialValues:{title:"",category:l,avatar:h,name:"",birthday:"",type:"",sex:k,comments:"",location:"",price:""},onSubmit:function(e,t){var r=t.setSubmitting,o=t.resetForm,a=(0,F.Z)((0,F.Z)({},e),{},{avatar:h});"your_pet"===l?n((0,gn.F)(a)).then((function(){return O(!0)})).catch((function(n){return console.log("Error submitting form:",n)})):n((0,gn.Y)(a)).then((function(){return O(!0)})).catch((function(n){return console.log("Error submitting form:",n)})),r(!1),o()},children:function(n){return(0,V.jsxs)(L,{children:[(0,V.jsxs)("div",{children:[(0,V.jsxs)(E,{children:[(0,V.jsx)(M,{children:"first"!==r?U(l):"Add pet"}),(0,V.jsxs)(A,{children:[(0,V.jsx)(R,{current:r,children:"Choose option"}),(0,V.jsx)(R,{title:G(r),current:r,children:"Personal details"}),(0,V.jsx)(R,{current:r,children:"More info"})]})]}),(0,V.jsxs)(D,{children:["first"===r&&(0,V.jsx)(q,{currentRadioButton:l,handleOptionChange:function(e){c(e.target.value),n.handleChange(e)},formik:n}),"second"===r&&(0,V.jsx)(Q,{currentRadioButton:l,formik:n}),"third"===r&&(0,V.jsx)(hn,{selectedGender:k,handleSexChange:function(e){w(e.target.value),n.handleChange(e)},currentRadioButton:l,formik:n,showPlaceholder:x,previewImage:b,setPreviewImage:y,setShowPlaceholder:g,setSelectedFile:u})]})]}),(0,V.jsx)(N,{children:(0,V.jsx)(xn,{currentStage:r,handleNextStage:H,handleCancelStage:K})})]})}})},bn=function(){return(0,V.jsx)(vn,{})}},963:function(n,e,t){var r=t(3439),o=t(184);e.Z=function(n){var e=n.name,t=n.color,a=n.size;return(0,o.jsx)("svg",{className:"icon icon-".concat(e),fill:t,stroke:t,width:a,height:a,children:(0,o.jsx)("use",{xlinkHref:"".concat(r.Z,"#icon-").concat(e)})})}}}]);
//# sourceMappingURL=676.48fb4afc.chunk.js.map