import React from 'react';
import './Link.scss';

const Link = ({href, text}) => {
  return (
    <a href={href}> {text}</a>
  );
};

export default Link;
