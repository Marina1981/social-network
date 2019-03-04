import React from 'react';
import reducer, {types} from "../../redux/modules/authRedux";



test('data added successfully', () => {
   let newState = reducer ({
       userAuthData: {
           userId:    null,
           userLogin: null,
           userEmail: null}
   }, {type: types.SET_USER_AUTH_DATA, userId: '1',userLogin: 'mahaha',  userEmail: 'ееее'});
    expect(newState.userAuthData.userId).toBe('1');
    expect(newState.userAuthData.userLogin).toBe('mahaha');
    expect(newState.userAuthData.userEmail).toBe('ееее');
});

//------------//

test('data clear successfully', () => {
    let newState = reducer ({
        userAuthData: {
            userId:    '1',
            userLogin: 'mahaha',
            userEmail: 'ееее'}
    }, {type: types.CLEAR_USER_AUTH_DATA, userId: null,userLogin: null,  userEmail: null});
    expect(newState.userAuthData.userId).toBe(null);
    expect(newState.userAuthData.userLogin).toBe(null);
    expect(newState.userAuthData.userEmail).toBe(null);
});

//------------//

test('avatar successfully added', () => {
    let newState = reducer ( {
        avatar: null
    }, {type: types.SET_USER_AVATAR, url: 'ggggg'});
    expect(newState.avatar).toBe('ggggg');
});