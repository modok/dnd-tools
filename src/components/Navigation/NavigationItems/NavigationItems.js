import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import './NavigationItems.css';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>Combat Manager</NavigationItem>
  </ul>
);

export default navigationItems;
