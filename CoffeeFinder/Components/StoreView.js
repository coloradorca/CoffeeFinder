import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// import MapView from 'react-native-maps';

export default function StoreView({ route }) {
  console.log(route.params.shop);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{route.params.shop.name}</Text>
      <View>
        <Image
          style={{
            flex: 1,
            height: 200,
            width: 200,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          source={route.params.shop.image_url}
        />
      </View>
      <Text>{route.params.shop.display_phone}</Text>
      <Text>{route.params.shop.location.display_address}</Text>
      <Text>{route.params.shop.coordinates.latitude}</Text>
      <Text>{route.params.shop.coordinates.longitude}</Text>
      <View>{/* <MapView /> */}</View>
    </View>
  );
}
