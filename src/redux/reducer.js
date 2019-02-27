import {combineReducers}    from "redux";

import {reducer as loginPageReducer}   from "./modules/loginRedux";
import {reducer as profilePageReducer} from "./modules/profileRedux";
import {reducer as dialogsPageReducer} from "./modules/dialogsRedux";
import {reducer as usersPageReducer}   from "./modules/usersRedux";
import {reducer as userStatusBlockReducer}  from "./modules/userStatusRedux";
import authRedux from "./modules/authRedux";
import {reducer as formReducer} from 'redux-form';




const  rootReducer = combineReducers({
    auth:              authRedux,
    loginPage:         loginPageReducer,
    profilePage:       profilePageReducer,
    dialogsPage:       dialogsPageReducer,
    usersPage:         usersPageReducer,
    userStatusBlock:   userStatusBlockReducer,
    form:              formReducer
});

export default rootReducer;