import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import shops from './sampledata/data.js';

export default function App() {
  console.log(shops);
  return (
    <View style={styles.container}>
      {shops.map((e, id) => (
        <Text key={id}>{e}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
