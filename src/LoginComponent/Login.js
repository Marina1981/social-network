import React, { Component } from 'react';
import './LoginPage.css';
import IndexForm from "../IndexFormComponent/IndexForm";

class LoginPage extends Component {
    render() {
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

                     <IndexForm/>

                </div>
                <div className="c-login-section__index-password-form--positioned">

                     <IndexForm/>

                </div>
                <div className="c-login-section__button-box">
                    <input className="button-box__checkbox" type="checkbox"  checked />
                    <span className="checkbox-label">
                        remember me
                    </span>
                    <button className="button-box__button">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}

export default LoginPage;
