import React, { Component } from 'react';
import './LoginPage.css';
import Header from "../HeaderComponent/Header";
import Login  from "../LoginComponent/Login";

class LoginPage extends Component {
    render() {
        return (
            <div className="c-login-page">
                <div className="c-login-page__wraper-header">
                    <Header/>
                </div>
                <div className="c-login-page__wraper-dialogs">
                    <Login/>
                </div>
            </div>
        );
    }
}

export default LoginPage;