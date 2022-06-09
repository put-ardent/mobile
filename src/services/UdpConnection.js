import UdpSockets from 'react-native-udp';

const runSocket = async () => {
  const socket = UdpSockets.createSocket({type: 'udp4'});
  console.log('running socket');
  socket.bind(6969);
  socket.on('message', function (msg, rinfo) {
    console.log(
      'Message received',
      String.fromCharCode.apply(null, new Uint8Array(msg)),
    );
  });
};

export default runSocket;
