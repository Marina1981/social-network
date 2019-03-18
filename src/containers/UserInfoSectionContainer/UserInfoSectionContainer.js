import React from "react";
import connect from "react-redux/es/connect/connect";
import UserInfoSection from "../../components/UserInfoSection/UserInfoSection";
import {actions as actionsProfile, isUserProfileOwner, setReceivedServerUserProfile,
    updateAuthUserProfileFromCreatingUserProfile} from "../../redux/modules/profileRedux";
import {actions as actionsUserStatus, updateUserStatusFromCreatingUserStatus} from "../../redux/modules/userStatusRedux";


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
        isAuth:                      state.auth.userAuthData.userId !== null, // true / false
        authUserId:                  state.auth.userAuthData.userId,
        userName:                    state.auth.userAuthData.userLogin,
        userProfile:                 state.profilePage.userProfile,
        status:                      state.userStatusBlock.userStatus,
        creatingUserStatus:          state.userStatusBlock.creatingUserStatus,
        profilePage:                 state.profilePage,
        creatingUserProfile_aboutMe: state.profilePage.creatingUserProfile_aboutMe,

        creatingUserProfile_lookingForAJobDescription:  state.profilePage.creatingUserProfile_lookingForAJobDescription,
        isOwner:                     isUserProfileOwner(state)
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
            dispatch(actionsProfile.copyContactToCreatingContact(key, true))
        },
        onChangeCreatingContacts: (text, key) => {
            dispatch(actionsProfile.setCreatingContact(text, key))
        },

        onLookingForAJobDescriptionChangeRequest: () => {
            dispatch(actionsProfile.copyDescriptionToCreatingDescription(true))
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
        onCreatingUserStatusFinishCommitted: (values) => {
            dispatch(updateUserStatusFromCreatingUserStatus(values));
        }
    }
};

//----
export default connect(mapStateToProps, mapDispatchToProps)(UserInfoSectionContainer);
//---