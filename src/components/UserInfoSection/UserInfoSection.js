import React from 'react';
import './UserInfoSection.css';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import UserStatusBlockContainer from "../../containers/UserStatusBlockContainer/UserStatusBlockContainer";


const UserInfoSection = (props) => {
    return (
        <div className="c-info
                        c-info__c-info--positioned">
            <div className="c-info__short-info
                            c-info__short-info--positioned">
                <div className="contacts-block__about-me">
                    <span className="c-info__decorated-label">
                       AboutMe:
                    </span>
                    {
                        (props.creatingUserProfileAboutMe === null) ?
                            <div className="about-me__text" onClick={props.onAboutMeChangeRequest}>
                               {props.userProfile.aboutMe}
                            </div> :
                            <div className="about-me__form">
                                <input className="about-me__input" placeholder="about me"
                                       value={props.creatingUserProfileAboutMe}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileAboutMe(e.currentTarget.value)
                                           }}/>
                                <button className="about-me__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>
                                    add
                                </button>
                            </div>
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
                <div className="c-info__residence">
                    <span className="c-info__decorated-label">
                         City:
                    </span>
                    <span className="c-info__residence-value">
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
                    <UserStatusBlockContainer/>
                </div>
            </div>

            <div className="c-info__contacts-block">
                <div className="contacts-block__decorated-label">
                    My contacts:
                </div>
                <div className="contacts-block__skype">
                    <span className="c-info__decorated-label">
                         Skype:
                    </span>
                    {
                        (props.creatingUserProfileSkype === null) ?
                            <div className="contacts-block__skype-address" onClick={props.onSkypeChangeRequest}>
                                {props.userProfile.skype}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="skype"
                                       value={props.creatingUserProfileSkype}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileSkype(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__vk">
                    <div className="c-info__decorated-label" onClick={props.onVkChangeRequest}>
                         vk:
                    </div>
                    {
                        (props.creatingUserProfileVk === null) ?
                            <span className="contacts-block__vk-address">
                                {props.userProfile.vk}
                            </span> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="vk"
                                       value={props.creatingUserProfileVk}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileVk(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__facebook">
                    <span className="c-info__decorated-label">
                         Facebook:
                    </span>
                    {
                        (props.creatingUserProfileFacebook === null) ?
                            <div className="contacts-block__facebook-address" onClick={props.onFacebookChangeRequest}>
                                 {props.userProfile.facebook}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="facebook"
                                       value={props.creatingUserProfileFacebook}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileFacebook(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__icq">
                    <span className="c-info__decorated-label">
                         icq:
                    </span>
                    {
                        (props.creatingUserProfileIcq === null) ?
                            <div className="contacts-block__icq-address" onClick={props.onIcqChangeRequest}>
                                 {props.userProfile.icq}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="icq"
                                       value={props.creatingUserProfileIcq}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileIcq(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__email">
                    <span className="c-info__decorated-label">
                         email:
                    </span>
                    {
                        (props.creatingUserProfileEmail === null) ?
                            <div className="contacts-block__email-address" onClick={props.onEmailChangeRequest}>
                                {props.userProfile.email}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="email"
                                       value={props.creatingUserProfileEmail}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileEmail(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__googlePlus">
                    <span className="c-info__decorated-label">
                         googlePlus:
                    </span>
                    {
                        (props.creatingUserProfileGooglePlus === null) ?
                            <div className="contacts-block__googlePlus-address" onClick={props.onGooglePlusChangeRequest}>
                                {props.userProfile.googlePlus}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="googlePlus"
                                       value={props.creatingUserProfileGooglePlus}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileGooglePlus(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__twitter">
                    <span className="c-info__decorated-label">
                         twitter:
                    </span>
                    {
                        (props.creatingUserProfileTwitter === null) ?
                            <div className="contacts-block__twitter-address" onClick={props.onTwitterChangeRequest}>
                                {props.userProfile.twitter}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="twitter"
                                       value={props.creatingUserProfileTwitter}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileTwitter(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__instagram">
                    <span className="c-info__decorated-label">
                         instagram:
                    </span>
                    {
                        (props.creatingUserProfileInstagram === null) ?
                            <div className="contacts-block__instagram-address" onClick={props.onInstagramChangeRequest}>
                                {props.userProfile.instagram}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="instagram"
                                       value={props.creatingUserProfileInstagram}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileInstagram(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__wwhatsApp">
                    <span className="c-info__decorated-label">
                         whatsApp:
                    </span>
                    {
                        (props.creatingUserProfileWhatsApp === null) ?
                            <div className="contacts-block__wwhatsApp-address" onClick={props.onWhatsAppChangeRequest}>
                                {props.userProfile.whatsApp}
                            </div> :
                            <div className="contacts-block__form">
                                <input className="contacts-block__input" placeholder="whatsApp"
                                       value={props.creatingUserProfileWhatsApp}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileWhatsApp(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="contacts-block__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block__job-searches-block">
                    <div className="c-info__decorated-label">
                        looking For A Job
                    </div>
                    <input type="checkbox" className="job-searches-block__checkbox"
                           onChange={
                               (e) => {
                                   {props.onChangeRememberMeFlag(e.currentTarget.checked)}
                               }
                           }/>
                </div>
                <div className="contacts-block__description-job">
                    <span className="c-info__decorated-label">
                        Description of work:
                    </span>
                    {
                        (props.creatingLookingForAJobDescription === null) ?
                            <div className="description-job__value" onClick={props.onLookingForAJobDescriptionChangeRequest}>
                                {props.userProfile.lookingForAJobDescription}
                            </div> :
                            <div className="description-job__form">
                                <input className="description-job__input" placeholder="description"
                                       value={props.creatingLookingForAJobDescription}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileLookingForAJobDescription(e.currentTarget.value)
                                           }
                                       }/>
                                <button className="description-job__button"
                                        onClick={
                                            (e) =>
                                            {props.onCreatingUserProfileFinishCommitted()}
                                        }>>
                                    add
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

