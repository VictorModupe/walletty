import { FontAwesome } from '@expo/vector-icons';
import * as font from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from "expo-splash-screen";


export default function useCacheResources(){
    const [isLoadingComplete, setIsLoadingComplete] = useState(false)

    useEffect(() =>{ 
        async function loadResourcesAndDataAsync(){
            try{
                SplashScreen.preventAutoHideAsync();
                await Font.loadAsync()
            }
            catch(e) {}
            finally{}
        }
    }, [] )
}