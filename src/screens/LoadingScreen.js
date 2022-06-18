/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import Colors from '../constants/Colors';
import Animated, {SlideOutLeft} from 'react-native-reanimated';

const LoadingScreen: () => Node = () => {
  return (
    <Animated.View
      style={styles.sectionContainer}
      exiting={SlideOutLeft.duration(1000)}>
      <ImageBackground
        source={require('./img/2019-intro-background.jpeg')}
        style={styles.sectionBackground}>
        <ActivityIndicator size={'large'} color={Colors.gold} />
        <Text style={styles.text}>Waiting for connection</Text>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: Colors.background,
    flex: 1,
    justifyContent: 'center',
  },
  sectionBackground: {
    flex: 1,
    justifyContent: 1,
  },
  text: {
    marginTop: 10,
    fontSize: 20,
    color: Colors.gold,
    alignSelf: 'center',
  },
});

export default LoadingScreen;
