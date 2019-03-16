import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {actions as actionsProfile, isUserProfileOwner, setReceivedServerUserProfile,
    updateAuthUserProfileFromCreatingUserProfile} from "../../redux/modules/profileRedux";
import withRouter from "react-router/es/withRouter";
import {actions as actionsUserStatus, setReceivedServerUserStatus,
    updateUserStatusFromCreatingUserStatus} from "../../redux/modules/userStatusRedux";


class UserInfoSectionContainer extends React.Component {
    //---
    componentDidMount() {
        // const authUserId = this.props.match.params.userId ? this.props.match.params.userId : this.props.authUserId;
        // const userId = this.props.match.params.userId;
        // this.props.onDidMount(userId);
    }

    //---
    render() {
       /* if (this.props.isOwner) alert('i am owner')*/
        return (
            <UserInfoSection {...this.props} />
        )
    }
}

//----
const mapStateToProps = (state) => {
    return {
        isAuth:             state.auth.userAuthData.userId !== null, // true / false
        authUserId:         state.auth.userAuthData.userId,
        // userPicURL:    state.profilePage.userInfo.userPicURL,
        userName:           state.auth.userAuthData.userLogin,
        userInfo:           state.profilePage.userInfo,
        userProfile:        state.profilePage.userProfile,

        status:             state.userStatusBlock.userStatus,
        creatingUserStatus: state.userStatusBlock.creatingUserStatus,

        profilePage:        state.profilePage,
        creatingUserProfile_aboutMe:        state.profilePage.creatingUserProfile_aboutMe,

        creating_lookingForAJobDescription:  state.profilePage.creating_lookingForAJobDescription,
        isOwner: isUserProfileOwner(state)
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

        // onDidMount: (userId) => {
        //     dispatch(setReceivedServerUserProfile(userId));
        //     dispatch(setReceivedServerUserStatus(userId));
        // },

        onAboutMeChangeRequest: () => {
                dispatch(actionsProfile.copyAboutMeToCreatingAboutMe())
        },
        // onChangeCreatingProfileAboutMe: (text) => {
        //     dispatch(actionsProfile.setCreatingAboutMe(text))
        // },

        onContactsChangeRequest: (key) => {
            dispatch(actionsProfile.copyContactToCreatingContact(key))
        },
        onChangeCreatingContacts: (text, key) => {
            dispatch(actionsProfile.setCreatingContact(text, key))
        },




        onLookingForAJobDescriptionChangeRequest: () => {
            dispatch(actionsProfile.copyDescriptionToCreatingDescription())
        },
        onChangeCreatingProfileLookingForAJobDescription: (text) => {
            dispatch(actionsProfile.setCreatingDescription(text))
        },




        onChangeRememberMeFlag: () => {
            dispatch(actionsProfile.setCreatingLookingForAJobFlag())
        },

        onCreatingUserProfileFinishCommitted: (values) => {
            dispatch(updateAuthUserProfileFromCreatingUserProfile(values))
        },

        onUserStatusChangeRequest: (userId) => {
            dispatch(actionsUserStatus.copyUserStatusToCreatingUserStatus(userId))
        },

        onChangeCreatingUserStatus: (creatingUserStatus) => {
            dispatch(actionsUserStatus.setCreatingUserStatus(creatingUserStatus))
        },
        onCreatingUserStatusFinishCommitted: () => {
            dispatch(updateUserStatusFromCreatingUserStatus());
        }
    }
};

//----
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoSectionContainer);
//---