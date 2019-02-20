import React from 'react';
import reducer, {types} from "../../redux/modules/authRedux";


it('data added successfully', () => {
   let newState = reducer ({
       userLogin: null,
       userEmail: null
   }, {type: types.SET_USER_AUTH_DATA, userLogin: 'mahaha', userEmail: '1234'});
    expect(newState.userLogin.length).toEqual(1);
    expect(newState.userEmail.length).toEqual(1);
});