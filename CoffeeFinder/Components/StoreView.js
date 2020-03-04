import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import yelpKey from '../keys.js';
// import GestureRecognizer, {
//   swipeDirections,
// } from 'react-native-swipe-gestures';

export default function StoreView({ route }) {
  const [currentLocation, updateLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [markers, updateMarkers] = useState([
    {
      coordinates: {
        latitude: route.params.shop.coordinates.latitude,
        longitude: route.params.shop.coordinates.longitude,
      },
    },
  ]);

  const makeCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${route.params.shop.display_phone}`;
    } else {
      phoneNumber = `telprompt:${route.params.shop.display_phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const fetch = await axios.get(
        `https://api.yelp.com/v3/businesses/search?location=${route.params.shop.name}&categories=coffee&tea`,
        {
          headers: {
            Authorization: yelpKey,
          },
        },
      );
      const response = await fetch;
      response.data.businesses.map((e) =>
        updateMarkers((markers) => [
          ...markers,
          {
            title: e.name,
            coordinates: {
              latitude: e.coordinates.latitude,
              longitude: e.coordinates.longitude,
            },
          },
        ]),
      );
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const getDirections = () => {
    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          updateLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          if (Platform.OS === 'android') {
            Linking.openURL(
              `google.navigation:q=${position.coords.latitude},${position.coords.longitude}`,
            );
          } else {
            Linking.openURL(
              `maps://app?saddr=${position.coords.latitude},${position.coords.longitude}&daddr=${route.params.shop.coordinates.latitude},${route.params.shop.coordinates.longitude}`,
            );
          }
        },
        (error) => reject(error),
        { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
      );
    }
    getLocation();
  };
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameStyle}>{route.params.shop.name}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: route.params.shop.image_url }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.phone}>
        <TouchableOpacity onPress={() => makeCall()} activeOpacity={0.7}>
          <Text style={styles.phone}>{route.params.shop.display_phone}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.address}>
        {route.params.shop.location.display_address[0] +
          ', ' +
          route.params.shop.location.display_address[1]}
      </Text>
      <SafeAreaView style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={{
            latitude: route.params.shop.coordinates.latitude,
            longitude: route.params.shop.coordinates.longitude,
            latitudeDelta: 0.014,
            longitudeDelta: 0.015,
          }}>
          {markers.map((e, index) => {
            return (
              <MapView.Marker
                key={index}
                coordinate={e.coordinates}
                title={e.title}>
                <View style={styles.markerStyle}></View>
              </MapView.Marker>
            );
          })}
          <MapView.Marker
            coordinate={{
              latitude: route.params.shop.coordinates.latitude,
              longitude: route.params.shop.coordinates.longitude,
            }}
            title={route.params.shop.name}
            onPress={() => getDirections()}
          />
        </MapView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  address: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    margin: 6,
  },
  phone: {
    textAlign: 'center',
    width: '80%',
    padding: 5,
    fontSize: 20,
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    margin: 8,
    textAlign: 'center',
    fontSize: 30,
    color: 'purple',
  },
  mapStyle: {
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 2.2,
    borderRadius: 14,
  },
  imageStyle: {
    borderRadius: 10,
    height: 100,
    width: 100,
  },
  textStyle: {
    textAlign: 'center',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  markerStyle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
});
