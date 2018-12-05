import React, { Component } from 'react';
import './IndexForm.css';


class IndexForm extends Component {
    render() {
        return (
            <div className="index-form">
                    <span className="index-form__label">
                        Email
                    </span>
                <input className="index-form__input" placeholder="Email"/>
            </div>
        );
    }
}

export default IndexForm;
