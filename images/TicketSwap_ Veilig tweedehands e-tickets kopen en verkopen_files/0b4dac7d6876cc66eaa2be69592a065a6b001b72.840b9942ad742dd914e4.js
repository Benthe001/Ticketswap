(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"1GBj":function(t,e,n){var r=n("vlbB");t.exports=function(t,e){var n=-1,a=t.length,i=a-1;for(e=void 0===e?a:e;++n<e;){var o=r(n,i),u=t[o];t[o]=t[n],t[n]=u}return t.length=e,t}},"9WAK":function(t,e,n){var r=n("Il6v"),a=n("OVaF"),i=n("Z0cm");t.exports=function(t){return(i(t)?r:a)(t)}},Il6v:function(t,e,n){var r=n("Q1l4"),a=n("1GBj");t.exports=function(t){return a(r(t))}},JmpY:function(t,e,n){var r=n("eUgh");t.exports=function(t,e){return r(e,(function(e){return t[e]}))}},MRGs:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));var r=n("wTIg"),a=n("xV9n"),i=Object(r.a)("div",{target:"e14j0jnn0"})("margin-bottom:",a.Cb[32],";@media ",a.rb.tablet,"{margin-bottom:",a.Cb[64],";}"),o=Object(r.a)("header",{target:"e14j0jnn1"})("margin-bottom:",a.Cb[16],";"),u=Object(r.a)(a.A,{target:"e14j0jnn2"})("margin-top:",a.Cb[4],";color:",a.qb.spaceMedium,";")},OVaF:function(t,e,n){var r=n("1GBj"),a=n("P/G1");t.exports=function(t){return r(a(t))}},"P/G1":function(t,e,n){var r=n("JmpY"),a=n("7GkX");t.exports=function(t){return null==t?[]:r(t,a(t))}},Q1l4:function(t,e){t.exports=function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},vlbB:function(t,e){var n=Math.floor,r=Math.random;t.exports=function(t,e){return t+n(r()*(e-t+1))}},zWsT:function(t,e,n){"use strict";var r=n("rePB"),a=n("ODXe"),i=n("wTIg"),o=n("q1tI"),u=n.n(o),s=n("fsQa"),c=n("9WAK"),l=n.n(c),m=n("xV9n"),d=n("VX74"),f=n("KqEz"),g=n("h4VS");function b(){var t=Object(g.a)(["\n  query getTestimonials(\n    $first: Int\n    $language: String!\n    $minimumRating: Int\n    $minimumLength: Int\n    $maximumLength: Int\n    $after: String\n  ) {\n    testimonials(\n      first: $first\n      after: $after\n      language: $language\n      minimumRating: $minimumRating\n      minimumLength: $minimumLength\n      maximumLength: $maximumLength\n    ) {\n      edges {\n        node {\n          ... on Testimonial {\n            id\n            user {\n              id\n              avatar\n              firstname\n            }\n            description\n            createdAt\n          }\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n"]);return b=function(){return t},t}var p=Object(d.gql)(b());function v(){var t=Object(g.a)(["\n  query getUsercountAndAvatars {\n    randomUserAvatars(first: 20) {\n      avatar\n    }\n    userCount\n  }\n"]);return v=function(){return t},t}var h=Object(d.gql)(v()),y=n("iM1O"),O=n("MRGs"),j=n("xmpm"),x=u.a.createElement;function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function k(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C=Object(i.a)("header",{target:"eg1mhkm0"})("text-align:center;margin-left:auto;margin-right:auto;padding-left:",m.Cb[16],";padding-right:",m.Cb[16],";@media ",m.rb.laptop,"{max-width:",37.5,"rem;}"),I=Object(i.a)("div",{target:"eg1mhkm1"})({name:"79elbk",styles:"position:relative;"}),z=Object(i.a)(j.b,{target:"eg1mhkm2"})("display:flex;align-items:center;justify-content:center;height:",24,"rem;"),P=Object(i.a)("div",{target:"eg1mhkm3"})("position:relative;width:80%;opacity:",(function(t){return"entering"===t.state||"entered"===t.state?1:0}),";transition-timing-function:",m.sb.easeOutCubic,";transition-property:opacity,transform;&:first-of-type{z-index:1;transform:",(function(t){switch(t.state){case"exited":return"rotate(4deg) translate3d(2rem,0,0)";case"exiting":return"rotate(4deg) translate3d(-2rem,0,0)";default:return"rotate(4deg) translate3d(0,0,0)"}}),";transition-duration:",100,"ms;display:none;}&:nth-of-type(2){z-index:2;transform:",(function(t){switch(t.state){case"exited":return"rotate(-3deg) translate3d(2rem,0,0)";case"exiting":return"rotate(-3deg) translate3d(-2rem,0,0)";default:return"rotate(-3deg) translate3d(0,0,0)"}}),";transition-duration:",250,"ms;display:none;}&:last-of-type{z-index:3;transform:",(function(t){switch(t.state){case"exited":return"rotate(4deg) translate3d(2rem,0,0)";case"exiting":return"rotate(4deg) translate3d(-2rem,0,0)";default:return"rotate(4deg) translate3d(0,0,0)"}}),";transition-duration:",400,"ms;display:block;}@media ",m.rb.laptop,"{width:40%;&:first-of-type{display:block;}}@media ",m.rb.laptop,"{width:calc(100% / 3);&:nth-of-type(2){display:block;}}"),M=Object(i.a)("div",{target:"eg1mhkm4"})("position:absolute;left:0;top:0;right:0;bottom:0;z-index:0;padding-top:",m.Cb[32],";padding-bottom:",m.Cb[32],";display:flex;flex-direction:column;justify-content:space-between;align-items:center;overflow:hidden;&::before{content:'';position:absolute;z-index:1;left:0;top:0;right:0;bottom:0;background-image:radial-gradient(rgba(255,255,255,1) 0%,rgba(255,255,255,0) 80%);}"),$=Object(i.a)("div",{target:"eg1mhkm5"})("display:flex;position:relative;&:nth-of-type(even){left:-",m.Cb[64],";}"),L=Object(i.a)("div",{target:"eg1mhkm6"})("text-align:center;width:",m.Cb[128],";flex-shrink:0;");e.a=Object(s.withTranslation)("common")((function(t){var e=t.t,n=null,r=Object(y.c)(),i=u.a.useState(!1),o=Object(a.a)(i,2),s=o[0],c=o[1],g={notifyOnNetworkStatusChange:!0,variables:{first:3,language:r,minimumRating:3,minimumLength:5,maximumLength:200}},b=Object(d.useLazyQuery)(p,g),v=Object(a.a)(b,2),j=v[0],w=v[1],A=w.loading,q=w.data,G=void 0===q?{}:q,T=w.fetchMore,E=Object(d.useLazyQuery)(h),R=Object(a.a)(E,2),S=R[0],B=R[1].data,N=void 0===B?{}:B;u.a.useEffect((function(){return j(),S(),function(){clearTimeout(n)}}),[j,S,n]);var Q=G.testimonials,V=void 0===Q?{}:Q,D=N.randomUserAvatars,J=void 0===D?[]:D,U=N.userCount,_=V.edges,F=void 0===_?[]:_,K=V.pageInfo,W=void 0===K?{}:K,X=Object(m.Lb)({in:!A&&!s&&F.length>0,timeout:400}),Y=Object(a.a)(X,2),Z=Y[0],H=Y[1],tt=u.a.useMemo((function(){return l()(J)}),[J]),et=u.a.useMemo((function(){return l()(J)}),[J]),nt=u.a.useMemo((function(){return l()(J)}),[J]);return x(O.a,null,U?x(C,{as:"header"},x(m.y,null,e("common:testimonials.title",{count:new Intl.NumberFormat(r).format(U)}))):null,x(I,null,(null===F||void 0===F?void 0:F.length)>0&&x(z,null,F.map((function(t){var e=t.node;return H?x(P,{state:Z,key:e.id},x(f.a,e)):null}))),J.length>0&&x(M,null,x($,null,tt.map((function(t,e){return x(L,{key:t.avatar+e},x(m.f,{src:t.avatar,size:64}))}))),x($,null,et.map((function(t,e){return x(L,{key:t.avatar+e},x(m.f,{src:t.avatar,size:64}))}))),x($,null,nt.map((function(t,e){return x(L,{key:t.avatar+e},x(m.f,{src:t.avatar,size:64}))}))))),W.hasNextPage&&x(C,{as:"footer"},x(m.h,{variant:"secondary",size:"small",rounded:!0,onClick:function(){c(!0),n=setTimeout((function(){T({query:p,variables:k(k({},g.variables),{},{after:W.endCursor}),updateQuery:function(t,e){var n=e.fetchMoreResult;c(!1);var r=n.testimonials,a=r.edges,i=r.pageInfo;return a.length?{testimonials:k(k({},t.testimonials),{},{edges:a,pageInfo:i})}:t}})}),400)},loading:A||s,disabled:A||s},e("common:generic.showMore"))))}))}}]);
//# sourceMappingURL=0b4dac7d6876cc66eaa2be69592a065a6b001b72.840b9942ad742dd914e4.js.map