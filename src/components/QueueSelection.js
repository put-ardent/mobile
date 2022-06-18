import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import CustomButton from './CustomButton';
import {useDispatch} from 'react-redux';

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
          <Text>Looking for queues</Text>
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

export default QueueSelection;
