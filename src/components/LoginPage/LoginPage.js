import React, { Component } from 'react';
import './LoginPage.css';
import MainHeader from "../MainHeader/MainHeader";
import LoginSection  from "../LoginSection/LoginSection";

class LoginPage extends Component {
    render() {
        return (
            <div className="c-login-page">
                <div className="c-login-page__wraper-header">
                    <MainHeader/>
                </div>
                <div className="c-login-page__wraper-dialogs">
                    <LoginSection/>
                </div>
            </div>
        );
    }
}

export default LoginPage;