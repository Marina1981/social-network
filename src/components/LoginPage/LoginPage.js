import React from 'react';
import './LoginPage.css';
import MainHeader    from "../MainHeader/MainHeader";
import LoginSection  from "../LoginSection/LoginSection";

const LoginPage = () =>{

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
    };


export default LoginPage;