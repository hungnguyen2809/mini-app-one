import { createNativeBottomTabNavigator } from '@bottom-tabs/react-navigation';
import React from 'react';
import BookingScreen from '../screens/BookingScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

const Tabs = createNativeBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Booking" component={BookingScreen} />
      <Tabs.Screen name="Setting" component={SettingScreen} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
