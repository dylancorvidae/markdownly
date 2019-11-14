import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkdown } from '../selectors/documentSelectors';
import { updateMarkdown } from '../actions/documentActions';

const Document = ({ updateMarkdown, markdowns }) => {

  return (
    <>
      <div className={styles.Document}>
        <Editor markdowns={markdowns} updateMarkdown={updateMarkdown} />
        <Preview markdowns={markdowns} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  markdowns: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

Document.propTypes = {
  markdowns: PropTypes.array.isRequired,
  updateMarkdown: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
