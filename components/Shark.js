import * as React from 'react';
import { Text, View, StyleSheet, Image, Vibration, Button } from 'react-native';


export default function Shark() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        DO YOU RIDE THE SHARK?!
      </Text>
      <Image style={styles.logo} source={require('../assets/shark.png')} />
      <Button onPress={() => Vibration.vibrate([100,100,100,100], true)} title='SWIM!' />
      <Button onPress={() => Vibration.cancel()} title='STOP!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#E4EAF1',
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2A3C51',
  },
  logo: {
    height: 64,
    width: 64,
  }
});
