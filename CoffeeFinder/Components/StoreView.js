import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StoreView({ route }) {
  console.log(route.params.name);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.name.name}</Text>
    </View>
  );
}
