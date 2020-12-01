import React from 'react';


//components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import './Burger.css'; 

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            // return an array of the ingredients with the number of them, like cheese 2, meat 3
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })
        .reduce((arr,el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredients.length === 0)
    {
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger;