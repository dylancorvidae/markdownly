import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMarkdown } from '../selectors/documentSelectors';
import { updateMarkdown } from '../actions/documentActions';

const Document = ({ updateMarkdown, markdown }) => {

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  markdown: getMarkdown(state)
});

const mapDispatchToProps = dispatch => ({
  updateMarkdown({ target }) {
    dispatch(updateMarkdown(target.value));
  }
});

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
