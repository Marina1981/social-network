import * as state from "./profilePage";
import store from "../createStore";

export const SET_SELECTED_FRIEND_ID  =           'NETWORK/DIALOGS_PAGE/SET_SELECTED_FRIEND_ID';
export const SET_CREATING_MESSAGE =              'NETWORK/DIALOGS_PAGE/SET_CREATING_MESSAGE';
export const ADD_FRIEND_CHAT_LOG_MESSAGE =       'NETWORK/DIALOGS_PAGE/ADD_FRIEND_CHAT_LOG_MESSAGE';


//----
export const initialStateForDialogsPage = {
    model:{
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
        friendsChatLog: new Map( [
            ['1', [{messageId: '5',
                isUserMessage: false,
                text: 'Hi',
                time:'22:00'}]],
            ['2', []]
        ])
    },
    view:{
        selectedFriendId: null,
        creatingMessage: ''
    },

};
//----

export const dialogsPageReducer = (state=initialStateForDialogsPage, action) => {
    switch (action.type) {
        case SET_SELECTED_FRIEND_ID:
            let newState = {...state};
            newState.view.selectedFriendId = action.friendId;
            return newState;
        case SET_CREATING_MESSAGE:
            newState = {...state};
            newState.view.creatingMessage = action.message;
            return newState;
        case ADD_FRIEND_CHAT_LOG_MESSAGE:
            newState = {...state};
            let oldChatMessageList = newState.model.friendsChatLog.get(action.friendId);
            if (oldChatMessageList !== undefined) {
                let newChatMessageList  = [...oldChatMessageList, { messageId:     action.messageId,
                                                                    isUserMessage: action.isUserMessage,
                                                                    text:          action.userMessage,
                                                                    time:          action.messageTime}];

                newState.model.friendsChatLog.set(action.friendId, newChatMessageList);

            }
            return newState;
        default:
            return state;
    }
};

//----
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
