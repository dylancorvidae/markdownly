import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/tab/TabDeck';
import { connect } from 'react-redux';
import { getTitles, deleteTab } from '../selectors/documentSelectors';
import { addTab } from '../actions/documentActions';



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
  handleDelete({ target }) {
    dispatch(deleteTab(target.value));
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


