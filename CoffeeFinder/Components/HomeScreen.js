import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import SearchBar from './SearchBar.js';
import Shops from './Shops.js';
import StoreView from './StoreView.js';
import axios from 'axios';
import yelpKey from '../keys.js';

export default function HomeScreen({ navigation }) {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLocation, updateLocation] = useState('Portland');

  const changeLocation = (event) => {
    updateLocation(event);
    // console.log(event);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetch = await axios.get(
        `https://api.yelp.com/v3/businesses/search?location=${currentLocation}&categories=coffee&tea`,
        {
          headers: {
            Authorization: yelpKey,
          },
        },
      );
      const response = await fetch;
      setStores(response.data.businesses);
      setIsLoading(false);
    }
    fetchData();
  }, [currentLocation]);
  console.log('stores in HomeScreen', stores);

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.header}>Coffee Finder</Text>
      <SearchBar
        changeLocation={changeLocation}
        currentLocation={currentLocation}
      />
      <Shops stores={stores} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
    backgroundColor: '#F5FCFF',
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
