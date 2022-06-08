import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../constants/Colors';

const LevelBadge = ({value}): Node => {
  return (
    <View style={[styles.label, styles.shaded]}>
      <View style={[styles.column, styles.sharpLeft]} />
      <Text style={styles.text}>{value}</Text>
      <View style={[styles.column, styles.sharpRight]} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    backgroundColor: Colors.levelBadge.background,
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: Colors.levelBadge.border,
    borderTopWidth: 2,
    borderBottomColor: Colors.levelBadge.border,
    borderBottomWidth: 2,
    paddingVertical: 0.5,
    transform: [{translateY: -8}],
  },
  shaded: {
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 3,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 3,
  },
  column: {
    backgroundColor: Colors.levelBadge.background,
    width: 16,
    height: 16,
    zIndex: -1,
  },
  sharpLeft: {
    transform: [
      {rotate: '45deg'},
      {translateX: -5},
      {translateY: 8},
      {scale: 1.1},
    ],
    borderLeftColor: Colors.levelBadge.border,
    borderLeftWidth: 2,
    borderBottomColor: Colors.levelBadge.border,
    borderBottomWidth: 2,
  },
  sharpRight: {
    transform: [
      {rotate: '45deg'},
      {translateX: 8},
      {translateY: -5},
      {scale: 1.1},
    ],
    borderTopColor: Colors.levelBadge.border,
    borderTopWidth: 2,
    borderRightColor: Colors.levelBadge.border,
    borderRightWidth: 2,
  },
  text: {
    color: 'white',
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginHorizontal: -20,
  },
});

export default LevelBadge;
