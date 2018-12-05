import React, { Component } from 'react';
import './Header.css';
import logoIcon from './images/run_sustainable_business.png';


class Header extends Component {
    render() {
        return (
                <header className="c-header-section">
                    <div className="c-header-section__logo-icon">
                       <img className='logo-img' src={logoIcon} alt='logo'/>
                    </div>
                </header>
        );
    }
}

export default Header;