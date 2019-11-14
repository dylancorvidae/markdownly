import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Tab = ({ id }) => {
  return (
    <li>
      <input type="radio" value={id} name="tabs"></input>
      <label htmlFor={id}> TAB {id}</label>
    </li>
  );
};

Tab.propTypes = {
  id: PropTypes.number.isRequired
};

export default Tab;