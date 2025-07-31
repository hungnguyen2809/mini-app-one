import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

const Tabs = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Booking" component={BookingScreen} />
      <Tabs.Screen name="Setting" component={SettingScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
