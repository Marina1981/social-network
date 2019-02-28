import React from 'react';
import './Post.css';
import authorPost from './images/apelsin2.png';
import Like       from "./images/like.png";



const Post = (props) => {

        return (
            <div className="c-post">
                <div className="c-post__author-post
                                c-post__author-post--positioned">
                        <img className="author-post__img" src={props.photos} alt={authorPost}/>
                </div>
                <div className="c-post__text-post
                                 c-post__text-post--positioned">
                    {props.messageDetailes.text}
                </div>
                <div className="c-post__like-box
                                c-post__like-box--positioned">

                        <span className="c-like__counter">{props.messageDetailes.likeCount}</span>
                        <img src={Like} className="c-like__img"  alt="like"
                             onClick={(e)=>{props.onMesaageLikeIncrementRequest(props.messageDetailes.messageId)}}/>

                </div>
            </div>
        );

};



export default Post;


