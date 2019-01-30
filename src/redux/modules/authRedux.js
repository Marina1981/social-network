
export const types = {
    LOAD:             'NETWORK/AUTH/LOAD',
    LOAD_SUCCESS:     'NETWORK/AUTH/LOAD_SUCCESS',
    LOAD_FAIL:        'NETWORK/AUTH/LOAD_FAIL',
    LOGIN:            'NETWORK/AUTH/LOGIN',
    LOGIN_SUCCESS:    'NETWORK/AUTH/LOGIN_SUCCESS',
    LOGIN_FAIL:       'NETWORK/AUTH/LOAD_FAIL',
    LOGOUT:           'NETWORK/AUTH/LOGOUT',
    LOGOUT_SUCCESS:   'NETWORK/AUTH/LOGOUT_SUCCESS',
    LOGOUT_FAIL:      'NETWORK/AUTH/LOGOUT_FAIL'
};

//----
const initialState = {
    // userId: '23',
    // userName: 'Orange',
    // userPic: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif',
    userInfo: {
       userId: null,
       userName: null,
       userPicURl: ''
    },
    loaded: false
};
//----
export const actions = {
    setLogInToTrue: () => ({type: types.LOAD_SUCCESS})
};

//----
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD:
            return {
                ...state,
                loading: true
            };
        case types.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded:  true,
                user:    action.result
            };
        case types.LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded:  false,
                error:   action.error
            };
        case types.LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user:      action.result
            };
        case types.LOGIN_FAIL:
            return {
                ...state,
                loggingIn:  false,
                user:       null,
                loginError: action.error
            };
        case types.LOGOUT:
            return {
                ...state,
                loggingOut: true
            };
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                user:       null
            };
        case types.LOGOUT_FAIL:
            return {
                ...state,
                loggingOut:  false,
                logoutError: action.error
            };
        default:
            return state;
    }
};
//----

export default reducer;








// export const types = {
//     SET_LOGIN:          'NETWORK/LOGIN_PAGE/SET_LOGIN',
//     LOGOUT:             'NETWORK/LOGIN_PAGE/LOGOUT'
// };


// let initialState = {
//     userId: '23',
//     userName: 'Orange',
//     userPic: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif',
//     isLoggedIn: false,
// };


//-----

// export const actions = {
//     setLogInToTrue: () => ({type: types.SET_LOGIN}),
//     logout: () => ({type: types.LOGOUT}),
// };


//----
// const authRedux = (state = initialState, action) => {
//      let newState= {...state};
//      switch (action.type) {
//          case types.SET_LOGIN:
//               newState.isLoggedIn = true;
//               return newState;
//
//          case types.LOGOUT:
//              newState.isLoggedIn = false;
//              newState.userId     = null;
//              newState.userName   = null;
//              newState.userPic    = null;
//              return newState;
//
//          default:
//             return state;
//     }
// };

