(this["webpackJsonpreact-blog-infinite-scrolling"]=this["webpackJsonpreact-blog-infinite-scrolling"]||[]).push([[0],{29:function(e,t,n){e.exports=n(53)},34:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),l=(n(34),n(9)),c=n.n(l),s=n(11),u=n(4),d=n(24),m=n(8),p=n(25),f=n.n(p),h=n(2),v=n(3);function b(){var e=Object(h.a)(["\n  cursor: pointer;\n"]);return b=function(){return e},e}function w(){var e=Object(h.a)(["\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  background-color: palevioletred;\n  color: white;\n  border-radius: 50%;\n  margin-left: 5px;\n  height: 40px;\n  width: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return w=function(){return e},e}var g=v.a.div(w()),x=v.a.div(b()),E=function(e){var t=e.number,n=e.title,o=e.body,i=Object(a.useState)({showBody:!1}),l=Object(m.a)(i,2),c=l[0],s=l[1],d=c.showBody;return r.a.createElement(x,{className:"bg-pink-200 relative text-dark rounded sm:mx-auto my-5 max-w-md shadow-md mx-2 p-5",onClick:function(){return s((function(e){return Object(u.a)({},e,{showBody:!d})}))}},r.a.createElement(g,null,t),r.a.createElement("div",{className:"text-lg mb-3 capitalize font-semibold pt-5"},n),d&&r.a.createElement("div",{className:"text-base"},o))};E.defaultProps={number:1,title:"Lorem ipsum dolor sit amet",body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus\n    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium\n    nihil."};var O=E,y=function(e){var t=e.postsList;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(O,{key:e.id,title:e.title,body:e.body,number:e.id})})))};function j(){var e=Object(h.a)(["\n  &:nth-child(2) {\n    animation-delay: 0.2s;\n  }\n  &:nth-child(3) {\n    animation-delay: 0.3s;\n  }\n  background-color: palevioletred;\n  height: 10px;\n  width: 10px;\n  margin: 5px;\n  border-radius: 50%;\n  animation: "," 0.5s ease-in infinite;\n"]);return j=function(){return e},e}function N(){var e=Object(h.a)(["\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n"]);return N=function(){return e},e}function k(){var e=Object(h.a)(["\n  display: flex;\n  transition: opacity 0.3s ease-in;\n  justify-content: center;\n  align-items: center;\n  margin: 10px 50px;\n"]);return k=function(){return e},e}var L=v.a.div(k()),T=Object(v.b)(N()),P=v.a.div(j(),T),S=function(){return r.a.createElement(L,null,r.a.createElement(P,null),r.a.createElement(P,null),r.a.createElement(P,null))};function B(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n"]);return B=function(){return e},e}function C(){var e=Object(h.a)(["\n  background-color: palevioletred;\n  color: white;\n  min-height: 40px;\n  height: auto;\n  min-width: 150px;\n  width: auto;\n  text-align: center;\n  border-radius: 33px;\n  &:focus {\n    outline: none;\n  }\n  margin-bottom: 15px;\n"]);return C=function(){return e},e}var _=v.a.button(C()),z=v.a.div(B()),A=function(e){var t=e.text,n=e.handleClick;return r.a.createElement(z,null,r.a.createElement(_,{onClick:n},t))},F=function(e){var t=e.title,n=e.content;return r.a.createElement("div",null,r.a.createElement("div",{className:"max-width bg-purple-200 border-t-4 border-purple-500 rounded-b text-purple-900 ml-5 px-4 py-3 shadow-md",role:"alert"},r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"py-1"},r.a.createElement("svg",{className:"fill-current h-6 w-6 text-purple-500 mr-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"}))),r.a.createElement("div",null,r.a.createElement("p",{className:"font-bold"},t),r.a.createElement("p",{className:"text-sm"},n)))))};F.defaultProps={title:"This is an example title",content:"This is an example content text"};var M=F,H={alerts:{NO_POSTS_TITLE:"You've read them all",NO_POSTS_CONTENT:"You've read all posts that we have for now, please check in later to see if we'll have updated more posts for you"}},Y="https://jsonplaceholder.typicode.com",I=function(){var e=Object(a.useState)({showBtn:!1,showLoader:!1,posts:[],filteredPosts:[],showFiltered:!1,urlLimit:10,urlPage:1,showAlert:{status:!1,title:"",content:""}}),t=Object(m.a)(e,2),n=t[0],o=t[1],i=n.showBtn,l=n.showLoader,p=n.posts,h=n.urlLimit,v=n.urlPage,b=n.showAlert,w=b.status,g=b.title,x=b.content,E=n.filteredPosts,O=n.showFiltered,j=H.alerts;Object(a.useEffect)((function(){(function(){var e=Object(d.a)(c.a.mark((function e(t,n){var a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o((function(e){return Object(u.a)({},e,{showLoader:!0})})),a="".concat(Y,"/posts?_limit=").concat(t,"&_page=").concat(n),e.next=4,f.a.get(a);case 4:r=e.sent,(i=r.data).length||o((function(e){return Object(u.a)({},e,{showAlert:{status:!0,title:j.NO_POSTS_TITLE,content:j.NO_POSTS_CONTENT}})})),console.log("*** res **** ".concat(JSON.stringify(i))),i.length&&o((function(e){return Object(u.a)({},e,{posts:[].concat(Object(s.a)(p),Object(s.a)(r.data)),showLoader:!1})}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()(h,v)}),[v]),Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){var e=document.documentElement,t=e.scrollHeight,n=e.scrollTop;e.clientHeight+n>=t-5&&(console.log("*** end of page ***"),o((function(e){return Object(u.a)({},e,{showBtn:!0})})))})),function(){window.removeEventListener("scroll",(function(){console.log("*** clean up: remove eventlistener ***")}))}}),[]);return r.a.createElement("div",null,r.a.createElement("div",{className:"sm:mx-auto max-w-md mt-5 mx-2"},r.a.createElement("input",{className:"bg-pink-100 appearance-none border-2 border-pink-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-500",id:"inline-full-name",type:"text",placeholder:"Filter posts ...",onChange:function(e){var t=e.target.value.toUpperCase(),n=p.filter((function(e){return e.title.toUpperCase().indexOf(t)>-1||e.body.toUpperCase().indexOf(t)>-1}));o((function(e){return Object(u.a)({},e,{showFiltered:!0,filteredPosts:n})}))}})),w&&r.a.createElement("div",{className:"fixed z-10"},r.a.createElement(M,{title:g,content:x})),O?r.a.createElement(y,{postsList:E}):r.a.createElement(y,{postsList:p}),i&&r.a.createElement(A,{text:"Load More",handleClick:function(){o((function(e){return Object(u.a)({},e,{showBtn:!1,showLoader:!0,showFiltered:!1})})),setTimeout((function(){o((function(e){return Object(u.a)({},e,{urlPage:v+1,showLoader:!1})}))}),3e3)}}),l&&r.a.createElement(S,null))};var J=function(){return r.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.1eedd683.chunk.js.map