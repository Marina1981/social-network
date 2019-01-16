import React from 'react';
import './DialogsPage.css';
import DialogsSection from "../DialogSection/DialogsSection";
import {connect} from "react-redux";

import {actions as action} from "../../redux/modules/dialogsRedux";



const DialogsPage = (props) => {

        return (
                <div className="c-dialog-page__wraper-dialogs">
                    <DialogsSection  userInfo                         = {props.userInfo}
                                     friendsList                      = {props.friendsList}
                                     friendsChatLog                   = {props.friendsChatLog}
                                     selectedFriendId                 = {props.selectedFriendId}
                                     creatingMessage                  = {props.creatingMessage}
                                     onFriendSelected                 = {props.onFriendSelected}
                                     onCreatingMessageChanged         = {props.onCreatingMessageChanged}
                                     onCreatingMessageFinishCommitted = {props.onCreatingMessageFinishCommitted}


                    />
                </div>
        );
    };
//---
const mapStateToProps = (state) => {
  return {
      userInfo:         state.profilePage.userInfo,
      friendsList:      state.dialogsPage.friendsList,
      friendsChatLog:   state.dialogsPage.friendsChatLog,
      selectedFriendId: state.dialogsPage.selectedFriendId,
      creatingMessage:  state.dialogsPage.creatingMessage,
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



const ConnectedDialogsPage = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsPage);
//---
export default  ConnectedDialogsPage;
