import React from 'react';
import {actions as profileActions} from "../../redux/modules/profileRedux";
import {connect} from "react-redux";
import ProfileSection from "../../components/ProfileSection/ProfileSection";


class ProfileSectionContainer extends React.Component {
    render() {
        return <ProfileSection {...this.props} />
    }
}

//---
const mapStateToProps = (state) => {
    return {
        isAuth:           state.auth.userAuthData.userId !== null, // true / false
        userPicURL:       state.profilePage.userInfo.userPicURL,
        selectedFriendId: state.dialogsPage.selectedFriendId,
        messagesList:     state.profilePage.wall.messagesList,
        creatingMessage:  state.profilePage.wall.creatingMessage,
        userName:         state.profilePage.userProfile.fullName
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
