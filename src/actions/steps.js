export const onConnection = address => {
  console.log(address + ':2138/connection');
  fetch('http://' + address + ':2138/connection', {
    method: 'POST',
    body: JSON.stringify({
      host: '192.168.1.1',
    }),
  });
  console.log('Connection made.');
};
