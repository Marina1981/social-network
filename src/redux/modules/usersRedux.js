import axios from "../../dal/axios-instance";
import {usersFilteredProcessResult, userStatusUpdatingProcessResults} from "../statusСonstants/statusConstants";


export const types = {
    SET_USERS_LIST: 'NETWORK/USERS/SET_USERS_LIST',
    INCREMENT_CURRENT_PAGE: 'NETWORK/USERS/INCREMENT_CURRENT_PAGE',
    CLEAR_USERS_LIST: 'NETWORK/USERS/CLEAR_USERS_LIST',
    SET_FILTER_SUBSTRING: 'NETWORK/USERS/SET_FILTER_SUBSTRING',
    // SET_ALL_USERS:                            'NETWORK/USERS/SET_ALL_USERS',
    SET_FILTERED_USERS: 'NETWORK/USERS/SET_FILTERED_USERS',
    SET_USERS_FILTERED_PROCESS_ERROR: 'NETWORK/USERS/SET_USERS_FILTERED_PROCESS_ERROR',
    SET_USERS_FILTERED_PROCESS_ERROR_MESSAGE: 'NETWORK/USERS/SET_USERS_FILTERED_PROCESS_ERROR_MESSAGE'
};

//----
const initialState = {
    usersList: [],
    pageSize: 4,
    pageNumber: 1,
    totalCount: null,
    filterSubstring: '',
    // isAllUsersReceived: false
    usersFilteredProcessError: usersFilteredProcessResult.SUCCESS,
    userStatusUpdatingErrorMessage: ''
};
//---- actionCreators--------//
export const actions = {
    setUsersList: (users, totalCount) => ({type: types.SET_USERS_LIST, users, totalCount}),
    incrementCurrentPage: (pageNumber) => ({type: types.INCREMENT_CURRENT_PAGE, nextPage: pageNumber}),
    clearUsersList: () => ({type: types.CLEAR_USERS_LIST}),
    setFilterSubstring: (substring) => ({type: types.SET_FILTER_SUBSTRING, substring}),
    // setIsAllUsers:                    ()                  => ({type: types.SET_ALL_USERS}),
    setFilteredUsersList: (users) => ({type: types.SET_FILTERED_USERS, users}),
    setUsersFilteredProcessError: (processError) => ({
        type: types.SET_USERS_FILTERED_PROCESS_ERROR,
        processError
    }),
    setUsersFilteredProcessErrorMessage: (processErrorMessage) => ({
        type: types.SET_USERS_FILTERED_PROCESS_ERROR_MESSAGE,
        processErrorMessage
    })
};

//---- reducer  ----//

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS_LIST:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users],
                totalCount: action.totalCount
            };

        case types.SET_FILTERED_USERS:
            return {
                ...state,
                usersList: action.users
            };

        case types.INCREMENT_CURRENT_PAGE:
            return {
                ...state,
                pageNumber: state.pageNumber + 1
            };

        case types.CLEAR_USERS_LIST:
            return {
                ...state,
                usersList: [],
                totalCount: null,
                pageNumber: 1
            };

        case types.SET_FILTER_SUBSTRING:
            return {
                ...state,
                filterSubstring: action.substring
            };

        // case types.SET_ALL_USERS:
        //     return {...state,isAllUsersReceived:  !state.isAllUsersReceived};

        case types.SET_USERS_FILTERED_PROCESS_ERROR_MESSAGE:
            return {
                ...state,
                userStatusUpdatingErrorMessage: action.processErrorMessage
            };

        case types.SET_USERS_FILTERED_PROCESS_ERROR:
            return {
                ...state,
                usersFilteredProcessError: action.processError
            };

        default:
            return state;
    }
};
//-----Selectors-------//

export const getPageSizeSelector = (globalState) => {
    const {pageSize, pageNumber, totalCount} = globalState.usersPage;
    return totalCount > (pageSize - 1) * pageNumber;
};
//---

export const getUsersId = (globalState) => globalState.usersPage.usersList.id;

//---
//---   local filter selector  ---//

// export const getUsersFilteredByNameSubstringSelector = (globalState, substring) => {
//
//     let filteredData = globalState.usersPage.usersList;
//
//     if(substring !== null){
//         filteredData = globalState.usersPage.usersList.filter((item) => {
//             return item.name.toLowerCase().indexOf(substring) >= 0;
//         });
//     }
//
//     return filteredData;
// };

//---

//---ThanksCreators----//
export const setReceivedServerUsers = () => (dispatch, getState) => {

    const globalState = getState();
    const {pageSize = 4, pageNumber = 1} = globalState.usersPage;   //destructuring

    axios.get(`users?count=${pageSize}&page=${pageNumber}`)
        .then(result => {
            dispatch(actions.incrementCurrentPage());
            dispatch(actions.setUsersList(result.data.items, result.data.totalCount))
        })
};

//---
export const setReceivedServerUsersAll = () => (dispatch, getState) => {

    const globalState = getState();
    let totalCount = globalState.usersPage.totalCount;
    axios.get(`users?count=${totalCount}`)
        .then(result => {
            dispatch(actions.setUsersList(result.data.items));
            // dispatch(actions.setIsAllUsers())
        })
};
//---
export const setReceivedServerUsersFiltered = () => (dispatch, getState) => {

    const globalState = getState();
    let filterSubstring = globalState.usersPage.filterSubstring;

    axios.get(`users?term=${filterSubstring}`)
        .then(result => {
            dispatch(actions.setFilteredUsersList(result.data.items))
        })
};
