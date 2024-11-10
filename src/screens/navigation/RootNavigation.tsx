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
        <Stack.Navigator>
            {
                session ? (
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
            <Text>
                RootNavigation
            </Text>
        </View>
    </NavigationContainer>
  );
};

export default RootNavigation;

