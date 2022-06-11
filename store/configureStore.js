import {createStore, combineReducers} from 'redux';
import stepsReducer from '../src/reducers/stepsReducer';
const rootReducer = combineReducers({steps: stepsReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
