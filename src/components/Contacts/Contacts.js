import React from 'react';
import './Contacts.scss';

const Contacts = () => {
  return (
    <div className="Contacts">
      <div className="Contacts__item">
        888 Brannan Street, <br/>
        in San Francisco, California
      </div>
      <div className="Contacts__item">
        <a href="tel:+1(039)0320384">+1 (039) 032 03 84</a>
      </div>
      <div className="Contacts__item">
        <a href="mailto:info@airbnb.com">info@airbnb.com</a>
      </div>
    </div>
  );
};

export default Contacts;
