// @flow
import { combineReducers } from 'redux';
import counter from './counter';

type AppReducer = (state: AppState, action: Action) => AppState


const rootReducer: AppReducer =
  combineReducers({
    counter,
  });

export default rootReducer;
