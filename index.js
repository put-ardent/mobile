/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import runSocket from './src/services/UdpConnection';

AppRegistry.registerHeadlessTask('udp-connection', runSocket);
AppRegistry.registerComponent(appName, () => App);
