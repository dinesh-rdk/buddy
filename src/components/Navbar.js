import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

export default () => (
  <div className="sidebar">
    <LanguageSelector />
    <Link to="/">Home</Link>
    <Link to="/friends">Friends</Link>
  </div>
);
