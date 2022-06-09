/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Section from '../components/Section';
import Hero from '../components/Hero';
import Colors from '../constants/Colors';

const AppScreen: () => Node = () => {
  return (
    <View style={styles.sectionContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={{backgroundColor: Colors.background}}>
        <Hero iconId={608} level={162} />
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>
        <Section title="Learn More">
          Read the docs to discover what to do next:
        </Section>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingTop: 32,
    backgroundColor: Colors.background,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default AppScreen;
