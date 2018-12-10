import React from 'react';
import './IndexForm.css';


const IndexForm = (props) => {
     {
        return (
            <div className="index-form">
                    <span className="index-form__label">
                        {props.text}
                    </span>
                <input className="index-form__input" placeholder= {props.text} />
            </div>
        );
    }
}

export default IndexForm;
