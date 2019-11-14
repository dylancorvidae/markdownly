import { UPDATE_MARKDOWN, ADD_TAB } from '../actions/documentActions';

const initialState = {
  active: 'default',
  markdowns: {
    default: '# hi ',
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdowns: { ...state.markdowns, [state.active]: action.payload } };
    case ADD_TAB:
      return { ...state, markdowns: { ...state.markdowns, [action.payload]: `# ${action.payload}` } };
    default:
      return state;
  }
}
