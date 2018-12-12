import React, { Component } from 'react';
import './NewsPage.css';
import Header  from "../HeaderComponent/Header";
import Sidebar from "../SideBarComponent/Sidebar";
import News from "../NewsComponent/News";

class NewsPage extends Component {
    render() {
        return (
            <div className="c-news-page">
                <div className="c-news-page__wraper-header">
                    <Header/>
                </div>
                <div className="c-news-page__wraper-sidebar">
                    <Sidebar/>
                </div>
                <div className="c-news-page__wraper-news">
                    <News/>
                </div>
            </div>
        );
    }
}

export default NewsPage;