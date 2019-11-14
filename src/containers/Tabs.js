import React from 'react';
import PropTypes from 'prop-types';
import TabDeck from '../components/list/TabDeck';
// import { connect } from 'react-redux';
// import { getTab } from '../selectors/tabSelector';
// import { addTab } from '../actions/tabActions';


const Tabs = () => {
  return (
    <TabDeck tabs={[
      { id: 1 },
      { id: 2 }
    ]} />
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
//   mapDispatchToProps
// )(Tabs);

export default Tabs;