import React from 'react';
import style from './TemplateWithSideBar.module.css';
import MainHeaderContainer from "../TemplateWithoutSideBar/TemplateWithoutSideBar";
import MainFooter from "../MainFooter/MainFooter";
import MainSidebar from "../MainSideBar/MainSidebar";



const TemplateWithSideBar = (props) => {

    return (
        <div className={style.templateWrapper}>
            <div className={style.headerWrapper}>
                <MainHeaderContainer/>
            </div>
            <div className={style.sidebarWrapper}>
                <MainSidebar/>
            </div>
            <div className={style.children}>{props.children}</div>
            {/*<div className={style.footerWrapper}>*/}
                {/*<MainFooter/>*/}
            {/*</div>*/}
        </div>
    )
};

export  default TemplateWithSideBar;