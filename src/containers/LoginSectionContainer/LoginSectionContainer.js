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
        isAuth:                state.auth.userAuthData.userId !== null, // true / false
        loginingStatus:        state.loginPage.loginingStatus,
        loginingError:         state.loginPage.loginingError,
        loginingErrorMessage:  state.loginPage.loginingErrorMessage,
        captchaUrl:            state.loginPage.captchaUrl,
        creatingCaptcha:       state.loginPage.creatingCaptcha,
        creatingUserLogin:     state.loginPage.creatingUserLogin,
        creatingUserPassword:  state.loginPage.creatingUserPassword,
        rememberMe:            state.loginPage.isRememberMe
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        onChangeCreatingLogin: (userLogin) => {
            dispatch(loginActions.setCreatingUserLogin(userLogin))
        },
        onChangeCreatingPassword: (userPassword) => {
            dispatch(loginActions.setCreatingUserPassword(userPassword))
        },
        onChangeRememberMeFlag: () => {
            dispatch(loginActions.setRememberMeFlag())
        },
        onLoginButtonClick: () => {
            dispatch(login())
        },
        onChangeCreatingCaptcha: (creatingCaptcha) => {
            dispatch(loginActions.setCreatingCaptcha(creatingCaptcha))
        }
    }
};

//----
export  default connect(mapStateToProps, mapDispatchToProps)(LoginSectionContainer);
//---

