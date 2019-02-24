

export const types = {
    SET_USER_AUTH_DATA:    'NETWORK/AUTH/SET_USER_AUTH_DATA',
    CLEAR_USER_AUTH_DATA:  'NETWORK/AUTH/CLEAR_USER_AUTH_DATA'
};

//----
const initialState = {
    userAuthData: {
        userId:    null,
        userLogin: null,
        userEmail: null
    }
};
//---- actionCreators--------//
export const actions = {
    setUserAuthData:   (userId, userLogin, userEmail) => ({type: types.SET_USER_AUTH_DATA, userId, userLogin, userEmail}),
    clearUserAuthData: () => ({type: types.CLEAR_USER_AUTH_DATA})
};

//----
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER_AUTH_DATA:
            return {
                ...state,
                userAuthData: {
                    userId:    action.userId,
                    userLogin: action.userLogin,
                    userEmail: action.userEmail}
            };

        case types.CLEAR_USER_AUTH_DATA:
            return {
               ...state,
                userAuthData: {
                    userId:    null,
                    userLogin: null,
                    userEmail: null
                }
            };

        default:
            return state;
    }
};


export default reducer;

//----Selectors------//
export const getAuthUsersId = (globalState) => globalState.auth.userAuthData.userId;






