import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/screens/navigation/RootNavigation';
import useCacheResources from './hooks/useCacheResources';
import {useUserStore} from "./store/useUserStore";

const App = () => {
  const [session, user] = useUserStore();
  const isLoadingComplete = useCacheResources;
  useEffect(()=> console.log(user, session), [user, session]);
  
  if (!isLoadingComplete){
    return null;
  } 
  
  return (
    <Container>
      <StatusBar style='auto'/>
      <RootNavigation />
    </Container>
  );
};

export default App;

const Container = styled(View)`
  flex: 1;
`;
