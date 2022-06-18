import {
  GET_QUEUES,
  QUEUE_TIMER,
  SET_SELECTED_QUEUE,
  SET_SELECTED_QUEUE_TYPE,
} from '../constants/redux';

const initialState = {
  types: [],
  selectedType: undefined,
  selectedQueue: undefined,
  timer: 0,
  estimatedTime: 0,
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
    default:
      return state;
  }
};
export default queueReducer;
