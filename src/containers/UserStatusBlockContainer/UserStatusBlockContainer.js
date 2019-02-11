import React           from 'react';
import UserStatusBlock from "../../components/UserStatusBlock/UserStatusBlock";
import connect         from "react-redux/es/connect/connect";
import {actions as userStatusActions} from "../../redux/modules/userStatusRedux";
import {
    changeServerUserStatus,
    setReceivedServerUserStatus,
    updateUserStatusFromCreatingUserStatus
} from "../../redux/modules/userStatusAxiosRedux";


class UserStatusBlockContainer extends React.Component {

    render() {
        return <UserStatusBlock {...this.props} />
    }
}

//---


//----
const mapStateToProps = (state) => {
    return {
        status:             state.userStatusBlock.userStatus,
        creatingUserStatus: state.userStatusBlock.creatingUserStatus
    }
};
const mapDispatchToProps = (dispatch) => {

    return{
        onUserStatusChangeRequest: () => {
            dispatch(userStatusActions.copyUserStatusToCreatingUserStatus())
        },

        onChangeCreatingUserStatus: (creatingUserStatus) => {
            dispatch(userStatusActions.setCreatingUserStatus(creatingUserStatus))
        },
        onCreatingUserStatusFinishCommitted: () => {
            dispatch(updateUserStatusFromCreatingUserStatus());
            // dispatch(setReceivedServerUserStatus())
        }
    }
};
//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserStatusBlockContainer);
//---