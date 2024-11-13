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



const {width, height} = Dimensions.get("window");

const LoginScreen =()=> {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {setUser, setSession} = useUserStore();

    const {navigate: navigateAuth }: NavigationProp<AuthNavigationType> =
        useNavigation();

    async function signInWithEmail() {
        setIsLoading(true);

        try{
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error){
                setIsLoading(false);
                Alert.alert(error.message);
            }
            if (data.session && data.user) setSession(data.session);
            setUser(data.user);
        }   catch (e) {
            console.log(e);
        }
    }

    return (
        <View className="flex-1">
        {isLoading && (
            <View className="absolute z-50 h-full w-full justify-center items-center">
                <View className="h-full w-full justify-center items-center bg-black opacity-[0.45]"></View>


            </View>
        )}
     );
}







































{/*Emall and Password Text Input */} 
    <Animated.View>
    className="py-8 space-y-8" 
    entering={FadeInDown.duration(100).delay(200).springify()}
    >
        
         {/*Email*/} 
         <View className="border-2 border-gray-400 rounded-1g">
          <TextInput 
          className="p-4" 
          onChangeText={(text) => setEmail(text)}
          value={email} 
          placeholder="Email" 
          autoCapitalize="none"
          />
          </View>  
          {/* Password */}
          <View className="border-2 border-gray-480 rounded-1g" />
          <TextInput 
          className="p-4" 
          onChangeText={(text) => setPassword(text)} 
          value={password} 
          placeholder="Password" 
          autoCapitalize="none" 
          />
          </View>
    </Animated.View> 
        {/*  Login Button */}
export default LoginScreen;