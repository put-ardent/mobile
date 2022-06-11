export const onConnection = address => {
  console.log(address + ':2138/connection');
  fetch('http://' + address + ':2138/connection', {
    method: 'POST',
    body: JSON.stringify({
      port: 6969,
    }),
  });
  console.log('Connection made.');
};
