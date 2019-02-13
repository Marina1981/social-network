import React from 'react';
import './MainSidebar.css';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import thumbs from "./images/thumbs-up.svg";
import message from  "./images/message.svg";
import news from "./images/newss.svg";
import music from "./images/music.svg";
import settings from "./images/settings.svg";
import photos from "./images/camera .svg";
import users from "./images/users.svg"


let Menuitem = (props) => {

    return (
        <>
            <div className={"c-sidebar__menu-item" + ' ' + (props.location.pathname == props.path ? 'active-item' : ' ')}>
                <NavLink to={props.path} className="menu-item__decorated">{props.title}</NavLink>
            </div>
        </>
    )
};


const MainSidebar = (props) => {

    return (
        <div className="c-sidebar">
            <div className="c-sidebar__profile">
                <div className="profile__img-block">
                    <img src={thumbs} className="profile-img"/>
                </div>
                <Menuitem path="/profile" title="profile" location={props.location}/>
            </div>

            <div className="c-sidebar__dialog">
                <div className="dialog__img-block">
                    <img src={message} className="dialog-img"/>
                </div>
                <Menuitem path="/dialog" title="dialog" location={props.location}/>
            </div>

            <div className="c-sidebar__news">
                <div className="news__img-block">
                    <img src={news} className="news-img"/>
                </div>
                <Menuitem path="/news" title="news" location={props.location}/>
            </div>

            <div className="c-sidebar__music">
                <div className="music__img-block">
                    <img src={music} className="music-img"/>
                </div>
                <Menuitem path="/music" title="music" location={props.location}/>
            </div>

            <div className="c-sidebar__settings">
                <div className="settings__img-block">
                    <img src={settings} className="settings-img"/>
                </div>
                <Menuitem path="/settings" title="settings" location={props.location}/>
            </div>

            <div className="c-sidebar__photos">
                <div className="photos__img-block">
                    <img src={photos} className="photos-img"/>
                </div>
                <Menuitem path="/photos" title="photos" location={props.location}/>
            </div>

            <div className="c-sidebar__users">
                <div className="users__img-block">
                    <img src={users} className="users-img"/>
                </div>
                <Menuitem path="/users" title="users" location={props.location}/>
            </div>
        </div>
    );
};

let superMainSidebar = withRouter(MainSidebar);
export default superMainSidebar;