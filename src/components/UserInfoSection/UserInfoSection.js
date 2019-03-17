import React from 'react';
import './UserInfoSection.css';
import PropTypes from 'prop-types';
import AboutMeForm from "../../containers/AboutMeForm/AboutMeForm";
import StatusForm from "../../containers/StatusForm/StatusForm";


let UserInfoSection = (props) => {
    const {handleSubmit} = props;
    const submit = (values) => {
        props.onCreatingUserProfileFinishCommitted(values);
    };
    const submitStatus = (values) => {
        props.onCreatingUserStatusFinishCommitted(values);
    };

    return (
        <div className="c-info
                        c-info__c-info--positioned">
            <div className="c-info__contacts-block">
                <div className="contacts-block__decorated-my-contacts">
                    My contacts:
                </div>
                <div className="userStatusBlock-positioned">
                    <div className="user-status__status-block">
                         <span className="status-block__status-title">
                             Status:
                         </span>
                        {
                            (props.creatingUserStatus === null) ?
                            <div className="user_status__text"
                                 onClick={props.isOwner && props.onUserStatusChangeRequest}>
                                {props.status}
                            </div> :
                            <StatusForm onSubmit={submitStatus} {...props}/>
                        }
                    </div>
                </div>
                <div className="contacts-block__about-me">
                    <label className="about-me_label">
                        about me:
                    </label>
                    {
                        (props.creatingUserProfile_aboutMe === null) ?
                        <div className="contacts-block__text-about-me"
                             onClick={() => props.isOwner && props.onAboutMeChangeRequest(props.isOwner)}>
                            {props.userProfile.aboutMe ? props.userProfile.aboutMe : '-----'}
                        </div> :
                        <AboutMeForm onSubmit={submit} {...props}/>
                    }
                </div>

                {
                    Object.keys(props.userProfile.contacts).map(key => {

                        let creatingUserProfileContactValue = props.profilePage["creatingUserProfile_" + key];

                        return <div className="contacts-block" key={key}>
                                <span className="c-info__decorated-label">
                                    {key}:
                                </span>
                            {
                                (creatingUserProfileContactValue === null) ?
                                    <div className="contacts-block__text"
                                         onClick={() => props.isOwner && props.onContactsChangeRequest(key)}>
                                        {props.userProfile.contacts[key] ? props.userProfile.contacts[key] : '-----'}
                                    </div> :

                                    <div className="contacts-block__form">
                                        <input className="contacts-block__input" placeholder={key}
                                               value={creatingUserProfileContactValue}
                                               onChange={
                                                   (e) => {
                                                       props.onChangeCreatingContacts(e.currentTarget.value, key)
                                                   }
                                               }/>
                                        <button className="contacts-block__button"
                                                onClick={
                                                    (e) => {
                                                        props.onCreatingUserProfileFinishCommitted({})
                                                    }
                                                }>
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
                        (props.creatingUserProfile_lookingForAJobDescription === null) ?
                            <div className="contacts-block__text"
                                 onClick={() => props.onLookingForAJobDescriptionChangeRequest(props.isOwner)}>
                                {props.userProfile.lookingForAJobDescription}
                            </div> :
                            <div className="description-job__form">
                                <textarea className="description-job__textarea" placeholder="description"
                                          value={props.creatingUserProfile_lookingForAJobDescription}
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
                                        }>
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

