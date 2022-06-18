/**
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../constants/Colors';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';
import {onConnection} from '../actions/steps';
import {useSelector} from 'react-redux';
import {onGetQueues, setSelectedQueueType, startQueue} from '../actions/queue';
import {useDispatch} from 'react-redux';
import QueueSelection from '../components/QueueSelection';
import CustomButton from '../components/CustomButton';
import QueueTimer from '../components/QueueTimer';
import {capitalizeFirstLetter} from '../utils/stringUtils';
import {Rect} from 'react-native-svg';
import PrettyButton from '../components/PrettyButton';

const QueueScreen: () => Node = () => {
  const {steps, queue} = useSelector(state => state);
  const {types, selectedType, selectedTypeName, selectedQueue, gameStarted} =
    queue;
  const dispatch = useDispatch();

  useEffect(() => {
    onConnection(steps.desktopHost);
  }, [steps]);

  useEffect(() => {
    dispatch(onGetQueues(steps.desktopHost));
  }, [dispatch, steps]);

  return (
    <Animated.View
      style={styles.sectionContainer}
      entering={SlideInRight}
      exiting={SlideOutLeft.duration(1000)}>
      <ImageBackground
        source={require('./img/2019-intro-background.jpeg')}
        style={styles.sectionBackground}>
        {gameStarted ? (
          <Text style={styles.text}>Your game has started, GL!</Text>
        ) : selectedQueue ? (
          <QueueTimer desktopHost={steps.desktopHost} />
        ) : selectedType ? (
          <>
            <Text style={styles.text}>
              {capitalizeFirstLetter(selectedTypeName)}
            </Text>
            {selectedType.map(gameType => {
              return (
                <CustomButton
                  key={gameType.id}
                  title={gameType.description}
                  onPress={() =>
                    dispatch(startQueue(steps.desktopHost, gameType))
                  }
                />
              );
            })}
            <PrettyButton
              action={setSelectedQueueType(undefined)}
              text={'Go back'}
            />
          </>
        ) : (
          <>
            <QueueSelection types={types} onSelection={setSelectedQueueType} />
          </>
        )}
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
    marginBottom: 10,
    fontSize: 20,
    color: Colors.gold,
    alignSelf: 'center',
  },
});

export default QueueScreen;
