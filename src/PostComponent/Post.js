import React from 'react';
import './Post.css';
import authorPost from './images/apelsin2.png';

const Post = (props) => {

        return (
            <div className="c-post">
                <div className="c-post__author-post
                                c-post__author-post--positioned">
                        <img className="author-post__img" src={authorPost}/>
                </div>
                <span className="c-post__text-post
                                 c-post__text-post--positioned">
                    {props.text}
                </span>
                <span className="c-post__like-counter
                                 c-post__like-counter--positioned">
                    8
                </span>
            </div>
        );

};

export default Post;
