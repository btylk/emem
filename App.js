/*import { StatusBar } from 'expo-status-bar';
import React from 'react';*/

import 'react-native-gesture-handler';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from './components/LoadingScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import RegisterScreen from './components/RegisterScreen';
//import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCpfSyHsVNug3HZHwPZkdMRjWfo_Nc15JI",
  authDomain: "phase-auth.firebaseapp.com",
  databaseURL: "https://phase-auth.firebaseio.com",
  projectId: "phase-auth",
  storageBucket: "phase-auth.appspot.com",
  messagingSenderId: "501380340215",
  appId: "1:501380340215:web:cf3c925a63f471303676f2",
  measurementId: "G-5DQBH5GX5T"
};
//initialize firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);

/*export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hurry up!!!</Text>
      <StatusBar style="auto" />
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
});*/
