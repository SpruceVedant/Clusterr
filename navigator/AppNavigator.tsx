import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Feed/HomeScreen';
import Home from '../screens/profile-section/Home';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name = "Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name='Profile'
          component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigator;