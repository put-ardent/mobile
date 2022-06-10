import {SERVER_CONNECTED} from '../constants/redux';

export function serverConnected() {
  return {
    type: SERVER_CONNECTED,
  };
}
