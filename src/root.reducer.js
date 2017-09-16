import { combineReducers } from 'redux';

import homeReducer from './containers/home/home.reducer';

const rootReducer = combineReducers({
  homeReducer
});

export default rootReducer;
