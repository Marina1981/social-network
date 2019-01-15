export const types = {
    USER_LOGIN_ONCHANGE:        'NETWORK/LOGIN_PAGE/USER_LOGIN_ONCHANGE',
    USER_PASSWORD_ONCHANGE:     'NETWORK/LOGIN_PAGE/USER_PASSWORD_ONCHANGE',
    ADD_SUBMIT_CLICK:           'NETWORK/LOGIN_PAGE/ADD_SUBMIT_CLICK',
    CHANGE_STATUS:              'NETWORK/LOGIN_PAGE/CHANGE_STATUS'
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
    addSubmitClick: () => {
        return {
            type: types.ADD_SUBMIT_CLICK,
        }
    },
    changeStatus: (status) => {
        return {
            type:   types.CHANGE_STATUS,
            status: status
        }
    }
};
//---

const initialStateForLoginPage = {
    userLogin: '',
    userPassword: '',
    isRememberMe: true,
    status: null //'in progress'
};



export const reducer = (state = initialStateForLoginPage, action) => {
    switch (action.type) {
        case types.USER_LOGIN_ONCHANGE:
            let newState = {...state};
            newState.userLogin = action.userLogin;
            return newState;

        case types.USER_PASSWORD_ONCHANGE:
            newState = {...state};
            newState.userPassword = action.userPassword;
            return newState;

        case types.ADD_SUBMIT_CLICK:
            newState = {...state};
            newState.isRememberMe = action.isRememberMe;
            return newState;
        case types.CHANGE_STATUS:
            newState = {...state};
            newState.status = action.status;
            return newState;

        default:
            return state;
    }

};


//----