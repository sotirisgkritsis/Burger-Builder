import React from 'react';

// css
import './SideDrawer.css';
//components
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../Toolbar/NavigationItems/NavigationItems';
import Aux from '../../../hoc/Auxiliary';
const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if(props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>          
                <Logo height="15%" />
                <div className="Side"></div>         
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;