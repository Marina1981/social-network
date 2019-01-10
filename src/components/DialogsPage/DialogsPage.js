import React from 'react';
import './DialogsPage.css';
import MainHeader from "../MainHeader/MainHeader";
import DialogsSection from "../DialogSection/DialogsSection";
import MainSidebar from "../MainSideBar/MainSidebar";




const DialogsPage = () => {

        return (
            <div className="c-dialog-page">
                <div className="c-dialog-page__wraper-header">
                    <MainHeader/>
                </div>
                <div className="c-dialog-page__wraper-sidebar">
                    <MainSidebar/>
                </div>
                <div className="c-dialog-page__wraper-dialogs">
                    <DialogsSection/>
                </div>
            </div>
        );
    };


export default DialogsPage;
