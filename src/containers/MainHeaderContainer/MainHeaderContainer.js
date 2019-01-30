import React from 'react';
import {connect} from "react-redux";
import MainHeader from "../../components/MainHeader/MainHeader";
import {logout} from "../../redux/modules/loginRedux";



const mapStateToProps = (state) => {
    return{
        status:       state.loginPage.status,
        isLoggedIn:   state.auth.isLoggedIn,
        userPic:      state.auth.userPic,
        userName:     state.auth.userName
    }
};

const mapDispatchToProps = (dispatch) => {
    // return {
    //     logout: () => {
    //         dispatch(logout());
    //     }
    // }
};
//----
const MainHeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(MainHeader);
//---

export default MainHeaderContainer;