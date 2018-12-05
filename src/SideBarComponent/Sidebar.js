import React, { Component } from 'react';
import './Sidebar.css';
import {Link} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <div className="c-sidebar">
                <Link to="/Profile" style={{textDecoration: 'none'}} className="c-sidebar__decorated">Профиль</Link>
                <Link to="/Dialog"  style={{textDecoration: 'none'}} className="c-sidebar__decorated">Сообщения</Link>
                <Link to="/News"    style={{textDecoration: 'none'}} className="c-sidebar__decorated">Новости</Link>
                <Link to="/Music"   style={{textDecoration: 'none'}} className="c-sidebar__decorated">Музыка</Link>
                <Link to="/Setting" style={{textDecoration: 'none'}} className="c-sidebar__decorated">Настройки</Link>
            </div>
        );
    }
}

export default Sidebar;