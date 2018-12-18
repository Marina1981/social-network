import React  from 'react';
import './App.css';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Route         from "react-router/es/Route";
import ProfilePage   from "./ProfilePageComponent/ProfilePage";
import DialogsPage   from "./DialogsPageComponent/DialogsPage";
import LoginPage     from "./LoginPageComponent/LoginPage";
import NewsPage from "./NewsPageComponent/NewsPage";

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
                       render={ () => <DialogsPage   friendUserPicURL                 = {props.dialogsPageAttrs.dialogs.friendUserPicURL}
                                                     friendsList                      = {props.dialogsPageAttrs.dialogs.friendsList}
                                                     friendsChatLog                   = {props.dialogsPageAttrs.dialogs.friendsChatLog}
                                                     selectedFriendId                 = {props.dialogsPageAttrs.dialogs.selectedFriendId}
                                                     creatingMessage                  = {props.dialogsPageAttrs.dialogs.creatingMessage}
                                                     onFriendSelected                 = {props.dialogsPageAttrs.dialogs.onFriendSelected}
                                                     onCreatingMessageChanged         = {props.dialogsPageAttrs.dialogs.onCreatingMessageChanged}
                                                     onCreatingMessageFinishCommitted = {props.dialogsPageAttrs.dialogs.onCreatingMessageFinishCommitted}/>} />
                <Route exact
                       path='/News'
                       render={ () => <NewsPage />} />

            </div>
        </BrowserRouter>
    )

};


export default App;
