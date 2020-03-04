import React from 'react';
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

export default function Shops(props) {
  return (
    <ScrollView style={styles.storeView}>
      {props.stores.map((e, id) => (
        <TouchableOpacity
          key={id}
          onPress={() => props.navigation.navigate('Coffee Shop', { shop: e })}>
          <ImageBackground
            source={{ uri: `${e.image_url}` }}
            key={id}
            style={styles.image}
            imageStyle={{ borderRadius: 10 }}>
            <View style={styles.imageText}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storeView: {
    borderRadius: 20,
  },
  header: {
    marginTop: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 40,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    height: 90,
    margin: 8,
  },
  imageText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  inlay: {
    textShadowColor: '#385B80',
    fontFamily: 'Futura',
    textAlign: 'center',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
});
