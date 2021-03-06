import React, { PropTypes } from 'react';

const SelectInput = ({ name, label, value, defaultOption, options, onChange, error }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select id={name}
              value={value}
              className="form-control"
              onChange={onChange}>
        <option value="">{defaultOption}</option>
        {options.map(option => {
          return (
            <option key={option.id} value={option.id}>
              {option.firstName} {option.lastName}
            </option>
          );
        })}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default SelectInput;
