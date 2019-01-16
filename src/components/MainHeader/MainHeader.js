import React from 'react';
import './MainHeader.css';
import logoIcon from './images/apelsin.png';


const MainHeader = () =>{

        return (
                <header className="c-header-section">
                    <div className="c-header-section__logo-icon">
                       <img className='logo-img' src={logoIcon} alt='logo'/>
                    </div>
                    <div className="c-header-section__output">
                       выйти
                    </div>
                </header>
        );
    };


export default MainHeader;