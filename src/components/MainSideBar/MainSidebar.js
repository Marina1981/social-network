import React from 'react';
import './MainSidebar.css';
import {NavLink} from "react-router-dom";
import {withRouter} from "react-router";


let Menuitem = (props) => {

    return (
        <>
            <div className={"c-sidebar__menu-item" + ' ' + (props.location.pathname == props.path ? 'active-item' : ' ')}>
                <NavLink to={props.path}  className="menu-item__decorated" >{props.title}</NavLink>
            </div>
        </>
    )
};



const MainSidebar = (props) => {

        return (
            <div className="c-sidebar">
                <Menuitem path="/profile"  title="profile"   location={props.location}/>
                <Menuitem path="/dialog"   title="dialog"    location={props.location}/>
                <Menuitem path="/news"     title="news"      location={props.location}/>
                <Menuitem path="/music"    title="music"     location={props.location}/>
                <Menuitem path="/settings" title="settings"  location={props.location}/>
                <Menuitem path="/photos"   title="photos"    location={props.location}/>
                <Menuitem path="/users"    title="users"     location={props.location}/>
            </div>
        );
    };

let superMainSidebar = withRouter(MainSidebar);
export default superMainSidebar;