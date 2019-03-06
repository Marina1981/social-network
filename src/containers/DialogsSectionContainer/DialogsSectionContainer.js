import React from 'react';
import {actions as dialogsActions} from "../../redux/modules/dialogsRedux";
import {connect} from "react-redux";
import DialogsSection from "../../components/DialogSection/DialogsSection";
import {withRouter} from "react-router";




const mapStateToProps = (state) => {

    return {
        isAuth:           state.auth.userAuthData.userId !== null, // true / false
        friendsList:      state.dialogsPage.friendsList,
        friendsChatLog:   state.dialogsPage.friendsChatLog,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        creatingMessage:  state.dialogsPage.creatingMessage,
        authorPicURL:     state.auth.avatar,
        authorName:       state.profilePage.userProfile.fullName
    }
};

const mapDispatchToProps = (dispatch) => {


    return{
        onFriendSelected: (friendId) => {
            dispatch(dialogsActions.setSelectedFriendId(friendId))
        },
        onCreatingMessageChanged: (message) => {
            dispatch(dialogsActions.setCreatingMessage(message))
        },
        onCreatingMessageFinishCommitted: (friendId,messageId,messageFinishCommittedTime) => {
            dispatch(dialogsActions.addCreatingMessageToFriendChatLog(friendId,messageId,messageFinishCommittedTime));
            dispatch(dialogsActions.setCreatingMessage(''))
        }

    }

};



const DialogsSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsSection);
//---
export default  withRouter(DialogsSectionContainer);