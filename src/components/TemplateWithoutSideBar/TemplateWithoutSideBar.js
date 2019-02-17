import React from 'react';
import style from './TemplateWithoutSideBar.module.css';
import MainHeaderContainer from "../../containers/MainHeaderContainer/MainHeaderContainer";
import MainFooter from "../MainFooter/MainFooter";



const TemplateWithoutSideBar = (props) => {
    return (
        <div className={style.templateWrapper}>
            <div className={style.headerWrapper}>
                <MainHeaderContainer/>
            </div>
            <div className={style.children}>{props.children}</div>
            {/*<div className={style.footerWrapper}>*/}
                {/*<MainFooter/>*/}
            {/*</div>*/}
        </div>
    )
};

export default TemplateWithoutSideBar;