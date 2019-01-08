import {combineReducers, createStore} from "redux";
import {loginPageReducer} from "./loginPage";
import {profilePageReducer} from "./profilePage";
import {dialogsPageReducer} from "./dialogsPage";
// import React from "react";



const superReducer = combineReducers({
    loginPageState:    loginPageReducer,
    profilePageState:  profilePageReducer,
    dialogsPageState:  dialogsPageReducer
});

const store = createStore(superReducer);

export default store;




