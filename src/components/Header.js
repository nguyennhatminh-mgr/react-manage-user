import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4">Quản lý thành viên bằng React</h1>
                    <p className="lead">với dữ liệu json</p>
                    <hr className="my-2" />
                </div>
            </div>
        );
    }
}

export default Header;