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
          <Stack.Screen
            name='Coffee Finder'
            component={HomeScreen}
            options={{
              title: 'Coffee Finder',
              headerStyle: {
                backgroundColor: '#65A3E6',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Futura',
              },
            }}
          />
          <Stack.Screen
            name='Coffee Shop'
            component={StoreView}
            options={{
              title: 'Coffee Shop',
              headerStyle: {
                backgroundColor: '#65A3E6',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'Futura',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
