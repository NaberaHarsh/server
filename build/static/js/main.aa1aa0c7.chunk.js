(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(8),o=a.n(i),r=(a(15),a(2)),l=a(3),u=a(5),c=a(4),m=a(1),p=a(6),h=(a(16),a(17),a(18),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).up=function(e){var t=a.state.item;if(0!=e){var n=[t[e-1],t[e]];t[e]=n[0],t[e-1]=n[1]}else alert("This item is already at Top");a.setState({item:t})},a.down=function(e){var t=a.state.item;if(e!=a.state.item.length-1){var n=[t[e+1],t[e]];t[e]=n[0],t[e+1]=n[1]}else alert("This item is already at Bottom");a.setState({item:t})},a.state={},a.state.item=[],a.state.newItemName={},a.state.number=0,a.state.per=0,a.state.num=0,a.setStatus=a.setStatus.bind(Object(m.a)(a)),a.getValue=a.getValue.bind(Object(m.a)(a)),a.setValue=a.setValue.bind(Object(m.a)(a)),a.Progress=a.Progress.bind(Object(m.a)(a)),a.completed=a.completed.bind(Object(m.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"setStatus",value:function(e){var t=this.state.item,a=t.indexOf(e);t[a].status=!t[a].status,this.setState({item:t});var n=this.state.number;this.state.item[a].status?(n++,this.setState({number:n})):(n--,this.setState({number:n})),this.state.num=n,this.setState({num:n})}},{key:"Progress",value:function(){var e=this.state.num/this.state.item.length;console.log(e),this.setState({per:100*e})}},{key:"getList",value:function(e){var t=this;return this.state.item.map(function(e,a){return s.a.createElement(b,{key:a,ele:e,setStatus:t.setStatus,up:function(){return t.up(a)},down:function(){return t.down(a)},delete:function(){return t.delete(a)},GoToTop:function(){t.GoToTop(a)},Progress:function(){t.Progress()}})})}},{key:"getValue",value:function(e){this.newItemName=e.target.value}},{key:"setValue",value:function(e){if(this.newItemName){console.log(e.target.value);var t=new Date,a={name:this.newItemName,status:!1,date:t.toLocaleString()},n=this.state.item;n.push(a),this.setState({item:n}),this.newItemName=""}document.getElementById("aa").value="",this.Progress()}},{key:"delete",value:function(e){alert("Are you sure you want to Delete");var t=this.state.number;this.state.item[e].status&&t--,this.setState({number:t});var a=this.state.item;a.splice(e,1),this.setState({item:a});var n=t/this.state.item.length;console.log(n),this.setState({per:100*n})}},{key:"GoToTop",value:function(e){var t=this.state.item,a=[t[0],t[e]];t[e]=a[0],t[0]=a[1],console.log(e);for(var n=e;n>1;n--){var s=[t[n],t[e-1]];t[e-1]=s[0],t[n]=s[1],e--}this.setState({item:t})}},{key:"completed",value:function(){console.log("0")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",{className:"row flex-center"},"ToDo List"),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("input",{id:"aa",onChange:function(t){e.getValue(t)}}),s.a.createElement("button",{onClick:this.setValue.bind(this),className:"btn-outline-info",id:"dd"},"ADD ITEM")),s.a.createElement("p",{className:"row flex-center",style:{marginTop:20}},"Completed Items:",this.state.number," /",this.state.item.length),s.a.createElement("div",{className:"progress",id:"bar"},s.a.createElement("div",{className:"progress-bar  progress-bar-striped bg-warning progress-bar-animated",role:"progressbar",style:{width:"".concat(this.state.per,"%")}})),s.a.createElement("br",null),s.a.createElement("ul",null,this.getList()))}}]),t}(s.a.Component)),b=function(e){function t(e){return Object(r.a)(this,t),Object(u.a)(this,Object(c.a)(t).call(this,e))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("li",{onClick:function(){e.props.setStatus(e.props.ele),e.props.Progress()},onDoubleClick:function(t){e.props.GoToTop()},id:"cc",className:this.props.ele.status?" paper-btn btn-block btn-success":"paper-btn btn-block"},this.props.ele.name,s.a.createElement("div",{style:{marginLeft:650,position:"absolute"}},this.props.ele.date)),s.a.createElement("button",{onClick:function(t){return e.props.up()},className:"btn-warning"},"Up"),s.a.createElement("button",{onClick:function(t){return e.props.down()},className:"btn-info"},"Down"),s.a.createElement("button",{onClick:function(t){return e.props.delete()},className:"btn-danger"},"X"))}}]),t}(s.a.Component),d=h;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);o.a.render(s.a.createElement(d,{item:[]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.aa1aa0c7.chunk.js.map