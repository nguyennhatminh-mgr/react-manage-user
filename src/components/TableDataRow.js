import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermisson = ()=>{
        if(parseInt( this.props.permisson)===1){
            return "Admin";
        }
        else if ( parseInt(this.props.permisson)===2){
            return "Moderator";
        }
        else{
            return "Normal";
        }
    }

    funcForEditButtonClick= (user) => {
        this.props.editUser(user);
        this.props.changeEditUserState();
    }


    render() {
        var user={};
        user.id=this.props.id;
        user.name=this.props.name;
        user.phone=this.props.phone;
        user.permisson=this.props.permisson;
        return (
            <tr>
                <td >{this.props.stt+1}</td>
                <td>{this.props.name}</td>
                <td>{this.props.phone}</td>
                <td>{this.showPermisson()}</td>
                <td>
                <div className="btn-group">
                    <button onClick={()=>this.funcForEditButtonClick(user)} className="btn btn-warning sua"><i className="fa fa-edit" />Sửa</button>
                    <button onClick={()=>this.props.deleteUser(user.id)} className="btn btn-danger xoa"><i className="fa fa-trash" />Xoá</button>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;