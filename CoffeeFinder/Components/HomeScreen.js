import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import businessess from '../sampledata/businessess.js';
import SearchBar from './SearchBar.js';
import Shops from './Shops.js';
import StoreView from './StoreView.js';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coffee Finder</Text>
      <SearchBar />
      <Shops navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 50,
  },
  image: {
    width: 300,
    height: 100,
    margin: 10,
  },
  inlay: {
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
