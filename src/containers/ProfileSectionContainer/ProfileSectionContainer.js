import React from 'react';
import {actions as profileActions} from "../../redux/modules/profileRedux";
import {connect} from "react-redux";
import ProfileSection from "../../components/ProfileSection/ProfileSection";


//---
const mapStateToProps = (state) => {
    return {
        userInfo:         state.profilePage.userInfo,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        messagesList:     state.profilePage.wall.messagesList,
        creatingMessage:  state.profilePage.wall.creatingMessage,
        status:           state.auth.isLoggedIn

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCreatingMessageChanged: (message) => {
            dispatch(profileActions.setCreatingPost(message));
        },
        onCreatingMessageFinishCommitted: (messageId) => {
            dispatch(profileActions.addCreatingMessageAsPost(messageId));
        },
        onMesaageLikeIncrementRequest: (messageId) => (
            dispatch(profileActions.incrementPostLikeCount(messageId))
        )
    }
};

const ProfileSectionContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(ProfileSection);
//---

export default ProfileSectionContainer;