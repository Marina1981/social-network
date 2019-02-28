import React from 'react';
import './MessageCreationForm.css';
import generateGuid from "../../utils/Guid";



const MessageCreationForm = (props) => {

     const getDate = () => {
         let currentdate = new Date();
         let datetime =  currentdate.getDate() + "/"
                         + (currentdate.getMonth()+1)  + "/"
                         + currentdate.getFullYear() + " @ "
                         + currentdate.getHours() + ":"
                         + currentdate.getMinutes() + ":"
                         + currentdate.getSeconds();
         return (datetime);
     };




        return (
            <div className="c-record-form">
                        <textarea className="record-form-textarea" placeholder="Что у вас нового..."
                                  value = {props.creatingMessage}
                                  onChange={
                                      (e)=>{props.onCreatingMessageChanged(e.currentTarget.value);}
                                  }
                        />
                <button className="wall-block__record-form-button"
                        onClick={
                            (e) => {
                                props.onCreatingMessageFinishCommitted(props.selectedFriendId ,generateGuid(), getDate());}
                        }
                >
                    Add
                </button>
            </div>
        );
    };

//---

export default MessageCreationForm;

