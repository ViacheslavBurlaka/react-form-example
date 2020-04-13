import React from 'react';
import './SelectField.scss'

const SelectField = (props) => {
  return (
    <div className="SelectField" data-loaded={props.loading}>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <div className="SelectField__select">
        <select
          id={props.name}
          value={props.value}
          name={props.name}
          onChange={props.handleChange}
        >
          {props.options.map(opt => (
            <option value={opt} key={opt}>{opt}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectField;
