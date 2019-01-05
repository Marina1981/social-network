import React   from 'react';
import MainHeader  from "../MainHeader/MainHeader";
import Sidebar from "../SideBarComponent/Sidebar";
import UserProfileSection from "../UserProfileSection/UserProfileSection";
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
                   <MainHeader/>
                </div>
                <div className="c-profile-page__wraper-sidebar">
                   <Sidebar/>
                </div>
                <div className="c-profile-page__wraper-profile">
                   <UserProfileSection userInfo  = {props.userInfo}
                                       wall     =  {props.wall} />
                </div>
            </div>
        )
};

export default ProfilePage;
