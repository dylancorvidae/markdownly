import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.css';

const Filter = ({ handleSubmit, handleChange, searchTerm }) => {
  return (
    <form className={styles.Filter} onSubmit={handleSubmit}>
      <input onChange={handleChange}></input>
      <button onClick={() => handleSubmit(searchTerm)}>Search</button>
    </form>

  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  searchTerm: PropTypes.string
};

export default Filter; 
