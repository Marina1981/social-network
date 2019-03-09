import React from 'react';
import style from './NewsSection.module.css';
import {Redirect} from "react-router";

const NewsSection = (props) =>{
    //---
    // if (!props.isAuth){
    //     return <Redirect to="/Login"/>
    // }
    //---

        return (
            <div className={style.newsSection}>
                <div className={style.newsLabel}>
                    NEWS
                </div>
            </div>
        );
    };


export default NewsSection;