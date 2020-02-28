import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText:""
        }
    }
    
    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchText:event.target.value
        });
        this.props.passFuncGetText(this.state.searchText);
    }

    isShowEditForm=() => {
       if (this.props.editUserState){
           return <EditUser getUserEditInfo={this.props.getUserEditInfo} editUserObject={this.props.editUserObject} changeEditUserState={this.props.changeEditUserState}></EditUser>
       } 
    }
    
    render() {
        return (
            <div className="col-12">
                {
                    this.isShowEditForm()
                }
                <div className="form-group">
                    <div className="btn-group">
                    <input onChange={(event)=>this.isChange(event)} style={{width: '500px'}} type="text" className="form-control"  aria-describedby="helpId" placeholder="Nhập từ khóa" />
                    
                    <button onClick={()=>this.props.passFuncGetText(this.state.searchText)} style={{width: '100px'}} className="btn btn-info"><i className="fa fa-search"></i>   Tìm</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;