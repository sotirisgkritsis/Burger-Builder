import React from 'react';

// css
import './DrawerToggle.css';
const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;