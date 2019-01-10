import React   from 'react';
import MainHeader          from "../MainHeader/MainHeader";
import Sidebar             from "../MainSideBar/MainSidebar";
import UserProfileSection  from "../UserProfileSection/UserProfileSection";
import './ProfilePage.css';



const ProfilePage = () => {
        return (
            <div className="c-profile-page">
                <div className="c-profile-page__wraper-header">
                   <MainHeader/>
                </div>
                <div className="c-profile-page__wraper-sidebar">
                   <Sidebar/>
                </div>
                <div className="c-profile-page__wraper-profile">
                   <UserProfileSection/>
                </div>
            </div>
        )
};

export default ProfilePage;
