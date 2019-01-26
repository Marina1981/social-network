
export const types = {
    SET_LOGIN:          'NETWORK/LOGIN_PAGE/SET_LOGIN',
    LOGOUT:             'NETWORK/LOGIN_PAGE/LOGOUT'
};


let initialState = {
    userId: '23',
    userName: 'Orange',
    userPic: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif',
    isLoggedIn: false,
};


//-----

export const actions = {
    setLogInToTrue: () => ({type: types.SET_LOGIN}),
    logout: () => ({type: types.LOGOUT}),
};


//----
const authReducer = (state = initialState, action) => {
     let newState= {...state};
     switch (action.type) {
         case types.SET_LOGIN:
              newState.isLoggedIn = true;
              return newState;

         case types.LOGOUT:
             newState.isLoggedIn = false;
             newState.userId     = null;
             newState.userName   = null;
             newState.userPic    = null;
             return newState;

         default:
            return state;
    }
};

export default authReducer;