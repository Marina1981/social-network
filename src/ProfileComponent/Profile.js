import React, { Component } from 'react';
import './Profile.css';
import Post from './../PostComponent/Post.js';
import RecordForm from "../RecordFormComponent/RecordForm";
import Info from "../InfoComponent/Info";



let PostsText = [
    {
        text: 'Привет!!!'
   },
    {
        text: 'почему не лайкнул мой пост?!!'
    }];

let post = PostsText.map( (el) => {
   return <Post  text={el.text}/>
});




class Profile extends Component {
    render() {
        return (
            <article className="c-profile-section">
                <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>

                         <Info/>

                <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                     <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                        <RecordForm/>
                     </div>
                    <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                        {post}

                    </div>
                </div>
            </article>
        );
    }
}

export default  Profile;