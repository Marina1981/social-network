import React, { Component } from 'react';
import './App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route         from "react-router/es/Route";
import ProfilePage   from "./ProfilePageComponent/ProfilePage";
import LoginPage     from "./LoginPageComponent/LoginPage";
import DialogsPage   from "./DialogsPageComponent/DialogsPage";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path='/Login'   component = {LoginPage}/>
                <Route exact path='/Profile' component = {ProfilePage}/>
                <Route exact path='/Dialog'  component = {DialogsPage}/>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
