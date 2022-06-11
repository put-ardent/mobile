/**
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import React from 'react';
import {useSelector} from 'react-redux';
import LoadingScreen from './src/screens/LoadingScreen';
import QueueScreen from './src/screens/QueueScreen';

const App: () => Node = () => {
  const {steps} = useSelector(state => state);

  switch (steps.step) {
    case 1:
      return <QueueScreen />;
    default:
      return <LoadingScreen />;
  }
};

export default App;
