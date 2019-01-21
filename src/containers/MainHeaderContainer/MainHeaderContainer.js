import React from 'react';
import {connect} from "react-redux";
import MainHeader from "../../components/MainHeader/MainHeader";



const mapStateToProps = (state) => {
    return{
        status:       state.loginPage.status,
        isLoggedIn:   state.auth.isLoggedIn,
        userPic:      state.auth.userPic,
        userName:     state.auth.userName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};
//----
const MainHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MainHeader);
//---

export default MainHeaderContainer;