import {
    loginingProcessResults,
    loginingProcessStatuses,
    userProfileUpdatingProcessProfile
} from "../../dal/axios-instance";
import axios from "../../dal/axios-instance";
import {actions as actionsAuth, getAuthUsersId} from "./authRedux";
import {actions as actionUsers} from "./usersRedux";
import {setReceivedServerUserProfile} from "./profileRedux";
import {setReceivedServerUserStatus} from "./userStatusRedux";


export const types = {
    SET_CREATING_USER_LOGIN: 'NETWORK/LOGIN_PAGE/SET_CREATING_USER_LOGIN',
    SET_CREATING_USER_PASSWORD: 'NETWORK/LOGIN_PAGE/SET_CREATING_USER_PASSWORD',
    SET_REMEMBER_ME_FLAG: 'NETWORK/LOGIN_PAGE/SET_REMEMBER_ME_FLAG',
    SET_LOGINING_PROCESS_STATUS: 'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_STATUS',
    SET_LOGINING_PROCESS_ERROR: 'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_ERROR',
    SET_LOGINING_PROCESS_ERROR_MESSAGE: 'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_ERROR_MESSAGE',
    SET_CAPTCHA_URL: 'NETWORK/LOGIN_PAGE/SET_CAPTCHA_URL',
    SET_CREATING_CAPTCHA: 'NETWORK/LOGIN_PAGE/SET_CREATING_CAPTCHA'
};


//---- actionCreators--------//
export const actions = {
    setCreatingUserLogin: (creatingUserLogin) => ({type: types.SET_CREATING_USER_LOGIN, creatingUserLogin}),
    setCreatingUserPassword: (creatingUserPassword) => ({type: types.SET_CREATING_USER_PASSWORD, creatingUserPassword}),
    setRememberMeFlag: (flag) => ({type: types.SET_REMEMBER_ME_FLAG, flag}),
    setLoginingProcessStatus: (loginingStatus) => ({type: types.SET_LOGINING_PROCESS_STATUS, loginingStatus}),
    setLoginingProcessError: (loginingError) => ({type: types.SET_LOGINING_PROCESS_ERROR, loginingError}),
    setLoginingProcessErrorMessage: (loginingErrorMessage) => ({type: types.SET_LOGINING_PROCESS_ERROR_MESSAGE, loginingErrorMessage}),
    setCaptchaUrl: (captchaUrl) => ({type: types.SET_CAPTCHA_URL, captchaUrl}),
    setCreatingCaptcha: (creatingCaptcha) => ({type: types.SET_CREATING_CAPTCHA, creatingCaptcha})
};
//----

const initialState = {
    creatingUserLogin:  '17121981mar@gmail.com',
    creatingUserPassword: '13314',
    isRememberMe: true,
    loginingStatus: loginingProcessStatuses.READY,
    loginingError: loginingProcessResults.SUCCESS,
    loginingErrorMessage: '',
    captchaUrl: '',
    creatingCaptcha: ''
};

//----

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_CREATING_USER_LOGIN:
            return {
                ...state,
                creatingUserLogin: action.creatingUserLogin
            };

        case types.SET_CREATING_USER_PASSWORD:
            return {
                ...state,
                creatingUserPassword: action.creatingUserPassword
            };

        case types.SET_REMEMBER_ME_FLAG:
            return {
                ...state,
                isRememberMe: action.isRememberMe
            };

        case types.SET_LOGINING_PROCESS_STATUS:
            return {
                ...state,
                loginingStatus: action.loginingStatus
            };

        case types.SET_LOGINING_PROCESS_ERROR:
            return {
                ...state,
                loginingError: action.loginingError
            };

        case types.SET_LOGINING_PROCESS_ERROR_MESSAGE:
            return {
                ...state,
                loginingErrorMessage: action.loginingErrorMessage
            };

        case types.SET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            };

        case types.SET_CREATING_CAPTCHA:
            return {
                ...state,
                creatingCaptcha: action.creatingCaptcha
            };

        default:
            return state;
    }
};

//--- thunkCreator -------//
export const login = () => (dispatch, getState) => {
    let globalState = getState();
    let loginState = globalState.loginPage;
    dispatch(actions.setLoginingProcessStatus(loginingProcessStatuses.IN_PROGRESS));

    axios.post('auth/login', {
        email: loginState.creatingUserLogin,
        password: loginState.creatingUserPassword,
        rememberMe: loginState.isRememberMe,
        captcha: loginState.creatingCaptcha
    }).then((result) => {

        if (result.data.resultCode === 0) {
            dispatch(actions.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actions.setLoginingProcessError(loginingProcessResults.SUCCESS));
            dispatch(actionsAuth.setUserAuthData(result.data.data.userId, result.data.data.login, result.data.data.email));
            dispatch(setServerSubmittedAuth());

            dispatch(setReceivedServerUserProfile());
            dispatch(setReceivedServerUserStatus())

        } else if (result.data.resultCode === 10) {
            axios.get('security/get-captcha-url')
                .then(result => {
                    dispatch(actions.setCaptchaUrl(result.data.url));
                    dispatch(actions.setLoginingProcessStatus(loginingProcessStatuses.READY));
                    dispatch(actions.setLoginingProcessError(loginingProcessResults.CAPTCHA_REQUIRED_ERROR));
                })
        } else {
            dispatch(actions.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actions.setLoginingProcessError(loginingProcessResults.COMMON_ERROR));
            dispatch(actions.setLoginingProcessErrorMessage(result.data.messages[0]));
        }
    });

};
//--- thunkCreator -------//
export const setServerSubmittedAuth = () => (dispatch) => {
    axios.get('auth/me')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(actionsAuth.setUserAuthData(result.data.data.id, result.data.data.login, result.data.data.email));
            } else {
                dispatch(actionsAuth.clearUserAuthData())
            }
        });
};
//---
export const logOut = () => (dispatch) => {
    axios.post('auth/logout')
        .then(result => {
            if (result.data.resultCode === 0) {
                dispatch(actionsAuth.clearUserAuthData());
                dispatch(actionUsers.clearUsersList())
            }
        })
};





