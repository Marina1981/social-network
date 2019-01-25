import React from 'react';
import './NewsPage.css';
import MainHeader  from "../MainHeader/MainHeader";
import Sidebar     from "../MainSideBar/MainSidebar";
import NewsSection from "../NewsSection/NewsSection";

const NewsPage = () => {

        return (
            <div className="c-news-page">
                <div className="c-news-page__wraper-header">
                    <MainHeader/>
                </div>
                <div className="c-news-page__wraper-sidebar">
                    <Sidebar/>
                </div>
                <div className="c-news-page__wraper-news">
                    <NewsSection/>
                </div>
            </div>
        );
    };


export default NewsPage;