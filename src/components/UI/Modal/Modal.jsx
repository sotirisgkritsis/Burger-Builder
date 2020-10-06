import React from 'react';

// css
import './Modal.css';
const modal = (props) => (
    <div className="Modal">
        {props.children}
    </div>
);

export default modal;