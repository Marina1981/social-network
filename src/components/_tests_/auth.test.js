import React from 'react';
import reducer, {types} from "../../redux/modules/authRedux";

test('data added successfully', () => {
   let newState = reducer ({
       userAuthData: {
           userId:    '',
           userLogin: '',
           userEmail: ''}
   }, {type: types.SET_USER_AUTH_DATA, userId: '1', userLogin: 'mahaha',  userEmail: 'ееее'});
    expect(newState.userAuthData.userId.typeof).toEqual("string");
    expect(newState.userAuthData.userLogin.typeof).toEqual("string");
    expect(newState.userAuthData.userEmail.typeof).toEqual("string");
});