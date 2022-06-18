import axios from 'axios';

export const onConnection = address => {
  console.log(address + ':2138/connection');
  axios.post(`http://${address}:2138/connection`, {
    port: 6969,
  });
  console.log('Connection made.');
};
