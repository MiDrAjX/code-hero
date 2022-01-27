import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeroList from '../screens/HeroList';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Screen name="Home" component={HeroList} />
    </Navigator>
  );
}
