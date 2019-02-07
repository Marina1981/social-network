import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";



class UserInfoSectionContainer extends React.Component {
    //---
    // componentDidMount() {
    //     this.props.onDidMount();
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
        userPicURL:    state.profilePage.userInfo.userPicURL,
        userName:      state.profilePage.userInfo.userName,
        userBirthDate: state.profilePage.userInfo.userBirthDate,
        userCity:      state.profilePage.userInfo.userCity,
        userEducation: state.profilePage.userInfo.userEducation,
        userWebSite:   state.profilePage.userInfo.userWebSite
    }
};
const mapDispatchToProps = (dispatch) => ({
    // onDidMount: () => {
    //     dispatch(setReceivedServerUsers());
    // }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---