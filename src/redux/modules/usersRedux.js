export const types = {
    SET_USERS_LIST: 'NETWORK/USERS/SET_USERS_LIST',
    INCREMENT_CURRENT_PAGE: 'NETWORK/USERS/INCREMENT_CURRENT_PAGE',
    CLEAR_USERS_LIST: 'NETWORK/USERS/CLEAR_USERS_LIST'
};

//----
const initialState = {
    usersList: [],
    pageSize: 3,
    pageNumber: 1,
    totalCount: null

};
//---- actionCreators--------//
export const actions = {
    setUsersList: (users, totalCount) => ({type: types.SET_USERS_LIST, users, totalCount}),
    incrementCurrentPage: (pageNumber) => ({type: types.INCREMENT_CURRENT_PAGE, nextPage: pageNumber}),
    clearUsersList: () => ({type: types.CLEAR_USERS_LIST})
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
                clearUsersList: action.clearUsersList
            };

        default:
            return state;
    }
};
//-----Selectors-------//
export const getPageSize = (globalState) => {
    const {pageSize, pageNumber, totalCount} = globalState.usersPage;
    return totalCount > pageSize * pageNumber;
};


