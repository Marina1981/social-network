

export const types = {
    REMEMBER_USER:              'NETWORK/LOGIN_PAGE/REMEMBER_USER',
    USER_LOGIN_ONCHANGE:        'NETWORK/LOGIN_PAGE/USER_LOGIN_ONCHANGE',
    USER_PASSWORD_ONCHANGE:     'NETWORK/LOGIN_PAGE/USER_PASSWORD_ONCHANGE',
    SET_FLAG:                   'NETWORK/LOGIN_PAGE/SET_FLAG',
    CHANGE_STATUS:              'NETWORK/LOGIN_PAGE/CHANGE_STATUS',
    ADD_USER_DATA:              'NETWORK/LOGIN_PAGE/ADD_USER_DATA'
};

//---- actionCreators--------//
export const actions = {
    userLoginOnChange: (userLogin) => {
        return {
            type:      types.USER_LOGIN_ONCHANGE,
            userLogin: userLogin
        }

    },
    userPasswordOnChange: (userPassword) => {
        return {
            type:         types.USER_PASSWORD_ONCHANGE,
            userPassword: userPassword
        }
    },
    setFlag: () => {
        return {
            type: types.SET_FLAG,
            flag: false
        }
    },
    changeStatus: (status) => {
        return {
            type:   types.CHANGE_STATUS,
            loginStatus: status.loginStatus,
            preloadingStatus: status.preloadingStatus
        }
    }

};


//--- thunkCreator -------//
export const login= () => {
    return (dispatch) => {
        dispatch(actions.changeStatus({loginStatus: false, preloadingStatus: true}));
        setTimeout(() => {
            dispatch(actions.changeStatus({loginStatus: true, preloadingStatus: false}));
            dispatch(actions.setLogInToTrue());
        }, 3000);
       // dispatch(actions.changeStatus('error'))
    };
};
//---

const initialStateForLoginPage = {
    userLogin:          '',
    userPassword:       '',
    isRememberMe:       true,
    status:             {loginStatus: false, preloadingStatus: false} //'in progress'
};



export const reducer = (state = initialStateForLoginPage, action) => {
    switch (action.type) {
        case types.REMEMBER_USER:
            let newState = {
                ...state,
                status: {
                    ...state.status
                }
            };
            newState.isRememberMe = action.isRememberMe;
            return newState;

        case types.USER_LOGIN_ONCHANGE:
            newState = {
                ...state,
                status: {
                    ...state.status
                }
            };
            newState.userLogin = action.userLogin;
            return newState;

        case types.USER_PASSWORD_ONCHANGE:
            newState = {
                ...state,
                status: {
                    ...state.status
                }
            };
            newState.userPassword = action.userPassword;
            return newState;

        case types.SET_FLAG:
            newState = {
                ...state,
                status: {
                    ...state.status
                }
            };
            newState.isRememberMe = action.isRememberMe;
            return newState;

        case types.CHANGE_STATUS:
            newState = {
                ...state,
                status: {
                    ...state.status
                }
            };
            newState.status.loginStatus = action.loginStatus;
            newState.status.preloadingStatus = action.preloadingStatus;

            return newState;

        default:
            return state;
    }

};


//----