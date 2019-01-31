import React from 'react';
import './MainHeader.css';
import logoIcon from './images/apelsin.png';
import {NavLink} from "react-router-dom";


const MainHeader = (props) => {
    return (
        <header className="c-header-section">
            <div className="c-header-section__logo-icon">
                <img className='logo-img' src={logoIcon} alt='logo'/>
            </div>
            {
                props.isAuth &&
                <div className="c-header-section__user-info-block">
                    <div className="user-info-block__user-name"> {props.userName} </div>
                    <img src={props.userPic} className="user-info-block__userPic" alt="userPic"/>
                </div>
            }
            {
                !props.isAuth &&
                <NavLink to="/Login" className="c-header-section__sugnin">
                    Sign In
                </NavLink>
            }
        </header>
    );
};

export default MainHeader;