import React, { Component } from 'react';
import './DialogsPage.css';
import Dialog from "../DialogComponent/Dialog";
import Header from "../HeaderComponent/Header";
import Sidebar from "../SideBarComponent/Sidebar";


class DialogsPage extends Component {
    render() {
        return (
            <div className="c-dialog-page">
                <div className="c-dialog-page__wraper-header">
                    <Header/>
                </div>
                <div className="c-dialog-page__wraper-sidebar">
                    <Sidebar/>
                </div>
                <div className="c-dialog-page__wraper-dialogs">
                    <Dialog/>
                </div>
            </div>
        );
    }
}

export default DialogsPage;
