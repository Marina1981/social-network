import React, { Component } from 'react';
import './Info.css';
import userPic from    './images/apelsin2.png';


class Info extends Component {
    render() {
        return (
            <div className="c-info
                            c-info__c-info--positioned">
                <div className="c-info__userpic
                                c-info__userpic--positioned">
                    <img className="c-info__userpic-img" src={userPic} alt="userpic"/>
                </div>
                <div className="c-info__short-info
                                c-info__short-info--positioned">
                    <div className="c-info__user-name">
                        Илья Муромец
                    </div>
                    <div className="c-info__birth-date">
                            <span className="c-info__birth-date-label
                                             c-info__decorated-label">
                                Дата рождения :
                            </span>
                        <span className="c-info__birth-date-value">
                               2.02.2000 г.
                            </span>
                    </div>
                    <div className="c-info__residence">
                            <span className="c-info__residence-label
                                             c-info__decorated-label">
                                Город :
                            </span>
                        <span className="c-info__residence-value">
                               Минск
                            </span>
                    </div>
                    <div className="c-info__education">
                            <span className="c-info__education-label
                                             c-info__decorated-label">
                                Образование :
                            </span>
                        <span className="c-info__education-value">
                              БГУ'2011
                            </span>
                    </div>
                    <div className="c-info__website">
                            <span className="c-info__website-label
                                             c-info__decorated-label">
                                Веб-сайт :
                            </span>
                        <span className="c-info__website-value">
                             http://it-kamasutra.com
                            </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Info;
