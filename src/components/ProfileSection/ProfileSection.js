import React  from 'react';
import './ProfileSection.css';
import Post                  from '../Post/Post.js';
import UserInfoSection       from "../UserInfoSection/UserInfoSection";
import {connect} from "react-redux";
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";
import {actions as profileActions} from "../../redux/modules/profileRedux";
import {Redirect} from "react-router";



const ProfileSection = (props) =>{
    //---
    // if (!props.isLoggedIn){
    //     return <Redirect to="/"/>
    // }
    //---
    return (
        <article className="c-profile-section">
            <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>
            <div className="c-profile-section__info-block">
                <UserInfoSection userInfo = {props.userInfo} />
            </div>
            <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                    <MessageCreationForm  selectedFriendId                  = {props.selectedFriendId}
                                          creatingMessage                   = {props.creatingMessage}
                                          onCreatingMessageChanged          = {props.onCreatingMessageChanged}
                                          onCreatingMessageFinishCommitted  = {props.onCreatingMessageFinishCommitted}/>
                </div>
                <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                    {
                        props.messagesList.map( (el) => {return <Post  userInfo = {props.userInfo}
                                                                                 messageDetailes = {el}
                                                                                 key = {el.messageId}
                                                                                 onMesaageLikeIncrementRequest = {props.onMesaageLikeIncrementRequest}/>})
                    }

                </div>
            </div>
        </article>
    )
};


//---
const mapStateToProps = (state) => {
    return {
        userInfo:         state.profilePage.userInfo,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        messagesList:     state.profilePage.wall.messagesList,
        creatingMessage:  state.profilePage.wall.creatingMessage,
        status:           state.auth.isLoggedIn

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatingMessageChanged: (message) => {
            dispatch(profileActions.setCreatingPost(message));
        },
        onCreatingMessageFinishCommitted: (messageId) => {
            dispatch(profileActions.addCreatingMessageAsPost(messageId));
        },
        onMesaageLikeIncrementRequest: (messageId) => (
            dispatch(profileActions.incrementPostLikeCount(messageId))
        )
    }
};

const ConnectedProfileSection = connect(
    mapStateToProps,
    mapDispatchToProps)(ProfileSection);
//---

export default ConnectedProfileSection;