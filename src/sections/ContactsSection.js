import React from 'react';
import Form from "../components/Form/Form";
import './ContactsSection.scss';
import Contacts from "../components/Contacts/Contacts";

const ContactsSection = () => {
  return (
    <section className="ContactsSection">
      <div className="container">
        <Form/>
        <Contacts/>
      </div>
    </section>
  );
};

export default ContactsSection;
