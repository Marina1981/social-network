import React, { Component } from 'react';
import Header  from "../HeaderComponent/Header";
import Sidebar from "../SideBarComponent/Sidebar";
import Profile from "../ProfileComponent/Profile";
import './ProfilePage.css';

class ProfilePage extends Component {
    render() {
        return (
            <div className="c-profile-page">
                <div className="wraperHeader">
                   <Header/>
                </div>
                <div className="wraperSidebar">
                   <Sidebar/>
                </div>
                <div className="wraperProfile">
                   <Profile/>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
