export const types = {
     SET_USERPIC_URL:              'NETWORK/PROFILE_PAGE/SET_USERPIC_URL',
     SET_USER_NAME:                'NETWORK/PROFILE_PAGE/SET_USER_NAME',
     SET_USER_BIRTH_DATE:          'NETWORK/PROFILE_PAGE/SET_USER_BIRTH_DATE',
     SET_USER_CITY:                'NETWORK/PROFILE_PAGE/SET_USER_CITY',
     SET_USER_EDUCATION:           'NETWORK/PROFILE_PAGE/SET_USER_EDUCATION',
     SET_USER_WEBSITE:             'NETWORK/PROFILE_PAGE/SET_USER_WEBSITE',
     ADD_POST:                     'NETWORK/PROFILE_PAGE/ADD_POST',
     SET_CREATING_POST:            'NETORK/PROFILE_PAGE/SET_CREATING_POST',
     INCREMENT_POST_LIKE_COUNT:    'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT',
     ADD_CREATING_MESSAGE_AS_POST: 'NETWORK/PROFILE_PAGE/ADD_CREATING_MESSAGE_AS_POST'
};



export const actions = {
    setUserpicURL: (userPicURL) => {
        return {
            type:      types.SET_USERPIC_URL,
            userPicURL: userPicURL
        }
    },
    setUserName:   (userName) => {
        return {
            type:      types.SET_USER_NAME,
            userName:  userName
        }
    },
    setUserBirthDate: (userBirthDate) => {
        return {
            type:          types.SET_USER_BIRTH_DATE,
            userBirthDate: userBirthDate
        }
    },
    setUserCity: (userCity) => {
        return {
            type:     types.SET_USER_CITY,
            userCity: userCity
        }
    },
    setUserEducation: (userEducation) => {
        return {
            type: types.SET_USER_EDUCATION,
            userEducation: userEducation
        }



    },
    setUserWebSite: (userWebSite) => {
        return {
            type:       types.SET_USER_WEBSITE,
            userWebSite: userWebSite
        }
    },
    addPost: (message, messageId) => {
        return {
            type: types.ADD_POST,
            message: message,
            messageId: messageId
        }
    },
    setCreatingPost: (message) => {
        return {
            type: types.SET_CREATING_POST,
            message: message
        }
    },
    incrementPostLikeCount: (messageId) => {
        return {
            type:      types.INCREMENT_POST_LIKE_COUNT,
            messageId: messageId
        }
    },
    addCreatingMessageAsPost: (messageId) => {
        return {
            type:      types.ADD_CREATING_MESSAGE_AS_POST,
            messageId: messageId
        }
    }

};

//----
export const initialStateForProfilePage = {
        userInfo:{
                userID: '',
                userPicURL: '',
                userName:'',
                userBirthDate:'',
                userCity: '',
                userEducation: '',
                userWebSite: ''
        },
        wall:{
            messagesList:[],
            creatingMessage: ''
        }
};
//-------
export const reducer = (state = initialStateForProfilePage, action) => {
    //----
    const newState = {
        ...state,
        userInfo: {...state.userInfo},
        wall: {
            ...state.wall,
            messagesList:    state.wall.messagesList.map( obj => ({...obj})),
            creatingMessage: {...state.wall.creatingMessage}
        }
    };

    //----
    switch (action.type) {
        case types.SET_USERPIC_URL:
            newState.userInfo.userPicURL = action.userPicURL;
            return newState;

        case types.SET_USER_NAME:
            newState.userInfo.userName = action.userName;
            return newState;

        case types.SET_USER_BIRTH_DATE:
            newState.userInfo.userBirthDate = action.userBirthDate;
            return newState;

        case types.SET_USER_CITY:
            newState.userInfo.userCity = action.userCity;
            return newState;

        case types.SET_USER_EDUCATION:
            newState.userInfo.userEducation = action.userEducation;
            return newState;

        case types.SET_USER_WEBSITE:
            newState.userInfo.userWebSite = action.userWebSite;
            return newState;

        case types.ADD_POST:
            newState.wall.messagesList = [...newState.wall.messagesList,
                                                {text:      action.message,
                                                 likeCount: 0,
                                                 messageId: action.messageId}];
            return newState;

        case types.SET_CREATING_POST:

            newState.wall.creatingMessage =  action.message;
            return newState;

        case types.INCREMENT_POST_LIKE_COUNT:
            let filteredMessages =  newState.wall.messagesList.filter( (el) =>{return action.messageId === el.messageId ? true : false;});
            filteredMessages[0].likeCount =+ 1;

            return newState;

        case types.ADD_CREATING_MESSAGE_AS_POST:

            newState.wall.messagesList = [...newState.wall.messagesList,
                                               {text:      state.wall.creatingMessage,
                                                likeCount: 0,
                                                messageId: action.messageId}];
            return newState;

        default:
            return state;

    }
};

//----



//---



// export let profilePageAttrsVal = {
// //     profile:{
// //         userInfo: {
// //             userID:         state.profilePage.model.userInfo.userID,
// //             userPicURL:     state.profilePage.model.userInfo.userPicURL,
// //             userName:       state.profilePage.model.userInfo.userName,
// //             userBirthDate:  state.profilePage.model.userInfo.userBirthDate,
// //             userCity:       state.profilePage.model.userInfo.userCity,
// //             userEducation:  state.profilePage.model.userInfo.userEducation,
// //             userWebSite:    state.profilePage.model.userInfo.userWebSite
// //     },
// //         wall:  {
// //             messagesList:    state.model.wall.messagesList,
// //             creatingMessage: state.view.wall.creatingMessage,
// //
// //             onCreatingMessageChanged: (message)=>{
// //                 const action = {
// //                     type:    SET_CREATING_POST,
// //                     message: message
// //                 };
// //                 store.dispatch(action);
// //             },
// //             onCreatingMessageFinishCommitted: (messageId)=>{
// //                 const action_1 = {
// //                     type:    SET_ADD_POST,
// //                     message:   state.view.wall.creatingMessage,
// //                     messageId: messageId
// //                 };
// //                 store.dispatch(action_1);
// //
// //                 const action_2 = {
// //                     type:    SET_CREATING_POST,
// //                     message: ''
// //                 };
// //                 store.dispatch(action_2);
// //             },
// //             onMesaageLikeIncrementRequest: (messageId)=>{
// //                 const action = {
// //                     type:      INCREMENT_POST_LIKE_COUNT,
// //                     messageId: messageId
// //                 };
// //                 store.dispatch(action);
// //             }
// //
//         }
//     }
// };

