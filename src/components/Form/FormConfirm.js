import React from 'react';
import Button from "../../elements/Button/Button";
import List from "../../elements/List/List";

const FormConfirm = ({values, prevStep, nextStep}) => {
  const toPrev = (e) => {
    e.preventDefault();
    prevStep();
  };

  const toNext = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="Form">
      <div className="FormStep">
        <div className="FormStep__title">
          Please check your form details!
        </div>
        <p>
          If everything is correct click on Confirm button, <br/> else back to Contacts form
        </p>
        {values.name && <List data={values}/>}
        <div className="Form__footer">
          <Button text="Back" handler={toPrev}/>
          <Button text="Confirm" handler={toNext}/>
        </div>
      </div>
    </div>
  );
};

export default FormConfirm;
