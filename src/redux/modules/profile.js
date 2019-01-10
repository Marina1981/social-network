import store from "./../createStore"
import {superReducer as state} from "./reducer";





export const SET_USERPIC_URL =                 'NETWORK/PROFILE_PAGE/SET_USERPIC_URL';
export const SET_USER_NAME =                   'NETWORK/PROFILE_PAGE/SET_USER_NAME';
export const SET_USER_BIRTH_DATE =             'NETWORK/PROFILE_PAGE/SET_USER_BIRTH_DATE';
export const SET_USER_CITY =                   'NETWORK/PROFILE_PAGE/SET_USER_CITY';
export const SET_USER_EDUCATION =              'NETWORK/PROFILE_PAGE/SET_USER_EDUCATION';
export const SET_USER_WEBSITE =                'NETWORK/PROFILE_PAGE/SET_USER_WEBSITE';
export const SET_ADD_POST =                    'NETWORK/PROFILE_PAGE/SET_ADD_POST';
export const SET_CREATING_POST =               'NETORK/PROFILE_PAGE/SET_CREATING_POST';
export const INCREMENT_POST_LIKE_COUNT =       'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT';




//----
export const initialStateForProfilePage = {
    model:{
        userInfo:{
            userID: '',
                userPicURL:'',
                userName:'',
                userBirthDate:'',
                userCity: '',
                userEducation: '',
                userWebSite: ''
        },
        wall:{
            messagesList:[]
        }
    },
    view:{
        wall: {
            creatingMessage: ''
        }
    }
};
//----



export const profilePageReducer = (state = initialStateForProfilePage, action) => {
    switch (action.type) {
        case SET_USERPIC_URL:
            let newState = {...state};
            newState.model.userInfo.userPicURL = action.userPicURL;
            return newState;
        case SET_USER_NAME:
            newState = {...state};
            newState.model.userInfo.userName = action.userName;
            return newState;
        case SET_USER_BIRTH_DATE:
            newState = {...state};
            newState.model.userInfo.userBirthDate = action.userBirthDate;
            return newState;
        case SET_USER_CITY:
            newState = {...state};
            newState.model.userInfo.userCity = action.userCity;
            return newState;
        case SET_USER_EDUCATION:
            newState = {...state};
            newState.model.userInfo.userEducation = action.userEducation;
            return newState;
        case SET_USER_WEBSITE:
            newState = {...state};
            newState.model.userInfo.userWebSite = action.userWebSite;
            return newState;
        case SET_ADD_POST:
            newState = {...state};
            newState.model.wall.messagesList=[...newState.model.wall.messagesList,
                {text: action.message, likeCount: 0, messageId: action.messageId}];
            return newState;
        case SET_CREATING_POST:
            newState = {...state};
            newState.view.wall.creatingMessage =  action.message;
            return newState;
        case INCREMENT_POST_LIKE_COUNT:
            newState = {...state};
            let filteredMessages =  newState.model.wall.messagesList.filter( (el) =>{return action.messageId === el.messageId ? true : false;});
            filteredMessages[0].likeCount += 1;

            return newState;
        default:
            return state;

    }
};

//----

let start = ()=>{

    store.dispatch({
        type:    SET_USERPIC_URL,
        urlImg: 'https://99px.ru/sstorage/86/2018/04/image_86290418140829606047.gif'
    });
    store.dispatch({
        type:      SET_USER_NAME,
        userName:  'Orange'
    });
    store.dispatch({
        type:       SET_USER_BIRTH_DATE,
        birthDate: '10.10.2000г.'
    });
    store.dispatch({
        type:      SET_USER_CITY,
        userCity: 'Минск'
    });
    store.dispatch({
        type:           SET_USER_EDUCATION,
        userEducation: 'БГУ 2011'
    });
    store.dispatch({
        type:         SET_USER_WEBSITE,
        userWebSite: 'http://it-kamasutra.com'
    });

};
start();

//---



// export let profilePageAttrsVal = {
//     profile:{
//         userInfo: {
//             userID:         state.profilePage.model.userInfo.userID,
//             userPicURL:     state.profilePage.model.userInfo.userPicURL,
//             userName:       state.profilePage.model.userInfo.userName,
//             userBirthDate:  state.profilePage.model.userInfo.userBirthDate,
//             userCity:       state.profilePage.model.userInfo.userCity,
//             userEducation:  state.profilePage.model.userInfo.userEducation,
//             userWebSite:    state.profilePage.model.userInfo.userWebSite
//     },
//         wall:  {
//             messagesList:    state.model.wall.messagesList,
//             creatingMessage: state.view.wall.creatingMessage,
//
//             onCreatingMessageChanged: (message)=>{
//                 const action = {
//                     type:    SET_CREATING_POST,
//                     message: message
//                 };
//                 store.dispatch(action);
//             },
//             onCreatingMessageFinishCommitted: (messageId)=>{
//                 const action_1 = {
//                     type:    SET_ADD_POST,
//                     message:   state.view.wall.creatingMessage,
//                     messageId: messageId
//                 };
//                 store.dispatch(action_1);
//
//                 const action_2 = {
//                     type:    SET_CREATING_POST,
//                     message: ''
//                 };
//                 store.dispatch(action_2);
//             },
//             onMesaageLikeIncrementRequest: (messageId)=>{
//                 const action = {
//                     type:      INCREMENT_POST_LIKE_COUNT,
//                     messageId: messageId
//                 };
//                 store.dispatch(action);
//             }
//
//         }
//     }
// };

