import React from 'react';
import './DialogsPage.css';
import MainHeader from "../MainHeader/MainHeader";
import DialogsSection from "../DialogSection/DialogsSection";
import MainSidebar from "../MainSideBar/MainSidebar";
import {connect} from "react-redux";
import {ADD_FRIEND_CHAT_LOG_MESSAGE, SET_CREATING_MESSAGE, SET_SELECTED_FRIEND_ID} from "../../redux/modules/dialogs";
import {superReducer as state} from "../../redux/modules/reducer";




const DialogsPage = (props) => {

        return (
            <div className="c-dialog-page">
                <div className="c-dialog-page__wraper-header">
                    <MainHeader/>
                </div>
                <div className="c-dialog-page__wraper-sidebar">
                    <MainSidebar/>
                </div>
                <div className="c-dialog-page__wraper-dialogs">
                    <DialogsSection  userInfo                         = {props.userInfo}
                                     friendsList                      = {props.friendsList}
                                     friendsChatLog                   = {props.friendsChatLog}
                                     selectedFriendId                 = {props.selectedFriendId}
                                     creatingMessage                  = {props.creatingMessage}
                                     onFriendSelected                 = {props.onFriendSelected}
                                     onCreatingMessageChanged         = {props.onCreatingMessageChanged}
                                     onCreatingMessageFinishCommitted = {props.onCreatingMessageFinishCommitted}/>
                </div>
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
            dispatch({
                type:     SET_SELECTED_FRIEND_ID,
                friendId: friendId
            })
        },
        onCreatingMessageChanged: (message) => {
            dispatch({
                type:    SET_CREATING_MESSAGE,
                message: message
            })
        },
        onCreatingMessageFinishCommitted: (messageId,messageFinishCommittedTime) => {
            dispatch({
                type:           ADD_FRIEND_CHAT_LOG_MESSAGE,
                friendId:       state.dialogsPage.selectedFriendId,
                isUserMessage:  true,
                userMessage:    state.dialogsPage.creatingMessage,
                messageTime:    messageFinishCommittedTime,
                messageId:      messageId
            });
            dispatch({
                type:    SET_CREATING_MESSAGE,
                message: ''
            })
        }
    }

};



const ConnectedDialogsPage = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsPage);
//---
export default  ConnectedDialogsPage;
