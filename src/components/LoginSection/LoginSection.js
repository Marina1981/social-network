import React from 'react';
import './LoginSection.css';
import Redirect from "react-router/es/Redirect";
import LoginForm from "../../containers/LoginForm/LoginForm";
import Loading from "../Loading/Loading";
import {loginingProcessResults, loginingProcessStatuses} from "../../redux/statusСonstants/statusConstants";


let LoginSection = (props) => {
    //---------------------------
    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
    //---------------------------
    const submit = (values) => {
        props.onLoginButtonClick(values);
    };
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

    return (

        <div className="c-login-section-wrapper">
            <div className="c-login-section">
                {loginingProcessStatuses.READY ?
                    <LoginForm  onSubmit={submit} {...props}/> :
                    <Loading/>
                }
                {/*------------------------------------------------*/}
                {errorMessageBlock}
                {/*------------------------------------------------*/}
            </div>
        </div>

    );
};

export default LoginSection;



