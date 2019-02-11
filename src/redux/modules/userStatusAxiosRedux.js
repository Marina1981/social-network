import axios, {userStatusUpdatingProcessStatuses} from "../../dal/axios-instance";
import {actions as actionsUserStatus, getCreatingUserStatus} from "./userStatusRedux";
import {getUserId} from "./authRedux";


export const setReceivedServerUserStatus = () => (dispatch, getState) => {

    const globalState = getState();
    const userId = getUserId(globalState);
    axios.get('profile/status/' + userId)
        .then(result => {
            dispatch(actionsUserStatus.setUserStatus(result.data))
        })
};

//---
export const updateUserStatusFromCreatingUserStatus = () => (dispatch, getState) => {
    const globalState = getState();
    const status = getCreatingUserStatus(globalState);

    dispatch(actionsUserStatus.setUserStatusUpdatingProcessStatus(userStatusUpdatingProcessStatuses.IN_PROGRESS));

    axios.put('profile/status', {status})
        .then(result => {
            if (result.data.resultCode === 0){
               // dispatch(actionsUserStatus.setUsersStatus(status))
                dispatch(setReceivedServerUserStatus());
                dispatch(actionsUserStatus.setCreatingUserStatus(null))
            }
        })
};