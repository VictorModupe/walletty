import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Ionicons} from '@expo/vector-icons'
import HomeNavigation from "./HomeNavigation"
import MarketNavigation from './MarketNavigation'
import SearchNavigation from './SearchNavigation'
import NewsNavigation from './NewsNavigation'
import ProfileNavigation from './ProfileNavigation'


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={
        ({route}) => (
            {
              headerShown: false,
              tabBarIcon: ({focused}) => {
                let IconName;
              }
            }
        )
    }
    >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Market" component={MarketNavigation} />
        <Tab.Screen name="Search" component={SearchNavigation} />
        <Tab.Screen name="News" component={NewsNavigation} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />

     </Tab.Navigator>
  );
};


export default TabNavigation;
