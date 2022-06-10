import {createStore, combineReducers} from 'redux';
import leagueReducer from '../src/reducers/leagueReducer';
const rootReducer = combineReducers({league: leagueReducer});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
