import React from 'react';
import './LoginSection.css';
import Redirect from "react-router/es/Redirect";
import {loginingProcessResults, loginingProcessStatuses} from "../../dal/axios-instance";
import handleSubmit from "redux-form/es/handleSubmit";
import Field from "redux-form/es/Field";


const LoginSection = (props) => {
    //---------------------------
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    //---------------------------
    let errorMessageBlock = (props.loginingError !== loginingProcessResults.SUCCESS) ?
        (<div className="error-block">
            <div className="error-message">
                {props.loginingErrorMessage}
            </div>
            {(props.loginingError === loginingProcessResults.CAPTCHA_REQUIRED_ERROR) ?
                (<div className="captcha-block">
                        <img className="captcha-block__images" src={props.captchaUrl} alt="captcha"/>
                        <input className="captcha-block__input" value={props.creatingCaptcha}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingCaptcha(e.currentTarget.value)
                                   }
                               }/>
                    </div>
                ) : null
            }
        </div>) : null;
    //---------------------------
    const {handleSubmit, pristine, reset, submitting} = props;
    //---------------------------
    //---------------------------
    return (

        <div className="c-login-section-wrapper">
            <div className="c-login-section">
                <div className="c-login-section__index-login-form--positioned">
                    <form onSubmit={handleSubmit} className="input-form">
                        <label className="input-form__label">
                            Email
                        </label>
                        <Field  name="inputEmail"
                                component="input"
                                type="email"
                                className="input-form__input" placeholder='email'
                               value={props.creatingUserLogin}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingLogin(e.currentTarget.value)
                                   }
                               }
                        />
                    </form>
                </div>
                <div className="c-login-section__index-password-form--positioned">
                    <form onSubmit={handleSubmit} className="input-form">
                        <span className="input-form__label">
                            Password
                        </span>
                        <input className="input-form__input" placeholder='password' type="password"
                               value={props.creatingUserPassword}
                               onChange={
                                   (e) => {
                                       props.onChangeCreatingPassword(e.currentTarget.value)
                                   }
                               }/>
                    </form>
                </div>
                <div className="c-login-section__button-box">
                    <input className="button-box__checkbox" type="checkbox"
                           onChange={
                               (e) => {
                                   props.onChangeRememberMeFlag(e.currentTarget.checked)
                               }
                           }/>
                    <span className="checkbox-label">
                            remember me
                        </span>
                    <button className="button-box__button" onClick={
                        (e) => {
                            props.onLoginButtonClick();
                        }}
                            disabled={props.loginingStatus === loginingProcessStatuses.IN_PROGRESS}>
                        Login
                    </button>
                </div>
                {/*------------------------------------------------*/}
                {errorMessageBlock}
                {/*------------------------------------------------*/}
                {/*<button className="c-login-section__registration-button">*/}
                {/*registration*/}
                {/*</button>*/}
            </div>
        </div>

    );
};

export default LoginSection;


{/*<div className="container" aria-busy="true"*/
}
{/*aria-label="Loading" role="progressbar">*/
}
{/*<div className="swing">*/
}
{/*<div className="swing-l"/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div className="swing-r"/>*/
}
{/*</div>*/
}
{/*<div className="shadow">*/
}
{/*<div className="shadow-l"/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div/>*/
}
{/*<div className="shadow-r"/>*/
}
{/*</div>*/
}
{/*</div>*/
}


