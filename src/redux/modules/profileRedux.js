import {getUserId} from "./authRedux";
import {AxiosInstance as axios} from "axios";
import {
    userProfileUpdatingProcessProfile, userProfileUpdatingProcessResults,
    userStatusUpdatingProcessStatuses
} from "../../dal/axios-instance";

export const types = {
    SET_USER_PROFILE:                           'NETWORK/PROFILE_PAGE/SET_USER_PROFILE',
    SET_CREATING_ABOUT_ME:                      'NETWORK/PROFILE_PAGE/SET_CREATING_ABOUT_ME',
    SET_CREATING_SKYPE:                         'NETWORK/PROFILE_PAGE/SET_CREATING_SKYPE',
    SET_CREATING_VK:                            'NETWORK/PROFILE_PAGE/SET_CREATING_VK',
    SET_CREATING_FACEBOOK:                      'NETWORK/PROFILE_PAGE/SET_CREATING_FACEBOOK',
    SET_CREATING_ICQ:                           'NETWORK/PROFILE_PAGE/SET_CREATING_ICQ',
    SET_CREATING_EMAIL:                         'NETWORK/PROFILE_PAGE/SET_CREATING_EMAIL',
    SET_CREATING_GOOGLE_PLUS:                   'NETWORK/PROFILE_PAGE/SET_CREATING_GOOGLE_PLUS',
    SET_CREATING_TWITTER:                       'NETWORK/PROFILE_PAGE/SET_CREATING_TWITTER',
    SET_CREATING_INSTAGRAM:                     'NETWORK/PROFILE_PAGE/SET_CREATING_INSTAGRAM',
    SET_CREATING_WATS_APP:                      'NETWORK/PROFILE_PAGE/SET_CREATING_WATS_APP',
    SET_LOOKING_FOR_A_JOB_FLAG:                 'NETWORK/PROFILE_PAGE/SET_LOOKING_FOR_A_JOB_FLAG',
    SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    SET_CREATING_FULLL_NAME:                    'NETWORK/PROFILE_PAGE/SET_CREATING_FULL_NAME',
    SET_USER_PROFILE_UPDATING_PROCESS_USER_PROFILE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_USER_PROFILE',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR:    'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE',
    COPY_ABOUT_ME_TO_CREATING_USER_STATUS:     'NETWORK/PROFILE_PAGE/COPY_ABOUT_ME_TO_CREATING_USER_STATUS',
    COPY_SKYPE_TO_CREATING_USER_STATUS:        'NETWORK/PROFILE_PAGE/COPY_SKYPE_TO_CREATING_USER_STATUS',
    COPY_FACEBOOK_TO_CREATING_USER_STATUS:     'NETWORK/PROFILE_PAGE/COPY_FACEBOOK_TO_CREATING_USER_STATUS',
    COPY_ICQ_TO_CREATING_USER_STATUS:          'NETWORK/PROFILE_PAGE/COPY_ICQ_TO_CREATING_USER_STATUS',
    COPY_EMAIL_TO_CREATING_USER_STATUS:        'NETWORK/PROFILE_PAGE/COPY_EMAIL_TO_CREATING_USER_STATUS',
    COPY_GOOGLE_PLUS_TO_CREATING_USER_STATUS:  'NETWORK/PROFILE_PAGE/COPY_GOOGLE_PLUS_TO_CREATING_USER_STATUS',
    COPY_TWITTER_TO_CREATING_USER_STATUS:      'NETWORK/PROFILE_PAGE/COPY_TWITTER_TO_CREATING_USER_STATUS',
    COPY_INSTAGRAM_TO_CREATING_USER_STATUS:    'NETWORK/PROFILE_PAGE/COPY_INSTAGRAM_TO_CREATING_USER_STATUS',
    COPY_WATS_APP_TO_CREATING_USER_STATUS:     'NETWORK/PROFILE_PAGE/COPY_WATS_APP_TO_CREATING_USER_STATUS',
    COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_USER_STATUS: 'NETWORK/PROFILE_PAGE/COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_USER_STATUS',
    COPY_FULLL_NAME_TO_CREATING_USER_STATUS:   'NETWORK/PROFILE_PAGE/COPY_FULLL_NAME_TO_CREATING_USER_STATUS',



    SET_USERPIC_URL: 'NETWORK/PROFILE_PAGE/SET_USERPIC_URL',
    SET_USER_NAME: 'NETWORK/PROFILE_PAGE/SET_USER_NAME',
    SET_USER_BIRTH_DATE: 'NETWORK/PROFILE_PAGE/SET_USER_BIRTH_DATE',
    SET_USER_CITY: 'NETWORK/PROFILE_PAGE/SET_USER_CITY',
    SET_USER_EDUCATION: 'NETWORK/PROFILE_PAGE/SET_USER_EDUCATION',
    SET_USER_WEBSITE: 'NETWORK/PROFILE_PAGE/SET_USER_WEBSITE',
    ADD_POST: 'NETWORK/PROFILE_PAGE/ADD_POST',
    SET_CREATING_POST: 'NETORK/PROFILE_PAGE/SET_CREATING_POST',
    INCREMENT_POST_LIKE_COUNT: 'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT',
    ADD_CREATING_MESSAGE_AS_POST: 'NETWORK/PROFILE_PAGE/ADD_CREATING_MESSAGE_AS_POST'
};


export const actions = {
    setUserProfile:               (profileData) => ({type: types.SET_USER_PROFILE, profileData}),
    setCreatingAboutMe:           (text)        => ({type: types.SET_CREATING_ABOUT_ME, text}),
    setCreatingSkype:             (skype)       => ({type: types.SET_CREATING_SKYPE, skype}),
    setCreatingFacebook:          (facebook)    => ({type: types.SET_CREATING_FACEBOOK, facebook}),
    setCreatingIcq:               (icq)         => ({type: types.SET_CREATING_ICQ, icq}),
    setCreatingEmail:             (email)       => ({type: types.SET_CREATING_EMAIL, email}),
    setCreatingGooglePlus:        (googlePlus)  => ({type: types.SET_CREATING_GOOGLE_PLUS, googlePlus}),
    setCreatingTwitter:           (twitter)     => ({type: types.SET_CREATING_TWITTER, twitter}),
    setCratingInstagram:          (instagram)   => ({type: types.SET_CREATING_INSTAGRAM, instagram}),
    setCreatingWhatsApp:          (whatsApp)    => ({type: types.SET_CREATING_WATS_APP, whatsApp}),
    setCreatingLookingForAJobFlag:(flag)        => ({type: types.SET_LOOKING_FOR_A_JOB_FLAG, flag}),
    setCreatingLookingForAJobDescription: (text)=> ({type: types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION, text}),
    setCreatingFullName:          (fullName)    => ({type: types.SET_CREATING_FULLL_NAME, fullName}),
    setUserOrofileUpdatingProcessUserProfile: (processUserProfile) => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_USER_PROFILE, processUserProfile}),
    setUserProfileUpdatingProcessError: (processError)   => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR, processError}),
    setUserProfileUpdatingProcessErrorMessage: (processErrorMessage)  => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE, processErrorMessage}),
    copyAboutMeToCreatingUserStatus:   () => ({type: types.COPY_ABOUT_ME_TO_CREATING_USER_STATUS}),
    copySkypeToCreatingUserStatus:   () => ({type: types.COPY_SKYPE_TO_CREATING_USER_STATUS}),
    copyFacebookToCreatingUserStatus:   () => ({type: types.COPY_FACEBOOK_TO_CREATING_USER_STATUS}),
    copyIcqToCreatingUserStatus:   () => ({type: types.COPY_ICQ_TO_CREATING_USER_STATUS}),
    copyEmailToCreatingUserStatus:   () => ({type: types.COPY_EMAIL_TO_CREATING_USER_STATUS}),
    copyGooglePlusToCreatingUserStatus:   () => ({type: types.COPY_GOOGLE_PLUS_TO_CREATING_USER_STATUS}),
    copyTwitterToCreatingUserStatus:   () => ({type: types.COPY_TWITTER_TO_CREATING_USER_STATUS}),
    copyInstagramToCreatingUserStatus:   () => ({type: types.COPY_INSTAGRAM_TO_CREATING_USER_STATUS}),
    copyWhatsAppToCreatingUserStatus:   () => ({type: types.COPY_WATS_APP_TO_CREATING_USER_STATUS}),
    copyLookingForAJobDescriptionCreatingUserStatus:   () => ({type: types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_USER_STATUS}),
    copyFullNameToCreatingUserStatus:   () => ({type: types.COPY_FULLL_NAME_TO_CREATING_USER_STATUS}),



    setUserpicURL: (userPicURL) => ({type: types.SET_USERPIC_URL, userPicURL}),
    setUserName: (userName) => ({type: types.SET_USER_NAME, userName}),
    setUserBirthDate: (userBirthDate) => ({type: types.SET_USER_BIRTH_DATE, userBirthDate}),
    setUserCity: (userCity) => ({type: types.SET_USER_CITY, userCity}),
    setUserEducation: (userEducation) => ({type: types.SET_USER_EDUCATION, userEducation}),
    setUserWebSite: (userWebSite) => ({type: types.SET_USER_WEBSITE, userWebSite}),
    addPost: (message, messageId) => ({type: types.ADD_POST, message, messageId}),
    setCreatingPost: (message) => ({type: types.SET_CREATING_POST, message}),
    incrementPostLikeCount: (messageId) => ({type: types.INCREMENT_POST_LIKE_COUNT, messageId}),
    addCreatingMessageAsPost: (messageId) => ({type: types.ADD_CREATING_MESSAGE_AS_POST, messageId})
};

//----
export const initialState = {
    userInfo: {
        userID: '',
        userPicURL: '',
        userName: '',
        userBirthDate: '',
        userCity: '',
        userEducation: '',
        userWebSite: ''
    },
    userProfile: {
        aboutMe: '',
        contacts: {
            skype: '',
            vk: '',
            facebook: '',
            icq: '',
            email: '',
            googlePlus: '',
            twitter: '',
            instagram: '',
            whatsApp: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null
    },
    creatingUserProfileAboutMe: '',
    creatingUserProfileSkype: '',
    creatingUserProfileVk: '',
    creatingUserProfileFacebook: '',
    creatingUserProfileIcq: '',
    creatingUserProfileEmail: '',
    creatingUserProfileGooglePlus: '',
    creatingUserProfileTwitter: '',
    creatingUserProfileInstagram: '',
    creatingUserProfileWhatsApp: '',
    creatingLookingForAJobDescription: '',

    userProfileUpdatingProfile:      userProfileUpdatingProcessProfile.READY,
    userProfileUpdatingProcessError: userProfileUpdatingProcessResults.SUCCESS,
    userProfileUpdatingErrorMessage:  '',

    wall: {
        messagesList: [],
        creatingMessage: ''
    }
};
//-------
export const reducer = (state = initialState, action) => {
    //----
    const newState = {
        ...state,
        userInfo: {...state.userInfo},
        wall: {
            ...state.wall,
            messagesList: state.wall.messagesList.map(obj => ({...obj})),
            creatingMessage: {...state.wall.creatingMessage}
        },
        userProfile: {
            ...state.userProfile,
            contacts: state.userProfile.contacts
        }
    };

    //----
    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.profileData
            };

        case types.SET_CREATING_ABOUT_ME:
            return {
                ...state,
                creatingText: action.text
            };

        case types.SET_CREATING_SKYPE:
            return {
              ...state,
                creatingSkype: action.skype
            };

        case types.SET_CREATING_FACEBOOK:
            return {
              ...state,
                creatingFacebook: action.facebook
            };

        case types.SET_CREATING_ICQ:
            return {
              ...state,
                creatingIcq: action.icq
            };

        case types.SET_CREATING_EMAIL:
            return {
              ...state,
                creatingEmail: action.email
            };

        case types.SET_CREATING_GOOGLE_PLUS:
            return {
              ...state,
                creatingGooglePlus: action.googlePlus
            };

        case types.SET_CREATING_TWITTER:
            return {
              ...state,
                creatingTwitter: action.twitter
            };

        case types.SET_CREATING_INSTAGRAM:
            return {
              ...state,
                creatingInstagram: action.instagram
            };

        case types.SET_CREATING_WATS_APP:
            return {
              ...state,
                creatingWhatsApp: action.whatsApp
            };

        case types.SET_LOOKING_FOR_A_JOB_FLAG:
            return {
              ...state,
                creatingFlag: action.flag
            };

        case types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
              ...state,
                creatingText: action.text
            };

        case types.SET_CREATING_FULLL_NAME:
            return {
              ...state,
                creatingFullName: action.fullName
            };






        case types.SET_USERPIC_URL:
            newState.userInfo.userPicURL = action.userPicURL;
            return newState;

        case types.SET_USER_NAME:
            newState.userInfo.userName = action.userName;
            return newState;

        case types.SET_USER_BIRTH_DATE:
            newState.userInfo.userBirthDate = action.userBirthDate;
            return newState;

        case types.SET_USER_CITY:
            newState.userInfo.userCity = action.userCity;
            return newState;

        case types.SET_USER_EDUCATION:
            newState.userInfo.userEducation = action.userEducation;
            return newState;

        case types.SET_USER_WEBSITE:
            newState.userInfo.userWebSite = action.userWebSite;
            return newState;

        case types.ADD_POST:
            newState.wall.messagesList = [...newState.wall.messagesList,
                {
                    text: action.message,
                    likeCount: 0,
                    messageId: action.messageId
                }];
            return newState;

        case types.SET_CREATING_POST:

            newState.wall.creatingMessage = action.message;
            return newState;

        case types.INCREMENT_POST_LIKE_COUNT:
            let filteredMessages = newState.wall.messagesList.filter((el) => {
                return action.messageId === el.messageId ? true : false;
            });
            filteredMessages[0].likeCount = +1;

            return newState;

        case types.ADD_CREATING_MESSAGE_AS_POST:

            newState.wall.messagesList = [...newState.wall.messagesList,
                {
                    text: state.wall.creatingMessage,
                    likeCount: 0,
                    messageId: action.messageId
                }];
            return newState;

        default:
            return state;

    }
};

//----
//----Selectors-------//
export const getCreatingUserProfile = (globalState) => globalState.profilePage.userProfile;
//-----ThanksCreators----//
export const getUserProfile = () => (dispatch, getState) => {
    const globalState = getState();
    const userId = getUserId(globalState);
    axios.get('profile/' + userId)
        .then(result => {
            dispatch(actions.setUserProfile(result.data))
        })
};

// export const updateUserProfile = () => (dispatch, getState) => {
//     const globalState = getState();
//     const userProfile = getCreatingUserProfile(globalState);
//     dispatch(actions.setUserStatusUpdatingProcessStatus(userStatusUpdatingProcessStatuses.IN_PROGRESS));
//
//     axios.put('profile',userProfile
//        .then(r => {
//
//     });
// };



// {
//     "aboutMe": "� ����� ����� 100%",
//     "contacts": {
//     "skype": "kuz",
//         "vk": "vk.com/dimych",
//         "facebook": "https://facebook/dimych",
//         "icq": "icq",
//         "email": "email",
//         "googlePlus": "gogep",
//         "twitter": "twitter",
//         "instagram": "instagra",
//         "whatsApp": "watsap"
// },
//     "lookingForAJob": false,
//     "lookingForAJobDescription": '� ��� ������',
//     "fullName": "samurai dmitry v"
// })