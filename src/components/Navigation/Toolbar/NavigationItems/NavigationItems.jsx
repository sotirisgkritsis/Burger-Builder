import React from 'react';

//css
import './NavigationItems.css';
//component
import NavigatioItem from '../NavigationItem/NavigationItem';
const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigatioItem link="/" active>Burger Builder</NavigatioItem>
        <NavigatioItem link="/">Checkout</NavigatioItem>
    </ul>
);


export default navigationItems;