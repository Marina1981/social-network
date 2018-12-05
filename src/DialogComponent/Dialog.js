import React, { Component } from 'react';
import './Dialog.css';
import Username from "../UserNameComponent/UserName";
import Message from "../MessageComponent/Message";

/*---------------------------------------------------------------*/
let messagesText = [
     {
        text: 'yo',    name: 'Коля'
     },
    {
        text: 'yo-yo', name: 'Петя'
     },
    {
        text: 'yo!!!', name: 'Оля'
     },
    {
        text: 'Hi!!!', name: 'Вася'
     }];


let messages  = messagesText.map ((el) => {
   return  <Message  text={el.text} name={el.name}/>
} );

/*---------------------------------------------------------------*/

let userNameList = [
    {
        name: 'Коля'
    },
    {
        name: 'Петя'
    },
    {
        name: 'Оля'
    }
];

let username  = userNameList.map( (el) => {
   return <Username  name={el.name}/>
});

/*---------------------------------------------------------------*/

class Dialog extends Component {
    render() {
        return (
            <div className="c-dialog-section">
                <span className="c-dialog-section__label
                                 c-dialog-section__label--positioned">

                    Dialogs

                </span>
                <div className="c-dialog-section__border-line"/>
                <div className="c-dialog-section__dialogs
                                c-dialog-section__dialogs--positioned">
                    {username}

                </div>
                <div className="c-dialog-section__messages
                                c-dialog-section__messages--positioned">


                    {messages}

                </div>
            </div>
        );
    }
}

export default Dialog;
