import React  from 'react';
import './App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route         from "react-router/es/Route";
import ProfilePage   from "./ProfilePageComponent/ProfilePage";
import DialogsPage   from "./DialogsPageComponent/DialogsPage";
import LoginPage     from "./LoginPageComponent/LoginPage";

// атрибуты:
// profilePage: oбъект - profile: oбъект - { userInfo: объект - {userPicURL: строка - адрес картинки юзерпика,
//                                            userName:   строка - имя пользователя
//                                            userBirthDate: строка - дата рождения
//                                            userPicURL:    строка - адрес картинки юзерпика},
// dialogPage: oбъект <....>  ,
// loginPage:  oбъект <....>
//
// }
//
//
const App = (props) => {

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact
                       path='/'
                       render={() => <LoginPage />} />
                <Route exact
                       path='/Profile'
                       render={ () => <ProfilePage  userInfo  = {props.profilePageAttrs.profile.userInfo}
                                                    wall      = {props.profilePageAttrs.profile.wall} />} />
                <Route exact
                       path='/Dialog'
                       render={ () => <DialogsPage />} />
            </div>
        </BrowserRouter>
    )

};


export default App;
