import React from 'react';
import './LoginSection.css';
import Redirect from "react-router/es/Redirect";


const LoginSection = (props) => {
    //---------------------------
    if (props.isLoggedIn) {
        return <Redirect to="/Profile"/>
    }
    //---------------------------
    return (
        <div className="c-login-section">
            <div className="c-login-section__index-login-form--positioned">
                <div className="input-form">
                        <span className="input-form__label">
                            Login
                        </span>
                    <input className="input-form__input" placeholder='login'
                           value={props.userLogin}
                           onChange={
                               (e) => {
                                   props.onChangeLogin(e.currentTarget.value)
                               }
                           }/>
                </div>
            </div>
            <div className="c-login-section__index-password-form--positioned">
                <div className="input-form">
                        <span className="input-form__label">
                            Password
                        </span>
                    <input className="input-form__input" placeholder='password' type="password"
                           value={props.userPassword}
                           onChange={
                               (e) => {
                                   props.onChangePassword(e.currentTarget.value)
                               }
                           }/>
                </div>
            </div>
            <div className="c-login-section__button-box">
                <input className="button-box__checkbox" type="checkbox" checkbox={props.isRememberMe}
                       onChange={
                           (e) => {
                               props.onChangeFlag(e.currentTarget.value)
                           }
                       }/>
                <span className="checkbox-label">
                        remember me
                </span>
                {/*------------------------------------------------*/}
                {props.status !== 'in progress' ?
                    <button className="button-box__button" onClick={
                        (e) => {
                            props.onLoginButtonClick(e.currentTarget.value)
                        }}
                            disabled={props.status === 'in progress'}>
                        Login
                    </button> :
                    <div className="container"  aria-busy="true"
                         aria-label="Loading" role="progressbar">
                        <div className="swing">
                            <div className="swing-l"/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div className="swing-r"/>
                        </div>
                        <div className="shadow">
                            <div className="shadow-l"/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div className="shadow-r"/>
                        </div>
                    </div>
                }

                {/*------------------------------------------------*/}
                <span>{props.isLoggedIn.toString()}</span>
            </div>

            {props.status === 'error' ?
                <div className="error-block">
                    Invalid login or password
                </div> : null}
            {/*------------------------------------------------*/}
        </div>
    );
};

export default LoginSection;