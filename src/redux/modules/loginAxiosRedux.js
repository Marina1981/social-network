import {actions as actionsAuth} from "./authRedux";
import {actions as actionsLogin} from "./loginRedux";
import {loginingProcessResults, loginingProcessStatuses} from "../../dal/axios-instance";
import axios from "../../dal/axios-instance";


//--- thunkCreator -------//
export const login = () => (dispatch, getState) => {
    let globalState = getState();
    let loginState = globalState.loginPage;

    actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.IN_PROGRESS);

    axios.post('auth/login', {
        email:      loginState.creatingUserLogin,
        password:   loginState.creatingUserPassword,
        rememberMe: loginState.isRememberMe,
        captcha:    loginState.creatingCaptcha
    }).then((result) => {

        if (result.data.resultCode === 0) {
            dispatch(actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actionsLogin.setLoginingProcessError(loginingProcessResults.SUCCESS));
            dispatch(actionsAuth.setUserAuthData(result.data.data.userId, result.data.data.login, result.data.data.email));
            dispatch(setServerSubmittedAuth());
        } else if (result.data.resultCode === 10){
            axios.get('security/get-captcha-url')
                .then(result => {
                        dispatch(actionsLogin.setCaptchaUrl(result.data.url));
                        dispatch(actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.READY));
                        dispatch(actionsLogin.setLoginingProcessError(loginingProcessResults.CAPTCHA_REQUIRED_ERROR));
                })
        } else {
            dispatch(actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actionsLogin.setLoginingProcessError(loginingProcessResults.COMMON_ERROR));
            dispatch(actionsLogin.setLoginingProcessErrorMessage(result.data.messages[0]));
        }
    })
};
//--- thunkCreator -------//
export const setServerSubmittedAuth = () => (dispatch) => {
    axios
        .get('auth/me')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(actionsAuth.setUserAuthData(result.data.data.userId, result.data.data.login, result.data.data.email));
            } else {
                dispatch(actionsAuth.clearUserAuthData())
            }
        })
};
//---
export const logOut = () => (dispatch) => {
    axios.post('auth/logout')
        .then(result => {
        if (result.data.resultCode === 0) {
            dispatch(actionsAuth.clearUserAuthData())
        }
    })
};
//---
// export const setServerCaptcha = () => (dispatch) => {
//     axios.get('security/get-captcha-url')
//         .then(result => {
//
//                 dispatch(actionsLogin.setCaptchaUrl(result.data.url))
//
//         })
// };