import React, {useState} from 'react';
import InputField from "../../elements/InputField/InputField";
import TextAreaField from "../../elements/TextAreaField/TextAreaField";
import Button from "../../elements/Button/Button";
import SelectField from "../../elements/SelectField/SelectField";
import options from "../../assets/data/options";

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string -> set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

const FormDetails = ({values, errors, nextStep, handleChange}) => {

  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm(errors)) {
      console.info('Valid Form');
      setLoading(true);
      setTimeout(() => {
        nextStep()
      }, 3000);
    } else {
      console.error('Invalid Form')
    }
  };

  return (
    <div className="Form">
      <div className="Form__wrap">
        <div className="Form__heading">
          Contact Us
        </div>
        <form onSubmit={handleSubmit}>
          <SelectField
            name="select"
            label="Subject"
            value={values.select}
            options={options}
            handleChange={handleChange}
            loading={loading}
          />
          <InputField
            type="text"
            name="name"
            label="Name"
            placeholder="Enter your name..."
            handleChange={handleChange}
            value={values.name}
            error={errors.name}
            loading={loading}
          />
          <InputField
            type="text"
            pattern="[0-9]*"
            name="phone"
            label="Phone number"
            placeholder="Enter your phone number..."
            handleChange={handleChange}
            value={values.phone}
            error={errors.phone}
            loading={loading}
          />
          <InputField
            type="email"
            name="email"
            label="Email"
            placeholder="Enter your email address..."
            handleChange={handleChange}
            value={values.email}
            error={errors.email}
            loading={loading}
          />
          <TextAreaField
            name="message"
            label="Message"
            placeholder="Your message..."
            handleChange={handleChange}
            value={values.message}
            loading={loading}
          />
          <Button
            text={'Send'}
            type={'submit'}
            loading={loading}
          />
        </form>
      </div>
    </div>
  );
};

export default FormDetails;
