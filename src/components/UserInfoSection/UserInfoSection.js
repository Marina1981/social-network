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
                <span className="c-info__decorated-about-me">
                       AboutMe:
                </span>
                <div className="contacts-block__about-me">

                    {
                        (props.creatingUserProfile_aboutMe === null) ?
                            <div className="contacts-block__text" onClick={() => props.onAboutMeChangeRequest(props.isOwner)}>
                                {props.userProfile.aboutMe}
                            </div> :
                            <div className="about-me__form">
                                <input className="about-me__input" placeholder="about me"
                                       value={props.creatingUserProfile_aboutMe}
                                       onChange={
                                           (e) => {
                                               props.onChangeCreatingProfileAboutMe(e.currentTarget.value)
                                           }}/>
                                <button className="about-me__button"
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
                    <UserStatusBlockContainer/>
                </div>
            </div>

            <div className="c-info__contacts-block">
                <div className="contacts-block__decorated-my-contacts">
                    My contacts:
                </div>
                {
                    Object.keys(props.userProfile.contacts).map( key => {

                      return <div className="contacts-block" key={key}>
                                <span className="c-info__decorated-label">
                                    {key}:
                                </span>
                                      {
                                          (props["creatingUserProfile_" + key] === null) ?
                                              <div className="contacts-block__text" onClick={() => props.onContactsChangeRequest(key)}>
                                                  {props.userProfile.contacts[key]}
                                              </div> :
                                              <div className="contacts-block__form">
                                                  <input className="contacts-block__input" placeholder={key}
                                                         value={props["creatingUserProfile_" + key]}
                                                         onChange={
                                                             (e) => {
                                                                 props.onChangeCreatingContacts(e.currentTarget.value)
                                                             }
                                                         }/>
                                                  <button className="contacts-block__button"
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
            {/*    <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         Skype:
                    </span>
                    {
                        (props.creatingUserProfileSkype === null) ?
                            <div className="contacts-block__text" onClick={props.onSkypeChangeRequest}>
                                {props.userProfile.contacts.skype}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <div className="c-info__decorated-label">
                        vk:
                    </div>
                    {
                        (props.creatingUserProfileVk === null) ?
                            <div className="contacts-block__text" onClick={props.onVkChangeRequest}>
                                {props.userProfile.contacts.vk}
                            </div> :
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         Facebook:
                    </span>
                    {
                        (props.creatingUserProfileFacebook === null) ?
                            <div className="contacts-block__text" onClick={props.onFacebookChangeRequest}>
                                {props.userProfile.contacts.facebook}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         icq:
                    </span>
                    {
                        (props.creatingUserProfileIcq === null) ?
                            <div className="contacts-block__text" onClick={props.onIcqChangeRequest}>
                                {props.userProfile.contacts.icq}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         email:
                    </span>
                    {
                        (props.creatingUserProfileEmail === null) ?
                            <div className="contacts-block__text" onClick={props.onEmailChangeRequest}>
                                {props.userProfile.contacts.email}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         googlePlus:
                    </span>
                    {
                        (props.creatingUserProfileGooglePlus === null) ?
                            <div className="contacts-block__text"
                                 onClick={props.onGooglePlusChangeRequest}>
                                {props.userProfile.contacts.googlePlus}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         twitter:
                    </span>
                    {
                        (props.creatingUserProfileTwitter === null) ?
                            <div className="contacts-block__text" onClick={props.onTwitterChangeRequest}>
                                {props.userProfile.contacts.twitter}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         instagram:
                    </span>
                    {
                        (props.creatingUserProfileInstagram === null) ?
                            <div className="contacts-block__text" onClick={props.onInstagramChangeRequest}>
                                {props.userProfile.contacts.instagram}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>
                <div className="contacts-block">
                    <span className="c-info__decorated-label">
                         whatsApp:
                    </span>
                    {
                        (props.creatingUserProfileWhatsApp === null) ?
                            <div className="contacts-block__text" onClick={props.onWhatsAppChangeRequest}>
                                {props.userProfile.contacts.whatsApp}
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
                                            (e) => {
                                                props.onCreatingUserProfileFinishCommitted()
                                            }
                                        }>>
                                    ok
                                </button>
                            </div>
                    }
                </div>*/}
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
                            <div className="contacts-block__text" onClick={props.onLookingForAJobDescriptionChangeRequest}>
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

