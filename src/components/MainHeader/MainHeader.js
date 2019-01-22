import React from 'react';
import './MainHeader.css';
import logoIcon from './images/apelsin.png';




const MainHeader = (props) =>{

        return (
                <header className="c-header-section">
                    <div className="c-header-section__logo-icon">
                       <img className='logo-img' src={logoIcon} alt='logo'/>
                    </div>
                    {props.isLoggedIn ?
                    <div className="c-header-section__user-info-block">
                            <div className="user-info-block__user-name"> {props.userName} </div>
                            <img src={props.userPic} className="user-info-block__userPic"/>
                    </div> : null}

                </header>
        );
    };

export default MainHeader;