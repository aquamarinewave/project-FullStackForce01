"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[480],{3439:function(n,e,t){t(2791);e.Z=t.p+"static/media/icons.e907929b12a4351bc22bcd31f8fd0a00.svg"},6480:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var o,i,A,l,r,a,s=t(9439),d=t(1087),c=t(963),x=t(2791),u=t(168),h=t(6444),p=h.ZP.div(o||(o=(0,u.Z)(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(97, 97, 97, 0.60);\n  backdrop-filter: blur(4px); \n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),f=h.ZP.div(i||(i=(0,u.Z)(["\n  width: 681px;\n  height: 540px;\n  background: #fff;\n  color: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: 10;\n  border-radius: 40px;\n"]))),b=h.ZP.div(A||(A=(0,u.Z)(["\n  padding: 32px;\n  width: 681px;\n\n  .modal-header {\n    color: #000;\n    font-size: 28px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    letter-spacing: -0.28px; \n    margin-bottom: 20px; \n  }\n\n  .modal-info {\n    display: flex;\n    gap: 24px;\n    margin-bottom: 28px; \n  }\n\n  .modal-info-list {\n    display: flex;\n    gap: 51px;\n  }\n\n  .modal-info-item {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n  }\n\n  .modal-info-item--name {\n    font-weight: 600; \n  }\n\n  .modal-contact {\n    color: var(--accent-color);\n    font-weight: 500;  \n  } \n  \n  .modal-img {\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .modal-comments {\n    color: var(--main-color);\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0.64px;\n    margin-bottom: 70px  \n  }\n\n  .modal-buttons {\n    display: flex;\n    flex-direction: row-reverse;\n    gap: 17px;\n  }\n  \n  .modal-button {\n    display: flex;\n    gap: 6px;\n    width: 129px;\n    padding: 8px 20px;\n    justify-content: center;\n    align-items: center;\n    background: transparent;\n    border-radius: 40px; \n    font-size: 16px;\n    font-family: inherit;\n    font-weight: 700;  \n    line-height: normal;\n    letter-spacing: 0.64px; \n  }\n\n  .modal-button--primary {\n    border: 2px solid var(--dark-blue);\n    color: var(--dark-blue);\n  }\n\n  .modal-button--primary:hover {\n    background: var(--dark-blue, linear-gradient(315deg, #419EF1 0%, #9BD0FF 100%)); \n    color: #fff;\n  }\n\n  .modal-button--second {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: var(--dark-blue);\n    border: none;\n    color: #fff;\n  }\n\n  .modal-button--second:hover {\n    background: var(--lightblue);\n    color: var(--dark-blue);\n\n    svg {\n      stroke: var(--dark-blue);\n    }\n  }\n\n  span {\n    display: flex;\n  }\n\n"]))),j=h.ZP.button(l||(l=(0,u.Z)(["\n  border: transparent;\n  background: transparent;\n  position: absolute;\n  top: 23px;\n  right: 26px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 10;\n\n"]))),m=h.ZP.svg(r||(r=(0,u.Z)(["\n  stroke: #ffffff;\n\n  &:hover {\n    stroke: var(--dark-blue);\n  }\n"]))),g=h.ZP.svg(a||(a=(0,u.Z)(["\n  stroke: var(--dark-blue);\n\n  &:hover {\n    border: 1px solid var(--dark-blue);\n    border-radius: 50%;\n  }\n"])));var k,v,y,B,E,w,Z,I=t(3439),P=t(184),G=function(n){var e=n.showModal,t=n.setShowModal,o=(0,x.useState)([]),i=(0,s.Z)(o,2),A=i[0],l=i[1];(0,x.useEffect)((function(){var n;(n="64bbeec61951acbea6bb75c2",fetch("".concat(" https://fullstackforce.onrender.com/api/notices/").concat(n)).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){return console.log(n),l(n)})).catch((function(n){return console.log(n)})).finally((function(){console.log("finally")}))}),[]);var r=(0,x.useRef)(),a=(0,x.useCallback)((function(n){"Escape"===n.key&&e&&(t(!1),console.log("I pressed"))}),[t,e]);(0,x.useEffect)((function(){return document.addEventListener("keydown",a),function(){return document.removeEventListener("keydown",a)}}),[a]);var d=A.name,c=A.birthday,u=A.type,h=A.sex,k=A.avatarURL;return(0,P.jsx)(P.Fragment,{children:e?(0,P.jsx)(p,{onClick:function(n){r.current===n.target&&t(!1)},ref:r,children:(0,P.jsxs)(f,{showModal:e,children:[(0,P.jsxs)(b,{children:[(0,P.jsxs)("div",{class:"modal-info",children:[(0,P.jsx)("div",{class:"modal-img",children:(0,P.jsx)("img",{width:"262",height:"298",src:k,alt:d})}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h2",{class:"modal-header",children:"\u0421ute dog looking for a home"}),(0,P.jsxs)("div",{class:"modal-info-list",children:[(0,P.jsxs)("ul",{class:"modal-info-item modal-info-item--name",children:[(0,P.jsx)("li",{children:"Name:"}),(0,P.jsx)("li",{children:"Birthday:"}),(0,P.jsx)("li",{children:"Type:"}),(0,P.jsx)("li",{children:"Place:"}),(0,P.jsx)("li",{children:"The sex:"}),(0,P.jsx)("li",{children:"Email:"}),(0,P.jsx)("li",{children:"Phone:"})]}),(0,P.jsxs)("ul",{class:"modal-info-item",children:[(0,P.jsx)("li",{children:d}),(0,P.jsx)("li",{children:c}),(0,P.jsx)("li",{children:u}),(0,P.jsx)("li",{children:"Kyiv"}),(0,P.jsx)("li",{children:h}),(0,P.jsx)("li",{class:"modal-contact",children:"user@mail.com"}),(0,P.jsx)("li",{class:"modal-contact",children:"+380971234567"})]})]})]})]}),(0,P.jsxs)("p",{class:"modal-comments",children:[(0,P.jsx)("strong",{children:"Comments:"})," Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! "]}),(0,P.jsxs)("div",{class:"modal-buttons",children:[(0,P.jsx)("a",{href:"tel:+380971234567",class:"modal-button modal-button--primary",type:"button",children:"Contact"}),(0,P.jsxs)("button",{class:"modal-button modal-button--second",type:"button",children:[(0,P.jsx)("span",{children:"Add to"})," ",(0,P.jsx)("span",{children:(0,P.jsx)(m,{width:24,height:24,children:(0,P.jsx)("use",{href:"".concat(I.Z,"#icon-heart")})})})]})]})]}),(0,P.jsx)(j,{"aria-label":"Close modal",onClick:function(){return t((function(n){return!n}))},children:(0,P.jsx)(g,{width:24,height:24,children:(0,P.jsx)("use",{href:"".concat(I.Z,"#icon-cross")})})})]})}):null})},J=function(){var n=(0,x.useState)(!1),e=(0,s.Z)(n,2),t=e[0],o=e[1];return(0,P.jsxs)("div",{children:[(0,P.jsx)("img",{src:"data:image/jpeg;base64,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",alt:"pet"}),(0,P.jsx)("button",{type:"button",children:(0,P.jsx)(c.default,{name:"heart",color:"var(--dark-blue)",size:18})}),(0,P.jsx)(d.OL,{to:"/add-pet",children:"Add pet"}),(0,P.jsx)("h3",{children:"\u0421ute dog looking for a home"}),(0,P.jsx)("button",{type:"button",onClick:function(){o((function(n){return!n}))},children:"Learn more"}),(0,P.jsx)(G,{showModal:t,setShowModal:o})]})},Q=function(){return(0,P.jsx)("div",{children:(0,P.jsxs)("ul",{children:[(0,P.jsx)("li",{children:(0,P.jsx)(J,{})}),(0,P.jsx)("li",{children:(0,P.jsx)(J,{})}),(0,P.jsx)("li",{children:(0,P.jsx)(J,{})})]})})},V=function(){return(0,P.jsx)("div",{children:(0,P.jsxs)("nav",{children:[(0,P.jsx)(d.OL,{to:"/notices/sell",children:"sell"}),(0,P.jsx)(d.OL,{to:"/notices/lost-found",children:"lost/found"}),(0,P.jsx)(d.OL,{to:"/notices/for-free",children:"in good hands"})]})})},z=h.ZP.div(k||(k=(0,u.Z)([""]))),M=h.ZP.form(v||(v=(0,u.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding-top: 24px;\n  padding-bottom: 20px;\n"]))),C=h.ZP.input(y||(y=(0,u.Z)(["\n  font-size: 14px;\n  border: none;\n  padding-left: 20px;\n  width: 280px;\n  height: 44px;\n  border-radius: 24px;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.2);\n"]))),S=h.ZP.div(B||(B=(0,u.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  bottom: 31px;\n  right: 11px;\n"]))),W=h.ZP.button(E||(E=(0,u.Z)(["\n  border: none;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n"]))),U=function(){return(0,P.jsx)(z,{children:(0,P.jsxs)(M,{children:[(0,P.jsx)(C,{type:"text",name:"searchforpet",placeholder:"Search"}),(0,P.jsx)(S,{children:(0,P.jsx)(W,{type:"button",children:(0,P.jsx)(c.default,{name:"search",color:"var(--dark-blue)",size:17})})})]})})},q=h.ZP.div(w||(w=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 40px;\n  align-items: center;\n"]))),R=h.ZP.h1(Z||(Z=(0,u.Z)(["\n  font-size: 24px;\n  width: 246px;\n  height: 33px;\n  text-align: center;\n"]))),D=function(){return(0,P.jsxs)(q,{children:[(0,P.jsx)(R,{children:"Find your favorite pet"}),(0,P.jsx)(U,{}),(0,P.jsx)(V,{}),(0,P.jsx)(Q,{})]})}},963:function(n,e,t){t.r(e);var o=t(3439),i=t(184);e.default=function(n){var e=n.name,t=n.color,A=n.size;return(0,i.jsx)("svg",{className:"icon icon-".concat(e),fill:t,stroke:t,width:A,height:A,children:(0,i.jsx)("use",{xlinkHref:"".concat(o.Z,"#icon-").concat(e)})})}}}]);
//# sourceMappingURL=480.3356a759.chunk.js.map