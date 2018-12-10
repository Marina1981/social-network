import React, { Component } from 'react';
import './LoginPage.css';
import Header from "../HeaderComponent/Header";
import Login  from "../LoginComponent/Login";

class LoginPage extends Component {
    render() {
        return (
            <div className="c-loginPage">
                <div className="wraperHeader">
                    <Header/>
                </div>
                <div className="wraperDialogs">
                    <Login/>
                </div>
            </div>
        );
    }
}

export default LoginPage;