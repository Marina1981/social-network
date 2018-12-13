import React, { Component } from 'react';
import './RecordForm.css';


class RecordForm extends Component {
    render() {
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
                                (e) => {this.props.onCreatingMessageFinishCommitted();}
                                    }
                    >
                        Добавить
                    </button>
            </div>
        );
    }
}

export default RecordForm;
