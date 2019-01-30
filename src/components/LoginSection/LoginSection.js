import React from 'react';
import './LoginSection.css';
import Redirect from "react-router/es/Redirect";


const LoginSection = (props) => {
    //---------------------------
    if (props.isLoggedIn) {
        return <Redirect to="/profile"/>
    }
    //---------------------------
    let errorloginOrPassword = props.status === 'ERROR' ?
        <div className="error-block">
            Invalid login or password
        </div> : null;
    //---------------------------
    //---------------------------
    return (
        <>
            {props.status !== 'in progress' ?
                <div className="c-login-section-wrapper">
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
                            <input className="button-box__checkbox" type="checkbox"
                                   onChange={
                                       (e) => {
                                           props.onChangeFlag(e.currentTarget.checked)
                                       }
                                   }/>
                            <span className="checkbox-label">
                            remember me
                        </span>
                            {/*------------------------------------------------*/}
                            <button className="button-box__button" onClick={
                                (e) => {
                                    props.onLoginButtonClick();
                                }}
                                    disabled={props.status === 'INPROGRESS'}>
                                Login
                            </button>
                            {/*------------------------------------------------*/}
                            {/*<span>{props.isLoggedIn.toString()}</span>*/}
                        </div>

                        {errorloginOrPassword}
                        {/*------------------------------------------------*/}
                        <button className="c-login-section__registration-button">
                            registration
                        </button>
                    </div>
                </div> :
                <div className="container" aria-busy="true"
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
                </div>}
        </>
    );
};

export default LoginSection;




