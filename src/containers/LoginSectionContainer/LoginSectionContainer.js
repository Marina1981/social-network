import React from 'react';
import {connect} from "react-redux";
import {actions as loginActions, login} from "../../redux/modules/loginRedux";
import LoginSection from "../../components/LoginSection/LoginSection";

//----
const mapStateToProps = (state) => {

    return{
        isLoggedIn:   state.auth.loaded,
        status:       state.loginPage.status,
        message:      state.loginPage.message,
        captchaUrl:   state.loginPage.captchaUrl,

        userLogin:    state.loginPage.userLogin,
        userPassword: state.loginPage.userPassword,
        rememberMe:   state.loginPage.isRememberMe
    }
};
const mapDispatchToProps = (dispatch) => {

    return{
        onChangeLogin: (userLogin) => {
            dispatch(loginActions.setUserLogin(userLogin))
        },
        onChangePassword: (userPassword) => {
            dispatch(loginActions.setUserPassword(userPassword))
        },
        onChangeFlag: () => {
            dispatch(loginActions.setFlag())
        },
        onLoginButtonClick: () => {
            dispatch(login())
        }
    }
};

//----
const LoginSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginSection);
//---
export default LoginSectionContainer;
