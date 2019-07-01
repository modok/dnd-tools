import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import './Toolbar.css';
import Hamburger from "../../UI/Hamburger/Hamburger";
import Logo from '../../Logo/Logo';

const toolbar = props => (
  <header className="Toolbar">
    <Hamburger clicked={props.openSideDrawer} />
    <div className="Logo">
      <Logo />
    </div>
    <nav className="DesktopOnly">
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
