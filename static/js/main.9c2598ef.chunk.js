(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(75)},42:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},72:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(29),c=a.n(r),i=a(14),l=a(12),o=a(5),u=a(6),m=a(8),d=a(7),g=a(9),h=a(77),p=a(78),b=(a(42),a(15)),v=a.n(b),f=(a(47),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).skillTags=function(e){for(var t=[],a=0;a<6;a++)t.push(s.a.createElement("span",{key:e[a].skill_uuid,className:"tag is-info is-capitalized"},e[a].skill_name));return s.a.createElement("div",{className:"tags"},t)},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"card"},!this.props.showSkills&&s.a.createElement("button",{className:"delete is-pulled-right"}),s.a.createElement("div",{className:"card-content"},s.a.createElement("div",{className:"media"},s.a.createElement("div",{className:"media-left"},s.a.createElement("span",{className:"icon is-large"},s.a.createElement("i",{className:"fa fa-user-tie fa-3x"}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("p",{className:"title is-5"},this.props.job.job_title),s.a.createElement("p",{className:"subtitle is-6"},v()(this.props.job.date).format("DD-MM-YYYY HH:mm:ss")))),this.props.showSkills&&s.a.createElement("div",{className:"content"},s.a.createElement("hr",null),s.a.createElement("p",null,"Skills required: "),this.skillTags(this.props.job.skills),s.a.createElement("button",{className:"button is-info is-pulled-right is-inverted"},"Detail"),"\xa0")))}}]),t}(n.Component)),E=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log(this.props.recent);var e=Object.values(this.props.recent);return s.a.createElement("section",{className:"section"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-5"},e[e.length-1]&&s.a.createElement(f,{job:e[e.length-1],showSkills:!0})),s.a.createElement("div",{className:"column is-offset-3 is-4"},e.length>1&&e.reverse().map(function(e){return s.a.createElement(f,{key:e.job_uuid,job:e})})))))}}]),t}(n.Component),j=Object(l.b)(function(e){return{recent:e.recent}})(E),N=(a(49),a(31)),O=a(11),k=a.n(O),w=a(13),S=a(16),y=a(20),x=a.n(y),C=(a(72),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).clearSearch=function(){a.setState({search:"",suggestions:{}})},a.onChange=function(){var e=Object(S.a)(k.a.mark(function e(t){var n,s,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.target.value,r=t.target.name,e.next=4,a.setState((n={},Object(w.a)(n,r,s),Object(w.a)(n,"suggestions",{}),n));case 4:a.autocomplete();case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.autocomplete=Object(S.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t=a.state.search)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,x()("http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=".concat(t));case 5:(n=e.sent).data.length>0&&a.setState({suggestions:n.data,showSuggestions:!0});case 7:case"end":return e.stop()}},e,this)})),a.onKeyDown=function(e){var t=a.state,n=t.activeSuggestion,s=t.suggestions;if(13===e.keyCode)a.selectSuggestion(Object.values(s)[n]);else if(38===e.keyCode){if(0===n)return;a.setState({activeSuggestion:n-1})}else if(40===e.keyCode){if(n-1===Object.values(s).length)return;a.setState({activeSuggestion:n+1})}},a.suggestionList=function(){var e=a.state,t=e.suggestions,n=e.search,r=e.activeSuggestion,c=e.showSuggestions;if(0!==!Object.values(t).length&&c)return s.a.createElement("div",{id:"autocomplete-list",className:"autocomplete-items"},Object.values(t).map(function(e,t){return s.a.createElement("div",{key:e.uuid,onClick:function(){a.selectSuggestion(e)},className:t===r?"autocomplete-active":"has-text-grey"},s.a.createElement("strong",null,e.suggestion.substr(0,n.length)),e.suggestion.substr(n.length))}))},a.selectSuggestion=function(){var e=Object(S.a)(k.a.mark(function e(t){var n,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({suggestions:{},search:t.suggestion,activeSuggestion:0}),e.next=3,x()("http://api.dataatwork.org/v1/jobs/".concat(t.uuid,"/related_skills"));case 3:n=e.sent,console.log("JOB",n.data),s=Object(N.a)({},n.data,{date:v()()}),a.props.saveRecent(s);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onBlur=function(){setTimeout(function(){a.setState({showSuggestions:!1})},100)},a.state={search:"",activeSuggestion:0,showSuggestions:!1,suggestions:{}},a}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.search;return s.a.createElement("div",{className:"field has-addons"},s.a.createElement("div",{className:"control autocomplete"},s.a.createElement("input",{className:"input search-input",type:"text",placeholder:"Search for...",onClick:this.clearSearch,onChange:this.onChange,value:e,name:"search",id:"search",autoComplete:"off",onKeyDown:this.onKeyDown,onBlur:this.onBlur}),this.suggestionList()),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-info"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-search"})))))}}]),t}(n.Component)),B=Object(l.b)(null,function(e){return{saveRecent:function(t){return e({type:"SAVE",value:t})}}})(C),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("nav",{className:"navbar is-dark",role:"navigation","aria-label":"main navigation"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement("a",{className:"navbar-item",href:"/"},s.a.createElement("h3",{className:"title is-6 has-text-white"},"Via Work",s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-bars"})))),s.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}),s.a.createElement("span",{"aria-hidden":"true"}))),s.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},s.a.createElement("div",{className:"navbar-end"},s.a.createElement("div",{className:"navbar-item"},s.a.createElement(B,null)),s.a.createElement("a",{className:"navbar-item"},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"9+"},s.a.createElement("i",{className:"fa fa-bell"}))),s.a.createElement("a",{className:"navbar-item "},s.a.createElement("span",{className:"icon badge is-badge-danger","data-badge":"8"},s.a.createElement("i",{className:"fa fa-envelope"}))),s.a.createElement("a",{className:"navbar-item"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fa fa-user-circle"}))))))}}]),t}(n.Component),_=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(D,null),s.a.createElement(h.a,null,s.a.createElement(p.a,{exact:!0,path:"/",component:j})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y={recent:[]},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE":return{recent:e.recent.concat(t.value)};default:return e}},J=Object(i.b)(A);c.a.render(s.a.createElement(l.a,{store:J},s.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.9c2598ef.chunk.js.map