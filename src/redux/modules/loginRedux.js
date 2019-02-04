
import  {loginingProcessResults, loginingProcessStatuses} from "../../dal/axios-instance";



export const types = {
    SET_CREATING_USER_LOGIN:             'NETWORK/LOGIN_PAGE/SET_CREATING_USER_LOGIN',
    SET_CREATING_USER_PASSWORD:          'NETWORK/LOGIN_PAGE/SET_CREATING_USER_PASSWORD',
    SET_REMEMBER_ME_FLAG:                'NETWORK/LOGIN_PAGE/SET_REMEMBER_ME_FLAG',
    SET_LOGINING_PROCESS_STATUS:         'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_STATUS',
    SET_LOGINING_PROCESS_ERROR:          'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_ERROR',
    SET_LOGINING_PROCESS_ERROR_MESSAGE:  'NETWORK/LOGIN_PAGE/SET_LOGINING_PROCESS_ERROR_MESSAGE',
    SET_CAPTCHA_URL:                     'NETWORK/LOGIN_PAGE/SET_CAPTCHA_URL',
    SET_CREATING_CAPTCHA:                'NETWORK/LOGIN_PAGE/SET_CREATING_CAPTCHA'
};


//---- actionCreators--------//
export const actions = {
    setCreatingUserLogin:     (creatingUserLogin)           => ({type: types.SET_CREATING_USER_LOGIN,    creatingUserLogin}),
    setCreatingUserPassword:  (creatingUserPassword)        => ({type: types.SET_CREATING_USER_PASSWORD, creatingUserPassword}),
    setRememberMeFlag:        (flag)                        => ({type: types.SET_REMEMBER_ME_FLAG, flag}),
    setLoginingProcessStatus: (loginingStatus)              => ({type: types.SET_LOGINING_PROCESS_STATUS, loginingStatus}),
    setLoginingProcessError:  (loginingError)               => ({type: types.SET_LOGINING_PROCESS_ERROR, loginingError}),
    setLoginingProcessErrorMessage: (loginingErrorMessage)  => ({type: types.SET_LOGINING_PROCESS_ERROR_MESSAGE, loginingErrorMessage}),
    setCaptchaUrl:            (captchaUrl)                  => ({type: types.SET_CAPTCHA_URL, captchaUrl}),
    setCreatingCaptcha:       (creatingCaptcha)             => ({type: types.SET_CREATING_CAPTCHA, creatingCaptcha})
};
//----

const initialState = {
    creatingUserLogin:     '17121981mar@gmail.com',
    creatingUserPassword:  '13314',
    isRememberMe:          true,
    loginingStatus:        loginingProcessStatuses.READY,
    loginingError:         loginingProcessResults.SUCCESS,
    loginingErrorMessage:  '',
    captchaUrl:            '',
    creatingCaptcha:       ''
} ;

//----

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.SET_CREATING_USER_LOGIN:
            return {
                ...state,
                creatingUserLogin: action.creatingUserLogin
            };

        case types.SET_CREATING_USER_PASSWORD:
            return {
                ...state,
                creatingUserPassword: action.creatingUserPassword
            };

        case types.SET_REMEMBER_ME_FLAG:
            return {
                ...state,
                isRememberMe: action.isRememberMe
            };

        case types.SET_LOGINING_PROCESS_STATUS:
            return{
                ...state,
                loginingStatus: action.loginingStatus
            };

        case types.SET_LOGINING_PROCESS_ERROR:
            return{
                ...state,
                loginingError: action.loginingError
            };

        case types.SET_LOGINING_PROCESS_ERROR_MESSAGE:
            return{
                ...state,
                loginingErrorMessage: action.loginingErrorMessage
            };

        case types.SET_CAPTCHA_URL:
            return{
                ...state,
                captchaUrl: action.captchaUrl
            };

        case types.SET_CREATING_CAPTCHA:
            return{
                ...state,
                creatingCaptcha: action.creatingCaptcha
            };

        default:
            return state;
    }
};




