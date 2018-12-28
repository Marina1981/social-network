import React, { Component } from 'react';
import './Dialog.css';
import RecordForm from "../RecordFormComponent/RecordForm";
import PropTypes from 'prop-types';





class Dialog extends Component {
    render() {
        //---
        let selectedFriendChatLogMessagesList = this.props.friendsChatLog.get(this.props.selectedFriendId);

        if(undefined === selectedFriendChatLogMessagesList){
            selectedFriendChatLogMessagesList = [];
        }
        //---

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
                        this.props.friendsList.map( (el) => {

                            let clss = "c-friend" + ' ' + ((el.friendId ===  this.props.selectedFriendId)?("c-friend__selected"):(""));

                            return  <div className = {clss}
                                         key       = {el.friendId}
                                         onClick   = {(e)=>{this.props.onFriendSelected(el.friendId);}} >
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
                        selectedFriendChatLogMessagesList.map( (el) => {return (<div className="friend-chat-log__message" key={el.userMessageId}>
                                                                                    <div className="message__userpic">
                                                                                       <img className="userpic" src={el.userPicURL}/>
                                                                                    </div>
                                                                                    <span className="message__username">{el.userName}</span>
                                                                                    <span className="message__text" >{el.text}</span>
                                                                                    <span className="message__time" >{el.time}</span>
                                                                                </div>)} )
                    }

                </div>

                <div className="c-dialog-section__record-form
                                c-dialog-section__record-form--positioned">
                       <RecordForm creatingMessage                   = {this.props.creatingMessage}
                                   onCreatingMessageChanged          = {this.props.onCreatingMessageChanged}
                                   onCreatingMessageFinishCommitted  = {this.props.onCreatingMessageFinishCommitted}/>
                </div>

            </div>
        );
    }
}

/*Dialog.propTypes = {
    friendUserPicURL: PropTypes.string.isRequired
};*/

export default Dialog;
