import React from 'react';
import image from "../../assets/images/Illustration.svg";
import Button from "../../elements/Button/Button";
import List from "../../elements/List/List";

const FormSuccess = ({values, prevStep}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="Form">
      <div className="FormSuccess">
        <img src={image} alt=""/>
        <div className="FormSuccess__title">
          We received your message!
        </div>
        <p>
          Thanks for contacting us! We will get back to you ASAP
        </p>
        {values.name && <List data={values}/>}
        <Button text="Great!" handler={handleSubmit}/>
      </div>
    </div>
  );
};

export default FormSuccess;