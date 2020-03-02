import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// import GestureRecognizer, {
//   swipeDirections,
// } from 'react-native-swipe-gestures';

export default function StoreView({ route }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.nameStyle}>{route.params.shop.name}</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={{ uri: route.params.shop.image_url }}
          style={styles.imageStyle}
        />
      </View>
      <Text style={styles.textStyle}>{route.params.shop.display_phone}</Text>
      <Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameStyle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'purple',
  },
  mapStyle: {
    // width: Dimensions.get('window').width,
    // height: Dimensions.get('window').height,
    width: 600,
    height: 300,
  },
  imageStyle: {
    height: 200,
    width: 200,
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
