import React from 'react';
import './App.scss';
import Header from "../components/Header/Header";
import ContactsSection from "../sections/ContactsSection";

const App = () => {
  return (
    <div className="App">
      <Header/>
      <ContactsSection/>
    </div>
  );
};

export default App;
