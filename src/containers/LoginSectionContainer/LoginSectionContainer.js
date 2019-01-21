import React from 'react';
import {connect} from "react-redux";
import {actions as action, login} from "../../redux/modules/loginRedux";
import LoginSection from "../../components/LoginSection/LoginSection";

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
const LoginSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginSection);
//---
export default LoginSectionContainer;
