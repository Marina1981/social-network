import React from 'react';
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";


let AboutMeForm = (props) => {
    return  <form onSubmit={props.handleSubmit} className="about-me__form">
        <Field
            name="aboutMe"
            component="input"
            type="text"
            placeholder="about me"
            className="about-me__input"
            // value={props.creatingUserProfile_aboutMe}
            // onChange={
            //     (e) => {
            //         props.onChangeCreatingProfileAboutMe(e.currentTarget.value)
            //     }}
        />
        <button type="submit" className="about-me__button"
            // onClick={
            //     (e) => {
            //         props.onCreatingUserProfileFinishCommitted()
            //     }
            // }
        >
            ok
        </button>
    </form>
};

export default AboutMeForm = reduxForm({
    form: 'userProfileAboutMe'
})(AboutMeForm);