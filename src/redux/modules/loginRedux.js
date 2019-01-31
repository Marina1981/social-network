
import axios, {statuses} from "../../dal/axios-instance";
import {actions as actionsAuth, me} from "./authRedux";


export const types = {
    SET_USER_LOGIN:             'NETWORK/LOGIN_PAGE/SET_USER_LOGIN',
    SET_USER_PASSWORD:          'NETWORK/LOGIN_PAGE/SET_USER_PASSWORD',
    SET_FLAG:                   'NETWORK/LOGIN_PAGE/SET_FLAG',
};


//---- actionCreators--------//
export const actions = {
    setUserLogin:     (userLogin)     => ({type: types.SET_USER_LOGIN, userLogin}),
    setUserPassword:  (userPassword)  => ({type: types.SET_USER_PASSWORD, userPassword}),
    setFlag:          (flag)          => ({type: types.SET_FLAG, flag})
};
//----

const initialState = {
    userLogin:          '17121981mar@gmail.com',
    userPassword:       '13314',
    isRememberMe:       true
};

//----

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_USER_LOGIN:
            let newState = {...state};
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

        default:
            return state;
    }
};

//--- thunkCreator -------//
export const login = () => (dispatch, getState) =>{
        let globalState = getState();
        let loginState  = globalState.loginPage;
        actionsAuth.setStatus(statuses.INPROGRESS);

        axios.post('auth/login', {
            email:      loginState.userLogin,
            password:   loginState.userPassword,
            rememberMe: loginState.isRememberMe
        }).then((result) => {
            if (result.data.resultCode === 0) {
               dispatch(actionsAuth.setStatus(statuses.SUCCESS));
               dispatch(actionsAuth.setLogInToTrue(true));
               dispatch(me());
            } else {
                dispatch(actionsAuth.setStatus(statuses.ERROR));
                dispatch(actionsAuth.setMessage(result.data.messages[0]));
            }
        })
    };


