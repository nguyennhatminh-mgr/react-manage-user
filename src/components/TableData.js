import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingUserData = ()=>this.props.dataUserProps.map((value,key)=>{
        return <TableDataRow deleteUser={this.props.deleteUser} changeEditUserState={this.props.changeEditUserState} editUser={this.props.editUser} name={value.name} key={key} stt={key} phone={value.phone} permisson={value.permisson} id={value.id}></TableDataRow>
    })
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.mappingUserData()
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;