import React  from 'react';
import './UserProfileSection.css';
import Post                  from '../Post/Post.js';
import UserInfoSection       from "../UserInfoSection/UserInfoSection";
import {connect} from "react-redux";
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";
import {INCREMENT_POST_LIKE_COUNT, SET_ADD_POST, SET_CREATING_POST} from "../../redux/modules/profile";
import {superReducer as state} from "../../redux/modules/reducer";




const UserProfileSection = (props) =>{
  

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
                    <MessageCreationForm  creatingMessage                   = {props.creatingMessage}
                                          onCreatingMessageChanged          = {props.onCreatingMessageChanged}
                                          onCreatingMessageFinishCommitted  = {props.onCreatingMessageFinishCommitted}/>
                </div>
                <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                    {
                        props.messagesList.map( (el) => {return <Post  userInfo = {props.userInfo}
                                                                                      messageDetailes={el}
                                                                                      key={el.messageId}
                                                                                      onMesaageLikeIncrementRequest={props.onMesaageLikeIncrementRequest}/>})
                    }

                </div>
            </div>
        </article>
    )
};


//---
const mapStateToProps = (state) => {
    return {
        userInfo:        state.profilePage.userInfo,
        messagesList:    state.profilePage.wall.messagesList,
        creatingMessage: state.profilePage.wall.creatingMessage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatingMessageChanged: (message) => {
            debugger;
            dispatch({
                type:    SET_CREATING_POST,
                message: message
            });
        },
        onCreatingMessageFinishCommitted: (messageId) => {
            dispatch({
                type:      SET_ADD_POST,
                message:   state.profilePage.wall.creatingMessage,
                messageId: messageId
            });
            dispatch({
                type:    SET_CREATING_POST,
                message: ''
            })
        },
        onMesaageLikeIncrementRequest: (messageId) => (
            dispatch({
                type:      INCREMENT_POST_LIKE_COUNT,
                messageId: messageId
            })
        )
    }
};

const ConnectedUserProfileSection = connect(
    mapStateToProps,
    mapDispatchToProps)(UserProfileSection);
//---

export default ConnectedUserProfileSection;