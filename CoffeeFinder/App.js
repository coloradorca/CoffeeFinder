import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Components/HomeScreen.js';

import StoreView from './Components/StoreView.js';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Coffee Finder' component={HomeScreen} />
          <Stack.Screen name='StoreView' component={StoreView} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//example api call

// https://api.yelp.com/v3/businesses/search?location=san-francisco&categories=coffee

// https://api.yelp.com/v3/businesses/search?location=boulder&categories=coffee&tea
