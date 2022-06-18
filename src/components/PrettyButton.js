import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';

const PrettyButton = ({action, text}): Node => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity onPress={() => dispatch(action)} style={styles.button}>
      <ImageBackground
        source={require('../screens/img/button.png')}
        style={styles.buttonBackground}>
        <Text style={styles.buttonText}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 30,
    alignSelf: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.text,
  },
});

export default PrettyButton;
