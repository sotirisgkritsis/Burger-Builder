import React from 'react';
import './Layout.css'
// aux
import Aux from '../../hoc/Auxiliary';
const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;