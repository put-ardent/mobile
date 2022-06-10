import {INCOMING_CONNECTION} from '../constants/redux';

const initialState = {
  connected: false,
  step: 0,
};
const leagueReducer = (state = initialState, message) => {
  switch (message.event) {
    case INCOMING_CONNECTION:
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
