(this["webpackJsonprandom-anime-generator"]=this["webpackJsonprandom-anime-generator"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),i=n(2),o=n.n(i),j=n(5),u=n(3),l=(n(13),n(0));function b(){return Object(l.jsx)("div",{className:"centerlogo",children:Object(l.jsx)("h1",{children:"Random Anime Generator "})})}var d=n(7),h=n.n(d),m=function(e){e.type;var t=e.color;return Object(l.jsx)(h.a,{className:"LoadingEffect",type:"spin",color:t,height:"10%",width:"10%"})};function f(e){return Object(l.jsx)("div",{className:"btn",children:Object(l.jsx)("button",{className:"btn",onClick:e.func,children:"Randomize"})})}function O(e){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"title",children:Object(l.jsx)("u",{children:e.name})})})}function x(e){return Object(l.jsx)("div",{className:"AnimeImage",children:Object(l.jsx)("img",{src:e.name,alt:""})})}function p(e){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"InfoBarAir",children:["Airing:\xa0",e.airing.toString()]}),Object(l.jsxs)("div",{className:"InfoBarScore",children:["Avg. Score:\xa0",e.score]}),Object(l.jsxs)("div",{className:"InfoBarEpisode",children:["Episodes:\xa0",e.numEp]})]})})}var v=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),d=i[0],h=i[1],v=Object(c.useState)(!1),g=Object(u.a)(v,2),N=g[0],w=g[1],y=Object(c.useState)(!1),S=Object(u.a)(y,2),k=S[0],E=S[1],I=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://animechan.vercel.app/api/available/anime").then((function(e){return e.json()}));case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){I()}),[]);var A=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.jikan.moe/v3/search/anime?q=".concat(t,"&order_by=title&sort=asc&limit=1")).then((function(e){return e.json()}));case 2:n=e.sent,h(n),w(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(d),Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsx)(b,{}),Object(l.jsx)(f,{func:function(e){E(!0),w(!1);var t=function(){var e=795*Math.random();return e=Math.floor(e),n[e]}();A(t)}}),k?N?Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{name:d.results[0].title}),Object(l.jsx)(x,{name:d.results[0].image_url}),Object(l.jsx)(p,{score:d.results[0].score,airing:d.results[0].airing,numEp:d.results[0].episodes}),Object(l.jsx)("a",{href:d.results[0].url,children:Object(l.jsx)("button",{className:"btn",children:"For more info"})})]}):Object(l.jsx)(m,{}):Object(l.jsx)("div",{className:"Gif",children:Object(l.jsx)("img",{src:"https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif",alt:"",width:"30%"})})]})};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.122dcdec.chunk.js.map