import React, { Component } from 'react';
import './Dialog.css';
import Username from "../UserNameComponent/UserName";
import Message from "../MessageComponent/Message";
import Post from "../PostComponent/Post";




class Dialog extends Component {
    render() {
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
                        this.props.friendsList.map(
                            (el) => {
                                return  <span>el.</span>}
                                          )
                    }


                </div>
                <div className="c-dialog-section__messages
                                c-dialog-section__messages--positioned">


                    {messages}

                </div>
                <textarea className="c-dialog-section__chat
                                     c-dialog-section__chat--positioned" placeholder="напишите сообщение..."/>

            </div>
        );
    }
}

export default Dialog;
