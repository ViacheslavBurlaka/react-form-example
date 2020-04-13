import React from 'react';
import logo from "../../assets/images/Logo.svg";

const Logo = () => {
  return (
    <a href="/" className="Header__logo">
      <img src={logo} alt={''}/>
    </a>
  );
};

export default Logo;
