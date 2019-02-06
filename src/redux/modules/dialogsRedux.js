import * as Immutable from 'immutable';



export const types = {
    SET_FRIENDS_LIST:                        'NETWORK/DIALOGS_PAGE/SET_FRIENDS_LIST',

    SET_SELECTED_FRIEND_ID:                  'NETWORK/DIALOGS_PAGE/SET_SELECTED_FRIEND_ID',
    SET_CREATING_MESSAGE:                    'NETWORK/DIALOGS_PAGE/SET_CREATING_MESSAGE',
    ADD_FRIEND_CHAT_LOG_MESSAGE:             'NETWORK/DIALOGS_PAGE/ADD_FRIEND_CHAT_LOG_MESSAGE',
    ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG: 'NETWORK/DIALOGS_PAGE/ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG'

};

//---- actionCreators--------//

export const actions = {
        setFriendsList: (friendId, friendName, friendUserPicURL, friendStatus)  =>
                        ({type: types.SET_FRIENDS_LIST, friendId, friendName, friendUserPicURL, friendStatus}),

        setSelectedFriendId:(friendId) => ({type: types.SET_SELECTED_FRIEND_ID, friendId}),
        setCreatingMessage: (message)  => ({type: types.SET_CREATING_MESSAGE, message}),
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

// export const onCreatingMessageChanged = (loginingError) => {
//     return {
//         type:    SET_CREATING_MESSAGE,
//         loginingError: loginingError
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

export const initialState = {
        friendsList: [],
        friendsChatLog: {
            // '1': [{messageId: '5',
            //        isUserMessage: false,
            //        text: 'Hi',
            //        time:'22:00'}],
            // '2': []
        },
        selectedFriendId: null,
        creatingMessage: ''

};
//----

//----
export const reducer = (state=initialState, action) => {

    let immutableState    = Immutable.fromJS(state);
    let newImmutableState = immutableState;

    switch (action.type) {
        case types.SET_FRIENDS_LIST:
            newImmutableState =  immutableState.set('friendsList', action.friendId, action.friendName, action.friendUserPicURL, action.friendStatus);
            return newImmutableState.toJS();

        case types.SET_SELECTED_FRIEND_ID:
            newImmutableState =  immutableState.set('selectedFriendId', action.friendId);
            return newImmutableState.toJS();

        case types.SET_CREATING_MESSAGE:
            newImmutableState  = immutableState.set('creatingMessage',action.loginingError);
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








