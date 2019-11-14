import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/list/TabDeck';

const List = ({ tabs }) => {
  return (
    <TabDeck tabs={tabs} />
  )
}

List.propTypes = {
  tabs: PropTypes.array.isRequired
}