import React          from 'react';
import './App.css';
import Route                   from "react-router/es/Route";
import {Switch, withRouter}    from "react-router";
import MainSidebar             from "./components/MainSideBar/MainSidebar";
import NewsSection             from "./components/NewsSection/NewsSection";
import DialogsSectionContainer from "./containers/DialogsSectionContainer/DialogsSectionContainer";
import LoginSectionContainer   from "./containers/LoginSectionContainer/LoginSectionContainer";
import MainHeaderContainer     from "./containers/MainHeaderContainer/MainHeaderContainer";
import ProfileSectionContainer from "./containers/ProfileSectionContainer/ProfileSectionContainer";
import SettingsSection from "./components/SettingsSection/SettingSection";
import SettingsSectionContainer from "./containers/SettingsSectionContainer/SettingsSectionContainer";


const App = () => {
    return (
        <Switch>
            <div className="App">
                <div className="wraper-header">
                    <MainHeaderContainer/>
                </div>
                <div className="wraper-sidebar">
                    <MainSidebar/>
                </div>
                <Route exact
                       path='/Login'
                       render={() => <LoginSectionContainer/>} />
                <Route exact
                       path='/Profile'
                       render={ () => <ProfileSectionContainer/>} />
                <Route exact
                       path='/Dialog'
                       render={ () => <DialogsSectionContainer/>} />
                <Route exact
                       path='/News'
                       render={ () => <NewsSection/>} />
                <Route exact
                       path='/Settings'
                       render={ () => <SettingsSectionContainer/>}/>
                {/*<Route path='/'*/}
                       {/*render={ () => <div className="path-error">404</div>}/>*/}

            </div>
        </Switch>

    )

};

let superApp = withRouter(App);
export default superApp;
