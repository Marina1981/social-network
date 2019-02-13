import React           from 'react';
import UserStatusBlock from "../../components/UserStatusBlock/UserStatusBlock";
import connect         from "react-redux/es/connect/connect";
import {
    actions as userStatusActions, getUserStatus,
    updateUserStatus
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
            dispatch(userStatusActions.copyUserStatusToCreatingUserStatus())
        },

        onChangeCreatingUserStatus: (creatingUserStatus) => {
            dispatch(userStatusActions.setCreatingUserStatus(creatingUserStatus))
        },
        onCreatingUserStatusFinishCommitted: () => {
            dispatch(updateUserStatus());
        },
        getStatus: () => {
            dispatch(getUserStatus());
        }
    }
};
//----
export  default connect(
    mapStateToProps,
    mapDispatchToProps)(UserStatusBlockContainer);
//---