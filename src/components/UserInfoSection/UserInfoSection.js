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
                <div className="c-info__user-name">
                    {props.userName}
                </div>

                <div className="c-info__birth-date">
                                <span className="c-info__birth-date-label
                                                 c-info__decorated-label">
                                    Дата рождения :
                                </span>
                    <span className="c-info__birth-date-value">
                                  {props.userBirthDate}
                                </span>
                </div>
                <div className="c-info__residence">
                                <span className="c-info__residence-label
                                                 c-info__decorated-label">
                                    Город :
                                </span>
                    <span className="c-info__residence-value">
                                   {props.userCity}
                                </span>
                </div>
                <div className="c-info__education">
                                <span className="c-info__education-label
                                                 c-info__decorated-label">
                                    Образование :
                                </span>
                    <span className="c-info__education-value">
                                   {props.userEducation}
                                </span>
                </div>
                <div className="c-info__website">
                                <span className="c-info__website-label
                                                 c-info__decorated-label">
                                    Веб-сайт :
                                </span>
                    <Link to='/' className="c-info__website-value">
                        {props.userWebSite}
                    </Link>
                </div>
            </div>
            <div className="userStatusBlock-positioned">
                <UserStatusBlockContainer/>
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