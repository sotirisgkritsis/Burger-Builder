import React from 'react';
// css
import './Order.css'
const order = (props) => {
    // turn the ingredients IN AN ARRAY OF INGREDIENTS SOS
    const ingredients = [];
    for( let ingredientName in props.ingredients){
            ingredients.push({
                name: ingredientName,
                amount: props.ingredients[ingredientName]
            }
        );
    }

    const ingredientOutput = ingredients.map(ig => {
    return <span 
                style={{textTransform: 'capitalize',
                display: 'inline-blick',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'}}
                key={ig.name}>{ig.name} ({ig.amount})</span>
    });
    return(
        <div className="Order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default order;