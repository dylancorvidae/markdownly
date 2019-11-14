import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

function Editor({ markdowns, updateMarkdown }) {
  return (
    <textarea className={styles.Editor} value={markdowns} onChange={updateMarkdown} />
  );
}

Editor.propTypes = {
  markdowns: PropTypes.array.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
