import React from 'react';
import './Button.scss';
import img from '../../assets/images/loader.svg'

const Button = ({text, type, handler, loading}) => {
  const loader = <img className="Btn__loader" src={img} alt="loading..."/>;
  return (
    <button
      className="Btn Btn--primary"
      type={type}
      onClick={handler}
    >
      {loading ? loader : text}
    </button>
  );
};

export default Button;