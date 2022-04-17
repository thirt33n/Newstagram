import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigatorBar from './Components/Navbar';
import Homepage from './Pages/HomePage';
import TabNavigations from './Components/Navigations/rootNav';
export default function App() {
  return (
    <View>
      <NavigatorBar />
       <Homepage />
      <StatusBar style="default" backgroundColor = "#C40233" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
