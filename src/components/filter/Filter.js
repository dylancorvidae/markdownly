import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleSumbit, handleChange }) => {
  return (
    <form onSubmit={handleSumbit}>
      <input onChange={handleChange}></input>
      <button onClick={handleSumbit}>Search</button>
    </form>

  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSumbit: PropTypes.func.isRequired
};

export default Filter; 
