import React from 'react';
import './Post.css';
import authorPost from './images/apelsin2.png';
import Like       from "./images/like.png";
import {INCREMENT_POST_LIKE_COUNT} from "../../../../redux/modules/profile";
import {connect} from "react-redux";

const Post = (props) => {

        return (
            <div className="c-post">
                <div className="c-post__author-post
                                c-post__author-post--positioned">
                        <img className="author-post__img" src={props.userPicURL} alt={authorPost}/>
                </div>
                <div className="c-post__text-post
                                 c-post__text-post--positioned">
                    {props.messageText}
                </div>
                <div className="c-post__like-box
                                c-post__like-box--positioned">

                        <span className="c-like__counter">{props.likeCount}</span>
                        <img src={Like} className="c-like__img"  alt="like"
                             onClick={(e)=>{props.onPostLikeIncrementRequest(props.messageId)}}/>

                </div>
            </div>
        );

};

//---
const mapStateToProps = (state) => {
        return {
                userPicURL:    state.profilePage.model.userInfo.userPicURL,
                messageText:   state.profilePage.view.wall.messagesList.text,
                likeCount:     state.profilePage.view.wall.messagesList.likeCount,
                messageId:     state.profilePage.view.wall.messagesList.messageId
        }
};

const mapDispatchToProps = (dispatch) => {
        return{
                onPostLikeIncrementRequest: (messageId) => {
                        dispatch({
                                type:      INCREMENT_POST_LIKE_COUNT,
                                messageId: messageId
                        })
                }
        }
};

const ConnectedPost = connect(
    mapStateToProps,
    mapDispatchToProps)(Post);
//---

export default  ConnectedPost;


