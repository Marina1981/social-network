import React, { Component } from 'react';
import './RecordForm.css';
import generateGuid from "../libs/Guid";


class RecordForm extends Component {
    render() {
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
                              value = {this.props.creatingMessage}
                              onChange={
                                       (e)=>{this.props.onCreatingMessageChanged(e.currentTarget.value);}
                                         }
                    />
                    <button className="wall-block__record-form-button"
                            onClick={
                                (e) => {this.props.onCreatingMessageFinishCommitted(generateGuid(), getDate());}
                                    }
                    >
                        Добавить
                    </button>
            </div>
        );
    }
}

export default RecordForm;
