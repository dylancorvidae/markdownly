import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ id }) => {
  return (
    <li>
      <input type="radio" value={id} name={id}></input>
      <label for={id}></label>
    </li>
  )
}

Tab.PropTypes = {
  id: PropTypes.number.isRequired
}

export default Tab;