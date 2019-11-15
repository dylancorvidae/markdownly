import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import TabDeck from '../components/tab/TabDeck';
import { getTitles, getSearchTerm } from '../selectors/documentSelectors';
// eslint-disable-next-line no-unused-vars
import { addTab, deleteTab, addSearch, getMatchTitle } from '../actions/documentActions';
import Filter from '../components/filter/Filter';

export default function Tabs() {
  const titles = useSelector(state => getTitles(state));
  const searchTerm = useSelector(state => getSearchTerm(state));
  const dispatch = useDispatch();
  const handleChange = ({ target }) => dispatch(addSearch(target.value));
  const handleClick = tabNumber => dispatch(addTab(tabNumber));
  const handleDelete = deleteTab => dispatch(addTab(deleteTab));
  const handleSubmit = getMatchTitle => dispatch(addTab(getMatchTitle));

  return (
    <>
      <TabDeck handleDelete={handleDelete} titles={titles} />
      <button onClick={() => handleClick(titles.length)}>ADD</button>
      <Filter handleSubmit={() => handleSubmit(searchTerm)} handleChange={handleChange} />
    </>
  );
}

// const mapStateToProps = state => ({
//   titles: getTitles(state),
//   searchTerm: getSearchTerm(state)
// });

// const mapDispatchToProps = dispatch => ({
//   handleClick(tabNumber) {
//     dispatch(addTab(tabNumber));
//   },
//   handleDelete(title) {
//     dispatch(deleteTab(title));
//   },
//   handleSubmit(searchTerm) {
//     event.preventDefault();
//     dispatch(getMatchTitle(searchTerm));
//   },
//   handleChange({ target }) {
//     event.preventDefault();
//     dispatch(addSearch(target.value));
//   }
// });

// Tabs.propTypes = {
//   titles: PropTypes.array.isRequired,
//   handleClick: PropTypes.func.isRequired,
//   handleDelete: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   searchTerm: PropTypes.string
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Tabs);


