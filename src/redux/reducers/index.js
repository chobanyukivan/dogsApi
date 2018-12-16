import { combineReducers } from 'redux';
import dogsReducer from './dogsReducer';

const rootReducer = combineReducers({
  dogsReducer,
});

export default rootReducer;
