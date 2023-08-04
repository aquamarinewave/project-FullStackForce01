"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{7581:function(n,e,i){i.r(e),i.d(e,{default:function(){return an}});var t,r,d,o,a,s,l,h,x,p,c,m,f,g,w,u,v,Z,j,y,b,k,P,z=i(2791),F=i(9439),U=i(168),C=i(7691),_=C.ZP.div(t||(t=(0,U.Z)(["\n  position: relative;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  border: none;\n  background-color: var(--main-light-color);\n  text-align: left;\n  padding: 0;\n  cursor: pointer;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),S=C.ZP.p(r||(r=(0,U.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),D=C.ZP.div(d||(d=(0,U.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 16px;\n    width: 197px;\n  }\n"]))),E=C.ZP.div(o||(o=(0,U.Z)(["\n  height: 17px;\n  cursor: auto;\n  \n    color: var(--main-color);\n\n  @media screen and (min-width: 768px) {\n    height: 19px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 22px;\n    width: 197px;\n  }\n"]))),W=(C.ZP.div(a||(a=(0,U.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),C.ZP.div(s||(s=(0,U.Z)(["\n  position: absolute;\n  width: 126px;\n  border: 1px solid var(--dark-blue);\n  background-color: var(--main-light-color);\n  padding: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    border: 1px solid var(--accent-color);\n  }\n"])))),I=C.ZP.div(l||(l=(0,U.Z)(["\n  display: inline-block;\n  width: 19px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin-right: 9px;  \n"]))),O=C.ZP.div(h||(h=(0,U.Z)(["\n  display: inline-block;\n  width: 72px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"]))),T=i(184),A=function(n){var e=n.daysWorkingInWeek,i=(0,z.useState)(""),t=(0,F.Z)(i,2),r=t[0],d=t[1],o=["MN","TU","WE","TH","FR","SA","SU"];(0,z.useEffect)((function(){!function(){var n=(new Date).getDay();d(n)}()}),[]);var a=(0,z.useState)(!1),s=(0,F.Z)(a,2),l=s[0],h=s[1],x=function(){h((function(n){return!n}))};return(0,T.jsxs)("div",{children:[(0,T.jsx)(S,{children:"Time:"}),(0,T.jsx)(_,{children:e&&0!==e.length?0!==r&&e[r]?e[r].isOpen?(0,T.jsxs)(D,{onClick:x,children:[e[r-1].from," - ",e[r-1].to]}):(0,T.jsx)(D,{onClick:x,children:"closed today"}):(0,T.jsxs)(D,{onClick:x,children:[e[6].from," - ",e[6].to]}):(0,T.jsx)(E,{children:"-"})}),l&&(0,T.jsx)(W,{onClick:function(){h(!1)},children:(0,T.jsx)("ul",{children:function(){for(var n=[],i=0;i<o.length;i++)n.push((0,T.jsxs)("li",{children:[(0,T.jsx)(I,{children:o[i]}),e[i].isOpen?(0,T.jsx)(O,{children:e[i].from+"-"+e[i].to}):(0,T.jsx)(O,{children:"Closed"})]},i));return n}()})})]})},B=C.ZP.div(x||(x=(0,U.Z)(["\n  position: relative;\n  width: 280px;\n  height: auto;\n  border-radius: 40px;\n  padding: 16px 12px;\n  background: var(--main-light-color);\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    padding: 12px;\n    margin: 0;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 16px;\n    width: 395px;\n  }\n"]))),L=C.ZP.a(p||(p=(0,U.Z)(["\n  display: block;\n  color: var(--dark-blue);\n  text-align: center;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 16px;\n  transition: all ease-in-out 0.2s;\n  @media screen and (min-width: 768px) {\n    height: 54px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 54px;\n  }\n  &:hover {\n    color: var(--accent-color);\n  }\n"]))),H=C.ZP.div(c||(c=(0,U.Z)(["\n  display: flex;\n  gap: 12px;\n  @media screen and (min-width: 1280px) {\n    gap: 20px;\n  }\n"]))),M=C.ZP.div(m||(m=(0,U.Z)(["\n  width: 100px;\n  @media screen and (min-width: 768px) {\n    width: 124px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    width: 146px;\n  }\n"]))),N=C.ZP.img(f||(f=(0,U.Z)(["\n  width: 100%;\n  object-fit: contain;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 146px;\n  }\n"]))),R=C.ZP.div(g||(g=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),q=C.ZP.div(w||(w=(0,U.Z)(["\n  height: 17px;\n  cursor: auto;\n  &:hover {\n    color: var(--main-color);\n  }\n  @media screen and (min-width: 768px) {\n    height: 19px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 22px;\n    width: 197px;\n  }\n"]))),G=C.ZP.div(u||(u=(0,U.Z)(["\n  height: 56px;\n  width: 145px;\n  @media screen and (min-width: 768px) {\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 197px;\n  }\n"]))),J=C.ZP.p(v||(v=(0,U.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  ","\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"])),""),K=C.ZP.a(Z||(Z=(0,U.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 16px;\n    width: 197px;\n  }\n"]))),Q=C.ZP.a(j||(j=(0,U.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  height: 56px;\n  width: 145px;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 56px;\n    width: 197px;\n  }\n"]))),V=C.ZP.div(y||(y=(0,U.Z)(["\n  height: 56px;\n  width: 145px;\n  @media screen and (min-width: 768px) {\n    height: 56px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 56px;\n    width: 197px;\n  }\n"]))),X=function(n){var e=n.responseByFriends,i=e.title,t=e.url,r=e.addressUrl,d=e.imageUrl,o=e.address,a=e.workDays,s=e.phone,l=e.email;return(0,T.jsx)("div",{children:(0,T.jsxs)(B,{children:[(0,T.jsx)(L,{href:t,target:"_blank",rel:"noopener noreferrer",children:i}),(0,T.jsxs)(H,{children:[(0,T.jsx)(M,{children:(0,T.jsx)(N,{src:d,alt:"Logo friend"})}),(0,T.jsxs)(R,{children:[(0,T.jsx)(A,{daysWorkingInWeek:a}),(0,T.jsxs)("div",{children:[(0,T.jsx)(J,{children:"Address:"}),o?(0,T.jsx)(V,{children:(0,T.jsx)(Q,{href:r,target:"_blank",rel:"noopener noreferrer",children:o})}):(0,T.jsx)(G,{children:"-"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(J,{children:"Email:"}),l?(0,T.jsxs)(K,{href:"mailto:".concat(l),children:[" ",l," "]}):(0,T.jsx)(q,{children:"-"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(J,{children:"Phone:"}),s?(0,T.jsxs)(K,{href:"tel:".concat(s),children:[" ",s," "]}):(0,T.jsx)(q,{children:"-"})]})]})]})]})})},Y=i(9434),$={selectFriends:function(n){return n.friends},selectFriendsError:function(n){return n.friends.error},loadingSelector:function(n){return n.friends.isLoading}},nn=i(8775),en=i(2483),tn=C.ZP.ul(b||(b=(0,U.Z)(["\n  list-style: none;\n  width: 280px;\n  padding-bottom: 75px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n    width: 704px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1250px;\n    padding-bottom: 69px;\n  }\n"]))),rn=function(){var n=(0,Y.v9)($.selectFriends),e=(0,Y.I0)(),i=(0,Y.v9)($.loadingSelector);return(0,z.useEffect)((function(){e(nn.Z.fetchFriends())}),[e]),(0,T.jsx)(T.Fragment,{children:i?(0,T.jsx)("div",{children:n.items.length&&(0,T.jsx)(tn,{children:n.items.map((function(n){var e=n._id,i=n.title,t=n.url,r=n.addressUrl,d=n.imageUrl,o=n.address,a=n.workDays,s=n.phone,l=n.email;return(0,T.jsx)("li",{children:(0,T.jsx)(X,{responseByFriends:{title:i,url:t,addressUrl:r,imageUrl:d,address:o,workDays:a,phone:s,email:l}})},e)}))})}):(0,T.jsx)(en.Z,{})})},dn=C.ZP.div(k||(k=(0,U.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  align-items: center;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    margin-top: 80px;\n  }\n"]))),on=C.ZP.h1(P||(P=(0,U.Z)(["\n  display: flex;\n  font-style: normal;\n  font-size: 24px;\n  line-height: normal;\n  text-align: center;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    font-size: 48px;\n    font-weight: 700;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 60px;\n  }\n"]))),an=function(){return(0,T.jsxs)(dn,{children:[(0,T.jsx)(on,{children:"Our friends"}),(0,T.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=581.c13c56ff.chunk.js.map