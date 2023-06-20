"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{1597:function(n,e,t){t.r(e),t.d(e,{default:function(){return B}});var r,i,o,a,s,u,c,p,l,d=t(5861),x=t(9439),h=t(4687),f=t.n(h),g=t(2791),m=t(1087),b=t(6273),v=t(9e3),Z=t(168),j=t(5706),w=j.Z.div(r||(r=(0,Z.Z)(["\n    position: sticky;\n    z-index: 1100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 64px;\n    padding-right: 24px;\n    padding-left: 24px;\n    margin-left: 150px;\n    margin-right: 150px;\n    background-color: #b8a4f4;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n"]))),y=j.Z.form(i||(i=(0,Z.Z)(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n"]))),k=j.Z.button(o||(o=(0,Z.Z)(["\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    :hover {\n    opacity: 1;\n}\n"]))),S=j.Z.input(a||(a=(0,Z.Z)(["\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n\n::placeholder {\n    font: inherit;\n    font-size: 18px;\n}\n"]))),z=t(184),C=function(n){var e=n.onSubmit,t=(0,g.useState)(""),r=(0,x.Z)(t,2),i=r[0],o=r[1];return(0,z.jsx)(w,{children:(0,z.jsxs)(y,{type:"submit",onSubmit:function(n){n.preventDefault(),""!==i?(e(i.trim().toLowerCase()),o("")):(0,b.t)("The search input cannot be empty. Please enter a search query")},children:[(0,z.jsx)(k,{children:(0,z.jsx)(v.$kb,{size:"30"})}),(0,z.jsx)(S,{onChange:function(n){o(n.target.value)},type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:i})]})})},_=t(7689),F=t(687),q=t(6286),T=j.Z.div(s||(s=(0,Z.Z)(["\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center; \n"]))),E=function(){return(0,z.jsx)(T,{children:(0,z.jsx)(q.C,{height:"80",width:"80",radius:"9",color:"#000000",ariaLabel:"three-dots-loading",visible:!0})})},H=t(9052),L=j.Z.li(u||(u=(0,Z.Z)(["\n    border-radius: 2px;\n    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n    padding: 16px;\n    background-color: #b8a4f4;\n    &:hover {\n    transform: scale(1.01);\n    }\n"]))),N=j.Z.img(c||(c=(0,Z.Z)(["\n    &.hover {\n        transform: scale(1.03);\n        cursor: zoom-in;\n    }\n    width: 100%;\n    height: auto;\n    border-radius: 4px;\n"]))),D=j.Z.h3(p||(p=(0,Z.Z)(["\n    font-size: 18px;\n    font-weight: bold;\n    color: #333333;\n    margin-top: 12px;\n"]))),G=function(n){var e=n.movie,t=(0,_.TH)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(L,{children:(0,z.jsxs)(m.rU,{to:"".concat(e.id),state:{from:t},children:[(0,z.jsx)(N,{src:e.poster_path?"https://image.tmdb.org/t/p/w300".concat(e.poster_path):H,alt:"img"}),(0,z.jsx)(D,{children:e.title})]})},e)})},P=j.Z.ul(l||(l=(0,Z.Z)(["\n    display: grid;\n    max-width: 1200px;\n    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n    grid-gap: 16px;\n    margin-top: 20px;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n    margin-left: auto;\n    margin-right: auto;\n"])));var U,$=function(n){var e=n.movies;return(0,z.jsx)(P,{children:e.map((function(n){return(0,z.jsx)(G,{movie:n},n.id)}))})},A=j.Z.div(U||(U=(0,Z.Z)(["\n\n"]))),B=function(){var n,e=(0,g.useState)(1),t=(0,x.Z)(e,2),r=t[0],i=t[1],o=(0,g.useState)(!1),a=(0,x.Z)(o,2),s=a[0],u=a[1],c=(0,g.useState)([]),p=(0,x.Z)(c,2),l=p[0],h=p[1],v=(0,g.useState)(null),Z=(0,x.Z)(v,2),j=Z[0],w=Z[1],y=(0,m.lr)(),k=(0,x.Z)(y,2),S=k[0],q=k[1],T=null!==(n=S.get("query"))&&void 0!==n?n:"";(0,g.useEffect)((function(){if(""!==T){var n=function(){var n=(0,d.Z)(f().mark((function n(){var e,t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,F.HG)(T,r);case 3:if(e=n.sent,0!==(t=e.results).length){n.next=7;break}return n.abrupt("return",(0,b.t)("No results were found for ".concat(T,"!")));case 7:h(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),(0,b.t)("Something went wrong. Try again.");case 13:return n.prev=13,u(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}();n()}}),[T,r]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(A,{children:[(0,z.jsx)(C,{onSubmit:function(n){""!==n.trim()?n!==T?(i(1),h([]),w(null),u(!0),q({query:n})):(0,b.t)("Enter a new movie!"):(0,b.t)("Nothing found!")}}),j&&(0,z.jsx)("div",{children:j}),0!==l.length&&""!==T&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)($,{movies:l}),s&&(0,z.jsx)(E,{})]}),s&&(0,z.jsx)(E,{})]}),(0,z.jsx)(_.j3,{})]})}}}]);
//# sourceMappingURL=597.1a7a8764.chunk.js.map