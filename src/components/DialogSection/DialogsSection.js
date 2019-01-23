import React from 'react';
import './DialogsSection.css';
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";
import {NavLink} from "react-router-dom";


const DialogsSection = (props) => {
    //---
    // if (!props.isLoggedIn){
    //     return <Redirect to="/login"/>
    // }

    //---
    let selectedFriendId = props.friendsChatLog[props.selectedFriendId];

    // if(undefined === selectedFriendId){
    //     selectedFriendId = [];
    // }
    //---

    return (
        <div className="c-dialog-section">
            <span className="c-dialog-section__label-dialogs
                                 c-dialog-section__label-dialogs--positioned">
                    Dialogs
                </span>
            <div className="c-dialog-section__border-line"/>
            <div className="c-dialog-section__dialogs
                                c-dialog-section__dialogs--positioned">
                {
                    props.friendsList.map((el) => {

                        let clss = "c-friend" + ' ' + ((el.friendId === props.selectedFriendId) ? ("c-friend__selected") : (""));

                        return <div className={clss}
                                    key={el.friendId}
                                    onClick={(e) => {
                                        props.onFriendSelected(el.friendId);
                                    }}>
                            <div className="c-friend__userpic">
                                <img className="userpic-friend" src={el.friendUserPicURL}/>
                            </div>
                            <span className="c-friend__name">{el.friendName}</span>
                        </div>
                    })
                }

                {/*{*/}
                {/*props.friendsList.map((el) => {*/}
                {/*return <NavLink to='/fiendId' activeClassName="c-friend__selected"*/}
                {/*key={el.friendId}*/}
                {/*onClick={(e) => {*/}
                {/*props.onFriendSelected(el.friendId);*/}
                {/*}}>*/}
                {/*<div className="c-friend__userpic">*/}
                {/*<img className="userpic-friend" src={el.friendUserPicURL}/>*/}
                {/*</div>*/}
                {/*<span className="c-friend__name">{el.friendName}</span>*/}
                {/*</NavLink>*/}
                {/*})*/}
                {/*}*/}


            </div>
            {
                props.selectedFriendId ?
                    <div className="c-dialog-section__messages
                                    c-dialog-section__messages--positioned">
                        {
                            selectedFriendId.map((el) => {

                                let authorPicURL;
                                let authorName;
                                if (el.isUserMessage === true) {
                                    authorPicURL = props.userInfo.userPicURL;
                                    authorName = props.userInfo.userName;
                                } else {

                                    const predicate = (el) => {
                                        return (el.friendId === props.selectedFriendId);
                                    };

                                    const filteredList = props.friendsList.filter(predicate);
                                    authorPicURL = filteredList[0].friendUserPicURL;
                                    authorName = filteredList[0].friendName;
                                }


                                return (<div className="friend-chat-log__message" key={el.messageId}>
                                    <div className="message__userpic">
                                        <img className="userpic" src={authorPicURL}/>
                                    </div>
                                    <span className="message__username">{authorName}</span>
                                    <div className="message__text">{el.text}</div>
                                    <div className="message__time">{el.time}</div>
                                </div>)
                            })
                        }

                    </div> :
                    <span className="c-dialog-section__label-friends
                                     c-dialog-section__label-friends--positioned">
                       Select friend
                    </span>
            }

            <div className="c-dialog-section__record-form
                                c-dialog-section__record-form--positioned">

                <MessageCreationForm selectedFriendId={props.selectedFriendId}
                                     creatingMessage={props.creatingMessage}
                                     onCreatingMessageChanged={props.onCreatingMessageChanged}
                                     onCreatingMessageFinishCommitted={props.onCreatingMessageFinishCommitted}

                />
            </div>
        </div>
    );
};
//---

export default DialogsSection;
