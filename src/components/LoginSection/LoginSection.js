import React from 'react';
import './LoginSection.css';
import Redirect from "react-router/es/Redirect";
import {loginingProcessResults} from "../../dal/axios-instance";
import LoginForm from "../../containers/LoginForm/LoginForm";



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
                <LoginForm  onSubmit={submit} {...props}/>
                {/*------------------------------------------------*/}
                {errorMessageBlock}
                {/*------------------------------------------------*/}
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


