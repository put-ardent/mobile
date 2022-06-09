/**
 * @format
 * @flow strict-local
 */
import type {Node} from 'react';
import AppScreen from './src/screens/AppScreen';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Text} from 'react-native';

const App: () => Node = () => {
  const {league} = useSelector(state => state);

  useEffect(() => {
    console.log(league);
  }, [league]);

  return league.step == 0 ? <AppScreen /> : <Text>pomelo</Text>;
};

export default App;
