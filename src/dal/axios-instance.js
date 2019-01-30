import * as axiosLib from "axios";

const axios = axiosLib.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true
});

//----
export const statuses = {
    INIT:              'INIT',       //start
    ERROR:             'ERROR',
    INPROGRESS:        'INPROGRESS', //идет запрос
    CAPTCHA_REQUIRED:  'CAPTCHA_REQUIRED',
    SUCCESS:           'SUCCESS'
};

export  default axios;