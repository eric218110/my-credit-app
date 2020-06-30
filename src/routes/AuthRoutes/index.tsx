/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { SignupPage } from '../../pages/Signup';

const AuthStack = createStackNavigator();

export const AuthRoutes: React.FC = () => (
  <React.Fragment>
    <AuthStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerTintColor: '#E6D9CC',
        title: ''
      }}
      initialRouteName={'HomeScreen'}
    >
      <AuthStack.Screen name={'HomeScreen'} component={HomePage} />
      <AuthStack.Screen name={'LoginScreen'} component={LoginPage} />
      <AuthStack.Screen name={'SignupScreen'} component={SignupPage} />
    </AuthStack.Navigator>
  </React.Fragment>
);
