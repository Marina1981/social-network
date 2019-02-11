export const types = {
    SET_USERPIC_URL:              'NETWORK/PROFILE_PAGE/SET_USERPIC_URL',
    SET_USER_NAME:                'NETWORK/PROFILE_PAGE/SET_USER_NAME',
    SET_USER_BIRTH_DATE:          'NETWORK/PROFILE_PAGE/SET_USER_BIRTH_DATE',
    SET_USER_CITY:                'NETWORK/PROFILE_PAGE/SET_USER_CITY',
    SET_USER_EDUCATION:           'NETWORK/PROFILE_PAGE/SET_USER_EDUCATION',
    SET_USER_WEBSITE:             'NETWORK/PROFILE_PAGE/SET_USER_WEBSITE',
    ADD_POST:                     'NETWORK/PROFILE_PAGE/ADD_POST',
    SET_CREATING_POST:            'NETORK/PROFILE_PAGE/SET_CREATING_POST',
    INCREMENT_POST_LIKE_COUNT:    'NETWORK/PROFILE_PAGE/INCREMENT_POST_LIKE_COUNT',
    ADD_CREATING_MESSAGE_AS_POST: 'NETWORK/PROFILE_PAGE/ADD_CREATING_MESSAGE_AS_POST'
};



export const actions = {
    setUserpicURL:            (userPicURL)         => ({type: types.SET_USERPIC_URL, userPicURL}),
    setUserName:              (userName)           => ({type: types.SET_USER_NAME, userName}),
    setUserBirthDate:         (userBirthDate)      => ({type: types.SET_USER_BIRTH_DATE, userBirthDate}),
    setUserCity:              (userCity)           => ({type: types.SET_USER_CITY, userCity}),
    setUserEducation:         (userEducation)      => ({type: types.SET_USER_EDUCATION, userEducation}),
    setUserWebSite:           (userWebSite)        => ({type: types.SET_USER_WEBSITE, userWebSite}),
    addPost:                  (message, messageId) => ({type: types.ADD_POST, message, messageId}),
    setCreatingPost:          (message)            => ({type: types.SET_CREATING_POST, message}),
    incrementPostLikeCount:   (messageId)          => ({type: types.INCREMENT_POST_LIKE_COUNT, messageId}),
    addCreatingMessageAsPost: (messageId)          => ({type: types.ADD_CREATING_MESSAGE_AS_POST, messageId})
};

//----
export const initialState = {
    userInfo:{
        userID: '',
        userPicURL: '',
        userName:'',
        userBirthDate:'',
        userCity: '',
        userEducation: '',
        userWebSite: ''
    },
    wall:{
        messagesList:[],
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
            messagesList:    state.wall.messagesList.map( obj => ({...obj})),
            creatingMessage: {...state.wall.creatingMessage}
        }
    };

    //----
    switch (action.type) {
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
                {text:      action.message,
                 likeCount: 0,
                 messageId: action.messageId}];
            return newState;

        case types.SET_CREATING_POST:

            newState.wall.creatingMessage =  action.message;
            return newState;

        case types.INCREMENT_POST_LIKE_COUNT:
            let filteredMessages =  newState.wall.messagesList.filter( (el) =>{return action.messageId === el.messageId ? true : false;});
            filteredMessages[0].likeCount =+ 1;

            return newState;

        case types.ADD_CREATING_MESSAGE_AS_POST:

            newState.wall.messagesList = [...newState.wall.messagesList,
                {text:     state.wall.creatingMessage,
                 likeCount: 0,
                 messageId: action.messageId}];
            return newState;

        default:
            return state;

    }
};

//----







