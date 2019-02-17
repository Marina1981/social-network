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

                    <span className="about-me__text">
                        {props.aboutMe}
                    </span>
                    <div className="about-me__form">
                        <input className="about-me__input" placeholder="about me"/>
                        <button className="about-me__button">
                            add
                        </button>
                    </div>
                </div>

                <div className="c-info__birth-date">
                    <span className=" c-info__decorated-label">
                        Birth date:
                    </span>
                    <span className="c-info__birth-date-value">
                      {props.userBirthDate}
                    </span>
                </div>
                <div className="c-info__residence">
                    <span className="c-info__decorated-label">
                         City:
                    </span>
                    <span className="c-info__residence-value">
                           {props.userCity}
                    </span>
                </div>
                <div className="c-info__education">
                    <span className="c-info__decorated-label">
                        Education:
                    </span>
                    <span className="c-info__education-value">
                           {props.userEducation}
                    </span>
                </div>
                <div className="c-info__website">
                    <span className="c-info__decorated-label">
                        Website:
                    </span>
                    <Link to='/' className="c-info__website-value">
                        {props.userWebSite}
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
                    <span className="contacts-block__skype-address">
                        {props.skype}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="skype"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__vk">
                    <span className="c-info__decorated-label">
                         vk:
                    </span>
                    <span className="contacts-block__vk-address">
                        {props.vk}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="vk"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__facebook">
                    <span className="c-info__decorated-label">
                         Facebook:
                    </span>
                    <span className="contacts-block__facebook-address">
                        {props.facebook}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="facebook"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__icq">
                    <span className="c-info__decorated-label">
                         icq:
                    </span>
                    <span className="contacts-block__icq-address">
                        {props.icq}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="icq"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__email">
                    <span className="c-info__decorated-label">
                         email:
                    </span>
                    <span className="contacts-block__email-address">
                        {props.email}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="email"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__googlePlus">
                    <span className="c-info__decorated-label">
                         googlePlus:
                    </span>
                    <span className="contacts-block__googlePlus-address">
                        {props.googlePlus}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="googlePlus"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__twitter">
                    <span className="c-info__decorated-label">
                         twitter:
                    </span>
                    <span className="contacts-block__twitter-address">
                        {props.twitter}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="twitter"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__instagram">
                    <span className="c-info__decorated-label">
                         instagram:
                    </span>
                    <span className="contacts-block__instagram-address">
                        {props.instagram}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="instagram"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__wwhatsApp">
                    <span className="c-info__decorated-label">
                         whatsApp:
                    </span>
                    <span className="contacts-block__wwhatsApp-address">
                        {props.whatsApp}
                    </span>
                    <div className="contacts-block__form">
                        <input className="contacts-block__input" placeholder="whatsApp"/>
                        <button className="contacts-block__button">
                            add
                        </button>
                    </div>
                </div>
                <div className="contacts-block__job-searches-block">
                    <span className="c-info__decorated-label">
                        looking For A Job
                    </span>
                    <input type="checkbox" className="job-searches-block__checkbox"/>
                </div>
                <div className="contacts-block__description-job">
                    <span className="c-info__decorated-label">
                        Description of work:
                    </span>
                    <div className="description-job__value">
                        {props.lookingForAJobDescription}
                    </div>
                    <div className="description-job__form">
                        <input className="description-job__input" placeholder="description"/>
                        <button className="description-job__button">
                            add
                        </button>
                    </div>
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

// <input className="status__input" placeholder='change status'
//        value={props.creatingUserStatus}
{/*onChange={*/
}
//            (e) => {
//                props.onChangeCreatingUserStatus(e.currentTarget.value)
//            }
//        }/>