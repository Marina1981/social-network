export const SET_LOGIN = 'NETWORK/LOGIN_PAGE/SET_LOGIN';

let initialState = {
    userId: '23',
    name: 'Maha',
    avatar: '',
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