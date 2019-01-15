import React from 'react';
import './LoginSection.css';

import {connect} from "react-redux";



const LoginSection = (props) =>{

        return (
            <div className="c-login-section">
                <div className="c-login-section__index-column
                                c-login-section__index-column--positioned">
                    <span className='index-column__index-login'>
                        Login
                    </span>
                    <span className='index-column__index-registration'>
                        Registration
                     </span>
                </div>
                <div className="c-login-section__index-login-form--positioned">
                    <div className="input-form">
                        <span className="input-form__label">
                            Login
                        </span>
                        <input className="input-form__input" placeholder= 'login' />
                    </div>
                </div>
                <div className="c-login-section__index-password-form--positioned">
                    <div className="input-form">
                        <span className="input-form__label">
                            Password
                        </span>
                        <input className="input-form__input" placeholder= 'password' />
                    </div>
                </div>
                <div className="c-login-section__button-box">
                    <input className="button-box__checkbox" type="checkbox" />
                    <span className="checkbox-label">
                        remember me
                    </span>
                    <button className="button-box__button">
                        Login
                    </button>
                </div>
            </div>
        );
    };
//----
const mapStateToProps = (state) => {


};

const mapDispatchToProps = (dispatch) => {

};

//----
const ConnectedLoginSection = connect(
    mapStateToProps,
    mapDispatchToProps)(LoginSection);
//---
export default ConnectedLoginSection;
