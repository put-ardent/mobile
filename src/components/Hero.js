import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Layout from '../constants/Layout';
import LevelBadge from './LevelBadge';

const Hero = ({iconId, level}): Node => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.round, styles.shaded]}>
          <Image
            source={{
              uri:
                'https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/' +
                iconId +
                '.png',
            }}
            style={styles.round}
            width={Layout.window.width * 0.33}
            height={Layout.window.width * 0.33}
          />
        </View>
        <LevelBadge value={level.toString()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  round: {
    borderRadius: 100,
  },
  shaded: {
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    borderRadius: 100,
    elevation: 3,
  },
  container: {
    alignItems: 'center',
  },
});

export default Hero;
