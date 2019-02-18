import {getUserId} from "./authRedux";
import axios from "../../dal/axios-instance";
import {
    userProfileUpdatingProcessProfile, userProfileUpdatingProcessResults,
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

    COPY_ABOUT_ME_TO_CREATING_ABOUT_ME:        'NETWORK/PROFILE_PAGE/COPY_ABOUT_ME_TO_CREATING_ABOUT_ME',
    COPY_SKYPE_TO_CREATING_SKYPE:              'NETWORK/PROFILE_PAGE/COPY_SKYPE_TO_CREATING_SKYPE',
    COPY_VK_TO_CREATING_VK:                    'NETWORK/PROFILE_PAGE/COPY_VK_TO_CREATING_VK',
    COPY_FACEBOOK_TO_CREATING_FACEBOOK:        'NETWORK/PROFILE_PAGE/COPY_FACEBOOK_TO_CREATING_FACEBOOK',
    COPY_ICQ_TO_CREATING_ICQ:                  'NETWORK/PROFILE_PAGE/COPY_ICQ_TO_CREATING_ICQ',
    COPY_EMAIL_TO_CREATING_EMAIL:              'NETWORK/PROFILE_PAGE/COPY_EMAIL_TO_CREATING_EMAIL',
    COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS:  'NETWORK/PROFILE_PAGE/COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS',
    COPY_TWITTER_TO_CREATING_TWITTER:          'NETWORK/PROFILE_PAGE/COPY_TWITTER_TO_CREATING_TWITTER',
    COPY_INSTAGRAM_TO_CREATING_INSTAGRAM:      'NETWORK/PROFILE_PAGE/COPY_INSTAGRAM_TO_CREATING_INSTAGRAM',
    COPY_WATS_APP_TO_CREATING_WATS_APP:        'NETWORK/PROFILE_PAGE/COPY_WATS_APP_TO_CREATING_WATS_APP',
    COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    COPY_FULLL_NAME_TO_CREATING_FULLL_NAME:    'NETWORK/PROFILE_PAGE/COPY_FULLL_NAME_TO_CREATING_FULLL_NAME',



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
    setUserProfile:               (data)        => ({type: types.SET_USER_PROFILE, data}),
    setCreatingAboutMe:           (text)        => ({type: types.SET_CREATING_ABOUT_ME, text}),
    setCreatingSkype:             (skype)       => ({type: types.SET_CREATING_SKYPE, skype}),
    setCreatingVk:                (vk)          => ({type: types.SET_CREATING_VK, vk}),
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

    setUserProfileUpdatingProcessUserProfile: (processUserProfile) => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_USER_PROFILE, processUserProfile}),
    setUserProfileUpdatingProcessError: (processError)   => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR, processError}),
    setUserProfileUpdatingProcessErrorMessage: (processErrorMessage)  => ({type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE, processErrorMessage}),

    copyAboutMeToCreatingAboutMe:   () => ({type: types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME}),
    copySkypeToCreatingSkype:   () => ({type: types.COPY_SKYPE_TO_CREATING_SKYPE}),
    copyVkToCreatingVk:        () => ({type: types.COPY_VK_TO_CREATING_VK}),
    copyFacebookToCreatingFacebook: () => ({type: types.COPY_FACEBOOK_TO_CREATING_FACEBOOK}),
    copyIcqToCreatingIcq:   () => ({type: types.COPY_ICQ_TO_CREATING_ICQ}),
    copyEmailToCreatingEmail:   () => ({type: types.COPY_EMAIL_TO_CREATING_EMAIL}),
    copyGooglePlusToCreatingGooglePlus:   () => ({type: types.COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS}),
    copyTwitterToCreatingTwitter:   () => ({type: types.COPY_TWITTER_TO_CREATING_TWITTER}),
    copyInstagramToCreatingInstagram:   () => ({type: types.COPY_INSTAGRAM_TO_CREATING_INSTAGRAM}),
    copyWhatsAppToCreatingWhatsApp:   () => ({type: types.COPY_WATS_APP_TO_CREATING_WATS_APP}),
    copyLookingForAJobDescriptionCreatingLookingForAJobDescription:   () => ({type: types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION}),
    copyFullNameToCreatingFullName:   () => ({type: types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME}),



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
        aboutMe: 'Marina',
        contacts: {
            skype:      'skype',
            vk:         'vk',
            facebook:   'facebook',
            icq:        'icq',
            email:      'email',
            googlePlus: 'googlePlus',
            twitter:    'twitter',
            instagram:  'instagram',
            whatsApp:   'whatsApp'
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null
    },
    creatingUserProfileAboutMe:        null,
    creatingUserProfileSkype:          null,
    creatingUserProfileVk:             null,
    creatingUserProfileFacebook:       null,
    creatingUserProfileIcq:            null,
    creatingUserProfileEmail:          null,
    creatingUserProfileGooglePlus:     null,
    creatingUserProfileTwitter:        null,
    creatingUserProfileInstagram:      null,
    creatingUserProfileWhatsApp:       null,
    creatingLookingForAJobDescription: null,

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
        userProfile: {...state.userProfile}
    };

    //----
    switch (action.type) {
        case types.SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.data
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

        case types.SET_USER_PROFILE_UPDATING_PROCESS_USER_PROFILE:
            return {
              ...state,
                userProfileUpdatingProcessUserProfile: action.processUserProfile
            };

        case types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR:
            return {
              ...state,
                userProfileUpdatingProcessError: action.processError
            };

        case types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE:
            return {
              ...state,
                userProfileUpdatingProcessErrorMessage: action.processErrorMessage
            };

        case types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME:
            return {
              ...state,
              copyAboutMeToCreatingAboutMe: state.creatingUserProfileAboutMe
            };

        case types.COPY_SKYPE_TO_CREATING_SKYPE:
            return {
              ...state,
                copySkypeToCreatingSkype: state.creatingUserProfileSkype
            };

        case types.COPY_VK_TO_CREATING_VK:
            return {
                ...state,
                copyVkToCreatingVk: state.creatingUserProfileVk
            };

        case types.COPY_FACEBOOK_TO_CREATING_FACEBOOK:
            return {
              ...state,
                copyFacebookToCreatingFacebook: state.creatingUserProfileFacebook
            };

        case types.COPY_ICQ_TO_CREATING_ICQ:
            return {
              ...state,
                copyIcqToCreatingIcq: state.creatingUserProfileIcq
            };

        case types.COPY_EMAIL_TO_CREATING_EMAIL:
               return {
                 ...state,
               copyEmailToCreatingEmail: state.creatingUserProfileEmail
               };

        case types.COPY_GOOGLE_PLUS_TO_CREATING_GOOGLE_PLUS:
            return {
              ...state,
                copyGooglePlusToCreatingGooglePlus: state.creatingUserProfileGooglePlus
            };

        case types.COPY_TWITTER_TO_CREATING_TWITTER:
            return {
              ...state,
                copyTwitterToCreatingTwitter: state.creatingUserProfileTwitter
            };

        case types.COPY_INSTAGRAM_TO_CREATING_INSTAGRAM:
            return {
              ...state,
                copyInstagramToCreatingInstagram: state.creatingUserProfileInstagram
            };

        case types.COPY_WATS_APP_TO_CREATING_WATS_APP:
            return {
              ...state,
                copyWatsAppToCreatingWatsApp: state.creatingUserProfileWhatsApp
            };

        case types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
              ...state,
                copyLookingForAJobDascriptionToCreatingLookingForAJobDascription: state.creatingLookingForAJobDescription
            };

        case types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME:
            return {
              ...state,
                copyFullNameToCreatingFullName: state.fullName
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

export const updateUserProfile = () => (dispatch, getState) => {
    const globalState = getState();
    const userProfile = getCreatingUserProfile(globalState);
    dispatch(actions.setUserProfileUpdatingProcessUserProfile(userProfileUpdatingProcessProfile.IN_PROGRESS));

    axios.put('profile',{userProfile})
       .then(result => {
           if (result.data.resultCode === 0){
               dispatch(getUserProfile())
           }
    });
};



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