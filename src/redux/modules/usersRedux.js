import axios from "../../dal/axios-instance";

export const types = {
    SET_USERS_LIST:             'NETWORK/USERS/SET_USERS_LIST',
    INCREMENT_CURRENT_PAGE:     'NETWORK/USERS/INCREMENT_CURRENT_PAGE',
    CLEAR_USERS_LIST:           'NETWORK/USERS/CLEAR_USERS_LIST',
    SET_FILTER_SUBSTRING:       'NETWORK/USERS/SET_FILTER_SUBSTRING'
};

//----
const initialState = {
    usersList: [],
    pageSize: 6,
    pageNumber: 1,
    totalCount: null,
    filterSubstring: null
};
//---- actionCreators--------//
export const actions = {
    setUsersList: (users, totalCount) => ({type: types.SET_USERS_LIST, users, totalCount}),
    incrementCurrentPage: (pageNumber) => ({type: types.INCREMENT_CURRENT_PAGE, nextPage: pageNumber}),
    clearUsersList: () => ({type: types.CLEAR_USERS_LIST}),
    setFilterSubstring:    (substring)   => ({type: types.SET_FILTER_SUBSTRING, substring})
};

//----
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USERS_LIST:
            return {
                ...state,
                usersList: [...state.usersList, ...action.users],
                totalCount: action.totalCount
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


        default:
            return state;
    }
};
//-----Selectors-------//
export const getPageSize = (globalState) => {

    const {pageSize, pageNumber, totalCount} = globalState.usersPage;
    return totalCount > (pageSize - 1) * pageNumber;
};
//---
export const getUsersId = (globalState) => globalState.usersPage.usersList.id;
//---
export const getUsersFilteredByNameSubstring = (globalState, substring) => {

    let filteredData = globalState.usersPage.usersList;

    if(substring !== null){
        filteredData = globalState.usersPage.usersList.filter((item) => {
            return item.name.toLowerCase().indexOf(substring) >= 0;
        });
    }

    return filteredData;
};
//---

//---ThanksCreators----//
export const setReceivedServerUsers = () => (dispatch, getState) => {

    const globalState = getState();
    const {pageSize = 3, pageNumber = 1} = globalState.usersPage;   //destructuring

    axios.get(`users?count=${pageSize}&page=${pageNumber}`)
        .then(result => {
            dispatch(actions.incrementCurrentPage());
            dispatch(actions.setUsersList(result.data.items, result.data.totalCount))
        })
};

//---

//---

