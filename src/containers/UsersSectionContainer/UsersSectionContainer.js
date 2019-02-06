import React from 'react';
import connect from "react-redux/es/connect/connect";
import UsersSection from "../../components/UsersSection/UsersSection";
import {logOut, setReceivedServerUsers} from "../../redux/modules/loginAxiosRedux";




class UsersSectionContainer extends React.Component {
    //---
    componentDidMount() {
        this.props.onDidMount();
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
        isAuth:    state.auth.userAuthData.userId !== null, // true / false
        usersList: state.auth.usersList
    }
};
const mapDispatchToProps = (dispatch) => ({
    onDidMount: () => {
        dispatch(setReceivedServerUsers());
    }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UsersSectionContainer);
//---