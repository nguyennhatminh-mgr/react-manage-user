(this.webpackJsonpmanage_user=this.webpackJsonpmanage_user||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Nguy\u1ec5n Nh\u1eadt Minh","phone":"0338616558","permisson":1},{"id":2,"name":"L\u01b0\u01a1ng Xu\xe2n Tr\u01b0\u1eddng","phone":"0338616448","permisson":2},{"id":3,"name":"Nguy\u1ec5n Quang H\u1ea3i","phone":"0338616519","permisson":3},{"id":4,"name":"Nguy\u1ec5n Tr\u1ecdng Ho\xe0ng","phone":"0338616888","permisson":1},{"id":5,"name":"B\xf9i Ti\u1ebfn D\u0169ng","phone":"0338616555","permisson":1},{"id":6,"name":"\u0110\u1eb7ng V\u0103n L\xe2m","phone":"0338616523","permisson":1}]')},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),o=a.n(s),i=(a(15),a(1)),c=a(2),l=a(4),m=a(3),u=a(5),d=(a(16),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("h1",{className:"display-4"},"Qu\u1ea3n l\xfd th\xe0nh vi\xean b\u1eb1ng React"),r.a.createElement("p",{className:"lead"},"v\u1edbi d\u1eef li\u1ec7u json"),r.a.createElement("hr",{className:"my-2"})))}}]),t}(n.Component)),p=a(6),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.saveButtonEditUser=function(){a.props.changeEditUserState();var e={};e.id=a.state.id,e.name=a.state.name,e.phone=a.state.phone,e.permisson=a.state.permisson,a.props.getUserEditInfo(e)},a.state={id:a.props.editUserObject.id,name:a.props.editUserObject.name,phone:a.props.editUserObject.phone,permisson:a.props.editUserObject.permisson},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card border-primary bg-warning mb-3 mt-2"},r.a.createElement("form",null,r.a.createElement("div",{className:"card-header"},"Ch\u1ec9nh s\u1eeda th\xf4ng tin ng\u01b0\u1eddi d\xf9ng"),r.a.createElement("div",{className:"card-body text-primary"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:this.props.editUserObject.name,onChange:function(t){return e.isChange(t)},name:"name",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"T\xean User"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{defaultValue:this.props.editUserObject.phone,onChange:function(t){return e.isChange(t)},name:"phone",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n tho\u1ea1i"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{defaultValue:this.props.editUserObject.permisson,onChange:function(t){return e.isChange(t)},name:"permisson",className:"custom-select"},r.a.createElement("option",{value:!0},"Ch\u1ecdn Quy\u1ec1n m\u1eb7c \u0111\u1ecbnh"),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Moderator"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onClick:this.saveButtonEditUser,type:"button",className:"btn btn-block btn-danger",value:"L\u01b0u"})))))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).isChange=function(e){console.log(e.target.value),a.setState({searchText:e.target.value}),a.props.passFuncGetText(a.state.searchText)},a.isShowEditForm=function(){if(a.props.editUserState)return r.a.createElement(h,{getUserEditInfo:a.props.getUserEditInfo,editUserObject:a.props.editUserObject,changeEditUserState:a.props.changeEditUserState})},a.state={searchText:""},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"col-12"},this.isShowEditForm(),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"btn-group"},r.a.createElement("input",{onChange:function(t){return e.isChange(t)},style:{width:"500px"},type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a"}),r.a.createElement("button",{onClick:function(){return e.props.passFuncGetText(e.state.searchText)},style:{width:"100px"},className:"btn btn-info"},r.a.createElement("i",{className:"fa fa-search"}),"   T\xecm"))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).showPermisson=function(){return 1===parseInt(a.props.permisson)?"Admin":2===parseInt(a.props.permisson)?"Moderator":"Normal"},a.funcForEditButtonClick=function(e){a.props.editUser(e),a.props.changeEditUserState()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={};return t.id=this.props.id,t.name=this.props.name,t.phone=this.props.phone,t.permisson=this.props.permisson,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.stt+1),r.a.createElement("td",null,this.props.name),r.a.createElement("td",null,this.props.phone),r.a.createElement("td",null,this.showPermisson()),r.a.createElement("td",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{onClick:function(){return e.funcForEditButtonClick(t)},className:"btn btn-warning sua"},r.a.createElement("i",{className:"fa fa-edit"}),"S\u1eeda"),r.a.createElement("button",{onClick:function(){return e.props.deleteUser(t.id)},className:"btn btn-danger xoa"},r.a.createElement("i",{className:"fa fa-trash"}),"Xo\xe1"))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).mappingUserData=function(){return a.props.dataUserProps.map((function(e,t){return r.a.createElement(b,{deleteUser:a.props.deleteUser,changeEditUserState:a.props.changeEditUserState,editUser:a.props.editUser,name:e.name,key:t,stt:t,phone:e.phone,permisson:e.permisson,id:e.id})}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-9"},r.a.createElement("table",{className:"table table-striped table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"STT"),r.a.createElement("th",null,"T\xean"),r.a.createElement("th",null,"\u0110i\u1ec7n tho\u1ea1i"),r.a.createElement("th",null,"Quy\u1ec1n"),r.a.createElement("th",null,"H\xe0nh \u0111\u1ed9ng"))),r.a.createElement("tbody",null,this.mappingUserData())))}}]),t}(n.Component),g=a(19),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).changeStateAddUser=function(){a.setState({addUserState:!a.state.addUserState})},a.showHideAddUser=function(){return a.state.addUserState?r.a.createElement("div",{className:"btn btn-block btn-outline-info",onClick:function(){return a.changeStateAddUser()}},"Th\xeam m\u1edbi"):r.a.createElement("div",{className:"btn btn-block btn-outline-secondary",onClick:function(){return a.changeStateAddUser()}},"\u0110\xf3ng l\u1ea1i")},a.isChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(p.a)({},t,n))},a.addNewUser=function(){var e={};e.id=Object(g.a)(),e.name=a.state.name,e.phone=a.state.phone,e.permisson=a.state.permisson,a.props.addNewUser(e)},a.showFormAddUser=function(){if(!a.state.addUserState)return r.a.createElement("div",{className:"card border-primary mb-3 mt-2"},r.a.createElement("form",null,r.a.createElement("div",{className:"card-header"},"Th\xeam user m\u1edbi"),r.a.createElement("div",{className:"card-body text-primary"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){return a.isChange(e)},name:"name",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"T\xean User"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:function(e){return a.isChange(e)},name:"phone",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n tho\u1ea1i"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{onChange:function(e){return a.isChange(e)},name:"permisson",className:"custom-select"},r.a.createElement("option",{value:!0},"Ch\u1ecdn Quy\u1ec1n m\u1eb7c \u0111\u1ecbnh"),r.a.createElement("option",{value:1},"Admin"),r.a.createElement("option",{value:2},"Moderator"),r.a.createElement("option",{value:3},"Normal"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"reset",onClick:a.addNewUser,className:"btn btn-block btn-primary",value:"Th\xeam m\u1edbi"})))))},a.state={addUserState:!0},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-3"},this.showHideAddUser(),this.showFormAddUser())}}]),t}(n.Component),v=a(9),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getTextSearch=function(e){a.setState({searchText:e})},a.addNewUser=function(e){var t=a.state.myDataUser;t.push(e),a.setState({myDataUser:t}),localStorage.setItem("userData",JSON.stringify(t))},a.editUser=function(e){a.setState({editUserObject:e})},a.changeEditUserState=function(){a.setState({editUserState:!a.state.editUserState})},a.getUserEditInfo=function(e){a.state.myDataUser.forEach((function(t,a){t.id===e.id&&(t.name=e.name,t.phone=e.phone,t.permisson=e.permisson)})),localStorage.setItem("userData",JSON.stringify(a.state.myDataUser))},a.deleteUser=function(e){var t=a.state.myDataUser;t=t.filter((function(t){return t.id!==e})),a.setState({myDataUser:t}),localStorage.setItem("userData",JSON.stringify(t))},a.state={myDataUser:[],searchText:"",editUserState:!1,editUserObject:{}},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){if(console.log(localStorage.getItem("userData")),null===localStorage.getItem("userData"))localStorage.setItem("userData",JSON.stringify(v));else{var e=JSON.parse(localStorage.getItem("userData"));this.setState({myDataUser:e})}}},{key:"render",value:function(){var e=this,t=[];return this.state.myDataUser.forEach((function(a){-1!==a.name.indexOf(e.state.searchText)&&t.push(a)})),r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement("div",{className:"mySearchForm"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement(f,{getUserEditInfo:this.getUserEditInfo,editUserObject:this.state.editUserObject,changeEditUserState:this.changeEditUserState,editUserState:this.state.editUserState,passFuncGetText:this.getTextSearch}),r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null)),r.a.createElement(E,{deleteUser:this.deleteUser,changeEditUserState:this.changeEditUserState,editUser:this.editUser,dataUserProps:t}),r.a.createElement(U,{addNewUser:this.addNewUser})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.deb40a34.chunk.js.map