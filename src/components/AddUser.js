import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            addUserState: true
        }
    }

    changeStateAddUser=()=>{
        this.setState({
            addUserState: !this.state.addUserState
        });
    }

    showHideAddUser=()=>{
        if(this.state.addUserState){
            return <div className="btn btn-block btn-outline-info" onClick={() => this.changeStateAddUser()}>Thêm mới</div>;
        }
        else{
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeStateAddUser()}>Đóng lại</div>;
        }
    }

    isChange=(event) => {
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }

    addNewUser=() => {
        var newUser={};
        newUser.id=uuidv1();
        newUser.name=this.state.name;
        newUser.phone=this.state.phone;
        newUser.permisson=this.state.permisson;
        this.props.addNewUser(newUser);
    }

    showFormAddUser = ()=>{
        if(!this.state.addUserState){
            return (
                <div className="card border-primary mb-3 mt-2">
                    <form>
                        <div className="card-header">Thêm user mới</div>
                        <div className="card-body text-primary">
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChange(event)} name="permisson" className="custom-select">
                            <option value>Chọn Quyền mặc định</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Moderator</option>
                            <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" onClick={this.addNewUser} className="btn btn-block btn-primary" value="Thêm mới"/>
                        </div>
                        </div>
                    </form>
                </div>
            );
        }
    }
    
    render() {
        // console.log(this.state);
        
        return (
            <div className="col-3">
                
               {this.showHideAddUser()}
                {this.showFormAddUser()}
                
            </div>

        );
    }
}

export default AddUser;