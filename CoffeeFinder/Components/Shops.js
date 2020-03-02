import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import businessess from '../sampledata/businessess.js';
import axios from 'axios';
import yelpKey from '../keys.js';

export default function Shops({ navigation }) {
  console.log('hi there');
  axios
    .get(
      'https://api.yelp.com/v3/businesses/search?location=boulder&categories=coffee&tea',
      {
        headers: {
          Authorization: yelpKey,
        },
      },
    )
    .then((res) => console.log(res.data.businesses))
    .catch((e) => console.log(e));
  return (
    <ScrollView>
      {businessess.businesses.map((e, id) => (
        <TouchableOpacity
          key={id}
          onPress={() => navigation.navigate('StoreView', { shop: e })}>
          <ImageBackground
            source={{ uri: `${e.image_url}` }}
            key={id}
            style={styles.image}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'rgba(0,0,0,0,.5)',
              }}>
              <Text
                style={[styles.inlay, { backgroundColor: 'transparent' }]}
                key={id}>
                {e.name}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

//example api call

// https://api.yelp.com/v3/businesses/search?location=san-francisco&categories=coffee

// https://api.yelp.com/v3/businesses/search?location=boulder&categories=coffee&tea

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
    borderRadius: 30,
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
    textShadowColor: 'purple',
    textShadowRadius: 20,
  },
});
