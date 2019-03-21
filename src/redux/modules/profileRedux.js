import {actions as actionsAuth, getAuthUsersIdSelector, getUsersId} from "./authRedux";
import axios from "../../dal/axios-instance";
import {userProfileUpdatingProcessProfile, userProfileUpdatingProcessResults} from "../statusСonstants/statusConstants";



export const types = {
    SET_USER_PROFILE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE',
    SET_CREATING_ABOUT_ME: 'NETWORK/PROFILE_PAGE/SET_CREATING_ABOUT_ME',
    SET_CREATING_CONTACT: 'NETWORK/PROFILE_PAGE/SET_CREATING_CONTACT',
    SET_ALL_CREATING_CONTACTS_TO_NULL: 'NETWORK/PROFILE_PAGE/SET_ALL_CREATING_CONTACTS_TO_NULL',
    SET_LOOKING_FOR_A_JOB_FLAG: 'NETWORK/PROFILE_PAGE/SET_LOOKING_FOR_A_JOB_FLAG',
    SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    SET_USER_PIC_URL: 'NETWORK/PROFILE_PAGE/SET_USER_PIC_URL',

    SET_CREATING_FULLL_NAME: 'NETWORK/PROFILE_PAGE/SET_CREATING_FULL_NAME',

    SET_USER_PROFILE_UPDATING_PROCESS_STATUS: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_STATUS',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR',
    SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE: 'NETWORK/PROFILE_PAGE/SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE',

    COPY_ABOUT_ME_TO_CREATING_ABOUT_ME: 'NETWORK/PROFILE_PAGE/COPY_ABOUT_ME_TO_CREATING_ABOUT_ME',
    COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION: 'NETWORK/PROFILE_PAGE/COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION',
    COPY_FULLL_NAME_TO_CREATING_FULLL_NAME: 'NETWORK/PROFILE_PAGE/COPY_FULLL_NAME_TO_CREATING_FULLL_NAME',

    COPY_CONTACT_TO_CREATING_CONTACT: 'NETWORK/PROFILE_PAGE/COPY_CONTACT_TO_CREATING_CONTACT',

    ADD_POST: 'NETWORK/PROFILE_PAGE/ADD_POST',
    SET_CREATING_POST: 'NETORK/PROFILE_PAGE/SET_CREATING_POST',
    INCREMENT_POST_LIKE_COUNT: 'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT',
    ADD_CREATING_MESSAGE_AS_POST: 'NETWORK/PROFILE_PAGE/ADD_CREATING_MESSAGE_AS_POST'
};


export const actions = {
    setUserProfile: (data) => ({type: types.SET_USER_PROFILE, data}),

    setCreatingAboutMe: (text) => ({type: types.SET_CREATING_ABOUT_ME, text}),
    copyAboutMeToCreatingAboutMe: () => (dispatch, getState) => {
        let fullState = getState();
        let isOwner = isUserProfileOwner(fullState);
        if (isOwner) dispatch(
            {type: types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME});
    },

    setCreatingContact: (text, key) => ({type: types.SET_CREATING_CONTACT, text, key}),
    copyContactToCreatingContact: (key, flagInsureNotNull) => ({
        type: types.COPY_CONTACT_TO_CREATING_CONTACT,
        key,
        flagInsureNotNull
    }),
    setAllCreatingContactsToNull: () => ({type: types.SET_ALL_CREATING_CONTACTS_TO_NULL}),

    setCreatingLookingForAJobFlag: (flag) => ({type: types.SET_LOOKING_FOR_A_JOB_FLAG, flag}),

    setCreatingDescription: (text) => ({type: types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION, text}),
    copyDescriptionToCreatingDescription: (flagInsureNotNull) =>
        ({type: types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION, flagInsureNotNull}),

    setUserPicUrl: (photos) => ({type: types.SET_USER_PIC_URL, photos}),

    setCreatingFullName: (fullName) => ({type: types.SET_CREATING_FULLL_NAME, fullName}),
    copyFullNameToCreatingFullName: () => ({type: types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME}),

    setUserProfileUpdatingProcessStatus: (processUserProfile) => ({
        type: types.SET_USER_PROFILE_UPDATING_PROCESS_STATUS,
        processUserProfile
    }),
    setUserProfileUpdatingProcessError: (processError) => ({
        type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR,
        processError
    }),
    setUserProfileUpdatingProcessErrorMessage: (processErrorMessage) => ({
        type: types.SET_USER_PROFILE_UPDATING_PROCESS_ERROR_MESSAGE,
        processErrorMessage
    }),
    addPost: (message, messageId) => ({type: types.ADD_POST, message, messageId}),
    setCreatingPost: (message) => ({type: types.SET_CREATING_POST, message}),
    incrementPostLikeCount: (messageId) => ({type: types.INCREMENT_POST_LIKE_COUNT, messageId}),
    addCreatingMessageAsPost: (messageId) => ({type: types.ADD_CREATING_MESSAGE_AS_POST, messageId})
};

//-------
const FormInitialState = () => {
    let formingState = {
        userProfile: {
            aboutMe: '<about me>',
            contacts: {
                facebook: '',
                website: '',
                vk: '',
                twitter: '',
                instagram: '',
                youtube: '',
                github: '',
                mainLink: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription: '',
            photos: {
                large: null,
                small: null
            },
            fullName: '',
            userId: ''
        },

        userProfileUpdatingProfile: userProfileUpdatingProcessProfile.READY,
        userProfileUpdatingProcessError: userProfileUpdatingProcessResults.SUCCESS,
        userProfileUpdatingErrorMessage: '',
        wall: {
            messagesList: [],
            creatingMessage: ''
        }
    };
    //---
    {////
        const keys = Object.keys(formingState.userProfile.contacts).map((key) => "creatingUserProfile_" + key);

        const obj = keys.reduce((acc, key) => {
            acc[key] = null;
            return acc;
        }, {});

        /*   const obj = {};
           keys.forEach (key) => {       // 2-ой вариант
               obj[key] = null;
           });
           */
        formingState = {
            ...formingState,
            ...obj
        };
    }////
     //---
    {////
        formingState = {
            ...formingState,
            creatingUserProfile_aboutMe: null,
            creatingUserProfile_lookingForAJobDescription: null,
            creatingUserProfile_fullName: null
        };
    }////
    //---
    return formingState;
};
//----
const initialState = FormInitialState();
//-------
export const reducer = (state = initialState, action) => {

    //----
    const newState = {
        ...state,
        wall: {
            ...state.wall,
            messagesList: state.wall.messagesList.map(obj => ({...obj}))

        },
        userProfile: {...state.userProfile}
    };

    //----
    switch (action.type) {
        case types.SET_USER_PROFILE: {
            let newState = {
                ...state,
                userProfile: action.data
            };

            for (let key in action.data) {
                newState["creatingUserProfile_" + key] = null;
            }

            return newState;
        }

        case types.SET_CREATING_ABOUT_ME:
            return {
                ...state,
                creatingUserProfile_aboutMe: action.text
            };

        //-------

        case types.SET_CREATING_CONTACT:
            return {
                ...state,
                ["creatingUserProfile_" + action.key]: action.text
            };
        //-------

        case types.SET_ALL_CREATING_CONTACTS_TO_NULL: {
            const keys = Object.keys(state.userProfile.contacts).map((key) => "creatingUserProfile_" + key);

            const obj = keys.reduce((acc, key) => {
                acc[key] = null;
                return acc;
            }, {});

            /*   const obj = {};
               keys.forEach (key) => {       // 2-ой вариант
                   obj[key] = null;
               });
               */

            return {
                ...state,
                ...obj
            };

        }

        case types.SET_LOOKING_FOR_A_JOB_FLAG:
            return {
                ...state,
                creatingFlag: action.flag
            };

        case types.SET_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:
            return {
                ...state,
                creatingUserProfile_lookingForAJobDescription: action.text
            };

        case types.SET_USER_PIC_URL:
            return {
                ...state,
                photos: action.photos
            };

        case types.SET_CREATING_FULLL_NAME:
            return {
                ...state,
                creating_fullName: action.fullName
            };
        //---------------------

        case types.SET_USER_PROFILE_UPDATING_PROCESS_STATUS:
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
        //---------------------

        case types.COPY_CONTACT_TO_CREATING_CONTACT: {
            let contact = state.userProfile.contacts[action.key];
            if (contact === null && action.flagInsureNotNull) {
                contact = '';
            }

            return {
                ...state,
                ["creatingUserProfile_" + action.key]: contact,
            };
        }
        //-------

        case types.COPY_ABOUT_ME_TO_CREATING_ABOUT_ME:
            return {
                ...state,
                creatingUserProfile_aboutMe: state.userProfile.aboutMe
            };

        case types.COPY_LOOKING_FOR_A_JOB_DESCRIPTION_TO_CREATING_LOOKING_FOR_A_JOB_DESCRIPTION:

            let description = state.userProfile.lookingForAJobDescription;
            if (description === null && action.flagInsureNotNull) {
                description = '';
            }

            return {
                ...state,
                creatingUserProfile_lookingForAJobDescription: description
            };

        case
        types.COPY_FULLL_NAME_TO_CREATING_FULLL_NAME:
            return {
                ...state,
                creating_fullName: state.userProfile.fullName
            };

        case
        types.ADD_POST:
            newState.wall.messagesList = [...newState.wall.messagesList,
                {
                    text: action.message,
                    likeCount: 0,
                    messageId: action.messageId
                }];
            return newState;

        case
        types.SET_CREATING_POST:

            newState.wall.creatingMessage = action.message;
            return newState;

        case
        types.INCREMENT_POST_LIKE_COUNT:
            let filteredMessages = newState.wall.messagesList.filter((el) => {
                return action.messageId === el.messageId;
            });
            filteredMessages[0].likeCount = +1;

            return newState;

        case
        types.ADD_CREATING_MESSAGE_AS_POST:

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
export const getCreatingUserProfileSelector = (globalState) => {

    const creatingUserProfile = {
        aboutMe: globalState.profilePage.creatingUserProfile_aboutMe !== null ?
            globalState.profilePage.creatingUserProfile_aboutMe :
            globalState.profilePage.userProfile.aboutMe,
        contacts: {
            facebook: globalState.profilePage.creatingUserProfile_facebook !== null ?
                globalState.profilePage.creatingUserProfile_facebook :
                globalState.profilePage.userProfile.contacts.facebook,

            github: globalState.profilePage.creatingUserProfile_github !== null ?
                globalState.profilePage.creatingUserProfile_github :
                globalState.profilePage.userProfile.contacts.github,

            mainLink: globalState.profilePage.creatingUserProfile_mainLink !== null ?
                globalState.profilePage.creatingUserProfile_mainLink :
                globalState.profilePage.userProfile.contacts.mainLink,

            twitter: globalState.profilePage.creatingUserProfile_twitter !== null ?
                globalState.profilePage.creatingUserProfile_twitter :
                globalState.profilePage.userProfile.contacts.twitter,

            vk: globalState.profilePage.creatingUserProfile_vk !== null ?
                globalState.profilePage.creatingUserProfile_vk :
                globalState.profilePage.userProfile.contacts.vk,

            website: globalState.profilePage.creatingUserProfile_website !== null ?
                globalState.profilePage.creatingUserProfile_website :
                globalState.profilePage.userProfile.contacts.website,

            youtube: globalState.profilePage.creatingUserProfile_youtube !== null ?
                globalState.profilePage.creatingUserProfile_youtube :
                globalState.profilePage.userProfile.contacts.youtube,

        },
        lookingForAJob: globalState.profilePage.creatingUserProfile_lookingForAJob !== null ?
            globalState.profilePage.creatingUserProfile_lookingForAJob :
            globalState.profilePage.userProfile.lookingForAJob,

        lookingForAJobDescription: globalState.profilePage.creatingUserProfile_lookingForAJobDescription !== null ?
            globalState.profilePage.creatingUserProfile_lookingForAJobDescription :
            globalState.profilePage.userProfile.lookingForAJobDescription,

        fullName: globalState.profilePage.creatingUserProfile_fullName !== null ?
            globalState.profilePage.creatingUserProfile_fullName :
            globalState.profilePage.fullName
    };
    return creatingUserProfile;
};
//-----ThanksCreators----//
export const setReceivedServerUserProfile = (userId) => (dispatch, getState) => {
    const globalState = getState();
    userId = userId ? userId : getAuthUsersIdSelector(globalState);
    axios.get('profile/' + userId)
        .then(result => {
            dispatch(actions.setUserProfile(result.data))
        })
};


export const setReceivedServerAuthUserProfile = () => (dispatch, getState) => {
    const globalState = getState();
    let authUserId = getAuthUsersIdSelector(globalState);
    axios.get('profile/' + authUserId)
        .then(result => {
            dispatch(actionsAuth.setUserAvatar(result.data.photos.large))
        })
};


export const updateAuthUserProfileFromCreatingUserProfile = (userProfileValues) => (dispatch, getState) => {

    const globalState = getState();
    const userProfile = getCreatingUserProfileSelector(globalState);
    let newProfile = {...userProfile, ...userProfileValues};
    dispatch(actions.setUserProfileUpdatingProcessStatus(userProfileUpdatingProcessProfile.IN_PROGRESS));

    axios.put('profile', newProfile)
        .then(result => {
            if (result.data.resultCode === 0) {

                const userId = getAuthUsersIdSelector(globalState);
                axios.get('profile/' + userId)
                    .then(result => {
                        dispatch(actions.setUserProfileUpdatingProcessStatus(userProfileUpdatingProcessProfile.READY));
                        dispatch(actions.setUserProfile(result.data));
                        // dispatch(actionsAuth.setUserAvatar(result.data.photos.large))
                    })
                    .then(() => {
                        dispatch(actions.setCreatingAboutMe(null));
                        dispatch(actions.setAllCreatingContactsToNull());
                        dispatch(actions.setCreatingLookingForAJobFlag(null));
                        dispatch(actions.setCreatingDescription(null));
                        dispatch(actions.setCreatingFullName(null));
                    })
            } else {
                dispatch(actions.setUserProfileUpdatingProcessError(userProfileUpdatingProcessResults.COMMON_ERROR));
                dispatch(actions.setUserProfileUpdatingProcessErrorMessage('ERROR!'))
            }
        })
        .catch((e) => {
            console.log(e)
        })
};

export const updateUserPic = (imgFile) => (dispatch) => {
    let formData = new FormData();
    formData.append('image', imgFile);
    axios.post('profile/photo', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(result => {
        if (result.data.resultCode === 0) {
            dispatch(actions.setUserPicUrl(result.data));
            dispatch(setReceivedServerUserProfile())
        } else {
            dispatch(actions.setUserProfileUpdatingProcessError(userProfileUpdatingProcessResults.COMMON_ERROR));
            dispatch(actions.setUserProfileUpdatingProcessErrorMessage('ERROR!'))
        }
    })

};


// selectors
export const isUserProfileOwner = (fullState) => {
    let isOwner = fullState.auth.userAuthData.userId === fullState.profilePage.userProfile.userId;
    return isOwner;
};

