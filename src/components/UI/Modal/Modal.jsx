import React from 'react';

// css
import './Modal.css';
// components
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div 
            className="Modal" 
            style={{transform: props.show ? 'translateY(0)' : 'translatey(-100vh)',
            opacity: props.show ? '1' : '0',
            }}>
            {props.children}
        </div>
    </Aux>
    
);

export default modal;