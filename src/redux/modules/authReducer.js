export const SET_LOGIN = 'NETWORK/LOGIN_PAGE/SET_LOGIN';

let initialState = {
    userId: '23',
    userName: 'Orange',
    userPic: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif',
    isLoggedIn: false
};

export const setLogInToTrue = () => ({type: SET_LOGIN});

const authReducer = (state = initialState, action) => {
     let newState= {...state};
     switch (action.type) {
         case SET_LOGIN:
             newState.isLoggedIn = true;
             return newState;
         default:
            return state;
    }
};

export default authReducer;