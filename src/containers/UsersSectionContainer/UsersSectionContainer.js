import React from 'react';
import connect from "react-redux/es/connect/connect";
import UsersSection from "../../components/UsersSection/UsersSection";
import {setReceivedServerUsers} from "../../redux/modules/usersAxiosRedux";
import {actions as actionUsers, getPageSize} from "../../redux/modules/usersRedux";





class UsersSectionContainer extends React.Component {
    //---
    componentDidMount() {
        if (this.props.pageNumber === 1){

            this.props.getUsersFromServer(this.props.pageNumber);
        }
    }
    //---
    render() {
        return <UsersSection {...this.props} />
    }
}

//---


//----
const mapStateToProps = (state) => {
    return{
        isAuth:          state.auth.userAuthData.userId !== null, // true / false
        usersList:       state.usersPage.usersList,
        pageNumber:      state.usersPage.pageNumber,
        hasNextpageFlag: getPageSize(state)
    }
};
const mapDispatchToProps = (dispatch) => ({
    getUsersFromServer: () => {
        dispatch(setReceivedServerUsers());
    },
    clearUsersList: () => {
        dispatch(actionUsers.clearUsersList())
    }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UsersSectionContainer);
//---