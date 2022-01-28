import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HeroList from '../screens/HeroList';
import HeroOverView from '../screens/HeroOverView';

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
      <Screen name="CharacterList" component={HeroList} />
      <Screen name="CharacterOverView" component={HeroOverView} />
    </Navigator>
  );
}
