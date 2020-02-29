import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar() {
  const [value, onChangeText] = React.useState('Boulder, CO');

  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
