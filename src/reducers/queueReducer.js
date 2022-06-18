import {
  ACCEPT_QUEUE_TIMER,
  GET_QUEUES,
  JOINED_LOBBY,
  QUEUE_TIMER,
  SET_SELECTED_QUEUE,
  SET_SELECTED_QUEUE_TYPE,
  STOP_QUEUE,
} from '../constants/redux';

const initialState = {
  types: [],
  selectedType: undefined,
  selectedQueue: undefined,
  timer: 0,
  acceptTimer: 0,
  estimatedTime: 0,
  queueFound: false,
  playerResponse: 'None',
  state: 'InProgress',
  gameStarted: false,
};
const queueReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_QUEUES:
      return {
        ...state,
        types: action.payload,
      };
    case SET_SELECTED_QUEUE_TYPE:
      return {
        ...state,
        selectedType: action.payload,
      };
    case SET_SELECTED_QUEUE:
      return {
        ...state,
        selectedQueue: action.payload,
      };
    case QUEUE_TIMER:
      return {
        ...state,
        timer: action.currentTime,
        estimatedTime: action.estimatedTime,
      };
    case ACCEPT_QUEUE_TIMER:
      return {
        ...state,
        queueFound: true,
        acceptTimer: action.timer,
        playerResponse: action.playerResponse,
        state: action.state,
      };
    case STOP_QUEUE:
      return {
        ...state,
        selectedQueue: undefined,
        timer: 0,
        estimatedTime: 0,
        queueFound: false,
        playerResponse: 'None',
        acceptTimer: 0,
        state: 'InProgress',
      };
    case JOINED_LOBBY:
      return {
        ...state,
        gameStarted: true,
      };
    default:
      return state;
  }
};
export default queueReducer;
