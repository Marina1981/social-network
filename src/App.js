import React  from 'react';
import './App.css';
import Route         from "react-router/es/Route";
import ProfilePage   from "./components/ProfilePage/ProfilePage";
import DialogsPage   from "./components/DialogsPage/DialogsPage";
import {withRouter}  from "react-router";
import NewsPage      from "./components/NewsPage/NewsPage";
import LoginPage     from "./components/LoginPage/LoginPage";
import MainHeader from "./components/MainHeader/MainHeader";
import MainSidebar from "./components/MainSideBar/MainSidebar";


const App = () => {
    return (
            <div className="App">
                <div className="wraper-header">
                    <MainHeader/>
                </div>
                <div className="wraper-sidebar">
                    <MainSidebar/>
                </div>
                <Route exact
                       path='/'
                       render={() => <LoginPage />} />
                <Route exact
                       path='/Profile'
                       render={ () => <ProfilePage/>} />
                <Route exact
                       path='/Dialog'
                       render={ () => <DialogsPage/>} />
                <Route exact
                       path='/News'
                       render={ () => <NewsPage />} />

            </div>

    )

};

let superApp = withRouter(App);
export default superApp;
