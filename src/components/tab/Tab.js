import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ title }) => {
  return (
    <li>
      <input type="radio" value={title} name="tabs"></input>
      <label htmlFor={title}> TAB {title}</label>
    </li>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired
};

export default Tab;