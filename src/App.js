import React, { Component } from 'react';
import './App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route         from "react-router/es/Route";
import ProfilePage   from "./ProfilePageComponent/ProfilePage";
import DialogsPage   from "./DialogsPageComponent/DialogsPage";
import LoginPage     from "./LoginPageComponent/LoginPage";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact
                       path='/'
                       render={() => <LoginPage />} />
                <Route exact
                       path='/Profile'
                       render={ () => <ProfilePage  name="Orange"
                                                    data='10.10.200'
                                                    city="Minsk"
                                                    education='BGU'
                                                    webSite='www.it-kamasutra.com'
                                                    posts=''
                                                    currentWritingPost='' />} />
                <Route exact
                       path='/Dialog'
                       render={ () => <DialogsPage />} />
            </div>
        </BrowserRouter>
    );
  }
}


export default App;
