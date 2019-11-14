import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/tab/TabDeck';
import { connect } from 'react-redux';
import { getTitles } from '../selectors/documentSelectors';
import { addTab, deleteTab } from '../actions/documentActions';



const Tabs = ({ handleClick, titles, handleDelete }) => {
  return (
    <>
      <TabDeck handleDelete={handleDelete} titles={titles} />
      <button onClick={() => handleClick(titles.length)}>ADD</button>
    </>
  );
};

const mapStateToProps = state => ({
  titles: getTitles(state)
});

const mapDispatchToProps = dispatch => ({
  handleClick(tabNumber) {
    dispatch(addTab(tabNumber));
  },
  handleDelete(title) {
    dispatch(deleteTab(title));
  }
});

Tabs.propTypes = {
  titles: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);


