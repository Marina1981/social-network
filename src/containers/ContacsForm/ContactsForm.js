import React from 'react';
import {reduxForm} from "redux-form";
import connect from "react-redux/es/connect/connect";
import Field from "redux-form/es/Field";


let ContactsForm = (props) => {
  return (
         <></>
  )
};

ContactsForm = reduxForm({
    form: 'userProfileContacts'
})(ContactsForm);

export default ContactsForm = connect(
    state => ({
       // initialValues: state.profilePage.userProfile,
        //contacts: state.profilePage.userProfile.contacts
    }), null// bind account loading action creator
)(ContactsForm);