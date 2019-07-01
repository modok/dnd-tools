import React from "react";
import logoImg from "../../assets/logo/dungeons_and_dragons_white.png";
import './Logo.css';

const logo = props => (
  <div className="Logo">
    <img src={logoImg} alt="logo" />
  </div>
);

export default logo;
