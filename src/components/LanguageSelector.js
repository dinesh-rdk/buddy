import React from 'react';
import i18n from '../i18n';

export default () => (
  <select
    className="custom-select"
    defaultValue={i18n.language}
    onChange={e => i18n.changeLanguage(e.target.value)}
  >
    <option value="en">English</option>
    <option value="fr">French</option>
    <option value="pl">Polish</option>
  </select>
);
