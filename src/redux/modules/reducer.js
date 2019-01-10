import {combineReducers}    from "redux";
import {loginPageReducer}   from "./login";
import {profilePageReducer} from "./profile";
import {dialogsPageReducer} from "./dialogs";


console.log(loginPageReducer);
console.log(profilePageReducer);

export const superReducer = combineReducers({
    loginPage:    loginPageReducer,
    profilePage:  profilePageReducer,
    dialogsPage:  dialogsPageReducer
});
