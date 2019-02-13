import React from 'react';
import './MainHeader.css';
import logoIcon from './images/logo.svg';
import {NavLink} from "react-router-dom";
import exit from "./images/exit.svg"



const MainHeader = (props) => {

    return (
        <header className="c-header-section">
            <div className="c-header-section__logo-icon">
                <img className='logo-img' src={logoIcon} alt='logo'/>
            </div>

            {
                props.isAuth &&
                <>
                    <div className="c-header-section__search-block">
                        <NavLink to="/Users" className="search-block__label">
                            search
                        </NavLink>
                        <input className="search-block__input"/>
                    </div>
                    <div className="c-header-section__user-info-block">
                        <div className="user-info-block__user-name"> {props.userName} </div>
                        <img src={props.userPicURL} className="user-info-block__userPic" alt="userPic"/>
                    </div>
                    <div  className="c-header-section__logout" onClick={props.onLogOut}>
                        <img className="logout-img" src={exit}/>
                    </div>
                </>
            }
            {
                !props.isAuth &&
                <NavLink to="/Login" className="c-header-section__signin">
                    Sign In
                </NavLink>
            }
        </header>
    );
};

export default MainHeader;