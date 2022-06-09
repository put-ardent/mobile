import UdpSockets from 'react-native-udp';
import { NetworkInfo } from "react-native-network-info";

const runSocket = async () => {
  const socket = UdpSockets.createSocket({type: 'udp4'});
  console.log('running socket');
  socket.bind(6969);
  socket.on('message', function (msg, rinfo) {
    handleMessage(msg);
  });
};

const handleMessage = message => {
  const messageContent = String.fromCharCode.apply(
    null,
    new Uint8Array(message),
  );
  const msg = JSON.parse(messageContent);
  console.log('Message received', messageContent);
  console.log(msg.event);
};

export default runSocket;
