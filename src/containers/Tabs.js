import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/tab/TabDeck';
import { connect } from 'react-redux';
import { getTab } from '../selectors/tabSelector';
// import { addTab } from '../actions/tabActions';


const Tabs = () => {
  return (
    <>
      <TabDeck tabs={[{ id: 0 }]} />
      <button>ADD</button>
    </>
  );
};

// const mapStateToProps = state => ({
//   tabs: getTab(state)
// });

// const mapDispatchToProps = dispatch => ({

// });

// Tabs.propTypes = {
//   tabs: PropTypes.array.isRequired
// };

// export default connect(
//   mapStateToProps,
//   // mapDispatchToProps
// )(Tabs);

export default Tabs;
