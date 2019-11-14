import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabDeck = ({ tabs }) => {
  const tabItems = tabs.map(tab => {
    return (
      <Tab key={tab.id} id={tab.id} />
    );
  });

  return (
    <ul>
      {tabItems}
    </ul>
  );
};

TabDeck.propTypes = {
  tabs: PropTypes.array.isRequired
};

export default TabDeck;