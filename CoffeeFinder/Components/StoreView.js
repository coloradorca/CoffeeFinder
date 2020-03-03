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
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import GestureRecognizer, {
//   swipeDirections,
// } from 'react-native-swipe-gestures';

export default function StoreView({ route }) {
  const [currentLocation, updateLocation] = useState({});
  const makeCall = () => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${route.params.shop.display_phone}`;
    } else {
      phoneNumber = `telprompt:${route.params.shop.display_phone}`;
    }
    Linking.openURL(phoneNumber);
  };

  const getDirections = () => {
    // async function getLocation() {
    //   await navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       // console.log(position.coords);
    //       updateLocation({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //       });
    //     },
    //     (error) => console.log(error.message),
    //     { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 },
    //   );
    // }
    // getLocation();
    Linking.openURL(
      `maps://app?saddr=40.0167109,-105.2816441&daddr=${route.params.shop.coordinates.latitude},${route.params.shop.coordinates.longitude}`,
      // `maps://app?saddr=${currentLocation.latitude},${currentLocation.longitude}&daddr=${route.params.shop.coordinates.latitude},${route.params.shop.coordinates.longitude}`,
    );
  };
  console.log('currentlocation in StoreView', currentLocation);
  return (
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
            latitudeDelta: 0.004,
            longitudeDelta: 0.005,
          }}>
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
    // width: 400,
    // height: 200,
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
});
