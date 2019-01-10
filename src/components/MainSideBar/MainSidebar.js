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
                <Menuitem path="/Profile" title="Профиль"   location={props.location}/>
                <Menuitem path="/Dialog"  title="Сообщения" location={props.location}/>
                <Menuitem path="/News"    title="Новости"   location={props.location}/>
                <Menuitem path="/Music"   title="Музыка"    location={props.location}/>
                <Menuitem path="/Setting" title="Настройки" location={props.location}/>
            </div>
        );
    };

let superMainSidebar = withRouter(MainSidebar);
export default superMainSidebar;