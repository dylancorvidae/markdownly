import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabDeck = ({ titles, handleDelete }) => {
  const tabItems = titles.map(title => {
    return (
      <Tab handleDelete={handleDelete} key={title} title={title} />
    );
  });

  return (
    <ul>
      {tabItems}
    </ul>
  );
};

TabDeck.propTypes = {
  titles: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default TabDeck;
