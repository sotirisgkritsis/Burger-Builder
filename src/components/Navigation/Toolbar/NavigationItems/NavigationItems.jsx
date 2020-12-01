import React from 'react';

//css
import './NavigationItems.css';
//component
import NavigatioItem from '../NavigationItem/NavigationItem';
const navigationItems = (props) => (
    <ul className="NavigationItems">
        <NavigatioItem link="/" exact>Burger Builder</NavigatioItem>
        <NavigatioItem link="/orders">Orders</NavigatioItem>
    </ul>
);


export default navigationItems;