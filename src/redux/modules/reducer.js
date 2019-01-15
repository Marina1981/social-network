import {combineReducers}    from "redux";

import {reducer as loginPageReducer}   from "./loginRedux";
import {reducer as profilePageReducer} from "./profileRedux";
import {reducer as dialogsPageReducer} from "./dialogsRedux";
import authReducer from "./authReducer";




export const superReducer = combineReducers({
    auth:         authReducer,
    loginPage:    loginPageReducer,
    profilePage:  profilePageReducer,
    dialogsPage:  dialogsPageReducer
});
