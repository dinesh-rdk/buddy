import React, { Fragment } from 'react';
import Navbar from './Navbar';
import '../styles/layout.css';

export default ({ children }) => (
  <Fragment>
    <Navbar />
    <div className="content">{children}</div>
  </Fragment>
);
