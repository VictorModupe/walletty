import React, {useState} from 'react';
import {
    View, 
    Text, 
    ActivityIndicator, 
    Dimensions, 
    TextInput,
    Pressable,
    Alert } from 'react-native';
import Animated, { FadeInDown} from 'react-native-reanimated';
import Button  from '@/src/components/Button';
import Breaker from '@/src/components/Breaker';
import ButtonOutline from '@/src/components/ButtonOutline';
import {AntDesign} from '@expo/vector-icons';
import {NavigationProp, useNavigation}from "@react-navigation/native";
import {supabase} from "@/lib/supabase";
import {useUserStore} from "@/store/useUserStore";

const {width, height} =Dimensions.get("window");

const RegisterScreen =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const {navigate: navigateAuth }: NavigationProp<AuthNavigationType>=
        useNavigation();

    async function signUpWithEmail() {
        setIsLoading(true);
    }
        const {
            data:{session},
            error,
        } = await.supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (!session)
            Alert.alert(
                "Registered Successfully, Check your Inbox for the verification!"
            );

            if (error){
                setIsLoading(false);
            }else {
                setIsLoading(false);
                }
            }
            return (
                <View className="flex-1">
                    {isLoading && (
                    <View className="absolute z-50 h-full w-full justify-center items-center">
                        <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>
                        <View className='absolute'>
                            <ActivityIndicator size="large" color='white' />
                        </View>
                    </View>
                </View>
                )}
             );
}

export default RegisterScreen;