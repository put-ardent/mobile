import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Colors from '../constants/Colors';

const CustomButton = ({onPress, title}): Node => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <ImageBackground
        source={require('../screens/img/button.png')}
        style={styles.buttonBackground}>
        <Text style={styles.buttonText}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    marginTop: 20,
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

export default CustomButton;
