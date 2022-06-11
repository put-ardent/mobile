/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import Udp from './src/components/Udp';

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <Udp>
      <App />
    </Udp>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
