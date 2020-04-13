import React from 'react';
import './TextAreaField.scss'

const TextAreaField = (props) => {
  const loading = props.loading;

  return (
    <div className="TextAreaField" data-loaded={loading}>
      <label htmlFor={props.name}>{props.label}</label>
      <textarea
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.handleChange}
        disabled={loading}
      />
    </div>
  );
};

export default TextAreaField;
