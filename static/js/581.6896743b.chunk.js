"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[581],{854:function(n,e,i){var t=i(8402),r=i(184);e.Z=function(n){var e=n.props;return(0,r.jsx)(t.no,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:e,wrapperClass:"blocks-wrapper"})}},7581:function(n,e,i){i.r(e),i.d(e,{default:function(){return an}});var t,r,d,o,a,s,l,h,p,x,c,m,f,g,w,u,v,Z,j,b,y,k,P,z=i(2791),C=i(9439),F=i(168),U=i(7691),S=U.ZP.div(t||(t=(0,F.Z)(["\n  position: relative;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  border: none;\n  background-color: var(--main-light-color);\n  text-align: left;\n  padding: 0;\n  cursor: pointer;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),_=U.ZP.p(r||(r=(0,F.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"]))),D=U.ZP.div(d||(d=(0,F.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 16px;\n    width: 197px;\n  }\n"]))),E=U.ZP.div(o||(o=(0,F.Z)(["\n  height: 17px;\n  cursor: auto;\n  \n    color: var(--main-color);\n\n  @media screen and (min-width: 768px) {\n    height: 19px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 22px;\n    width: 197px;\n  }\n"]))),W=(U.ZP.div(a||(a=(0,F.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),U.ZP.div(s||(s=(0,F.Z)(["\n  position: absolute;\n  width: 126px;\n  border: 1px solid var(--dark-blue);\n  background-color: var(--main-light-color);\n  padding: 12px;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    border: 1px solid var(--accent-color);\n  }\n"])))),L=U.ZP.div(l||(l=(0,F.Z)(["\n  display: inline-block;\n  width: 19px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  margin-right: 9px;  \n"]))),T=U.ZP.div(h||(h=(0,F.Z)(["\n  display: inline-block;\n  width: 72px;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n"]))),I=i(184),O=function(n){var e=n.daysWorkingInWeek,i=(0,z.useState)(""),t=(0,C.Z)(i,2),r=t[0],d=t[1],o=["MN","TU","WE","TH","FR","SA","SU"];(0,z.useEffect)((function(){!function(){var n=(new Date).getDay();d(n)}()}),[]);var a=(0,z.useState)(!1),s=(0,C.Z)(a,2),l=s[0],h=s[1],p=function(){h((function(n){return!n}))};return(0,I.jsxs)("div",{children:[(0,I.jsx)(_,{children:"Time:"}),(0,I.jsx)(S,{children:e&&0!==e.length?0!==r&&e[r]?e[r].isOpen?(0,I.jsxs)(D,{onClick:p,children:[e[r-1].from," - ",e[r-1].to]}):(0,I.jsx)(D,{onClick:p,children:"closed today"}):(0,I.jsxs)(D,{onClick:p,children:[e[6].from," - ",e[6].to]}):(0,I.jsx)(E,{children:"-"})}),l&&(0,I.jsx)(W,{onClick:function(){h(!1)},children:(0,I.jsx)("ul",{children:function(){for(var n=[],i=0;i<o.length;i++)n.push((0,I.jsxs)("li",{children:[(0,I.jsx)(L,{children:o[i]}),e[i].isOpen?(0,I.jsx)(T,{children:e[i].from+"-"+e[i].to}):(0,I.jsx)(T,{children:"Closed"})]},i));return n}()})})]})},A=U.ZP.div(p||(p=(0,F.Z)(["\n  position: relative;\n  width: 280px;\n  height: auto;\n  border-radius: 40px;\n  padding: 16px 12px;\n  background: var(--main-light-color);\n  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);\n  margin-bottom: 20px;\n  @media screen and (min-width: 768px) {\n    width: 336px;\n    padding: 12px;\n    margin: 0;\n  }\n  @media screen and (min-width: 1280px) {\n    padding: 16px;\n    width: 395px;\n  }\n"]))),B=U.ZP.a(x||(x=(0,F.Z)(["\n  display: block;\n  color: var(--dark-blue);\n  text-align: center;\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 700;\n  line-height: normal;\n  margin-bottom: 16px;\n  transition: all ease-in-out 0.2s;\n  @media screen and (min-width: 768px) {\n    height: 54px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 54px;\n  }\n  &:hover {\n    color: var(--accent-color);\n  }\n"]))),H=U.ZP.div(c||(c=(0,F.Z)(["\n  display: flex;\n  gap: 12px;\n  @media screen and (min-width: 1280px) {\n    gap: 20px;\n  }\n"]))),M=U.ZP.div(m||(m=(0,F.Z)(["\n  width: 100px;\n  @media screen and (min-width: 768px) {\n    width: 124px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    width: 146px;\n  }\n"]))),N=U.ZP.img(f||(f=(0,F.Z)(["\n  width: 100%;\n  object-fit: contain;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 146px;\n  }\n"]))),R=U.ZP.div(g||(g=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n"]))),q=U.ZP.div(w||(w=(0,F.Z)(["\n  height: 17px;\n  cursor: auto;\n  &:hover {\n    color: var(--main-color);\n  }\n  @media screen and (min-width: 768px) {\n    height: 19px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 22px;\n    width: 197px;\n  }\n"]))),G=U.ZP.div(u||(u=(0,F.Z)(["\n  height: 56px;\n  width: 145px;\n  @media screen and (min-width: 768px) {\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 197px;\n  }\n"]))),J=U.ZP.p(v||(v=(0,F.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  ","\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    font-size: 16px;\n  }\n"])),""),K=U.ZP.a(Z||(Z=(0,F.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: block;\n    font-size: 16px;\n    width: 197px;\n  }\n"]))),Q=U.ZP.a(j||(j=(0,F.Z)(["\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  height: 56px;\n  width: 145px;\n  transition: all ease-in-out 0.2s;\n  &:hover {\n    color: var(--accent-color);\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 14px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 56px;\n    width: 197px;\n  }\n"]))),V=U.ZP.div(b||(b=(0,F.Z)(["\n  height: 56px;\n  width: 145px;\n  @media screen and (min-width: 768px) {\n    height: 56px;\n    width: 173px;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 56px;\n    width: 197px;\n  }\n"]))),X=function(n){var e=n.responseByFriends,i=e.title,t=e.url,r=e.addressUrl,d=e.imageUrl,o=e.address,a=e.workDays,s=e.phone,l=e.email;return(0,I.jsx)("div",{children:(0,I.jsxs)(A,{children:[(0,I.jsx)(B,{href:t,target:"_blank",rel:"noopener noreferrer",children:i}),(0,I.jsxs)(H,{children:[(0,I.jsx)(M,{children:(0,I.jsx)(N,{src:d,alt:"Logo friend"})}),(0,I.jsxs)(R,{children:[(0,I.jsx)(O,{daysWorkingInWeek:a}),(0,I.jsxs)("div",{children:[(0,I.jsx)(J,{children:"Address:"}),o?(0,I.jsx)(V,{children:(0,I.jsx)(Q,{href:r,target:"_blank",rel:"noopener noreferrer",children:o})}):(0,I.jsx)(G,{children:"-"})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)(J,{children:"Email:"}),l?(0,I.jsxs)(K,{href:"mailto:".concat(l),children:[" ",l," "]}):(0,I.jsx)(q,{children:"-"})]}),(0,I.jsxs)("div",{children:[(0,I.jsx)(J,{children:"Phone:"}),s?(0,I.jsxs)(K,{href:"tel:".concat(s),children:[" ",s," "]}):(0,I.jsx)(q,{children:"-"})]})]})]})]})})},Y=i(9434),$={selectFriends:function(n){return n.friends},selectFriendsError:function(n){return n.friends.error},loadingSelector:function(n){return n.friends.isLoading}},nn=i(8775),en=i(854),tn=U.ZP.ul(y||(y=(0,F.Z)(["\n  list-style: none;\n  width: 280px;\n  padding-bottom: 75px;\n  @media screen and (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n    width: 704px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 1250px;\n    padding-bottom: 69px;\n  }\n"]))),rn=function(){var n=(0,Y.v9)($.selectFriends),e=(0,Y.I0)(),i=(0,Y.v9)($.loadingSelector);return(0,z.useEffect)((function(){e(nn.Z.fetchFriends())}),[e]),(0,I.jsx)(I.Fragment,{children:i?(0,I.jsx)("div",{children:n.items.length&&(0,I.jsx)(tn,{children:n.items.map((function(n){var e=n._id,i=n.title,t=n.url,r=n.addressUrl,d=n.imageUrl,o=n.address,a=n.workDays,s=n.phone,l=n.email;return(0,I.jsx)("li",{children:(0,I.jsx)(X,{responseByFriends:{title:i,url:t,addressUrl:r,imageUrl:d,address:o,workDays:a,phone:s,email:l}})},e)}))})}):(0,I.jsx)(en.Z,{props:{marginTop:"20%",marginLeft:"5%"}})})},dn=U.ZP.div(k||(k=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 40px;\n  align-items: center;\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    margin-top: 80px;\n  }\n"]))),on=U.ZP.h1(P||(P=(0,F.Z)(["\n  display: flex;\n  font-style: normal;\n  font-size: 24px;\n  line-height: normal;\n  text-align: center;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n    font-size: 48px;\n    font-weight: 700;\n  }\n\n  @media screen and (min-width: 1280px) {\n    margin-bottom: 60px;\n  }\n"]))),an=function(){return(0,I.jsxs)(dn,{children:[(0,I.jsx)(on,{children:"Our friends"}),(0,I.jsx)(rn,{})]})}}}]);
//# sourceMappingURL=581.6896743b.chunk.js.map