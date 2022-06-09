import {SERVER_CONNECTED} from '../constants/redux';

const initialState = {
  connected: false,
  step: 0,
};
const leagueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_CONNECTED:
      return {
        ...state,
        connected: true,
        step: 1,
      };
    default:
      return state;
  }
};
export default leagueReducer;
