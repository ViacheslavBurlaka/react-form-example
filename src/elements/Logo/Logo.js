import React from 'react';
import logo from "../../assets/images/Logo.png";

const Logo = () => {
  return (
    <a href="/" className="Header__logo">
      <img src={logo} alt={''} width="142"/>
    </a>
  );
};

export default Logo;
