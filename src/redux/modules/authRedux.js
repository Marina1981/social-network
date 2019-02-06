import {loginingProcessStatuses} from "../../dal/axios-instance";
import axios from "../../dal/axios-instance";

export const types = {
    SET_USER_AUTH_DATA:    'NETWORK/AUTH/SET_USER_AUTH_DATA',
    CLEAR_USER_AUTH_DATA:  'NETWORK/AUTH/CLEAR_USER_AUTH_DATA',
    SET_USERS_LIST:        'NETWORK/AUTH/SET_USERS_LIST'
};

//----
const initialState = {
    userAuthData: {
        userId:    null,
        userLogin: null,
        userEmail: null
    },
    usersList: [{
        userId:      null,
        usersName:   '',
        usersPicURL:  '',
        usersStatus:  ''
    }]
};
//---- actionCreators--------//
export const actions = {
    setUserAuthData:   (userId, userLogin, userEmail) => ({type: types.SET_USER_AUTH_DATA, userId, userLogin, userEmail}),
    clearUserAuthData: () => ({type: types.CLEAR_USER_AUTH_DATA}),
    setUsersList:      (users) => ({type: types.SET_USERS_LIST, users: users})
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
        case types.SET_USERS_LIST:
            debugger
            return {
                ...state,
                usersList:  action.users
            };

        default:
            return state;
    }
};


export default reducer;








