import React from 'react';
import './MainSidebar.css';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";
import thumbs from "./images/thumbs-up.svg";
import message from "./images/message.svg";
import news from "./images/newss.svg";
import music from "./images/music.svg";
import settings from "./images/settings.svg";
import photos from "./images/camera .svg";
import users from "./images/users.svg"


let Menuitem = (props) => {

    return (
        <div className={"c-sidebar__menu-item" + ' ' + (props.location.pathname === props.path ? 'active-item' : ' ')}>
            <div className="menu-item__img-block">
                <img src={props.images} className="img-block__images"/>
            </div>
            <NavLink to={props.path} className="menu-item__decorated">{props.title}</NavLink>
        </div>
    )
};


const MainSidebar = (props) => {
    return (
        <div className="c-sidebar">
            <div className="c-sidebar__profile">
                <Menuitem path="/profile" title="profile" images={thumbs} location={props.location}/>
            </div>

            <div className="c-sidebar__dialog">
                <Menuitem path="/dialog" title="dialog"  images={message} location={props.location}/>
            </div>

            <div className="c-sidebar__users">
                <Menuitem path="/users" title="users" images={users} location={props.location}/>
            </div>

            <div className="c-sidebar__photos">
                <Menuitem path="/photos" title="photos" images={photos} location={props.location}/>
            </div>

            <div className="c-sidebar__music">
                <Menuitem path="/music" title="music" images={music} location={props.location}/>
            </div>

            <div className="c-sidebar__news">
                <Menuitem path="/news" title="news" images={news} location={props.location}/>
            </div>

            <div className="c-sidebar__settings">
                <Menuitem path="/settings" title="settings" images={settings} location={props.location}/>
            </div>
        </div>
    );
};

let superMainSidebar = withRouter(MainSidebar);
export default superMainSidebar;