import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {
    actions as actionsProfile, isUserProfileOwner,
    setReceivedServerUserProfile, setReceivedServerUsersProfile,
    updateUserProfileFromCreatingUserProfile
} from "../../redux/modules/profileRedux";
import withRouter from "react-router/es/withRouter";


class UserInfoSectionContainer extends React.Component {
    //---
    componentDidMount() {
        this.props.onDidMount();

        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
    }

    //---
    render() {
        return (
            <UserInfoSection {...this.props} />
        )
    }
}

//----
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.userAuthData.userId !== null, // true / false
        userId: state.auth.userAuthData.userId,
        // userPicURL:    state.profilePage.userInfo.userPicURL,
        userName: state.auth.userAuthData.userLogin,
        userInfo: state.profilePage.userInfo,
        userProfile: state.profilePage.userProfile,

        creatingUserProfile_aboutMe: state.profilePage.creatingUserProfile_aboutMe,
        creatingUserProfile_skype: state.profilePage.creatingUserProfile_skype,
        creatingUserProfile_vk: state.profilePage.creatingUserProfile_vk,
        creatingUserProfile_facebook: state.profilePage.creatingUserProfile_facebook,
        creatingUserProfile_icq: state.profilePage.creatingUserProfile_icq,
        creatingUserProfile_email: state.profilePage.creatingUserProfile_email,
        creatingUserProfile_googlePlus: state.profilePage.creatingUserProfile_googlePlus,
        creatingUserProfile_twitter: state.profilePage.creatingUserProfile_twitter,
        creatingUserProfile_instagram: state.profilePage.creatingUserProfile_instagram,
        creatingUserProfile_whatsApp: state.profilePage.creatingUserProfile_whatsApp,
        creating_lookingForAJobDescription: state.profilePage.creating_lookingForAJobDescription,
        isOwner: isUserProfileOwner(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAboutMeChangeRequest: () => {
                dispatch(actionsProfile.copyAboutMeToCreatingAboutMe())
        },
        onChangeCreatingProfileAboutMe: (text) => {
            dispatch(actionsProfile.setCreatingAboutMe(text))
        },

        onContactsChangeRequest: () => {
            dispatch(actionsProfile.copyContactToCreatingContact())
        },
        onChangeCreatingContacts: (key) => {
            dispatch(actionsProfile.setCreatingContact(key))
        },
        // onSkypeChangeRequest: () => {
        //     dispatch(actionsProfile.copySkypeToCreatingSkype())
        // },
        // onContactsChangeRequest: (key) => {
        //     dispatch(actionsProfile.copyContactToCreatingContact(key))
        // },
        // onChangeCreatingProfileSkype: (skype) => {
        //     dispatch(actionsProfile.setCreatingSkype(skype))
        // },
        // onVkChangeRequest: () => {
        //     dispatch(actionsProfile.copyVkToCreatingVk())
        // },
        // onChangeCreatingProfileVk: (vk) => {
        //     dispatch(actionsProfile.setCreatingVk(vk))
        // },
        // onFacebookChangeRequest: () => {
        //     dispatch(actionsProfile.copyFacebookToCreatingFacebook())
        // },
        // onChangeCreatingProfileFacebook: (facebook) => {
        //     dispatch(actionsProfile.setCreatingFacebook(facebook))
        // },
        // onIcqChangeRequest: () => {
        //     dispatch(actionsProfile.copyIcqToCreatingIcq())
        // },
        // onChangeCreatingProfileIcq: (icq) => {
        //     dispatch(actionsProfile.setCreatingIcq(icq))
        // },
        // onEmailChangeRequest: () => {
        //     dispatch(actionsProfile.copyEmailToCreatingEmail())
        // },
        // onChangeCreatingProfileEmail: (email) => {
        //     dispatch(actionsProfile.setCreatingEmail(email))
        // },
        // onGooglePlusChangeRequest: () => {
        //     dispatch(actionsProfile.copyGooglePlusToCreatingGooglePlus())
        // },
        // onChangeCreatingProfileGooglePlus: (googlePlus) => {
        //     dispatch(actionsProfile.setCreatingGooglePlus(googlePlus))
        // },
        // onTwitterChangeRequest: () => {
        //     dispatch(actionsProfile.copyTwitterToCreatingTwitter())
        // },
        // onChangeCreatingProfileTwitter: (twitter) => {
        //     dispatch(actionsProfile.setCreatingTwitter(twitter))
        // },
        // onInstagramChangeRequest: () => {
        //     dispatch(actionsProfile.copyInstagramToCreatingInstagram())
        // },
        // onChangeCreatingProfileInstagram: (instagram) => {
        //     dispatch(actionsProfile.setCratingInstagram(instagram))
        // },
        // onWhatsAppChangeRequest: () => {
        //     dispatch(actionsProfile.copyWhatsAppToCreatingWhatsApp())
        // },
        // onChangeCreatingProfileWhatsApp: (whatsApp) => {
        //     dispatch(actionsProfile.setCreatingWhatsApp(whatsApp))
        // },
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
        },
        getUserProfile: (userId) => {
            dispatch(setReceivedServerUserProfile(userId))
        }
    }
};

//----
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserInfoSectionContainer));
//---