import * as axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

//----
export const loginingProcessStatuses = {
    READY:        'READY',       //no process
    IN_PROGRESS:  'IN_PROGRESS'
};
//----
export const loginingProcessResults = {
    COMMON_ERROR:             'COMMON_ERROR',
    CAPTCHA_REQUIRED_ERROR:   'CAPTCHA_REQUIRED_ERROR',
    SUCCESS:                  'SUCCESS'
};

//---
export const userStatusUpdatingProcessStatuses = {
    READY:        'READY',       //no process
    IN_PROGRESS:  'IN_PROGRESS'
};
//----
export const userStatusUpdatingProcessResults = {
    COMMON_ERROR:             'COMMON_ERROR',
    SUCCESS:                  'SUCCESS'
};

//---
export const userProfileUpdatingProcessProfile = {
    READY:        'READY',       //no process
    IN_PROGRESS:  'IN_PROGRESS'
};
//----
export const userProfileUpdatingProcessResults = {
    COMMON_ERROR:             'COMMON_ERROR',
    SUCCESS:                  'SUCCESS'
};
export  default axios;
