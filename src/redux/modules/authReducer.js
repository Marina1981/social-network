
export const types = {
    SET_LOGIN:          'NETWORK/LOGIN_PAGE/SET_LOGIN',
    CHANGE_LANGUAGE:    'NETWORK/SETTINGS_PAGE/CHANGE_LANGUAGE'
};


let initialState = {
    userId: '23',
    userName: 'Orange',
    userPic: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif',
    isLoggedIn: false,
    language: 'russ'
};


//-----
export const actions = {
    setLogInToTrue: () => ({type: types.SET_LOGIN}),
    changeLanguage:   (language) => {
        return {
            type:      types.CHANGE_LANGUAGE,
            userName:  language
        }
    },
};


//----
const authReducer = (state = initialState, action) => {
     let newState= {...state};
     switch (action.type) {
         case actions.SET_LOGIN:
             newState.isLoggedIn = true;
             return newState;
         case actions.CHANGE_LANGUAGE:
             newState.language = actions.language;

         default:
            return state;
    }
};

export default authReducer;