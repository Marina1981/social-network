import React  from 'react';
import './UserProfileSection.css';
import Post                  from './Post/Post.js';
import UserInfoSection       from "./UserInfoSection/UserInfoSection";
import MessageCreationForm   from "../../MessageCreationForm/MessageCreationForm";
import {connect} from "react-redux";




const UserProfileSection = (props) =>{

        return (
            <article className="c-profile-section">
                <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>
                <div className="c-profile-section__info-block">
                    <UserInfoSection/>
                </div>
                <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                     <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                        <MessageCreationForm/>
                     </div>
                    <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                        {
                            props.messagesList.map( (el) => {return <Post  messageText = {el}
                                                                                          key     = {el.messageId}
                            />})
                        }

                    </div>
                </div>
            </article>
        )
};

//---
const mapStateToProps = (state) => {
    return {
        messagesList:  ,
        message: state.profilePage,
        key:     state.profilePage.model.wall.messagesList.messageId
    }
};

const mapDispatchToProps = (dispatch) => {};

const ConnectedUserProfileSection = connect(
    mapStateToProps,
    mapDispatchToProps)(UserProfileSection);
//---

export default ConnectedUserProfileSection;