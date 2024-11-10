import { View, Text } from "react-native";
import React, { useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { useColorScheme } from "nativewind";
import Animated, { FadeInRight } from "react-native-reanimated";
import {Image} from "expo-image";
import { NavigationProp, useNavigation } from "@react-navigation/native";


const SplashScreen =()=>{
    const {colorScheme, toogleColorScheme} = useColorScheme();

    const {navigate}: NavigationProp = useNavigation();

    return (
            <SafeAreaView className="flex=1 justify-center items-center bg-white"></SafeAreaView>
    )
}

export default SplashScreen;
