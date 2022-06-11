import {INCOMING_CONNECTION} from '../constants/redux';

const initialState = {
  connected: false,
  step: 0,
  desktopHost: '',
};
const stepsReducer = (state = initialState, message) => {
  switch (message.type) {
    case INCOMING_CONNECTION:
      return {
        ...state,
        connected: true,
        step: 1,
        desktopHost: message.address,
      };
    default:
      return state;
  }
};
export default stepsReducer;
