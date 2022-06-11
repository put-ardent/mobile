/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import Animated, {SlideOutLeft} from 'react-native-reanimated';

const LoadingScreen: () => Node = () => {
  return (
    <Animated.View
      style={styles.sectionContainer}
      exiting={SlideOutLeft.duration(1000)}>
      <ActivityIndicator size={'large'} />
      <Text style={styles.text}>Waiting for connection</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: Colors.text,
    alignSelf: 'center',
  },
});

export default LoadingScreen;
