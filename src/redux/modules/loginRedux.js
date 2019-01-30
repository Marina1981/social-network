
import axios, {statuses} from "../../dal/axios-instance";
import {actions as actionsAuth} from "./authRedux";


export const types = {
    REMEMBER_USER:              'NETWORK/LOGIN_PAGE/REMEMBER_USER',
    SET_USER_LOGIN:             'NETWORK/LOGIN_PAGE/SET_USER_LOGIN',
    SET_USER_PASSWORD:          'NETWORK/LOGIN_PAGE/SET_USER_PASSWORD',
    SET_FLAG:                   'NETWORK/LOGIN_PAGE/SET_FLAG',
    SET_STATUS:                 'NETWORK/LOGIN_PAGE/SET_STATUS',
    SET_MESSAGE:                'NETWORK/LOGIN_PAGE/SET_MESSAGE'
};


//---- actionCreators--------//
export const actions = {
    setUserLogin:     (userLogin)     => ({type: types.SET_USER_LOGIN, userLogin}),
    setUserPassword:  (userPassword)  => ({type: types.SET_USER_PASSWORD, userPassword}),
    setFlag:          (flag)          => ({type: types.SET_FLAG, flag}),
    setStatus:        (status)        => ({type: types.SET_STATUS, status}),
    setMessage:       (message)       => ({type: types.SET_MESSAGE, message})
};
//----

const initialState = {
    userLogin:          '17121981mar@gmail.com',
    userPassword:       '13314',
    isRememberMe:       true,
    status:             statuses.INIT,
    message:            '',
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
        case types.SET_MESSAGE:
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
        actions.setStatus(statuses.INPROGRESS);

        axios.post('auth/login', {
            email:      loginState.userLogin,
            password:   loginState.userPassword,
            rememberMe: loginState.isRememberMe
        }).then((result) => {
            if (result.data.resultCode === 0) {
               dispatch(actions.setStatus(statuses.SUCCESS));
               dispatch(actionsAuth.setLogInToTrue(true));
               alert('ok')
            } else {
                dispatch(actions.setStatus(statuses.ERROR));
                dispatch(actions.setMessage(result.data.messages[0]));
            }
        })
    };


