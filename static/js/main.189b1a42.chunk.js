(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/logo.95605289.svg"},49:function(e,t,a){e.exports=a(84)},54:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=(a(54),a(55),a(17)),u=a(21),i=a(22),l=a(14),p=a(15),E=a(18),O=a(16),d=a(19),m=a(44),f=a.n(m),_=(a(60),function(e){function t(){return Object(l.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:f.a,className:"App-logo",alt:"logo"}),r.a.createElement("h1",{className:"App-branch"},r.a.createElement(s.b,{className:"App-link",to:"/"},"Chuck Norris Facts")))}}]),t}(n.Component)),h={CATEGORIES_LOAD:"CATEGORIES_LOAD",CATEGORIES_LOAD_SUCCESS:"CATEGORIES_LOAD_SUCCESS",CATEGORIES_LOAD_FAIL:"CATEGORIES_LOAD_FAIL",JOKE_LOAD:"JOKE_LOAD",JOKE_LOAD_SUCCESS:"JOKE_LOAD_SUCCESS",JOKE_LOAD_FAIL:"JOKE_LOAD_FAIL",JOKE_RESET:"JOKE_RESET"},g=function(e){return{type:h.CATEGORIES_LOAD_SUCCESS,payload:e}},v=function(e){return{type:h.CATEGORIES_LOAD_FAIL,payload:e}},A=function(e){return{type:h.JOKE_LOAD_SUCCESS,payload:e}},k=function(e){return{type:h.JOKE_LOAD_FAIL,payload:e}};a(62),a(63);var C=function(){return r.a.createElement("div",{className:"progress-bar","data-test":"progress"},r.a.createElement("h2",null,"Loading..."),r.a.createElement("progress",null))},b=(a(64),function(e){function t(){return Object(l.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-message","data-test":"error"},r.a.createElement("h2",null,this.props.message))}}]),t}(r.a.Component)),S=function(e){function t(){return Object(l.a)(this,t),Object(E.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.loadCategories()}},{key:"render",value:function(){var e=this.props,t=e.categories,a=e.isLoadingCategories,n=e.errorCategories;return r.a.createElement("div",{className:"categories","data-test":"categories"},r.a.createElement("div",{className:"box-title"},r.a.createElement("h2",null,"Categories")),t.length>0?this.renderCategories():null,a?r.a.createElement(C,null):null,null!==n?r.a.createElement(b,{message:n}):null)}},{key:"renderCategories",value:function(){return r.a.createElement("ol",{className:"categories__list"},this.props.categories.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(s.b,{className:"categories__list__item",to:"/jokes/".concat(e)},e))}))}}]),t}(r.a.Component),L=Object(i.b)(function(e){return{categories:e.categories,isLoadingCategories:e.isLoadingCategories,errorCategories:e.errorCategories}},function(e){return{loadCategories:function(){return e({type:h.CATEGORIES_LOAD})}}})(S),y=a(12),j=a(48),J=a(5),D=a.n(J),N=a(9),w=a(33),I=a(46),x=a.n(I).a.create({baseURL:"https://api.chucknorris.io/jokes"}),R=function(){var e=Object(w.a)(D.a.mark(function e(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/categories");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(w.a)(D.a.mark(function e(t){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/random?category=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),K=D.a.mark(U),G=D.a.mark(F);function U(){var e;return D.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N.b)(R);case 3:return e=t.sent,t.next=6,Object(N.c)(g(e.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(N.c)(v(t.t0.toString()));case 12:case"end":return t.stop()}},K,null,[[0,8]])}function F(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(h.CATEGORIES_LOAD,U);case 2:case"end":return e.stop()}},G)}var M=D.a.mark(P),B=D.a.mark(V);function P(e){var t;return D.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(N.b)(T,e.payload);case 3:return t=a.sent,a.next=6,Object(N.c)(A(t.data));case 6:a.next=12;break;case 8:return a.prev=8,a.t0=a.catch(0),a.next=12,Object(N.c)(k(a.t0.toString()));case 12:case"end":return a.stop()}},M,null,[[0,8]])}function V(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.d)(h.JOKE_LOAD,P);case 2:case"end":return e.stop()}},B)}var X=D.a.mark(Y);function Y(){return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)([F(),V()]);case 2:case"end":return e.stop()}},X)}var H={categories:[]},q=a(47),z=Object(y.c)({categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.CATEGORIES_LOAD_SUCCESS:return t.payload;default:return e}},isLoadingCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case h.CATEGORIES_LOAD:return!0;case h.CATEGORIES_LOAD_SUCCESS:case h.CATEGORIES_LOAD_FAIL:return!1;default:return e}},errorCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.CATEGORIES_LOAD_FAIL:return t.payload;case h.CATEGORIES_LOAD:case h.CATEGORIES_LOAD_SUCCESS:return null;default:return e}},jokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.JOKE_LOAD_SUCCESS:return[].concat(Object(q.a)(e),[t.payload]);case h.JOKE_RESET:return[];default:return e}},isLoadingJokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;switch((arguments.length>1?arguments[1]:void 0).type){case h.JOKE_LOAD:return!0;case h.JOKE_LOAD_SUCCESS:case h.JOKE_LOAD_FAIL:return!1;default:return e}},errorJokes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.JOKE_LOAD_FAIL:return t.payload;case h.JOKE_LOAD:case h.JOKE_LOAD_SUCCESS:return null;default:return e}}}),Q=function(){var e=Object(j.a)(),t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,a=Object(y.e)(z,t(Object(y.a)(e)));return e.run(Y),a},W=a(27),Z=(a(83),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(E.a)(this,Object(O.a)(t).call(this,e))).onClickLoadJoke=a.onClickLoadJoke.bind(Object(W.a)(a)),a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=$(this.props.match);this.props.loadJoke(e)}},{key:"render",value:function(){var e=this.props,t=e.jokes,a=e.isLoadingJokes,n=e.errorJokes,c=$(this.props.match);return r.a.createElement("div",{className:"jokes","data-test":"jokes"},r.a.createElement("div",{className:"box-title"},r.a.createElement("h2",null,r.a.createElement("span",null,"Jokes category: "),r.a.createElement("span",{className:"box-title__name"},c))),t.length>0?this.renderJoke():null,a?r.a.createElement(C,null):null,null!==n?r.a.createElement(b,{message:n}):null,t.length>0?this.renderButtons():null)}},{key:"renderJoke",value:function(){var e=this;return r.a.createElement("ul",{className:"joke"},this.props.jokes.map(function(t,a){var n=t.icon_url,c=t.value,o=t.updated_at;return r.a.createElement("li",{className:"joke__item",key:a},r.a.createElement("div",{className:"category-content"},r.a.createElement("span",{className:"category-content__date"},e.formatDate(o)),r.a.createElement("img",{src:n,alt:"icon url",className:"category-content__icon"}),r.a.createElement("span",{className:"category-content__description"},c)))}))}},{key:"renderButtons",value:function(){return r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:this.onClickLoadJoke,className:"btn"},"Load another joke"),r.a.createElement(s.b,{to:"/",className:"btn btn-secondary",onClick:this.props.resetJoke},"Back"))}},{key:"onClickLoadJoke",value:function(){var e=this.props.match.params.category;this.props.loadJoke(e)}},{key:"formatDate",value:function(e){var t=new Date(e),a="".concat(t.getDate(),"-").concat(["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"][t.getMonth()],"-").concat(t.getFullYear()),n="".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());return"".concat(a," ").concat(n)}}]),t}(r.a.Component)),$=function(e){return void 0===e?"":e.params.category},ee=Object(i.b)(function(e){return{jokes:e.jokes,isLoadingJokes:e.isLoadingJokes,errorJokes:e.errorJokes}},function(e,t){return{loadJoke:function(){return e((a=$(t.match),{type:h.JOKE_LOAD,payload:a}));var a},resetJoke:function(){return e({type:h.JOKE_RESET,payload:t});var t}}})(Z),te=Q();var ae=function(){return r.a.createElement(i.a,{store:te},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{basename:"/chuck-norris-facts"},r.a.createElement(_,null),r.a.createElement("div",{className:"App-body","data-test":"app"},r.a.createElement(u.a,{path:"/",exact:!0,component:L}),r.a.createElement(u.a,{path:"/jokes/:category",exact:!0,component:ee})))))};o.a.render(r.a.createElement(ae,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.189b1a42.chunk.js.map