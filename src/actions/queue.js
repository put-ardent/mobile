import axios from 'axios';
import {
  GET_QUEUES,
  SET_SELECTED_QUEUE,
  SET_SELECTED_QUEUE_TYPE,
} from '../constants/redux';

export const onGetQueues = address => {
  console.log('getting queues');
  return dispatch => {
    axios.get(`http://${address}:2138/queues`).then(response => {
      dispatch({type: GET_QUEUES, payload: response.data.data});
      dispatch({
        type: SET_SELECTED_QUEUE_TYPE,
        payload: response.data.data.unranked,
      });
    });
  };
};

export const setSelectedQueueType = type => {
  return dispatch => {
    dispatch({type: SET_SELECTED_QUEUE_TYPE, payload: type});
  };
};

export const startQueue = (address, queue) => {
  console.log('starting queue');
  return dispatch => {
    axios.post(`http://${address}:2138/lobby`, {queueId: queue.id}).then(() => {
      dispatch({
        type: SET_SELECTED_QUEUE,
        payload: queue,
      });
    });
  };
};
