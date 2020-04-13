import React from 'react';
import image from "../../assets/images/Illustration.svg";
import Button from "../../elements/Button/Button";

const FormSuccess = ({defaultStep}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    defaultStep();
  };

  return (
    <div className="Form">
      <div className="FormStep">
        <div className="Form__img">
          <img src={image} alt=""/>
        </div>
        <div className="FormStep__title">
          We received your message!
        </div>
        <p>
          Thanks for contacting us! We will get back to you ASAP
        </p>
        <Button text="Great!" handler={handleSubmit}/>
      </div>
    </div>
  );
};

export default FormSuccess;
