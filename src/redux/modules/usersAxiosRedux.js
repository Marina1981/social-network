import axios from "../../dal/axios-instance";
import {actions as actionsLogin} from "./loginRedux";
import {actions as actionsUsers} from "./usersRedux";
import {loginingProcessStatuses} from "../../dal/axios-instance";


//---
export const setReceivedServerUsers = () => (dispatch) => {
    axios.get('users')
        .then(result => {
            dispatch(actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actionsUsers.setUsersList(result.data.items.map( u => ({userName: u.name,
                userPicURL: u.photo,
                userStatus: u.status,
                userUniqueUrlName: u.uniqueUrlName}))))
        })
};

//---