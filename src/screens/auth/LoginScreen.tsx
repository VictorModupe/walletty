import React, {useState} from 'react';
import { View, Text, ActivityIndicator, Dimensions, TextInput, Pressable } from 'react-native';
import Animated, { FadeInDown} from 'react-native-reanimated';
import { Button } from '@/src/components/Button';
import {Breaker} from '@/src/components/Breaker';
import {ButtonOutline} from '@/src/components/ButtonOutline';
import {AntDesign} from '@expo/vector-icons';
import {NavigationProp, useNavigation}from "@react-navigation/native";

const {width, height} = Dimensions.get("window");

const LoginScreen =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {navigate: navigateAuth }: NavigationProp<AuthNavigationType>=
        useNavigation();

    return (
        <View className="flex-1">
        {isLoading && (
            <View className="absolute z-50 h-full w-full justify-center items-center">
                <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>


            </View>
        )}
     );
}

export default LoginScreen;