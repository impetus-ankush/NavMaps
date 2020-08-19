import React from 'react';
import { Image, Platform } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashContainer from './splash/SplashContainer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



export const AuthStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="SplashScreen"  component={SplashContainer} />
      <Stack.Screen name="TNCScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={TNCContainer} />
      <Stack.Screen name="BiometricConsentScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={BiometricConsentContainer} />
      <Stack.Screen name="PreLoginStackScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={PreLoginStack} />
      <Stack.Screen name="NeedHelpScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={NeedHelp} />
      <Stack.Screen name="LauncherScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={Launcher} />
      <Stack.Screen name="ServerConfigScreen" initialParams = {{ EVENT: EVENT.BLOCKED }} component={ServerConfigView} />
    </Stack.Navigator>
  );
  
