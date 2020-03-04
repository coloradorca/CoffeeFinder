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
  const [currentLocation, updateLocation] = useState('Boulder');

  const changeLocation = (event) => {
    updateLocation(event);
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

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.header}>Coffee Finder</Text>
        <SearchBar
          changeLocation={changeLocation}
          currentLocation={currentLocation}
        />
        <Shops stores={stores} navigation={navigation} />
      </View>
    </ScrollView>
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
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
