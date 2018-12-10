import React from 'react';
import './Message.css';
import Smile from './images/apels.png';


const Message = (props) => {
        return (
            <div className="c-message">
                <div className="c-message__label">
                    <img className="label-img" src={Smile} alt="smile"/>
                    <div className="label-username">
                        {props.name}
                    </div>
                </div>
                <span className="c-message__message">
                    {props.text}
                </span>
            </div>
        );
}

export default Message;
