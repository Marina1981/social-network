import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {getUserProfile, updateUserProfile} from "../../redux/modules/profileRedux";




class UserInfoSectionContainer extends React.Component {
    //---
    // componentDidMount() {
    //     this.props.getUserProfile(...this.props.userId);
    // }

    //---
    render() {
        return <UserInfoSection {...this.props} />
    }
}

//---


//----
const mapStateToProps = (state) => {
    return{
        isAuth:        state.auth.userAuthData.userId !== null, // true / false
        userId:        state.auth.userAuthData.userId,
        userPicURL:    state.profilePage.userInfo.userPicURL,
        userName:      state.auth.userAuthData.userLogin,
        userBirthDate: state.profilePage.userInfo.userBirthDate,
        userCity:      state.profilePage.userInfo.userCity,
        userEducation: state.profilePage.userInfo.userEducation,
        userWebSite:   state.profilePage.userInfo.userWebSite,
        userStatus:    state.profilePage.userInfo.userStatus,
        userInfo:      state.profilePage.userInfo,
        userProfile:   state.profilePage.userProfile
    }
};
const mapDispatchToProps = (dispatch) => ({
    getUserProfile: () => {
        // dispatch(updateUserProfile())
    }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---