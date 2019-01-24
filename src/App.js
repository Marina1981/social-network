import React from 'react';
import './App.css';
import Route from "react-router/es/Route";
import {Switch, withRouter} from "react-router";
import MainSidebar from "./components/MainSideBar/MainSidebar";
import NewsSection from "./components/NewsSection/NewsSection";
import DialogsSectionContainer from "./containers/DialogsSectionContainer/DialogsSectionContainer";
import LoginSectionContainer from "./containers/LoginSectionContainer/LoginSectionContainer";
import MainHeaderContainer from "./containers/MainHeaderContainer/MainHeaderContainer";
import ProfileSectionContainer from "./containers/ProfileSectionContainer/ProfileSectionContainer";
import SettingsSectionContainer from "./containers/SettingsSectionContainer/SettingsSectionContainer";
import MainFooter from "./components/MainFooter/MainFooter";


const App = () => {
    return (

        <div className="App">
            <div className="wraper-header">
                <MainHeaderContainer/>
            </div>
            <div className="wraper-sidebar">
                <MainSidebar/>
            </div>
            <Switch>
                <Route exact
                       path='/login'
                       render={() => <LoginSectionContainer/>}/>
                <Route exact
                       path='/profile'
                       render={() => <ProfileSectionContainer/>}/>
                <Route exact
                       path='/dialog/:friendId?'
                       render={() => <DialogsSectionContainer/>}/>
                <Route exact
                       path='/news'
                       render={() => <NewsSection/>}/>
                <Route exact
                       path='/settings'
                       render={() => <SettingsSectionContainer/>}/>
                <Route path='/'
                       render={() => <div className="path-error">404</div>}/>
            </Switch>
            <div className="wraper-footer">
                <MainFooter/>
            </div>
        </div>


    )

};

let superApp = withRouter(App);
export default superApp;
