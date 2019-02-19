import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {
    actions as actionsProfile,
    setReceivedServerUserProfile,
    updateUserProfileFromCreatingUserProfile
} from "../../redux/modules/profileRedux";




class UserInfoSectionContainer extends React.Component {
    //---
    componentDidMount() {
        this.props.onDidMount();
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
const mapDispatchToProps = (dispatch) => {
    return {

        onAboutMeChangeRequest: () => {
            dispatch(actionsProfile.copyAboutMeToCreatingAboutMe())
        },
        onChangeCreatingProfileAboutMe: (text) => {
            dispatch(actionsProfile.setCreatingAboutMe(text))
        },
        onSkypeChangeRequest: () => {
            dispatch(actionsProfile.copySkypeToCreatingSkype())
        },
        onChangeCreatingProfileSkype: (skype) => {
            dispatch(actionsProfile.setCreatingSkype(skype))
        },
        onVkChangeRequest: () => {
            dispatch(actionsProfile.copyVkToCreatingVk())
        },
        onChangeCreatingProfileVk: (vk) => {
            dispatch(actionsProfile.setCreatingVk(vk))
        },
        onFacebookChangeRequest: () => {
            dispatch(actionsProfile.copyFacebookToCreatingFacebook())
        },
        onChangeCreatingProfileFacebook: (facebook) => {
            dispatch(actionsProfile.setCreatingFacebook(facebook))
        },

        onIcqChangeRequest: () => {
            dispatch(actionsProfile.copyIcqToCreatingIcq)
        },
        onChangeCreatingProfileIcq: (icq) => {
            dispatch(actionsProfile.setCreatingIcq(icq))
        },

        onEmailChangeRequest: () => {
            dispatch(actionsProfile.copyEmailToCreatingEmail)
        },
        onChangeCreatingProfileEmail: (email) => {
            dispatch(actionsProfile.setCreatingEmail(email))
        },
        onGooglePlusChangeRequest: () => {
            dispatch(actionsProfile.copyGooglePlusToCreatingGooglePlus())
        },
        onChangeCreatingProfileGooglePlus: (googlePlus) => {
            dispatch(actionsProfile.setCreatingGooglePlus(googlePlus))
        },

        onTwitterChangeRequest: () => {
            dispatch(actionsProfile.copyTwitterToCreatingTwitter())
        },
        onChangeCreatingProfileTwitter: (twitter) => {
            dispatch(actionsProfile.setCreatingTwitter(twitter))
        },

        onInstagramChangeRequest: () => {
            dispatch(actionsProfile.copyInstagramToCreatingInstagram)
        },
        onChangeCreatingProfileInstagram: (instagram) => {
            dispatch(actionsProfile.setCratingInstagram(instagram))
        },

        onWhatsAppChangeRequest: () => {
            dispatch(actionsProfile.copyWhatsAppToCreatingWhatsApp())
        },
        onChangeCreatingProfileWhatsApp: (whatsApp) => {
            dispatch(actionsProfile.setCreatingWhatsApp(whatsApp))
        },

        onLookingForAJobDescriptionChangeRequest: () => {
            dispatch(actionsProfile.copyLookingForAJobDescriptionCreatingLookingForAJobDescription())
        },
        onChangeCreatingProfileLookingForAJobDescription: (text) => {
            dispatch(actionsProfile.setCreatingLookingForAJobDescription(text))
        },
        onChangeRememberMeFlag: () => {
            dispatch(actionsProfile.setCreatingLookingForAJobFlag())
        },

        onDidMount: () => {
            dispatch(setReceivedServerUserProfile())
        },

        onCreatingUserProfileFinishCommitted: () => {
            dispatch(updateUserProfileFromCreatingUserProfile())
        }
    }
};

//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserInfoSectionContainer);
//---