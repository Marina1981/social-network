import React from 'react';
import {reduxForm} from "redux-form";
import connect from "react-redux/es/connect/connect";
import Field from "redux-form/es/Field";

let StatusForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="user-status__form">
            <Field
                name="userStatus"
                component="input"
                type="text"
                className="user-status__input"
                placeholder='change status'
                   // value={props.creatingUserStatus}
                   // onChange={
                   //     (e) => {
                   //         props.onChangeCreatingUserStatus(e.currentTarget.value)
                   //     }
                   // }
            />
            <button type="submit" className="user-status__button"
                    // onClick={(e) => {
                    //     props.onCreatingUserStatusFinishCommitted();
                    // }}
            >
                add
            </button>
        </form>
    )
};

StatusForm = reduxForm({
    form: 'userStatus'
})(StatusForm);

export default StatusForm = connect(
    state => ({
        initialValues: state.userStatusBlock.userStatus,
        //status: state.profilePage.userProfileUpdatingProfile// pull initial values from account reducer
    }), null// bind account loading action creator
)(StatusForm);