import React from 'react';
import Field from "redux-form/es/Field";
import {reduxForm} from "redux-form";
import {userProfileUpdatingProcessProfile} from "../../dal/axios-instance";
import {connect} from "react-redux";


let AboutMeForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="about-me__form">
            <>
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
                <button type="submit" className="about-me__button">
                    ok
                </button>
            </>
        </form>
    )
};

AboutMeForm = reduxForm({
    form: 'userProfileAboutMe'
})(AboutMeForm);

export default AboutMeForm = connect(
    state => ({
        initialValues: state.profilePage.userProfile,
        status: state.profilePage.userProfileUpdatingProfile// pull initial values from account reducer
    }), null// bind account loading action creator
)(AboutMeForm);