import React   from 'react';
import Header  from "../HeaderComponent/Header";
import Sidebar from "../SideBarComponent/Sidebar";
import Profile from "../ProfileComponent/Profile";
import './ProfilePage.css';


// атрибуты:
// profile: oбъект - { userInfo: объект - {userPicURL: строка - адрес картинки юзерпика,
//                                         userName:   строка - имя пользователя
//                                         userBirthDate: строка - дата рождения
//                                         userPicURL:    строка - адрес картинки юзерпика},

// }
//
//
const ProfilePage = (props) => {
        return (
            <div className="c-profile-page">
                <div className="c-profile-page__wraper-header">
                   <Header/>
                </div>
                <div className="c-profile-page__wraper-sidebar">
                   <Sidebar/>
                </div>
                <div className="c-profile-page__wraper-profile">
                   <Profile userInfo  = {props.userInfo}
                            wall     =  {props.wall} />
                </div>
            </div>
        )
};

export default ProfilePage;
