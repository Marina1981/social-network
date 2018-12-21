import React, { Component } from 'react';
import './Sidebar.css';
import {Link, NavLink} from "react-router-dom";
import {withRouter} from "react-router";


let Menuitem = (props) => {

    return (
        <>
            <div className={"c-sidebar__menu-item" + ' ' + (props.location.pathname == props.path ? 'active-item' : ' ')}>
                <NavLink to={props.path}  className="menu-item__decorated" activeClass="active">{props.title}</NavLink>
            </div>
        </>
    )
};



class Sidebar extends Component {
    render() {
        return (
            <div className="c-sidebar">
                <Menuitem path="/Profile" title="Профиль"   location={this.props.location}/>
                <Menuitem path="/Dialog"  title="Сообщения" location={this.props.location}/>
                <Menuitem path="/News"    title="Новости"   location={this.props.location}/>
                <Menuitem path="/Music"   title="Музыка"    location={this.props.location}/>
                <Menuitem path="/Setting" title="Настройки" location={this.props.location}/>
            </div>
        );
    }
}
let superSidebar = withRouter(Sidebar);
export default superSidebar;