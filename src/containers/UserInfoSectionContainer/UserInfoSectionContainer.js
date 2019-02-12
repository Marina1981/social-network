import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {setReceivedServerUserStatus} from "../../redux/modules/loginAxiosRedux";
import {actions as actionProfile} from "../../redux/modules/profileRedux";



class UserInfoSectionContainer extends React.Component {
    //---
    // componentDidMount() {
    //     this.props.getUsersFromServer(...this.props.userId);
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
        userInfo:      state.profilePage.userInfo
    }
};
const mapDispatchToProps = (dispatch) => ({
    // onChangeSpanOfInput: (status) => {
    //     dispatch(actionProfile.setCreatingUserStatus(status))
    // }
    // getUsersFromServer: () => {
    //     dispatch(setReceivedServerUserStatus());
    // }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---