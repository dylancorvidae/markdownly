import { ADD_TAB } from '../actions/tabActions';

const initialState = ['hi there', 'hello'];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_TAB:
      return [...state, action.payload];
    default:
      return state;
  }
}
