import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar(props) {
  const [value, onChangeText] = useState(props.currentLocation);

  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      clearTextOnFocus={true}
      enablesReturnKeyAutomatically={true}
      returnKeyType={'go'}
      onSubmitEditing={() => props.changeLocation(value)}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 50,
    width: 300,
    borderColor: '#639FE0',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
});
