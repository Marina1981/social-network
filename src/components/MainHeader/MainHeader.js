import React from 'react';
import './MainHeader.css';
import logoIcon from './images/apelsin.png';
import {connect} from "react-redux";
import Redirect from "../DialogSection/DialogsSection";


const MainHeader = (props) =>{

        return (
                <header className="c-header-section">
                    <div className="c-header-section__logo-icon">
                       <img className='logo-img' src={logoIcon} alt='logo'/>
                    </div>
                    {props.status.loginStatus ?
                    <div className="c-header-section__user-info-block">
                            <div className="user-info-block__user-name"> {props.userName} </div>
                            <img src={props.userPic} className="user-info-block__userPic"/>
                    </div> : null}

                </header>
        );
    };
const mapStateToProps = (state) => {
    return{
        status:       state.loginPage.status,
        isLoggedIn:   state.auth.isLoggedIn,
        userPic:      state.auth.userPic,
        userName:     state.auth.userName
   }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};
//----
const ConnectedMainHeader = connect(
    mapStateToProps,
    mapDispatchToProps)(MainHeader);
//---

export default ConnectedMainHeader;