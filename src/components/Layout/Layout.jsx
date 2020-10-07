import React from 'react';
import './Layout.css'
// aux
import Aux from '../../hoc/Auxiliary';
// components
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;