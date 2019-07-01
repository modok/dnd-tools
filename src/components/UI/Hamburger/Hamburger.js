import React from "react";
import "./Hamburger.css";

const hamburger = props => (
  <div onClick={props.clicked} className="Hamburger">
    <div />
    <div />
    <div />
  </div>
);

export default hamburger;
