import React, {Component} from 'react';

// css
import './Modal.css';
// components
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate() {
        console.log('[Modal] DidUpdate');
    }
    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className="Modal" 
                    style={{transform: this.props.show ? 'translateY(0)' : 'translatey(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                    }}>
                    {this.props.children}
                </div>
            </Aux>
    
        );
    }
}

export default Modal;