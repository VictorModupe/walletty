import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar"

const WelcomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 justify-between items-center bg-white'>
      <StatusBar style='auto' />
      <View className='w-fill px-4 items-center justify-center spac-y-6 h-full'></View>
      {/* Welcome Text */}
    </SafeAreaView>
  )
}

export default WelcomeScreen;

