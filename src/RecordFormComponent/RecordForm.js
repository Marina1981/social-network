import React, { Component } from 'react';
import './RecordForm.css';


class RecordForm extends Component {
    render() {
        return (
            <div className="c-record-form">
                    <span className="record-form-label">
                        Мои  записи
                    </span>
                    <textarea className="record-form-textarea" placeholder="Что у вас нового..."/>
                    <button className="wall-block__record-form-button">
                        Отправить
                    </button>
            </div>
        );
    }
}

export default RecordForm;
