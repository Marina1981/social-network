import React from 'react';
import './DialogsSection.css';
import PropTypes from 'prop-types';
import MessageCreationForm from "../../MessageCreationForm/MessageCreationForm";
import {connect} from "react-redux";





const DialogsSection = (props) => {

        //---
        let selectedFriendChatLogMessagesList = props.friendsChatLog.get(props.selectedFriendId);

        if(undefined === selectedFriendChatLogMessagesList){
            selectedFriendChatLogMessagesList = [];
        }
        //---

        return (
            <div className="c-dialog-section">
                <span className="c-dialog-section__label-friends
                                 c-dialog-section__label-friends--positioned">

                    Friends

                </span>
                <span className="c-dialog-section__label-dialogs
                                 c-dialog-section__label-dialogs--positioned">

                    Dialogs

                </span>
                <div className="c-dialog-section__border-line"/>
                <div className="c-dialog-section__dialogs
                                c-dialog-section__dialogs--positioned">
                    {
                        props.friendsList.map( (el) => {

                            let clss = "c-friend" + ' ' + ((el.friendId ===  props.selectedFriendId)?("c-friend__selected"):(""));

                            return  <div className = {clss}
                                         key       = {el.friendId}
                                         onClick   = {(e)=>{props(el.friendId);}} >
                                        <div className="c-friend__userpic">
                                            <img className="userpic-friend" src={el.friendUserPicURL}/>
                                        </div>
                                        <span className="c-friend__name">{el.friendName}</span>
                                    </div>})
                    }


                </div>
                <div className="c-dialog-section__messages
                                c-dialog-section__messages--positioned">


                    {
                        selectedFriendChatLogMessagesList.map( (el) => {

                            let authorPicURL;
                            let authorName;
                            if (el.isUserMessage === true){
                                authorPicURL = props.userPicURL;
                                authorName   = props.userName;
                            } else {

                                const predicate = (el) => {
                                    return (el.friendId === props.selectedFriendId);
                                };

                               const filteredList = props.friendsList.filter(predicate);
                                authorPicURL = filteredList[0].friendUserPicURL;
                                authorName   = filteredList[0].friendName;
                            }


                            return (<div className="friend-chat-log__message" key={el.messageId}>
                                        <div className="message__userpic">
                                           <img className="userpic" src={authorPicURL}/>
                                        </div>
                                        <span className="message__username">{authorName}</span>
                                        <div className="message__text" >{el.text}</div>
                                        <div className="message__time" >{el.time}</div>
                                    </div>)} )
                    }

                </div>

                <div className="c-dialog-section__record-form
                                c-dialog-section__record-form--positioned">

                       <MessageCreationForm/>
                </div>

            </div>
        );
    };
//---

const mapStateToProps = (state) => {
    return {
        friendsChatLog:   state.dialogsPage.model.friendsChatLog,
        selectedFriendId: state.dialogsPage.view.selectedFriendId,
        friendsList:      state.dialogsPage.model.friendsList,
        friendId:         state.dialogsPage.model.friendsList.friendId,
        friendUserPicURL: state.dialogsPage.model.friendsList.friendUserPicURL,
        friendName:       state.dialogsPage.model.friendsList.friendName,
        messageId:        state.dialogsPage.model.friendsChatLog.messageId,
    }
};


const mapDispatchToProps = (dispatch) => {};

const ConnectedDialogsSection = connect(
    mapStateToProps,
    mapDispatchToProps)(DialogsSection);
//---


/*DialogsSection.propTypes = {
    friendUserPicURL: PropTypes.string.isRequired
};*/

export default ConnectedDialogsSection;
