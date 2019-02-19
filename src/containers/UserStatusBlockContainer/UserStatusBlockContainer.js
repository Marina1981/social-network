import React           from 'react';
import UserStatusBlock from "../../components/UserStatusBlock/UserStatusBlock";
import connect         from "react-redux/es/connect/connect";
import {
    actions as actionsUserStatus, setReceivedServerUserStatus,
    updateUserStatusFromCreatingUserStatus
} from "../../redux/modules/userStatusRedux";



class UserStatusBlockContainer extends React.Component {

    componentWillMount() {
        this.props.getStatus();
    }

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
            dispatch(actionsUserStatus.copyUserStatusToCreatingUserStatus())
        },

        onChangeCreatingUserStatus: (creatingUserStatus) => {
            dispatch(actionsUserStatus.setCreatingUserStatus(creatingUserStatus))
        },
        onCreatingUserStatusFinishCommitted: () => {
            dispatch(updateUserStatusFromCreatingUserStatus());
        },
        getStatus: () => {
            dispatch(setReceivedServerUserStatus());
        }
    }
};
//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserStatusBlockContainer);
//---