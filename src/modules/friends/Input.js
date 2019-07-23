import React from 'react';

export default ({ title, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={title}>{title}</label>
      <input
        type="text"
        value={value}
        className="form-control"
        onChange={event => onChange(title, event.target.value)}
      />
    </div>
  );
};
