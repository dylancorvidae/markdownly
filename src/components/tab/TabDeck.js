import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const TabDeck = ({ titles }) => {
  const tabItems = titles.map(title => {
    return (
      <Tab key={title} title={title} />
    );
  });

  return (
    <ul>
      {tabItems}
    </ul>
  );
};

TabDeck.propTypes = {
  titles: PropTypes.array.isRequired
};

export default TabDeck;