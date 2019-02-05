import React from 'react';
import './NewsSection.css';
import {Redirect} from "react-router";

const NewsSection = (props) =>{
    //---
    if (!props.isAuth){
        return <Redirect to="/Login"/>
    }
    //---

        return (
            <div className="c-news-section">
                    NEWS
            </div>
        );
    };


export default NewsSection;