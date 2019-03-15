import React from 'react';
import './ProfileSection.css';
import Post from '../Post/Post.js';
import MessageCreationForm from "../MessageCreationForm/MessageCreationForm";
import {Redirect} from "react-router";
import UserInfoSectionContainer from "../../containers/UserInfoSectionContainer/UserInfoSectionContainer";



const ProfileSection = (props) => {
    //---
    if (!props.isAuth) {
        return <Redirect to="/Login"/>
    }
    //---
    return (
        <article className="c-profile-section">
            <div className="c-profile-section__userpic-block">
                <div className="c-info__userpic
                                c-info__userpic--positioned">
                    <img className="c-info__userpic-img"
                         src={props.photos.large !== null ? props.photos.large : ('data:image/jpeg;base64,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')}
                         alt="photo"/>
                </div>
                <div className="c-profile-section__block-add-photos">
                    <input type="file"  className="block-add-photos__input"
                           onChange={(e) => {
                               props.onUserpicChangeRecuested(e.target.files[0])
                           }}/>
                </div>
            </div>
            <div className="c-profile-section__greeting-block">
                <div className="greeting-block__user-name">
                    {props.userName}
                </div>
                <div className="greeting-block__about-me">
                    Welcome to the offical account of {props.userName}
                </div>
            </div>
            <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>
            <div className="c-profile-section__info-block
                            c-profile-section__info-block--positioned">

                <UserInfoSectionContainer/>
            </div>
            <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                    <div className="wall-block__notes">
                        My notes
                    </div>
                    <MessageCreationForm selectedFriendId={props.selectedFriendId}
                                         creatingMessage={props.creatingMessage}
                                         onCreatingMessageChanged={props.onCreatingMessageChanged}
                                         onCreatingMessageFinishCommitted={props.onCreatingMessageFinishCommitted}/>
                </div>
                <div className="wall-block__posts-block
                                wall-block__posts-block--positioned">
                    {
                        props.messagesList.map((el) => {
                            return <Post photoAuth ={props.photoAuth}
                                         messageDetailes={el}
                                         key={el.messageId}
                                         onMesaageLikeIncrementRequest={props.onMesaageLikeIncrementRequest}/>
                        })
                    }

                </div>
            </div>
        </article>
    )
};


export default ProfileSection;