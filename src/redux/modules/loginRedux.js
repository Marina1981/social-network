import {actions as authActions} from "./authRedux";
import axios from "../../dal/axios-instance";


export const types = {
    REMEMBER_USER:              'NETWORK/LOGIN_PAGE/REMEMBER_USER',
    SET_USER_LOGIN:             'NETWORK/LOGIN_PAGE/SET_USER_LOGIN',
    SET_USER_PASSWORD:          'NETWORK/LOGIN_PAGE/SET_USER_PASSWORD',
    SET_FLAG:                   'NETWORK/LOGIN_PAGE/SET_FLAG',
    SET_STATUS:                 'NETWORK/LOGIN_PAGE/SET_STATUS',
    SET_MESSAGES:               'NETWORK/LOGIN_PAGE/SET_MESSAGES'
};

const statuses = {
    INIT:              'INIT',       //start
    ERROR:             'ERROR',
    INPROGRESS:        'INPROGRESS', //идет запрос
    CAPTCHA_REQUIRED:  'CAPTCHA_REQUIRED',
    SUCCESS:           'SUCCESS'
};
//---- actionCreators--------//
export const actions = {
    setUserLogin:     (userLogin)     => ({type: types.SET_USER_LOGIN, userLogin}),
    setUserPassword:  (userPassword)  => ({type: types.SET_USER_PASSWORD, userPassword}),
    setFlag:          (flag)          => ({type: types.SET_FLAG, flag}),
    setStatus:        (status)        => ({type: types.SET_STATUS, status}),
    setMessage:       (message)       => ({type: types.SET_MESSAGES, message})
};
//----

const initialState = {
    userLogin:          'sdfsdfdfdfsf@sdfsdf.sdf',
    userPassword:       'sdfsdf',
    isRememberMe:       true,
    status:             statuses.INIT,
    captchaUrl:         ''
};

//----

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case types.REMEMBER_USER:
            let newState = {...state};
            newState.isRememberMe = action.isRememberMe;
            return newState;

        case types.SET_USER_LOGIN:
            newState = {...state};
            newState.userLogin = action.userLogin;
            return newState;

        case types.SET_USER_PASSWORD:
            newState = {...state};
            newState.userPassword = action.userPassword;
            return newState;

        case types.SET_FLAG:
            newState = {...state};
            newState.isRememberMe = action.isRememberMe;
            return newState;



        case types.SET_STATUS:
            newState = {...state};
            newState.status = action.status;
            return newState;
        case types.SET_MESSAGES:
            newState = {...state};
            newState.message = action.message;
            return newState;

        default:
            return state;
    }
};

//--- thunkCreator -------//
export const login = () => (dispatch, getState) =>{
        let fullState = getState();
        let loginState = fullState.loginPage;

        axios.post('auth/login', {
            email:      loginState.userLogin,
            password:   loginState.userPassword,
            rememberMe: loginState.rememberMe
        }).then((result) => {
            if (result.data.resultCode === 0) {
               dispatch(actions.setStatus(statuses.SUCCESS));
               alert('ok')
            } else {
                dispatch(actions.setStatus(statuses.ERROR));
                alert(result.data.messages[0]);
                dispatch(actions.setMessage(result.data.messages[0]));
            }
        })
    };


