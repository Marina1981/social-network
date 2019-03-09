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
import connect from "react-redux/es/connect/connect";
import {setReceivedServerUserProfile} from "./redux/modules/profileRedux";
import {setReceivedServerUserStatus} from "./redux/modules/userStatusRedux";
import PhotosSection from "./components/PhotosSection/PhotosSection";
import MusicSection from "./components/MusicSection/MusicSection";


const App = (appProps) => {
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
                <Route exact
                       path='/photos'
                       render={() =>
                           <TemplateWithSideBar>
                               <PhotosSection/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/music'
                       render={() =>
                           <TemplateWithSideBar>
                               <MusicSection/>
                           </TemplateWithSideBar>}/>
                <Route exact
                       path='/'
                       render={() =>
                           <TemplateWithoutSideBar>
                               <NotFoundSection/>
                           </TemplateWithoutSideBar>}/>
                <Route exact
                       path='/profile/users/:userId?'
                       render={(props) =>{
                                       const userId = props.match.params.userId;
                                       appProps.onUserProfileChangeRequest(userId);

                                       return (<TemplateWithSideBar>
                                                  <ProfileSectionContainer/>
                                               </TemplateWithSideBar>)}
                       }/>
                />
            </Switch>
        </div>


    )

};

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
   return {
       onUserProfileChangeRequest: (userId) => {
           dispatch(setReceivedServerUserProfile(userId));
           dispatch(setReceivedServerUserStatus(userId));
       }
   }
};


let superApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default superApp;
