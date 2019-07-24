import React from 'react';
import { Formik } from 'formik';
import { userSchema } from '../../data/schema';
import TextField from './Input';
import { getTimestamp } from '../../utils/time';

export default ({
  name = '',
  phone = '',
  email = '',
  work = '',
  city = '',
  onSubmit,
  id,
}) => (
  <Formik
    initialValues={{ name, phone, email, work, city }}
    validationSchema={userSchema}
    onSubmit={(values, actions) => {
      onSubmit({ ...values, id: id || getTimestamp() });
    }}
  >
    {props => (
      <form onSubmit={props.handleSubmit}>
        {Object.keys(props.values).map(key => (
          <TextField
            key={key}
            title={key}
            value={props.values[key]}
            onChange={props.handleChange}
            error={props.errors[key]}
            touched={props.touched[key]}
          />
        ))}
        <button
          type="submit"
          disabled={props.isSubmitting}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    )}
  </Formik>
);
