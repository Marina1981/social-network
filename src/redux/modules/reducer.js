import {combineReducers}    from "redux";

import {reducer as loginPageReducer}   from "./loginRedux";
import {reducer as profilePageReducer} from "./profileRedux";
import {reducer as dialogsPageReducer} from "./dialogsRedux";




export const superReducer = combineReducers({
    loginPage:    loginPageReducer,
    profilePage:  profilePageReducer,
    dialogsPage:  dialogsPageReducer
});
