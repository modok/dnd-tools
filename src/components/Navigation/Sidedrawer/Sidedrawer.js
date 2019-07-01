import React, { Fragment } from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./Sidedrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Logo from '../../Logo/Logo';

const sidedrawer = props => {
  const isOpenClass = props.isOpen ? "Open": "Close";
  return (
    <Fragment>
      <Backdrop show={props.isOpen} clicked={props.closed} />
      <div className={["Sidedrawer", isOpenClass ].join(' ')}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default sidedrawer;
