import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TableData from './components/TableData';
import AddUser from './components/AddUser';
import myDataUser from './components/MyData.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      myDataUser:[],
      searchText:"",
      editUserState:false,
      editUserObject:{}
    }
  }

  
  componentWillMount() {
    console.log(localStorage.getItem('userData'));
    
    if(localStorage.getItem('userData') === null){
      localStorage.setItem('userData',JSON.stringify(myDataUser));
    }
    else{
      var temp =JSON.parse(localStorage.getItem('userData'));
      this.setState({
        myDataUser:temp
      });
      
    }
  }
  

  getTextSearch=(data)=>{
    this.setState({
      searchText:data
    });
    
  }

  addNewUser = (newUser) => {
    
    var users=this.state.myDataUser;
    users.push(newUser);
    this.setState({
      myDataUser:users
    });
    localStorage.setItem('userData',JSON.stringify( users));
  }

  editUser = (user) => {
    this.setState({
      editUserObject:user
    });
  }

  changeEditUserState = () => {
    this.setState({
      editUserState: !this.state.editUserState
    });
  }

  getUserEditInfo = (user) => {
    this.state.myDataUser.forEach((value,key)=>{
      if(value.id === user.id){
        value.name=user.name;
        value.phone=user.phone;
        value.permisson=user.permisson;
      }
    });
    localStorage.setItem('userData',JSON.stringify( this.state.myDataUser));
  }

  deleteUser = (userId) => {
    var tempDataUser=this.state.myDataUser;
    tempDataUser=tempDataUser.filter(item => item.id !== userId);
    this.setState({
      myDataUser:tempDataUser
    });
    //push data into database
    localStorage.setItem('userData',JSON.stringify(tempDataUser));
  }

  render(){
    var resultArr=[];
    this.state.myDataUser.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        resultArr.push(item);
      }
    });

    
    return (
      <div>
        <Header></Header>
        <div className="mySearchForm">
          <div className="container">
              <div className="row">
                <Search getUserEditInfo={this.getUserEditInfo} editUserObject={this.state.editUserObject} changeEditUserState={this.changeEditUserState} editUserState={this.state.editUserState} passFuncGetText={this.getTextSearch}></Search>
                <div className="col-12">
                  <hr />
                </div>
                <TableData deleteUser={this.deleteUser} changeEditUserState={this.changeEditUserState} editUser={this.editUser} dataUserProps={resultArr}></TableData>
                <AddUser addNewUser={this.addNewUser}></AddUser>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
