import * as Immutable from 'immutable';


export const types = {
    SET_FRIENDS_LIST: 'NETWORK/DIALOGS_PAGE/SET_FRIENDS_LIST',

    SET_SELECTED_FRIEND_ID: 'NETWORK/DIALOGS_PAGE/SET_SELECTED_FRIEND_ID',
    SET_CREATING_MESSAGE: 'NETWORK/DIALOGS_PAGE/SET_CREATING_MESSAGE',
    ADD_FRIEND_CHAT_LOG_MESSAGE: 'NETWORK/DIALOGS_PAGE/ADD_FRIEND_CHAT_LOG_MESSAGE',
    ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG: 'NETWORK/DIALOGS_PAGE/ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG'
};

//---- actionCreators--------//

export const actions = {
    setFriendsList: (friendId, friendName, friendUserPicURL, friendStatus) =>
        ({type: types.SET_FRIENDS_LIST, friendId, friendName, friendUserPicURL, friendStatus}),

    setSelectedFriendId: (friendId) => ({type: types.SET_SELECTED_FRIEND_ID, friendId}),
    setCreatingMessage: (message) => ({type: types.SET_CREATING_MESSAGE, message}),
    addFriendsChatLogMessage: (friendId, messageId, isUserMessage, text, time) => {
        return {
            type: types.ADD_FRIEND_CHAT_LOG_MESSAGE,
            friendId,
            messageId,
            isUserMessage,
            text,
            time
        }
    },
    addCreatingMessageToFriendChatLog: (friendId, messageId, time) => {
        return {
            type: types.ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG,
            messageId,
            friendId,
            time
        }
    }
};
//---------

export const initialState = {
    friendsList: [
        {
            friendId: 1,
            friendName: "Dima",
            friendUserPicURL: 'http://zarablegko.ru/wp-content/uploads/2011/07/avatarki.jpg',
            friendStatus: ''
        },
        {
            friendId: 2,
            friendName: "Lena",
            friendUserPicURL: 'data:image/jpeg;base64,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',
            friendStatus: ''
        }
    ],
    friendsChatLog: {
        '1': [{
            messageId: '1',
            isUserMessage: false,
            text: 'Hi',
            time: '22:00'
        }],
        '2': [{
            messageId: '2',
            isUserMessage: false,
            text: 'Hello, how are you ?',
            time: '21:00'
        }]
    },
    selectedFriendId: null,
    creatingMessage: ''

};
//----

//----
export const reducer = (state = initialState, action) => {
    let immutableState = Immutable.fromJS(state);
    let newImmutableState = immutableState;

    switch (action.type) {
        case types.SET_FRIENDS_LIST:
            newImmutableState = immutableState.set('friendsList', action.friendId, action.friendName, action.friendUserPicURL, action.friendStatus);
            return newImmutableState.toJS();

        case types.SET_SELECTED_FRIEND_ID:
            newImmutableState = immutableState.set('selectedFriendId', action.friendId);
            return newImmutableState.toJS();

        case types.SET_CREATING_MESSAGE:
            newImmutableState = immutableState.set('creatingMessage', action.message);
            return newImmutableState.toJS();

        case types.ADD_FRIEND_CHAT_LOG_MESSAGE:

            let oldImmutableChatMessageList = immutableState.get('friendsChatLog').get(action.friendId);

            if (oldImmutableChatMessageList !== undefined) {


                const messageItem = {
                    messageId: action.messageId,
                    isUserMessage: action.isUserMessage,
                    text: action.text,
                    time: action.time
                };

                let newImmutableChatMessageList =
                    oldImmutableChatMessageList.push(messageItem);


                let newImmutableState =
                    immutableState.setIn(['friendsChatLog', action.friendId], newImmutableChatMessageList);

                return newImmutableState.toJS();

            }

            return state;

        case  types.ADD_CREATING_MESSAGE_TO_FRIEND_CHAT_LOG:

            oldImmutableChatMessageList = immutableState.get('friendsChatLog').get(action.friendId.toString());//getIn(['friendsChatLog', action.friendId]);

            if (oldImmutableChatMessageList !== undefined) {


                let messageItem = {
                    messageId: action.messageId,
                    isUserMessage: true,
                    text: state.creatingMessage,
                    time: action.time
                };

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








