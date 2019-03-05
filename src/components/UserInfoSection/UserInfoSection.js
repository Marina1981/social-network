import React from 'react';
import './UserInfoSection.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import AboutMeForm from "../../containers/AboutMeForm/AboutMeForm";



let UserInfoSection = (props) => {
    const {handleSubmit} = props;
    const submit = (values) => {
        props.onCreatingUserProfileFinishCommitted(values);
    };
    return (
        <div className="c-info
                        c-info__c-info--positioned">
            <div className="c-info__short-info
                            c-info__short-info--positioned">
                <span className="c-info__decorated-about-me">
                       AboutMe:
                </span>
                <div className="contacts-block__about-me">

                    {
                        (props.creatingUserProfile_aboutMe === null) ?
                            <div className="contacts-block__text-about-me"
                                 onClick={() => props.isOwner && props.onAboutMeChangeRequest(props.isOwner)}>
                                {props.userProfile.aboutMe}
                            </div> :
                           <AboutMeForm onSubmit={submit} {...props}/>
                    }
                </div>
                <div className="c-info__birth-date">
                    <span className=" c-info__decorated-label">
                        Birth date:
                    </span>
                    <span className="c-info__birth-date-value">
                      {props.userInfo.userBirthDate}
                    </span>
                </div>
                <div className="c-info__city">
                    <span className="c-info__decorated-label">
                         City:
                    </span>
                    <span className="c-info__city-value">
                           {props.userInfo.userCity}
                    </span>
                </div>
                <div className="c-info__education">
                    <span className="c-info__decorated-label">
                        Education:
                    </span>
                    <span className="c-info__education-value">
                           {props.userInfo.userEducation}
                    </span>
                </div>
                <div className="c-info__website">
                    <span className="c-info__decorated-label">
                        Website:
                    </span>
                    <Link to='/' className="c-info__website-value">
                        {props.userInfo.userWebSite}
                    </Link>
                </div>
                <div className="userStatusBlock-positioned">
                    <div className="user-status__status-block">
                         <span className="status-block__status-title">
                             Status:
                         </span>
                        {(props.creatingUserStatus === null) ?
                            <div className="user_status__text" onClick={props.onUserStatusChangeRequest}>
                                {props.status}
                            </div> :
                            <div className="user-status__form">
                                <input className="user-status__input" placeholder='change status'
                                       value={props.creatingUserStatus}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingUserStatus(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="user-status__button"
                                        onClick={(e) => {
                                            props.onCreatingUserStatusFinishCommitted();
                                        }}>
                                    add
                                </button>
                            </div>}
                    </div>
                </div>
            </div>

            <div className="c-info__contacts-block">
                <div className="contacts-block__decorated-my-contacts">
                    My contacts:
                </div>
                {
                    Object.keys(props.userProfile.contacts).map(key => {
                        return <div className="contacts-block" key={key}>
                                <span className="c-info__decorated-label">
                                    {key}:
                                </span>
                            {
                                (props["creatingUserProfile_" + key] === null) ?
                                    <div className="contacts-block__text"
                                         onClick={() => props.onContactsChangeRequest(key)}>
                                        {props.userProfile.contacts[key]}
                                    </div> :

                                    <div className="contacts-block__form">
                                        <input className="contacts-block__input" placeholder={key}
                                               value={props["creatingUserProfile_" + key]}
                                               onChange={
                                                   (e) => {
                                                       props.onChangeCreatingContacts(e.currentTarget.value, key)
                                                   }
                                               }/>
                                        < button className="contacts-block__button"
                                                 onClick={
                                                     (e) => {
                                                         props.onCreatingUserProfileFinishCommitted()
                                                     }
                                                 }>>
                                            ok
                                        </button>
                                    </div>
                            }
                        </div>
                    })
                }
                <div className="contacts-block">
                    <div className="c-info__decorated-label">
                        looking For A Job
                    </div>
                    <input type="checkbox" className="job-searches-block__checkbox"
                           onChange={
                               (e) => {
                                   {
                                       props.onChangeRememberMeFlag(e.currentTarget.checked)
                                   }
                               }
                           }/>
                </div>
                <div className="contacts-block__description-job">
                    <span className="c-info__decorated-label">
                        Description of work:
                    </span>
                    {
                        (props.creating_lookingForAJobDescription === null) ?
                            <div className="contacts-block__text"
                                 onClick={() => props.onLookingForAJobDescriptionChangeRequest(props.isOwner)}>
                                {/*onClick={props.onLookingForAJobDescriptionChangeRequest}*/}
                                {props.userProfile.lookingForAJobDescription}
                            </div> :
                            <div className="description-job__form">
                                <textarea className="description-job__textarea" placeholder="description"
                                          value={props.creating_lookingForAJobDescription}
                                          onChange={
                                              (e) => {
                                                  props.onChangeCreatingProfileLookingForAJobDescription(e.currentTarget.value)
                                              }
                                          }/>
                                <button className="description-job__button"
                                        onClick={
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};


//---


UserInfoSection.propTypes = {
    userInfo: PropTypes.object.isRequired,
};

export default UserInfoSection;

