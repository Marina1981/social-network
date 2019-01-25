import React  from 'react';
import './App.css';
import Route         from "react-router/es/Route";
import ProfilePage   from "./components/ProfilePage/ProfilePage";
import DialogsPage   from "./components/DialogsPage/DialogsPage";
import {withRouter}  from "react-router";
import NewsPage      from "./components/NewsPage/NewsPage";
import LoginPage     from "./components/LoginPage/LoginPage";


const App = () => {
    return (
            <div className="App">
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
