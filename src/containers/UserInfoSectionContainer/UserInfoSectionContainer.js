import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {actions as actionProfile, getUserProfile, updateUserProfile} from "../../redux/modules/profileRedux";
import {actions as userStatusActions, updateUserStatus} from "../../redux/modules/userStatusRedux";
import {actions as loginActions} from "../../redux/modules/loginRedux";




class UserInfoSectionContainer extends React.Component {
    //---
    componentDidMount() {
        this.props.getUserProfile();
    }

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
        // userPicURL:    state.profilePage.userInfo.userPicURL,
        userName:      state.auth.userAuthData.userLogin,
        // userBirthDate: state.profilePage.userInfo.userBirthDate,
        // userCity:      state.profilePage.userInfo.userCity,
        // userEducation: state.profilePage.userInfo.userEducation,
        // userWebSite:   state.profilePage.userInfo.userWebSite,
        userStatus:    state.profilePage.userInfo.userStatus,
        userInfo:      state.profilePage.userInfo,
        userProfile:   state.profilePage.userProfile,

        creatingUserProfileAboutMe:        state.profilePage.creatingUserProfileAboutMe,
        creatingUserProfileSkype:          state.profilePage.creatingUserProfileSkype,
        creatingUserProfileVk:             state.profilePage.creatingUserProfileVk,
        creatingUserProfileFacebook:       state.profilePage.creatingUserProfileFacebook,
        creatingUserProfileIcq:            state.profilePage.creatingUserProfileIcq,
        creatingUserProfileEmail:          state.profilePage.creatingUserProfileEmail,
        creatingUserProfileGooglePlus:     state.profilePage.creatingUserProfileGooglePlus,
        creatingUserProfileTwitter:        state.profilePage.creatingUserProfileTwitter,
        creatingUserProfileInstagram:      state.profilePage.creatingUserProfileInstagram,
        creatingUserProfileWhatsApp:       state.profilePage.creatingUserProfileWhatsApp,
        creatingLookingForAJobDescription: state.profilePage.creatingLookingForAJobDescription,



    }
};
const mapDispatchToProps = (dispatch) => ({
    onChangeCreatingProfileAboutMe: (text) => {
      dispatch(actionProfile.setCreatingAboutMe(text))
    },
    onChangeCreatingProfileSkype: (skype) => {
      dispatch(actionProfile.setCreatingSkype(skype))
    },
    onChangeCreatingProfileVk: (vk) => {
      dispatch(actionProfile.setCreatingVk(vk))
    },
    onChangeCreatingProfileFacebook: (facebook) => {
      dispatch(actionProfile.setCreatingFacebook(facebook))
    },
    onChangeCreatingProfileIcq: (icq) => {
      dispatch(actionProfile.setCreatingIcq(icq))
    },
    onChangeCreatingProfileEmail: (email) => {
      dispatch(actionProfile.setCreatingEmail(email))
    },
    onChangeCreatingProfileGooglePlus: (googlePlus) => {
      dispatch(actionProfile.setCreatingGooglePlus(googlePlus))
    },
    onChangeCreatingProfileTwitter: (twitter) => {
      dispatch(actionProfile.setCreatingTwitter(twitter))
    },
    onChangeCreatingProfileInstagram: (instagram) => {
      dispatch(actionProfile.setCratingInstagram(instagram))
    },
    onChangeCreatingProfileWhatsApp: (whatsApp) => {
      dispatch(actionProfile.setCreatingWhatsApp(whatsApp))
    },
    onChangeCreatingProfileLookingForAJobDescription: (text) => {
      dispatch(actionProfile.setCreatingLookingForAJobDescription(text))
    },
    onChangeRememberMeFlag: () => {
        dispatch(actionProfile.setCreatingLookingForAJobFlag())
    },

    onAboutMeChangeRequest: () => {
      dispatch(actionProfile.copyAboutMeToCreatingAboutMe())
    },
    onSkypeChangeRequest: () => {
      dispatch(actionProfile.copySkypeToCreatingSkype())
    },
    onVkChangeRequest: () => {
      dispatch(actionProfile.copyVkToCreatingVk())
    },
    onFacebookChangeRequest: () => {
      dispatch(actionProfile.copyFacebookToCreatingFacebook())
    },
    onIcqChangeRequest: () => {
      dispatch(actionProfile.copyIcqToCreatingIcq)
    },
    onEmailChangeRequest: () => {
      dispatch(actionProfile.copyEmailToCreatingEmail)
    },
    onGooglePlusChangeRequest: () => {
      dispatch(actionProfile.copyGooglePlusToCreatingGooglePlus())
    },
    onTwitterChangeRequest: () => {
      dispatch(actionProfile.copyTwitterToCreatingTwitter())
    },
    onInstagramChangeRequest: () => {
      dispatch(actionProfile.copyInstagramToCreatingInstagram)
    },
    onWhatsAppChangeRequest: () => {
      dispatch(actionProfile.copyWhatsAppToCreatingWhatsApp())
    },
    onLookingForAJobDescriptionChangeRequest: () => {
      dispatch(actionProfile.copyLookingForAJobDescriptionCreatingLookingForAJobDescription())
    },

    getUserProfile: () => {
        dispatch(getUserProfile())
    },
    onCreatingUserProfileFinishCommitted: () => {
        dispatch(updateUserProfile())
    }
});

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---