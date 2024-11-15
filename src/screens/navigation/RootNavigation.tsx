import { Text, View } from 'react-native';
import React, {useState} from 'react';
import {
    TransitionPresets, 
    createStackNavigator
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
    const [session, setSession] = useState(true); 
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                animationEnabled: true,
                gestureEnabled:true,
                gestureDirection: "horizontal",
            }}
        >
            {session && session.user ? (
                    <Stack.Screen 
                    name='Home' 
                    component={TabNavigation} 
                    />
                ) : (
                    <Stack.Screen 
                    name='AuthNavigation' 
                    component={AuthNavigation} />
                )
            }
        </Stack.Navigator>
        <View>
          
        </View>
    </NavigationContainer>
  );
};

export default RootNavigation;

