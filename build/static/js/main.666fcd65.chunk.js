(this.webpackJsonpreactcourse=this.webpackJsonpreactcourse||[]).push([[0],{14:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(1),u=e.n(r),i=e(4),o=e.n(i),s=e(2),a=e(5),j=e(6),b=e(8),l=e(7),h=function(t){Object(b.a)(e,t);var n=Object(l.a)(e);function e(t){var c;return Object(a.a)(this,e),(c=n.call(this,t)).state={count:t.initialCount},c}return Object(j.a)(e,[{key:"render",value:function(){var t=this;return Object(c.jsx)(O.Consumer,{children:function(n){return Object(c.jsxs)("div",{style:n,children:[Object(c.jsx)("button",{onClick:function(){return t.changeCount(-1)},children:"-"}),Object(c.jsx)("span",{children:t.state.count}),Object(c.jsx)("button",{onClick:function(){return t.changeCount(1)},children:"+"})]})}})}},{key:"changeCount",value:function(t){this.setState((function(n){return{count:n.count+t}}))}}]),e}(r.Component);function d(t){var n=t.initialCount,e=Object(r.useState)(n),u=Object(s.a)(e,2),i=u[0],o=u[1],a=Object(r.useContext)(O);return Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{style:a,onClick:function(){return o((function(t){return t-1}))},children:"-"}),Object(c.jsx)("span",{children:i}),Object(c.jsx)("button",{style:a,onClick:function(){return o((function(t){return t+1}))},children:"+"})]})}var O=u.a.createContext();var C=function(){var t=Object(r.useState)("red"),n=Object(s.a)(t,2),e=n[0],u=n[1];return Object(c.jsxs)(O.Provider,{value:{backgroundColor:e},children:["Counter",Object(c.jsx)(h,{initialCount:4}),"CounterHooks",Object(c.jsx)(d,{initialCount:500}),Object(c.jsx)("button",{onClick:function(){return u((function(t){return"red"===t?"white":"red"}))},children:"Change Theme "})]})},f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,u=n.getLCP,i=n.getTTFB;e(t),c(t),r(t),u(t),i(t)}))};o.a.render(Object(c.jsx)(u.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),f()}},[[14,1,2]]]);
//# sourceMappingURL=main.666fcd65.chunk.js.map