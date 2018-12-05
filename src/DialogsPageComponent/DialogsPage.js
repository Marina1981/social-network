import React, { Component } from 'react';
import './DialogsPage.css';
import Dialog from "../DialogComponent/Dialog";
import Header from "../HeaderComponent/Header";
import Sidebar from "../SideBarComponent/Sidebar";


class DialogsPage extends Component {
    render() {
        return (
            <div className="c-dialogPage">
                <div className="wraperHeader">
                    <Header/>
                </div>
                <div className="wraperSidebar">
                    <Sidebar/>
                </div>
                <div className="wraperDialogs">
                    <Dialog/>
                </div>
            </div>
        );
    }
}

export default DialogsPage;
