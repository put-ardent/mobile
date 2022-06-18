import React from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import {capitalizeFirstLetter} from '../utils/stringUtils';

const QueueSelection = ({types, onSelection}): Node => {
  const dispatch = useDispatch();

  return (
    <>
      {types.length === 0 ? (
        <>
          <ActivityIndicator size={'large'} />
          <Text style={styles.text}>Looking for queues</Text>
        </>
      ) : (
        <>
          <Text style={styles.text}>Select queue type</Text>
          {Object.keys(types).map(type => {
            return (
              <CustomButton
                key={type}
                title={capitalizeFirstLetter(type)}
                onPress={() => dispatch(onSelection(types[type], type))}
              />
            );
          })}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    fontSize: 20,
    color: Colors.gold,
    alignSelf: 'center',
  },
});

export default QueueSelection;
