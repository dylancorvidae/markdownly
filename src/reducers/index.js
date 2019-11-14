import { combineReducers } from 'redux';
import documentReducer from '../reducers/documentReducer';
import tabReducer from '../reducers/tabsReducer';

export default combineReducers({
  documentReducer,
  tabReducer
});
