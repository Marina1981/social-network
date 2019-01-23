import * as Immutable from 'immutable';



export const types = {
    SET_SELECTED_FRIEND_ID:                  'NETWORK/DIALOGS_PAGE/SET_SELECTED_FRIEND_ID',
    SET_CREATING_MESSAGE:                    'NETWORK/DIALOGS_PAGE/SET_CREATING_MESSAGE',
    ADD_FRIEND_CHAT_LOG_MESSAGE:             'NETWORK/DIALOGS_PAGE/ADD_FRIEND_CHAT_LOG_MESSAGE',
    ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG: 'NETWORK/DIALOGS_PAGE/ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG'

};

//---- actionCreators--------//

export const actions = {
        setSelectedFriendId:(friendId) => {
            return {
                type:     types.SET_SELECTED_FRIEND_ID,
                friendId: friendId
            }
        },
        setCreatingMessage: (message) => {
            return {
                type:    types.SET_CREATING_MESSAGE,
                message: message
            }
        },
        addFriendsChatLogMessage: (friendId, messageId, isUserMessage, text, time) => {
            return {
                type:          types.ADD_FRIEND_CHAT_LOG_MESSAGE,
                friendId:      friendId,
                messageId:     messageId,
                isUserMessage: isUserMessage,
                text:          text,
                time:          time
            }
        },
        addCreatingMessageToFriendChatLog: (friendId, messageId, time) => {
            return {
                type:        types.ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG,
                messageId:   messageId,
                friendId:    friendId,
                time:        time
            }
        }
    };
//---------

// export const onCreatingMessageChanged = (message) => {
//     return {
//         type:    SET_CREATING_MESSAGE,
//         message: message
//     }
// };
// //---------
// export const onCreatingMessageFinishCommitted = (messageId,messageFinishCommittedTime) => {
//     return {
//         type:           ADD_FRIEND_CHAT_LOG_MESSAGE,
//         friendId:       state.dialogsPage.selectedFriendId,
//         isUserMessage:  true,
//         userMessage:    state.dialogsPage.creatingMessage,
//         messageTime:    messageFinishCommittedTime,
//         messageId:      messageId
//     }
// };

//----

export const initialStateForDialogsPage = {
        friendsList: [
            {
                friendId: '1',
                friendUserPicURL: 'https://img0.liveinternet.ru/images/attach/c/10/110/384/110384324_5a__5_.png',
                friendName: 'Vera'
            },
            {
                friendId: '2',
                friendUserPicURL: 'https://img1.liveinternet.ru/images/attach/c/10/110/384/110384517_5a__2_.png',
                friendName: 'Dima'
            }
        ],
        friendsChatLog: {
            '1': [{messageId: '5',
                   isUserMessage: false,
                   text: 'Hi',
                   time:'22:00'}],
            '2': []
        },
        selectedFriendId: null,
        creatingMessage: ''

};
//----

//----
export const reducer = (state=initialStateForDialogsPage, action) => {

    let immutableState    = Immutable.fromJS(state);
    let newImmutableState = immutableState;

    switch (action.type) {
        case types.SET_SELECTED_FRIEND_ID:
            newImmutableState =  immutableState.set('selectedFriendId', action.friendId);
            return newImmutableState.toJS();

        case types.SET_CREATING_MESSAGE:
           // newState.creatingMessage = action.message;
            newImmutableState  = immutableState.set('creatingMessage',action.message);
            return newImmutableState.toJS();

        case types.ADD_FRIEND_CHAT_LOG_MESSAGE:

            let oldImmutableChatMessageList = immutableState.get('friendsChatLog').get(action.friendId);

            if (oldImmutableChatMessageList !== undefined) {


                const messageItem = { messageId:     action.messageId,
                                      isUserMessage: action.isUserMessage,
                                      text:          action.text,
                                      time:          action.time};

                let newImmutableChatMessageList =
                    oldImmutableChatMessageList.push(messageItem);


                let newImmutableState =
                    immutableState.setIn(['friendsChatLog', action.friendId], newImmutableChatMessageList);

                return newImmutableState.toJS();

            }

            return state;

        case  types.ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG:

            oldImmutableChatMessageList = immutableState.get('friendsChatLog').get(action.friendId);//getIn(['friendsChatLog', action.friendId]);

            if (oldImmutableChatMessageList !== undefined) {


                let messageItem = { messageId:     action.messageId,
                                    isUserMessage: true,
                                    text:          state.creatingMessage,
                                    time:          action.time};

                let newImmutableChatMessageList =
                            oldImmutableChatMessageList.push(messageItem);


                let newImmutableState =
                      immutableState.setIn(['friendsChatLog', action.friendId], newImmutableChatMessageList);

                return newImmutableState.toJS();

            }

            return state;


        default:
            return state;
    }
};

// export const reducer = (state=initialStateForDialogsPage, action) => {
//     //---
//
//     // let str = JSON.stringify(state);
//     // let newState = JSON.parse(str);
//     // const newState = {
//     //     ...state,
//     //     friendsList:    state.friendsList.map( obj => ({...obj})),
//     //     friendsChatLog: state.friendsChatLog.map( obj => ({...obj}))
//     // };
//
//     //---
//     switch (action.type) {
//         case types.SET_SELECTED_FRIEND_ID:
//             let newState = {...state}
//             newState.selectedFriendId = action.friendId;
//             return newState;
//
//         case types.SET_CREATING_MESSAGE:
//             newState.creatingMessage = action.message;
//             return newState;
//
//         case types.ADD_FRIEND_CHAT_LOG_MESSAGE:
//             let oldChatMessageList = newState.friendsChatLog.get(action.friendId);
//
//             if (oldChatMessageList !== undefined) {
//                 let newChatMessageList  = [...oldChatMessageList, { messageId:     action.messageId,
//                                                                     isUserMessage: action.isUserMessage,
//                                                                     text:          action.text,
//                                                                     time:          action.time}];
//
//                 newState.friendsChatLog.set(action.friendId, newChatMessageList);
//
//             }
//
//             return newState;
//
//         case  types.ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG:
//             oldChatMessageList = newState.friendsChatLog.get(action.friendId);
//             if (oldChatMessageList !== undefined) {
//                 let newChatMessageList  = [...oldChatMessageList, { messageId:     action.messageId,
//                                                                     isUserMessage: action.isUserMessage,
//                                                                     text:          newState.creatingMessage,
//                                                                     time:          action.time}];
//
//                 newState.friendsChatLog.set(action.friendId, newChatMessageList);
//
//             }
//             return newState;
//
//
//         default:
//             return state;
//     }
// };






//export let dialogsPageAttrsVal = {
    // dialogs: {
    //     userInfo: {
    //         userID:         state.profilePage.model.userInfo.userID,
    //         userPicURL:     state.profilePage.model.userInfo.userPicURL,
    //         userName:       state.profilePage.model.userInfo.userName,
    //         userBirthDate:  state.profilePage.model.userInfo.userBirthDate,
    //         userCity:       state.profilePage.model.userInfo.userCity,
    //         userEducation:  state.profilePage.model.userInfo.userEducation,
    //         userWebSite:    state.profilePage.model.userInfo.userWebSite
    //     },
    //
    //     friendsList:      state.dialogsPage.model.friendsList,
    //     friendsChatLog:   state.dialogsPage.model.friendsChatLog,
    //     selectedFriendId: state.dialogsPage.view.selectedFriendId,
    //     creatingMessage:  state.dialogsPage.view.creatingMessage,
    //
    //
    //     onFriendSelected: (friendId) => {
    //         const action = {
    //             type:     SET_SELECTED_FRIEND_ID,
    //             friendId: friendId
    //         };
    //         store.dispatch(action);
    //     },
    //     onCreatingMessageChanged: (message)=>{
    //         const action = {
    //             type:    SET_CREATING_MESSAGE,
    //             message: message
    //         };
    //         store.dispatch(action);
    //     },
    //     onCreatingMessageFinishCommitted: (messageId,messageFinishCommittedTime)=>{
    //         const action_1 = {
    //             type:           ADD_FRIEND_CHAT_LOG_MESSAGE,
    //             friendId:       state.dialogsPage.view.selectedFriendId,
    //             isUserMessage:  true,
    //             userMessage:    state.dialogsPage.view.creatingMessage,
    //             messageTime:    messageFinishCommittedTime,
    //             messageId:      messageId
    //
    //
    //         };
    //         store.dispatch(action_1);
    //
    //         const action_2 = {
    //             type:    SET_CREATING_MESSAGE,
    //             message: ''
    //         };
    //         store.dispatch(action_2);
    //     }
    // }
//};
//----
