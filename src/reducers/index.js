// @flow
import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer: AppReducer =
  combineReducers({
    counter,
  });

export default rootReducer;
