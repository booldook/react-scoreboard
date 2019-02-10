(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(196)},114:function(e,t,a){},150:function(e,t,a){},194:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c);a(112),a(114),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(20),s=a(45),i=a(63),m=a(15),u=4,h={title:"My Scoreboard",players:[{name:"LDK",score:0,id:1},{name:"HONG",score:0,id:2},{name:"KIM",score:0,id:3},{name:"PARK",score:0,id:4}]},d={refresh_count:0},p=Object(s.b)({playerReducer:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"player/UPDATE_TITLE":return Object(m.a)({},t,{title:a.title});case"player/ADD_PLAYER":return Object(m.a)({},t,{players:[].concat(Object(i.a)(t.players),[{name:a.name,score:0,id:++u}])});case"player/CHANGE_SCORE":return(e=Object(i.a)(t.players)).forEach(function(e,t){t===a.index&&(e.score+=a.delta)}),Object(m.a)({},t,{players:e});case"player/REMOVE_PLAYER":var n=(e=Object(i.a)(t.players)).findIndex(function(e){return e.id===a.id});return e.splice(n,1),Object(m.a)({},t,{players:e});default:return t}},heroReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;switch((arguments.length>1?arguments[1]:void 0).type){case"hero/REFRESH_HERO":return Object(m.a)({},e,{refresh_count:e.refresh_count+1});default:return e}}}),f=Object(s.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(f);var E=a(5),b=a(6),g=a(9),v=a(7),y=a(8),k=a(205),N=a(210),O=a(197),_=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home")}}]),t}(n.Component),j=a(3),x=a.n(j),w=function(e){var t=e.players,a=t.length,n=t.reduce(function(e,t){return e+t.score},0);return r.a.createElement("table",{className:x.a.stats},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Players:"),r.a.createElement("td",null,a)),r.a.createElement("tr",null,r.a.createElement("td",null,"Total Points:"),r.a.createElement("td",null,n))))},S=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isRunning:!1,timer:0},a.handleStopwatch=function(){a.setState(function(e){return{isRunning:!e.isRunning}})},a.handleReset=function(){a.setState({timer:0})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.tickRef=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.tickRef)}},{key:"tick",value:function(){this.state.isRunning&&this.setState(function(e){return e.timer+=1})}},{key:"render",value:function(){return r.a.createElement("div",{className:x.a.stopwatch},r.a.createElement("h2",null,"Stopwatch"),r.a.createElement("span",{className:x.a["stopwatch-time"]},this.state.timer),r.a.createElement("button",{className:x.a.button,onClick:this.handleStopwatch},this.state.isRunning?"Stop":"Start"),r.a.createElement("button",{className:x.a.button,onClick:this.handleReset},"Reset"))}}]),t}(n.Component),C=function(e){var t=e.players,a=e.title,n=e.changeTitle;return r.a.createElement("header",{className:x.a.header},r.a.createElement(w,{players:t}),r.a.createElement("h1",{className:x.a.h1,onClick:n},a),r.a.createElement(S,null))};C.defaultProps={title:"Scoreboard"};var R=Object(o.b)(function(e){return{title:e.playerReducer.title}},function(e){return{changeTitle:function(){return e({type:"player/UPDATE_TITLE",title:"dispatch test"})}}})(C),F=a(10),P=a.n(F),A=Object(o.b)(null,function(e){return{changeScore:function(t,a){return e(function(e,t){return{type:"player/CHANGE_SCORE",index:e,delta:t}}(t,a))}}})(function(e){var t=e.index,a=e.score,n=e.changeScore;return r.a.createElement("div",{className:x.a.counter},r.a.createElement("button",{className:P()(x.a["counter-action"],x.a.decrement),onClick:function(){return n(t,-1)}}," - "),r.a.createElement("span",{className:x.a["counter-score"]},a),r.a.createElement("button",{className:P()(x.a["counter-action"],x.a.increment),onClick:function(){return n(t,1)}}," + "))}),H=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){console.log(this.props.name," rendered");var e=this.props,t=e.id,a=e.name,n=e.score,c=e.index,l=e.isHighScore,o=e.removePlayer;return r.a.createElement("div",{className:x.a.player},r.a.createElement("span",{className:x.a["player-name"]},r.a.createElement("button",{className:x.a["remove-player"],onClick:function(){return o(t)}},"x"),r.a.createElement("svg",{viewBox:"0 0 44 35",className:P()(x.a.svg,{"is-high-score":l})},r.a.createElement("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),r.a.createElement("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"})),a),r.a.createElement(A,{score:n,index:c}))}}]),t}(r.a.PureComponent),T=Object(o.b)(null,function(e){return{removePlayer:function(t){return e(function(e){return{type:"player/REMOVE_PLAYER",id:e}}(t))}}})(H),D=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).textInput=r.a.createRef(),a.handleSubmit=function(e){e.preventDefault(),a.props.addPlayer(a.textInput.current.value),e.currentTarget.reset()},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:x.a.form,onSubmit:this.handleSubmit},r.a.createElement("input",{className:x.a.input,type:"text",ref:this.textInput,placeholder:"enter a player's name"}),r.a.createElement("input",{className:x.a.input,type:"submit",value:"Add Player"}))}}]),t}(n.Component),L=Object(o.b)(null,function(e){return{addPlayer:function(t){return e(function(e){return{type:"player/ADD_PLAYER",name:e}}(t))}}})(D),I=a(24),M=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).getHighScore=function(){var e=a.props.players.reduce(function(e,t){return e>t.score?e:t.score},0);return e>0?e:null},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.players;return r.a.createElement("div",{className:x.a.scoreboard},r.a.createElement(R,{players:t}),t.map(function(t,a){return r.a.createElement(T,{name:t.name,score:t.score,key:t.id.toString(),index:a,isHighScore:t.score===e.getHighScore(),id:t.id})}),r.a.createElement(L,null))}}]),t}(n.Component),U=Object(I.a)(function(e){return{players:e.playerReducer.players}})(M),W=a(46),q=a(198),J=a(199),K=a(200),V=a(201),z=a(202),B=a(209),Y=a(208),G=a(203),X=a(204),Q=a(207),Z=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).toggle=a.toggle.bind(Object(W.a)(Object(W.a)(a))),a.state={isOpen:!1},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement(q.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement("div",{className:"container"},r.a.createElement(Q.a,{to:"/",className:"navbar-brand"},"React"),r.a.createElement(J.a,{onClick:this.toggle}),r.a.createElement(K.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(V.a,{className:"ml-auto",navbar:!0},r.a.createElement(z.a,null,r.a.createElement(Q.a,{to:"/heroes",className:"nav-link"},"Heroes")),r.a.createElement(z.a,null,r.a.createElement(Q.a,{to:"/scoreboard",className:"nav-link"},"Scoreboard")),r.a.createElement(z.a,null,r.a.createElement(Q.a,{to:"/todo",className:"nav-link"},"Todo")),r.a.createElement(B.a,{nav:!0,inNavbar:!0},r.a.createElement(Y.a,{nav:!0,caret:!0},"Options"),r.a.createElement(G.a,{right:!0},r.a.createElement(X.a,null,"Option 1"),r.a.createElement(X.a,null,"Option 2"),r.a.createElement(X.a,{divider:!0}),r.a.createElement(X.a,null,"Reset")))))))}}]),t}(n.Component),$=a(206),ee=a(21),te=a.n(ee),ae=a(40),ne=a(17),re=a.n(ne),ce=(a(150),a(105)),le=(a(192),a(39)),oe=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",sex:{male:!1,female:!1},country:"",address:"",power:{flying:!1,penetration:!1,hacking:!1,strength:!1},photo:""},a.getHero=function(){var e=Object(ae.a)(te.a.mark(function e(t){var n,r,c,l,o;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("http://eastflag.co.kr:8080/api/hero/".concat(t));case 2:for(c in n=e.sent,console.log(n),r=Object(m.a)({},a.state.sex))n.data.sex===c?r[c]=!0:r[c]=!1;for(o in console.log(r),l=Object(m.a)({},a.state.power))n.data.power.indexOf(o)>=0?l[o]=!0:l[o]=!1;console.log(l),a.setState(Object(m.a)({},n.data,{sex:r},{power:l}));case 11:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleText=function(e,t){a.setState(Object(le.a)({},t,e.target.value))},a.handleSex=function(e){var t={male:!1,female:!1};t[e.target.value]=e.target.checked,a.setState({sex:t})},a.handlePower=function(e){var t=Object(m.a)({},a.state.power);t[e.target.value]=e.target.checked,a.setState({power:t})},a.submit=function(e){e.preventDefault();var t=Object(m.a)({},a.state);for(var n in a.state.sex)a.state.sex[n]&&Object.assign(t,{sex:n});var r=[];for(var c in a.state.power)a.state.power[c]&&r.push(c);Object.assign(t,{power:r.toString()}),console.log(t),re.a.put("http://eastflag.co.kr:8080/api/hero",t).then(function(e){console.log(e.data),alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4")})},a.handleUpload=function(e){e.preventDefault();var t=new FormData;t.append("file",e.target.files[0],e.target.files[0].name),re.a.post("http://eastflag.co.kr:8080/api/file",t).then(function(e){console.log(e.data),a.setState({photo:"http://eastflag.co.kr:3000"+e.data.value})})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getHero(this.props.hero_id)}},{key:"componentWillReceiveProps",value:function(e){this.getHero(e.hero_id)}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"name",value:this.state.name,onChange:function(t){return e.handleText(t,"name")},required:!0,minLength:"3",maxLength:"10"})),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Email",id:"email",value:this.state.email,onChange:function(t){return e.handleText(t,"email")},required:!0})),r.a.createElement("div",{className:"d-flex flex-column mt-1"},r.a.createElement("div",null,"\uc131\ubcc4"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"male",id:"male",checked:this.state.sex.male,onChange:this.handleSex,required:!0}),r.a.createElement("label",{className:"form-check-label",htmlFor:"male"},"\ub0a8\uc790")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"female",id:"female",checked:this.state.sex.female,onChange:this.handleSex,required:!0}),r.a.createElement("label",{className:"form-check-label",htmlFor:"female"},"\uc5ec\uc790")))),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"country"},"country"),r.a.createElement("select",{className:"form-control",id:"country",value:this.state.country,onChange:function(t){return e.handleText(t,"country")},required:!0},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Japan"},"Japan"),r.a.createElement("option",{value:"American"},"American"),r.a.createElement("option",{value:"Korean"},"Korean"))),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("textarea",{className:"form-control",placeholder:"Enter address",id:"address",rows:"3",value:this.state.address,onChange:function(t){return e.handleText(t,"address")}})),r.a.createElement("div",{className:"d-flex flex-column mt-1"},r.a.createElement("div",null,"power"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"flying",className:"form-check-input",id:"flying",checked:this.state.power.flying,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flying"},"flying")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"penetration",className:"form-check-input",id:"penetration",checked:this.state.power.penetration,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"penetration"},"penetration")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"hacking",className:"form-check-input",id:"hacking",checked:this.state.power.hacking,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"hacking"},"hacking")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"strength",className:"form-check-input",id:"strength",checked:this.state.power.strength,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"strength"},"strength")))),r.a.createElement("div",{className:"d-flex flex-column mt-3 align-items-start"},r.a.createElement("div",null,"\uc0ac\uc9c4\ub4f1\ub85d"),r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",accept:"image/*",onChange:this.handleUpload}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Choose file")),this.state.photo?r.a.createElement("img",{src:this.state.photo,alt:this.state.name}):""),r.a.createElement("div",{className:"m-3 d-flex justify-content-center"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"\uc218\uc815"))),r.a.createElement("p",null,JSON.stringify(this.state)))}}]),t}(n.Component),se=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).getHero=function(){var e=Object(ae.a)(te.a.mark(function e(t){var n;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("http://eastflag.co.kr:8080/api/hero/".concat(t));case 2:n=e.sent,console.log(n),a.setState({hero:n.data});case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={hero:null},console.log(a.props),a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.getHero(this.props.hero_id)}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps",e),this.getHero(e.hero_id)}},{key:"render",value:function(){return this.state.hero?r.a.createElement("div",null,r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("p",{className:"form-control form-control-sm",id:"name"},this.state.hero.name)),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"email"},"Email Address:"),r.a.createElement("p",{className:"form-control form-control-sm",id:"email"},this.state.hero.email)),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"sex"},"Sex:"),r.a.createElement("p",{className:"form-control form-control-sm",id:"sex"},this.state.hero.sex)),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"country"},"Country:"),r.a.createElement("p",{className:"form-control form-control-sm",id:"country"},this.state.hero.country)),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"power"},"Power:"),r.a.createElement("p",{className:"form-control form-control-sm",id:"power"},this.state.hero.power)),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"power"},"Photo:"),this.state.hero.photo?r.a.createElement("img",{src:this.state.hero.photo,alt:this.state.hero.name}):""),r.a.createElement("hr",{className:"my-5"})):""}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={is_edit:!1},a.handleEditMode=function(e){a.setState(function(e){return{is_edit:!e.is_edit}})},a.handleDelete=function(e,t){window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&re.a.delete("http://eastflag.co.kr:8080/api/hero?hero_id=".concat(t)).then(function(e){console.log(e.data),a.props.history.push("/heroes/hero"),a.props.refreshHero()})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"d-flex justify-content-between align-items-center m-3"},r.a.createElement("h3",null,this.state.is_edit?"Hero Edit":"Hero Detail View"),r.a.createElement("div",null,this.state.is_edit?r.a.createElement("button",{className:"btn btn-info",onClick:this.handleEditMode},"\ucde8\uc18c"):r.a.createElement("button",{className:"btn btn-success",onClick:this.handleEditMode},"\uc218\uc815"),r.a.createElement("button",{className:"btn btn-danger ml-3",onClick:function(t){return e.handleDelete(t,e.props.match.params.hero_id)}},"\uc0ad\uc81c"))),this.state.is_edit?r.a.createElement(oe,{hero_id:this.props.match.params.hero_id}):r.a.createElement(se,{hero_id:this.props.match.params.hero_id}))}}]),t}(n.Component),me=Object(I.a)(null,function(e){return{refreshHero:function(){return e({type:"hero/REFRESH_HERO"})}}})(ie),ue=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={pageSize:10,totalCount:115,currentPage:1,heroes:[]},a.getHeroes=Object(ae.a)(te.a.mark(function e(){var t;return te.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re.a.get("http://eastflag.co.kr:8080/api/paged_heroes?start_index=".concat(a.state.pageSize*(a.state.currentPage-1),"&page_size=").concat(a.state.pageSize));case 2:t=e.sent,console.log(t),a.setState({heroes:t.data.data,totalCount:t.data.total});case 5:case"end":return e.stop()}},e,this)})),a.onChange=function(e){a.setState({currentPage:e},function(){a.getHeroes()})},a.handleClick=function(e,t){console.log(e,t),e.preventDefault(),a.props.history.push("/heroes/hero/".concat(t))},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.getHeroes()}},{key:"componentWillReceiveProps",value:function(e){console.log("componentWillReceiveProps:",e),this.getHeroes()}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(O.a,{path:"/heroes/hero/:hero_id",component:me})),r.a.createElement("div",{className:"card-columns"},this.state.heroes.map(function(t){return r.a.createElement("div",{className:"card",key:t.hero_id,onClick:function(a){return e.handleClick(a,t.hero_id)},style:{cursor:"pointer"}},r.a.createElement("img",{src:t.photo?t.photo:"/react-scoreboard/images/baseline-face-24px.svg",style:{width:"100%"},alt:t.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.name),r.a.createElement("p",{className:"card-text"},"email: ",t.email),r.a.createElement("p",{className:"card-text"},"sex: ",t.sex)))})),r.a.createElement(ce.a,{total:this.state.totalCount,current:this.state.currentPage,pageSize:this.state.pageSize,onChange:this.onChange,className:"d-flex justify-content-center"}))}}]),t}(n.Component),he=Object(I.a)(function(e){return{refresh_count:e.heroReducer.refresh_count}},null)(ue),de=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(g.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",sex:{male:!1,female:!1},country:"",address:"",power:{flying:!1,penetration:!1,hacking:!1,strength:!1},photo:""},a.handleText=function(e,t){a.setState(Object(le.a)({},t,e.target.value))},a.handleSex=function(e){var t={male:!1,female:!1};t[e.target.value]=e.target.checked,a.setState({sex:t})},a.handlePower=function(e){var t=Object(m.a)({},a.state.power);t[e.target.value]=e.target.checked,a.setState({power:t})},a.submit=function(e){e.preventDefault();var t=Object(m.a)({},a.state);for(var n in a.state.sex)a.state.sex[n]&&Object.assign(t,{sex:n});var r=[];for(var c in a.state.power)a.state.power[c]&&r.push(c);Object.assign(t,{power:r.toString()}),console.log(t),re.a.post("http://eastflag.co.kr:8080/api/hero",t).then(function(e){console.log(e.data),a.setState({name:"",email:"",sex:{male:!1,female:!1},country:"",address:"",power:{flying:!1,penetration:!1,hacking:!1,strength:!1},photo:""})})},a.handleUpload=function(e){e.preventDefault();var t=new FormData;t.append("file",e.target.files[0],e.target.files[0].name),re.a.post("http://eastflag.co.kr:8080/api/file",t).then(function(e){console.log(e.data),a.setState({photo:"http://eastflag.co.kr:3000"+e.data.value})})},a}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Hero Registration"),r.a.createElement("form",{onSubmit:this.submit},r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter Name",id:"name",value:this.state.name,onChange:function(t){return e.handleText(t,"name")},required:!0,minLength:"3",maxLength:"10"})),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"email"},"Email Address"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Enter Email",id:"email",value:this.state.email,onChange:function(t){return e.handleText(t,"email")},required:!0})),r.a.createElement("div",{className:"d-flex flex-column mt-1"},r.a.createElement("div",null,"\uc131\ubcc4"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"male",id:"male",checked:this.state.sex.male,onChange:this.handleSex,required:!0}),r.a.createElement("label",{className:"form-check-label",htmlFor:"male"},"\ub0a8\uc790")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"sex",value:"female",id:"female",checked:this.state.sex.female,onChange:this.handleSex,required:!0}),r.a.createElement("label",{className:"form-check-label",htmlFor:"female"},"\uc5ec\uc790")))),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"country"},"country"),r.a.createElement("select",{className:"form-control",id:"country",value:this.state.country,onChange:function(t){return e.handleText(t,"country")},required:!0},r.a.createElement("option",{value:""}),r.a.createElement("option",{value:"Japan"},"Japan"),r.a.createElement("option",{value:"American"},"American"),r.a.createElement("option",{value:"Korean"},"Korean"))),r.a.createElement("div",{className:"form-group mt-1"},r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("textarea",{className:"form-control",placeholder:"Enter address",id:"address",rows:"3",value:this.state.address,onChange:function(t){return e.handleText(t,"address")}})),r.a.createElement("div",{className:"d-flex flex-column mt-1"},r.a.createElement("div",null,"power"),r.a.createElement("div",null,r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"flying",className:"form-check-input",id:"flying",checked:this.state.power.flying,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"flying"},"flying")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"penetration",className:"form-check-input",id:"penetration",checked:this.state.power.penetration,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"penetration"},"penetration")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"hacking",className:"form-check-input",id:"hacking",checked:this.state.power.hacking,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"hacking"},"hacking")),r.a.createElement("div",{className:"form-check form-check-inline"},r.a.createElement("input",{type:"checkbox",value:"strength",className:"form-check-input",id:"strength",checked:this.state.power.strength,onChange:this.handlePower}),r.a.createElement("label",{className:"form-check-label",htmlFor:"strength"},"strength")))),r.a.createElement("div",{className:"d-flex flex-column mt-3 align-items-start"},r.a.createElement("div",null,"\uc0ac\uc9c4\ub4f1\ub85d"),r.a.createElement("div",{className:"custom-file"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",accept:"image/*",onChange:this.handleUpload}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Choose file")),this.state.photo?r.a.createElement("img",{src:this.state.photo,alt:this.state.name}):""),r.a.createElement("div",{className:"m-3 d-flex justify-content-center"},r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"\ub4f1\ub85d"))),r.a.createElement("p",null,JSON.stringify(this.state)))}}]),t}(n.Component),pe=(a(194),function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a,{className:"mb-3"},r.a.createElement(z.a,null,r.a.createElement(Q.a,{to:"/heroes/hero",className:"nav-link"},"Hero List")),r.a.createElement(z.a,null,r.a.createElement(Q.a,{to:"/heroes/register",className:"nav-link"},"Register"))),r.a.createElement(N.a,null,r.a.createElement(O.a,{path:"/heroes/hero",component:he}),r.a.createElement(O.a,{path:"/heroes/register",component:de}),r.a.createElement(O.a,{path:"/heroes",render:function(){return r.a.createElement($.a,{to:"/heroes/hero"})}})))}}]),t}(n.Component)),fe=function(e){function t(){return Object(E.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null),r.a.createElement("div",{className:"container py-3",style:{backgroundColor:"#ffffff"}},r.a.createElement(N.a,null,r.a.createElement(O.a,{exact:!0,path:"/",component:_}),r.a.createElement(O.a,{path:"/heroes",component:pe}),r.a.createElement(O.a,{path:"/scoreboard",component:U})))))}}]),t}(n.Component);console.log("process.env: ",Object({NODE_ENV:"production",PUBLIC_URL:"/react-scoreboard",REACT_APP_IMAGE_HOST:"http://eastflag.co.kr:3000"}),"http://eastflag.co.kr:3000"),l.a.render(r.a.createElement(o.a,{store:f},r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},3:function(e,t,a){e.exports={header:"Scoreboard_header__20224",h1:"Scoreboard_h1__2YQs7",form:"Scoreboard_form__3fqdQ",input:"Scoreboard_input__2-Jqk",button:"Scoreboard_button__2ns_F",svg:"Scoreboard_svg__c0luW","is-high-score":"Scoreboard_is-high-score__2mN-W",grow:"Scoreboard_grow__1CoK1",scoreboard:"Scoreboard_scoreboard__11B7R",player:"Scoreboard_player__2l0UC","player-name":"Scoreboard_player-name__3PcgA","remove-player":"Scoreboard_remove-player__3suhg","counter-score":"Scoreboard_counter-score__1ZEtP",stats:"Scoreboard_stats__1Trv4",stopwatch:"Scoreboard_stopwatch__1nDTT","stopwatch-time":"Scoreboard_stopwatch-time__25l9W",counter:"Scoreboard_counter__3ocUW","counter-action":"Scoreboard_counter-action___Qt9W",increment:"Scoreboard_increment__2L5mo",decrement:"Scoreboard_decrement__3VMP8"}}},[[107,2,1]]]);
//# sourceMappingURL=main.247bb927.chunk.js.map