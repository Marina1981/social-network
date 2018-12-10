import React from 'react';
import './Post.css';

const Post = (props) => {

        return (
            <div className="c-post">
                <div className="c-post__label"/>
                <span className="c-post__text-post">
                    {props.text}
                </span>
            </div>
        );

};

export default Post;
