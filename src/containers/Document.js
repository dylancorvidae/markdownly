import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpdateMarkdown, getMarkdown } from '../selectors/documentSelectors';

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
  updateMarkdown(state) {
    dispatch(getUpdateMarkdown(state));
  }
});

Document.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Document);
  



// export default class Document extends PureComponent {
//   state = {
//     markdown: '# Hi there'
//   };

//   updateMarkdown = ({ target }) => {
//     this.setState({ markdown: target.value });
//   };

