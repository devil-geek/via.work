(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(75)},42:function(e,a,t){},47:function(e,a,t){},70:function(e,a,t){},72:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(30),r=t.n(c),i=t(15),l=t(6),o=t(8),u=t(9),m=t(11),d=t(10),g=t(12),b=t(77),f=t(78),v=(t(42),t(16)),h=t.n(v),E=(t(47),Object(l.b)(null,function(e){return{deleteRecent:function(a){return e({type:"DELETE",value:a})}}})(function(e){return s.a.createElement("div",{className:"card"},!e.showSkills&&s.a.createElement("button",{className:"delete is-pulled-right",onClick:function(){return e.deleteRecent(e.job.job_uuid)}}),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("span",{className:"icon is-large"},s.a.createElement("i",{className:"fa fa-user-tie fa-3x"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-5"},e.job.job_title),s.a.createElement("p",{className:"subtitle is-6"},h()(e.job.date).format("DD-MM-YYYY HH:mm:ss")))),e.showSkills&&s.a.createElement("div",{className:"content"},s.a.createElement("hr",null),s.a.createElement("p",null,"Skills required: "),function(e){for(var a=[],t=0;t<6;t++)a.push(s.a.createElement("span",{key:e[t].skill_uuid,className:"tag is-info is-capitalized"},e[t].skill_name));return s.a.createElement("div",{className:"tags"},a)}(e.job.skills),s.a.createElement("button",{className:"button is-info is-pulled-right is-inverted"},"Detail"),"\xa0")))})),p=t(13),N=t(7),j=t.n(N),k=t(14),w=t(17),O=t(21),S=t.n(O),y=(t(70),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(d.a)(a).call(this,e))).clearSearch=function(){t.setState({search:"",suggestions:{}})},t.onChange=function(){var e=Object(w.a)(j.a.mark(function e(a){var n,s,c;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=a.target.value,c=a.target.name,e.next=4,t.setState((n={},Object(k.a)(n,c,s),Object(k.a)(n,"suggestions",{}),n));case 4:t.autocomplete();case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.autocomplete=Object(w.a)(j.a.mark(function e(){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(""===(a=t.state.search)||a.length<2)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,S()("http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=".concat(a));case 5:(n=e.sent).data.length>0&&t.setState({suggestions:n.data,showSuggestions:!0});case 7:case"end":return e.stop()}},e,this)})),t.onKeyDown=function(e){var a=t.state,n=a.activeSuggestion,s=a.suggestions;if(13===e.keyCode)t.selectSuggestion(Object.values(s)[n]);else if(38===e.keyCode){if(0===n)return;t.setState({activeSuggestion:n-1})}else if(40===e.keyCode){if(n-1===Object.values(s).length)return;t.setState({activeSuggestion:n+1})}},t.suggestionList=function(){var e=t.state,a=e.suggestions,n=e.search,c=e.activeSuggestion,r=e.showSuggestions;if(0!==!Object.values(a).length&&r)return s.a.createElement("div",{id:"autocomplete-list",className:"autocomplete-items"},Object.values(a).map(function(e,a){return s.a.createElement("div",{key:e.uuid,onClick:function(){t.selectSuggestion(e)},className:a===c?"autocomplete-active":"has-text-grey"},s.a.createElement("strong",null,e.suggestion.substr(0,n.length)),e.suggestion.substr(n.length))}))},t.selectSuggestion=function(){var e=Object(w.a)(j.a.mark(function e(a){var n,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=2;break}return e.abrupt("return");case 2:return t.setState({suggestions:{},search:a.suggestion,activeSuggestion:0}),e.next=5,S()("http://api.dataatwork.org/v1/jobs/".concat(a.uuid,"/related_skills"));case 5:n=e.sent,console.log("JOB",n.data),s=Object(p.a)({},n.data,{date:h()()}),t.props.saveRecent(s);case 9:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),t.onBlur=function(){setTimeout(function(){t.setState({showSuggestions:!1})},100)},t.state={search:"",activeSuggestion:0,showSuggestions:!1,suggestions:{}},t}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.state.search;return s.a.createElement("div",{className:"field has-addons"},s.a.createElement("div",{className:"control autocomplete"},s.a.createElement("input",{className:"input search-input",type:"text",placeholder:"Search for...",onClick:this.clearSearch,onChange:this.onChange,value:e,name:"search",id:"search",autoComplete:"off",onKeyDown:this.onKeyDown,onBlur:this.onBlur}),this.suggestionList()),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-info"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-search"})))))}}]),a}(n.Component)),x=Object(l.b)(null,function(e){return{saveRecent:function(a){return e({type:"SAVE",value:a})}}})(y),C=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=Object.values(this.props.recent).reverse();return s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"is-hidden-desktop"},s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-narrow"},s.a.createElement(x,null)))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-offset-1 is-5"},e[0]&&s.a.createElement(E,{job:e[0],showSkills:!0})),s.a.createElement("div",{className:"column is-offset-2 is-4"},e.length>0&&s.a.createElement("p",null,"Recent Jobs"),e.length>0&&e.map(function(e){return s.a.createElement(E,{key:e.job_uuid,job:e})})))))}}]),a}(n.Component),D=Object(l.b)(function(e){return{recent:e.recent}})(C),_=(t(72),function(){return s.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item",href:"/"},s.a.createElement("h3",{className:"title is-6 has-text-white"},"Via Work",s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-bars"})))),s.a.createElement("a",{className:"navbar-item is-hidden-desktop"},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"9+"},s.a.createElement("i",{className:"fa fa-bell"}))),s.a.createElement("a",{className:"navbar-item is-hidden-desktop"},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"8"},s.a.createElement("i",{className:"fa fa-envelope"}))),s.a.createElement("a",{className:"navbar-item is-hidden-desktop"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-user-circle"})))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement(x,null)),s.a.createElement("a",{className:"navbar-item"},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"9+"},s.a.createElement("i",{className:"fa fa-bell"}))),s.a.createElement("a",{className:"navbar-item "},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"8"},s.a.createElement("i",{className:"fa fa-envelope"}))),s.a.createElement("a",{className:"navbar-item"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-user-circle"}))))))}),B=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(_,null),s.a.createElement(b.a,null,s.a.createElement(f.a,{exact:!0,path:"/",component:D})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R={recent:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SAVE":return Object(p.a)({},e,{recent:e.recent.concat(a.value)});case"DELETE":return Object(p.a)({},e,{recent:e.recent.filter(function(e){return a.value!==e.job_uuid})});default:return e}},L=Object(i.b)(J);r.a.render(s.a.createElement(l.a,{store:L},s.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.107b575b.chunk.js.map