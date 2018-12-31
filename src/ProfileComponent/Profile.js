import React  from 'react';
import './Profile.css';
import Post       from './../PostComponent/Post.js';
import RecordForm from "../RecordFormComponent/RecordForm";
import Info       from "../InfoComponent/Info";



/*let PostsText = [
    {
        text: 'Привет!!!'
   },
    {
        text: 'почему не лайкнул мой пост?!!'
    }];

let post = PostsText.map( (el) => {
   return <Post  text={el.text}/>
});*/


// атрибуты:
// userInfo: объект - {userPicURL: строка - адрес картинки юзерпика,
//                     userName:   строка - имя пользователя
//                     userBirthDate: строка - дата рождения
//                     userPicURL:    строка - адрес картинки юзерпика}
// recordFormData: объект - { placeholderText: строка - поясняющая надпись}
// recordFormCallbacks: объект - {onAddRecordButtonClicked: колбэк вида function(e) - вызывается при нажатии кнопки "Отправить" }
 const Profile = (props) =>{

        return (
            <article className="c-profile-section">
                <div className="c-profile-section__head-image
                                c-profile-section__head-image--positioned"/>
                <div className="c-profile-section__info-block">
                    <Info  userInfo = {props.userInfo} />
                </div>
                <div className="c-profile-section__wall-block
                                c-profile-section__wall-block--positioned">
                     <div className="wall-block__record-form
                                     wall-block__record-form--positioned">
                        <RecordForm  creatingMessage                   = {props.wall.creatingMessage}
                                     onCreatingMessageChanged          = {props.wall.onCreatingMessageChanged}
                                     onCreatingMessageFinishCommitted  = {props.wall.onCreatingMessageFinishCommitted}/>
                     </div>
                    <div className="wall-block__posts-block
                                    wall-block__posts-block--positioned">
                        {
                            props.wall.messagesList.map( (el) => {return <Post  userInfo = {props.userInfo}
                                                                                          messageDetailes={el}
                                                                                          key={el.messageId}
                                                                                          onMesaageLikeIncrementRequest={props.wall.onMesaageLikeIncrementRequest}/>})
                        }

                    </div>
                </div>
            </article>
        )
};

export default  Profile;