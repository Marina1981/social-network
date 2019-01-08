import React from 'react';
import './LoginSection.css';
import InputForm from "../InputForm/InputForm";



let inputMailText = [
        {
            text:     'Mail'
        }
   ];

let inputMail  = inputMailText.map ( (el) => {
    return  <InputForm text={el.text} />
} );

/*---------------------------------------------------------------*/
let inputPasswordText = [
    {
        text:     'Password'
     }

    ];


let inputPassword  = inputPasswordText.map( (el) => {
    return  <InputForm text={el.text} />
} );

/*---------------------------------------------------------------*/


const LoginSection = () =>{

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

                    {inputMail}

                </div>
                <div className="c-login-section__index-password-form--positioned">

                    {inputPassword}

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
    };


export default LoginSection;
