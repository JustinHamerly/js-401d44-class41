import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import Shark from './components/Shark';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Hello daring traveller...
      </Text>
      <Card>
        <Shark />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#D7FFAB',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2A3C50',
  },
});
