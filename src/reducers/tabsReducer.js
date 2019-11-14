import { ADD_TAB } from '../actions/tabActions';

const initialState = {
  id: 1,
  markdown: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TAB:
      return { ...state, id: state.id + 1, markdown: action.payload };
    default:
      return state;
  }
}