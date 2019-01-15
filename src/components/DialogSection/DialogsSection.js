import React from 'react';
import './DialogsSection.css';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";





const DialogsSection = (props) => {

        //---
        let selectedFriendChatLogMessagesList = props.friendsChatLog[props.selectedFriendId];//get(props.selectedFriendId);

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
                                         onClick   = {(e)=>{props.onFriendSelected(el.friendId);}} >
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
                                authorPicURL = props.userInfo.userPicURL;
                                authorName   = props.userInfo.userName;
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

                       <MessageCreationForm  selectedFriendId                  = {props.selectedFriendId}
                                             creatingMessage                   = {props.creatingMessage}
                                             onCreatingMessageChanged          = {props.onCreatingMessageChanged}
                                             onCreatingMessageFinishCommitted  = {props.onCreatingMessageFinishCommitted}

                       />
                </div>

            </div>
        );
    };
//---

export default DialogsSection;
