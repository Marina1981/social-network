import axios from "../../dal/axios-instance";
import {actions as actionsLogin} from "./loginRedux";
import {actions as actionsUsers} from "./usersRedux";
import {loginingProcessStatuses} from "../../dal/axios-instance";


//---
export const setReceivedServerUsers = () => (dispatch, getState) => {

    const globalState = getState();
    const {pageSize = 3, pageNumber = 1} = globalState.usersPage;   //destructuring

    axios.get(`users?count=${pageSize}&page=${pageNumber}`)
        .then(result => {

            // dispatch(actionsLogin.setLoginingProcessStatus(loginingProcessStatuses.READY));
            dispatch(actionsUsers.incrementCurrentPage());
            dispatch(actionsUsers.setUsersList(result.data.items, result.data.totalCount))
        })
};

//---