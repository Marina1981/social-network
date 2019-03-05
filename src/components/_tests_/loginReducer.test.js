import React from 'react';
import {reducer, types} from "../../redux/modules/loginRedux";
import {loginingProcessResults, loginingProcessStatuses} from "../../dal/axios-instance";



test('creatingUserLogin set successfully', () => {
    let newState = reducer ({
        creatingUserLogin: ''
    }, {type: types.SET_CREATING_USER_LOGIN, creatingUserLogin: '17121981mar@gmail.com'});
    expect(newState.creatingUserLogin).toBe('17121981mar@gmail.com');
});

//------------//
test('creatingUserPassword set successfully', () => {
    let newState = reducer ({
        creatingUserPassword: ''
    }, {type: types.SET_CREATING_USER_PASSWORD, creatingUserPassword: '123'});
    expect(newState.creatingUserPassword).toBe('123');
});

//------------//
test('flag remember me set successfully', () => {
    let newState = reducer ({
        isRememberMe: true
    }, {type: types.SET_REMEMBER_ME_FLAG, isRememberMe: false,});
    expect(newState.isRememberMe).toBe(false);
});
//------------//
test('loginingProcessStatuses set successfully', () => {
    let newState = reducer ({
        loginingStatus: null
    }, {type: types.SET_LOGINING_PROCESS_STATUS, loginingStatus: loginingProcessStatuses.READY,});
    expect(newState.loginingStatus).toBe(loginingProcessStatuses.READY);
});

//------------//
test('loginingProcessResults set successfully', () => {
    let newState = reducer ({
        loginingError: null
    }, {type: types.SET_LOGINING_PROCESS_ERROR, loginingError: loginingProcessResults.SUCCESS,});
    expect(newState.loginingStatus).toBe(loginingProcessResults.SUCCESS);
});
//------------//
test('loginingProcessErrorMessage set successfully', () => {
    let newState = reducer ({
        loginingErrorMessage: null
    }, {type: types.SET_LOGINING_PROCESS_ERROR_MESSAGE, loginingErrorMessage: 'ERROR',});
    expect(newState.loginingErrorMessage).toBe('ERROR');
});