import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  DECLINE_QUEUE,
  GET_QUEUES,
  SET_SELECTED_QUEUE,
  SET_SELECTED_QUEUE_TYPE,
  STOP_QUEUE,
} from '../constants/redux';

export const onGetQueues = address => {
  console.log('getting queues');
  axiosRetry(axios, {
    retries: Infinity,
  });
  return dispatch => {
    axios.get(`http://${address}:2138/queues`).then(response => {
      dispatch({type: GET_QUEUES, payload: response.data.data});
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

export const stopQueue = address => {
  console.log('stopping queue');
  return dispatch => {
    axios.delete(`http://${address}:2138/lobby`).then(() => {
      dispatch({
        type: STOP_QUEUE,
      });
    });
  };
};

export const acceptQueue = address => {
  console.log('accepting queue');
  return dispatch => {
    axios.post(`http://${address}:2138/queue/accept`).then(() => {
      dispatch({
        type: STOP_QUEUE,
      });
    });
  };
};

export const declineQueue = address => {
  console.log('declining queue');
  return dispatch => {
    axios.post(`http://${address}:2138/queue/decline`).then(() => {
      dispatch({
        type: DECLINE_QUEUE,
      });
    });
  };
};
