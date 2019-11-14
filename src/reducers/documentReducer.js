import { UPDATE_MARKDOWN } from '../actions/documentActions';
import { ADD_TAB } from '../actions/tabActions';

const initialState = {
  id: 0,
  markdowns: ['']
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TAB:
      return { id: state.id + 1, markdowns: [...state, action.payload] };
    case UPDATE_MARKDOWN:
      return { id: state.id, markdowns: [...state.markdowns, action.payload] };
    default:
      return state;
  }
}