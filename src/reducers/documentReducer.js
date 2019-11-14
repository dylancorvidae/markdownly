import { UPDATE_MARKDOWN, ADD_TAB, DELETE_TAB } from '../actions/documentActions';

const initialState = {
  active: 'default',
  markdowns: {
    default: '# hi there',
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdowns: { ...state.markdowns, [state.active]: action.payload } };
    case ADD_TAB:
      return { ...state, markdowns: { ...state.markdowns, [action.payload]: `# ${action.payload}` } };
    case DELETE_TAB:
      delete state.markdowns[action.payload];
      return { ...state, markdowns: { ...state.markdowns } };
    default:
      return state;
  }
}
