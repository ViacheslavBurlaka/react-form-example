import React from 'react'
import './InputField.scss';

const InputField = (props) => {
  const loading = props.loading;

  return (
    <div className="InputField" data-loaded={loading}>
      <label htmlFor={props.name}>
        {props.label}
        {props.error && <span className="error-msg">{props.error}</span>}

      </label>
      <div className="InputField__input">
        <input
          type={props.type}
          pattern={props.pattern}
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.handleChange}
          autoComplete="off"
          disabled={loading}
          required/>
      </div>
    </div>
  );
};

export default InputField;
