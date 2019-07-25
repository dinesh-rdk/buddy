import React from 'react';
import { Field } from 'formik';

export default ({ title, value, onChange, error, touched }) => {
  return (
    <div className="form-group">
      <label htmlFor={title}>{`${title.charAt(0).toUpperCase()}${title.slice(
        1,
      )}`}</label>
      <Field
        name={title}
        value={value}
        type="text"
        onChange={onChange}
        className="form-control"
      />
      {error && touched ? <span className="text-danger">{error}</span> : ''}
    </div>
  );
};
