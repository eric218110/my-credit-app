/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/Signup';
import { HomeTab } from '../pages/App/Home';
import { SettingTab } from '../pages/App/Settings';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/index';
import { StatusBar } from 'react-native';
import { MyTabBar } from './TabBarNavigation';

const RootStack = createStackNavigator();

const RootTabNavigator = createBottomTabNavigator();

const AppPage = () => (
  <RootTabNavigator.Navigator tabBar={(props) => <MyTabBar {...props} />}>
    <RootTabNavigator.Screen name={'HomeTab'} component={HomeTab} />
    <RootTabNavigator.Screen name={'SettingTab'} component={SettingTab} />
  </RootTabNavigator.Navigator>
);

export const Routers: React.FC = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor={'#DB975D'} />
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>
        <RootStack.Navigator
          screenOptions={{ headerShown: false }}
          headerMode={'screen'}
          initialRouteName={'AppScreen'}
        >
          <RootStack.Screen name={'HomeScreen'} component={HomePage} />
          <RootStack.Screen name={'LoginScreen'} component={LoginPage} />
          <RootStack.Screen name={'SignupScreen'} component={SignupPage} />
          <RootStack.Screen name={'AppScreen'} component={AppPage} />
        </RootStack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  </React.Fragment>
);
