import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import AddExpense from '../screens/AddExpense';

const Drawer = createDrawerNavigator();
const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={AddExpense} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;