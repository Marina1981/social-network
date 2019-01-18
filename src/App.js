import React          from 'react';
import './App.css';
import Route          from "react-router/es/Route";
import {Switch, withRouter} from "react-router";
import MainHeader     from "./components/MainHeader/MainHeader";
import MainSidebar    from "./components/MainSideBar/MainSidebar";
import LoginSection   from "./components/LoginSection/LoginSection";
import NewsSection    from "./components/NewsSection/NewsSection";
import ProfileSection from "./components/ProfileSection/ProfileSection";
import DialogsSection from "./components/DialogSection/DialogsSection";


const App = () => {
    return (
        <Switch>
            <div className="App">
                <div className="wraper-header">
                    <MainHeader/>
                </div>
                <div className="wraper-sidebar">
                    <MainSidebar/>
                </div>
                <Route exact
                       path='/Login'
                       render={() => <LoginSection />} />
                <Route exact
                       path='/Profile'
                       render={ () => <ProfileSection/>} />
                <Route exact
                       path='/Dialog'
                       render={ () => <DialogsSection/>} />
                <Route exact
                       path='/News'
                       render={ () => <NewsSection />} />
                {/*<Route path='/'*/}
                       {/*render={ () => <div className="path-error">404</div>}/>*/}

            </div>
        </Switch>

    )

};

let superApp = withRouter(App);
export default superApp;
