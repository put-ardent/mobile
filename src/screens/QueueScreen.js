/**
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';
import {onConnection} from '../actions/steps';
import {useSelector} from 'react-redux';

const QueueScreen: () => Node = () => {
  const {steps} = useSelector(state => state);

  useEffect(() => {
    onConnection(steps.desktopHost);
  });

  return (
    <Animated.View
      style={styles.sectionContainer}
      entering={SlideInRight}
      exiting={SlideOutLeft.duration(1000)}>
      <Text>Elo</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    backgroundColor: Colors.background,
    flex: 1,
  },
});

export default QueueScreen;
