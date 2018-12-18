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
                    <Dialog  friendUserPicURL                 = {this.props.friendUserPicURL}
                             friendsList                      = {this.props.friendsList}
                             friendsChatLog                   = {this.props.friendsChatLog}
                             selectedFriendId                 = {this.props.selectedFriendId}
                             creatingMessage                  = {this.props.creatingMessage}
                             onFriendSelected                 = {this.props.onFriendSelected}
                             onCreatingMessageChanged         = {this.props.onCreatingMessageChanged}
                             onCreatingMessageFinishCommitted = {this.props.onCreatingMessageFinishCommitted}/>
                </div>
            </div>
        );
    }
}

export default DialogsPage;
