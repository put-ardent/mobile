import {INCOMING_CONNECTION} from '../constants/redux';

const initialState = {
  connected: false,
  step: 0,
  desktopHost: '',
};
const leagueReducer = (state = initialState, message) => {
  switch (message.type) {
    case INCOMING_CONNECTION:
      console.log(message.address + ':2138/connection');
      fetch('http://' + message.address + ':2138/connection', {
        method: 'POST',
        body: JSON.stringify({
          host: '192.168.1.1',
        }),
      });
      console.log('Connection made.');
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
export default leagueReducer;
