import React from 'react';
import {reduxForm} from "redux-form";
import Field from "redux-form/es/Field";
import {loginingProcessStatuses} from "../../redux/statusСonstants/statusConstants";


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="c-login-section__index-login-form--positioned">
                <div className="input-form">
                    <label className="input-form__label">
                        Email
                    </label>
                    <Field
                        name="email"
                        component='input'
                        type="email"
                        className="input-form__input"
                        placeholder='email'
                        // value={props.creatingUserLogin}
                        // onChange={
                        //     (e) => {
                        //         props.onChangeCreatingLogin(e.currentTarget.value)
                        //     }
                        // }
                    />
                </div>
            </div>
            <div className="c-login-section__index-password-form--positioned">
                <div className="input-form">
                    <label className="input-form__label">
                        Password
                    </label>
                    <Field
                        name="password"
                        component='input'
                        type="password"
                        className="input-form__input"
                        placeholder='password'
                        // value={props.creatingUserPassword}
                        // onChange={
                        //     (e) => {
                        //         props.onChangeCreatingPassword(e.currentTarget.value)
                        //     }
                        // }
                    />
                </div>
            </div>
            <div className="c-login-section__button-box">
                <Field
                    name="rememberMe"
                    component='input'
                    type="checkbox"
                    className="button-box__checkbox"
                    // onChange={
                    //     (e) => {
                    //         props.onChangeRememberMeFlag(e.currentTarget.checked)
                    //     }
                    // }
                />
                <span className="checkbox-label">
                            remember me
                </span>
                <button type="submit" className="button-box__button"
                    // onClick={
                    //     (e) => {
                    //         props.onLoginButtonClick();
                    //     }}
                        disabled={props.loginingStatus === loginingProcessStatuses.IN_PROGRESS}>
                    Login
                </button>
            </div>
        </form>
    )
};

export default LoginForm = reduxForm({
    form: 'login'
})(LoginForm);