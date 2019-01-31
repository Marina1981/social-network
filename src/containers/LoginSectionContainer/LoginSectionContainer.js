import React from 'react';
import {connect} from "react-redux";
import {actions as loginActions, login} from "../../redux/modules/loginRedux";
import LoginSection from "../../components/LoginSection/LoginSection";


const LoginSectionContainer = (props) => {
    return <LoginSection {...props}/>
};

//----
const mapStateToProps = (state) => {
    return{
        isAuth:       state.auth.isAuth,
        status:       state.auth.status,
        message:      state.auth.message,
        captchaUrl:   state.auth.captchaUrl,

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
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(LoginSectionContainer);
//---
// export default LoginSectionContainer;
