import React from 'react';

// css
import './CheckoutSummary.css';
// components
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
const checkoutSummary = (props) => {

    return(
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div style={{width: '300px', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;