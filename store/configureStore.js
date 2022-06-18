import {createStore, combineReducers, applyMiddleware} from 'redux';
import stepsReducer from '../src/reducers/stepsReducer';
import queueReducer from '../src/reducers/queueReducer';
import thunk from 'redux-thunk';
const rootReducer = combineReducers({steps: stepsReducer, queue: queueReducer});
const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
export default configureStore;
