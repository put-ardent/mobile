import axios from 'axios';

export const onConnection = address => {
  axios.post(`http://${address}:2138/connection`, {
    port: 6969,
  });
};
