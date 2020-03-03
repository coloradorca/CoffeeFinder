import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function SearchBar(props) {
  const [value, onChangeText] = useState(props.currentLocation);

  // console.log('props in Searchbar', props.changeLocation);

  return (
    <TextInput
      style={styles.container}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      clearTextOnFocus={true}
      onSubmitEditing={() => props.changeLocation(value)}
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
