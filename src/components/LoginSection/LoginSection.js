import React from 'react';
import './LoginSection.css';

import {connect} from "react-redux";
import {actions as action, login} from "../../redux/modules/loginRedux";


const LoginSection = (props) =>{

        return (
            <div className="c-login-section">
                <div className="c-login-section__index-login-form--positioned">
                    <div className="input-form">
                        <span className="input-form__label">
                            Login
                        </span>
                        <input className="input-form__input" placeholder= 'login'  value={props.userLogin}
                               onChange={
                                   (e) => {props.onChangeLogin(e.currentTarget.value)}
                               }/>
                    </div>
                </div>
                <div className="c-login-section__index-password-form--positioned">
                    <div className="input-form">
                        <span className="input-form__label">
                            Password
                        </span>
                        <input className="input-form__input" placeholder= 'password'  value={props.userPassword}
                               onChange={
                                   (e) => {props.onChangePassword(e.currentTarget.value)}
                               }/>
                    </div>
                </div>
                <div className="c-login-section__button-box">
                    <input className="button-box__checkbox" type="checkbox" checkbox={props.isRememberMe}
                           onChange={
                               (e) => {props.onChangeFlag(e.currentTarget.value)}
                           }/>
                    <span className="checkbox-label">
                        remember me
                    </span>
                    {props.status !== 'in progress' ?
                    <button className="button-box__button" onClick={
                        (e) => {
                            props.onLoginButtonClick(e.currentTarget.value)
                        }}
                            disabled={props.status === 'in progress'}>
                        Login
                    </button> : <span>vvvvbbbbb</span>}
                    <span>{props.isLoggedIn.toString()}</span>
                </div>
                {props.status === 'error' ?
                    <div className= "error-block">
                        Invalid login or password
                    </div> : null}
            </div>
        );
    };
//----
const mapStateToProps = (state) => {
    return{
        userLogin:    state.loginPage.userLogin,
        userPassword: state.loginPage.userPassword,
        checkbox:     state.loginPage.isRememberMe,
        isLoggedIn:   state.auth.isLoggedIn,
        status:       state.loginPage.status
    }

};

const mapDispatchToProps = (dispatch) => {
    return{
        onChangeLogin: (userLogin) => {
            dispatch(action.userLoginOnChange(userLogin))
        },
        onChangePassword: (userPassword) => {
            dispatch(action.userPasswordOnChange(userPassword))
        },
        onChangeFlag: () => {
            dispatch(action.setFlag())
        },
        onLoginButtonClick: () => {
            dispatch(login())
        }
    }
};

//----
const ConnectedLoginSection = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginSection);
//---
export default ConnectedLoginSection;
