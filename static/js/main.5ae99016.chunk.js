(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=(n(17),n(1)),i=n(2),u=n(4),l=n(3),h=n(5),p=(n(19),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.props.onSearchChange;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",className:"search-input ".concat(this.props.className),placeholder:this.props.placeholder,onChange:this.props.onChangeHandler}))}}]),t}(a.Component)),m=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.monster,t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"card-container",key:t},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?set=set2&size=180x180"),alt:"Monster ".concat(n)}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}}]),t}(a.Component)),f=(n(23),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.monsters;return r.a.createElement("div",{className:"card-list"},e.map(function(e){return r.a.createElement(m,{monster:e,key:e})}))}}]),t}(a.Component)),d=(n(25),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).onSearchChange=function(t){var n=t.target.value.toLowerCase();e.setState(function(){return{searchField:n}})},e.state={monsters:[],searchField:""},e}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState(function(){return{monsters:t}},function(){})})}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,a=this.onSearchChange,c=t.filter(function(e){return e.name.toLowerCase().includes(n)});return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"app-title"},"Monster Rolodex"),r.a.createElement(p,{onChangeHandler:a,className:"search-box",placeholder:"Search Monsters"}),r.a.createElement(f,{monsters:c}))}}]),t}(a.Component)),b=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,28)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null))),b()},8:function(e,t,n){e.exports=n(27)}},[[8,3,2]]]);
//# sourceMappingURL=main.5ae99016.chunk.js.map