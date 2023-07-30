"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{3439:function(e,n,t){t(2791);n.Z=t.p+"static/media/icons.29896e80873140f97ab240538dc1b43d.svg"},2325:function(e,n,t){t.r(n),t.d(n,{default:function(){return A}});var r,a,i,s,o,c,u,l,d,h,p=t(4165),x=t(5861),g=t(9439),f=t(2791),w=t(168),m=t(7691),v=m.ZP.div(r||(r=(0,w.Z)(["\n  width: 400px;\n"]))),Z=m.ZP.a(a||(a=(0,w.Z)(["\n  width: 100px;\n  padding: 3px 7px;\n  cursor: pointer;\n  color: var(--dark-blue);\n  border-radius: 40px;\n\n  &:hover {\n    background-color: var(--lightblue);\n  }\n"]))),j=t(184),b=function(e){var n=new Date(e),t=n.getDate(),r=n.getMonth()+1;return(t<10?"0":"")+t+"/"+(r<10?"0":"")+r+"/"+n.getFullYear()},P=function(e){var n=e.responseByNews,t=n.title,r=n.url,a=n.imgUrl,i=n.text,s=n.date;return(0,j.jsxs)(v,{children:[a&&(0,j.jsx)("img",{src:a,alt:t}),(0,j.jsxs)("h3",{children:[t," "]}),(0,j.jsx)("p",{children:i}),(0,j.jsx)("div",{children:b(s)}),(0,j.jsx)(Z,{href:r,target:"_blank",rel:"noopener noreferrer",children:"Read more"})]})},k=function(e){var n=e.news;return(0,j.jsx)("div",{children:n&&n.length&&(0,j.jsx)("ul",{children:n.map((function(e){var n=e._id,t=e.title,r=e.url,a=e.imgUrl,i=e.text,s=e.date;return(0,j.jsx)("li",{children:(0,j.jsx)(P,{responseByNews:{title:t,url:r,imgUrl:a,text:i,date:s}})},n)}))})})},C=m.ZP.div(i||(i=(0,w.Z)(["\n  width: 100%;\n"]))),y=m.ZP.form(s||(s=(0,w.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  padding-top: 24px;\n  padding-bottom: 20px;\n"]))),N=m.ZP.input(o||(o=(0,w.Z)(["\n  font-size: 14px;\n  border: none;\n  padding-left: 20px;\n  width: 100%;\n  height: 44px;\n  padding-bottom: 4px;\n  border-radius: 24px;\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.2);\n"]))),S=m.ZP.div(c||(c=(0,w.Z)(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  bottom: 31px;\n  right: 16px;\n"]))),_=m.ZP.button(u||(u=(0,w.Z)(["\n  border: none;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n"]))),F=m.ZP.svg(l||(l=(0,w.Z)(["\n  fill: var(--dark-blue);\n"]))),z=m.ZP.svg(d||(d=(0,w.Z)(["\n  stroke: var(--accent-color);\n"]))),D=t(3439),E=function(e){var n=e.pattern,t=e.onSubmit,r=e.onClear,a=(0,f.useState)(null!==n&&void 0!==n?n:""),i=(0,g.Z)(a,2),s=i[0],o=i[1];return(0,j.jsx)(C,{children:(0,j.jsxs)(y,{onSubmit:function(e){e.preventDefault(),""!==s.trim()&&t(s)},children:[(0,j.jsx)(N,{type:"text",name:"searchfornews",placeholder:"Search",value:s,onChange:function(e){o(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0}),(0,j.jsxs)(S,{children:[(0,j.jsx)(_,{type:"submit",children:(0,j.jsx)(F,{width:24,height:24,children:(0,j.jsx)("use",{href:"".concat(D.Z,"#icon-search")})})}),""!==s.trim()&&(0,j.jsx)("button",{type:"button",onClick:function(){o(""),r()},children:(0,j.jsx)(z,{width:24,height:24,children:(0,j.jsx)("use",{href:"".concat(D.Z,"#icon-cross-small")})})})]})]})})},U=m.ZP.h2(h||(h=(0,w.Z)(["\n  padding-top: 80px;\n  font-size: 24px;\n  font-weight: 700;\n  text-align: center;\n  @media screen and (min-width: 768px) {\n    padding-top: 60px;\n    font-size: 32px;\n    font-weight: 600;\n    line-height: 1.3;\n  }\n  @media screen and (min-width: 1280px) {\n  }\n"]))),B=t(9434),L={selectNews:function(e){return e.news},selectNewsError:function(e){return e.news.error}},I=t(7753),M=t(8531),O=function(e){var n=e.page,t=e.count,r=e.onChange;return(0,j.jsx)(M.Z,{page:n,count:t,variant:"outlined",onChange:r})},R=1,T=2,Y=3,q=4,A=function(){var e=(0,B.I0)(),n=(0,B.v9)(L.selectNews),t=n.perPage,r=R,a=T,i=Y,s=q,o=(0,f.useState)(s),c=(0,g.Z)(o,2),u=c[0],l=c[1],d=(0,f.useCallback)((0,x.Z)((0,p.Z)().mark((function e(){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.error||0===n.items.length?l(r):l(a);case 1:case"end":return e.stop()}}),e)}))),[n.items,n.error,l,r,a]);(0,f.useEffect)((function(){d()}),[d]),(0,f.useEffect)((function(){l(i),e(I.Z.fetchNews({pattern:"",currentPage:1,perPage:t}))}),[e,l,i,t]);var h=(0,f.useCallback)((function(e){switch(e){case s:return(0,j.jsx)("div",{children:"Please, type something to the search"});case i:return(0,j.jsx)("div",{children:"Loading...."});case r:return(0,j.jsxs)("div",{children:["Oopps...no news with this text.",n.error&&(0,j.jsx)("div",{children:n.error})]});case a:return(0,j.jsx)(k,{news:n.items});default:return(0,j.jsx)(j.Fragment,{})}}),[n.items,n.error,s,i,r,a]),w=(0,f.useCallback)((function(n){e(I.Z.fetchNews({pattern:n,currentPage:1,perPage:t})),e(I.Z.setPattern(n)),e(I.Z.setCurrentPage(1))}),[e,t]),m=(0,f.useCallback)((function(r,a){var i=n.pattern;e(I.Z.fetchNews({pattern:i,currentPage:a,perPage:t})),e(I.Z.setCurrentPage(a))}),[e,n.pattern,t]),v=(0,f.useCallback)((function(){return n.totalPages?(0,j.jsx)(O,{page:n.currentPage,count:n.totalPages,variant:"outlined",onChange:m}):(0,j.jsx)(j.Fragment,{})}),[n.totalPages,n.currentPage,m]);return(0,j.jsxs)("div",{children:[(0,j.jsx)(U,{children:"News"}),(0,j.jsx)(E,{pattern:n.pattern,onSubmit:w,onClear:function(){e(I.Z.fetchNews({pattern:"",currentPage:1,perPage:t})),e(I.Z.setPattern(""))}}),h(u),v()]})}}}]);
//# sourceMappingURL=325.5f3a7482.chunk.js.map