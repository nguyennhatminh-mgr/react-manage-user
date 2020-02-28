import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state={
            id: this.props.editUserObject.id,
            name:this.props.editUserObject.name,
            phone:this.props.editUserObject.phone,
            permisson:this.props.editUserObject.permisson
        }
    }
    
    isChange = (event) => {
        const name=event.target.name;
        const value=event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButtonEditUser = () => {
        this.props.changeEditUserState();

        var userEdited={};
        userEdited.id=this.state.id;
        userEdited.name=this.state.name;
        userEdited.phone=this.state.phone;
        userEdited.permisson=this.state.permisson;

        this.props.getUserEditInfo(userEdited);
    }

    render() {
        return (
            <div className="card border-primary bg-warning mb-3 mt-2">
                <form>
                    <div className="card-header">Chỉnh sửa thông tin người dùng</div>
                    <div className="card-body text-primary">
                    <div className="form-group">
                        <input defaultValue={this.props.editUserObject.name} onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
                    </div>
                    <div className="form-group">
                        <input defaultValue={this.props.editUserObject.phone} onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" aria-describedby="helpId" placeholder="Điện thoại" />
                    </div>
                    <div className="form-group">
                        <select defaultValue={this.props.editUserObject.permisson} onChange={(event) => this.isChange(event)} name="permisson" className="custom-select">
                        <option value>Chọn Quyền mặc định</option>
                        <option value={1}>Admin</option>
                        <option value={2}>Moderator</option>
                        <option value={3}>Normal</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input onClick={this.saveButtonEditUser} type="button" className="btn btn-block btn-danger" value="Lưu"/>
                    </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;