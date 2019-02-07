export const types = {
    SET_USERS_LIST:        'NETWORK/USERS/SET_USERS_LIST'
};

//----
const initialState = {
    usersList: [{
        userId:      null,
        usersName:   '',
        usersPicURL:  '',
        usersStatus:  ''
    }]
};
//---- actionCreators--------//
export const actions = {
    setUsersList:      (users) => ({type: types.SET_USERS_LIST, users: users})
};

//----
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS_LIST:
            return {
                ...state,
                usersList:  action.users
            };

        default:
            return state;
    }
};



