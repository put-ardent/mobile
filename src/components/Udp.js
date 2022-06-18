/**
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import UdpSockets from 'react-native-udp';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const parseMessage = message => {
  const rawContent = String.fromCharCode.apply(null, new Uint8Array(message));

  return JSON.parse(rawContent);
};

const Udp: () => Node = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = UdpSockets.createSocket({type: 'udp4'});
    socket.bind(6969);
    socket.on('message', function (rawMessage) {
      const message = parseMessage(rawMessage);
      dispatch(message);
    });
    return () => {
      socket.close();
    };
  });

  return props.children;
};

export default Udp;
