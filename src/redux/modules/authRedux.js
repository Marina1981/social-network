import {statuses} from "../../dal/axios-instance";
import axios from "../../dal/axios-instance";

export const types = {
    SET_IS_AUTH:   'NETWORK/AUTH/SET_IS_AUTH',
    SET_STATUS:    'NETWORK/AUTH/SET_STATUS',
    SET_MESSAGE:   'NETWORK/AUTH/SET_MESSAGE',
    SET_USER_INFO: 'NETWORK/AUTH/SET_USER_INFO'
};

//----
const initialState = {
    userInfo: {
        userId: null,
        userName: null,
        userPicURl: '' //'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif'
    },
    status: statuses.INIT,
    isAuth: false,
    message: '',
    captchaUrl: ''
};
//---- actionCreators--------//
export const actions = {
    setLogInToTrue: (value) => ({type: types.SET_IS_AUTH, value}),
    setStatus:      (status) => ({type: types.SET_STATUS, status}),
    setMessage:     (message) => ({type: types.SET_MESSAGE, message}),
    setUserInfo:    (userId, userName) => ({type: types.SET_USER_INFO, userId, userName})
};

//----
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.value
            };

        case types.SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        case types.SET_MESSAGE:
            return {
                ...state,
                message: action.message
            };

        case types.SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId:   action.userId,
                    userName: action.userName
                }
            };

        default:
            return state;
    }
};
//--- thunkCreator -------//
export const me = () => (dispatch) => {

    axios.get('auth/me').then(result => {
        if (result.data.resultCode === 0) {
            dispatch(actions.setLogInToTrue(true))
        }
        dispatch(actions.setUserInfo(result.data.data.userId, result.data.data.login));
    })
};


export default reducer;








