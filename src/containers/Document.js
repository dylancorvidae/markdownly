import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMarkdown } from '../selectors/documentSelectors';
import { updateMarkdown } from '../actions/documentActions';

export default function Document() {
  const markdown = useSelector(state => getMarkdown(state));
  const dispatch = useDispatch();
  const handleUpdateMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={handleUpdateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

// const mapStateToProps = state => ({
//   markdown: getMarkdown(state)
// });

// const mapDispatchToProps = dispatch => ({
//   updateMarkdown({ target }) {
//     dispatch(updateMarkdown(target.value));
//   }
// });

// Document.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   updateMarkdown: PropTypes.func
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Document);
