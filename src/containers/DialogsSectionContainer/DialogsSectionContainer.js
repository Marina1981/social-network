import React from 'react';
import {actions as action} from "../../redux/modules/dialogsRedux";
import {connect} from "react-redux";
import DialogsSection from "../../components/DialogSection/DialogsSection";




const mapStateToProps = (state) => {
    return {
        userInfo:         state.profilePage.userInfo,
        friendsList:      state.dialogsPage.friendsList,
        friendsChatLog:   state.dialogsPage.friendsChatLog,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        creatingMessage:  state.dialogsPage.creatingMessage,
        status:           state.auth.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {


    return{
        onFriendSelected: (friendId) => {
            dispatch(action.setSelectedFriendId(friendId))
        },
        onCreatingMessageChanged: (message) => {
            dispatch(action.setCreatingMessage(message))
        },
        onCreatingMessageFinishCommitted: (friendId,messageId,messageFinishCommittedTime) => {
            dispatch(action.addCreatingMessageToFriendChatLog(friendId,messageId,messageFinishCommittedTime));
        }
    }

};



const DialogsSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsSection);
//---
export default  DialogsSectionContainer;