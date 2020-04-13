import React, {useState} from 'react';
import './Form.scss';
import FormDetails from "./FormDetails";
import FormConfirm from "./FormConfirm";
import FormSuccess from "./FormSuccess";
import Button from "../../elements/Button/Button";
import {validEmailRegex} from '../../assets/utils/validEmailRegex'
import {validTelRegex} from "../../assets/utils/validTelRexex";

const Form = () => {
  const initialState = {
    step: 1,
    select: 'Work opportunities',
    name: '',
    phone: '',
    email: '',
    message: '',
    formErrors: {
      name: '',
      phone: '',
      email: '',
    }
  };
  const [state, setState] = useState(initialState);

  const defaultStep = () => {
    setState({
      ...initialState,
      step: 1,
    });
  };

  const nextStep = () => {
    setState(prevState => ({
      ...prevState,
      step: state.step + 1,
    }));
  };

  const prevStep = () => {
    const {step} = state;
    setState(prevState => ({
      ...prevState,
      step: step - 1,
    }));
  };

  const handleChange = e => {
    const {name, value} = e.target;
    let errors = state.formErrors;

    switch (name) {
      case 'name':
        errors.name =
          value.length < 3
            ? 'Name must be 3 characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'phone':
        errors.phone =
          value.length === 10 && validTelRegex.test(value)
            ? ''
            : 'Phone must be 10 numbers long!';
        break;
      default:
        break;
    }

    setState(prevState => ({
      ...prevState,
      [name]: value,
      errors
    }));

    console.log(state)
  };

  const {step} = state;
  const errors = state.formErrors;
  const {select, name, phone, email, message} = state;
  const values = {
    select, name, phone, email, message
  };

  switch (step) {
    case 1:
      return (
        <FormDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          errors={errors}
        />
      );
    case 2:
      return (
        <FormConfirm
          prevStep={prevStep}
          nextStep={nextStep}
          values={values}
        />
      );
    case 3:
      return (
        <FormSuccess
          defaultStep={defaultStep}
          values={values}
        />
      );
    default:
      return (
        <div>
          <Button
            text={'Go to contacts form'}
            handler={defaultStep}
          />
        </div>
      )
  }
};

export default Form;
