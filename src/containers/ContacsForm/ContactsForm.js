import React from 'react';
import {reduxForm} from "redux-form";
import connect from "react-redux/es/connect/connect";
import Field from "redux-form/es/Field";


let ContactsForm = (props) => {
    debugger
  return (
          <form onSubmit={props.handleSubmit} className="contacts-block__form">
                  <Field
                      name={props.contact}
                      component="input"
                      type="text"
                      className="contacts-block__input" placeholder={key}

                      // value={creatingUserProfileContactValue}
                      // onChange={
                      //     (e) => {
                      //         props.onChangeCreatingContacts(e.currentTarget.value, key)
                      //     }
                      // }
                  />
                  <button type="submit"  className="contacts-block__button"
                      // onClick={
                      //     (e) => {
                      //         props.onCreatingUserProfileFinishCommitted({})
                      //     }
                      // }
                  >
                      ok
                  </button>
          </form>
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