import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from "expo-status-bar"
import Animated, { FadeInDown } from 'react-native-reanimated';

const WelcomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 justify-between items-center bg-white'>
      <StatusBar style='auto' />
      
      <View className='w-full px-4 items-center justify-center spac-y-6 h-full'>
      
      {/* Welcome Text */}
      <View className='justify-center items-center'>
        <Animated.Text
        entering={FadeInDown.duration(100).delay(100).springify()}
        className="text-neutral-800 text-3xl font-medium leading-[60px]"
        style={{
          fontFamily:"PlusJakartaSansBold",
        }}
        >
          Welcome
        </Animated.Text>
      </View>
      <View className='w-full justify-start'>
        <Animated.View
        entering={FadeInDown.duration(100).delay(300).springify()}>

        </Animated.View>
      </View>







      </View>
    </SafeAreaView>
  )
}

export default WelcomeScreen;

