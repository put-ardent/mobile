import React from 'react';
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';

const QueueSelection = ({types, onSelection}): Node => {
  const dispatch = useDispatch();

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {types.length === 0 ? (
        <>
          <ActivityIndicator size={'large'} />
          <Text style={styles.text}>Looking for queues</Text>
        </>
      ) : (
        <>
          <Text>Select queue type</Text>
          {Object.keys(types).map(type => {
            return (
              <CustomButton
                key={type}
                title={capitalizeFirstLetter(type)}
                onPress={() => dispatch(onSelection(types[type]))}
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
    marginTop: 10,
    fontSize: 20,
    color: Colors.text,
    alignSelf: 'center',
  },
});

export default QueueSelection;
