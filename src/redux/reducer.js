import {combineReducers}    from "redux";

import {reducer as loginPageReducer}   from "./modules/loginRedux";
import {reducer as profilePageReducer} from "./modules/profileRedux";
import {reducer as dialogsPageReducer} from "./modules/dialogsRedux";
import {reducer as usersPageReducer}   from "./modules/usersRedux";
import authRedux from "./modules/authRedux";




const  rootReducer = combineReducers({
    auth:         authRedux,
    loginPage:    loginPageReducer,
    profilePage:  profilePageReducer,
    dialogsPage:  dialogsPageReducer,
    usersPage:    usersPageReducer
});

export default rootReducer;