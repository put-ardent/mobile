import React from 'react';
import {StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const QueueTimer = ({timer, estimatedTime}): Node => {
  const time = new Date(timer * 1000).toISOString().substring(14, 19);
  const estimated = new Date(estimatedTime * 1000)
    .toISOString()
    .substring(14, 19);

  return (
    <>
      <Text style={styles.timer}>{time}</Text>
      <Text style={styles.estimated}>Estimated: {estimated}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  timer: {
    marginTop: 10,
    fontSize: 35,
    color: Colors.text,
    alignSelf: 'center',
  },
  estimated: {
    marginTop: 10,
    fontSize: 20,
    color: Colors.text,
    alignSelf: 'center',
  },
});

export default QueueTimer;
