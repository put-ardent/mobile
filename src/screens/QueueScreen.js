/**
 * @format
 * @flow strict-local
 */
import React, {useEffect} from 'react';
import type {Node} from 'react';
import {Button, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';
import Animated, {SlideInRight, SlideOutLeft} from 'react-native-reanimated';
import {onConnection} from '../actions/steps';
import {useSelector} from 'react-redux';
import {onGetQueues, setSelectedQueueType, startQueue} from '../actions/queue';
import {useDispatch} from 'react-redux';
import QueueSelection from '../components/QueueSelection';
import CustomButton from '../components/CustomButton';
import QueueTimer from '../components/QueueTimer';

const QueueScreen: () => Node = () => {
  const {steps, queue} = useSelector(state => state);
  const {types, selectedType, selectedQueue, gameStarted} = queue;
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
      {gameStarted ? (
        <Text style={styles.text}>Your game has started, GL!</Text>
      ) : selectedQueue ? (
        <QueueTimer desktopHost={steps.desktopHost} />
      ) : selectedType ? (
        <>
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
          <Button
            title={'Go back'}
            onPress={() => dispatch(setSelectedQueueType(undefined))}
          />
        </>
      ) : (
        <>
          <QueueSelection types={types} onSelection={setSelectedQueueType} />
        </>
      )}
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
    fontSize: 20,
    color: Colors.text,
    alignSelf: 'center',
  },
});

export default QueueScreen;
