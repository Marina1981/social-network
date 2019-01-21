import React  from 'react';
import {connect} from "react-redux";
import SettingsSection from "../../components/SettingsSection/SettingSection";
import {actions as profileActions} from "../../redux/modules/profileRedux";



//---
const mapStateToProps = (state) => {
    return {
        userName:         state.profilePage.userInfo.userName,
        userBirthDate:    state.profilePage.userInfo.userBirthDate,
        userCity:         state.profilePage.userInfo.userCity,
        userEducation:    state.profilePage.userInfo.userEducation,
        userWebSite:      state.profilePage.userInfo.userWebSite,
        language:         state.auth.language
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUserNameChanged: (userName) => {
            dispatch(profileActions.setUserName(userName));
        },
        onUserBirthDateChanged: (userBirthDate) => {
            dispatch(profileActions.setUserBirthDate(userBirthDate));
        },
        onUserCityChanged: (userCity) => {
            dispatch(profileActions.setUserName(userCity));
        },
        onUserEducationChanged: (userEducation) => {
            dispatch(profileActions.setUserName(userEducation));
        },
        onUserWebSiteChanged: (userWebSite) => {
            dispatch(profileActions.setUserName(userWebSite));
        },
    }
};

const SettingsSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(SettingsSection);
//---

export default SettingsSectionContainer;