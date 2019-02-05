import React from 'react';
import {actions as profileActions} from "../../redux/modules/profileRedux";
import {connect} from "react-redux";
import ProfileSection from "../../components/ProfileSection/ProfileSection";


const ProfileSectionContainer = (props) => {
  return <ProfileSection {...props} />
};

//---
const mapStateToProps = (state) => {
    return {
        isAuth:           state.auth.userAuthData.userId !== null, // true / false
        userInfo:         state.profilePage.userInfo,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        messagesList:     state.profilePage.wall.messagesList,
        creatingMessage:  state.profilePage.wall.creatingMessage,
        // loginingStatus:   state.auth.isLoggedIn

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

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ProfileSectionContainer);
