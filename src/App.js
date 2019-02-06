import React from 'react';
import './App.css';
import Route from "react-router/es/Route";
import {Switch, withRouter} from "react-router";
import NewsSection from "./components/NewsSection/NewsSection";
import DialogsSectionContainer from "./containers/DialogsSectionContainer/DialogsSectionContainer";
import LoginSectionContainer from "./containers/LoginSectionContainer/LoginSectionContainer";
import ProfileSectionContainer from "./containers/ProfileSectionContainer/ProfileSectionContainer";
import SettingsSectionContainer from "./containers/SettingsSectionContainer/SettingsSectionContainer";
import TemplateWithoutSideBar from "./components/TemplateWithoutSideBar/TemplateWithoutSideBar";
import TemplateWithSideBar from "./components/TemplateWithSideBar/TemplateWithSideBar";
import NotFoundSection from "./components/NotFoundSection/NotFoundSection";
import UsersSectionContainer from "./containers/UsersSectionContainer/UsersSectionContainer";



const App = () => {
    return (

        <div className="App">
            <Switch>
                <Route exact
                       path='/login'
                       render={() =>
                           <TemplateWithoutSideBar>
                               <LoginSectionContainer/>
                           </TemplateWithoutSideBar>}/>
                <Route exact
                       path='/profile'
                       render={() =>
                           <TemplateWithSideBar>
                               <ProfileSectionContainer/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/dialog/:friendId?'
                       render={() =>
                           <TemplateWithSideBar>
                               <DialogsSectionContainer/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/news'
                       render={() =>
                           <TemplateWithSideBar>
                               <NewsSection/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/settings'
                       render={() =>
                           <TemplateWithSideBar>
                               <SettingsSectionContainer/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/users'
                       render={() =>
                           <TemplateWithSideBar>
                               <UsersSectionContainer/>
                           </TemplateWithSideBar>}/>
                <Route path='/'
                       render={() =>
                           <TemplateWithoutSideBar>
                               <NotFoundSection/>
                           </TemplateWithoutSideBar>}/>
            </Switch>
        </div>


    )

};

let superApp = withRouter(App);
export default superApp;
