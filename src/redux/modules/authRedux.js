

export const types = {
    SET_USER_AUTH_DATA:    'NETWORK/AUTH/SET_USER_AUTH_DATA',
    CLEAR_USER_AUTH_DATA:  'NETWORK/AUTH/CLEAR_USER_AUTH_DATA',
    SET_USER_AVATAR:       'NETWORK/AUTH/SET_USER_AVATAR'
};

//----
const initialState = {
    userAuthData: {
        userId:    null,
        userLogin: null,
        userEmail: null,
    },
    avatar: null

};
//---- actionCreators--------//
export const actions = {
    setUserAuthData:   (userId, userLogin, userEmail) => ({type: types.SET_USER_AUTH_DATA, userId, userLogin, userEmail}),
    clearUserAuthData: () => ({type: types.CLEAR_USER_AUTH_DATA}),
    setUserAvatar:     (url) => ({type: types.SET_USER_AVATAR, url})
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

        case types.SET_USER_AVATAR:
            return{
              ...state,
              avatar: action.url
            };

        default:
            return state;
    }
};


export default reducer;

//----Selectors------//
export const getAuthUsersId = (globalState) => globalState.auth.userAuthData.userId;






