import React from 'react';
import connect from "react-redux/es/connect/connect";
import UsersSection from "../../components/UsersSection/UsersSection";
import {
    actions as actionUsers,
    getPageSizeSelector,
    getUsersFilteredByNameSubstringSelector,
    setReceivedServerUsers, setReceivedServerUsersAll, setReceivedServerUsersFiltered
} from "../../redux/modules/usersRedux";
import withRouter from "react-router/es/withRouter";





class UsersSectionContainer extends React.Component {
    //---
    componentDidMount() {
        if (this.props.pageNumber === 1){
            this.props.getUsersFromServer(this.props.pageNumber);
        }
    }

    // componentWillMount() {
    //     this.props.getUsersFromServerFiltered();
    // }

    //---
    render() {
        return <UsersSection {...this.props} />
    }
}

//---

//----
const mapStateToProps = (state) => {
    return{
        isAuth:             state.auth.userAuthData.userId !== null, // true / false
        // usersList:          getUsersFilteredByNameSubstringSelector(state, state.usersPage.filterSubstring),
        usersList:          state.usersPage.usersList,
        //filteredUsersList:  state.usersPage.filteredUsersList,
        pageNumber:         state.usersPage.pageNumber,
        hasNextpageFlag:    getPageSizeSelector(state),
        filterSubstring:    state.usersPage.filterSubstring,
        // isAllUsersReceived: state.usersPage.isAllUsersReceived,
        totalCount:         state.usersPage.totalCount,
        filteredStatus:        state.usersPage.usersFilteredProcessError,
        loginingErrorMessage:  state.usersPage.userStatusUpdatingErrorMessage,
    }
};
const mapDispatchToProps = (dispatch) => ({
    getUsersFromServer: () => {
        dispatch(setReceivedServerUsers());
    },
    clearUsersList: () => {
        dispatch(actionUsers.clearUsersList())
    },
    onChangeFilterByNameSubstring: (substring) => {
        dispatch(actionUsers.setFilterSubstring(substring));
        dispatch(setReceivedServerUsersFiltered())
    },
    getUsersFromServerFiltered: (totalCount) => {
        dispatch(setReceivedServerUsersAll(totalCount))
    },
    // onSearchChange: () => {
    //     dispatch(setReceivedServerUsersFiltered())
    // }
});

//----
export  default withRouter(connect( mapStateToProps, mapDispatchToProps)(UsersSectionContainer));
//---