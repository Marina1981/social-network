import React from 'react';
import {actions as dialogsActions} from "../../redux/modules/dialogsRedux";
import {connect} from "react-redux";
import DialogsSection from "../../components/DialogSection/DialogsSection";
import {withRouter} from "react-router";




const mapStateToProps = (state) => {

    return {
        isAuth:           state.auth.userAuthData.userId !== null, // true / false
        userInfo:         state.profilePage.userInfo,
        friendsList:      state.dialogsPage.friendsList,
        friendsChatLog:   state.dialogsPage.friendsChatLog,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        creatingMessage:  state.dialogsPage.creatingMessage
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
        onCreatingMessageFinishCommitted: (friendId,messageId,messageFinishCommittedTime, creatingMessage) => {
            dispatch(dialogsActions.addCreatingMessageToFriendChatLog(friendId,messageId,messageFinishCommittedTime,creatingMessage));
        }

    }

};



const DialogsSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsSection);
//---
export default  withRouter(DialogsSectionContainer);