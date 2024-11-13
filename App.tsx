import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import styled from "styled-components/native";
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/screens/navigation/RootNavigation';

const App = () => {
  const [session, setSession] = useState(true);
  
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
