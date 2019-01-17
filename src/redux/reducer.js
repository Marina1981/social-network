import {combineReducers}    from "redux";

import {reducer as loginPageReducer}   from "./modules/loginRedux";
import {reducer as profilePageReducer} from "./modules/profileRedux";
import {reducer as dialogsPageReducer} from "./modules/dialogsRedux";
import authReducer from "./modules/authReducer";




const  rootReducer = combineReducers({
    auth:         authReducer,
    loginPage:    loginPageReducer,
    profilePage:  profilePageReducer,
    dialogsPage:  dialogsPageReducer
});

export default rootReducer;