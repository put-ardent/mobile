import axios from 'axios';
import axiosRetry from 'axios-retry';
import {
  ACCEPT_QUEUE,
  DECLINE_QUEUE,
  GET_QUEUES,
  JOINED_LOBBY,
  SET_SELECTED_QUEUE,
  SET_SELECTED_QUEUE_TYPE,
  STOP_QUEUE,
} from '../constants/redux';

export const onGetQueues = address => {
  axiosRetry(axios, {
    retries: Infinity,
  });
  return dispatch => {
    axios.get(`http://${address}:2138/queues`).then(response => {
      dispatch({type: GET_QUEUES, payload: response.data.data});
    });
  };
};

export const setSelectedQueueType = (type, name) => {
  return dispatch => {
    dispatch({
      type: SET_SELECTED_QUEUE_TYPE,
      payload: type,
      selectedTypeName: name,
    });
  };
};

export const startQueue = (address, queue) => {
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
  return dispatch => {
    axios.delete(`http://${address}:2138/lobby`).then(() => {
      dispatch({
        type: STOP_QUEUE,
      });
    });
  };
};

export const acceptQueue = address => {
  return dispatch => {
    axios.post(`http://${address}:2138/queue/accept`).then(() => {
      dispatch({
        type: ACCEPT_QUEUE,
      });
    });
  };
};

export const declineQueue = address => {
  return dispatch => {
    axios.post(`http://${address}:2138/queue/decline`).then(() => {
      dispatch({
        type: DECLINE_QUEUE,
      });
    });
  };
};

export const onJoinedLobby = () => {
  return dispatch => {
    dispatch({
      type: JOINED_LOBBY,
    });
  };
};
