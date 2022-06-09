/**
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import UdpSockets from 'react-native-udp';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SERVER_CONNECTED} from '../constants/redux';

const Udp: () => Node = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = UdpSockets.createSocket({type: 'udp4'});
    socket.bind(6969);
    socket.on('message', function (msg, rinfo) {
      dispatch({type: SERVER_CONNECTED});
      console.log(
        'Message received',
        String.fromCharCode.apply(null, new Uint8Array(msg)),
      );
    });
    return () => {
      socket.close();
    };
  }, []);

  return props.children;
};

export default Udp;
